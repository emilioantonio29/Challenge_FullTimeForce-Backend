import { 
    Injectable, 
    NotFoundException, 
    InternalServerErrorException, 
    HttpStatus } from '@nestjs/common';
import { mockedUsers } from 'src/common/mock/users.mock';

@Injectable()
export class UserService {

    findUserByEmailAndPassword(email: string, password: string): any {
        try {

            const foundUser = mockedUsers.find(
              (user) => user.email === email && user.password === password,
            );
            
            if(foundUser){
                return {email:foundUser.email, name:foundUser.name, age:foundUser.age};
            }else{
                throw new NotFoundException();
            }
            
        } catch (error) {
            
            if(error instanceof NotFoundException){ 
                throw new NotFoundException(
                    {
                        status: HttpStatus.NOT_FOUND,
                        message: process.env.MESSAGE_USER_NOTFOUND
                    }
                );
            }else{
                throw new InternalServerErrorException();
            }

        }
      }
}
