import React from "react";

const AddOnsSection = ({
  addOns,
}: {
  addOns: {
    name: string;
    price: number;
    additionalDays: number;
    notes?: string;
  }[];
}) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Add-Ons</h2>
      <ul className="list-disc pl-5">
        {addOns.map((addon, idx) => (
          <li key={idx}>
            <strong>{addon.name}</strong>: ${addon.price.toFixed(2)} (+
            {addon.additionalDays} days)
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AddOnsSection;
