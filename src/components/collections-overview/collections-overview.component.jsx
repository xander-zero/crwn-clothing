import React from 'react'
import CollectionPreview from '../preview-collection/preview-collection.component'
import {connect} from'react-redux'
import {selectCollectios} from '../../redux/shop/shop-selector'
import {createStructuredSelector} from 'reselect'
const CollectionsOverview=({collections})=>(
    <div className='    '>
             {collections.map(({id,...otherCollectionProps})=>(
                    <CollectionPreview key={id} {...otherCollectionProps} /> 
                ))}
    </div>
)
const mapStateToProps=createStructuredSelector({
    collections:selectCollectios
})
export default connect(mapStateToProps)(CollectionsOverview);