<<<<<<< HEAD
import CustomApiError from "./customApiError.js";
import { StatusCodes } from "http-status-codes";

export class ForbiddenError extends CustomApiError {
    constructor(message: string = "Forbidden") {
        super(message, StatusCodes.FORBIDDEN);
    }
}
=======
import CustomApiError from "./customApiError.js";
import { StatusCodes } from "http-status-codes";

export class ForbiddenError extends CustomApiError {
    constructor(message: string = "Forbidden") {
        super(message, StatusCodes.FORBIDDEN);
    }
}
>>>>>>> origin/main
