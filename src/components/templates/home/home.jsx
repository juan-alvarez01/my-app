import React from 'react';
import { useSearchParams } from "react-router-dom";
import MainLayout from '../../layout/MainLayout'
import CharacterList from '../../cards/CardList';



const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const serch = searchParams.get('q');

  return (
      <MainLayout>
          <div>Index página {serch} </div>
          <input type="search" onInput={
              (e) =>
              {
                  searchParams.set('q', e.target.value);
                  searchParams.set('d', Date.now());
                  setSearchParams(searchParams);
              }
          } />
         
          <CharacterList/>
      </MainLayout>
  )   

}; 
    export default Home;