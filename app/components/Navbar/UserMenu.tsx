'use client';

import MenuItem from "./MenuItem";
import Avatar from "../Avatar";

import { AiOutlineMenu } from "react-icons/ai";

import { useCallback, useState } from "react";

import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRentModal from "@/app/hooks/useRentModel";
import { useRouter } from "next/navigation";

interface UserMenuProps {
    currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {

    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()
    const rentModal = useRentModal()
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false)


    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
        console.log('click menu top-right');
    }, []);


    const onSellWithUs = useCallback(() => {
        if (!currentUser) {
            return loginModal.onOpen();
        }

        rentModal.onOpen();

    }, [currentUser, loginModal, rentModal ]);


    return ( 
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={onSellWithUs}
                    className="
                    
                    hidden
                    md:block
                    text-sm
                    font-semibold
                    py-3
                    px-4
                    rounded-full
                    hover:bg-neutral-100
                    transition
                    cursor-pointer"
                    >
                        Sell with us!
                </div>
                <div 
                    onClick={toggleOpen}
                    className="
                    border-2 border-green-500
                    p-4
                    md:py-1
                    md:px-2
                    
                    flex
                    flex-row
                    items-center
                    gap-3
                    rounded-full
                    cursor-pointer
                    hover:shadow-md
                    transition
                    "
                >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar src={currentUser?.image}/>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div
                    className="
                    border-2 border-green-500
                    absolute
                    rounded-xl
                    shadow-md
                    w-[40vw]
                    md:w-3/4
                    bg-white
                    overflow-hidden
                    right-0
                    top-12
                    text-sm
                    "
                >
                    <div className="flex flex-col cursor-pointer">
                        {currentUser ? (
                        <>
                            <MenuItem
                            // TODO: Change this route to my reservations /reservations
                                onClick={()=> router.push('/trips')}
                                label="My reservations"
                            />
                            {/* <MenuItem
                            // TODO: Change this route to my listings /listings
                                onClick={()=> router.push('/reservations')}
                                label="Reservations for my store"
                            /> */}
                            <MenuItem
                                onClick={() => router.push('/properties')}
                                label="My store"
                            />
                            {/* <MenuItem
                                onClick={rentModal.onOpen}
                                label="Add a store"
                            /> */}
                            <hr />
                            {/* <MenuItem
                                onClick={()=> router.push('/favorites')}
                                label="Following"
                            /> */}
                            <MenuItem
                                onClick={()=> signOut()}
                                label="Logout"
                            />
                        </>
                        ) : (
                        <>
                            <MenuItem
                            onClick={loginModal.onOpen}
                            label="Login"
                            />
                            <MenuItem
                            onClick={registerModal.onOpen}
                            label="Sign Up"
                            />
                        </>
                        )}
                    </div>
                </div>

            )}
        </div>
     );
}
 
export default UserMenu; 