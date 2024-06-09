import TopSlider from "./components/topSlider";
import { noto_sans_jp, zen_maru_gothic } from "./fonts";
export default function Home() {
  return (
    <div className="bg-green-700">
      <div className="bg-white rounded-b-3xl pb-24">
        <div className="md:py-10 py-6">
          <TopSlider />
        </div>

        <div className={`md:w-3/4 w-10/12 mx-auto `}>
          <div className=" md:pt-12 md:pb-18 px-2 py-8">
            <h2
              className={`${zen_maru_gothic.className} text-3xl font-bold text-yellow-900`}
            >
              このサイトについて
            </h2>
            <p
              className={`${noto_sans_jp.className} mt-8 text-gray-700  leading-7 md:text-lg text-base font-semibold`}
            >
              もりおかクラブは、盛岡に転勤・出張が決まった方や観光に来る方が、事前に盛岡に関する情報を知ることができるサイトです。このサイトを見ることで盛岡を大まかに知ることができます！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
