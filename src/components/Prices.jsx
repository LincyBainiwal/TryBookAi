import React from 'react';
import { prices } from "../constants"; // Update the path as per your file structure
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

const Prices = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center py-12">
      <h1 className='font-bold text-[50px] text-center text-white mb-12'>API Pricing</h1>
      <div className="flex flex-row justify-center gap-6">
        {prices.map((plan, index) => (
          <Card
            key={index}
            variant="gradient"
            className="w-full rounded-xl max-w-[20rem] p-8 bg-purple-700 text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-purple-800"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
            >
              <Typography
                variant="small"
                color="white"
                className="font-normal uppercase"
              >
                {plan.plan}
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mt-6 flex justify-center gap-1 text-7xl font-normal"
              >
                <span className="mt-2 text-4xl">$</span>{plan.price}{" "}
                <span className="self-end text-4xl">{plan.billing}</span>
              </Typography>
            </CardHeader>
            <CardBody className="p-0">
              <ul className="flex flex-col gap-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                      <CheckIcon />
                    </span>
                    <Typography className="font-normal text-white">
                      {feature}
                    </Typography>
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter className="mt-12 p-0 text-center ">
              <Button
                size="lg"
                color="white"
                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 bg-purple-500 hover:bg-purple-600  h-10 w-40 rounded"
                ripple={false}
                fullWidth={false}
              >
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Prices;
