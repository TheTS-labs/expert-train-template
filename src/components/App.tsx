import * as React from "react"
import { hot } from "react-hot-loader/root"

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import * as t from "io-ts"
import typeSafe from "../typeSafe"

const Props_def = t.type({
	name: t.string
})

class App extends React.Component<t.TypeOf<typeof Props_def>> {
	render() {
		typeSafe(Props_def, this.props)

		const { name } = this.props

		return (
			<>
				<h1>Hello {name}</h1>
				<button type="button" className="btn btn-primary">
					This is a bootstrap button
				</button>
			</>
		)
	}
}

export default hot(App)