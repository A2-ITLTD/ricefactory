import { useEffect } from "react";


const NonSupplying = () => {
    useEffect(() => {
        document.title = "Non Suppling Grower Seed Ordering";
    }, []);
    return (
        <div className="my-16 px-5 md:px-32 flex flex-col gap-8 justify-center items-left text-left">
          <div className="text-center flex flex-col gap-8 justify-center items-center">
            <h1 className="text-4xl text-orange-400">Process for ordering of seed for the 2023-24 season for which an Expression of Interest was lodged in 2022</h1>
            <p>Non-Supplying Growers should now lodge a Non-Supplying Grower Seed Order Form 2023-24 to place an order for the quantity and volume of the varieties for which an Expression of Interest was lodged in 2022.
            Please note the following important information in relation to Non-Supplying Grower Seed Order Form and Terms 2023-24:</p>
          </div>
          <h2 className="text-2xl text-orange-400">Notice after 15 January 2024 of intention to return paddy to Rice Factory</h2>
          <p>Please note that if a Non-Supplying Grower notifies Rice Factory after 15 January 2024 that they intend to return paddy to Rice Factory upon harvest in 2024, Rice Factoryreserves the right to deduct a “Late Notice Fee” in accordance with the Seed Order Form and Terms to manage receival and marketing of unexpected additional paddy.</p>
          <h2 className="text-2xl text-orange-400">Late Harvest Delivery Fee</h2>
          <p>This year, Rice Factory will be introducing a late harvest delivery fee (Late Harvest Delivery Fee) applicable to both Supplying and Non-Supplying Growers. The Late Harvest Delivery Fee will enable Rice Factory to better manage associated costs which impact grower returns by fairly allocating the cost of late deliveries to growers who are delivering late to a receival site..</p>
          <p>
          The Late Harvest Delivery Fee will be charged at the following rate (per paddy tonne) on all deliveries received on or after 15 June 2024:</p>
          <ul className="list-disc list-inside">
            <li>15 June – 30 June 2024: $40/paddy tonne</li>
            <li>1 July – 15 July 2024: $80/paddy tonne</li>
            <li>16 July 2024 onwards: $120/paddy tonne</li>
          </ul>
          <h2 className="text-2xl text-orange-400">Trash Discount</h2>
          <p>High trash levels continue to slow receivals and burden returns due to increased costs and the trash discount will be retained this year for both Supplying and Non-Supplying Growers with the following minor adjustments:

          Discounts will be applied for trash on a load-by-load basis. A discount for trash will begin above 5.5%, with a second threshold at 15% based on results of the Model S with the following discount applied:
          </p>
          <ul className="list-disc list-inside">
            <li>For each 0.1% above 5.5% trash, a discount of $0.10 will apply ($1.00/1% per tonne)</li>
            <li>For each 0.1% above 15% trash, a discount of $0.20 will apply thereafter ($2.00/1% per tonne)</li>
          </ul>
          <div className="text-center flex flex-col gap-8 justify-center items-center">
            <h1 className="text-4xl text-orange-400">Expression of interest for seed orders for the 2024-25 season</h1>
            <p>Non-Supplying Growers will need to lodge an Expression of Interest (EOI) for 2024-2025 season 12 months in advance, to allow adequate quantities of seed to be planted for particular varieties and to assist in planning.</p>
          </div>
          <h2 className="text-2xl text-orange-400">Expressions of Interest for 2024-25 Season</h2>
          <p>Expressions of Interest are now open for the 2024-25 season, and the deadline for lodgement of an EOI is 5pm, 6 October 2023. Rice Factory will notify Non-Supplying Growers on or before 30 November 2023 on whether it expects to meet the order requested in the EOI.</p>
          <p>A deposit of $150 per metric tonne for each variety will be required when lodging the EOI. The deposit will be deducted from amounts payable when the corresponding Seed Order Form is lodged approximately 12 months after the EOI (the Non-Supplying Grower Seed Order Form 2024-25 will be available in September 2024).</p>
          <p>The deposit is required to offset the costs to Rice Factory of ensuring there are adequate quantities of seed planted in the coming season to meet demand for the 2024-25 season.</p>
          <p>Once the EOI has been lodged, the Non-Supplying Grower will receive an invoice for the deposit, which will be payable within 7 days.</p>
          <p>If Rice Factory is unable to fulfil the order for the seed requested in the EOI, it will provide as much notice as reasonably practicable, and the deposit will be promptly refunded in full. Rice Factory may be unable to fulfil the order if it is unable to produce sufficient seed due to any event outside Rice Factory’s reasonable control (including droughts, floods, pests, etc.).</p>
          <h2 className="text-2xl text-orange-400">Summary of Steps to Order Seed for the 2024-2025 Season:</h2>
          <ul className="list-disc list-inside">
            <li>Lodge an EOI 12 months in advance, i.e., in September/October 2023, for the 2024-25 season.</li>
            <li>Pay a deposit.</li>
            <li>Sugar Factory confirms if the EOI can be fulfilled on or before 30 November 2023.</li>
            <li>If confirmed, lodge a Seed Order Form in September/October 2024 – it will be available then.</li>
            <li>Pay the balance of the seed price (less the deposit) in September/October 2024.</li>
            <li>Receive the seed and plant the crop in September/October 2024.</li>
          </ul>
        </div>
    );
};

export default NonSupplying;