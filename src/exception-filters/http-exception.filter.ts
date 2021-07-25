import {ExceptionFilter, Catch, ArgumentsHost, HttpException, UnauthorizedException, Redirect} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(UnauthorizedException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: UnauthorizedException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        response.redirect('answer/unLogged');
    }
}


@Catch(UnauthorizedException)
export class HttpExceptionToLogin implements ExceptionFilter {
    catch(exception: UnauthorizedException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        response.redirect('../login');
    }
}

@Catch(UnauthorizedException)
export class HttpExceptionThread implements ExceptionFilter {
    catch(exception: UnauthorizedException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();

        response.redirect('answer-form/unLogged/' + request.body.questionId);
    }
}

