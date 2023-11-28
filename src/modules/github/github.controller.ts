import { Controller, Get } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {

    constructor(private readonly gitHubService: GithubService) {}

    @Get()
    getHello(): string {
        return this.gitHubService.getHello();
    }

}
