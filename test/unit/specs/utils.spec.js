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
    const merged = utils.merge_objects(alex, kostas)
    const expected = { name: 'kostas', years:23, kilos:60 }
    expect(merged.name).to.equal(expected.name)
    expect(merged.years).to.equal(expected.years)
    expect(merged.kilos).to.equal(expected.kilos)
  })
})
