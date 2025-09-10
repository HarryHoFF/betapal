export interface User {
  id: string;
  username: string;
  email: string;
  fullName: string;
  balance: number;
}

export interface Transaction {
  id: string;
  type: 'sent' | 'received' | 'payment' | 'refund';
  amount: number;
  recipient?: string;
  sender?: string;
  description: string;
  date: Date;
  status: 'completed' | 'pending' | 'failed';
}

export interface AuthContextType {
  user: User | null;
  login: (username: string, pin: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}