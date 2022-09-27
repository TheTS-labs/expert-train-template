import * as t from "io-ts"
import { PathReporter } from "io-ts/PathReporter"
import _ from "lodash"

export default function typeSafe<type_def_T extends t.Props>(type_def: t.TypeC<type_def_T>, input: unknown): null|never {
	const report = PathReporter.report(type_def.decode(input))
	if (_.indexOf(report, "No errors!") == -1) { throw new TypeError("Type Safe Failed: Input does not match type") }

	return null
}