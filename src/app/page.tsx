"use client";
import { useState } from "react";

export default function Home() {
  type AssistanceProgram = {
    title: string;
    paragraph: JSX.Element;
    bulletPoints: { item: JSX.Element | string }[];
  };
  const assistancePrograms: AssistanceProgram[] = [
    {
      title: "Utah Housing Corporation Down Payment Assistance Program",
      paragraph: (
        <>
          While the UHC Down Payment Assistance Program is not limited to
          first-time homebuyers, it can be used by first-time homebuyers to
          qualify to purchase homes with little to no money down in Utah. The
          Down Payment Assistance Program through the Utah Housing Corporation
          acts as a second mortgage and allows borrowers to finance their down
          payment and closing costs.
        </>
      ),
      bulletPoints: [
        {
          item: (
            <>
              <strong>Program name –</strong> Down Payment Assistance Program
            </>
          ),
        },
        {
          item: (
            <>
              <strong>Administering organization –</strong> Utah Housing
              Corporation
            </>
          ),
        },
        {
          item: (
            <>
              <strong>Who qualifies –</strong> Homebuyers can qualify if they
              have not been able to save up enough money for a down payment or
              closing costs and who participate in one of UHC&apos;s qualifying
              home loan programs. Homebuyers must have a minimum credit score of
              620. The down payment assistance is a second mortgage of up to 6%
              of the amount of the first mortgage with an interest rate of 1%
              higher than that of the first mortgage.
            </>
          ),
        },
        {
          item: (
            <>
              <strong>Restrictions on qualifying –</strong> Borrowers must be
              financing their homes through one of{" "}
              <a
                href="https://utahhousingcorp.org/pdf/Form211.pdf"
                className="hover:text-[#004e82] text-[#2ca4f2] underline"
              >
                UHC&apos;s qualifying mortgage programs
              </a>{" "}
              , including the FirstHome program for first-time homebuyers with
              credit scores of at least 660, FHA or VA loans for borrowers with
              minimum credit scores of at least 620, or conventional HFA
              Advantage loans for borrowers with minimum credit scores of at
              least 700.
            </>
          ),
        },
        {
          item: (
            <>
              <strong>How to apply –</strong> To apply for down payment
              assistance through the Utah Housing Corporation, you must first
              qualify for a UHC mortgage loan through a participating lender.
              Tell your lender you want to get a UHC mortgage and would like to
              apply for down payment assistance. The lender will submit your
              application for assistance once you qualify for a UHC mortgage
              loan. There are a limited number of grants available.
            </>
          ),
        },
      ],
    },
    {
      title:
        "South Jordan Housing Downpayment Assistance Program (South Jordan, UT)",
      paragraph: (
        <>
          The City of South Jordan offers a generous{" "}
          <a
            href="https://www.sjc.utah.gov/509/Redevelopment-Agency-Housing-Programs"
            className="hover:text-[#004e82] text-[#2ca4f2] underline"
          >
            downpayment assistance program
          </a>{" "}
          for individuals wanting to buy homes in South Jordan who have low to
          moderate incomes. The assistance provides 7.5% of the home&apos;s
          purchase price or $20,000, whichever is lower. The funds are provided
          as a forgivable loan with no payments or interest while the homeowner
          lives in the home. If the homeowner remains in the home for 10 years,
          the loan will be forgiven and converted to a grant.
        </>
      ),
      bulletPoints: [
        {
          item: (
            <>
              <strong>Program name –</strong> South Jordan Housing Downpayment
              Assistance Program
            </>
          ),
        },
        {
          item: (
            <>
              <strong>Administering organization –</strong> South Jordan
              Redevelopment Agency
            </>
          ),
        },
        {
          item: (
            <>
              <strong>Who qualifies –</strong> Buyers who have low to moderate
              incomes, wish to purchase homes within the South Jordan city
              limits, and would otherwise not be able to afford to buy homes.
            </>
          ),
        },
        {
          item: (
            <>
              <strong>Restrictions on qualifying –</strong> Buyers must meet the
              program&apos;s income guidelines and remain in the home for 10
              years to avoid having to repay the assistance amount. If they sell
              before 10 years, they will have to repay a prorated amount based
              on the time they have remained in the home. If they rent the home
              out or sell it within the first two years, they will have to repay
              the loan and pay an additional $5,000 penalty. Buyers must
              contribute $1,000 of their own funds toward the purchase and
              can&apos;t have more than $15,000 in liquid assets after closing.
              Buyers must attend a homeownership class and submit the
              certificate with their application materials or a receipt showing
              the course has begun.
            </>
          ),
        },
        {
          item: (
            <>
              <strong>How to apply –</strong> Buyers meeting the city&apos;s
              income guidelines for the program can{" "}
              <a
                href="https://www.sjc.utah.gov/DocumentCenter/View/1639/RDA-Down-Payment-Assistance-Application-PDF"
                className="hover:text-[#004e82] text-[#2ca4f2] underline"
              >
                download the application
              </a>{" "}
              from the city&apos;s website and print it out. They should gather
              all of the required documentation listed in the application and
              submit copies of the documents together with the application to
              the South Jordan Redevelopment Agency.
            </>
          ),
        },
        {
          item: (
            <>
              <strong>Program contact information/learn more –</strong> For more
              information, call the City of South Jordan at 801-446-HELP.
              Address: City of South Jordan, 1600 W Towne Center Drive, South
              Jordan, UT 84095.
            </>
          ),
        },
      ],
    },
    {
      title: "Home Purchase Plus (Provo, UT)",
      paragraph: (
        <>
          For first-time homebuyers who want to purchase homes in Provo and are
          thus not eligible for the Loan to Own Program, Provo Development
          Services offers the{" "}
          <a
            href="https://www.provo.org/departments/development/cdbg-home/home-purchase-plus-program"
            className="hover:text-[#004e82] text-[#2ca4f2] underline"
          >
            Home Purchase Plus program
          </a>{" "}
          . This program offers a zero-interest, deferred loan to buyers in
          Provo for the minimum down payment required by the type of mortgage
          they get (3.5% for FHA/5% for conventional), estimated closing costs,
          and another 5% or 3.5% up to a maximum of $40,000. Buyers do not have
          to repay the loan as long as they remain in the home. They will have
          to repay it at the time they sell the home. If they vacate the home or
          sell it within the first two years, they will also have to pay a
          $5,000 penalty.{" "}
        </>
      ),
      bulletPoints: [
        {
          item: (
            <>
              <strong>Program name –</strong> Provo Home Purchase Plus
            </>
          ),
        },
        {
          item: (
            <>
              <strong>Administering organization –</strong> Provo Development
              Services
            </>
          ),
        },
        {
          item: (
            <>
              <strong>Who qualifies –</strong> Buyers must qualify for a
              mortgage and meet the program’s{" "}
              <a
                href="https://www.provo.org/home/showpublisheddocument/22558/638224090160170000"
                className="hover:text-[#004e82] text-[#2ca4f2] underline"
              >
                income requirements
              </a>
              . They must also have a credit score above 650.{" "}
            </>
          ),
        },
        {
          item: (
            <>
              <strong>Restrictions on qualifying –</strong> Single homebuyers
              can only purchase a maximum two-bedroom home. Applicants must
              contribute $1,000 of their own funds to the transaction and not
              have liquid assets of more than $15,000 after closing. The
              home&apos;s purchase price cannot exceed current HUD guidelines.
              Buyers must complete a pre-homeownership course through Community
              Action or NeighborWorks Provo. They can also complete the
              following online course:{" "}
              <a
                href="https://extension.learn.usu.edu/browse/home-buyer/courses/home-buyer-education-2022"
                className="hover:text-[#004e82] text-[#2ca4f2] underline"
              >
                https://extension.learn.usu.edu/browse/home-buyer/courses/home-buyer-education-2022
              </a>{" "}
              .
            </>
          ),
        },
        {
          item: (
            <>
              <strong>How to apply –</strong> Buyers can register and then
              scroll down to find the Loan to Own program under downpayment
              assistance on the{" "}
              <a
                href="https://portal.neighborlysoftware.com/provout/participant"
                className="hover:text-[#004e82] text-[#2ca4f2] underline"
              >
                Neighborly Provo portal
              </a>
              . They can complete and submit the application online.
            </>
          ),
        },
        {
          item: (
            <>
              <strong>Program contact information/learn more –</strong> For more
              information, call Provo Development Services at (801) 852-6400.
              Address: Development Services, 445 W Center St Suite 200, Provo,
              UT 84601.
            </>
          ),
        },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-center font-bold text-black mt-8 mb-10">
        Down Payment Assistance Programs
      </h1>
      <div className="text-center">
        <a
          href="../ultGuide.pdf"
          download="DownPaymentAssistancePrograms.pdf"
          className="bg-[#2ca4f2] hover:bg-[#004e82] text-white font-bold py-2 px-4 rounded"
        >
          Download The Ultimate Guide
        </a>
      </div>
      {assistancePrograms.map((program, index) => (
        <div key={index} className="my-12 p-6 bg-gray-100 shadow-md rounded-lg">
          <div className="flex justify-between items-center">
            <h2
              className={` ${
                index % 2 !== 0 ? "text-[#004e82]" : "text-[#2ca4f2]"
              } text-2xl font-bold cursor-pointer`}
              onClick={() => toggleDropdown(index)}
            >
              {program.title}
            </h2>
            <div>
              {openIndex === index ? (
                <svg
                  onClick={() => toggleDropdown(index)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 text-black cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => toggleDropdown(index)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 text-black cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </div>
          </div>
          {openIndex === index && (
            <>
              <p className="text-gray-700 my-4">{program.paragraph}</p>
              <ul className="list-disc list-inside space-y-2">
                {program.bulletPoints.map((bullet, idx) => (
                  <li key={idx} className="text-gray-600">
                    {bullet.item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
