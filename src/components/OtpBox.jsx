import { useRef, useState } from "react";

export function OtpBox() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const [disable, setDisable] = useState(false);

  return (
    <div className="flex flex-row justify-center">
      <SubOtpBox ref={ref1} onDone={() => ref2.current.focus()} />
      <SubOtpBox ref={ref2} onDone={() => ref3.current.focus()} />
      <SubOtpBox ref={ref3} onDone={() => ref4.current.focus()} />
      <SubOtpBox ref={ref4} onDone={() => ref5.current.focus()} />
      <SubOtpBox ref={ref5} onDone={() => ref6.current.focus()} />
      <SubOtpBox ref={ref6} onDone={() => setDisable(true)} />
    </div>
  );
}

function SubOtpBox({ onDone , ref}) {
  return (
    <div>
      <input
        ref={ref}
        onChange={onDone}
        type="text"
        className="text-white h-[50px] w-[40px] bg-blue-500 outline-none p-4 m-1 rounded-xl"
      />
    </div>
  );
};
