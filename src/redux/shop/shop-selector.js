import {createSelector} from 'reselect'
const selectShop=state=>state.shop;

export const selectCollectios=createSelector(
    [selectShop],
    shop=>shop.collections
)

export const selectCollectionForPreview=createSelector(
    [selectCollectios],
    collections=>Object.keys(collections).map(key=>collections[key])
)

export const selectCollection=collectionUrlParam=>
createSelector(
    [selectCollectios],
    collections=>collections[collectionUrlParam]
)