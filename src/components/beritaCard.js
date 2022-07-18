import React, {Component} from 'react';
import {Link} from 'react-router-dom';


const beritaCard = props => {
    const berita = props.berita;


    return(
        <div className="content-box">
            <img src= {berita.gambar}/>
            <div className ="text-box">
                <tr>
                    <td>{berita.judul}</td>
                    <td>{berita.desc}</td>
                    <td>{berita.konten}</td>
                </tr>
            </div>

        </div>
)
}

export default beritaCard;