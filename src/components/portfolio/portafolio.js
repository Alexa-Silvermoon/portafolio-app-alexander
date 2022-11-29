
import React, { Component } from 'react'
export default class portafolio extends Component {
  render() {
    return (

        <>
            {/* portfolio
                ================================================== */}
            <section id="portfolio" className="s-portfolio target-section">
                <div className="row s-portfolio__header">
                <div className="column large-12">
                    <h3>Mis Proyectos</h3>
                </div>
                </div>
                <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
                <div className="column folio-item">
                    <a href="#modal-01" className="folio-item__thumb">
                    <img
                        /* src="images/portfolio/droplet.jpg"
                        srcSet="images/portfolio/droplet.jpg 1x, 
                                    images/portfolio/droplet@2x.jpg 2x"
                        alt="" */
                        src="images/portfolio/01-webserver.jpg"
                        srcSet="images/portfolio/01-webserver.jpg 1x, 
                                    images/portfolio/01-webserver@2x.jpg 2x"
                        alt=""
                    />
                    </a>
                </div>{" "}
                {/* end folio-item */}
                <div className="column folio-item">
                    <a href="#modal-02" className="folio-item__thumb">
                    <img
                        src="images/portfolio/02-restserver.jpg"
                        srcSet="images/portfolio/02-restserver.jpg 1x, 
                                    images/portfolio/02-restserver@2x.jpg 2x"
                        alt=""
                    />
                    </a>
                </div>{" "}
                {/* end folio-item */}
                <div className="column folio-item">
                    <a href="#modal-03" className="folio-item__thumb">
                    <img
                        src="images/portfolio/03-gifexpertapp.jpg"
                        srcSet="images/portfolio/03-gifexpertapp.jpg 1x, 
                                    images/portfolio/03-gifexpertapp@2x.jpg 2x"
                        alt=""
                    />
                    </a>
                </div>{" "}
                {/* end folio-item */}
                <div className="column folio-item">
                    <a href="#modal-04" className="folio-item__thumb">
                    <img
                        src="images/portfolio/04-todo-app-yarn-react.jpg"
                        srcSet="images/portfolio/04-todo-app-yarn-react.jpg 1x, 
                                    images/portfolio/04-todo-app-yarn-react@2x.jpg 2x"
                        alt=""
                    />
                    </a>
                </div>{" "}
                {/* end folio-item */}
                <div className="column folio-item">
                    <a href="#modal-05" className="folio-item__thumb">
                    <img
                        src="images/portfolio/05-tasklist-js.jpg"
                        srcSet="images/portfolio/05-tasklist-js.jpg 1x, 
                                    images/portfolio/05-tasklist-js@2x.jpg 2x"
                        alt=""
                    />
                    </a>
                </div>{" "}
                {/* end folio-item */}
                <div className="column folio-item">
                    <a href="#modal-06" className="folio-item__thumb">
                    <img
                        src="images/portfolio/06-heroes-spa.jpg"
                        srcSet="images/portfolio/06-heroes-spa.jpg 1x, 
                                    images/portfolio/06-heroes-spa@2x.jpg 2x"
                        alt=""
                    />
                    </a>
                </div>{" "}
                {/* end folio-item */}
                <div className="column folio-item">
                    <a href="#modal-07" className="folio-item__thumb">
                    <img
                        src="images/portfolio/07-breaking-bad-quotes.jpg"
                        srcSet="images/portfolio/07-breaking-bad-quotes.jpg 1x, 
                                    images/portfolio/07-breaking-bad-quotes@2x.jpg 2x"
                        alt=""
                    />
                    </a>
                </div>{" "}
                {/* end folio-item */}
                <div className="column folio-item">
                    <a href="#modal-08" className="folio-item__thumb">
                    <img
                        src="images/portfolio/08-kakeguri.jpg"
                        srcSet="images/portfolio/08-kakeguri.jpg 1x, 
                                    images/portfolio/08-kakeguri@2x.jpg 2x"
                        alt=""
                    />
                    </a>
                </div>{" "}
                {/* end folio-item */}
                <div className="column folio-item">
                    <a href="#modal-09" className="folio-item__thumb">
                    <img
                        src="images/portfolio/09-redux-toolkit.jpg"
                        srcSet="images/portfolio/09-redux-toolkit.jpg 1x, 
                                    images/portfolio/09-redux-toolkit@2x.jpg 2x"
                        alt=""
                    />
                    </a>
                </div>{" "}
                {/* end folio-item */}
                <div className="column folio-item">
                    <a href="#modal-10" className="folio-item__thumb">
                    <img
                        src="images/portfolio/10-journal-app.jpg"
                        srcSet="images/portfolio/10-journal-app.jpg 1x, 
                                    images/portfolio/10-journal-app@2x.jpg 2x"
                        alt=""
                    />
                    </a>
                </div>{" "}
                <div className="column folio-item">
                    <a href="#modal-11" className="folio-item__thumb">
                    <img
                        src="images/portfolio/11-calendar-app.jpg"
                        srcSet="images/portfolio/11-calendar-app.jpg 1x, 
                                    images/portfolio/11-calendar-app@2x.jpg 2x"
                        alt=""
                    />
                    </a>
                </div>{" "}
                {/* end folio-item */}
                </div>{" "}
                {/* end folio-list */}
                {/* Modal Templates Popup
            =========================================================== */}
                <div id="modal-01" hidden="">
                <div className="modal-popup">
                    <img src="images/portfolio/gallery/01-g-webserver.jpg" alt="" />
                    <div className="modal-popup__desc">
                    <h5>Webserver en NodeJS</h5>
                    <p>
                        Este es un websever que funciona con dotenv, express, hbs, nodemon. Tiene una fotos mias con motos de fondo
                    </p>
                    {/* <ul className="modal-popup__cat">
                        <li>Branding</li>
                        <li>Product Design</li>
                    </ul> */}
                    </div>
                    {/* <a href="https://www.behance.net/" className="modal-popup__details"> */}
                    <a href="https://webserver-curso-node-alexander.herokuapp.com/" className="modal-popup__details">
                    Ir al Proyecto
                    </a>
                </div>
                </div>{" "}
                {/* end modal */}
                <div id="modal-02" hidden="">
                <div className="modal-popup">
                    <img src="images/portfolio/gallery/02-g-restserver.jpg" alt="" />
                    <div className="modal-popup__desc">
                    <h5>Restserver en NodeJS</h5>
                    <p>
                        Este es un restserver basico con get, post, put, delete, para usuarios, productos y categorias, incluye google sign in, pruebas en postman
                    </p>
                    {/* <ul className="modal-popup__cat">
                        <li>Branding</li>
                    </ul> */}
                    </div>
                    <a href="https://restserver-curso-node-alexande.herokuapp.com/" className="modal-popup__details">
                    Ir al Proyecto
                    </a>
                </div>
                </div>{" "}
                {/* end modal */}
                <div id="modal-03" hidden="">
                <div className="modal-popup">
                    <img src="images/portfolio/gallery/03-g-gifexpertapp.jpg" alt="" />
                    <div className="modal-popup__desc">
                    <h5>GifExpertApp</h5>
                    <p>
                        Esta es una API para traer gifs de GIPHY.COM usando react yarn vite
                    </p>
                    {/* <ul className="modal-popup__cat">
                        <li>Product Design</li>
                    </ul> */}
                    </div>
                    <a href="https://gif-expert-app-alexander.netlify.app/" className="modal-popup__details">
                    Ir al Proyecto
                    </a>
                </div>
                </div>{" "}
                {/* end modal */}
                <div id="modal-04" hidden="">
                <div className="modal-popup">
                    <img src="images/portfolio/gallery/04-g-todo-app-yarn-react.jpg" alt="" />
                    <div className="modal-popup__desc">
                    <h5>Todo App Yarn React</h5>
                    <p>
                        Esta es una app para listar tareas por hacer, está hecha con react yarn
                    </p>
                    {/* <ul className="modal-popup__cat">
                        <li>E-Commerce</li>
                    </ul> */}
                    </div>
                    <a href="https://todo-app-yarn-react-alexander.netlify.app/" className="modal-popup__details">
                    Ir al Proyecto
                    </a>
                </div>
                </div>{" "}
                {/* end modal */}
                <div id="modal-05" hidden="">
                <div className="modal-popup">
                    <img src="images/portfolio/gallery/05-g-tasklist-js.jpg" alt="" />
                    <div className="modal-popup__desc">
                    <h5>Task List - JS - GitHub Pages</h5>
                    <p>
                        Esta es una app para listar tareas por hacer, está hecha con JavaScript y montada en GitHub Pages
                    </p>
                    {/* <ul className="modal-popup__cat">
                        <li>Product Design</li>
                    </ul> */}
                    </div>
                    <a href="https://alexa-silvermoon.github.io/todo-js/" className="modal-popup__details">
                    Ir al Proyecto
                    </a>
                </div>
                </div>{" "}
                {/* end modal */}
                <div id="modal-06" hidden="">
                <div className="modal-popup">
                    <img src="images/portfolio/gallery/06-g-heroes-spa.jpg" alt="" />
                    <div className="modal-popup__desc">
                    <h5>Heroes SPA</h5>
                    <p>
                        Esta es una SPA para mostrar heroes de Marvel o DC usando react yarn vite, react-router-dom, 
                        query-string, login y logout, protegiendo rutas privadas, recuerda la ultima pagina visitada, 
                        pruebas en componentes con jest y mocks, funcionado en netlify - pages y produccion, 
                        icono svg personalizado.
                    </p>
                    {/* <ul className="modal-popup__cat">
                        <li>Branding</li>
                        <li>Product Design</li>
                    </ul> */}
                    </div>
                    <a href="https://heroes-spa-react-alexander.netlify.app/#/login" className="modal-popup__details">
                    Ir al Proyecto
                    </a>
                </div>
                </div>{" "}
                {/* end modal */}
                <div id="modal-07" hidden="">
                <div className="modal-popup">
                    <img src="images/portfolio/gallery/07-g-breaking-bad-quotes.jpg" alt="" />
                    <div className="modal-popup__desc">
                    <h5>Breaking Bad Quotes</h5>
                    <p>
                        API de Breaking Bad, frases icónicas de la serie original
                    </p>
                    {/* <ul className="modal-popup__cat">
                        <li>Branding</li>
                        <li>Product Design</li>
                    </ul> */}
                    </div>
                    <a href="https://breaking-bad-quotes-alexander.netlify.app/" className="modal-popup__details">
                    Ir al Proyecto
                    </a>
                </div>
                </div>{" "}
                {/* end modal */}
                <div id="modal-08" hidden="">
                <div className="modal-popup">
                    <img src="images/portfolio/gallery/08-g-kakeguri.jpg" alt="" />
                    <div className="modal-popup__desc">
                    <h5>BlackJack Kakeguri</h5>
                    <p>
                        Este es un juego de blackjack hecho con JavaScript, HTML y CSS
                    </p>
                    {/* <ul className="modal-popup__cat">
                        <li>Web Design</li>
                    </ul> */}
                    </div>
                    <a href="https://blackjack-kakeguri.netlify.app/" className="modal-popup__details">
                    Ir al Proyecto
                    </a>
                </div>
                </div>{" "}
                {/* end modal */}
                <div id="modal-09" hidden="">
                <div className="modal-popup">
                    <img src="images/portfolio/gallery/09-g-redux-toolkit.jpg" alt="" />
                    <div className="modal-popup__desc">
                    <h5>Practicas en Redux y RTK Query</h5>
                    <p>
                        Esta es una practica con Redux ToolKit y RTK Query, contiene pokemonAPI sencilla y todos sencillos
                    </p>
                    {/* <ul className="modal-popup__cat">
                        <li>Web Design</li>
                    </ul> */}
                    </div>
                    <a href="https://practice-redux-rtk-alexander.netlify.app/" className="modal-popup__details">
                    Ir al Proyecto
                    </a>
                </div>
                </div>{" "}
                {/* end modal */}
                <div id="modal-10" hidden="">
                <div className="modal-popup">
                    <img src="images/portfolio/gallery/10-g-journal-app.jpg" alt="" />
                    <div className="modal-popup__desc">
                    <h5>Journal App</h5>
                    <p>
                        Esto es un Journal App usando React Yarn Vite, con Material UI MUI y react-router-dom para proteger las rutas, 
                        contiene seguridad con un login y register muy potente gracias a su useForm y todo su auth, 
                        validaciones con firebase y animaciones con Animate.css, creacion de notas en Cloud Firestore, 
                        subida de imagenes a cloudinary, CRUD completo
                    </p>
                    {/* <ul className="modal-popup__cat">
                        <li>Web Design</li>
                    </ul> */}
                    </div>
                    <a href="https://journal-app-react-alexander-martinez.netlify.app/" className="modal-popup__details">
                    Ir al Proyecto
                    </a>
                </div>
                </div>{" "}
                {/* end modal */}
                <div id="modal-11" hidden="">
                <div className="modal-popup">
                    <img src="images/portfolio/gallery/11-g-calendar-app.jpg" alt="" />
                    <div className="modal-popup__desc">
                    <h5>Calendar App</h5>
                    <p>
                        Esta es una app calendario usando React Yarn Vite, contiene react-router-dom para proteger las rutas, 
                        tiene un CRUD completo para las notas de los eventos, tiene frontend y backend en NodeJS, 
                        la BD es con Mongo.
                    </p>
                    {/* <ul className="modal-popup__cat">
                        <li>Web Design</li>
                    </ul> */}
                    </div>
                    <a href="https://calendarapp-react-alexander.netlify.app/auth/login" className="modal-popup__details">
                    Ir al Proyecto
                    </a>
                </div>
                </div>{" "}
                {/* end modal */}
            </section>{" "}
            {/* end s-portfolio */}
        </>

    )
  }
}