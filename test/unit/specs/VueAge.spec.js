import VueAge from '@/VueAge'
import { shallow } from 'vue-test-utils'

describe('VueDate.vue', () => {
  it('should display the correct date when only year is given', () => {
    Date.now = () => Date.parse('2018-02-14')

    let component = shallow(VueAge, {
      propsData: { year: 1998 }
    })

    expect(component.find('span').text()).toEqual('20')
  })
  it('should display the correct date when year and month are given (1)', () => {
    Date.now = () => Date.parse('2018-02-14')

    let component = shallow(VueAge, {
      propsData: { year: 1998, month: 2 }
    })

    expect(component.find('span').text()).toEqual('20')
  })
  it('should display the correct date when year and month are given (2)', () => {
    Date.now = () => Date.parse('2018-01-14')

    let component = shallow(VueAge, {
      propsData: { year: 1998, month: 2 }
    })

    expect(component.find('span').text()).toEqual('19')
  })
  it('should display the correct date when year and month and day are given (1)', () => {
    Date.now = () => Date.parse('2018-02-14')

    let component = shallow(VueAge, {
      propsData: { year: 1998, month: 2, day: 14 }
    })

    expect(component.find('span').text()).toEqual('20')
  })
  it('should display the correct date when year and month and day are given (2)', () => {
    Date.now = () => Date.parse('2018-02-14')

    let component = shallow(VueAge, {
      propsData: { year: 1998, month: 2, day: 15 }
    })

    expect(component.find('span').text()).toEqual('19')
  })
  it('should display "" if you are not born yet (1)', () => {
    Date.now = () => Date.parse('2018-02-14')

    let component = shallow(VueAge, {
      propsData: { year: 2019, month: 2, day: 15 }
    })

    expect(component.find('span').text()).toEqual('')
  })
  it('should display "" if you are not born yet (2)', () => {
    Date.now = () => Date.parse('2018-02-14')

    let component = shallow(VueAge, {
      propsData: { year: 2018, month: 2, day: 15 }
    })

    expect(component.find('span').text()).toEqual('')
  })
})
