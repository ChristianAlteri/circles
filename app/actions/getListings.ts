import prisma from "@/app/libs/prismadb"

// export interface IListingsParams {
//   userId?: String;
// }

// This is really where the power of the filters can come in  this is essentially filtering by created at
// params: IListingsParams
export default async function getListings() {
    try {



        const listings = await prisma.listing.findMany({     
          orderBy: {
                createdAt: 'desc'
            }
        });    

        const safeListings = listings.map((listing) => ({
            ...listing,
            createdAt: listing.createdAt.toISOString(),
        }));
        
        return safeListings;
    } catch (error: any) {
        throw new Error(error);
    }
}