import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const StickyHeader = () => {
  return (
    <header>
      <div className="fixed top-2 inset-x-0 flex justify-center w-full">
        <div className="max-w-420 w-full mx-4">
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" width={36} height={36} alt="logo" />
              <div className="font-semibold whitespace-nowrap">
                React Little Components /
              </div>
            </div>
            <NavigationMenu>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/docs">Docs</Link>
              </NavigationMenuLink>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
