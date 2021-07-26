"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const exphbs = require("express-handlebars");
const cookieParser = require("cookie-parser");
const express = require("express");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(express.static(path_1.join(__dirname, '..', 'public/assets')));
    app.use(express.static(path_1.join(__dirname, '..', 'public/assets/bootstrap')));
    app.setBaseViewsDir(path_1.join(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    app.use(cookieParser());
    app.engine('.hbs', exphbs({
        extname: '.hbs',
        defaultLayout: 'main',
        partialsDir: path_1.join(__dirname, '..', 'views/partials'),
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
            voteCalc: function (up, down) {
                return up - down;
            },
        },
    }));
    await app.listen(process.env.PORT || 3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map