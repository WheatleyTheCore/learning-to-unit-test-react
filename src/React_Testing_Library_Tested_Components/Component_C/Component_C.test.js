import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Component_C from './Component_C'

describe("Component_C", () => {
    const {container} = render(<Component_C />)

    it("should say Hello!", () => {
        expect(container.firstChild.textContent).toEqual("Hello!")
    })
    
})

afterEach(cleanup)