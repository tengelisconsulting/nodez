import { ClientConn } from "./src/client_conn";


async function main() {
  const client = new ClientConn("tcp://localhost:9000");
  const req = JSON.stringify({hey: "there"});
  const res = await client.req("TEST", [req]);
  console.log(res);
}

main();