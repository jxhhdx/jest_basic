function mockTest(shouldCall, cb) {
    if (shouldCall) {
        cb(42)
    }
}

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