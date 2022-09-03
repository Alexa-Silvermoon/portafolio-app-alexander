
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
                        src="images/portfolio/skaterboy.jpg"
                        srcSet="images/portfolio/skaterboy.jpg 1x, 
                                    images/portfolio/skaterboy@2x.jpg 2x"
                        alt=""
                    />
                    </a>
                </div>{" "}
                {/* end folio-item */}
                <div className="column folio-item">
                    <a href="#modal-07" className="folio-item__thumb">
                    <img
                        src="images/portfolio/rucksack.jpg"
                        srcSet="images/portfolio/rucksack.jpg 1x, 
                                    images/portfolio/rucksack@2x.jpg 2x"
                        alt=""
                    />
                    </a>
                </div>{" "}
                {/* end folio-item */}
                <div className="column folio-item">
                    <a href="#modal-08" className="folio-item__thumb">
                    <img
                        src="images/portfolio/sanddunes.jpg"
                        srcSet="images/portfolio/sanddunes.jpg 1x, 
                                    images/portfolio/sanddunes@2x.jpg 2x"
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
                    <img src="images/portfolio/gallery/g-skaterboy.jpg" alt="" />
                    <div className="modal-popup__desc">
                    <h5>Skaterboy</h5>
                    <p>
                        Quisquam vel libero consequuntur autem voluptas. Qui aut vero. Omnis
                        fugit mollitia cupiditate voluptas. Aenean sollicitudin, lorem quis
                        bibendum auctor.
                    </p>
                    <ul className="modal-popup__cat">
                        <li>Branding</li>
                        <li>Product Design</li>
                    </ul>
                    </div>
                    <a href="https://www.behance.net/" className="modal-popup__details">
                    Project link
                    </a>
                </div>
                </div>{" "}
                {/* end modal */}
                <div id="modal-07" hidden="">
                <div className="modal-popup">
                    <img src="images/portfolio/gallery/g-rucksack.jpg" alt="" />
                    <div className="modal-popup__desc">
                    <h5>Rucksack</h5>
                    <p>
                        Odio soluta enim quos sit asperiores rerum rerum repudiandae cum.
                        Vel voluptatem alias qui assumenda iure et expedita voluptatem.
                        Ratione officiis quae.
                    </p>
                    <ul className="modal-popup__cat">
                        <li>Branding</li>
                        <li>Product Design</li>
                    </ul>
                    </div>
                    <a href="https://www.behance.net/" className="modal-popup__details">
                    Project link
                    </a>
                </div>
                </div>{" "}
                {/* end modal */}
                <div id="modal-08" hidden="">
                <div className="modal-popup">
                    <img src="images/portfolio/gallery/g-sanddunes.jpg" alt="" />
                    <div className="modal-popup__desc">
                    <h5>Sand Dunes</h5>
                    <p>
                        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                        lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
                        sem nibh id elit.
                    </p>
                    <ul className="modal-popup__cat">
                        <li>Web Design</li>
                    </ul>
                    </div>
                    <a href="https://www.behance.net/" className="modal-popup__details">
                    Project link
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