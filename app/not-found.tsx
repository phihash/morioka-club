import { noto_sans_jp } from "./fonts";

function NotFoundPage() {
  return (
    <div className="bg-green-50 py-24">
      {/* pb-24でした */}
      <div className="px-8 py-16 md:w-3/4 w-10/12 mx-auto bg-white  rounded-xl">
        <p
          className={` md:text-4xl text-3xl font-semibold ${noto_sans_jp.className} w-max mx-auto mb-12`}
        >
          ページが見つかりません
        </p>
        <p
          className={`md:text-8xl text-8xl font-semibold ${noto_sans_jp.className} w-max mx-auto mb-12`}
        >
          🤷‍♂️🤷‍♀️
        </p>
        <p
          className={`text-base ${noto_sans_jp.className} font-semibold mb-8 md:text-center tracking-widest leading-7`}
        >
          こちらのサイトをご利用いただき、ありがとうございます。
          <br />
          お探しのページは元から存在しないか、あるいは現在利用できない可能性があります。
          <br />
        </p>
        <p
          className={`text-base ${noto_sans_jp.className} font-semibold mb-6 md:text-center tracking-widest`}
        >
          お手数ですが、トップページから再度お探しくださいますよう、お願いいたします。
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
