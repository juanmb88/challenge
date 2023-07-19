import { Link, useLocation, Outlet } from 'react-router-dom';
import styled from 'styled-components';


function Layout() {
  const location = useLocation();

  return (
    <Wrapper>
      <Sidebar>
        <Title>DevTools</Title>

        <SidebarNav>
          <NavLink to="/clientes" active={location.pathname === '/clientes'}>
            Listado de Clientes
          </NavLink>
          <NavLink to="/formulario" active={location.pathname === '/formulario'}>
            Nuevo Cliente
          </NavLink>
        {/*   <NavLink to="/formulario" active={location.pathname === '/formulario'}>
            Formulario
          </NavLink> */}
        </SidebarNav>
      </Sidebar>

      <Main>

          <H3>Listado de Clientes</H3>
          <Section>
             <Outlet/>
          </Section>
      

       
      </Main>
    </Wrapper>
  );
}

export default Layout;

  const Wrapper = styled.div`
    display: flex;
    min-height: 100vh;
  `;
  
  const Sidebar = styled.aside`
    width: 25%;
    background-color: #3e4742;
    padding: 1rem;
  `;
  
  const Title = styled.h2`
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
  `;
  
  const SidebarNav = styled.nav`
    margin-top: 2rem;
  `;
  
  const NavLink = styled(Link)`
    display: block;
    font-size: 1rem;
    text-decoration: none;
    color: ${props => props.active ? '#8b5cf6' : '#fff'};
    &:hover {
      color: #8b5cf6;
    }
  `;
  
  const Main = styled.main`
    width: 75%;
    height: 100vh;
    overflow: scroll;
  `;
  const H3 =styled.h3`
    text-align: center;
    margin: 3rem;
  `
  const Section= styled.section`
  margin :4rem;
  border: 1px solid black;
  border-top: none;
  box-shadow: 2px 1px 1px;

  `