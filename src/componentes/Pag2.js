
import './Pag1.css';
import React from 'react';
import logo from "../extras/logo.jpg"
   export default function Pag2() {
    return(
    <body className='fondo'>
    <section className="contenedor1">
        <article class="s1-textos">
            <h1 class="titilo">BIENVENIDOS</h1>
            <hr></hr>
            <p>Bienvenidos a nuestra Tienda en Línea de Artículos Tecnológicos. Nos complace tenerlos aquí, explorando nuestra cuidadosa selección de productos de última generación.Nuestro objetivo es ofrecerles una experiencia de compra fácil y emocionante. Disfruten de la conveniencia de descubrir lo último en tecnología desde la comodidad de su hogar. ¡Gracias por elegirnos y bienvenidos al futuro tecnológico!</p>
        </article>
        </section>
        <section className="contenedor2">
        <article class="s2-relleno">
            <h1>¿QUIENES SOMOS? </h1>
            <p>Nosotros somos una Tienda en Línea de Artículos Tecnológicos, tu destino confiable para lo último en tecnología. Nos enorgullece ofrecerte una cuidada selección de productos de vanguardia que transformarán tu experiencia digital. Con un enfoque en la calidad y la innovación, estamos comprometidos a brindarte una experiencia de compra excepcional. Explora nuestra tienda en línea y descubre el futuro tecnológico con nosotros</p>
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

