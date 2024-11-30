import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { personnelInfo, tabs } from "@/lib/placeholderData";
import { Badge } from "@/components/ui/badge";

const PersonelAccordion = () => {
  return (
    <Accordion type="single" collapsible>
        {tabs.map((tab, idx) => (
          <div
            key={idx}
            className="w-full rounded-xl bg-white border-[1px] border-stroke-clr overflow-hidden mb-[30px]"
          >
            <AccordionItem value={"item-" + (idx + 1)}>
              <AccordionTrigger className="px-7">
                <p className="text-[16px] font-medium">{tab}</p>
              </AccordionTrigger>
              <AccordionContent>
                <Table>
                  <TableHeader className="bg-stroke-clr">
                    <TableRow>
                      <TableHead className="w-1/6">Data</TableHead>
                      <TableHead className="w-2/6">Claim</TableHead>
                      <TableHead className="w-2/6">Finding</TableHead>
                      <TableHead className="w-1/6">Verdict</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {personnelInfo.map((item, idx) => (
                      <TableRow key={idx}>
                        <TableCell className="font-medium w-1/6">
                          {item.data}
                        </TableCell>
                        <TableCell className="w-2/6">{item.claim}</TableCell>
                        <TableCell className="w-2/6">{item.finding}</TableCell>
                        <TableCell className="w-1/6">
                          <Badge>{item.verdict}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
  )
}

export default PersonelAccordion