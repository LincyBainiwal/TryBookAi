import React from 'react';
import {sampleBooks} from '../constants';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const SampleBook = () => {
  return (
    <div className=" mt-10 text-center text-white space-y-8">
      <h1 className="text-4xl font-bold">Sample Books Generated by BookAI</h1>
      <h2 className="text-lg">Explore some of the captivating books created using our AI technology.</h2>
      <div className="flex flex-wrap justify-center gap-10 mt-20 ">
        {sampleBooks.map((book, index) => (
          <Card key={index} className=" transition-transform duration-300 ease-in-out transform hover:scale-105 bg-gray-400/[0.08] text-white w-80 pt-4 ">
            <CardHeader className="relative h-64 mt-2  bg-gray-600/[.00]">
              <img src={book.image} alt={`${book.title}-cover`} className="w-full h-full object-contain transition-transform duration-700 ease-in-out transform hover:scale-105 "/>
            </CardHeader>
            <CardBody>
              <Typography variant="h3" className="font-bold m-3">
                {book.title}
              </Typography>
              <Typography className="mb-4">
                {book.description}
              </Typography>
            </CardBody>
            <CardFooter className="pb-20 pt-10">
              <Button className="text-purple-400 hover:text-purple-800 rounded-full h-9 hover:bg-white ">
                {book.linkText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default SampleBook;
