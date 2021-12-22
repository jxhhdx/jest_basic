const getUserName = require('./user')
const axios = require('axios')

// axios.get.mockImplementation(() => {
//     return Promise.resolve({ data: { username: 'gaoxiang' } })
// })
// axios.get.mockReturnValue(Promise.resolve({ data: { username: 'gaoxiang' } }))

function mockTest(shouldCall, cb) {
    if (shouldCall) {
        cb(42)
    }
}

jest.mock('axios')
it('test with mock modules', () => {
    return getUserName(1).then(name => {
        console.log(name);
        expect(axios.get).toHaveBeenCalled()
        expect(axios.get).toHaveBeenCalledTimes(1)
    })
})

it('test with mock function', () => {
    const mockCb = jest.fn()
    mockTest(true, mockCb)
    expect(mockCb).toHaveBeenCalled()
    expect(mockCb).toHaveBeenCalledWith(42)
    expect(mockCb).toHaveBeenCalledTimes(1)
    console.log(mockCb.mock.calls);
    console.log(mockCb.mock.results);
})
it('test with mock implementation', () => {
    const mockCb = jest.fn().mockReturnValue(996)
    mockTest(true, mockCb)
    console.log(mockCb.mock.results);
})