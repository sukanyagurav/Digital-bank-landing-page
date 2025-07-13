import Container from './Container';

const Header = () => {
  return (
    <header className="p-4 py-8 bg-white relative z-10">
      <Container>
        <a href="#">
          <img src="/images/logo-dark.svg" />
        </a>
      </Container>
    </header>
  );
};

export default Header;
