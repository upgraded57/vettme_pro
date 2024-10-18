import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [cred, setCred] = useState({
    company_name: "",
    company_id: "",
    email: "",
    password: "",
  });

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = "";

    navigate("/auth/confirm-mail", { state: { type: "account-creation" } });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Create your Account</h1>

      <form onSubmit={handleRegister} className="mt-[50px] w-full">
        <label htmlFor="company_name" className="block">
          <p className="text-sm">Company Name</p>
          <Input
            type="text"
            placeholder="e.g. Your Company"
            disabled={isLoading}
            required
            id="company_name"
            value={cred.company_name}
            onChange={(e) => setCred({ ...cred, company_name: e.target.value })}
          />
        </label>

        <label htmlFor="company_id" className="block my-6">
          <p className="text-sm">Company ID</p>
          <Input
            type="text"
            placeholder="RF127001"
            disabled={isLoading}
            id="company_id"
            required
            value={cred.company_id}
            onChange={(e) => setCred({ ...cred, company_id: e.target.value })}
          />
        </label>

        <label htmlFor="email" className="block">
          <p className="text-sm">Email Address</p>
          <Input
            type="email"
            placeholder="e.g. yourcompany@email.com"
            disabled={isLoading}
            id="email"
            required
            value={cred.email}
            onChange={(e) => setCred({ ...cred, email: e.target.value })}
          />
        </label>

        <label htmlFor="password" className="block my-6">
          <p className="text-sm">Password</p>
          <div className="relative flex items-center">
            <Input
              type={passwordVisible ? "password" : "text"}
              placeholder="********"
              disabled={isLoading}
              id="password"
              required
              value={cred.password}
              onChange={(e) => setCred({ ...cred, password: e.target.value })}
            />
            {cred.password.length > 0 && (
              <span
                className="absolute right-4"
                onClick={() => setPasswordVisible((prev) => !prev)}
              >
                {passwordVisible ? <EyeOpenIcon /> : <EyeNoneIcon />}
              </span>
            )}
          </div>
        </label>

        <Button
          className="w-full red-gradient"
          disabled={
            isLoading || cred.email.length < 5 || cred.password.length < 8
          }
          type="submit"
        >
          {isLoading ? <Loader /> : "Create Account"}
        </Button>
      </form>

      <div className="absolute bottom-10 flex gap-2">
        <p className="text-sm">
          Already have an account?{" "}
          <span className="text-red-clr font-medium">
            <Link to="/auth/login">Sign in </Link>
          </span>
          instead
        </p>
      </div>
    </div>
  );
}
