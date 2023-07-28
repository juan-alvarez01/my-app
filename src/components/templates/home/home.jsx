import React from 'react';
import { useSearchParams } from "react-router-dom";
import MainLayout from '../../layout/MainLayout'
import CharacterList from '../../cards/CardList';
import '../../cards/Cards.css'

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const serch = searchParams.get('q');

  return (
      <MainLayout>
          <CharacterList/>
      </MainLayout>
  )   
}; 
    export default Home;