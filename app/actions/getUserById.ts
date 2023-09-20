// import prisma from "@/app/libs/prismadb";

// interface IParams {
//   userId?: string;
// }

// export default async function getUserById(
//   params: IParams
// ) {
//   try {
//     const { userId } = params;

//     const user = await prisma.listing.findUnique({
//       where: {
//         userId: userId,
//       },
//       include: {
//         user: true
//       }
//     });

//     if (!user) {
//       return null;
//     }

//     return {
//       ...user,
//       createdAt: user.createdAt.toString(),
      
//     };
//   } catch (error: any) {
//     throw new Error(error);
//   }
// }