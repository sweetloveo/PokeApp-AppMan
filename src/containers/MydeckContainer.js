import { connect } from 'react-redux';
import * as MydeckAction from '../actions/MydeckAction'
import Mydeck from '../components/MydectComponent'
import * as SearchDeckAction from '../actions/searchAction'

function mapStateToProps(state) {
        const cards = state.mydeck
    return{cards}

}
const mapDispatchToProps = {
    deleteFromMyDeck : MydeckAction.deleteFromMyDeck,
    putBacktoSearchDeck : SearchDeckAction.putBacktoSearchDeck
}

export default connect(mapStateToProps,mapDispatchToProps)(Mydeck)

