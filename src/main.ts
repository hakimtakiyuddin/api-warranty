import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Warranty API')
    .setDescription('The warranty API description')
    .setVersion('1.0')
    .addTag('warranty')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-warranty', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
