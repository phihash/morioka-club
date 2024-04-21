import { client } from "@/libs/client";
import DOMPurify from 'isomorphic-dompurify';
import { zen_maru_gothic, noto_sans_jp } from "../../fonts";

export default async function ReportPage({ params }: { params: Params }) {
  const { id } = params;
  const report = await getReport(id);
  const sanitizedContent = DOMPurify.sanitize(report.body);
  return (
    <div className="w-11/12 mx-auto px-3">
      <h1 className={`${zen_maru_gothic.className} font-semibold text-2xl pt-10 text-yellow-900`}>{report.title}</h1>
      <div className={`pt-12 leading-loose pb-28 font-semibold ${noto_sans_jp.className} `} dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
    </div>
  );
}

type Params = {
  id: string;
};


async function getReport(id: string) {

  try {
    const data = await client.get({ endpoint: "report", contentId: id });
    console.log("Fetched report:", data);
    return data;
  } catch (error) {
    console.error("Error fetching report:", error);
    throw new Error("Failed to fetch report");
  }
}
