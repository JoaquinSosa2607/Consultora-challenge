import { Response } from "express";

export enum HttpStatus {
    OK = 200,
    NOT_FOUND = 404,
}

export class HttpResponse {
    Ok(res: Response, data: any): Response {
        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            statusMsg: "Success",
            data: data,
        });
    }
    NotFound(res: Response, data: any): Response {
        return res.status(HttpStatus.NOT_FOUND).json({
            status: HttpStatus.NOT_FOUND,
            statusMsg: "Not Found",
            error: data,
        });
    }
}
