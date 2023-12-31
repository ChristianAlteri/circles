'use client'

import useCountries from '@/app/hooks/useCountries';
import usePriceModal from '@/app/hooks/usePriceModal';
import useSearchModal from '@/app/hooks/useSearchModal';
import { useSearchParams } from 'next/navigation';
import { BiSearch } from 'react-icons/bi';

const Search = () => {

    const searchModal = useSearchModal()
    const priceModal = usePriceModal()
    const params = useSearchParams()
    const { getByValue } = useCountries

    

    return ( 
        <div
            
            className="
            border-2 border-green-500
            border-[1px]
            w-full
            md:w-auto
            py-2
            rounded-full
            shadow-sm
            hover:shadow-md
            transition
            cursor-pointer
            "
        >
            <div
            className="
            flex
            flex-row
            items-center
            justify-between
            "
            >
                
                <div
                    onClick={searchModal.onOpen}
                    className="
                    text-sm
                    font-semibold
                    px-6
                    "
                    >
                        {/* Change to filter by brands */}
                        Brand    
                </div>
                <div
                // Make Price modal
                    onClick={priceModal.onOpen}
                    className="
                    hidden
                    sm:block
                    text-sm
                    font-semibold
                    px-6
                    border-x-[1px]
                    flex-1
                    text-center
                    "
                    >
                        {/* Change to filter by brands */}
                        Price    
                </div>
                <div
                // Make size modal
                    className="
                    hidden
                    sm:block
                    text-sm
                    font-semibold
                    px-6
                    border-x-[1px]
                    flex-1
                    text-center
                    "
                    >
                    {/* text to be displayed */}
                    {/* Change to filter by product price range and size */}
                    Size
                </div>   
                <div
                    className="
                    text-sm
                    pl-6
                    pr-2
                    text-gray-600
                    flex
                    flex-row
                    items-center
                    gap-3
                    "
                    >
                        <div className="hidden sm:block"> Shop by </div>
                        <div
                        className="
                        p-2
                        bg-green-500 
                        rounded-full
                        text-white
                        "
                        >
                            <BiSearch size={18} />
                        </div>
                </div>
            </div>
        </div>
     );
}
 
export default Search;