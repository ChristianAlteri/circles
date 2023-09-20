'use client'

import { SafeListing, SafeReservation, SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";


interface UserProfileCardProps {
    data: SafeListing;
    reservation?: SafeReservation;
    onAction?: (id: string) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionId?: string;
    currentUser?: SafeUser | null
  };

const UserProfileCard: React.FC<UserProfileCardProps> = ({
    data,
    reservation,
    onAction,
    disabled,
    actionLabel,
    actionId = "",
    currentUser
}) => {

    const router = useRouter();

    return ( 

    <div
    onClick={()=> router.push('/favorites')}
    className="
            border-4 
            border-green-400
            rounded-xl
            p-2
            "
    >
        {data.userId} 
    </div>

       
   );
}
 
export default UserProfileCard;