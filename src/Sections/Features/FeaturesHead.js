import React from "react";
import Card from "./Card";
// import Polygon from "../../Assets/Polygon.png";

const FeaturesHead = () => {
    return (
        <>
            <section className="relative w-full min-h-screen overflow-x-hidden bg-fixed bg-polygonScatter">
            
                <h1 className="text-center pt-24">FEATURES</h1>
                <div className="flex flex-wrap justify-center items-center container px-16 pt-10 backdrop-blur-md">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
        </>
    );
};

export default FeaturesHead;
