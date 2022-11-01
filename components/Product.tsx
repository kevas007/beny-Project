import { ShoppingCartIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react'
import { urlFor } from '../sanity';
import { useDispatch } from "react-redux";
import { addToBasket } from '../redux/basketSlice';
import toast from 'react-hot-toast';
import Currency from "react-currency-formatter";
import { useRouter } from "next/router";
import en from '../locales/en';
import fr from '../locales/fr';
import {Product as ProductType} from '../typings';

interface Props {
    product: ProductType;
}

function Product({product}: Props) {
    const dispatch = useDispatch()
    const addItemToBasket = () => {
        dispatch(addToBasket(product));

        toast.success(`${product.title} ${t.basket}`, {
            position: "bottom-center",
        });
    }
    const router = useRouter();
    const {locale} = router;
    const t = locale === 'en' ? en : fr;
    return (
        <div className='flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[500px] md:w-[400px] md:p-10' id='product'>
            <div className='relative h-64 w-full md:h-72'>
                <Image src={urlFor(product.image[0]).url()} layout="fill" objectFit='contain'/>
            </div>
            <div className='flex flex-1 items-center justify-between space-x-3'>
                <div className='space-y-2 text-xl text-white md:text-2xl'>
                    <p>{product.title}</p>
                    <Currency quantity = {product.price} currency="EUR"/>
                </div>
                <div className='flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 md:h-[70px] md:w-[70px]' onClick={addItemToBasket}>
                    <ShoppingCartIcon className='h-8 w-8 text-white'/>
                </div>
            </div>
        </div>
    )
}

export default Product

