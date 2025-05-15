"use client";

import { cn } from "@/shared/lib/utils";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { CartDrawer } from "./cart-drawer";

interface Props {
  classname?: string
}

export const CartButton: React.FC<Props> = ({classname}) => {
 return (
   <CartDrawer>
     <Button className={cn('group relative', classname)}>
       <b>10 $</b>
       <span className='h-full w-[1px] bg-white/30 mx-3' />
       <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
         <ShoppingCart className='relative' size={16} strokeWidth={2} />
         <b>0</b>
       </div>
       <ArrowRight
         className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
         size={20}
       />
     </Button>
   </CartDrawer>
 );
}