import { CheckIcon, ChevronDownIcon, ChevronUpIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Button from '../components/Button';
import Currency from "react-currency-formatter";
import { GetServerSideProps } from 'next';
import { fetchLineItems } from '../utils/fetchLineItems';
import { useSession } from "next-auth/react";
import en from '../locales/en';
import fr from '../locales/fr';
import ReactFlagsSelect from "react-flags-select";
import { StripeProduct } from '../typings';


interface Props {
  products: StripeProduct[];
}

function Success({products}: Props) {
  console.log(products);
  const router = useRouter();
  const {session_id} = router.query;
  const [mounted, setMounted] = useState(false);
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const subtotal = products.reduce(
    (acc, product) => acc + product.price.unit_amount / 100, 0
  );
  const {data:session} = useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isTabletOrMobile = useMediaQuery({query: "(max-width: 1024px)"});
  const showOrderSummaryCondition = isTabletOrMobile ? showOrderSummary : true;
  const handleShowOrderSummary = () => {
    setShowOrderSummary(!showOrderSummary);
  };
  const { locale } = router;
  const t = locale === 'en' ? en : fr;
  const changeLanguage = (code: string) => {
    const locale = (code === "US") ? "EN" : code;
    setSelectedFlag(code);
    router.push(router.pathname, router.asPath, { locale });
    };

    const [selectedFlag, setSelectedFlag] = useState((locale === "en") ? "US" : locale?.toUpperCase());

  return (
    <div>
      <Head>
        <title>Thank you! - Apple</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='flex relative mx-auto max-w-xl'>
      {/* <select
                    onChange={changeLanguage}
                    defaultValue={locale}
                    className="opacity-75 text-shadow-sm text-lg bg-transparent tracking-wide absolute left-72 top-20">
                    <option className="text-black" value="en">EN</option>
                    <option className="text-black" value="fr">FR</option>
            </select> */}
            <ReactFlagsSelect
                    countries={["US", "FR"]}
                    customLabels={{ US: "EN", FR: "FR" }}
                    fullWidth={false}
                    showOptionLabel={false}
                    selected={selectedFlag || "US"}
                    rfsKey="app-lang"
                    onSelect={changeLanguage}
                    placeholder={locale}
                    className="absolute left-72 top-20"
                    />
        <Link href= "/">
          <div className='relative ml-4 h-16 w-8 cursor-pointer transition lg:hidden'>
            <Image 
            src="https://rb.gy/vsvv2o"
            layout="fill"
            objectFit="contain"
            />
          </div>
        </Link>
      </header>
      <main className='grid grid-cols-1 lg:grid-cols-9'>
        <section className='order-2 lg:col-span-5 mx-auto max-w-xl pb-12 lg:mx-0 lg:max-w-none lg:pr-16 lg:pt-16 xl:pl-16 2xl:pl-44'>
          <Link href="/">
            <div className='relative ml-14 hidden h-24 w-12 cursor-pointer transition lg:inline-flex'>
              <Image 
              src="https://rb.gy/vsvv2o"
              layout="fill"
              objectFit="contain"
              />
            </div>
          </Link>
          <div className='my-8 ml-4 flex space-x-4 lg:ml-14 xl:ml-0'>
            <div className='flex h-11 w-11 items-center justify-center rounded-full border-2 border-black'>
              <CheckIcon className='h-8 w-8' />
            </div>
            <div>
              <p className='text-sm text-gray-600'>Order #{session_id?.slice(-5)}</p>
              <h4 className='text-lg'>
                {t.thankyou} {" "}
                {session ? session.user?.name?.split("") : "Guest"}
              </h4>
            </div>
          </div>
          <div className='mx-4 divide-y divide-gray-300 rounded-md border border-gray-300 p-4 lg:ml-14'>
            <div className='space-y-2 pb-3'>
              <p>{t.orderconfirmed}</p>
              <p className='text-sm text-gray-600'>
                {t.accepted}
              </p>
            </div>
            <div className='pt-3 text-sm'>
              <p className='font-medium text-gray-600'>{t.tracking}</p>
              <p>CNB21441622</p>
            </div>
          </div>
          <div className='my-4 mx-4 space-y-2 rounded-md border border-gray-300 p-4 lg:ml-14'>
            <p>{t.updates}</p>
            <p className='text-sm text-gray-600'>
              {t.deliveryupdates}
            </p>
          </div>
          <div className='mx-4 flex flex-col items-center justify-between text-sm lg:ml-14 lg:flex-row'>
            <p className='hidden lg:inline'>{t.help}</p>
            {mounted && (
              <Button
              title={t.continueshopping}
              onClick={() => router.push("/")}
              width={isTabletOrMobile ? "w-full" : undefined}
              padding="py-4"
              />
            )}
          </div>
        </section>
        {mounted && (
          <section className='overflow-y-scroll border-y border-l border-gray-300 bg-[#FAFAFA] lg:order-2 lg:col-span-4 lg:h-screen lg:border-y-0'>
            <div className={`w-full ${showOrderSummaryCondition && "border-b"} border-gray-300 text-sm lg:hidden`}>
              <div className='mx-auto flex max-w-xl items-center justify-between px-4 py-6'>
                <button onClick={handleShowOrderSummary} className='flex items-center space-x-2'>
                  <ShoppingCartIcon className='h-6 w-6'/>
                  <p>{t.showreview}</p>
                  {showOrderSummaryCondition ? (
                    <ChevronUpIcon className='h-4 w-4' />
                  ) : (
                    <ChevronDownIcon className='h-4 w-4'/>
                  )}
                </button>
                <p className='text-xl font-medium text-black'>
                  <Currency  quantity={subtotal + 20} currency="EUR"/>
                </p>
              </div>
            </div>
            {showOrderSummaryCondition && (
              <div className='mx-auto max-w-xl divide-y border-gray-300 px-4 py-4 lg:mx-0 lg:max-w-lg lg:px-10 lg:py-16'>
                <div className='space-y-4 pb-4'>
                  {products.map((product) =>(
                    <div key={product.id} className="flex items-center space-x-4 text-sm font-medium">
                      <div className='relative flex h-16 w-16 items-center justify-center rounded-md border border-gray-300 bg-[#F1F1F1] text-xs text-white'>
                        <div className='relative h-7 w-7 animate-bounce rounded-md'>
                          <Image src="https://rb.gy/vsvv2o" layout='fill' objectFit='contain'/>
                        </div>
                        <div className='absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[gray] text-xs'>
                          {product.quantity}
                        </div>
                      </div>
                      <p className='flex-1'>{product.description}</p>
                      <p>
                        <Currency quantity={product.price.unit_amount /100} currency={product.currency}/>
                      </p>
                    </div>
                  ))}
                </div>
                <div className='space-y-1 py-4'>
                  <div className='flex justify-between text-sm'>
                    <p className='text-[gray]'>{t.subtotal}</p>
                    <p className='font-medium'>
                      <Currency quantity={subtotal} currency="EUR"/>
                      </p>
                  </div>
                  <div className='flex justify-between text-sm'>
                    <p className='text-[gray]'>{t.discount}</p>
                    <p className='text-[gray]'></p>
                  </div>
                  <div className='flex justify-between text-sm'>
                    <p className='text-[gray]'>{t.shipping}</p>
                    <p className='font-medium'>
                      <Currency quantity={20} currency="EUR"/>
                    </p>
                  </div>
                </div>
                <div className='flex justify-between pt-4'>
                  <p>Total</p>
                  <p className='flex items-center gap-x-2 text-xs text-[gray]'>
                    EUR
                    <span className='text-xl font-medium text-black'>
                      <Currency quantity={subtotal + 20} currency="EUR"/>
                    </span>
                  </p>
                </div>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  )
}

export default Success;

export const  getServerSideProps: GetServerSideProps<Props> = async ({query}) => {
  const sessionId = query.session_id as string;
  const products = await fetchLineItems(sessionId);
  return {
    props: {
      products,
    },
  };
};