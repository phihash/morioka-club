import { noto_sans_jp } from "./fonts";
import TopPageText from "./components/topPageText";

export default function Home() {
  return (
    <div className="bg-green-50 pb-24">
      {/* pb-24でした */}
      <div className="py-24">
        <p
          className={`text-6xl font-semibold ${noto_sans_jp.className} w-max mx-auto mb-6`}
        >
          🏳️
        </p>
        <h1
          className={`md:text-4xl text-3xl font-semibold ${noto_sans_jp.className} w-max mx-auto `}
        >
          盛岡かんたんガイド
        </h1>
      </div>

      <div
        className={`md:w-3/4 w-10/12 mx-auto ${noto_sans_jp.className} bg-white rounded-xl`}
      >
        <TopPageText
          title="このサイトについて"
          content={
            "盛岡かんたんガイドは、盛岡に転勤・出張が決まった方や観光に来る方が、事前に盛岡に関する情報を知ることができるサイトです。このサイトを見ることで盛岡を大まかに知ることができます！"
          }
        />
        <TopPageText
          title="🏠 住環境"
          content={
            "盛岡市は北上川、雫石川、中津川と3つの川に囲まれているため、大雨洪水注意報・警報が発令されたときにそなえて、ハザードマップを確認しておきましょう"
          }
        />
        <TopPageText
          title="🗺️ 交通アクセス"
          content={
            "盛岡市は北上川、雫石川、中津川と3つの川に囲まれているため、大雨洪水注意報・警報が発令されたときにそなえて、ハザードマップを確認しておきましょう"
          }
        />
        <TopPageText
          title="🏪 生活施設"
          content={
            "盛岡市は北上川、雫石川、中津川と3つの川に囲まれているため、大雨洪水注意報・警報が発令されたときにそなえて、ハザードマップを確認しておきましょう"
          }
        />
      </div>
    </div>
  );
}
