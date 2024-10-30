import React from 'react';
import Hero from './Hero';
import Delivery from './Delivery';
import Toppicks from './Toppicks';
import OurFoods from './OurFoods';
const Home = ({handleAdd})=>{
    return<>
    <div>
        <Hero />
        <Delivery />
        <Toppicks handleAdd={handleAdd}/>
        <OurFoods />
    </div>
    </>
}

export default Home;