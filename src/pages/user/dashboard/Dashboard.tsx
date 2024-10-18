import { FileMinusIcon } from "@radix-ui/react-icons";

export default function Dashboard() {
  const cards = [
    {
      title: "Verifications Initiated",
      qty: "43,206",
      bg: 1,
    },
    {
      title: "Successful Initiated",
      qty: "21,200",
      bg: 2,
    },
    {
      title: "Failed Verifications",
      qty: "3,320",
      bg: 3,
    },
  ];

  return (
    <div className="">
      <div className="grid grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="w-full p-4 rounded-xl border-[1px] border-stroke-clr bg-white"
          >
            <div className="flex items-center gap-3">
              <span
                className={`min-w-10 min-h-10 rounded-full flex items-center justify-center text-white ${
                  card.bg === 1
                    ? "bg-[#BE6AF2]"
                    : card.bg === 2
                    ? "bg-[#006400]"
                    : "bg-[#992929]"
                }`}
              >
                <FileMinusIcon />
              </span>
              <p className="font-medium">{card.title}</p>
            </div>
            <h1 className="mt-4">{card.qty}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
