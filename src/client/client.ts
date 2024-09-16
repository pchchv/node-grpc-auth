import { AuthServiceClient, LoginRequest } from "../../protos/auth";
import { credentials } from "@grpc/grpc-js";

const loginRequest: LoginRequest = {
  username: "admin",
  password: "qwerty",
};

const client = new AuthServiceClient(
  "localhost:8080",
  credentials.createInsecure()
);
