import {Info, Property} from "./Footer.style"

const Footer = () => {
  return (
    <footer id="footer">
      <Info>
        <div>
          <p>NexGen Software</p>
          <div>
            <p>
              Paixão pela tecnologia. Soluções inovadoras em IA e Realidade
              Virtual. Impulsione seu futuro conosco.
            </p>
          </div>
        </div>
        <div>
          <p>Sobre nós</p>
          <div>
            <p>Informações da Empresa</p>
          </div>
          <div>
            <p>Blog</p>
          </div>
        </div>
        <div>
          <p>Suporte</p>
          <div>
            <p>FAQ</p>
          </div>
          <div>
            <p>Telefones</p>
          </div>
          <div>
            <p>Chat</p>
          </div>
        </div>
      </Info>

      <Property>
        <div>
          <p>© 2023 por Tiago Domingues. Todos os direitos reservados.</p>
        </div>
        
      </Property>
    </footer>
  );
};

export default Footer;
