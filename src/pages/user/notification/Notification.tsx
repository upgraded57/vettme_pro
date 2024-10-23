export default function Notification() {
  const notifications = [
    {
      type: 1,
      title: "Neque porro quisquam est qui dolorem ipsum",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      date: "2 hours ago",
    },
    {
      type: 1,
      title: "Neque porro quisquam est qui dolorem ipsum",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      date: "2 hours ago",
    },
    {
      type: 2,
      title: "Neque porro quisquam est qui dolorem ipsum",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      date: "2 hours ago",
    },
    {
      type: 3,
      title: "Neque porro quisquam est qui dolorem ipsum",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      date: "2 hours ago",
    },
    {
      type: 2,
      title: "Neque porro quisquam est qui dolorem ipsum",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      date: "2 hours ago",
    },
    {
      type: 3,
      title: "Neque porro quisquam est qui dolorem ipsum",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      date: "2 hours ago",
    },
    {
      type: 1,
      title: "Neque porro quisquam est qui dolorem ipsum",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      date: "2 hours ago",
    },
  ];
  return (
    <>
      <div className="mb-[30px] flex justify-between items-center">
        <div>
          <h2>Notifications</h2>
          <p className="text-sm">Keep track of all your account activities</p>
        </div>
        <select name="" id="" className="btn px-3">
          <option value="all">All</option>
          <option value="unread">Unread</option>
          <option value="read">Read</option>
        </select>
      </div>

      {notifications.map((item, idx) => (
        <div
          key={idx}
          className="w-full mb-6 bg-white rounded-xl border-stroke-clr border-[1px] p-4"
        >
          <div className="flex items-center gap-2">
            <div
              className={`w-10 h-10 aspect-square rounded-full ${
                item.type === 1
                  ? "bg-purple-400"
                  : item.type === 2
                  ? "bg-orange-300"
                  : "bg-green-600"
              }`}
            ></div>
            <div className="w-full flex justify-between items-center gap-4">
              <div className="w-full">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-xs">{item.content}</p>
              </div>
            </div>
            <small className="text-xs min-w-max ">{item.date}</small>
          </div>
        </div>
      ))}
    </>
  );
}
