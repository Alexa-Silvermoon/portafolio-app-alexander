
import React, { Component } from 'react'
export default class resume extends Component {
  render() {
    return (

        <>
            {/* resume
                ================================================== */}
            <section id="resume" className="s-resume target-section">
                <div className="row s-resume__section">
                <div className="column large-3 tab-12">
                    <h3 className="section-header-allcaps">Estudios</h3>
                </div>
                <div className="column large-9 tab-12">
                    <div className="resume-block">
                    <div className="resume-block__header">
                        <h4 className="h3">Educación</h4>
                        <p className="resume-block__header-meta">
                        <span>Tecnólogo Industrial y en Sistemas de Información</span>
                        {/* <span className="resume-block__header-date">
                            August 2019 - Present
                        </span> */}
                        </p>
                    </div>
                    <p>
                        ● Secundaria: Colegio Parroquial San Juan Bautista - 2012.<br></br>
                        ● Tecnología: FCECEP – Tecnología en Sistemas de Información - 2018.<br></br>
                        ● Tecnología: FCECEP – Tecnología en Industrial - 2020.
                    </p>
                    </div>{" "}
                    {/* end resume-block */}
                    <div className="resume-block">
                    <div className="resume-block__header">
                        <h4 className="h3">Lenguajes</h4>
                        {/* <p className="resume-block__header-meta">
                        <span>UI/UX Designer</span>
                        <span className="resume-block__header-date">
                            August 2016 - July 2019
                        </span>
                        </p> */}
                    </div>
                    <p>
                        ● Nativo: español.<br></br>
                        ● Extranjero: English – American English School. B1 - 2019.<br></br>
                        ● Extranjero: English – Centro Cultural Colombo Americano. B2 OOPT - 2019.
                    </p>
                    </div>{" "}
                    {/* end resume-block */}
                </div>
                </div>{" "}
                {/* s-resume__section */}
                <div className="row s-resume__section">
                <div className="column large-3 tab-12">
                    <h3 className="section-header-allcaps">Conocimiento y Certificaciones</h3>
                </div>
                <div className="column large-9 tab-12">
                    <div className="resume-block">
                    <div className="resume-block__header">
                        <h4 className="h3">Habilidades</h4>
                        {/* <p className="resume-block__header-meta">
                        <span>Master in Graphic Design</span>
                        <span className="resume-block__header-date">April 2015</span>
                        </p> */}
                    </div>
                    <p>
                        ● Lenguajes: JavaScript, NodeJS.<br></br>
                        ● Conocimientos: Html, NPM, Yarn, Postman, GitHub, Heroku, Google Cloud API, Cloudinary, Giphy, Netlify, Pruebas Jest, Excel, RailWay.<br></br>
                        ● Bases de Datos: MongoDB Compass & Atlas, MySql - TablePlus.<br></br>
                        ● SDK: Visual Studio Code + Extensiones.<br></br>
                        ● Librerías: React con Yarn Vite.<br></br>
                        ● Habilidades analíticas: creatividad, trabajo en equipo, adaptabilidad, responsabilidad, habilidad para aprender y puntualidad.
                    </p>
                    </div>{" "}
                    {/* end resume-block */}
                    <div className="resume-block">
                    <div className="resume-block__header">
                        <h4 className="h3">Certificaciones, Seminarios y Cursos</h4>
                        {/* <p className="resume-block__header-meta">
                        <span>B.A. Degree in Graphic Design</span>
                        <span className="resume-block__header-date">August 2012</span>
                        </p> */}
                    </div>
                    <p>
                        ● Sistema Integral de Lectura Inteligente (SILI) - 2017.<br></br>
                        ● Introducción a desarrollo de aplicaciones hibridas - 2018.<br></br>
                        ● Forex trading Tac Trade Company - 2020.<br></br>
                        ● Duolingo.<br></br>
                        ● Grasshopper Learn to Code - JavaScript.<br></br>
                        ● Udemy - Programación Para Principiantes - 2021.<br></br>
                        <a href="https://www.udemy.com/certificate/UC-83876379-4096-4bf0-a5fc-eed00ee332a3/">● Udemy - JavaScript Moderno: Guía para dominar el lenguaje - 2022.</a><br></br>
                        <a href="https://www.sololearn.com/certificates/CT-9WCXRZHM">● Sololearn Certificado JavaScript - 2022.</a><br></br>
                        <a href="https://www.udemy.com/certificate/UC-23d06f5b-6d46-425f-9aae-f6b84b0216a3/">● Udemy - Node: De cero a experto - 2022.</a><br></br>
                        <a href="https://www.udemy.com/certificate/UC-8b3b09db-c3c7-4f29-9884-32a48b48c816/">● Udemy - Excel Completo - Desde Principiante Hasta Avanzado - 2022.</a><br></br>
                        <a href="https://www.udemy.com/certificate/UC-10143042-c8cc-4f15-9cbd-fd6c1cd169fa/">● Udemy – React: De cero a experto – (Hooks y MERN) - 2022.</a><br></br>
                    </p>
                    </div>{" "}
                    {/* end resume-block */}
                </div>
                </div>{" "}
                {/* s-resume__section */}
                <div className="row s-resume__section">
                <div className="column large-3 tab-12">
                    <h3 className="section-header-allcaps">Lenguajes de Programación</h3>
                </div>
                <div className="column large-9 tab-12">
                    <div className="resume-block">
                    <p>
                        Estos son los lenguajes de programación que actualmente conozco y que iré mejorando.
                    </p>
                    <ul className="skill-bars-fat">
                        <li>
                        <div className="progress percent30" />
                        <strong>HTML</strong>
                        </li>
                        <li>
                        <div className="progress percent30" />
                        <strong>CSS</strong>
                        </li>
                        <li>
                        <div className="progress percent60" />
                        <strong>Javascript</strong>
                        </li>
                        <li>
                        <div className="progress percent60" />
                        <strong>NodeJS</strong>
                        </li>
                        <li>
                        <div className="progress percent60" />
                        <strong>React</strong>
                        </li>
                        <li>
                        <div className="progress percent25" />
                        <strong>Python</strong>
                        </li>
                        <li>
                        <div className="progress percent5" />
                        <strong>PHP</strong>
                        </li>
                        
                    </ul>
                    </div>{" "}
                    {/* end resume-block */}
                </div>
                </div>{" "}
                {/* s-resume__section */}
            </section>{" "}
            {/* end s-resume */}
        </>

    )
  }
}