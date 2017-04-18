import React from 'react'

import { render } from 'react-dom'

// import css webpack will load this
import css from './styles/style.styl'

// Import components
import Main from './components/Main'

render(<Main/>, document.getElementById('root'))
