/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as t from "io-ts"
import typeSafe from "../typeSafe"

describe("Type safe test suite", () => {
	it("Simple props", () => {
		const Props_def = t.type({ name: t.string })
		const test: t.TypeOf<typeof Props_def> = { name: "123" }
		expect(typeSafe(Props_def, test)).toBeNull()
	})

	it("A little more complicated simple props", () => {
		const Props_def = t.type({ name: t.string, id: t.number })
		//@ts-ignore
		const test: t.TypeOf<typeof Props_def> = { name: "123", id: "1" }
		expect(() => typeSafe(Props_def, test)).toThrow(TypeError)
	})
})
