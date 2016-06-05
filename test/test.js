import assert from 'assert';
import { make, append, addChild, toString, elements as el } from '../index.js';

describe('dom', () => {
  let dom;

  before(() => {
    const dom1 = make();
    const dom2 = append(dom1, el.h1('hello, world'));
    const ul = el.ul();
    const ul2 = addChild(ul, el.li('body'));
    const ul3 = addChild(ul2, el.li('another body'));

    const dom = append(dom2, ul3);
  });

  it('#toString', () => {
    const ul = el.ul();
    const ul2 = addChild(ul, el.li('body'));
    const ul3 = addChild(ul2, el.li('another body'));
    const dom1 = make();
    const dom2 = append(dom1, ul3);

    const result = '<ul><li>body</li><li>another body</li></ul>';
    assert.equal(toString(dom2), result);
  });
});
