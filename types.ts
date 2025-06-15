export interface Record {
  id: string; // UUID for the record
  text: string; // Sleep quality description
  amount: number; // Hours slept
  date: Date | string | number;
  userId: string; // ID of the associated user
  createdAt: Date; // Timestamp when the record was created
  updatedAt: Date; // Timestamp when the record was last updated
}
