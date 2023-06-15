import styled from "styled-components";
import Colors from "../../Theme/Colors";

export const ClientCard = styled.div`
  background: ${Colors.shape};
  border-radius: 1rem;
  margin: 1rem 0;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 0.5fr;
  gap: 0.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  @media (max-width: 350px) {
    grid-template-columns: 1fr;
  }
`;

export const ClientForm = styled.form`
  background: ${Colors.shape};
  border-radius: 1rem;
  margin: 1rem 0;
  padding: 1.2rem;
`;

export const PersonalData = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    gap: 0px;
  }
`;

export const AddressData = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    gap: 0px;
  }
`;
