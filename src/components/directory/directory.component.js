import React from 'react';
import { connect } from 'react-redux';
import { directorySections } from '../../redux/directory/directory.selector';
import { createStructuredSelector} from 'reselect';

import './directory.scss';
import MenuItem from '../menu-items/menu-item.component';


const Directory = ({ sections }) => ( 
    <div className="directory-menu">
        {sections.map(({ id, ...otherSectionprops }) => (
            <MenuItem key={id} {...otherSectionprops} />))}
    </div> )        
    
const mapStateToProps = createStructuredSelector({
    sections : directorySections
})
   


export default connect(mapStateToProps)(Directory);