import type { AnySchema } from "yup";

export interface UserCredentials {
  email: string;
  password: string;
}

export interface SRItem {
  reviews: number;
  efactor: number;
  interval: number;
}

export interface Evalutation {
  score: 1 | 2 | 3 | 4 | 5;
  lateness: number;
}

export interface DeckData {
  name: string;
  description: string;
  file: File;
}

export interface Deck extends Omit<DeckData, "file"> {
  id: number;
  user_id: string;
  imageUrl: string;
  flashcards: Flashcards;
}

export type DeckToModify = Omit<Deck, "flashcards" | "user_id">;

export interface FlashcardData {
  question: string;
  answer: string;
  file: File;
}

export interface Flashcard extends Omit<FlashcardData, "file"> {
  id: number;
  deck_id: number;
  imageUrl: string;
  user_id: string;
}

export type Flashcards = Flashcard[];
export type Decks = Deck[];
export type DeckCard = Omit<Deck, "user_id" | "flashcards">;
export type DeckCards = DeckCard[];

export interface TextAreaProps {
  label: string;
  icon?: string;
  path: string;
  schema: AnySchema;
  predefinedValue?: string;
}

export interface TextInputProps extends TextAreaProps {
  type?: string;
}
