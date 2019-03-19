import React, { Component } from 'react'
import ReactModal from 'react-modal'
import '../App.css'
import Mydeck from '../containers/MydeckContainer'
import CardPaper from'../containers/cardPaperContainer'
import {Button,Input } from 'reactstrap';



const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            showModal: false
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    componentDidMount(){
        this.props.fetching()
    }

    addingClick(){
        this.handleOpenModal()
    }
    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
        this.props.searchText('')
    }
    handleChange(e){
        this.props.searchText(e.target.value)
    }


    render() {
    return (
      <div className="App">

          <ReactModal
              isOpen={this.state.showModal}
              contentLabel="onRequestClose Example"
              onRequestClose={this.handleCloseModal}
              className="Modal"
              overlayClassName="Overlay"
          >
              <Input onChange={this.handleChange} placeholder="Find Pokemon.." />
              {this.props.allCard.searchCard.cards.map((data,i)=>{
                  return(<CardPaper damage={data.attacks} searchText={this.props.searchTextEnter} color={COLORS} key={i} data={data} number={i}/>)
              })}
          </ReactModal>


          <div style={{height:'660px',  overflow:'auto'}}>
          <Mydeck />

          </div>
          <div style={{marginTop: '0px',
              backgroundColor:'red',
              height:'55px'}}><div style={{display: 'flex',
              justifyContent: 'center'}}><Button color="danger" onClick={()=>{this.addingClick()}}>ADDING CARD{' '}</Button>          {
              this.state.showModal
                  ? (
                      <Button style={{marginLeft:'100px'}} color="danger" onClick={()=>{
                          this.handleCloseModal()
                      }}>Close</Button>
                  )
                  : null
          }</div></div>


      </div>
    )
  }
}

export default App
