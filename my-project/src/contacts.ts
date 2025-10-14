export interface ContactType {
  id: string;
  first: string;
  last: string;
  avatar: string;
  twitter: string;
  notes: string;
  favorite: boolean;
}

let contacts: ContactType[] = [
  {
    id: "1",
    first: "Your",
    last: "Name",
    avatar: "https://robohash.org/you.png?size=200x200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  },
];

export async function getContacts(query: string | null): Promise<ContactType[]> {
  if (query) {
    return contacts.filter(contact => 
      contact.first.toLowerCase().includes(query.toLowerCase()) || 
      contact.last.toLowerCase().includes(query.toLowerCase())
    );
  }
  return contacts;
}

export async function createContact(): Promise<ContactType> {
  const newContact = {
    id: Math.random().toString(36).substring(2, 9),
    first: "",
    last: "",
    avatar: "",
    twitter: "",
    notes: "",
    favorite: false,
  };
  contacts.unshift(newContact);
  return newContact;
}

export async function getContact(id: string): Promise<ContactType | null> {
  return contacts.find(contact => contact.id === id) || null;
}

export async function updateContact(id: string, updates: Partial<ContactType>): Promise<ContactType> {
  const contact = await getContact(id);
  if (!contact) {
    throw new Error(`No contact found for ${id}`);
  }
  Object.assign(contact, updates);
  return contact;
}

export async function deleteContact(id: string): Promise<void> {
  const index = contacts.findIndex(contact => contact.id === id);
  if (index > -1) {
    contacts.splice(index, 1);
  }
}
