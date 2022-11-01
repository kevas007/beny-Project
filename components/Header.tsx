import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { SearchIcon, ShoppingBagIcon, SunIcon, UserIcon } from '@heroicons/react/outline';
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from 'next/router';
import en from '../locales/en';
import fr from '../locales/fr';
import ReactFlagsSelect from "react-flags-select";




function Header() {
const {data: session} = useSession();
const items = useSelector(selectBasketItems);
const router = useRouter();
const { locale } = router;
const t = locale === 'en' ? en : fr;
const changeLanguage = (code: string) => {
    const prod = (code === "US") ? "EN" : code;
    setSelectedFlag(code);
    const localeLang = {
        locale: prod.toLocaleLowerCase()
        };
    console.log(locale);
    router.push(router.pathname, router.asPath, localeLang);
    };
const [selectedFlag, setSelectedFlag] = useState((locale === "en") ? "US" : locale?.toUpperCase());

    return (
        <header className='sticky top-0 z-30 flex w-full items-end justify-between  p-4'>
            <div className='flex items-center justify-center md:w-1/5'>
                <Link href="/">
                    <div className='relative  w-5 cursor-pointer opacity-75 h-10 transition hover:opacity-100'>
                        <Image 
                        src="https://rb.gy/vsvv2o" 
                        layout="fill" 
                        objectFit="contain"/>
                    </div>
                </Link>
            </div>
            <div className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
                <a href="" className="headerLink">{t.product}</a>
                <a href="" className="headerLink cursor-not-allowed">{t.explore}</a>
                <a href="" className="headerLink cursor-not-allowed">{t.support}</a>
                <a href="" className="headerLink cursor-not-allowed">Business</a>
            </div>
            <div className='flex items-center justify-center gap-x-4 md:w-1/5'>
                <SearchIcon className="headerIcon cursor-not-allowed"/>
                <Link href="/checkout">
                    <div className='relative cursor-pointer'>
                        {items.length > 0 && (
                    <span className='absolute -right-1 -top-1 z-50 flex h-4  w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white'>
                        {items.length}
                    </span>
                    )}
                    <ShoppingBagIcon className='headerIcon'/>
                </div>
                </Link>

                {session ? (
                    <Image
                    src = {
                        session.user?.image ||
                        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"}
                    alt=''
                    className='cursor-pointer rounded-full'
                    width={34}
                    height={34}
                    onClick={() => signOut()}
                    />
                    ) : (
                        <UserIcon className='headerIcon' 
                        onClick={() => signIn()}
                        />
                )}
                <ReactFlagsSelect
                    countries={["US", "FR"]}
                    customLabels={{ US: "EN", FR: "FR" }}
                    fullWidth={false}
                    showOptionLabel={false}
                    selected={selectedFlag || "US"}
                    rfsKey="app-lang"
                    onSelect={changeLanguage}
                    placeholder={locale}
                    />
                
            </div>
        </header>
    )
}

export default Header