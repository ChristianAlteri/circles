import usePriceModal from "@/app/hooks/usePriceModal";
import Modal from "./Modal";
import Heading from "../Heading";

const priceModal = usePriceModal()

const PriceModal = () => {
    return ( 
        <>
            <Heading
            title="Price"
            // <Modal
            //   isOpen={priceModal.isOpen}
            //   title="Filters"
            //   actionLabel={actionLabel}
            //   onSubmit={onSubmit}

            />
            <div>create a price range slider</div>
        </>
     );
}
 
export default PriceModal;