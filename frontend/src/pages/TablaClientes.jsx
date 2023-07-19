import styled from 'styled-components';
import { useLoaderData, useNavigate } from "react-router-dom"
export function loader() {
  

  return [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Gomez',
      dni: '31.222.333',
      sexo: 'Masculino',
      telefono: '3489-668866',
    },
    {
      id: 2,
      nombre: 'Daniela',
      apellido: 'Lopez',
      dni: '44.432.433',
      sexo: 'Femenino',
      telefono: '3489-656543',
    },
    {
      id: 3,
      nombre: 'Daiana',
      apellido: 'Garcia',
      dni: '34.377.113',
      sexo: 'Femenino',
      telefono: '3489-555555',
    }
  ];
}

function TablaClientes() {
  const clientes = useLoaderData();
  const navigate = useNavigate();
  return (
    <>
      <H2>Administra tus Clientes</H2>

      {clientes.length ? (
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <TableHeader></TableHeader>
                <TableHeader>Nombre</TableHeader>
                <TableHeader>Apellido</TableHeader>
                <TableHeader>DNI</TableHeader>
                <TableHeader>Sexo</TableHeader>
                <TableHeader>Número de Teléfono</TableHeader>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.id}>
                  <CheckCell>
                    <TableCheckbox type="checkbox" />
                  </CheckCell>
                  <TableCell>{cliente.nombre}</TableCell>
                  <TableCell>{cliente.apellido}</TableCell>
                  <TableCell>{cliente.dni}</TableCell>
                  <TableCell>{cliente.sexo}</TableCell>
                  <TableCell>{cliente.telefono}</TableCell>
                  <Acciones> 
                    <button type='button' onClick={ ()=> navigate('/editar')}>
                        Editar
                    </button>
                    <button type='button'>
                        Eliminar
                    </button>
                  </Acciones>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      ) : (
        <p className="text-center m-10">No hay clientes aún.</p>
      )}
    </>
  );
}

export default TablaClientes;

const H2 = styled.h2`
  text-align: center;
`;

const TableWrapper = styled.div`
  margin: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 10px;
  background-color: #f2f2f2;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 20px 10px;
  border-bottom: 1px solid #ddd;
`;

const CheckCell = styled(TableCell)`
  width: 30px;
`;

const TableCheckbox = styled.input`
  margin-right: 5px;
`;
const Acciones = styled.td`

  display: flex;
  gap: 5px;
  margin-top:20px;
 
`;