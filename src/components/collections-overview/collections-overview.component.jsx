import React from 'react'
import CollectionPreview from '../preview-collection/preview-collection.component'
import {connect} from'react-redux'
import {selectCollectionForPreview} from '../../redux/shop/shop-selector'
import {createStructuredSelector} from 'reselect'
const CollectionsOverview=({collections})=>(
    <div className='collections-overviw'>
             {collections.map(({id,...otherCollectionProps})=>(
                    <CollectionPreview key={id} {...otherCollectionProps} /> 
        ))}
    </div>
)
const mapStateToProps=createStructuredSelector({
    collections:selectCollectionForPreview
})
export default connect(mapStateToProps)(CollectionsOverview);