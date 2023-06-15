import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  orderBy,
  limit,
  where,
  addDoc,
} from "firebase/firestore";
import {db} from "../firebaseConfig";
const clientsRef = collection(db, "clients");

export async function fetchClients(field = "name", maxQuery = 10) {
  try {
    const first = query(clientsRef, orderBy(field), limit(maxQuery));
    const {docs} = await getDocs(first);

    const firstClient = docs[0].data();
    const lastClient = docs[docs.length - 1].data();

    const clients = docs.map((item) => item.data());

    return {clients, firstClient, lastClient};
  } catch {
    return {clients: [], firstClient: null, lastClient: null};
  }
}

export async function postClient(newClient) {
  try {
    const docRef = await addDoc(collection(db, "clients"), newClient);
    console.log("new client", docRef.id);
  } catch (error) {
    console.error(error);
  }
}

export async function fetchClientByCPF(cpf) {
  try {
    const q = query(clientsRef, where("cpf", "==", cpf));
    const response = await getDocs(q);

    return response.docs[0].data();
  } catch {
    return null;
  }
}
