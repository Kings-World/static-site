import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { mainNav, siteConfig } from "~/lib/constants";

export function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="size-8 px-0 md:hidden items-center h-auto"
                >
                    <MenuIcon className="size-5" />
                    <span className="sr-only">Open mobile nav</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
                <a href="/" className="text-lg font-bold">
                    {siteConfig.name}
                </a>
                <div className="my-4 pb-10">
                    <div className="flex flex-col space-y-3">
                        {mainNav.map((item) => (
                            <a key={item.href} href={item.href}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
