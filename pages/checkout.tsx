import Head from "next/head";
import Header from "../components/Header";
import { selectBasketItems, selectBasketTotal } from "../redux/basketSlice";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Stripe from "stripe";
import { fetchPostJSON } from "../utils/api-helpers";
import getStripe from "../utils/get-stripejs";
import Link from 'next/link'
import en from '../locales/en';
import fr from '../locales/fr';
import Footer from '../components/Footer';
import {Product as ProductType} from '../typings';

function checkout() {
    const items = useSelector(selectBasketItems);
    const router = useRouter();
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState (
        {} as { [key: string]: ProductType[] }
    );
    const basketTotal = useSelector(selectBasketTotal);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item._id] = results[item._id] || []).push(item);
            return results
        }, {} as {[key: string]: ProductType[]});
        
        setGroupedItemsInBasket(groupedItems);
    }, [items]);
    const createCheckoutSession = async () => {
        setLoading(true)

    const checkoutSession: Stripe.Checkout.Session = await fetchPostJSON("/api/checkout_sessions", {
        items: items,
    }
    );
    if ((checkoutSession as any).statusCode === 500){
        console.error((checkoutSession as any).message);
        return null;
    }
    //Redirect to checkout
    const stripe = await getStripe()
    const { error } = await stripe!.redirectToCheckout({
        sessionId: checkoutSession.id,
    });
    console.warn(error.message);
    setLoading(false);
    };
    const {locale} = router;
    const t = locale === 'en' ? en : fr;

  return (
    <div className="min-h-screen overflow-hidden bg-[#E7ECEE]">
        <Head>
            <title>Bag - Apple</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
        <main className="mx-auto max-w-5xl pb-[228px]">
            <div className="px-5">
                <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
                    {items.length > 0 ? `${t.review}` : t.bagempty}
                </h1>
                <p className="my-4">{t.free}</p>
                {items.length === 0 && (
                    <Button title={t.continueshopping} onClick={() => router.push("/")}/>
                )}
            </div>
            {items.length > 0 && (
                <div className="mx-5 md:mx-8">
                    
                    {Object.entries(groupedItemsInBasket).map(([key, items])=> (
                        <CheckoutProduct key={key} items={items} id={key}/>
                    ))}
                <div className="my-12 mt-6 ml-auto max-w-3xl">
                    <div className="divide-y divide-gray-300">
                        <div className="pb-4">
                            <div className="flex justify-between">
                                <p>{t.subtotal}</p>
                                <p>
                                    <Currency quantity={basketTotal} currency="EUR"/>
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <p>{t.shipping}</p>
                                <p>{t.freeshipping}</p>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-x-1 lg:flex-row">
                                    {t.estimated}:{""}
                                    <p className="flex cursor-not-allowed items-end text-blue-500 hover:underline">
                                        {t.zip}
                                        <ChevronDownIcon className="h-6 w-6 text-blue-500"/>
                                    </p>
                                </div>
                                <p>€ -</p>
                            </div>
                        </div>
                        <div className="flex justify-between pt-4 text-xl font-semibold">
                            <h4>{t.total}</h4>
                            <h4>
                                <Currency quantity={basketTotal} currency="EUR"/>
                            </h4>
                        </div>
                    </div>
                    <div className="my-14 space-y-4">
                        <h4 className="text-xl font-semibold">
                            {t.checkout}
                        </h4>
                        <div className="flex flex-col gap-4 md:flex-row">
                            <div className="order-2 flex flex-1 flex-col items-center rounded-xl bg-gray-200 p-8 py-12 text-center">
                                <h4 className="mb-4 flex flex-col text-xl font-semibold">
                                    <span>{t.monthly}</span>
                                    <span>{t.withapplecard}</span>
                                    <span>
                                        {t.percentage}<sup className="-top-1">◊</sup>
                                    </span>
                                </h4>
                                <Button title={t.applecard}/>
                                <p className="mt-2 max-w-[240px] text-[13px]">
                                    {t.applicable}
                                </p>
                            </div>
                            <div className="flex flex-1 flex-col items-center space-y-8 rounded-xl bg-gray-200 p-8 py-12 md:order-2">
                                <h4 className="mb-4 contents flex-col text-xl font-semibold">
                                    {t.full}
                                    <span>
                                        <Currency quantity={basketTotal} currency="EUR"/>
                                    </span>
                                </h4>
                                <Button 
                                noIcon 
                                loading={loading} 
                                title={t.checkoutcheckout} 
                                width="w-full" 
                                onClick={createCheckoutSession}
                                />
                            </div>
                        </div>
                            <div className="text-center justify-center py-12 text-bold text-xl-3 underline decoration-4 text-2xl">
                                <h3>{t.personalinformation}</h3>
                                <p>{t.educational}</p>
                            </div>
                    </div>
                </div>
                </div>
            )}
        </main>

        <Footer/>
    </div>
  )
}

export default checkout