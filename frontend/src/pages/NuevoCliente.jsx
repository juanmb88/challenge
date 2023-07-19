import styled from 'styled-components';
import { useNavigate, Form, useActionData } from "react-router-dom"
import Formulario from '../componentes/Formulario'

export  async function action({request}){
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  
  //Validacion
  const errores = [];
  if(Object.values(datos).includes('')){
      errores.push('obligacion')
  }

  //Retornar Errores
  if(Object.values(errores).length){
   return errores
}
  return { ok: true };
}

function NuevoCliente() {
  const errores = useActionData();
  const navigate = useNavigate();
  console.log(errores)
  return (
    <>
          <H2>Nuevo Cliente</H2>
          <H5>Llena todos los campos para agregar un cliente.</H5>

          <Div>
            <Button onClick={ ()=> navigate('/clientes')}>Volver</Button>
          </Div>
{/* {errores?.length && errores.map((error,i)=>)}
 */}          <Form method = 'post'>
            <Formulario/>

            <Input type="submit" value="Registrar Cliente"/>
          </Form> 

    
    
    </>
  )
}

export default NuevoCliente;



const H2 = styled.h2`
  text-align: center;
`;
const H5 = styled.h5`
  text-align: center;
`;
const Div = styled.div`
  display: flex;
  justify-content: end;
`
const Button= styled.button`
 background-color: #3d058c;
 color: white;
 padding: 2px;
 border-radius: 2px;
 margin: 3px;
`



const Input = styled.input`
  margin-top: 5px;

  background-color: #3d058c;
  padding: 6px;
  color: white;
  width: 100%;

  

`