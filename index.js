import * as elementsModule from './src/elements';
import { isPair, car, cdr } from 'hexlet-pairs';
import { l, isEmpty, head, tail, cons, reverse } from 'hexlet-pairs-data';

export const make = () => l();
export const append = (dom, element) => cons(element, dom);

export const name = (element) => car(element);
export const value = (element) => cdr(element);

export const hasChildren = (element) => isPair(cdr(element));
export const children = (element) => cdr(element);
export const addChild = (element, child) => cons(name(element), cons(child, children(element)));

export const toString = (elements) => {
  if (isEmpty(elements)) {
    return '';
  }
  const element = head(elements);
  const tag = name(element);
  const body = hasChildren(element) ? toString(reverse(children(element))) : value(element);
  return `<${tag}>${body}</${tag}>${toString(tail(elements))}`;
};

export const elements = elementsModule;
