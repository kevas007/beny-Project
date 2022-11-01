import Link from "next/link";
import { useRouter } from "next/router";
import en from '../locales/en';
import fr from '../locales/fr';


function Footer() {
    const router = useRouter();
  const {locale} = router;
  const t = locale === 'en' ? en : fr;
  return (
    <footer aria-label="Site Footer" className="bottom-0 w-full bg-[#35383C] left-0 right-0">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div>
                    <h3 className='space-y-3 text-5xl font-semibold tracking-wide lg:text-6x xl:text-7xl'>
                        <a href="/" className="fontAppleFooter block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">Apple</a>
                    </h3>
                    <p className="mt-4 max-w-xs text-sm text-white">
                    Powered bu Intellect
                    </p>
                    <p className="mt-4 max-w-xs text-sm text-white">
                    Driven by Values
                    </p>

                    <div className="mt-8 flex gap-6 text-white">
                    <a className="flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#464646] md:h-[40px] md:w-[40px]" href="https://linkedin.com/in/ benedicte-ntambwe" target="_blank" rel="noopener noreferrer">
                        <span className="sr-only"> LinkedIn </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                    </a>

                    <a className="flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#464646] md:h-[40px] md:w-[40px]" href="https://github.com/BenyNtb" target="_blank" rel="noopener noreferrer">
                        <span className="sr-only"> GitHub </span>

                        <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        >
                        <path
                            fill-rule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clip-rule="evenodd"
                        />
                        </svg>
                    </a>
                    </div>
                </div>
                <div
                    className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4"
                >
                    <div>
                    <p className="font-medium text-white">{t.productandservice}</p>

                    <nav
                        aria-label="Footer Nav"
                        className="mt-4 flex flex-col space-y-2 text-sm text-white"
                    >
                        <a className="hover:opacity-75" href=""> Mac </a>
                        <a className="hover:opacity-75" href=""> iPad</a>
                        <a className="hover:opacity-75" href=""> iPhone </a>
                        <a className="hover:opacity-75" href=""> Watches </a>
                        <a className="hover:opacity-75" href=""> AirPods </a>
                        <a className="hover:opacity-75" href=""> {t.tvandhome} </a>
                        <a className="hover:opacity-75" href=""> AirTag </a>
                        <a className="hover:opacity-75" href=""> {t.accessories} </a>
                        <a className="hover:opacity-75" href=""> {t.giftcard} </a>
                    </nav>
                    </div>

                    <div>
                    <p className="font-medium text-white">Apple Store</p>

                    <nav className="mt-4 flex flex-col space-y-2 text-sm text-white">
                        <a className="hover:opacity-75" href=""> {t.findapple}</a>
                        <a className="hover:opacity-75" href=""> Genius Bar </a>
                        <a className="hover:opacity-75" href=""> Today at Apple </a>
                        <a className="hover:opacity-75" href=""> {t.applecamp} </a>
                        <a className="hover:opacity-75" href=""> {t.financing} </a>
                        <a className="hover:opacity-75" href=""> {t.orderstatus} </a>
                        <a className="hover:opacity-75" href=""> {t.shoppinghelps} </a>
                    </nav>
                    </div>

                    <div>
                    <p className="font-medium text-white">{t.aboutapple}</p>

                    <nav className="mt-4 flex flex-col space-y-2 text-sm text-white">
                        <a className="hover:opacity-75" href=""> Newsroom </a>
                        <a className="hover:opacity-75" href=""> {t.leadership} </a>
                        <a className="hover:opacity-75" href=""> {t.carreer} </a>
                        <a className="hover:opacity-75" href=""> {t.investors} </a>
                        <a className="hover:opacity-75" href=""> {t.ethics} </a>
                        <a className="hover:opacity-75" href=""> {t.events} </a>
                        <a className="hover:opacity-75" href=""> {t.contactapple} </a>
                    </nav>
                    </div>

                    <div>
                    <p className="font-medium text-white">Legal</p>

                    <nav className="mt-4 flex flex-col space-y-2 text-sm text-white">
                        <a className="hover:opacity-75" href=""> {t.privacy} </a>
                        <a className="hover:opacity-75" href=""> {t.terms} </a>
                        <a className="hover:opacity-75" href=""> {t.return} </a>
                        <a className="hover:opacity-75" href=""> {t.accessibility} </a>
                    </nav>
                    </div>
                </div>
                </div>

                <p className="mt-8 text-xs text-white">
                    <span>&copy; 2022  </span>
                    <a href="https://github.com/BenyNtb" target="_blank" rel="noopener noreferrer">
                        <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                            <em>B E N Y .</em>
                        </span>
                    </a>
                </p>  
            </div>
        </footer>
  )
}

export default Footer
