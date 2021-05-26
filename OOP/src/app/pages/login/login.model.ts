export class Login {
  Email: string;
  Password: string;
}

export class AuthenticationResponse {
  expiration: string;
  token: string;
}
