import DeleteVerification from "@/components/modals/DeleteVerification";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const data = [
  {
    data: "Full Name",
    claim: "Christian Oliver Parker",
    finding: "Christian Oliver Parker",
    verdict: "correct",
  },
  {
    data: "Date Of Birth",
    claim: "23rd of January, 1986",
    finding: "23rd of January, 1986",
    verdict: "correct",
  },
  {
    data: "Nationality",
    claim: "Nigerian",
    finding: "Nigerian",
    verdict: "correct",
  },
  {
    data: "State of Origin",
    claim: "ogun",
    finding: "ogun",
    verdict: "correct",
  },
  {
    data: "Residential Address",
    claim: "1234, Somewhere street, Some Avenue",
    finding: "1234, A different somewhere street, Another Avenue",
    verdict: "incorrect",
  },
];

export default function Personnel() {
  const location = useLocation();
  const { state } = location;
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

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

  const tabs = [
    "Personal Information",
    "Guarantor's Information",
    "Academic Information",
    "Professional Information",
    "Mental Assessment Information",
  ];

  return (
    <>
      {
        <DeleteVerification
          isOpen={deleteModalOpen}
          setIsOpen={setDeleteModalOpen}
        />
      }

      <div className="mb-[30px] flex justify-between items-center">
        <div>
          <h2>{state.name}</h2>
          <p className="text-sm">Date Created: {state.date}</p>
        </div>

        <Button
          variant="outline"
          className="gap-2 border-red-clr text-red-clr hover:text-red-clr hover:bg-red-50"
          onClick={() => setDeleteModalOpen(true)}
        >
          <TrashIcon /> Delete
        </Button>
      </div>

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
                    {data.map((item, idx) => (
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

      <div className="flex gap-3">
        <Button className="red-gradient">Download Data</Button>
      </div>
    </>
  );
}
