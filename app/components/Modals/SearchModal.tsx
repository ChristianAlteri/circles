'use client'
import qs from 'query-string';
import dynamic from 'next/dynamic'
import { useCallback, useMemo, useState } from "react";
import { Range } from 'react-date-range';
import { formatISO } from 'date-fns';
import { useRouter, useSearchParams } from 'next/navigation';

import useSearchModal from "@/app/hooks/useSearchModal";

import Modal from "./Modal";
import Calendar from "../Inputs/Calender";
import Counter from "../Inputs/Counter";
import CountrySelect, { 
  CountrySelectValue
} from "../Inputs/CountrySelect";
import Heading from '../Heading';

enum STEPS {
    LOCATION = 0,
    DATE = 1,
    INFO = 2
}

const SearchModal = () => {
    const router = useRouter()
    const params = useSearchParams()
    const searchModal = useSearchModal()

    const [location, setLocation] = useState<CountrySelectValue>()
    const [step, setStep] = useState(STEPS.LOCATION)
    const [avgProductPrice, setAvgProductPriceCount] = useState(1)
    const [stockCount, setStockCount] = useState(1)
    const [price, setPriceCount] = useState(1)
    const [dateRange, setDateRange] = useState<Range>({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    })

    const Map = useMemo(() => dynamic(() => import('../Map'), {
        ssr: false,
    }), [location])

    const onBack = useCallback(() => {
        setStep((value) => value - 1);
      }, []);
    
      const onNext = useCallback(() => {
        setStep((value) => value + 1);
      }, []);
    
      const onSubmit = useCallback(async () => {
        if (step !== STEPS.INFO) {
          return onNext();
        }
    
        let currentQuery = {};
    
        if (params) {
          currentQuery = qs.parse(params.toString())
        }
    
        const updatedQuery: any = {
          ...currentQuery,
          location: location?.value,
          avgProductPrice,
          stockCount,
          price,
        };
    
        if (dateRange.startDate) {
          updatedQuery.startDate = formatISO(dateRange.startDate);
        }
    
        if (dateRange.endDate) {
          updatedQuery.endDate = formatISO(dateRange.endDate);
        }
    
        const url = qs.stringifyUrl({
          url: '/',
          query: updatedQuery,
        }, { skipNull: true });
    
        setStep(STEPS.LOCATION);
        searchModal.onClose();
        router.push(url);
      }, 
      [
        step, 
        searchModal, 
        location, 
        router, 
        avgProductPrice, 
        stockCount,
        dateRange,
        price,
        onNext,
        params
      ]);

      const actionLabel = useMemo(() => {
        if (step === STEPS.INFO) {
          return 'Search'
        }
    
        return 'Next'
      }, [step]);
    
      const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.LOCATION) {
          return undefined
        }
    
        return 'Back'
      }, [step]);

      let bodyContent = (
        <div className="flex flex-col gap-8">
          <Heading
            title="Where do you want to shop?"
            subtitle="Find a curated wardrobe near you!"
          />
          <CountrySelect 
            value={location} 
            onChange={(value) => 
              setLocation(value as CountrySelectValue)} 
          />
          <hr />
          <Map center={location?.latlng} />
        </div>
      )

      if (step === STEPS.DATE) {
        bodyContent = (
          <div className="flex flex-col gap-8">
            <Heading
              title="When do you plan to go?"
              subtitle="Make sure the seller is free!"
            />
            <Calendar
              onChange={(value) => setDateRange(value.selection)}
              value={dateRange}
            />
          </div>
        )
      }
    
      if (step === STEPS.INFO) {
        bodyContent = (
          <div className="flex flex-col gap-8">
            <Heading
              title="More information"
              subtitle="Find your perfect place!"
            />
            <Counter 
              onChange={(value) => setAvgProductPriceCount(value)}
              value={avgProductPrice}
              title="Average Product Price" 
              subtitle="What deals are you looking for?"
            />
            <hr />
            <Counter 
              onChange={(value) => setStockCount(value)}
              value={stockCount}
              title="Stock" 
              subtitle="How much stock do you want to shop?"
            />        
            <hr />
            <Counter 
              onChange={(value) => {
                setPriceCount(value)
              }}
              value={price}
              title="Booking Price"
              subtitle="How much are you willing to pay to book?"
            />
          </div>
        )
      }

      return (
        <Modal
          isOpen={searchModal.isOpen}
          title="Filters"
          actionLabel={actionLabel}
          onSubmit={onSubmit}
          secondaryActionLabel={secondaryActionLabel}
          secondaryAction={step === STEPS.LOCATION ? undefined : onBack}
          onClose={searchModal.onClose}
          body={bodyContent}
        />
      );
    }

 
export default SearchModal;