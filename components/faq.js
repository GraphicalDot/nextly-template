import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What chains does Pingbox support?",
    answer: "For wallet discovery - Ethereum and polygon are supported, However, The plaform is deployed on Polygon network. We strive to support more layer2 scaling solutions by Q1 2023.",
  },
  {
    question: "What happens when I signup with my email id or phorn number, instead of web3 wallet? ",
    answer:
      "Pingbox is using https://magic.link/ that generates a custodian wallet when you signup with your email or phone number.",
  },
  {
    question: "Do I as a user have to specifically subscribe to every DAPP channel to receive notifications? ",
    answer:
      "If the Dapp with which you have interacted has created a channel on Pingbox, You will automatically become their channel subscriber and will receive every notification",
  },
];
