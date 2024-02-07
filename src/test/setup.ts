import '@testing-library/jest-dom'
import { afterEach } from 'vitest'  
import { cleanup } from '@testing-library/react'


// This will run after each test file is executed and will clean up the DOM to avoid memory leaks and other issues. 
afterEach(() => {
  cleanup()
})
