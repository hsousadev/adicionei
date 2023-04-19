export interface ContactProps {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  first_email: string;
  second_email: string;
  first_phone: string;
  second_phone: string;
  third_phone: string;
  first_cep: number;
  first_address: string;
  first_neighbourhood: string;
  first_city: string;
  first_uf: string;
  first_number: number;
  second_cep: number;
  second_address: string;
  second_neighbourhood: string;
  second_city: string;
  second_uf: string;
  second_number: number;
  notes: string;
  fixed: boolean;
  img_url: string;
}

export interface ContactListProps {
  contacts: Array<ContactProps>;
}
