import { ReactNode } from "react";
import Nav from '@/pages/back-office/components/nav';
import ScreenNotice from "@/components/ScreenNotice";

interface LayoutProps {
  children: ReactNode;
}

const BackOfficeLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className="small-screen-notice">
        <ScreenNotice />
      </div>
      <Nav />
      <div>{children}</div>
    </div>
    
  )
}

export default BackOfficeLayout