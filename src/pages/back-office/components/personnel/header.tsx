import { useLocation } from "react-router-dom";

const HeaderInfo = () => {
    const location = useLocation();
    const { state } = location;
    const headers = [
        {
          title: "Status",
          text: state.status,
        },
        {
          title: "Position",
          text: state.position,
        },
        {
          title: "Verification Rating",
          text: "9.8/10",
        },
        {
          title: "Claims Verified",
          text: "34/41",
        },
        {
          title: "Claims Rejected",
          text: "7/41",
        },
    ];

  return (
    <div className="w-full bg-white rounded-xl flex items-center justify-between overflow-hidden border-[1px] border-stroke-clr mb-6">
        {headers.map((header, idx) => (
          <div
            className="list px-4 border-l-[1px] border-stroke-clr py-4 flex-1"
            key={idx}
          >
            <p className="text-sm">{header.title}</p>
            <p className="font-semibold">{header.text}</p>
          </div>
        ))}
    </div>
  )
}

export default HeaderInfo;