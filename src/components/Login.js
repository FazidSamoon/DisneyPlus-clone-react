import React from 'react';
import styled from 'styled-components'

function Login() {
  return(
       <Container>
           <Content>
                <ContentLogoOne src="images/cta-logo-one.svg"/>
                <SignUp>Get all there</SignUp>

                <Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat vel eaque ipsum delectus, ratione eos voluptatem, iste quisquam, repudiandae illo esse cum ipsa sint! Ex quisquam unde ipsa soluta officia.
                </Description>

                <ContentLogoTwo src="images/cta-logo-two.png"/>
           </Content>
       </Container>
    );
}

export default Login;

const Container = styled.div`
    display: flex;
    justify-content: center; 
    
    height: calc(100vh - 70px);
    
    position: relative;


    &:before{
        background-position: top;
        
        background: url("/images/login-background.jpg") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0 ;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        opacity: 0.7;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;   
    justify-content: center; 
    max-width: 650px;
    padding: 80px 40px;
    width: 70%;
   
`

const ContentLogoOne = styled.img`
    
`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    border-radius: 5px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top:8px;
    margin-bottom: 12px;

    &:hover{
        background: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    lign-height: 1.5;
`

const ContentLogoTwo = styled.img`
    width: 100%;
`