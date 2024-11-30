import { cardsData } from "@/lib/placeholderData"
import { FileMinusIcon } from "@radix-ui/react-icons";

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mb-6">
        {cardsData.map((card, idx) => (
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
  )
}

export default DashboardCards;