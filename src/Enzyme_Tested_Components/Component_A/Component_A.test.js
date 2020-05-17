import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Component_A from './Component_A'

Enzyme.configure({adapter: new Adapter()})

describe("Component_A", () => {
    it("should say Hi! inside a div", () => {
        const wrapper = shallow(<Component_A />);
        const component = wrapper.find('div')
        expect(component).toHaveLength(1)
        expect(component.text()).toEqual("Hi!")
    })
})
