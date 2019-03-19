import { connect } from 'react-redux';
import * as searchAction from '../actions/searchAction'
import App from '../components/App'

function mapStateToProps(state) {
        const allCard = state.searchCard
        const mydeck = state.mydeck
        const searchTextEnter = state.searchCard.searchText

        return{allCard,mydeck,searchTextEnter}

}
const mapDispatchToProps = {
    fetching : searchAction.startFetching,
    searchText:searchAction.searchText
}

export default connect(mapStateToProps,mapDispatchToProps)(App)

