import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { Separator } from "@/components/ui/separator"

import {
  MenuBottomSectionProps,
  MenuItem,
  MenuMobileItems,
  MobileNavProps,
} from "../../types/nav"
import { SearchInput } from "../Inputs"

const MobileNav: React.FC<MobileNavProps> = ({ MenuMobileItems, hidden }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(
    null
  )
  const router = useRouter()

  const handleMenuItemClick = (item: MenuMobileItems) => {
    setSelectedMenuItem(item)
  }

  const MenuBottomSection: React.FC<MenuBottomSectionProps> = ({
    bothsections = true,
    className = "",
  }) => (
    <>
      <div className={`col-span-12 ${className}`}>
        <Separator className="mb-4 mt-0" />
        <Link href="#" className="flex items-center">
          <img src="/Logo/cli.svg" width="20px" className="mr-2" />
          <span className="mr-1 text-black">CLI</span>
        </Link>
        <Separator className="mt-4 mb-0" />
      </div>

      {bothsections ? (
        <div className={`col-span-12 ${className}`}>
          <p className="text-gray-500 mb-1">Tools</p>
          <Link href="#" className="text-sm font-semibold">
            Visual Studio Code Extension
          </Link>
        </div>
      ) : null}
    </>
  )

  return (
    <div
      hidden={hidden}
      className="flyout-secondary absolute right-0 top-full z-10 mt-0 w-11/12 max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5"
    >
      <div className="p-4">
        <div className="grid grid-cols-12 gap-4 text-left">
          {selectedMenuItem === null ? (
            <>
              <div className="col-span-12 lg:hidden">
                <SearchInput
                  nopadding={true}
                  placeholder="Search packages, users or apps"
                />
              </div>

              {MenuMobileItems?.map((item, index) => (
                <div className="col-span-12" key={index}>
                  {item.href ? (
                    <Link href={item.href} legacyBehavior>
                      <a
                        className="text-sm font-semibold leading-6 relative"
                        onClick={() => {
                          if (item.submenu) {
                            handleMenuItemClick(item)
                          } else if (item.href) {
                            router.push(item.href)
                          }
                        }}
                      >
                        {item.label}
                      </a>
                    </Link>
                  ) : (
                    <span
                      className="text-sm font-semibold leading-6 relative"
                      key={index}
                    >
                      {item.label}
                    </span>
                  )}
                </div>
              ))}

              <MenuBottomSection />
            </>
          ) : (
            <div className="col-span-12">
              <Link legacyBehavior href="#">
                <a
                  href=""
                  onClick={() => setSelectedMenuItem(null)}
                  className="text-sm font-semibold leading-6 flex items-center"
                >
                  <img
                    src="/Logo/chevronleft.svg"
                    width="6px"
                    className="mr-2"
                  />
                  {selectedMenuItem.label}
                </a>
              </Link>

              <Separator className="my-3" />

              {selectedMenuItem.submenu}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MobileNav
