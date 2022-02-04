import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'
import BuildIcon from '@mui/icons-material/Build';

export default function Home() {
  return (
    <div>

        <Head />

        <Header />

        <Hero />

            <div className="main-container container">

                <main>
                    <section className="recent-articles article-list">
                        <h2 className="text-center" style={{maxWidth: "800px", marginRight: "auto", marginLeft: "auto"}}>We serve and witness to the community, through high-quality honest auto repair and maintenance.</h2>
                        


                        <About className="about-section" />
                        
                        <h2 className="text-center" style={{maxWidth: "800px", marginRight: "auto", marginBottom: "0", marginLeft: "auto"}}>Our Serives</h2>

                        <p style={{marginLeft: "auto", marginRight: "auto", textAlign: "center", fontSize: "18px", maxWidth: "900px"}}>We provide essential car repair services for community members in need. For services not listed below, we will work with our trusted network to get people the services they need.</p>
                        

                        <ul className="services-list">
                            <li className="article-card card">
                                <article className="container">
                                    <header>
                                    <BuildIcon style={{transform: "scale(2.5)", transformOrigin: "center center"}} />
                                    </header>
                                    <h3>General Maintenance</h3>
                                    <p>We provide general maintenance and basic repairs for families in need. Our knowledgeable volunteers will also help teach people how to provide basic care for their cars to avoid expensive repairs.</p>
                                </article>
                            </li>
                <li className="article-card card">
                  <article className="container">
                      <header>
                        <i className="fas fa-oil-can"></i>
                      </header>
                      <h3>Oil Changes</h3>
                      <p>For some families, even the cost of an oil change can make or break their budget. We provide oil changes and a top-off of essential engine fluids. We also give people the knowledge they need to keep up with their oil changes at home.</p>
                      
                  </article>
                </li>
                            <li className="article-card card">
                                <article className="container">
                                    <header>
                                    <i className="fas fa-tools"></i>
                                    </header>
                                    <h3>Brake Repair</h3>
                                    <p>Even simple brake repairs can cost families a lot of time and money. We provide almost any type of brake maintenance and repairs. Thanks to our donors, we offer this service to families in need for a fraction of the true cost.</p>
                                   
                                </article>
                            </li>
                            <li className="article-card card">
                                <article className="container">
                                    <header>
                                    <i className="fas fa-handshake"></i>
                                    </header>
                                    <h3>Honest References</h3>
                                    <p>We are planning to expand the services we offer. However, we have made connections with honest repair shops in the area that offer fair prices and quality services.</p>
                                  
                                </article>
                            </li>
                        </ul>
                    </section>

                    <section>
                    <h2 className="text-center" style={{maxWidth: "800px", marginTop: "0", marginRight: "auto", marginBottom: "0", marginLeft: "auto"}}>Support</h2>

                    <p style={{marginLeft: "auto", marginRight: "auto", textAlign: "center", fontSize: "18px", maxWidth: "900px"}}>We are always looking for generous families and individuals to partner with us as we change lives one crucial car repair at a time. We are not ready to ask for donations from the public at this time. However, please visit us again soon for information on supporting our ministry.</p>

                    </section>
   
                    
                </main>

                
            </div>

            <Footer />

      
    </div>
  )
}
