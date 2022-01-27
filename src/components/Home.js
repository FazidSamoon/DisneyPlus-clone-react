import React, {useEffect} from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';
import { doc, onSnapshot, collection, query, where, getDocs  } from "firebase/firestore";
import { useDispatch } from "react-redux"
import { setMovies } from "../features/movie/movieSlice"

function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
      const q =query(collection(db, "movies"));
      const unsub = onSnapshot(q, (snapshot) => {
      const tempMovies = snapshot.docs.map((data) => {
        return { id: data.id, ...data.data()}
      })
      dispatch(setMovies(tempMovies));
    })

    
  
  }, [])

  return (
    <Container>
        <ImageSlider />
        <Viewers />
        <Movies />
    </Container>
  )
}

export default Home;

const Container = styled.main`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vh + 5px);
    position:relative;

    &:before{
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0 ;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
    
`