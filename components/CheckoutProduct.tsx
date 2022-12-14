import {ChevronDownIcon} from "@heroicons/react/outline";
import Image from "next/image";
import {urlFor} from "../sanity";
// import Currency from "react-currency-formatter";
import {removeFromBasket} from "../redux/basketSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { Product as ProductType } from "../typings";
import en from "../public/locales/en/common.json";
import currencyFormatter from "../utils/currencyHelper";

interface CheckoutProductProps {
    items : ProductType[];
    id : string;
}

function CheckoutProduct({id, items} : CheckoutProductProps) {
    const dispatch = useDispatch()
    const t = en; // good
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}));
        toast.success(`${items[0].title} ${t.removed}`, {
            position: "bottom-center",
        });
    };
    const router = useRouter();
    const {locale} = router;
    
    
    return (
        <div className="flex flex-col gap-x-4 border-b border-gray-300 pb-5 lg:flex-row lg:items-center">
            <div className="relative h-44 w-44">
                <Image src={urlFor(items[0].image[0]).url()} layout="fill" objectFit="contain" alt="logo"/>
            </div>
            <div className="flex flex-1 items-end lg:items-center">
                <div className="flex-1 space-y-4">
                    <div className="flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl">
                        <h4 className="font-semibold lg:w-96">{items[0].title}</h4>
                        <p className="flex items-end gap-x-1 font-semibold">
                            {items.length}
                            <ChevronDownIcon className="h-6 w-6 text-blue-500"/>
                        </p>
                    </div>
                    <p className="flex cursor-not-allowed items-end text-blue-500 hover:underline ">
                        {t.details}
                        <ChevronDownIcon className="h-6 w-6"/>
                    </p>
                </div>
                <div className="flex flex-col items-end space-y-4">
                    <h4 className="text-xl font-semibold lg:text-2xl">
                        
                            {currencyFormatter(items.reduce((total, item) => total + item.price, 0), locale)}
                    </h4>
                    <button
                        onClick={removeItemFromBasket}
                        className="text-blue-500 hover:underline">
                        {t.remove}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct