
import React, { Component } from 'react'
export default class about extends Component {
  render() {
    return (

        <>
            {/* about
                ================================================== */}
            <section id="about" className="s-about target-section">
                <div className="row">
                <div className="column large-3 tab-12">
                    {/* <img className="s-about__pic" src="images/avatars/user-06.jpg" alt="" /> */}
                    <img className="s-about__pic" src="images/avatars/alexan.jpg" alt="" />
                </div>
                <div className="column large-9 tab-12 s-about__content">
                    <h3>Acerca de mí</h3>
                    <p>
                    Soy tecnólogo industrial y de sistemas de información, 
                    mi nivel de inglés es B2 logrado en el Colombo Americano por medido del OOPT, 
                    estudio cursos de programación en Udemy e internet de los cuales he obtenido certificaciones, 
                    nunca me quedo quieto siempre estoy aprendiendo algo, mi objetivo es convertirme en desarrollador Full Stack.
                    </p>
                    <hr />
                    <div className="row s-about__content-bottom">
                    <div className="column w-1000-stack">
                        <h3>Detalles de Contacto</h3>
                        <p>
                        Christian Alexander Martínez Millán <br />
                        Colombia <br />
                        {/* Mountain View, CA 94043 US <br /> */}
                        <a href="tel:+1975432345">+57 3195653718</a> <br />
                        <a href="mailto:#0">alexander.marti.mil@gmail.com</a>
                        </p>
                    </div>
                    <div className="column w-1000-stack">
                        <a href="#0" className="btn btn--download">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            style={{
                            fill: "rgba(0, 0, 0, 1)",
                            transform: "",
                            msFilter: ""
                            }}
                        >
                            <path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" />
                            <path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" />
                        </svg>
                        Descargar CV
                        </a>
                    </div>
                    </div>
                </div>
                </div>{" "}
                {/* end row */}
            </section>{" "}
            {/* end s-about */}
        </>

    )
  }
}