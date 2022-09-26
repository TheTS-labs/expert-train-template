import * as React from "react"
import { hot } from "react-hot-loader/root"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import {typeCheckFor as typeFor} from "ts-type-checked"
import check from "../typeCheck"

interface Props {
   name: string
}

class App extends React.Component<Props> {
	render() {
		check(typeFor<Props>(), this.props)

		const { name } = this.props

		return (
			<>
				<h1>
          Hello {name}
				</h1>
				<button type="button" className="btn btn-primary">
          This is a bootstrap button
				</button>
			</>
		)
	}
}

export default hot(App)
