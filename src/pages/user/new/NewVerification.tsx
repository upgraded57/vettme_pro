import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewVerification() {
  const navigate = useNavigate();
  const [type, setType] = useState<"upload" | "form" | null>(null);
  const handleCreate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(`/verifications/new/${type}`);
  };
  return (
    <div className="w-full">
      <div className="w-full max-w-[600px] mt-20 mx-auto rounded-xl bg-white border-[1px] border-stroke-clr">
        <div className="p-4 border-b-[1px] border-stroke-clr">
          <h2>Start New Verification</h2>
          <p>
            How would you like to continue your personnel verification process?
          </p>
        </div>
        <div className="p-4">
          <form onSubmit={handleCreate}>
            <label
              htmlFor="upload"
              className="flex gap-3 border-b-[1px] border-stroke-clr pb-3"
            >
              <input
                type="radio"
                name="new"
                id="upload"
                required
                onChange={() => setType("upload")}
              />
              <span>
                <p className="font-medium">UPLOAD PERSONNEL DATA</p>
                <p>
                  Upload an excel or CSV file which contains the data of
                  personnel. Can contain data of multiple personnel
                </p>
              </span>
            </label>
            <label htmlFor="form" className="flex gap-3 pt-3">
              <input
                type="radio"
                name="new"
                id="form"
                required
                onChange={() => setType("form")}
              />
              <span>
                <p className="font-medium">CREATE DATA COLLECTION FORM </p>
                <p>
                  Create a data collection form. You can generate a shareable
                  link to the form page which can be accessed by your employees.
                </p>
              </span>
            </label>

            <div className="w-full px-6">
              <Button type="submit" className="w-full red-gradient mt-6 ">
                Continue
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
