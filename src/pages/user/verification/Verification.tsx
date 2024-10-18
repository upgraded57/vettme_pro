import DeleteVerification from "@/components/modals/DeleteVerification";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CopyIcon, TrashIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate, useParams } from "react-router-dom";
import { personnels } from "@/utils/data";
import { Badge } from "@/components/ui/badge";

export default function Verification() {
  const navigate = useNavigate();
  const { verification_id } = useParams();
  const id = parseInt(verification_id!);
  const { toast } = useToast();
  const headers = [
    {
      title: "Status",
      text: "In Progress",
    },
    {
      title: "No of Personnel",
      text: "28",
    },
    {
      title: "Completion Date",
      text: "22/02/2024",
    },
    {
      title: "Completion",
      text: "60% Completed",
    },
  ];
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const data = personnels[id - 1];
  return (
    <>
      {deleteModalOpen && (
        <DeleteVerification
          isOpen={deleteModalOpen}
          setIsOpen={setDeleteModalOpen}
        />
      )}

      <div className="mb-[30px] flex justify-between items-center">
        <div>
          <h2>Spytrac Telematics</h2>
          <p className="text-sm">Date Created: 23/01/2024 at 07:23 PM</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            className="gap-2 bg-gray-200 text-base-clr hover:bg-gray-300"
            onClick={() => {
              toast({
                title: "Copied",
                description: "Verification link copied to clipboard",
              });
            }}
          >
            <CopyIcon /> Copy Form Link
          </Button>
          <Button
            variant="outline"
            className="gap-2 border-red-clr text-red-clr hover:text-red-clr hover:bg-red-50"
            onClick={() => setDeleteModalOpen(true)}
          >
            <TrashIcon /> Delete
          </Button>
        </div>
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

      <div className="w-full rounded-xl bg-white border-[1px] border-stroke-clr overflow-hidden">
        <Table>
          <TableHeader className="bg-stroke-clr">
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Personnel Name</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Date Submitted</TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.data.map((item, idx) => (
              <TableRow
                key={idx}
                onClick={() =>
                  navigate(`personnel/${idx + 1}`, { state: item })
                }
              >
                <TableCell>
                  <span className="w-7 h-7 flex items-center justify-center bg-gray-400 font-medium rounded-lg text-xs">
                    {`${item.name.split("")[0].toUpperCase()}${item.name
                      .split("")[1]
                      .toUpperCase()}`}
                  </span>
                </TableCell>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.position}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>
                  <Badge
                    className={`pointer-events-none ${
                      item.status === "verified"
                        ? "bg-green-400"
                        : item.status === "pending"
                        ? "border-yellow-500 border-[1px] text-yellow-500 bg-transparent"
                        : item.status === "failed"
                        ? "bg-red-500"
                        : "bg-orange-400"
                    }`}
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <TrashIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
