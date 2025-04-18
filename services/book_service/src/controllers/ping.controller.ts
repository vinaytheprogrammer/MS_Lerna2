import {inject} from '@loopback/core';
import {

Request,
RestBindings,
get,
response,
ResponseObject,
} from '@loopback/rest';

/**
 * OpenAPI response for ping()
 */
const PING_RESPONSE: ResponseObject = {
description: 'Ping Response',
content: {
    'application/json': {
        schema: {
            type: 'object',
            title: 'PingResponse',
            properties: {
                greeting: {type: 'string'},
                date: {type: 'string'},
                url: {type: 'string'},
                headers: {
                    type: 'object',
                    properties: {
                        'Content-Type': {type: 'string'},
                    },
                    additionalProperties: true,
                },
            },
        },
    },
},
};

/**
 * A simple controller to bounce back http requests
 */
export class PingController {
constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

// Map to `GET /ping`
@get('/ping')
@response(200, PING_RESPONSE)
ping(): object {
    // Reply with a greeting, the current time, the url, and request headers
    return {
        greeting: 'Hello from LoopBack',
        date: new Date(),
        url: this.req.url,
        headers: Object.assign({}, this.req.headers),
    };
}
}

/**
 * OpenAPI response for book()
 */
const BOOK_RESPONSE: ResponseObject = {
description: 'Book Response',
content: {
    'application/json': {
        schema: {
            type: 'object',
            title: 'BookResponse',
            properties: {
                message: {type: 'string'},
                bookId: {type: 'number'},
            },
        },
    },
},
};

/**
 * A simple controller to handle book-related requests
 */
export class BookServiceController {
// Map to `GET /book`
@get('/book')
@response(200, BOOK_RESPONSE)
book(): object {
    // Reply with a message and a sample book ID
    return {
        message: 'Book service is up and running!',
        bookId: 123,
    };
}
}