import { Container, Carousel, Info, Delimiter } from "./Services.stye";
import { useRef } from "react";

const Services = () => {
  const carousel = useRef(null);
  const handleAdvanceRight = (e) => {
    console.log(carousel);
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const handleAdvanceLeft = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  return (
    <Container id="service">
      <h2>
        <span>|</span> Nossos Serviços <span>|</span>
      </h2>
      <Delimiter>
        <Carousel ref={carousel}>
          <div>
            <Info>
              <div>
                <h4>Soluções de Inteligência Artificial (IA)</h4>
              </div>

              <div className="image service-1-image"></div>
              <p>
                Nossas soluções de IA transformam dados em insights poderosos.
                Desenvolvemos chatbots intuitivos que melhoram a interação com
                os clientes, análise de dados avançada para informar decisões
                estratégicas e automação de tarefas para aumentar a eficiência
                operacional.
              </p>
              <button>
                CONHEÇA MAIS<i className="bi bi-arrow-bar-right"></i>
              </button>
            </Info>
          </div>
          <div>
            <Info>
              <div>
                <h4>Desenvolvimento de Realidade Virtual (VR)</h4>
              </div>

              <div className="image service-2-image"></div>
              <p>
                Criamos experiências imersivas que transcendem o comum. Nossa
                expertise em desenvolvimento de VR e AR permite que você
                mergulhe seus clientes em mundos virtuais envolventes ou
                enriqueça o ambiente real com elementos digitais interativos.
              </p>
              <button>
                CONHEÇA MAIS<i className="bi bi-arrow-bar-right"></i>
              </button>
            </Info>
          </div>
          <div>
            <Info>
              <div>
                <h4>Consultoria em Tecnologia da Informação</h4>
              </div>

              <div className="image service-3-image"></div>
              <p>
                Oferecimento de orientação estratégica e soluções tecnológicas
                para otimizar os processos de negócios.
              </p>
              <button>
                CONHEÇA MAIS<i className="bi bi-arrow-bar-right"></i>
              </button>
            </Info>
          </div>
          <div>
            <Info>
              <div>
                <h4>Integração de Sistemas</h4>
              </div>

              <div className="image service-4-image"></div>
              <p>
                Integração harmoniosa de sistemas existentes para melhorar a
                eficiência operacional e a comunicação interna.
              </p>
              <button>
                CONHEÇA MAIS<i className="bi bi-arrow-bar-right"></i>
              </button>
            </Info>
          </div>
          <div>
            <Info>
              <div>
                <h4>Manutenção e Suporte Técnico</h4>
              </div>

              <div className="image service-5-image"></div>
              <p>
                Oferecimento de serviços contínuos de manutenção, atualizações e
                suporte técnico para garantir o funcionamento ininterrupto dos
                sistemas.
              </p>
              <button>
                CONHEÇA MAIS<i className="bi bi-arrow-bar-right"></i>
              </button>
            </Info>
          </div>
          <div>
            <Info>
              <div>
                <h4>Automação de Processos de Negócios</h4>
              </div>

              <div className="image service-6-image"></div>
              <p>
                Desenvolvimento de soluções de automação para melhorar a
                eficiência, reduzir erros e agilizar os fluxos de trabalho.
              </p>
              <button>
                CONHEÇA MAIS<i className="bi bi-arrow-bar-right"></i>
              </button>
            </Info>
          </div>
        </Carousel>
        <button onClick={handleAdvanceLeft} className="btn-left">
          <i className="bi bi-chevron-left"></i>
        </button>
        <button onClick={handleAdvanceRight} className="btn-right">
          <i className="bi bi-chevron-right"></i>
        </button>
      </Delimiter>
    </Container>
  );
};

export default Services;
