import prisma from "@/app/libs/prismadb"

// This is really where the power of the filters can come in  this is essentially filtering by created at
export default async function getListings() {
    try {
        const listings = await prisma.listing.findMany({    
            orderBy: {
                createdAt: 'desc'
            }
        });    

        return listings;
    } catch (error: any) {
        throw new Error(error);
    }
}