import React from "react";
import Card from "./Card";

const FeaturesHead = () => {
    return (
        <>
            <section className="bg-[#F3F4F5]">
                <h1 className="text-center pt-24">FEATURES</h1>
            <div className="flex flex-row justify-center items-center container px-16 ">
                <Card />
                <Card />
                <Card />
            </div>

            </section>
        </>
    );

};

export default FeaturesHead;
