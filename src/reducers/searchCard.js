
export default function(state={searchCard:{cards:[{weaknesses:[],attacks:[]}],searchText:''},loading:false},action) {

    switch(action.type) {
        case'START_FETCH_CARD':

            return {
                ...state,
                loading:true
            }
        case'FILTER_CARD':
            return {
                loading:false
            }
        case'SUCCESS_FETCH_CARD':
            return {
                searchCard : action.allCard,
                loading:false,
                searchText:''
            }
        case'DELETE_FROM_SEARCH':
            state.searchCard.cards.splice(action.number,1)
            return {
                ...state,
                error:true
            }
            case'PUT_BACK':
            state.searchCard.cards.push(action.card)
            return {
                ...state,
                error:true
            }
        case'SEARCHING':

            return {
                ...state,
                searchText:action.data
            }
        case'ERROR_FETCH_CARD':
            return {
                ...state,
                error:true
            }
        default:
            return state
    }
}
