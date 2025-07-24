import { ComponentBase } from "../types/component-base.type";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FAQProps extends ComponentBase {
  items?: FAQItem[];
}