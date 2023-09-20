'use client'

import { useRouter } from "next/navigation";
import Container from "../Container";

const Footer = () => {
    const router = useRouter();

    return (
        <Container>
            <div className="
             fixed 
             bottom-0 
             left-0 
             right-0 
             bg-white
             p-4
             flex 
             flex-row 
             justify-center
             gap-3
            ">
                <div
                className="
                flex
                flex-row
                ">
                        <button 
                        onClick={()=> router.push('/favorites')}
                        className="
                        flex-grow-0 
                        flex-shrink-0 
                        px-2 
                        py-2 
                        bg-green-500 
                        text-white 
                        font-semibold 
                        rounded
                        ">
                            Following
                        </button>
                    </div>
                <hr />
                <div
                className="
                flex
                flex-row
                ">
                        <button 
                        onClick={()=> router.push('/explore')}
                        className="
                        flex-grow-0 
                        flex-shrink-0 
                        px-2 
                        py-2 
                        bg-green-500 
                        text-white 
                        font-semibold 
                        rounded
                        ">
                            Explore
                        </button>
                    </div>
                <hr />
                <div
                className="
                flex
                flex-row
                ">
                        <button 
                        onClick={()=> router.push('/explore')}
                        className="
                        flex-grow-0 
                        flex-shrink-0 
                        px-2 
                        py-2 
                        bg-green-500 
                        text-white 
                        font-semibold 
                        rounded
                        ">
                            Upload 
                        </button>
                    </div>
                <hr />
                <div
                className="
                flex
                flex-row
                ">
                        <button 
                        onClick={()=> router.push('/explore')}
                        className="
                        flex-grow-0 
                        flex-shrink-0 
                        px-2 
                        py-2 
                        bg-green-500 
                        text-white 
                        font-semibold 
                        rounded
                        ">
                            Staff picks
                        </button>
                    </div>
                <hr />

                    <div
                    className="
                    flex
                    flex-row
                    ">
                        <button 
                        onClick={()=> router.push('/favorites')}
                        className="
                        flex-grow-0 
                        flex-shrink-0 
                        px-2 
                        py-2 
                        bg-green-500 
                        text-white 
                        font-semibold 
                        rounded
                        ">
                            Profile
                        </button>
                    </div>
                <hr />
            </div>
        </Container>
      );
    }      
 
export default Footer;