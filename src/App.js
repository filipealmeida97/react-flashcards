import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';
/*import {initializeApp} from 'firebase/app';
import 'firebase/database';

import { DB_CONFIG } from './Config/Firebase/db_config.js';*/

class App extends Component {
  constructor(props){
    super(props);

    /*this.app = initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('cards');*/
    this.updateCard = this.updateCard.bind(this);

    this.state = {
      "cards": [
        {
            "id": 1,
            "eng": "to be",
            "han": "是",
            "pin": "shì",
            "pt": "ser"
        },
        {
            "id": 2,
            "eng": "not",
            "han": "不",
            "pin": "bù",
            "pt": "não"
        },
        {
            "id": 3,
            "eng": "person",
            "han": "人",
            "pin": "rén",
            "pt": "pessoa"
        },
        {
            "id": 4,
            "eng": "we",
            "han": "我们",
            "pin": "wǒmen",
            "pt": "nós"
        },
        {
            "id": 5,
            "eng": "at",
            "han": "在",
            "pin": "zài",
            "pt": "no"
        },
        {
            "id": 6,
            "eng": "country",
            "han": "国",
            "pin": "guó",
            "pt": "país"
        },
        {
            "id": 7,
            "eng": "middle",
            "han": "中",
            "pin": "zhōng",
            "pt": "meio"
        },
        {
            "id": 8,
            "eng": "have",
            "han": "有",
            "pin": "yǒu",
            "pt": "ter"
        },
        {
            "id": 9,
            "eng": "that",
            "han": "那",
            "pin": "nà",
            "pt": "naquela/naquele"
        },
        {
            "id": 10,
            "eng": "to go",
            "han": "去",
            "pin": "qù",
            "pt": "ir"
        },
        {
            "id": 11,
            "eng": "to study, to learn",
            "han": "学",
            "pin": "xué",
            "pt": "estudar, aprender"
        },
        {
            "id": 12,
            "eng": "to use",
            "han": "用",
            "pin": "yòng",
            "pt": "usar"
        },
        {
            "id": 13,
            "eng": "face, surface",
            "han": "面",
            "pin": "miàn",
            "pt": "rosto, superfície"
        },
        {
            "id": 14,
            "eng": "work",
            "han": "工",
            "pin": "gōng",
            "pt": "trabalhar"
        },
        {
            "id": 15,
            "eng": "speech",
            "han": "话",
            "pin": "huà",
            "pt": "discurso"
        },
        {
            "id": 16,
            "eng": "very, quite",
            "han": "很",
            "pin": "hěn",
            "pt": "muito, bastante"
        },
        {
            "id": 17,
            "eng": "good",
            "han": "好",
            "pin": "hǎo",
            "pt": "bom"
        },
        {
            "id": 18,
            "eng": "bright, clear",
            "han": "明",
            "pin": "míng",
            "pt": "brilhante, claro"
        },
        {
            "id": 19,
            "eng": "year",
            "han": "年",
            "pin": "nián",
            "pt": "ano"
        },
        {
            "id": 20,
            "eng": "king",
            "han": "王",
            "pin": "wáng",
            "pt": "rei"
        }
    ],
      currentCard: {} 
    }
  }


  componentWillMount(){
    //console.log(this.app.database().ref().child('cards'))
    const currentCards = this.state.cards;

    /*this.database.on('child_added', snap => {
      currentCards.push({
        id: snap.key,
        eng:snap.val().eng,
        han:snap.val().han,
        pin:snap.val().pin,
        pt:snap.val().pt
      })
      })*/
      

    
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })

  }

  getRandomCard(currentCards){
    var card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return(card);
  }

  updateCard(){
    const currentCards = this.state.cards;

    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  render() {
    return (
      <div className="App">
        <div className='cardRow'>
          
          <Card 
                han={this.state.currentCard.han}
                pin={this.state.currentCard.pin}
                pt={this.state.currentCard.pt}
                eng={this.state.currentCard.eng}
          />
        </div>
        <div className='buttonRow'>
          <DrawButton drawCard={this.updateCard}/>
        </div>
      </div>
    );
  }
}

export default App;
