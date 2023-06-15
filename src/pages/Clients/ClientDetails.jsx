import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import {ClientForm, PersonalData, AddressData} from "./Clients.styles";

import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchClientByCPF} from "../../services/clients";
import useForm from "../../Hooks/UseForm";
import Button from "../../components/Button/Button";

export default function ClientDetails() {
  const params = useParams();
  const clientId = params.id;

  const [client, setClient] = useState(null);
  const name = useForm("name");
  const cpf = useForm("cpf");
  const street = useForm("street");
  const number = useForm("number");
  const complement = useForm(false);
  const neighborhood = useForm("neighborhood");
  const city = useForm("city");

  useEffect(() => {
    async function fetchData() {
      const response = await fetchClientByCPF(clientId);
      setClient(response);
    }

    if (clientId) fetchData();
  }, []);

  const createClient = (event) => {
    event.preventDefault();

    try {
      console.log("oi");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <>
        <Title text={clientId ? "Editar Cliente" : "Adicionar Cliente"} />

        <ClientForm onSubmit={createClient}>
          <Title fontSize="1.25rem" text={"Dados Pessoais"} />

          <PersonalData>
            <Input label="Nome" {...name} />
            <Input label="CPF" formatType="cpf" {...cpf} />
            <Input label="Data de Nascimento" {...name} />
          </PersonalData>

          <Title fontSize="1.25rem" text={"Endereço"} />
          <AddressData>
            <Input label="Rua" {...street} />
            <Input label="Número" type="number" {...number} />
            <Input label="Complemento" {...complement} />
            <Input label="Bairro" {...neighborhood} />
            <Input label="Cidade" {...city} />
          </AddressData>

          <Button
            type="submit"
            text={clientId ? "Editar Cliente" : "Criar Cliente"}
          />
        </ClientForm>
      </>
    </Container>
  );
}
