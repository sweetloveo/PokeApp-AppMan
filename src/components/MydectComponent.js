import React, { Component } from 'react';
import { Container, Row, Col ,Button} from 'reactstrap';
import { Progress } from 'reactstrap';
import smile from '../cute.png'


class Mydeck extends Component {
    constructor(props){
        super(props)

    }
    happinessMethod(hp,damage,weaknesses){
        let sum = 0;
        let happiness;

        if (damage != undefined) {
            damage.map((data) => {
                let char = data.damage

                sum = sum + Number(char.replace(/[^0-9\.]+/g, ""))
            })
            happiness = ((hp / 10) + (sum / 10) + 10 - ((weaknesses != undefined))) / 5
        }
        else{
            happiness = 0
        }

        let i =1
        let answer=[]
        while(i<=happiness&&i<=5){
            answer.push(<img style={{width:'20px'}} src={smile}/>)
            i++
        }
        return answer
    }
    render(){
        return (<div>
            <Container>
                <Row>

            {this.props.cards.cards.map((data,i)=>{
                return(

                        <Col md={{ size: 5}} style={{marginTop:'10px',marginLeft:'40px',backgroundColor: '#d5d6dc'}}>
                    <Col md="2"><img style={{height:'150px'}} src={data.imageUrl}/></Col>
                    <Col md="9"><p>{data.name}</p>
                        <p>{data.hp}</p>
                        <p>HP:  <Progress color="warning" value={data.hp} /></p>
                        <p>STR:  <Progress color="warning" value={data.convertedRetreatCost*50}/></p>
                        <p>WEAK:  <Progress color="warning" value={(data.weaknesses!=undefined)*100}/></p></Col>
                        <p>HAPPINESS: {this.happinessMethod(data.hp,data.attacks,data.weaknesses)}</p>
                    <Col md="1" onClick={()=>{this.props.putBacktoSearchDeck(data)
                        this.props.deleteFromMyDeck(i)}}><Button color="danger">Delete</Button></Col>
                        </Col>



               )
            })}

                </Row>

            </Container>
        </div>)

    }
}
export default Mydeck