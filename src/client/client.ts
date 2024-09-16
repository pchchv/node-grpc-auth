import {
  AuthServiceClient,
  LoginRequest,
  LoginResult,
} from "../../protos/auth";
import { ServiceError, credentials } from "@grpc/grpc-js";

const loginRequest: LoginRequest = {
  username: "admin",
  password: "qwerty",
};

const client = new AuthServiceClient(
  "localhost:8080",
  credentials.createInsecure(),
);

client.login(
  loginRequest,
  (err: ServiceError | null, response: LoginResult) => {
    console.log(JSON.stringify(response));
  },
);
