import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const EditPersonnelInformation = () => {
  return (
    <div className="mt-5">
        <Accordion type="single" collapsible>
          <div
            className="w-full rounded-xl bg-white border-[1px] border-stroke-clr overflow-hidden mb-[30px]"
          >
            <AccordionItem value="personnel-info">
              <AccordionTrigger className="px-3 md:px-7">
                <p className="text-[16px] font-medium">Personnel Information</p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-3 md:px-7 py-2 grid grid-cols-3 items-center border-b-[1px] border-stroke-clr">
                    <div>
                        <p>Full Name</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">Christy Blabber</p>
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
                        <p>Date of Birth</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">23/01/2004</p>
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
                        <p>Nationality</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">Nigeria</p>
                    </div>
                    <div className=" col-span-2">
                        <label htmlFor="outcome">Outcome</label>
                        <input type="text" className="w-full h-[40px] rounded-md border-[1px] border-stroke-clr"/>
                        <div className="flex justify-start items-center text-[12px] md:text-[16px] gap-2 md:gap-5 mt-2">
                            Verdict:
                            <label htmlFor="correct" className="text-green-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="correct" name="nation" className="mr-2" />
                                Correct
                            </label>
                            <label htmlFor="wrong" className="text-red-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="wrong" name="nation" className="mr-2" />
                                Wrong
                            </label>
                        </div>
                    </div>
                </div>
                <div className="px-3 md:px-7 py-2 grid grid-cols-3 items-center border-b-[1px] border-stroke-clr">
                    <div>
                        <p>Gender</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">Female</p>
                    </div>
                    <div className=" col-span-2">
                        <label htmlFor="outcome">Outcome</label>
                        <input type="text" className="w-full h-[40px] rounded-md border-[1px] border-stroke-clr"/>
                        <div className="flex justify-start items-center text-[12px] md:text-[16px] gap-2 md:gap-5 mt-2">
                            Verdict:
                            <label htmlFor="correct" className="text-green-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="correct" name="gender" className="mr-2" />
                                Correct
                            </label>
                            <label htmlFor="wrong" className="text-red-500 text-[12px] md:text-[16px]">
                                <input type="radio" id="wrong" name="gender" className="mr-2" />
                                Wrong
                            </label>
                        </div>
                    </div>
                </div>
                <div className="px-3 md:px-7 py-2 grid grid-cols-3 items-center border-b-[1px] border-stroke-clr">
                    <div>
                        <p>Resident Address</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">21, Somewhere Street, Lagos, Nigeria</p>
                    </div>
                    <div className=" col-span-2">
                        <label htmlFor="outcome">Outcome</label>
                        <input type="text" className="w-full h-[40px] rounded-md border-[1px] border-stroke-clr"/>
                        <input 
                            type="file" 
                            className="w-full mt-1 rounded-md border-[1px] border-stroke-clr"
                        />
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
                        <p>Phone Number</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">080-333-222-12</p>
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
                        <p>Email Address</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">christy.blabber@email.com</p>
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
                        <p>National Identification Number (NIN)</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">12345678901</p>
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
                        <p>Marital Status</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">Single</p>
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
                        <p>Next of Kin Name</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">Jake Lowly</p>
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
                        <p>Next of Kin Relationship</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">Cousin</p>
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
                        <p>Next of Kin Phone Number</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">070-212-333-00</p>
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
