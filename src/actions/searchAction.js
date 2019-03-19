export const startFetching = () => ({
    type:'START_FETCH_CARD'
});
export const deleteFromSearch = (i) => ({
    type:'DELETE_FROM_SEARCH',
    number: i
});export const putBacktoSearchDeck = (data) => ({
    type:'PUT_BACK',
    card:data
});
export const searchText = (data) => ({
    type:'SEARCHING',
    data:data
});

