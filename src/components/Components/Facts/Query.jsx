import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Query = () => {
  return (
    <>
      <div>
        <div className="flex sm:mt-10 mt-10 mb-4 sm:px-12 px-6">
          <h1 className=" sm:text-4xl text-3xl font-semibold">
            People Also Ask
          </h1>
        </div>
        <div className=" mb-5 sm:px-12 px-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What type of waterproofing is best..?
              </AccordionTrigger>
              <AccordionContent>
                The best type of waterproofing depends on various factors
                including the area that needs waterproofing, environmental
                conditions, the specific needs of the structure, and budget
                considerations. Here’s a brief overview of common waterproofing
                methods and their best applications: <br />
                <br />
                <ul className=" px-4">
                  <li>
                    1) <b>Cementitious Waterproofing</b>: Ideal for areas that
                    are permanently wet, like bathrooms and kitchens. It’s easy
                    to apply and relatively inexpensive, making it a popular
                    choice for internal wet areas.
                  </li>
                  <br />
                  <li>
                    2) <b>Liquid Waterproofing Membrane</b>: Offers a more
                    flexible approach, as it forms a rubbery coating on the
                    applied area. It’s used on roofs, decks, and areas that
                    require a seamless waterproof layer. Its flexibility makes
                    it suitable for surfaces that might move or crack.
                  </li>

                  <br />
                  <li>
                    3) <b>Bituminous Coating (Asphalt Coating)</b>: Works well
                    for foundations and below-ground waterproofing. It’s a
                    strong, durable option but requires proper application to
                    avoid brittleness in cold environments unless it’s modified
                    with polymers.
                  </li>
                  <br />
                  <li>
                    4) <b>Bituminous Membrane</b>: Typically used for low-sloped
                    roofs, thanks to its excellent waterproofing properties.
                    There are self-adhesive and torch-on versions, but it’s
                    primarily effective in roofing applications.
                  </li>
                  <br />
                  <li>
                    5) <b>Polyurethane Liquid Membrane</b>: Highly suitable for
                    flat roofs subjected to weathering and standing water. It
                    offers high flexibility, making it ideal for areas where
                    thermal contraction/expansion of the surface is a concern.
                    However, it can be more expensive than other options.
                  </li>
                  <br />
                  <li>
                    6) <b>Crystalline Waterproofing</b>: This technology is used
                    in concrete structures to protect against water penetration.
                    It involves a chemical reaction that fills the spaces in
                    concrete, making it waterproof. It’s often used in
                    basements, foundations, and sewage and water treatment
                    plants.
                  </li>
                  <br />
                </ul>
                Choosing the best waterproofing method involves assessing the
                specific needs of your project, including exposure to weather
                elements, the type of substrate, and overall durability
                requirements. It’s often beneficial to consult with a
                waterproofing professional to determine the most effective and
                cost-efficient method for your particular situation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What is the best method for waterproofing..?
              </AccordionTrigger>
              <AccordionContent>
                The “best” method for waterproofing really depends on the
                specific requirements of your project, including the area you’re
                waterproofing, the materials involved, environmental conditions,
                and your budget. However, understanding the advantages and
                typical applications of each method can help you make a more
                informed decision: <br />
                <br />
                <ul className=" px-4">
                  <li>
                    1) <b>Cementitious Waterproofing</b>: Best for interior
                    areas like bathrooms, kitchens, and basements where easy
                    application and durability are key. It’s not flexible, which
                    makes it less suitable for areas with potential for movement
                    or cracking.
                  </li>
                  <br />
                  <li>
                    2) <b>Liquid Waterproofing Membrane</b>: Versatile and
                    provides a seamless, flexible layer that can move with the
                    structure to some extent. It’s excellent for roofs,
                    balconies, and decks. The quality and longevity can vary
                    based on the product type and application thickness.
                  </li>

                  <br />
                  <li>
                    3) <b>Bituminous Coating (Asphalt Coating)</b>: Ideal for
                    concrete foundations and below-ground waterproofing due to
                    its protective and waterproofing properties. Its
                    effectiveness can diminish over time if exposed to sunlight
                    unless it is modified with a flexible material like
                    polyurethane.
                  </li>
                  <br />
                  <li>
                    4) <b>Bituminous Membrane</b>: Perfect for flat or low-slope
                    roofs. The self-adhesive and torch-on versions offer
                    solutions for different types of roofs, but application is
                    more specialized and requires professional handling.
                  </li>
                  <br />
                  <li>
                    5) <b>Polyurethane Liquid Membrane</b>: Offers excellent
                    flexibility and is highly suitable for areas exposed to
                    weathering and standing water, such as flat roofs. It can be
                    more costly but is effective for demanding applications
                    where movement or differential settling may occur.
                  </li>
                  <br />
                  <li>
                    6) <b>Crystalline Waterproofing</b>: A chemical method that
                    turns porous concrete into an impermeable barrier. It’s best
                    for structures that need to be waterproof from the inside
                    out, like basements, tunnels, and sewage plants. This method
                    is integral to the concrete, offering permanent protection.
                  </li>
                  <br />
                </ul>
                To determine the “best” waterproofing method, consider factors
                such as: <br /> <br />
                <ul className=" px-4">
                  <li>
                    Location and Exposure: Outdoor vs. indoor, exposure to
                    chemicals, soil, water.
                  </li>
                  <li>
                    Surface Type and Condition: Concrete, wood, metal, existing
                    coatings.
                  </li>
                  <li>
                    Movement: If the structure or surface is expected to move or
                    settle.
                  </li>
                  <li>
                    Environmental Conditions: UV exposure, temperature extremes,
                    moisture levels.
                  </li>
                  <br />
                </ul>
                In many cases, a combination of methods might be necessary to
                fully protect a structure from water damage. Consulting with a
                waterproofing professional or company can provide insights
                tailored to your specific situation, ensuring you choose the
                most effective and efficient method for your needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Query;
