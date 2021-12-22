const fetchUser = (cb) => {
    setTimeout(() => {
       cb('hello') 
    }, 1000);
}

const loopFetchUser = (cb) => {
    setTimeout(() => {
       cb('one')
       setTimeout(() => {
         cb('two') 
       }, 2000);
    }, 1000);
}
jest.useFakeTimers()
it('test the callback after 1 sec', () => {
    const callback = jest.fn()
    fetchUser(callback)
    expect(callback).not.toHaveBeenCalled()
    // expect(setTimeout).toHaveBeenCalledTimes(1)
    jest.runAllTimers()
    expect(callback).toHaveBeenCalled()
    expect(callback).toHaveBeenCalledWith('hello')
})
it('test the callback in timeut loop', () => {
    const callback = jest.fn()
    loopFetchUser(callback)
    expect(callback).not.toHaveBeenCalled()
    jest.runOnlyPendingTimers()
    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenLastCalledWith('one')
    jest.runOnlyPendingTimers()
    expect(callback).toHaveBeenCalledTimes(2)
    expect(callback).toHaveBeenLastCalledWith('two')
})
it('test the callback in advice', () => {
    const callback = jest.fn()
    loopFetchUser(callback)
    expect(callback).not.toHaveBeenCalled()
    jest.advanceTimersByTime(1000)
    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenLastCalledWith('one')
    jest.advanceTimersByTime(2000)
    expect(callback).toHaveBeenCalledTimes(2)
    expect(callback).toHaveBeenLastCalledWith('two')
})