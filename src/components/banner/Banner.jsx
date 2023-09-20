import { Container,Image, Phrase } from "./Banner.style";

const Banner = () => {
  return (
    <Container id="home">
      <Phrase>
        <p>
          Nossa expertise nos permite <span>criar</span> um
          <span> impacto</span> tangível para sua empresa.
        </p>
      </Phrase>

      <Image></Image>

      {/* <Info>
        <div>
          <p>
            <i className="bi bi-display"></i>
          </p>
          <h4>Desenvolver</h4>
          <p>
            Nosso desenvolvimento é a base da inovação. 
          </p>
        </div>
        <div>
          <p>
            <i className="bi bi-repeat"></i>
          </p>
          <h4>Integrar</h4>
          <p>
            A integração é a chave para a harmonia digital. 
          </p>
        </div>
        <div>
          <p>
            <i className="bi bi-chat-square-dots"></i>
          </p>
          <h4>Suporte</h4>
          <p>
            Nosso suporte é o seu apoio contínuo.
          </p>
        </div>
      </Info> */}
    </Container>
  );
};

export default Banner;
