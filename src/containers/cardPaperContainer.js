import { connect } from 'react-redux';
import * as searchAction from '../actions/searchAction'
import * as MydeckAction from '../actions/MydeckAction'
import card from '../components/cardPaperComponent'


const mapDispatchToProps = {
    AddToMyDeck : MydeckAction.AddingToMydeck,
    deleteSearchCard: searchAction.deleteFromSearch

}

export default connect(null,mapDispatchToProps)(card)

