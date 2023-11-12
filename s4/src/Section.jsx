import './css/style.css';
import lixo2 from "./images/lixo2.jpg"
import pic1 from "./images/pic1.jpg"
import pic2 from "./images/pic2.jpg"
import pic3 from "./images/pic3.jpg"
import pic4 from "./images/pic4.jpg"

function Section() {

  return (
    <>
      <section id="feature">
        <div className="tittle-text">
            <p>PROPOSTA</p>
            <h1>Smart Cities</h1>
        </div>
        <div className="feature-box">
            <div className="features">
                <h1>Smart Cities</h1>
                <div className="features-desc">
                    <div className="feature-icon">
                        <i className='fa fa-building-o'></i>
                    </div>
                    <div className="feature-text">
                        <p>As chamadas "smart cities" surgem como uma alternativa promissora, com o uso de tecnologias inovadoras e soluções inteligentes para gerenciar recursos e serviços urbanos.</p>
                    </div>
                </div>

                <h1>IBM</h1>
                <div className="features-desc">
                    <div className="feature-icon">
                        <i className='fa fa-check-square'></i>
                    </div>
                    <div className="feature-text">
                        <p>Com a combinação de tecnologias de internet das coisas (IoT), big data e inteligência artificial, a IBM tem criado soluções inovadoras para o monitoramento e gestão de recursos como energia, água, transporte e resíduos.</p>
                    </div>
                </div>

                <h1>Projeto</h1>
                <div className="features-desc">
                    <div className="feature-icon">
                        <i className='fa fa-microchip'></i>
                    </div>
                    <div className="feature-text">
                        <p>No projeto será abordada a importância da sustentabilidade nas cidades e como as smart cities podem contribuir para um modelo de desenvolvimento mais sustentável. Buscamos enfrentar os desafios da urbanização e promover um futuro mais sustentável e resiliente para as cidades.</p>
                    </div>
                </div>
            </div>

            <div className="features-img">
                <img src={lixo2} alt="?" />
            </div>
        </div>
    </section>

    <section id="service">
        <div className="tittle-text">
            <p>PROBLEMA</p>
            <h1>O Lixo</h1>
        </div>

        <div className="service-box">
            <div className="single-service">
                <img src={pic1} alt="" />
                <div className="overlay"></div>
                <div className="service-desc">
                    <h3>Problema dos Aterros</h3>
                    <hr />
                    <p>Muitos dos aterros já chegaram ao limite de sua capacidade e grande parte estão localizados em áreas próximas a comunidades carentes, o que acaba gerando diversos problemas ambientais e de saúde pública.</p>
                </div>
            </div>
            <div className="single-service">
                <img src={pic2} alt="" />
                <div className="overlay"></div>
                <div className="service-desc">
                    <h3>Contaminação</h3>
                    <hr />
                    <p>A presença de óleos, solventes, gorduras, metais pesados e ácidos, entre outros resíduos contaminantes, alteram e poluem as propriedades físicas e químicas e do solo, além de contaminar a água, podendo representar um grande risco à população.</p>
                </div>
            </div>
            <div className="single-service">
                <img src={pic3} alt="" />
                <div className="overlay"></div>
                <div className="service-desc">
                    <h3>Falta da Reciclagem</h3>
                    <hr />
                    <p>Outro fator que contribui para o problema é a falta de uma cultura de reciclagem nas cidades, e a falta de uma tecnologia que poderia auxiliar em tais necessidades.</p>
                </div>
            </div>
            <div className="single-service">
                <img src={pic4} alt="" />
                <div className="overlay"></div>
                <div className="service-desc">
                    <h3>Poluição</h3>
                    <hr />
                    <p>Os resíduos sólidos abandonados em lixões a céu aberto deterioram a qualidade do ar que respiramos por causa da queima e da fumaça, além de vetores (insetos, roedores e pequenos animais) que ocasionam incômodos e podem disseminar doenças.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="testimonial">
        <div className="tittle-text">
            <p>SOLUÇÃO</p>
            <h1>Green Sense</h1>
        </div>
        <div className="testimonial-row">
            <div className="testimonial-col">
                <p>Será possível haver uma coleta seletiva mais eficiente, com a instalação de sensores em latas de lixo para monitorar a quantidade e o tipo de resíduo descartado. Esses sensores podem transmitir informações em tempo real para um sistema central, que pode gerenciar a coleta de resíduos com mais eficiência e reduzir os custos.</p>
            </div>
            <div className="testimonial-col">
                <p>O uso de tais sensores inteligentes podem ser estendidos além da coleta seletiva para monitorar todo o ciclo de vida do lixo. Eles podem ser instalados em contêineres de lixo, caminhões de coleta, estações de transferência e aterros sanitários para monitorar a quantidade e o tipo de resíduo em cada etapa do processo.</p>
            </div>
            <div className="testimonial-col">
                <p>Com a execução do projeto, será possível superar as barreiras que os resíduos de lixo trazem para a evolução das cidades e o bem estar de suas populações.</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Section
