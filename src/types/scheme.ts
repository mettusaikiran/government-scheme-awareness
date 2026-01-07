export interface MultiLangText {
  en: string;
  hi: string;
  te: string;
}

export interface Scheme {
  id: string;
  name: MultiLangText;
  description: MultiLangText;
  benefits: MultiLangText;
  eligibility: MultiLangText;
  category: string;
  link: string;
  ageMin: number;
  ageMax: number;
  incomeMax: number;
  occupations: string[];
  states: string[];
  // Optional extended fields
  governmentType?: 'central' | 'state';
  department?: string;
  documents?: MultiLangText;
  applicationProcess?: MultiLangText;
  helpline?: string;
  deadline?: string;
  notes?: MultiLangText;
  // Calculated at runtime
  matchPercentage?: number;
}
