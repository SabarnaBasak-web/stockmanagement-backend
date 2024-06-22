import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Stock Management')
    .setDescription('Stock management api')
    .setVersion('1.0')
    .addTag('stock')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'Bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth',
    )
    .build();

  // const options: SwaggerDocumentOptions = {
  //   operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  // };
  // const externalSchema = JSON.parse(
  //   readFileSync(join(__dirname, 'schema/schema.yaml')).toString(),
  // );

  const document = SwaggerModule.createDocument(app, config);

  // const mergedDocument = {
  //   ...document,
  //   externalSchema,
  // };
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
