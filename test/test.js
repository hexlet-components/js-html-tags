import assert from 'assert';
import { make,
  append,
  addChild,
  toString,
  filter,
  map,
  is,
  value,
  node } from '../index.js';

describe('dom', () => {
  let dom;

  before(() => {
    const dom1 = make();
    const dom2 = append(dom1, node('h2', 'hello, world'));
    const ul = node('ul');
    const ul2 = addChild(ul, node('li', 'body'));
    const ul3 = addChild(ul2, node('li', 'another body'));

    const dom3 = append(dom2, ul3);
    dom = append(dom3, node('h2', 'header2'));
  });

  it('#toString', () => {
    const ul = node('ul');
    const ul2 = addChild(ul, node('li', 'body'));
    const ul3 = addChild(ul2, node('li', 'another body'));
    const dom1 = make();
    const dom2 = append(dom1, ul3);

    const result = '<ul><li>body</li><li>another body</li></ul>';
    assert.equal(toString(dom2), result);
  });

  it('#map', () => {
    const processedDom = map((element) => {
      if (is('h2', element)) {
        return node('h3', value(element));
      }
      return element;
    }, dom);

    const result = '<h3>header2</h3><ul><li>body</li><li>another body</li></ul><h3>hello, world</h3>';
    assert.equal(toString(processedDom), result);
  });

  it('#filter', () => {
    const processedDom = filter((element) => is('h2', element), dom);

    const result = '<h2>header2</h2><h2>hello, world</h2>';
    assert.equal(toString(processedDom), result);
  });
});
