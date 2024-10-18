import images from "@/assets/Images";
import UserFormSumitted from "@/components/modals/UserFormSumitted";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

export default function Forms() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setModalOpen(true);
  };
  return (
    <>
      <form
        className="max-w-screen-sm mx-auto px-[4vw] my-6"
        onSubmit={handleSubmit}
      >
        <div className="w-full mb-6">
          <img src={images.logo} alt="Vettme" className="h-8" />
        </div>
        <div className="w-full bg-white rounded-2xl border-[1px] border-stroke-clr">
          <div className="p-4 border-b-[1px] border-stroke-clr">
            <h2>Employee Identity Verification Form</h2>
            <p className="py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="w-full">
            <Tabs defaultValue="personal" className="w-full">
              <div className="overflow-x-scroll">
                <TabsList className="min-w-full rounded-none border-b-[1px] border-stroke-clr overflow-hidden">
                  <TabsTrigger value="personal" className="w-full">
                    Personal Information
                  </TabsTrigger>
                  <TabsTrigger value="guarantor" className="w-full">
                    Guarantor's Information
                  </TabsTrigger>
                  <TabsTrigger value="academic" className="w-full">
                    Academic Information
                  </TabsTrigger>
                  <TabsTrigger value="professional" className="w-full">
                    Professional Information
                  </TabsTrigger>
                  <TabsTrigger value="mental" className="w-full">
                    Mental Assessment
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="p-3 pb-0">
                <TabsContent value="personal">
                  <label htmlFor="full_name" className="block mb-4">
                    <p>Full Name</p>
                    <Input
                      type="text"
                      id="full_name"
                      placeholder="e.g. John Doe"
                      required
                    />
                  </label>
                  <label htmlFor="email" className="block mb-4">
                    <p>Email Address</p>
                    <Input
                      type="email"
                      id="email"
                      placeholder="e.g. johndoe@mail.com"
                      required
                    />
                  </label>
                  <label htmlFor="phone" className="block mb-4">
                    <p>Phone Number</p>
                    <Input
                      type="text"
                      inputMode="tel"
                      id="phone"
                      placeholder="e.g. 09011223344"
                      required
                    />
                  </label>
                  <label htmlFor="address" className="block mb-4">
                    <p>Residential Address</p>
                    <Input
                      type="text"
                      id="address"
                      placeholder="e.g. somewhere street, Lagos, Nigeria"
                      required
                    />
                  </label>
                  <label htmlFor="nin" className="block mb-4">
                    <p>National Identification Number (NIN)</p>
                    <Input
                      type="text"
                      inputMode="numeric"
                      id="nin"
                      placeholder="e.g. John Doe"
                      required
                    />
                  </label>
                  <label htmlFor="gender" className="block mb-4">
                    <p>Gender</p>
                    <select
                      name="gender"
                      id="gender"
                      className="btn w-full bg-transparent"
                      required
                    >
                      <option value="" selected={true} disabled>
                        Select an option
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="none">I prefer not to share</option>
                    </select>
                  </label>
                  <label htmlFor="nationality" className="block mb-4">
                    <p>Nationality</p>
                    <Input
                      type="text"
                      id="nationality"
                      placeholder="e.g. John Doe"
                      required
                    />
                  </label>
                  <label htmlFor="next_of_kin_name" className="block mb-4">
                    <p>Next of Kin Name</p>
                    <Input
                      type="text"
                      id="next_of_kin_name"
                      placeholder="e.g. John Doe"
                      required
                    />
                  </label>
                  <label
                    htmlFor="next_of_kin_relationship"
                    className="block mb-4"
                  >
                    <p>Next of Kin Relationship</p>
                    <Input
                      type="text"
                      id="next_of_kin_relationship"
                      placeholder="e.g. John Doe"
                      required
                    />
                  </label>
                  <label htmlFor="next_of_kin_phone" className="block mb-4">
                    <p>Next of Kin Phone Number</p>
                    <Input
                      type="text"
                      id="next_of_kin_phone"
                      placeholder="e.g. John Doe"
                      required
                    />
                  </label>
                </TabsContent>

                <TabsContent value="guarantor">
                  <label htmlFor="guarantor_full_name" className="block mb-4">
                    <p>Guarantor's Full Name</p>
                    <Input
                      type="text"
                      id="guarantor_full_name"
                      placeholder="e.g. John Doe"
                      required
                    />
                  </label>
                  <label htmlFor="guarantor_email" className="block mb-4">
                    <p>Guarantor's Email Address</p>
                    <Input
                      type="email"
                      id="guarantor_email"
                      placeholder="e.g. johndoe@mail.com"
                      required
                    />
                  </label>
                  <label htmlFor="guarantor_phone" className="block mb-4">
                    <p>Guarantor's Phone Number</p>
                    <Input
                      type="text"
                      inputMode="tel"
                      id="guarantor_phone"
                      placeholder="e.g. 09011223344"
                      required
                    />
                  </label>
                  <label htmlFor="guarantor_address" className="block mb-4">
                    <p>Guarantor's Residential Address</p>
                    <Input
                      type="text"
                      id="guarantor_address"
                      placeholder="e.g. somewhere street, Lagos, Nigeria"
                      required
                    />
                  </label>
                  <label
                    htmlFor="guarantor_relationship"
                    className="block mb-4"
                  >
                    <p>Relationship with Guarantor</p>
                    <Input
                      type="text"
                      id="guarantor_relationship"
                      placeholder="e.g. Sister"
                      required
                    />
                  </label>
                  <label htmlFor="guarantor_occupation" className="block mb-4">
                    <p>Guarantor's Occupation</p>
                    <Input
                      type="text"
                      id="guarantor_occupation"
                      placeholder="e.g. Trader"
                      required
                    />
                  </label>
                  <label htmlFor="nin" className="block mb-4">
                    <p>Guarantor's National Identification Number (NIN)</p>
                    <Input
                      type="text"
                      inputMode="numeric"
                      id="nin"
                      placeholder="e.g. 12345678901"
                      required
                    />
                  </label>
                </TabsContent>

                <TabsContent value="academic">
                  <label htmlFor="qualification" className="block mb-4">
                    <p>Highest Academic Qualification</p>
                    <select
                      name="qualification"
                      id="qualification"
                      className="btn w-full bg-transparent"
                      required
                    >
                      <option value="" selected={true} disabled>
                        Select an option
                      </option>
                      <option value="pry">
                        First School Leaving Certificate
                      </option>
                      <option value="ssce">
                        Senior School Leaving Certificate - SSCE
                      </option>
                      <option value="nce">
                        Nigerian Certificate in Education - NCE
                      </option>
                      <option value="ond">
                        Ordinary National Diploma - OND
                      </option>
                      <option value="hnd">Higher National Diploma - HND</option>
                      <option value="bsc">Bachelors - BSc</option>
                      <option value="msc">Masters - MSc</option>
                      <option value="phd">Doctorate - Phd</option>
                    </select>
                  </label>

                  <label htmlFor="institution_name" className="block mb-4">
                    <p>Institution Name</p>
                    <Input
                      type="text"
                      id="institution_name"
                      placeholder="e.g. University of Lagos"
                      required
                    />
                  </label>

                  <label htmlFor="graduation_year" className="block mb-4">
                    <p>Year of Graduation</p>
                    <input
                      type="month"
                      placeholder="e.g. John Doe"
                      className="w-full btn"
                      required
                    />
                  </label>

                  <label
                    htmlFor="professional_certification"
                    className="block mb-4"
                  >
                    <p>Professional Certifications (if any)</p>
                    <Input
                      type="text"
                      id="professional_certification"
                      placeholder="e.g. Cybersecurity"
                    />
                  </label>

                  <label htmlFor="certificate_upload" className="block mb-4">
                    <p>Upload Degree / Certificate</p>
                    <Input
                      type="file"
                      accept=".pdf, image/*"
                      id="certificate_upload"
                      placeholder="e.g. Cybersecurity"
                    />
                  </label>
                </TabsContent>

                <TabsContent value="professional">
                  <label htmlFor="current_job" className="block mb-4">
                    <p>Current/Immediate Job Title</p>
                    <Input
                      type="text"
                      id="current_job"
                      placeholder="e.g. Project Manager"
                    />
                  </label>

                  <label htmlFor="organization_name" className="block mb-4">
                    <p>Company/Organization Name</p>
                    <Input
                      type="text"
                      id="organization_name"
                      placeholder="e.g. Unilever"
                    />
                  </label>

                  <label htmlFor="organization_address" className="block mb-4">
                    <p>Company/Organization Address</p>
                    <Input
                      type="text"
                      id="organization_address"
                      placeholder="e.g. somewhere street, Lagos Nigeria"
                    />
                  </label>

                  <label htmlFor="employment_type" className="block mb-4">
                    <p>Employment Type</p>
                    <select
                      name="employment_type"
                      id="employment_type"
                      className="btn w-full bg-transparent"
                      required
                    >
                      <option value="" selected={true} disabled>
                        Select an option
                      </option>
                      <option value="full_time">Full Time</option>
                      <option value="hybrid">Hybrid</option>
                      <option value="remote">Remote</option>
                    </select>
                  </label>

                  <label htmlFor="empoyment_start date" className="block mb-4">
                    <p>Employment Start Date</p>
                    <input
                      type="month"
                      id="empoyment_start date"
                      className="w-full btn"
                    />
                  </label>

                  <label htmlFor="job_responsibility" className="block mb-4">
                    <p>Job Responsibility</p>
                    <Input
                      type="text"
                      id="job_responsibility"
                      placeholder="e.g. management of sales outlet and accounting"
                    />
                  </label>

                  <label htmlFor="professional_skills" className="block mb-4">
                    <p>Professional Skills</p>
                    <Input
                      type="text"
                      id="professional_skills"
                      placeholder="e.g. management, leadership, accounting"
                    />
                  </label>

                  <label htmlFor="current_salary" className="block mb-4">
                    <p>Current Salary (NGN)</p>
                    <Input
                      type="text"
                      inputMode="numeric"
                      id="current_salary"
                      placeholder="e.g. 350000"
                    />
                  </label>

                  <label htmlFor="expected_salary" className="block mb-4">
                    <p>Expected Salary Range (NGN)</p>
                    <Input
                      type="text"
                      id="expected_salary"
                      placeholder="e.g. 350000 - 500000"
                    />
                  </label>

                  <label htmlFor="referee_name" className="block mb-4">
                    <p>Profressional Reference Name</p>
                    <Input
                      type="text"
                      id="referee_name"
                      placeholder="e.g. John Doe"
                    />
                  </label>

                  <label htmlFor="referee_phone" className="block mb-4">
                    <p>Profressional Reference Phone number</p>
                    <Input
                      type="text"
                      inputMode="tel"
                      id="referee_phone"
                      placeholder="e.g. 09011223344"
                    />
                  </label>

                  <label htmlFor="linkedin_url" className="block mb-4">
                    <p>LinkedIn Profile URL</p>
                    <Input
                      type="text"
                      inputMode="url"
                      id="linkedin_url"
                      placeholder="e.g. 09011223344"
                    />
                  </label>
                </TabsContent>

                <TabsContent value="mental">
                  <label htmlFor="health_conditon" className="block mb-4">
                    <p>Current Mental Health Condition (if known)</p>
                    <Input
                      type="text"
                      id="health_conditon"
                      placeholder="e.g. Asthmatic"
                    />
                  </label>

                  <label htmlFor="health_history" className="block mb-4">
                    <p>History of Mental Health Conditions</p>
                    <Input
                      type="text"
                      id="health_history"
                      placeholder="e.g. I used to be asthmatic"
                    />
                  </label>

                  <label htmlFor="is_under_treatment" className="block mb-4">
                    <p>Are you currently under any medication or treatment?</p>
                    <select
                      name="is_under_treatment"
                      id="is_under_treatment"
                      className="w-full btn"
                    >
                      <option value="" selected={true} disabled>
                        Select an Option
                      </option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </label>

                  <label htmlFor="was_psychiatric" className="block mb-4">
                    <p>Have you had any previous psychiatric consultations?</p>
                    <select
                      name="was_psychiatric"
                      id="was_psychiatric"
                      className="w-full btn"
                    >
                      <option value="" selected={true} disabled>
                        Select an Option
                      </option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </label>

                  <label htmlFor="self_assessment_scale" className="block mb-4">
                    <p>Self-assessment of Stress Level (1 - Low, 10 - High)</p>
                    <Input
                      type="text"
                      inputMode="numeric"
                      maxLength={2}
                      id="self_assessment_scale"
                      placeholder="e.g. 7"
                    />
                  </label>

                  <label htmlFor="was_traumatic" className="block mb-4">
                    <p>
                      Have you experienced any major trauma in the past year?
                    </p>
                    <select
                      name="was_traumatic"
                      id="was_traumatic"
                      className="w-full btn"
                    >
                      <option value="" selected={true} disabled>
                        Select an Option
                      </option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </label>

                  <label htmlFor="emotional_wellbeing" className="block mb-4">
                    <p>Describe your Emotional Well-being Briefly</p>
                    <Textarea
                      className="resize-none"
                      id="emotional_wellbeing"
                    />
                  </label>
                </TabsContent>
              </div>
            </Tabs>
          </div>
          <label htmlFor="email_copy" className="flex items-center gap-2 p-3">
            <input type="checkbox" name="email_copy" id="email_copy" />
            <p>Send a copy of my data to my email</p>
          </label>
        </div>
        <Button type="submit" className="red-gradient mt-3">
          Submit Data for Verification
        </Button>
      </form>
      {modalOpen && <UserFormSumitted isOpen={modalOpen} />}
    </>
  );
}
