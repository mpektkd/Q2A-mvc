import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import path, { join } from 'path';
import * as exphbs from 'express-handlebars';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import moment from 'moment';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(express.static(join(__dirname, '..', 'public/assets')));
  app.use(express.static(join(__dirname, '..', 'public/assets/bootstrap')));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.use(cookieParser());

  app.engine(
    '.hbs',
    exphbs({
      extname: '.hbs',
      defaultLayout: 'main',
      partialsDir: join(__dirname, '..', 'views/partials'),
      helpers: {
        json: function (value) {
          const data = JSON.stringify(value);
          return JSON.stringify(JSON.parse(data.replace(/&quot;/g, '"')));
        },
        formatdate: function (datetime) {
          return datetime.toString().slice(0, 25);
        },
        count: function (list) {
          return list.length;
        },
        voteCalc: function (up, down): number {
          return up - down;
        },
      },
    }),
  );
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
