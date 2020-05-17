import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Component_B from './Component_B'

Enzyme.configure({ adapter: new Adapter() })

describe("Component_B", () => {
    const wrapper = shallow(<Component_B title="clicks" />)
    it("should increment state with each click", ()=> {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('button').text()).toEqual("clicks: 1")
    })
})