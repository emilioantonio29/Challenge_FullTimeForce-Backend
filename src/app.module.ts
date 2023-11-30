import { Module } from '@nestjs/common';
import { GithubModule } from './modules/github/github.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [GithubModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
