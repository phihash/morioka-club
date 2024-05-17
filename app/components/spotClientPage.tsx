import React from "react";
import { zen_maru_gothic, noto_sans_jp } from "../fonts";
import Image from "next/image";

const SpotPage = () => {
  return (
    <div className="bg-green-700 ">
      <div className="bg-white rounded-b-3xl">
        <div className="w-11/12 mx-auto pb-12">
          {/* 大枠 */}
          <div className="mt-10 md:flex">
            <div className="md:w-1/2">
              <Image
                className="rounded-xl w-full mb-4"
                src="https://i.gyazo.com/1ed22f890de885b247c062d240494bec.jpg"
                alt="晴れた空と正面から見た岩手銀行赤レンガ館の写真"
                width={600}
                height={800}
              />
            </div>
            <div className="md:ml-12 mt-10 md:mt-0 md:w-1/2">
              <h2
                className={`font-bold lg:text-3xl text-2xl  ${zen_maru_gothic.className} text-yellow-900`}
              >
                岩手銀行赤レンガ館
              </h2>
              <p
                className={`mt-6 leading-loose ${noto_sans_jp.className} font-semibold text-gray-700 tracking-wide`}
              >
                東京駅を設計した辰野金吾が設計した建築物。
              </p>
            </div>
          </div>
          {/* くぎり */}
          <div className="mt-20 flex flex-col-reverse md:flex-row">
            <div className="md:mr-12 mt-10 md:mt-0 md:w-1/2">
              <h2
                className={`font-bold lg:text-3xl text-2xl  ${zen_maru_gothic.className} text-yellow-900`}
              >
                開運橋
              </h2>
              <p
                className={`mt-6 leading-loose ${noto_sans_jp.className} font-semibold text-gray-700 tracking-wide`}
              >
                盛岡市の象徴的な橋である開運橋は、北上川を横断し盛岡駅と市内を結ぶ白い橋です。愛称の「二度泣き橋」は、転勤で来た人が涙するほど遠く感じるが、滞在中に盛岡の温かさに触れ、去る時に離れがたさを感じることに由来します。
                <br />
                明治23年の鉄道開通に伴い建設され、私設の橋としてスタートしましたが、後に市の予算で買収されました。洪水による流失や老朽化を経て、現在の橋に架け替えられました。
                <br />
                開運橋からは岩手山の景色が見え、季節や時間帯によって異なる魅力を味わえます。転勤族にとっては感慨深い場所です。
                <br />
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                className="rounded-xl w-full  mb-4"
                src="https://i.gyazo.com/58b6479503844803e0ec81adf8d7a64a.jpg"
                alt="北上川にかかる開運橋の写真、時間帯は昼間"
                width={600}
                height={800}
              />
            </div>
          </div>
          {/* くぎり */}
          <div className="mt-10 md:flex">
            {/* でかいサイズは写真半分に */}
            <div className="md:w-1/2">
              <Image
                className="rounded-xl w-full  mb-4"
                src="https://i.gyazo.com/a689a9fef3a11a2ed417f9eecbff6a73.jpg"
                alt="正面から見た風情が溢れる南昌荘の写真"
                width={600}
                height={800}
              />
            </div>
            <div className="md:ml-12 mt-10 md:mt-0 md:w-1/2">
              <h2
                className={`font-bold lg:text-3xl text-2xl  ${zen_maru_gothic.className} text-yellow-900`}
              >
                南昌荘
              </h2>
              <p
                className={`mt-6 leading-loose ${noto_sans_jp.className} font-semibold text-gray-700 tracking-wide`}
              >
                南昌荘は明治時代に盛岡出身の実業家頼川安五郎によって建てられ、築庭も数年かけて完成されました。池泉回遊式の庭園を持ち、多くの著名人が訪れた歴史を持つ建造物です。庭園は国の登録記念物に登録されており、盛岡市の保護庭園・景観重要建造物の一つとして位置づけられています。南昌荘の座敷はNHK連続テレビ小説「どんど晴れ」の舞台としても知られ、広い廊下や縁側からは老舗旅館の趣を味わうことができます。
                <br />
                南昌荘は盛岡市内に位置し、2000年4月29日から一般公開され、四季折々の庭園や日本の伝統的な建物を楽しむことができる。
              </p>
            </div>
          </div>
          {/* くぎり */}
          <div className="mt-20 flex flex-col-reverse md:flex-row">
            <div className="md:mr-12 mt-10 md:mt-0 md:w-1/2">
              <h2
                className={`font-bold lg:text-3xl text-2xl  ${zen_maru_gothic.className} text-yellow-900`}
              >
                盛岡城跡公園
              </h2>
              <p
                className={`mt-6 leading-loose ${noto_sans_jp.className} font-semibold text-gray-700 tracking-wide`}
              >
                盛岡城跡公園は、江戸時代に南部藩の城下町として栄えた南部盛岡の不来方城跡を利用した公園で、関東以北の石垣組の平城としては最大規模を誇り、日本の都市公園100選の一つに選ばれています。
                <br />
                公園内には、石川啄木の歌碑をはじめ、新渡戸稲造や宮沢賢治ら盛岡ゆかりの文人達の歌碑も置かれており、春には「桜まつり」など様々なイベントが開かれる、盛岡の歴史と文化を体感できる名所となっています。
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                className="rounded-xl w-full  mb-4"
                src="https://i.gyazo.com/1c8477bf6e4f76febcdaa32636799a87.jpg"
                alt="冬の盛岡城跡公園の落ち着いた景色の写真"
                width={600}
                height={800}
              />
            </div>
          </div>
          <div className="mt-10 md:flex">
            <div className="md:w-1/2">
              <Image
                className="rounded-xl w-full  mb-4"
                src="https://i.gyazo.com/47e10e10c4a9845552be1dc74365abb9.jpg"
                alt="静かに水が流れる御田屋清水の写真"
                width={600}
                height={800}
              />
            </div>
            <div className="md:ml-12 mt-10 md:mt-0 md:w-1/2">
              <h2
                className={`font-bold lg:text-3xl text-2xl  ${zen_maru_gothic.className} text-yellow-900`}
              >
                御田屋清水
              </h2>
              <p
                className={`mt-6 leading-loose ${noto_sans_jp.className} font-semibold text-gray-700 tracking-wide`}
              >
                御田屋清水は、
                盛岡の街中にひっそりと存在している。大通りの岩手県産業会館前にあり、美味しい水が飲める。
              </p>
            </div>
          </div>
          {/* くぎり */}
          <div className="mt-20 flex flex-col-reverse md:flex-row">
            <div className="md:mr-12 mt-10 md:mt-0 md:w-1/2">
              <h2
                className={`font-bold lg:text-3xl text-2xl  ${zen_maru_gothic.className} text-yellow-900`}
              >
                新渡戸稲造先生生誕の地
              </h2>
              <p
                className={`mt-6 leading-loose ${noto_sans_jp.className} font-semibold text-gray-700 tracking-wide`}
              >
                新渡戸稲造先生生誕の地
                <br />
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                className="rounded-xl w-full  mb-4"
                src="/images/spot3.jpg"
                alt="威厳のある新渡戸稲造先生の像の写真"
                width={600}
                height={800}
              />
            </div>
          </div>
          <div className="mt-10 md:flex">
            <div className="md:w-1/2">
              <Image
                className="rounded-xl w-full  mb-4"
                src="https://i.gyazo.com/1289e174dc6da810734d8ab12281f1d3.jpg"
                alt="美しい朱塗りの盛岡八幡宮の写真"
                width={600}
                height={800}
              />
            </div>
            <div className="md:ml-12 mt-10 md:mt-0 md:w-1/2">
              <h2
                className={`font-bold lg:text-3xl text-2xl  ${zen_maru_gothic.className} text-yellow-900`}
              >
                盛岡八幡宮
              </h2>
              <p
                className={`mt-6 leading-loose ${noto_sans_jp.className} font-semibold text-gray-700 tracking-wide`}
              >
                盛岡八幡宮は、岩手県盛岡市にある由緒ある神社で、延宝8年（1680年）に南部家29代・南部重信により建立され、品陀和気命（ホムダワケノミコト）を祀っており、農業・工業・商業・学問・衣食住など人間生活の根源に関わるご利益があるとされ、宝永6年（1709年）から始まった盛岡八幡宮祭りの「山車行事」は現在も盛大に開催されています。
                <br />
                境内には大きな鳥居、朱塗りの社殿、馬頭観音などの見どころがあり、南部氏ゆかりの神社として約800年の歴史を持ち、門前町である八幡町とともに発展してきた岩手県の中でも有数の歴史と規模を誇る神社であり、地域の信仰と文化の中心となっています。
              </p>
            </div>
          </div>
          <div className="mt-20 flex flex-col-reverse md:flex-row">
            <div className="md:mr-12 mt-10 md:mt-0 md:w-1/2">
              <h2
                className={`font-bold lg:text-3xl text-2xl  ${zen_maru_gothic.className} text-yellow-900`}
              >
                三ツ石神社
              </h2>
              <p
                className={`mt-6 leading-loose ${noto_sans_jp.className} font-semibold text-gray-700 tracking-wide`}
              >
                二度と悪さをしないこととこの土地に来ないことを約束し、証として石に手形を残して南昌山の彼方に逃げ去った
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                className="rounded-xl w-full  mb-4"
                src="/images/spot7.jpg"
                alt="三ツ石神社の石の写真"
                width={600}
                height={800}
              />
            </div>
          </div>
          <div className="mt-10 md:flex">
            <div className="md:w-1/2">
              <Image
                className="rounded-xl w-full  mb-4"
                src="/images/spot6.jpg"
                alt="美しい朱塗りの盛岡八幡宮の写真"
                width={600}
                height={800}
              />
            </div>
            <div className="md:ml-12 mt-10 md:mt-0 md:w-1/2">
              <h2
                className={`font-bold lg:text-3xl text-2xl  ${zen_maru_gothic.className} text-yellow-900`}
              >
                盛岡天満宮
              </h2>
              <p
                className={`mt-6 leading-loose ${noto_sans_jp.className} font-semibold text-gray-700 tracking-wide`}
              >
                盛岡天満宮は、学問の神、菅原道真公を祀っている神社であり、とてもユニークな狛犬が鎮座している。
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SpotPage;
