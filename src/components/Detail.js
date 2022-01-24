import React from 'react';
import styled from 'styled-components';


function Detail() {
  return (
    <Container>
        <Background>
          <img src='http://images6.fanpop.com/image/photos/40000000/The-Finest-Hours-Banner-movie-trailers-40025062-1200-638.jpg' />
        </Background>

        <ImgTitle>
          <img src='https://static.rogerebert.com/redactor_assets/pictures/55d20036592cb034eb000156/TFH_LOGO_06_19_15.INT.jpg' />
        </ImgTitle>

        <Controls>
            <PlayButton>
              <img src='images/play-icon-black.png' />
              <span>PLAY</span>
            </PlayButton>
              
            <TrailerButton>
              <img src='images/play-icon-white.png' />
              <span>Trailer</span>
            </TrailerButton>

            <Add>
              <span>+</span>
            </Add>

            <GroupWatch>
                <img src='/images/group-icon.png' />
            </GroupWatch>
        </Controls>

        <SubTitle>
          2018 . 7m . Family. Action
        </SubTitle>

        <Description>
          sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
        </Description>
    </Container>
  );
}

export default Detail;


const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vh + 5px);
  position : relative;
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left:0;
  bottom:0;
  right:0;
  z-index: -1;
  opacity: 0.8;

  img{
    width:100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImgTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;

  img {
    width:100%;
    height:100%;
    object-fit: cover;
  }

`

const Controls = styled.div`
  display:flex;
  align-items:center;
`

const PlayButton = styled.div`
  background: rgb(249,249,249);
  border-radius: 15px;
  padding: 0px 25px;
  margin-right: 22px;
  
  display: flex;
  align-items: center;
  color: black;
  font-weight: 600;
  height: 56px;
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover{
    background: rgb(198,198,198);
  }
`

const TrailerButton = styled(PlayButton)`
  background: rgba(0,0,0,0.3);
  border : 1px solid rgb(249,249,249);
  color:rgb(249,249,249);
  text-reansform: uppercase;
`

const Add = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  background: rgba(0,0,0,0.6);
  
  width: 44px;
  height: 44px;
  
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  margin-right:16px;

  span{
    font-size : 30px;
    color: white;
    
  }
`

const GroupWatch = styled(Add)`
background: rgb(0,0,0);
`

const SubTitle = styled.div`
    color : rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`
const Description = styled.div`
    
    line-height: 1.4;
    font-size: 20px;
    
    margin-top: 16px;
    color : rgb(249,249,249);
`