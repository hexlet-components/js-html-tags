import { isPair, car, cdr, cons } from 'hexlet-pairs';
import * as data from 'hexlet-pairs-data';

export const make = () => data.l();
export const append = (dom, element) => data.cons(element, dom);

export const node = (tag, mix = data.l()) => cons(tag, mix);

export const name = (element) => car(element);
export const value = (element) => cdr(element);
export const is = (tag, element) => tag === name(element);

export const hasChildren = (element) => isPair(cdr(element));
export const children = (element) => cdr(element);
export const addChild = (element, child) =>
  data.cons(name(element), data.cons(child, children(element)));

export const toString = (elements) => {
  if (data.isEmpty(elements)) {
    return '';
  }
  const element = data.head(elements);
  const tag = name(element);
  const body = hasChildren(element) ? toString(children(element)) : value(element);
  return `${toString(data.tail(elements))}<${tag}>${body}</${tag}>`;
};

export const map = (func, elements) => data.map(func, elements);
export const filter = (func, elements) => data.filter(func, elements);
export const reduce = (func, init, elements) => data.reduce(func, init, elements);
