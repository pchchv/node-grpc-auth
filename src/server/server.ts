import {
  Server,
  sendUnaryData,
  ServerUnaryCall,
  ServerCredentials,
} from "@grpc/grpc-js";
import {
  LoginCode,
  LoginResult,
  LoginRequest,
  AuthServiceService,
} from "../../protos/auth";

const users = [
  {
    id: 0,
    username: "admin",
    password: "adm1n",
  },
];

const login = (
  call: ServerUnaryCall<LoginRequest, LoginResult>,
  callback: sendUnaryData<LoginResult>,
) => {
  const requestData = call.request;
  const user = users.find(
    (user) =>
      user.username === requestData.username &&
      user.password === requestData.password,
  );

  if (user) {
    const result: LoginResult = {
      loginCode: LoginCode.SUCCESS,
      token: "RandomSecretToken",
    };
    callback(null, result);
  } else {
    const result: LoginResult = {
      loginCode: LoginCode.FAIL,
    };
    callback(null, result);
  }
};

const server = new Server();
server.addService(AuthServiceService, { login });
server.bindAsync("localhost:8080", ServerCredentials.createInsecure(), () => {
  console.log("Server running at http://localhost:8080");
  server.start();
});
