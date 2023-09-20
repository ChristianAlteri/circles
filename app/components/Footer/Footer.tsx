'use client'

import { useRouter } from "next/navigation";
import Container from "../Container";
import { GrHomeRounded } from "react-icons/gr";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { TbWorldSearch } from "react-icons/tb";
import { PiAlienBold, PiUploadSimpleBold } from "react-icons/pi";

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
             p-2
             flex 
             flex-row 
             justify-center
             gap-6
             border-t-2
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
                        text-white 
                        font-semibold 
                        rounded
                        ">

                        <GrHomeRounded style={{ fontSize: '34px' }} />
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
                        text-white 
                        font-semibold 
                        rounded
                        ">
                            <TbWorldSearch style={{ fontSize: '38px', color: 'black'  }} />
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
                        text-white 
                        font-semibold 
                        rounded
                        ">
                            <PiUploadSimpleBold style={{ fontSize: '38px', color: 'black'  }}/>
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
                        text-white 
                        font-semibold 
                        rounded
                        ">
                            <PiAlienBold  style={{ fontSize: '38px', color: 'black'  }}/>
                        </button>
                    </div>
                <hr />
            </div>
        </Container>
      );
    }      
 
export default Footer;