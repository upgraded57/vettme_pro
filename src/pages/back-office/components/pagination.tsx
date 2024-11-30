import { Button } from "@/components/ui/button"

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-10 border-t-[1px] border-stroke-clr py-3">
        <p className="text-lg">Showing <span className="font-semibold">1 - 10</span> of <span className="font-semibold">38</span> results</p>
        <div className="flex justify-center items-center gap-10">
            <Button className="bg-slate-500 h-6">PREV</Button>
            <Button className="bg-green-600 h-6">NEXT</Button>
        </div>
    </div>
  )
}

export default Pagination;