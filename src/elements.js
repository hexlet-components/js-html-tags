import { cons } from 'hexlet-pairs';
import { l } from 'hexlet-pairs-data';

export const p = (content) => cons('p', content);
export const h1 = (content) => cons('h1', content);
export const li = (content) => cons('li', content);
export const ul = () => cons('ul', l());
