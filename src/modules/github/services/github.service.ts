import { 
    Injectable, 
    NotFoundException, 
    InternalServerErrorException,
    BadRequestException,
    HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { extractGitHubRepoInfo } from 'src/common/validations/github-utils';

@Injectable()
export class GithubService {

    getHello(): string {
        return process.env.MESSAGE_WELCOME;
    }

    async fetchGithubCommits(url: string): Promise<any> {
        try {

            const githubInfo = extractGitHubRepoInfo(url);

            if(githubInfo !== null){
                const url = `${process.env.GITHUB_API}${githubInfo.owner}/${githubInfo.repoName}${process.env.GITHUB_API_COMMITS}`;
                const response = await axios.get(url);
                return response.data;
            }else{
                throw new BadRequestException();
            }

        } catch (error) {

            if (error instanceof BadRequestException) {
                throw new BadRequestException(
                    {
                        status: HttpStatus.BAD_REQUEST,
                        message: process.env.MESSAGE_INVALID_GITHUB_URL
                    }
                );
            }else if(error.response.status === 404){ 
                // AxiosError: Request failed with status code 404
                throw new NotFoundException(
                    {
                        status: HttpStatus.NOT_FOUND,
                        message: process.env.MESSAGE_GITHUB_API_ERROR
                    }
                );
            }else{
                throw new InternalServerErrorException();
            }

        }
    }

}
