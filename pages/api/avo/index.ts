import { IncomingMessage, ServerResponse } from 'http'

const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
    response.end(JSON.stringify({hello: 'vercel'}))
}

export default allAvos;