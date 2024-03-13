import TopSlider from "./components/topSlider";
import { noto_sans_jp, zen_maru_gothic, lexend } from "./fonts";
import NewsTitleItem from "./components/newsTitleItem";
export default function Home() {
  return (
    <div className="bg-green-700">
      <div className="bg-white rounded-b-3xl pb-24">
        {/* pb-24でした */}
        <div className="md:py-16 py-8">
          <TopSlider />
        </div>

        <div className={`md:w-3/4 w-10/12 mx-auto `}>
          <div className=" md:pt-8 md:pb-18 px-2 py-16">
            <h2
              className={`${zen_maru_gothic.className} md:text-4xl text-3xl font-bold text-yellow-900`}
            >
              このサイトについて
            </h2>
            <p
              className={`${noto_sans_jp.className} mt-8 leading-7 md:text-lg text-base font-semibold`}
            >
              もりおかクラブは、盛岡に転勤・出張が決まった方や観光に来る方が、事前に盛岡に関する情報を知ることができるサイトです。このサイトを見ることで盛岡を大まかに知ることができます！
            </p>
          </div>

          <div className="md:pt-24 md:pb-18 px-2 py-16">
            <h2
              className={`${lexend.className} text-4xl font-bold text-cyan-800 pb-16`}
            >
              News
            </h2>
            <NewsTitleItem />
          </div>
        </div>
      </div>
    </div>
  );
}
