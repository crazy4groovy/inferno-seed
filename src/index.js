import { render } from 'inferno'
import './index.css'
import App from './App'

require('inferno-devtools')

render(<App />, document.getElementById('app'))
