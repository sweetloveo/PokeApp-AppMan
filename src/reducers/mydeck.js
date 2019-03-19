
export default function(state={cards:[]},action) {

    switch(action.type) {
        case'ADD_TOMYDECK':
            state.cards.push(action.card)
            return {
                ...state,

            }
        case'DELETE_FROMMYDECK':
            state.cards.splice(action.number,1)
            return {
                ...state,
            }
        default:
            return state
    }
}
