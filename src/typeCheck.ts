/**
 * @description Checking type and if type is wrong throws a TypeError
 * @function
 * @param {Function} type - Type for check
 * @param {unknown} value - Value for check
 * @example check(typeFor<string>(), 'Example') // null
 * @example check(typeFor<string>(), 0) // TypeError
 * @return {null | never} Null if type isn't wrong or TypeError
 */

export default function check(type: Function, value: unknown): null | never {
    if (!type(value)) {
        throw new TypeError('Type is wrong, see call history for more information');
    }

    return null;
}