import styled from 'styled-components';


const Formulario = () => {
  return (
    <>
      <FormContainer>
        <Label htmlFor="nombre">Nombre:</Label>
        <Input
          id="nombre"
          type="text"
          placeholder="Nombre del Cliente"
          name="nombre"
        />
      </FormContainer>

      <FormContainer>
        <Label htmlFor="apellido">Apellido:</Label>
        <Input
          id="apellido"
          type="text"
          placeholder="Apellido del Cliente"
          name="apellido"
        />
      </FormContainer>

      <FormContainer>
        <Label htmlFor="dni">Dni:</Label>
        <Input
          id="dni"
          type="text"
          placeholder="Dni del Cliente"
          name="dni"
        />
      </FormContainer>

      <FormContainer>
        <Label htmlFor="sexo">Sexo:</Label>
        <Input
          id="sexo"
          type="text"
          placeholder="Género del Cliente"
          name="sexo"
        />
      </FormContainer>

      <FormContainer>
        <Label htmlFor="telefono">Teléfono del cliente:</Label>
        <Input
          id="telefono"
          type="tel"
          placeholder="Teléfono del Cliente"
          name="telefono"
        />
      </FormContainer>
    </>
  );
};

export default Formulario;
  const FormContainer = styled.div`
    margin-bottom: 1rem;
  `;
  
  const Label = styled.label`
    color: #4b5563;
  `;
  
  const Input = styled.input`
    margin-top: 0.5rem;
    width: 100%;
    padding: 0.75rem;
    background-color: #f9fafb;
    border: 1px solid #d2d6dc;
  `;
