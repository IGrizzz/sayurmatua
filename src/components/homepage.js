import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import kmLogo from '../assets/kmLogo.svg';
import logoUSU from '../assets/logousu.svg';
import bgsm from '../assets/bgsm.svg';
import bgpo from '../assets/bgpo.svg';
import bgp from '../assets/bgp.svg';
import bgb from '../assets/bgb.svg';
import bgpu from '../assets/bgpu.svg';
import Footer from './footer';

const PageContainer = styled.div`
display: flex;
min-height: 100vh;
flex-direction: column;`

const MainContent = styled.div`
flex: 1;`

const Container = styled.div`
display: flex;
justify-content: center;    
`

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
column-gap: 18px;
padding-left:1000px; `

const ButtonLogo = styled.a`
cursor:pointer;
background: url(${kmLogo}) no-repeat;
height:110px;
width:145px;
border: none;
align-items: center; 
margin-top: 20px;
`

const ButtonLogo1 = styled(ButtonLogo)`
background: url(${logoUSU}) no-repeat;
height:90px;
width:90px;
margin-top: 12px;
`

const Mini = styled.p`
font-family: Raleway;
font-size: 30px;
width: 300px;
padding-left: 5px;
`

const Med = styled(Mini)`
font-size: 40px;
width: 550px;
padding-left: 0.2em;
  
`

const Homepage = styled(Link)`
cursor: pointer;
margin: 15px;
padding-left: 24px;
padding-top: 32px;
color: white;
border: none;
background: url(${bgsm}) no-repeat;
width: 806px;
height: 429px;
font-family: Raleway;
font-weight: bold;
font-size: 60px;
border-radius: 30px;
text-decoration: none;`

const SHomepage = styled(Homepage)`
background: url(${bgpo}) no-repeat;
font-size: 50px;
width: 386px;
height: 429px;`

const ESHomepage = styled(Homepage)`
background: url(${bgp}) no-repeat;
font-size: 50px;
width: 386px;
height: 293px;
`

const ESHomepage1 = styled(ESHomepage)`
background: url(${bgb}) no-repeat;`

const ESHomepage2 = styled(ESHomepage)`
background: url(${bgpu}) no-repeat;`

class HomePage extends Component {
    render(){
        return(
            <PageContainer>
                <MainContent>
                    <ButtonContainer>
                        <ButtonLogo1 href="https://www.usu.ac.id">
                        </ButtonLogo1>
                        <ButtonLogo href="https://kampusmerdeka.kemdikbud.go.id/" />
                    </ButtonContainer>
                    <Container>
                        <Homepage to="/">
                                <Mini>Program Desa Binaan</Mini>
                                Sayur Matua
                                <br></br>
                                <br></br>
                                <Med>Universitas Sumatera Utara</Med>
                        </Homepage>
                        <SHomepage to ="/pengajuan">Pengaduan Online</SHomepage>
                    
                    </Container>
                    <Container>
                        <ESHomepage to="/program">Program</ESHomepage>
                        <ESHomepage1 to="/berita">Berita</ESHomepage1>
                        <ESHomepage2 to="/produk-unggulan">Produk Unggulan</ESHomepage2>
                    </Container>
                </MainContent>   
                <Footer/>
            </PageContainer>
        )
    }
}


export default HomePage;