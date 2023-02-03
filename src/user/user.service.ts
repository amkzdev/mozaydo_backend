import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    getAllUsers() {
        return 'All Users'
    }

    getUserInfo() {
        return 'User Info'
    }

    createUser() {
        return 'Create Info'

    }

    updateUser() {
        return 'Update Info'

    }

    deleteUser() {
        return 'Delete Info'

    }

}
