const fetchUser = (cb) => {
    setTimeout(() => {
        cb('hello')
    }, 100)
}
it('test callback', () => {
    fetchUser((data) => {
        expect(data).toBe('hello')
    })
})

const userPromise = () => Promise.resolve('hello')
const userReject = () => Promise.reject('error')
it('test Promise', () => {
    userPromise().then(data => {
        expect(data).toBe('hello')
    })
})
it('test with async', async () => {
    const data = await userPromise()
    expect(data).toBe('hello')
})
it('test with expect', async () => {
    expect(userPromise()).resolves.toBe('hello')
})
it('test with expect reject', async () => {
    expect(userReject()).rejects.toBe('error')
})