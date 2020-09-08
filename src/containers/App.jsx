import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';


const API = 'http://localhost:3000/initalState'


const App = () => {
     const initialState = useInitialState(API);

     return initialState.length === 0 ? <h1>Loading...</h1> : (
          <div>
               <Header />
               <Search />
               {initialState.mylist?.length > 0 && (
                    <Categories title="Mi Lista">
                         <Carousel>
                              <CarouselItem />
                         </Carousel>
                    </Categories>
               )}


               <Categories title="Mas vistos!">

                    <Carousel>
                         {initialState.trends?.map(item =>
                              <CarouselItem key={item.id}{...item} />
                         )
                         }
                    </Carousel>
               </Categories>

               <Categories title="Originales de VideoFlix">
                    <Carousel>
                         {initialState.originals?.map(item =>
                              <CarouselItem key={item.id}{...item} />
                         )
                         }
                    </Carousel>
               </Categories>

               <Footer />


          </div>
     );
};

export default App;
