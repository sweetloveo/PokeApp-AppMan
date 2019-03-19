import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Progress } from 'reactstrap';
import smile from '../cute.png'

class Card extends Component {
    constructor(props) {
        super(props)
        let sum = 0;
        let happiness;
        if (this.props.data.attacks != undefined) {
            this.props.data.attacks.map((data) => {
                let char = data.damage

                sum = sum + Number(char.replace(/[^0-9\.]+/g, ""))
            })
            happiness = ((this.props.data.hp / 10) + (sum / 10) + 10 - ((this.props.data.weaknesses != undefined))) / 5
            this.state = {happiness: happiness}
            console.log(sum)
        }
        else{
            this.state = {happiness: 0}
        }
    }

    happinessMethod(){
        let i =1
        let answer=[]
        while(i<=this.state.happiness&&i<=5){
            answer.push(<img style={{width:'20px'}} src={smile}/>)
            i++
        }
        return answer
    }

    render(){
        if(this.props.data.name.includes(this.props.searchText)||this.props.searchText == ''||this.props.data.type.includes(this.props.searchText)) {


            return (<div>

                <Container><Row style={{backgroundColor: 'papayawhip'}}>
                    <Col md="3"><img style={{height: '200px'}} src={this.props.data.imageUrl}/></Col>
                    <Col md="8"><p>{this.props.data.name}</p>
                        <p>{this.props.data.hp}</p>
                        <p>HP: <Progress color="warning" value={this.props.data.hp}/></p>
                        <p>STR: <Progress color="warning" value={this.props.data.convertedRetreatCost * 50}/></p>
                        <p>WEAK: <Progress color="warning" value={(this.props.data.weaknesses != undefined) * 100}/></p>
                        <p>HAPPINESS: {this.happinessMethod()}</p>

                    </Col>
                    <Col md="1" onClick={() => {
                        this.props.deleteSearchCard(this.props.number)
                        this.props.AddToMyDeck(this.props.data)
                    }}><Button color="primary">Add</Button></Col>
                        </Row>

                </Container>
                <Container><Row>
                    <Col md="12">{' '}<br/></Col>
                </Row>

                </Container>

            </div>)
        }
        else{
return(<div></div>)
        }

    }
}
export default Card