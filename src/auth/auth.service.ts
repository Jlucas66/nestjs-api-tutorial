import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return 'Estou logando.';
  }

  signup() {
    return 'Estou deslogando.';
  }
}
