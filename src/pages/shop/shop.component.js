import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverView from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions'

class ShopPage extends React.Component{
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
        })
        
    }

    render(){
        const { match } = this.props
        return (
            <div className='shop-page'>
                <Route exact path ={`${match.url}`} component={CollectionOverView} />
                <Route exact path ={`${match.url}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage)