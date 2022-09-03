
import React, { Component } from 'react'
export default class contactus extends Component {
  render() {
    return (

        <>
            {/* contact
                ================================================== */}
            <section id="contact" className="s-contact target-section">
                <div className="row s-contact__header">
                <div className="column large-12">
                    <h3 className="section-header-allcaps">Hola aquí Alexander…</h3>
                </div>
                </div>
                <div className="row s-contact__content">
                <div className="column large-7 medium-12">
                    <h4 className="huge-text">
                        Espero te haya gustado mis proyectos hasta ahora, se que no es mucho, pero por algún lado se empieza.
                    </h4>
                </div>
                <div className="column large-4 medium-12">
                    <div className="row contact-infos">
                    <div className="column large-12 medium-6 tab-12">
                        <div className="contact-block">
                        <h5 className="contact-block__header">Email</h5>
                        <p className="contact-block__content">
                            {/* <a className="mailtoui" href="mailto:sayhello@ceevee.com"> */}
                            <a className="mailtoui" href="mailto:alexander.marti.mil@gmail.com">
                            alexander.marti.mil@gmail.com
                            </a>
                        </p>
                        </div>{" "}
                        {/* end contact-block */}
                    </div>
                    <div className="column large-12 medium-6 tab-12">
                        <div className="contact-block">
                        <h5 className="contact-block__header">Telefono</h5>
                        <p className="contact-block__content">
                            {/* <a href="tel:+1975432345">+197 543 2345</a> */}
                            <a href="tel:+573195653718">+57 319 565 37 18</a>
                        </p>
                        </div>{" "}
                        {/* end contact-block */}
                    </div>
                    <div className="column large-12">
                        <a
                        href="mailto:alexander.marti.mil@gmail.com"
                        className="mailtoui btn btn--primary h-full-width"
                        >
                        Contáctame
                        </a>
                    </div>
                    </div>{" "}
                    {/* end contact-infos */}
                </div>
                </div>{" "}
                {/* s-contact__content */}
            </section>{" "}
            {/* end s-contact */}
        </>

    )
  }
}