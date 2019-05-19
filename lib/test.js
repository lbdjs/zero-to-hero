window.LogRocket && 
window.LogRocket.init('39ejxb/learningbydoing', 
    {
        release: '1.0.0'
    })

window.USERNAME = 'TEST_USER2'

// This is an example script - don't forget to change it!
LogRocket.identify('TEST_USER3', {
    name: 'Test User 3',
    email: `testuser3@test.com`,
  
    // Add your own custom user variables here, ie:
    // subscriptionType: 'pro'
    level: 1
  });

function describe(description, testFn) {
    console.group(description)
    testFn(withTry(assert))
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

const withTry = (fn) => (...args) => {
//   try {
    fn(...args)
//   } catch (err) {
    // LogRocket.captureException(err, {
    //   tags: {
    //     // additional data to be grouped as "tags"
    //     subscription: 'Pro',
    //   },
    //   extra: {
    //     // additional arbitrary data associated with the event
    //     pageName: 'ProfileView',
    //   },
    // });
//   }
}
