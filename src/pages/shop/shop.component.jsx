import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionOverView from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverView);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }
    unsuscribeFromSnapShot = null;

    componentDidMount(){    
        const { updateCollections } = this.props    
        // Fetching data from firestore
        const collectionRef = firestore.collection('collections')
        // When data updates or code runs for the first time get us 
        // the collection will send snapshot of the collection objects 
        // array when the code renders
        this.unsuscribeFromSnapShot = collectionRef.onSnapshot(async snapShot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapShot);
            updateCollections(collectionsMap)
            this.setState({ loading: false});
        });
        
    }

    render(){
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route exact path ={`${match.url}`} 
                render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} /> } />
                <Route exact path ={`${match.url}/:collectionId`} 
                render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage)