import React from "react";
import Card from "./Card";
// import Polygon from "../../Assets/Polygon.png";

const FeaturesHead = () => {
    const cards= [
        {
            title: "OurAim",
            desc: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat Photo booth fam kinfolk cold-pressed srir",
        },

        {
            title: "Objective",
            desc: "jane meri jane man ssed sriracha leggings jianbing microdosing tousled waistcoat Photo booth fam kinfolk cold-pressed srir",
        },

        {
            title: "Bharosa",
            desc: "bewafa tera masoom chehra Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat Photo boo",
        },

        {
            title: "trust",
            desc: "tuje kitna chahne lage hum Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat Photo boo",
        },

        {
            title: "dream",
            desc: "taro ke saher me dharti pe ..Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat Photo",
        },
    ];
    return (
        <>
            <section className="relative w-full min-h-screen overflow-x-hidden bg-fixed bg-polygonScatter">
                <h1 className="text-center pt-24">FEATURES</h1>
                <div className="flex flex-wrap justify-center items-center container px-16 pt-10 backdrop-blur-md">
                    {cards.map((card, index) => (
                     <Card title={card.title} key={index} index={index} desc={card.desc}></Card>   
                    ))}
                </div>
            </section>
        </>
    );
};

export default FeaturesHead;
