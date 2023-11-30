import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserLoginDTO } from '../dtos/user-login-request';

@Controller('user')
export class UserController {
    
    constructor(private readonly userService: UserService) {}

    @Post('login')
    @HttpCode(200)
    async loginUser(@Body() loginDTO: UserLoginDTO): Promise<any> {
        
      const { email, password } = loginDTO;
  
      return await this.userService.findUserByEmailAndPassword(email, password);

    }

}
