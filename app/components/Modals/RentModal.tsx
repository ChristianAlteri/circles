'use client';



import useRentModal from "@/app/hooks/useRentModal";
import { useMemo, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { categories } from "../Navbar/Categories";

import Modal from "./Modal";
import Heading from "../Heading";


import CategoryInput from "../Inputs/CategoryInput";
import CountrySelect from "../Inputs/CountrySelect";
import dynamic from "next/dynamic";

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5,
  }


const RentModal = () => {

    const rentModal = useRentModal()

    const [step, setStep] = useState(STEPS.CATEGORY);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { 
            errors 
        },
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            category: '',
            location: null,
            imageSrc: '',
            price: 1,
            title: '',
            description: ''
        }
    });

    const category = watch('category');
    const location = watch('location');

    const Map = useMemo(() => dynamic(() => import('../Map'), { 
      ssr: false 
    }), [location]);

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value);{
            shouldValidate: true
            shouldDirty: true
            shouldTouch: true
        }
    }

    const onBack = () => {
        setStep((value) => value - 1);
    }

    const onNext = () => {
        setStep((value) => value + 1);
    }

    const actionLabel = useMemo(() => {
        if (step === STEPS.PRICE) {
          return 'Create'
        }
    
        return 'Next'
      }, [step]);

      const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY) {
          return undefined
        }
    
        return 'Back'
      }, [step]);

      let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading 
                title="Which category best describes your clothes?"
                subtitle="Pick a category and we'll guide you through the rest!"
            />
            <div 
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      > 
      {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
            onClick={(category) => setCustomValue('category', category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div> 
    )

    if (step === STEPS.LOCATION) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading 
                    title="Where are you located?"
                    subtitle="We need your location so customers can find your store 🌍"
                />
                <CountrySelect
                value={location}
                onChange={(value) => setCustomValue('location', value)} 
                />
                <Map center={location?.latlng} />
              </div>
        )
    } 

    return ( 

        <Modal 
        isOpen={rentModal.isOpen}
        onClose={rentModal.onClose}
        onSubmit={onNext}
        actionLabel={actionLabel}  
        secondaryActionLabel={secondaryActionLabel}  
        secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}  
        title="Sell with us!"
        body={bodyContent}
        />

     );
}
 
export default RentModal;