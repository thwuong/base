"use client";
import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, DrawerUI } from "../ui";
function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <header>
      <Container>
        <section className="items-center justify-between flex">
          <Image
            src={"/assets/logos/logo.svg"}
            alt="logo"
            width={128}
            height={96}
          />
          <nav>
            <ul className="flex gap-4 items-center">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/preview"}>Preview</Link>
              </li>
            </ul>
          </nav>
          <Button onClick={onOpen}>
            <Image
              src={"/assets/icons/ham.svg"}
              alt="menu"
              width={24}
              height={24}
            />
          </Button>
        </section>

        <DrawerUI isOpen={isOpen} onClose={onClose} placement={"right"}>
          Hello
        </DrawerUI>
      </Container>
    </header>
  );
}

export default Header;
