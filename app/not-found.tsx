import {  zen_maru_gothic  } from "./fonts";

function NotFoundPage() {
	return (
    <div className="w-11/12 mx-auto">
      <h2 className="w-max mx-auto pt-24 pb-12 text-9xl">😵‍💫</h2>
      <p className="w-max mx-auto text-xl pb-12 font-bold">そのようなページご用意してません</p>
      <p className={`w-max mx-auto text-5xl font-bold ${zen_maru_gothic.className}`}>404</p>
    </div>
  );
}

export default NotFoundPage;
