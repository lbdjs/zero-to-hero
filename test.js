function describe(description, testFn) {
    console.group(description)
    testFn(assert)
    console.groupEnd(description)
}

function isEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b)
}

function assert({ actual, expected, given, should }) {
    const isActualEqualToExpected = isEqual(actual, expected)
    const icon = isActualEqualToExpected ? '✅' : '❌'
    console.log(`${icon} Given ${given}, should ${should}`)
    console.assert(isActualEqualToExpected, `Expected: ${expected} -> Actual: ${actual}`)
}
