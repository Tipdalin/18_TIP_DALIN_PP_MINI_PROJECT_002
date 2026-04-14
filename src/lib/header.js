import { auth } from "../auth";

export default async function headerToken(){
  const session = await auth();
  console.log(session);

return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${session.user.token}`
  };
}