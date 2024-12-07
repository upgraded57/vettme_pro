import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const EditProffessionalInformation = () => {
  return (
    <div className="mt-5">
        <Accordion type="single" collapsible>
          <div
            className="w-full rounded-xl bg-white border-[1px] border-stroke-clr overflow-hidden mb-[30px]"
          >
            <AccordionItem value="professional-info">
              <AccordionTrigger className="px-3 md:px-7">
                <p className="text-[16px] font-medium">Professional Information</p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-3 md:px-7 py-2 grid grid-cols-3 items-center border-b-[1px] border-stroke-clr">
                    <div>
                        <p>Current Job</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">Operation Manager</p>
                    </div>
                    <div className=" col-span-2">
                        <label htmlFor="outcome">Outcome</label>
                        <input type="text" className="w-full h-[40px] rounded-md border-[1px] border-stroke-clr"/>
                        <div className="flex justify-start items-center text-[12px] md:text-[16px] gap-2 md:gap-5 mt-2">
                            Verdict:
                            <label htmlFor="correct" className="text-green-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="correct" name="name" className="mr-2" />
                                Correct
                            </label>
                            <label htmlFor="wrong" className="text-red-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="wrong" name="name" className="mr-2" />
                                Wrong
                            </label>
                        </div>
                    </div>
                </div>
                <div className="px-3 md:px-7 py-2 grid grid-cols-3 items-center border-b-[1px] border-stroke-clr">
                    <div>
                        <p>Organization Name</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">Dunlop Holding</p>
                    </div>
                    <div className=" col-span-2">
                        <label htmlFor="outcome">Outcome</label>
                        <input type="text" className="w-full h-[40px] rounded-md border-[1px] border-stroke-clr"/>
                        <div className="flex justify-start items-center text-[12px] md:text-[16px] gap-2 md:gap-5 mt-2">
                            Verdict:
                            <label htmlFor="correct" className="text-green-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="correct" name="resident" className="mr-2" />
                                Correct
                            </label>
                            <label htmlFor="wrong" className="text-red-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="wrong" name="resident" className="mr-2" />
                                Wrong
                            </label>
                        </div>
                    </div>
                </div>
                <div className="px-3 md:px-7 py-2 grid grid-cols-3 items-center border-b-[1px] border-stroke-clr">
                    <div>
                        <p>Employment Start Date</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">22/02/2021</p>
                    </div>
                    <div className=" col-span-2">
                        <label htmlFor="outcome">Outcome</label>
                        <input type="text" className="w-full h-[40px] rounded-md border-[1px] border-stroke-clr"/>
                        <div className="flex justify-start items-center text-[12px] md:text-[16px] gap-2 md:gap-5 mt-2">
                            Verdict:
                            <label htmlFor="correct" className="text-green-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="correct" name="name" className="mr-2" />
                                Correct
                            </label>
                            <label htmlFor="wrong" className="text-red-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="wrong" name="name" className="mr-2" />
                                Wrong
                            </label>
                        </div>
                    </div>
                </div>
                <div className="px-3 md:px-7 py-2 grid grid-cols-3 items-center border-b-[1px] border-stroke-clr">
                    <div>
                        <p>Employment type (fulltime, hybrid, remote)</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">Fulltime</p>
                    </div>
                    <div className=" col-span-2">
                        <label htmlFor="outcome">Outcome</label>
                        <input type="text" className="w-full h-[40px] rounded-md border-[1px] border-stroke-clr"/>
                        <div className="flex justify-start items-center text-[12px] md:text-[16px] gap-2 md:gap-5 mt-2">
                            Verdict:
                            <label htmlFor="correct" className="text-green-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="correct" name="name" className="mr-2" />
                                Correct
                            </label>
                            <label htmlFor="wrong" className="text-red-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="wrong" name="name" className="mr-2" />
                                Wrong
                            </label>
                        </div>
                    </div>
                </div>
                <div className="px-3 md:px-7 py-2 grid grid-cols-3 items-center border-b-[1px] border-stroke-clr">
                    <div>
                        <p>Job Responsibility</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">Analizing</p>
                    </div>
                    <div className=" col-span-2">
                        <label htmlFor="outcome">Outcome</label>
                        <input type="text" className="w-full h-[40px] rounded-md border-[1px] border-stroke-clr"/>
                        <div className="flex justify-start items-center text-[12px] md:text-[16px] gap-2 md:gap-5 mt-2">
                            Verdict:
                            <label htmlFor="correct" className="text-green-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="correct" name="name" className="mr-2" />
                                Correct
                            </label>
                            <label htmlFor="wrong" className="text-red-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="wrong" name="name" className="mr-2" />
                                Wrong
                            </label>
                        </div>
                    </div>
                </div>
                <div className="px-3 md:px-7 py-2 grid grid-cols-3 items-center border-b-[1px] border-stroke-clr">
                    <div>
                        <p>Professional Skills</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">Problem Solving</p>
                    </div>
                    <div className=" col-span-2">
                        <label htmlFor="outcome">Outcome</label>
                        <input type="text" className="w-full h-[40px] rounded-md border-[1px] border-stroke-clr"/>
                        <div className="flex justify-start items-center text-[12px] md:text-[16px] gap-2 md:gap-5 mt-2">
                            Verdict:
                            <label htmlFor="correct" className="text-green-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="correct" name="name" className="mr-2" />
                                Correct
                            </label>
                            <label htmlFor="wrong" className="text-red-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="wrong" name="name" className="mr-2" />
                                Wrong
                            </label>
                        </div>
                    </div>
                </div>
                <div className="px-3 md:px-7 py-2 grid grid-cols-3 items-center border-b-[1px] border-stroke-clr">
                    <div>
                        <p>LinkedIn Profile</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">linkedin.co.uk/christybobby</p>
                    </div>
                    <div className=" col-span-2">
                        <label htmlFor="outcome">Outcome</label>
                        <input type="text" className="w-full h-[40px] rounded-md border-[1px] border-stroke-clr"/>
                        <div className="flex justify-start items-center text-[12px] md:text-[16px] gap-2 md:gap-5 mt-2">
                            Verdict:
                            <label htmlFor="correct" className="text-green-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="correct" name="dob" className="mr-2" />
                                Correct
                            </label>
                            <label htmlFor="wrong" className="text-red-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="wrong" name="dob" className="mr-2" />
                                Wrong
                            </label>
                        </div>
                    </div>
                </div>
                <div className="px-3 md:px-7 py-2 grid grid-cols-3 items-center border-b-[1px] border-stroke-clr">
                    <div>
                        <p>Professional Reference Name</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">Mechanic</p>
                    </div>
                    <div className=" col-span-2">
                        <label htmlFor="outcome">Outcome</label>
                        <input type="text" className="w-full h-[40px] rounded-md border-[1px] border-stroke-clr"/>
                        <div className="flex justify-start items-center text-[12px] md:text-[16px] gap-2 md:gap-5 mt-2">
                            Verdict:
                            <label htmlFor="correct" className="text-green-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="correct" name="name" className="mr-2" />
                                Correct
                            </label>
                            <label htmlFor="wrong" className="text-red-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="wrong" name="name" className="mr-2" />
                                Wrong
                            </label>
                        </div>
                    </div>
                </div>
                <div className="px-3 md:px-7 py-2 grid grid-cols-3 items-center border-b-[1px] border-stroke-clr">
                    <div>
                        <p>Professional Reference Phone Number</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">080-222-333-11</p>
                    </div>
                    <div className=" col-span-2">
                        <label htmlFor="outcome">Outcome</label>
                        <input type="text" className="w-full h-[40px] rounded-md border-[1px] border-stroke-clr"/>
                        <div className="flex justify-start items-center text-[12px] md:text-[16px] gap-2 md:gap-5 mt-2">
                            Verdict:
                            <label htmlFor="correct" className="text-green-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="correct" name="name" className="mr-2" />
                                Correct
                            </label>
                            <label htmlFor="wrong" className="text-red-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="wrong" name="name" className="mr-2" />
                                Wrong
                            </label>
                        </div>
                    </div>
                </div>
                <div className="px-3 md:px-7 py-2 grid grid-cols-3 items-center border-b-[1px] border-stroke-clr">
                    <div>
                        <p>Current Salary</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">$3,000</p>
                    </div>
                    <div className=" col-span-2">
                        <label htmlFor="outcome">Outcome</label>
                        <input type="text" className="w-full h-[40px] rounded-md border-[1px] border-stroke-clr"/>
                        <div className="flex justify-start items-center text-[12px] md:text-[16px] gap-2 md:gap-5 mt-2">
                            Verdict:
                            <label htmlFor="correct" className="text-green-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="correct" name="name" className="mr-2" />
                                Correct
                            </label>
                            <label htmlFor="wrong" className="text-red-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="wrong" name="name" className="mr-2" />
                                Wrong
                            </label>
                        </div>
                    </div>
                </div>
                <div className="px-3 md:px-7 py-2 grid grid-cols-3 items-center border-b-[1px] border-stroke-clr">
                    <div>
                        <p>Expected Salary Range </p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">$5000</p>
                    </div>
                    <div className=" col-span-2">
                        <label htmlFor="outcome">Outcome</label>
                        <input type="text" className="w-full h-[40px] rounded-md border-[1px] border-stroke-clr"/>
                        <div className="flex justify-start items-center text-[12px] md:text-[16px] gap-2 md:gap-5 mt-2">
                            Verdict:
                            <label htmlFor="correct" className="text-green-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="correct" name="name" className="mr-2" />
                                Correct
                            </label>
                            <label htmlFor="wrong" className="text-red-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="wrong" name="name" className="mr-2" />
                                Wrong
                            </label>
                        </div>
                    </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </div>
        </Accordion>
    </div>
  )
}
