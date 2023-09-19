import { ContactContainer, Content, Email, Info } from "./Contact.style";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <Content>
        <h2>
          <span>|</span> Contato <span>|</span>
        </h2>
        <p>
          Estamos aqui para atender às suas necessidades. Seja para explorar
          nossas soluções de Inteligência Artificial ou experiências de
          Realidade Virtual e Aumentada, estamos prontos para ouvir suas
          perguntas e ajudar a transformar suas ideias em realidade. Aguardamos
          o seu contato!
        </p>
        <Info>
          <div>
            <span>
              <i className="bi bi-chat"></i>
            </span>
            <h4>Fale com um especialista</h4>
            <p>
              Inicie uma conversa com nossa equipe experiente. Estamos prontos
              para responder a todas as suas perguntas e discutir suas
              necessidades específicas.
            </p>
            <button className="knowMore">
              FALAR COM ESPECIALISTA<i className="bi bi-arrow-bar-right"></i>
            </button>
          </div>
          <div>
            <span>
              <i className="bi bi-calendar"></i>
            </span>
            <h4>Agendar projeto</h4>
            <p>
              Pronto para transformar sua visão em realidade? Agende um projeto
              conosco e descubra como podemos criar soluções personalizadas para
              sua empresa.
            </p>
            <button className="knowMore">
              AGENDAR PROJETO<i className="bi bi-arrow-bar-right"></i>
            </button>
          </div>
        </Info>
      </Content>

      <Email>
        <p>Receba novidades por e-mail</p>
        <form>
          <input type="email" name="" id="" placeholder="Digite o seu e-mail" />
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Enviar
          </button>
        </form>
      </Email>
    </ContactContainer>
  );
};

export default Contact;
