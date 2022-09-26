import check from "../typeCheck"
import { typeCheckFor as typeFor } from "ts-type-checked"

describe("Type guard test suite", () => {
	it("Expected string - given string", () => {
		expect(check(typeFor<string>(), "__TEST__")).toBeNull()
	})

	it("Expected string - given number", () => {
		expect(() => {
			check(typeFor<string>(), 0)
		}).toThrow(TypeError)
	})

	it("Expected object(test: string) - given string", () => {
		expect(() => {
			check(typeFor<{ test: string }>(), "")
		}).toThrow(TypeError)
	})

	it("Expected object(test: string) - given string[]", () => {
		expect(() => {
			check(typeFor<{ test: string }>(), ["", ""])
		}).toThrow(TypeError)
	})

	it("Expected object(test: string) - given object(test: string)", () => {
		expect(
			check(typeFor<{ test: string }>(), { test: "__TEST__" })
		).toBeNull()
	})

	it("Expected object(test: string) - given object(tset: string)", () => {
		expect(() => {
			check(typeFor<{ test: string }>(), { tset: "__TEST__" })
		}).toThrow(TypeError)
	})

	it("Expected object(test: string) - given object(test: string[])", () => {
		expect(() => {
			check(typeFor<{ test: string }>(), { test: ["", ""] })
		}).toThrow(TypeError)
	})

	it("Expected string[] - given object(tset: string[])", () => {
		expect(() => {
			check(typeFor<string[]>(), { tset: ["", ""] })
		}).toThrow(TypeError)
	})

	it("Expected string[] - given string[]", () => {
		expect(check(typeFor<string[]>(), ["", ""])).toBeNull()
	})
})
