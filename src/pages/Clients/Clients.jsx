import { useState, useEffect } from "react";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";

import { ClientCard, ClientForm, SearchClientWrapper } from "./Clients.styles";

import { getClients, getClientByPatternName } from "../../services/clients";
import { useNavigate } from "react-router-dom";
import { formatCPF, formatPhone } from "../../helpers";
import Input from "../../components/Input/Input";

const inputStyle = { padding: '0' }

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchClients = async () => {
      const response = await getClients();
      setClients(response);
      setLoading(false);
    };

    fetchClients();
  }, []);

  const goToClientDetails = (id) => {
    navigate(`/clientes/detalhes/${id}`);
  };

  const handleSearchClient = async (e) => {
    e.preventDefault()
    try {
      if (!search) {
        const response = await getClients();
        setClients(response)
        return;
      }

      const nameNormalized = search.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();
      const response = await getClientByPatternName(nameNormalized);
      setClients(response);

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <>
        <Title text="Lista de Clientes" />

        <ClientForm onSubmit={handleSearchClient} >
          <SearchClientWrapper>
            <Input
              value={search}
              onChange={({ target }) => setSearch(target.value)}
              style={inputStyle}
              placeholder="Digite aqui o nome do cliente que deseja procurar"
              label="Nome do Cliente"
            />
            <Button text="Pesquisar" />
          </SearchClientWrapper>
        </ClientForm>

        {loading ? (
          <Loading height="3rem" />
        ) : (
          clients.map((client) => (
            <ClientCard key={client.id}>
              <div>
                <label>Nome: </label>
                <h4>{client.name}</h4>
              </div>

              <div>
                <label>CPF: </label>
                <h4>{formatCPF(client.cpf)}</h4>
              </div>

              <div>
                <label>Celular: </label>
                <h4>{formatPhone(client.cellphone)}</h4>
              </div>

              <Button
                onClick={() => goToClientDetails(client.id)}
                text="Ver Cliente"
              />
            </ClientCard>
          ))
        )}
      </>
    </Container>
  );
}
