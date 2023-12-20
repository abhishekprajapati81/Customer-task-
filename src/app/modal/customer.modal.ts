export interface Customer {
  id?: number;
  name: string;
  email: string;
  phone: number;
  add: string;
  location: Location;
}

export interface Location {
  street: string;
  city: string;
  zip: number;
}
