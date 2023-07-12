import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Look at these awesome locations users have been to!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
            src="img-2.jpg"
            text="The Eiffel Tower"
            label="France"
            path="/services/activity"
            ></CardItem>
            <CardItem 
            src="img-3.jpg"
            text="The Colosseum"
            label="Italy"
            path="/services/activity"
            ></CardItem>
          </ul>
          <ul className='cards__items'>
            <CardItem 
            src="img-4.jpg"
            text="The Grand Canyon"
            label="Arizona"
            path="/services/activity"
            ></CardItem>
            <CardItem 
            src="img-5.jpg"
            text="The Mysterious Stonehenge"
            label="England"
            path="/services/activity"
            ></CardItem>
            <CardItem 
            src="img-6.jpg"
            text="The Pyramids!"
            label="Egypt"
            path="/services/activity"
            ></CardItem>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;