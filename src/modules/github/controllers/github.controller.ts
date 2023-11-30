import { Controller, Param, Query, Get } from '@nestjs/common';
import { GithubService } from '../services/github.service';

@Controller('github')
export class GithubController {

    constructor(private readonly gitHubService: GithubService) {}

    @Get()
    getHello(): string {
        return this.gitHubService.getHello();
    }

    @Get('commits')
    async fetchData(@Query('url') url: string): Promise<any> {
        return await this.gitHubService.fetchGithubCommits(url);            
    }

}
