import React from 'react';
import styled from 'styled-components';

function Movies() {
  return (
  <Container>
      <h1>Recommended for you</h1>

      <Content>
        <Wrap>
            <img src='https://theubj.com/wp-content/uploads/2021/12/spid.jpg' />
        </Wrap>

        <Wrap>
            <img src='https://theubj.com/wp-content/uploads/2021/12/spid.jpg' />
        </Wrap>

        <Wrap>
            <img src='https://theubj.com/wp-content/uploads/2021/12/spid.jpg' />
        </Wrap>

        <Wrap>
            <img src='https://theubj.com/wp-content/uploads/2021/12/spid.jpg' />
        </Wrap>

        <Wrap>
            <img src='https://theubj.com/wp-content/uploads/2021/12/spid.jpg' />
        </Wrap>

        <Wrap>
            <img src='https://theubj.com/wp-content/uploads/2021/12/spid.jpg' />
        </Wrap>

        <Wrap>
            <img src='https://theubj.com/wp-content/uploads/2021/12/spid.jpg' />
        </Wrap>

        <Wrap>
            <img src='https://theubj.com/wp-content/uploads/2021/12/spid.jpg' />
        </Wrap>

        <Wrap>
            <img src='https://theubj.com/wp-content/uploads/2021/12/spid.jpg' />
        </Wrap>
      </Content>
  </Container>
  );
}

export default Movies;

const Container =styled.div`

`

const Content= styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5 , minmax(0, 1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    cursor: pointer;

    img{
        width: 100%;
        height: 100%;
        object-fit:cover;
    }

    &:hover{
        transform: scale(1.05);
        border-color: rgba(249,249,249, 0.8);
    }
`