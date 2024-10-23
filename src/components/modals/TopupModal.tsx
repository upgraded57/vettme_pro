import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { CrossCircledIcon } from "@radix-ui/react-icons";

interface DialogModal {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function TopupModal({ isOpen, setIsOpen }: DialogModal) {
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <span
          className="absolute top-2 right-2"
          onClick={() => setIsOpen(false)}
        >
          <CrossCircledIcon className="cursor-pointer hover:text-red-clr" />
        </span>
        <AlertDialogHeader>
          <AlertDialogTitle>Topup your wallet</AlertDialogTitle>
          <AlertDialogDescription>
            Enter how much you'll like to topup your wallet with
            <div className="flex w-full items-center relative gap-2">
              <span className="pointer-events-none absolute left-2 text-gray-300">
                NGN |
              </span>
              <Input
                type="text"
                placeholder="e.g. 3000"
                className="w-full pl-14"
              />
              <Button type="button" className="red-gradient">
                Topup Wallet
              </Button>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
