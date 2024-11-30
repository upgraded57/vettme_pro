import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const EditMentalHealth = () => {
  return (
    <div className="mt-5">
        <Accordion type="single" collapsible>
          <div
            className="w-full rounded-xl bg-white border-[1px] border-stroke-clr overflow-hidden mb-[30px]"
          >
            <AccordionItem value="mental-health-assessment">
              <AccordionTrigger className="px-3 md:px-7">
                <p className="text-[16px] font-medium">Mental Health Assessment</p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-3 md:px-7 py-2 grid grid-cols-3 items-center border-b-[1px] border-stroke-clr">
                    <div>
                        <p>Current Mental Health Condition</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">Normal</p>
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
                        <p>History of Mental Health Conditions</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">None</p>
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
                        <p>Are you currently under any medication or treatment?</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">No</p>
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
                        <p>Have you had any previous psychiatric consultations?</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">No</p>
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
                        <p>Have you experienced any major trauma in the past year?</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">No</p>
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
                        <p>Emotional Well-being (describe briefly)</p>
                        <p className="font-bold lg:font-normal md:text-lg lg:text-xl">Perfect</p>
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
