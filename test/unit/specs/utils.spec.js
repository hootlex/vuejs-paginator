import {utils} from 'src/utils.js'

describe('utils', () => {
  it('should export nested value from object', () => {
    const object = { nested: { inside: { object: { value: 'foo' } } } }
    const value = utils.getNestedValue(object, 'nested.inside.object.value')
    expect(value).to.equal('foo')
  })
  it('should merge two objects', () => {
    const alex = { name: 'alex', years:23 }
    const kostas = { name: 'kostas', kilos:60 }
    const merged = utils.mergeObjects(alex, kostas)
    const expected = { name: 'kostas', years:23, kilos:60 }
    expect(merged.name).to.equal(expected.name)
    expect(merged.years).to.equal(expected.years)
    expect(merged.kilos).to.equal(expected.kilos)
  })
  it('should return an object when given a url ending with .json', () => {
    const resourceUrl = 'http://foo.bar/json/test1.json'
    const lastPage = 3
    const allPages = utils.createPageNumbers(resourceUrl, lastPage)
    expect(allPages).to.not.be.empty
    expect(allPages).to.deep.equal({
      page1: { value: 1, url: 'http://foo.bar/json/test1.json' },
      page2: { value: 2, url: 'http://foo.bar/json/test2.json' },
      page3: { value: 3, url: 'http://foo.bar/json/test3.json' }
    })
  })
  it('should return an object when given a url without extension', () => {
    const resourceUrl = 'http://foo.bar/json/test?page1'
    const lastPage = 3
    const allPages = utils.createPageNumbers(resourceUrl, lastPage)
    expect(allPages).to.not.be.empty
    expect(allPages).to.deep.equal({
      page1: { value: 1, url: 'http://foo.bar/json/test?page1' },
      page2: { value: 2, url: 'http://foo.bar/json/test?page2' },
      page3: { value: 3, url: 'http://foo.bar/json/test?page3' }
    })
  })
  it('should return an object when given a url with arbitrary (non-numeric) extension', () => {
    const resourceUrl1 = 'http://foo.bar/json/test1.txt'
    const resourceUrl2 = 'http://foo.bar/json/test1.htm'
    const resourceUrl3 = 'http://foo.bar/json/test1.abcd'
    const lastPage = 3
    const allPages1 = utils.createPageNumbers(resourceUrl1, lastPage)
    const allPages2 = utils.createPageNumbers(resourceUrl2, lastPage)
    const allPages3 = utils.createPageNumbers(resourceUrl3, lastPage)
    expect(allPages1).to.not.be.empty
    expect(allPages1).to.deep.equal({
      page1: { value: 1, url: 'http://foo.bar/json/test1.txt' },
      page2: { value: 2, url: 'http://foo.bar/json/test2.txt' },
      page3: { value: 3, url: 'http://foo.bar/json/test3.txt' }
    })
    expect(allPages2).to.not.be.empty
    expect(allPages2).to.deep.equal({
      page1: { value: 1, url: 'http://foo.bar/json/test1.htm' },
      page2: { value: 2, url: 'http://foo.bar/json/test2.htm' },
      page3: { value: 3, url: 'http://foo.bar/json/test3.htm' }
    })
    expect(allPages3).to.not.be.empty
    expect(allPages3).to.deep.equal({
      page1: { value: 1, url: 'http://foo.bar/json/test1.abcd' },
      page2: { value: 2, url: 'http://foo.bar/json/test2.abcd' },
      page3: { value: 3, url: 'http://foo.bar/json/test3.abcd' }
    })
  })
  it('should return an object when given a url not starting from 1', () => {
    const resourceUrl = 'http://foo.bar/json/test?page3'
    const lastPage = 3
    const allPages = utils.createPageNumbers(resourceUrl, lastPage)
    expect(allPages).to.not.be.empty
    expect(allPages).to.deep.equal({
      page1: { value: 1, url: 'http://foo.bar/json/test?page1' },
      page2: { value: 2, url: 'http://foo.bar/json/test?page2' },
      page3: { value: 3, url: 'http://foo.bar/json/test?page3' }
    })
  })
  it('should return an object when given a url not starting from 1 && ending with .json', () => {
    const resourceUrl = 'http://foo.bar/json/test2.json'
    const lastPage = 3
    const allPages = utils.createPageNumbers(resourceUrl, lastPage)
    expect(allPages).to.not.be.empty
    expect(allPages).to.deep.equal({
      page1: { value: 1, url: 'http://foo.bar/json/test1.json' },
      page2: { value: 2, url: 'http://foo.bar/json/test2.json' },
      page3: { value: 3, url: 'http://foo.bar/json/test3.json' }
    })
  })
  it('should return an object when given a url not starting from 1 && with arbitrary (non-numeric) extension', () => {
    const resourceUrl1 = 'http://foo.bar/json/test2.txt'
    const resourceUrl2 = 'http://foo.bar/json/test3.htm'
    const resourceUrl3 = 'http://foo.bar/json/test3.abcd'
    const lastPage = 3
    const allPages1 = utils.createPageNumbers(resourceUrl1, lastPage)
    const allPages2 = utils.createPageNumbers(resourceUrl2, lastPage)
    const allPages3 = utils.createPageNumbers(resourceUrl3, lastPage)
    expect(allPages1).to.not.be.empty
    expect(allPages1).to.deep.equal({
      page1: { value: 1, url: 'http://foo.bar/json/test1.txt' },
      page2: { value: 2, url: 'http://foo.bar/json/test2.txt' },
      page3: { value: 3, url: 'http://foo.bar/json/test3.txt' }
    })
    expect(allPages2).to.not.be.empty
    expect(allPages2).to.deep.equal({
      page1: { value: 1, url: 'http://foo.bar/json/test1.htm' },
      page2: { value: 2, url: 'http://foo.bar/json/test2.htm' },
      page3: { value: 3, url: 'http://foo.bar/json/test3.htm' }
    })
    expect(allPages3).to.not.be.empty
    expect(allPages3).to.deep.equal({
      page1: { value: 1, url: 'http://foo.bar/json/test1.abcd' },
      page2: { value: 2, url: 'http://foo.bar/json/test2.abcd' },
      page3: { value: 3, url: 'http://foo.bar/json/test3.abcd' }
    })
  })
})
