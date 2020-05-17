import React from 'react'
import {render, fireEvent, cleanup} from '@testing-library/react'

import Component_D from './Component_D'

describe("Component_D", () => {
    const {container} = render(<Component_D />)

    it("should increment by one after each click", () => {
        fireEvent.click((container.firstChild))
        expect(container.firstChild.textContent).toEqual("1")
    })
})

afterEach(cleanup)