import React, { useState, useEffect } from 'react';

import Search from '../components/Search';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import Carousel from '../components/Carousel';

import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';


const API = 'http://localhost:3000/initialState'


const Home = () => {
     const initialState = useInitialState(API);

     return initialState.length === 0 ? <h1>Loading...</h1> : (
          <>
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


          </>
     );
};

export default Home;
