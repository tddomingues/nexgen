import { Container, Box, Image } from "./AboutMe.style";

const AboutMe = () => {
  return (
    <Container id="aboutMe">
      <Box>
        <h2>
          <span>|</span> Sobre Nós <span>|</span>
        </h2>
        <p> 
          Na <span>NexGen Software</span>, estamos comprometidos em moldar o futuro por meio
          da tecnologia. Com uma equipe apaixonada por <span>inovação</span>, nossa jornada é
          impulsionada pelo desejo de criar <span>soluções</span> tecnológicas que inspirem e
          transformem. Desde a nossa fundação, temos abraçado desafios complexos
          e traduzido ideias <span>visionárias</span> em realidade. Estamos aqui para criar
          um mundo onde a tecnologia se funde perfeitamente com a <span>criatividade</span>,
          impulsionando o progresso e elevando experiências. Trabalhamos com
          algumas das maiores empresas do mundo, ajudando-as a alcançar seus
          objetivos tecnológicos e a impulsionar o <span>futuro</span>.
        </p>
        <button>
          CONHEÇA MAIS<i className="bi bi-arrow-bar-right"></i>
        </button>
      </Box>
      <Image></Image>
    </Container>
  );
};

export default AboutMe;
