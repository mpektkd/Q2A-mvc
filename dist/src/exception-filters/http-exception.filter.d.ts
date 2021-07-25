import { ExceptionFilter, ArgumentsHost, UnauthorizedException } from '@nestjs/common';
export declare class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: UnauthorizedException, host: ArgumentsHost): void;
}
export declare class HttpExceptionToLogin implements ExceptionFilter {
    catch(exception: UnauthorizedException, host: ArgumentsHost): void;
}
export declare class HttpExceptionThread implements ExceptionFilter {
    catch(exception: UnauthorizedException, host: ArgumentsHost): void;
}
