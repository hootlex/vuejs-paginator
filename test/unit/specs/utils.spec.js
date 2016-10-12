/* eslint-env mocha */
/* global expect */

import {utils} from 'src/utils.js'

describe('utils', () => {
  it('should export nested value from object', () => {
    const object = { nested: { inside: { object: { value: 'foo' } } } }
    const value = utils.getNestedValue(object, 'nested.inside.object.value')
    expect(value).to.equal('foo')
  })
  it('should merge two objects', () => {
    const alex = { name: 'alex', years: 23 }
    const kostas = { name: 'kostas', kilos: 60 }
    const merged = utils.mergeObjects(alex, kostas)
    const expected = { name: 'kostas', years: 23, kilos: 60 }
    expect(merged.name).to.equal(expected.name)
    expect(merged.years).to.equal(expected.years)
    expect(merged.kilos).to.equal(expected.kilos)
  })
  it('should return an array of objects when given a url without extension', () => {
    const resourceUrl = 'http://foo.bar/json/test?page1'
    const [lastPage, currentPage, maxButtons] = [3, 1, 5]
    const allPages = utils.createPageNumbers(currentPage, resourceUrl, lastPage, maxButtons)
    expect(allPages).to.not.be.empty
    expect(allPages).to.deep.equal([
      { value: 1, url: 'http://foo.bar/json/test?page1' },
      { value: 2, url: 'http://foo.bar/json/test?page2' },
      { value: 3, url: 'http://foo.bar/json/test?page3' }
    ])
  })
  it('should return an array of objects when given a url with arbitrary (non-numeric) extension', () => {
    const resourceUrl1 = 'http://foo.bar/json/test1.txt'
    const resourceUrl2 = 'http://foo.bar/json/test1.json'
    const [lastPage, currentPage, maxButtons] = [3, 1, 5]
    const allPages1 = utils.createPageNumbers(currentPage, resourceUrl1, lastPage, maxButtons)
    const allPages2 = utils.createPageNumbers(currentPage, resourceUrl2, lastPage, maxButtons)
    expect(allPages1).to.not.be.empty
    expect(allPages1).to.deep.equal([
      { value: 1, url: 'http://foo.bar/json/test1.txt' },
      { value: 2, url: 'http://foo.bar/json/test2.txt' },
      { value: 3, url: 'http://foo.bar/json/test3.txt' }
    ])
    expect(allPages2).to.not.be.empty
    expect(allPages2).to.deep.equal([
      { value: 1, url: 'http://foo.bar/json/test1.json' },
      { value: 2, url: 'http://foo.bar/json/test2.json' },
      { value: 3, url: 'http://foo.bar/json/test3.json' }
    ])
  })
  it('should return an array of objects when given a url not starting from 1, without extension', () => {
    const resourceUrl = 'http://foo.bar/json/test?page3'
    const [lastPage, currentPage, maxButtons] = [3, 1, 5]
    const allPages = utils.createPageNumbers(currentPage, resourceUrl, lastPage, maxButtons)
    expect(allPages).to.not.be.empty
    expect(allPages).to.deep.equal([
      { value: 1, url: 'http://foo.bar/json/test?page1' },
      { value: 2, url: 'http://foo.bar/json/test?page2' },
      { value: 3, url: 'http://foo.bar/json/test?page3' }
    ])
  })
  it('should return an array of objects when given a url not starting from 1 && with arbitrary (non-numeric) extension', () => {
    const resourceUrl1 = 'http://foo.bar/json/test2.txt'
    const resourceUrl2 = 'http://foo.bar/json/test3.json'
    const [lastPage, currentPage, maxButtons] = [3, 1, 5]
    const allPages1 = utils.createPageNumbers(currentPage, resourceUrl1, lastPage, maxButtons)
    const allPages2 = utils.createPageNumbers(currentPage, resourceUrl2, lastPage, maxButtons)
    expect(allPages1).to.not.be.empty
    expect(allPages1).to.deep.equal([
      { value: 1, url: 'http://foo.bar/json/test1.txt' },
      { value: 2, url: 'http://foo.bar/json/test2.txt' },
      { value: 3, url: 'http://foo.bar/json/test3.txt' }
    ])
    expect(allPages2).to.not.be.empty
    expect(allPages2).to.deep.equal([
      { value: 1, url: 'http://foo.bar/json/test1.json' },
      { value: 2, url: 'http://foo.bar/json/test2.json' },
      { value: 3, url: 'http://foo.bar/json/test3.json' }
    ])
  })
  it('should return an array of objects containing one final ellipsis entry when (# of pages > max_buttons) && (current_page is at start)', () => {
    const resourceUrl = 'http://foo.bar/json/test2.json'
    const [lastPage, currentPage1, currentPage2, currentPage3, maxButtons] = [10, 1, 2, 3, 5]
    const allPages1 = utils.createPageNumbers(currentPage1, resourceUrl, lastPage, maxButtons)
    const allPages2 = utils.createPageNumbers(currentPage2, resourceUrl, lastPage, maxButtons)
    const allPages3 = utils.createPageNumbers(currentPage3, resourceUrl, lastPage, maxButtons)
    expect(allPages1).to.not.be.empty
    expect(allPages1).to.deep.equal([
      { value: 1, url: 'http://foo.bar/json/test1.json' },
      { value: 2, url: 'http://foo.bar/json/test2.json' },
      { value: 3, url: 'http://foo.bar/json/test3.json' },
      { value: '...', url: 'http://foo.bar/json/test9.json' },
      { value: 10, url: 'http://foo.bar/json/test10.json' }
    ])
    expect(allPages2).to.not.be.empty
    expect(allPages2).to.deep.equal([
      { value: 1, url: 'http://foo.bar/json/test1.json' },
      { value: 2, url: 'http://foo.bar/json/test2.json' },
      { value: 3, url: 'http://foo.bar/json/test3.json' },
      { value: '...', url: 'http://foo.bar/json/test9.json' },
      { value: 10, url: 'http://foo.bar/json/test10.json' }
    ])
    expect(allPages3).to.not.be.empty
    expect(allPages3).to.deep.equal([
      { value: 1, url: 'http://foo.bar/json/test1.json' },
      { value: 2, url: 'http://foo.bar/json/test2.json' },
      { value: 3, url: 'http://foo.bar/json/test3.json' },
      { value: '...', url: 'http://foo.bar/json/test9.json' },
      { value: 10, url: 'http://foo.bar/json/test10.json' }
    ])
  })
  it('should return an array of objects containing two ellipsis entry when (# of pages > max_buttons) && (current_page is in middle)', () => {
    const resourceUrl = 'http://foo.bar/json/test2.json'
    const [lastPage, currentPage1, currentPage2, currentPage3, currentPage4, maxButtons] = [10, 4, 5, 6, 7, 5]
    const allPages1 = utils.createPageNumbers(currentPage1, resourceUrl, lastPage, maxButtons)
    const allPages2 = utils.createPageNumbers(currentPage2, resourceUrl, lastPage, maxButtons)
    const allPages3 = utils.createPageNumbers(currentPage3, resourceUrl, lastPage, maxButtons)
    const allPages4 = utils.createPageNumbers(currentPage4, resourceUrl, lastPage, maxButtons)
    expect(allPages1).to.not.be.empty
    expect(allPages1).to.deep.equal([
      { value: 1, url: 'http://foo.bar/json/test1.json' },
      { value: '...', url: 'http://foo.bar/json/test2.json' },
      { value: 4, url: 'http://foo.bar/json/test4.json' },
      { value: '...', url: 'http://foo.bar/json/test9.json' },
      { value: 10, url: 'http://foo.bar/json/test10.json' }
    ])
    expect(allPages2).to.not.be.empty
    expect(allPages2).to.deep.equal([
      { value: 1, url: 'http://foo.bar/json/test1.json' },
      { value: '...', url: 'http://foo.bar/json/test2.json' },
      { value: 5, url: 'http://foo.bar/json/test5.json' },
      { value: '...', url: 'http://foo.bar/json/test9.json' },
      { value: 10, url: 'http://foo.bar/json/test10.json' }
    ])
    expect(allPages3).to.not.be.empty
    expect(allPages3).to.deep.equal([
      { value: 1, url: 'http://foo.bar/json/test1.json' },
      { value: '...', url: 'http://foo.bar/json/test2.json' },
      { value: 6, url: 'http://foo.bar/json/test6.json' },
      { value: '...', url: 'http://foo.bar/json/test9.json' },
      { value: 10, url: 'http://foo.bar/json/test10.json' }
    ])
    expect(allPages4).to.not.be.empty
    expect(allPages4).to.deep.equal([
      { value: 1, url: 'http://foo.bar/json/test1.json' },
      { value: '...', url: 'http://foo.bar/json/test2.json' },
      { value: 7, url: 'http://foo.bar/json/test7.json' },
      { value: '...', url: 'http://foo.bar/json/test9.json' },
      { value: 10, url: 'http://foo.bar/json/test10.json' }
    ])
  })
  it('should return an array of objects containing one begin ellipsis entry when (# of pages > max_buttons) && (current_page is at end)', () => {
    const resourceUrl = 'http://foo.bar/json/test2.json'
    const [lastPage, currentPage1, currentPage2, currentPage3, maxButtons] = [10, 8, 9, 10, 5]
    const allPages1 = utils.createPageNumbers(currentPage1, resourceUrl, lastPage, maxButtons)
    const allPages2 = utils.createPageNumbers(currentPage2, resourceUrl, lastPage, maxButtons)
    const allPages3 = utils.createPageNumbers(currentPage3, resourceUrl, lastPage, maxButtons)
    expect(allPages1).to.not.be.empty
    expect(allPages1).to.deep.equal([
      { value: 1, url: 'http://foo.bar/json/test1.json' },
      { value: '...', url: 'http://foo.bar/json/test2.json' },
      { value: 8, url: 'http://foo.bar/json/test8.json' },
      { value: 9, url: 'http://foo.bar/json/test9.json' },
      { value: 10, url: 'http://foo.bar/json/test10.json' }
    ])
    expect(allPages2).to.not.be.empty
    expect(allPages2).to.deep.equal([
      { value: 1, url: 'http://foo.bar/json/test1.json' },
      { value: '...', url: 'http://foo.bar/json/test2.json' },
      { value: 8, url: 'http://foo.bar/json/test8.json' },
      { value: 9, url: 'http://foo.bar/json/test9.json' },
      { value: 10, url: 'http://foo.bar/json/test10.json' }
    ])
    expect(allPages3).to.not.be.empty
    expect(allPages3).to.deep.equal([
      { value: 1, url: 'http://foo.bar/json/test1.json' },
      { value: '...', url: 'http://foo.bar/json/test2.json' },
      { value: 8, url: 'http://foo.bar/json/test8.json' },
      { value: 9, url: 'http://foo.bar/json/test9.json' },
      { value: 10, url: 'http://foo.bar/json/test10.json' }
    ])
  })
})
