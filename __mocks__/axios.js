
const axios = {
    get: jest.fn(() => Promise.resolve({ data: { username: 'axios-gaoxiang' } }))
}

module.exports = axios