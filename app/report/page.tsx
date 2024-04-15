import React from "react";
import { Metadata } from "next";
import { zen_maru_gothic, noto_sans_jp } from "../fonts";
import { client } from "@/libs/client";
import Link from "next/link";

async function getReports() {
  try {
    const data = await client.get({ endpoint: 'report' });
    console.log('Fetched reports:', data.contents);
    return data.contents;
  } catch (error) {
    console.error('Error fetching reports:', error);
    return [];
  }
}


const ReportPage = async () => {
  const reports = await getReports();
  return (
    <div className="bg-green-700">
      <div className="bg-white rounded-b-3xl  pb-24">
        <div className="py-24">
        <div className="pb-24">
          <p
            className={`text-6xl font-semibold ${noto_sans_jp.className} w-max mx-auto mb-6`}
          >
            🗒️
          </p>
          <h1
            className={`md:text-4xl text-3xl font-semibold ${noto_sans_jp.className} w-max mx-auto `}
          >
            レポート
          </h1>
        </div>
          {reports.map((report : Report) => {
          return  <Link href={`report/${report.id}`} key={report.id}>
            <div className="flex md:gap-12 gap-6 md:w-3/4 w-11/12 mx-auto p-4 items-center">
            <p className={` ${zen_maru_gothic.className} md:text-xl text-xs font-semibold`}>{report.date.split('T')[0]}</p>
            <p className={`text-yellow-900 ${zen_maru_gothic.className} md:text-2xl text-base font-semibold`}>{report.title}</p>
            </div>

          </Link>
          })}
        </div>

      </div>
    </div>
  );
};

interface Report {
  id: string;
  title: string;
  date: string;
}

export default ReportPage;
