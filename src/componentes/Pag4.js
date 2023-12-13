import './Pag2.css';
import React from 'react';
import logo from "../extras/logo.jpg"
import img1 from "../extras/img1.jpg"
import img2 from "../extras/img2.jpg"
import img3 from "../extras/img3.jpg"
export default function Pag4() {
    return(
    <body className='fondo2'>
    <section className="contenedor1">
        <article class="s1-textos">
            <h1 class="titilo">DESCUENTOS </h1>
            <hr></hr>
        </article>
        <article class="s1-extra">
        <p>
            Smartphones
            </p>
            <p>Últimos modelos de smartphones</p>
            </article>
        <article class="s2-img">
            <aside class="s2-contenido">
                <div class="contenido-img" >
                    <img src={img1}alt='img1'></img>
                </div>
                <div>
                    <h2>iPhone 13 Series</h2>
                    <p>blanco estelar, medianoche, azul,rosa, verde</p>
                    <p>Frente de Ceramic Shield</p>
                    <p>Diseño de aluminio con parte posterior de vidrio</p>
                </div>
            </aside>
            <aside class="contenigo_img">
                <div clas >
                    <img src={img2}alt='img2'></img>
                </div>
                <div>
                    <h2>Samsung Galaxy S21 Series</h2>
                    <p> Están diseñados para revolucionar el video y la fotografía </p>
                    <p >Ambos modelos tienen todas las características que necesitas: 64 MP, </p>
                    <p>el chip más rápido y una batería increíble que dura todo el día.</p>
                    <p>Tu mundo será realmente épico.</p>
                </div>
            </aside>
            <aside class="contenigo_img">
                <div clas >
                    <img src={img3} alt='img3'></img>
                </div>
                <div>
                    <h2>Xiaomi Mi 11 Series</h2>
                    <p>Xiaomi 11 Lite 5G NE 8+128 GB Mint Green — Verde</p>
                </div>
            </aside>
        </article>
    </section>
    <section className="contenedor3">
        <hr></hr>
        <div class="s3-contenido">
        <div class="s3-logo">
            <img src={logo}alt='logo'></img>
        </div>
        <div class="s3-texto">
            <h3>Estamos en :</h3>
            <p>Av.confraternidad inter</p>
            <p>Nº 144 ,independencia ,huaraz</p>
            <p>telf 055 6354785</p>
            <a href='#'>info@aranibar</a>
        </div>
        </div>
        <footer class="footer">
            &copy;<a href='#' class="autor">DAYSI CONDORI CHABI,2023</a>
            <a href='#' class="politicas">politicas de privacidad
            </a>
        </footer>
    </section>
    
    </body>
    );
    }

