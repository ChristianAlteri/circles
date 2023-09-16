'use client';



import useRentModal from "@/app/hooks/useRentModal";
import { useMemo, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { categories } from "../Navbar/Categories";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import Modal from "./Modal";
import Heading from "../Heading";


import CategoryInput from "../Inputs/CategoryInput";
import CountrySelect from "../Inputs/CountrySelect";
import dynamic from "next/dynamic";
import Counter from "../Inputs/Counter";
import Input from "../Inputs/Input";
import ImageUpload from "../Inputs/ImageUpload";


enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5,
  }


const RentModal = () => {

    const router = useRouter();
    const rentModal = useRentModal()

    const [step, setStep] = useState(STEPS.CATEGORY);
    const [isLoading, setIsLoading] = useState(false);

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
            price: 0,
            stockCount: 50,
            avgProductPrice: 20,
            title: '',
            description: ''
        }
    });

    const category = watch('category');
    const location = watch('location');
    const stockCount = watch('stockCount');
    const avgProductPrice = watch('avgProductPrice');
    const imageSrc = watch('imageSrc');

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

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
      if (step !== STEPS.PRICE) {
        return onNext();
      }
      setIsLoading(true);
    
      axios.post('/api/listings', data)
        .then(() => {
        toast.success('Listing created!');
        router.refresh();
        reset();
        setStep(STEPS.CATEGORY)
        rentModal.onClose();
      })
      .catch(() => {
        toast.error('Something went wrong.');
      })
      .finally(() => {
        setIsLoading(false);
      })  

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
                subtitle="Pick one category and we'll guide you through the rest!"
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
                    title="Where is your store located?"
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

    if (step === STEPS.INFO) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading 
                    title="Tell us about your wardrobe"
                    subtitle="Share some information about your clothes, store and what customers can expect when shopping with you!"
                />
                <Counter 
                title="Stock"
                subtitle="On average, how many items do you have in your store?"
                value={stockCount}
                onChange={(value) => setCustomValue('stockCount', value)}
                />
                <hr />
                <Counter 
                title="Average product price"
                subtitle="What is the average price of a single product in your store?"
                value={avgProductPrice}
                onChange={(value) => setCustomValue('avgProductPrice', value)}
                />
                {/* <Input
                  id="price"
                  label="Price"
                  formatPrice
                  type="number"
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  required
                  // value={avgProductPrice}
                  // onChange={(value) => setCustomValue('avgProductPrice', value)}
                /> */}
            </div>
        )
      }

      if (step === STEPS.IMAGES) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading 
                    title="Show us your wardrobe"
                    subtitle="Upload some images of your store so customers can see what you have to offer!"
                />
                <ImageUpload
                    value={imageSrc}
                    onChange={(value) => setCustomValue('imageSrc', value)}          
                />
            </div>
        )
      }

      if (step === STEPS.DESCRIPTION) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading 
                    title="Describe your store"
                    subtitle="Keep it short and sweet!"
                />
                <Input 
                  id="title"
                  label="Your store name - 'Stella's Vintage'"
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  required
                />
                <hr />
                <Input 
                  id="description"
                  label="Description - 'Hey my names Stella and i love vintage desinger clothes!'"
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  required
                />
            </div>
        )
      }

      if (step === STEPS.PRICE) {
        bodyContent = (
          <div
          className="flex flex-col gap-8"
          >
            <Heading 
              title="How much do you want to charge per visit?"
              subtitle="Set a price for your private viewings and we'll take care of the rest!"
            />
            <Input
              id="price"
              label="Price"
              formatPrice
              type="number"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
          </div>


        )
      }


    return ( 

        <Modal 
        isOpen={rentModal.isOpen}
        onClose={rentModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        actionLabel={actionLabel}  
        secondaryActionLabel={secondaryActionLabel}  
        secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}  
        title="Sell with us!"
        body={bodyContent}
        />

     );
}
 
export default RentModal;