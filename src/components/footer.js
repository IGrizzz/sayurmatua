import React, { Component } from 'react';
import styled from 'styled-components';
import waImg from '../assets/walogo.png'
import emailImg from '../assets/emaillogo.png'


const Container = styled.footer`
background-color: #1C8621;
display:flex;
justify-content: center;
font-family: Raleway;
color: white;
position: sticky    ;  
width: 100%;
height:300px;
top: 100vh;
`
const ContentBox = styled.div`
margin: 32px;`

const Navigasi = styled.div`
display: flex;
flex-direction:column;
padding-top: 11px;
`

const Hubungikami = styled.div`
display:flex;`

const Contacticon = styled.img`
width:20px;
height: 20px;
padding:13px;
`

const Link = styled.a`
color:white;
padding-left: none;
margin: 5px;
text-decoration: none;
`

function Footer (){
    return(
        
        <Container className="container">
           
            <ContentBox className="hubungiKami">
                <h1>Hubungi Kami</h1>
                <Hubungikami>
                    <Contacticon src={waImg} alt="walogo"></Contacticon>
                    <p>082273287550</p>
                </Hubungikami>
                <Hubungikami>
                    <Contacticon src={emailImg} alt="emailogo"></Contacticon>
                    <p>desasayurmatua@gmail.com</p>
                </Hubungikami>

            </ContentBox>
            <ContentBox className="mitraKami">
                <h1>Mitra Kami</h1>
                <Hubungikami>
                    <p>Universitas Sumatera Utara</p>
                </Hubungikami>

            </ContentBox>
            <ContentBox className="Navigasi">
                <h1>Navigasi</h1>
                <Navigasi>
                    <Link href="#">Halaman Utama</Link>
                    <Link href="#">Program Desa</Link>
                    <Link href="#">Berita Desa</Link>
                    <Link href="#">Profil Desa</Link>   
                    <Link href="#">Pengajuan Online</Link>
                </Navigasi>

            </ContentBox>
            <div>
                <div className="Youtube"></div>
                <div className="Instagram"></div>
                <div className="Facebook"></div>
            </div>
        </Container>
    )
}

export default Footer;