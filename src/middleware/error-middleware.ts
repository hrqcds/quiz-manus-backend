import { Request, Response, NextFunction } from "express"

export class ServerError {

    public readonly statusCode: number
    public readonly message: string

    constructor(message: string, statusCode = 400) {
        this.statusCode = statusCode
        this.message = message
    }

}

class ErrorMiddleware {

    handle(err: Error, req: Request, res: Response, next: NextFunction) {

        if (err instanceof ServerError) {
            return res.status(err.statusCode).json({ message: err.message })
        }


        return res.status(500).json({ message: err.message })

    }
}

export default new ErrorMiddleware()