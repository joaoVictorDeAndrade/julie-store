import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import { ClientForm, PersonalData, AddressData } from "./Clients.styles";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getClientByID, postClient, putClient, getClientByCPF } from "../../services/clients";
import { isMobile } from '../../helpers';
import useForm from "../../Hooks/UseForm";
import Button from "../../components/Button/Button";

let nameInputStyle = {}

if (!isMobile()) nameInputStyle = { gridColumn: '1 / 4' }

export default function ClientDetails() {
  const params = useParams();
  const clientId = params.id;
  const navigate = useNavigate()

  const name = useForm("name");
  const cpf = useForm("cpf");
  const birthdate = useForm('birthdate');
  const phone = useForm('phone', false);
  const cellphone = useForm('cellphone', !phone.value);
  const street = useForm("street");
  const number = useForm("number");
  const complement = useForm(false);
  const neighborhood = useForm("neighborhood");
  const city = useForm("city");

  const resetForm = () => {
    name.setValue('');
    cpf.setValue('');
    birthdate.setValue('');
    street.setValue('');
    number.setValue('');
    complement.setValue('');
    neighborhood.setValue('');
    city.setValue('');
  }

  useEffect(() => {
    async function fetchData() {
      const response = await getClientByID(clientId);
      name.setValue(response.name);
      cpf.setValue(response.cpf);
      birthdate.setValue(response.birthdate);
      phone.setValue(response.phone);
      cellphone.setValue(response.cellphone);
      street.setValue(response.street);
      number.setValue(response.number);
      complement.setValue(response.complement);
      neighborhood.setValue(response.neighborhood);
      city.setValue(response.city);
    }

    if (clientId) fetchData();
    else resetForm()
  }, [clientId]);


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const fields = [name, cpf, birthdate, street, number, complement, neighborhood, city];
      const truthArray = fields.map(field => field.validate());

      if (truthArray.some((isValid) => isValid === false)) {
        return;
      }

      const newClient = {
        name: name.value,
        cpf: cpf.value,
        birthdate: birthdate.value,
        phone: phone.value,
        cellphone: cellphone.value,
        street: street.value,
        number: number.value,
        complement: complement.value,
        neighborhood: neighborhood.value,
        city: city.value
      }

      const response = await getClientByCPF(newClient.cpf);
      if (response.cpf && !clientId) {
        console.log('ESSE CPF JA ESTA CADASTRADO!');
        return;
      }

      if (clientId) {
        await putClient(clientId, newClient)
      } else {
        const docId = await postClient(newClient)
        navigate(`/clientes/detalhes/${docId}`)
      }


    } catch (error) {
      console.log(error);
    }
  };

  const personalData = [
    { ...name, label: 'Nome', placeholder: 'Nome', style: { ...nameInputStyle } },
    { ...cpf, formatType: 'cpf', label: 'CPF', placeholder: 'CPF' },
    { ...birthdate, type: 'date', label: 'Nome', placeholder: 'Nome' },
    { ...phone, formatType: 'phone', label: 'Telefone', placeholder: '(16) 9999-9999' },
    { ...cellphone, formatType: 'phone', label: 'Celular', placeholder: '(16) 99999-9999' },
  ]

  const addressData = [
    { ...street, label: 'Rua', placeholder: 'Rua' },
    { ...number, label: 'Número', placeholder: 'Número' },
    { ...complement, label: 'Complemento', placeholder: 'Complemento' },
    { ...neighborhood, label: 'Bairro', placeholder: 'Bairro' },
    { ...city, label: 'Cidade', placeholder: 'Cidade' },
  ]

  return (
    <Container>
      <>
        <Title text={clientId ? "Editar Cliente" : "Adicionar Cliente"} />

        <ClientForm>
          <Title fontSize="1.25rem" text={"Dados Pessoais"} />
          <PersonalData>
            {personalData.map((input, key) => (<Input key={key} {...input} />))}
          </PersonalData>

          <Title fontSize="1.25rem" text={"Endereço"} />
          <AddressData>
            {addressData.map((input, key) => (<Input key={key} {...input} />))}
          </AddressData>

          <Button
            type="button"
            onClick={handleSubmit}
            text={clientId ? "Editar Cliente" : "Criar Cliente"}
          />
        </ClientForm>
      </>
    </Container>
  );
}
