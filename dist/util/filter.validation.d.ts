import { ArgumentsHost, BadRequestException, ExceptionFilter } from "@nestjs/common";
export declare class ValidationException extends BadRequestException {
    validationErrors: any;
    constructor(validationErrors: any);
}
export declare class ValidationFilter implements ExceptionFilter {
    catch(exception: ValidationException, host: ArgumentsHost): any;
}
