import {
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  getDocs,
  query,
  orderBy,
  limit,
  where,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
const clientsRef = collection(db, "clients");

const emptyClient = {
  name: '',
  cpf: '',
  birthdate: '',
  cep: '',
  city: '',
  neighborhood: '',
  number: '',
  complement: ''
}

export async function getClients(field = "name", maxQuery = 10) {
  try {
    const first = query(clientsRef, orderBy(field), limit(maxQuery));
    const { docs } = await getDocs(first);

    const firstClient = docs[0].data();
    const lastClient = docs[docs.length - 1].data();

    const clients = docs.map((item) => ({ ...item.data(), id: item.id }));

    return { clients, firstClient, lastClient };
  } catch {
    return { clients: [], firstClient: null, lastClient: null };
  }
}

export async function postClient(newClient) {
  try {
    const docRef = await addDoc(collection(db, "clients"), newClient);
    return docRef.id;
  } catch (error) {
    console.error(error);
  }
}

export async function putClient(docId, newClient) {
  try {
    console.log(docId, newClient)
   const docRef = doc(clientsRef, docId);
   await updateDoc(docRef, newClient);
  } catch (error) {
    console.log(error)
  }
}

export async function getClientByID(id) {
  try {
    const docRef = doc(clientsRef, id);
    const response = (await getDoc(docRef)).data();

    return { ...response }
  } catch {
    return { ...emptyClient };
  }
}

export async function getClientByCPF(cpf) {
  try {
    const q = query(clientsRef, where("cpf", "==", cpf));
    const response = await getDocs(q);

    return response.docs[0].data();
  } catch {
    return { ...emptyClient };
  }
}
