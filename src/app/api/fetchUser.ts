import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


 const getUserDetail = async () => {
  const { getUser } = getKindeServerSession();
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const user = await getUser();
  console.log(user);
  console.log(isUserAuthenticated);

  

};

export default getUserDetail
