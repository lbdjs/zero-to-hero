// describe('Foo', (assert) => {
//     assert({
//         given: 'Is equal working',
//         should: 'do foo',
//         actual: true,
//         expected: true,
//     })
//     assert({
//         given: 'Is equal not working',
//         should: 'do foo',
//         actual: true,
//         expected: false,
//     })
//     console.assert(true === false, 'BASIC: Is equal not working')
// })

// describe('bar', (assert) => {
//     assert({
//         given: 'Is equal working',
//         should: 'do bar',
//         actual: true,
//         expected: true,
//     })
//     assert({
//         given: 'Is equal not working',
//         should: 'do bar',
//         actual: true,
//         expected: true,
//     })
// })

describe('1. Write a function that returns the largest element in a list.', assert => {
    assert({
        given: 'The list 1, 2, 3, 4, 5',
        should: 'return 5',
        actual: largestNumber([1,2,3,4,5]),
        expected: 5
    })

    assert({
        given: 'The list 2, 6, 1, 3, 4',
        should: 'return 6',
        actual: largestNumber([2,6,1,3,4]),
        expected: 6
    })
})

describe('2. Write a function that checks whether an element occurs in a list.', assert => {
    assert({
        given: 'The number 3 and the list 1, 2, 3, 4, 5',
        should: 'return true',
        actual: isPresent(3, [1,2,3,4,5]),
        expected: true
    })

    assert({
        given: 'The number 6 and the list 1, 2, 3, 4, 5',
        should: 'return false',
        actual: isPresent(6, [1,2,3,4,5]),
        expected: false
    })
})

describe('3. Write a function that returns the elements on odd positions in a list.', assert => {
    assert({
        given: 'The list 1, 2, 3, 4, 5',
        should: 'return 1, 3, 5',
        actual: oddPositionElements([1,2,3,4,5]),
        expected: [1, 3, 5]
    })

    assert({
        given: 'The list 2, 6, 1, 3, 4',
        should: 'return 2, 1, 4',
        actual: oddPositionElements([2, 6, 1, 3, 4]),
        expected: [2, 1, 4]
    })
})