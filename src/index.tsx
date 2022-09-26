import * as React from "react"
import * as ReactDOM from "react-dom"

import App from "./components/App"
import "./assets/stylesheets/styles.css"
import "./assets/stylesheets/styles.scss"

const mountNode = document.getElementById("app")
ReactDOM.render(<App name="Jane" />, mountNode)
