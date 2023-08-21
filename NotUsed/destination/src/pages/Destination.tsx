import { FunctionComponent, useCallback } from "react";

const Destination: FunctionComponent = () => {
  const onBackClick = useCallback(() => {
    // Please sync "Welcome" to the project
  }, []);

  const onMainWindowCard14Click = useCallback(() => {
    // Please sync "52" to the project
  }, []);

  return (
    <div className="relative rounded-31xl [background:linear-gradient(-26.18deg,_#b1b8de,_#c0c7e9)] shadow-[0px_60px_100px_rgba(0,_0,_0,_0.25)] w-full h-[844px] overflow-hidden text-center text-mid text-system-background-dark-base-primary font-body-bold">
      <img
        className="absolute top-[810px] left-[calc(50%_-_129px)] w-[258px] h-6 cursor-pointer"
        alt=""
        src="/back.svg"
        onClick={onBackClick}
      />
      <div className="absolute top-[0px] left-[-1px] w-[393px] h-[801px] overflow-hidden flex flex-col items-center justify-center gap-[16px]">
        <div className="w-[393px] h-[270px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
          <div className="relative w-[393px] h-24 overflow-hidden shrink-0">
            <div className="absolute top-[0px] left-[0px] h-[59px] flex flex-row items-center justify-start">
              <div className="self-stretch flex-1 flex flex-col items-center justify-center">
                <div className="relative rounded-3xl w-[54px] h-[21px]">
                  <div className="absolute top-[1px] left-[0px] tracking-[-0.41px] leading-[22px] font-semibold inline-block w-[54px] h-5">
                    9:41
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col pt-2.5 px-0 pb-0 items-center justify-start">
                <div className="relative rounded-81xl bg-system-background-dark-base-primary w-[125px] h-[37px]">
                  <div className="absolute top-[calc(50%_-_18.5px)] left-[calc(50%_-_62.5px)] rounded-81xl bg-system-background-dark-base-primary w-20 h-[37px] overflow-hidden" />
                  <div className="absolute top-[calc(50%_-_18.5px)] left-[calc(50%_+_25.5px)] rounded-81xl bg-system-background-dark-base-primary w-[37px] h-[37px] overflow-hidden" />
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="relative w-[18px] h-3"
                    alt=""
                    src="/icon--mobile-signal.svg"
                  />
                  <img
                    className="relative w-[17px] h-[11.83px]"
                    alt=""
                    src="/wifi.svg"
                  />
                  <img
                    className="relative w-[27.4px] h-[13px]"
                    alt=""
                    src="/-statusbarbattery.svg"
                  />
                </div>
              </div>
            </div>
            <img
              className="absolute top-[0px] left-[18px] w-6 h-24 overflow-hidden"
              alt=""
              src="/frame.svg"
            />
          </div>
          <div className="w-[350px] h-[270px] overflow-hidden shrink-0 flex flex-row items-start justify-end mt-[-96px] text-left font-montserrat">
            <div className="w-[270px] h-[161px] flex flex-col items-center justify-center gap-[16px] mt-[109px]">
              <div className="relative font-extrabold">
                Enter Your Destination
              </div>
              <div className="rounded-11xl bg-lavender shadow-[0px_30px_30px_rgba(0,_0,_0,_0.1)] w-[350px] h-[124px] flex flex-col items-center justify-center gap-[16px] text-mini text-darkslateblue font-sf-pro-display">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className="relative w-[278px] h-11">
                    <img
                      className="absolute top-[0px] left-[0px] rounded-11xl w-[278px] h-11"
                      alt=""
                      src="/rectangle-116.svg"
                    />
                    <div className="absolute top-[0px] left-[0px] w-11 h-11 flex flex-col items-center justify-center">
                      <div className="relative w-10 h-10">
                        <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(142.84deg,_#fff,_#c6c8de)] w-10 h-10" />
                        <div className="absolute top-[3px] left-[3px] rounded-[50%] [background:linear-gradient(160.45deg,_#dde1e7,_#fafbfc)] w-[34px] h-[34px]" />
                        <div className="absolute top-[11px] left-[11px] inline-block w-[18.06px] h-[18.06px]">
                          􀋒
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-[13px] left-[52px] font-medium font-montserrat text-gray-200">
                      My Location
                    </div>
                  </div>
                  <div className="relative w-11 h-11">
                    <div className="absolute top-[5px] left-[5px] rounded-[50%] [background:linear-gradient(180deg,_#b6b8cd,_#b0b8ce)] shadow-[-4px_-4px_10px_rgba(255,_255,_255,_0.5),_0px_1px_0.2px_rgba(255,_255,_255,_0.2),_4px_4px_18px_#000] w-[34px] h-[34px]" />
                    <div className="absolute top-[8px] left-[8px] rounded-[50%] [background:linear-gradient(180deg,_#e1e4e6,_#f4f7fa)] w-7 h-7" />
                    <b className="absolute top-[13px] left-[11px]">􀄬</b>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className="relative w-[278px] h-11">
                    <img
                      className="absolute top-[0px] left-[0px] rounded-11xl w-[278px] h-11"
                      alt=""
                      src="/rectangle-116.svg"
                    />
                    <div className="absolute top-[0px] left-[0px] w-11 h-11 flex flex-col items-center justify-center">
                      <div className="relative w-10 h-10">
                        <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(142.84deg,_#fff,_#c6c8de)] w-10 h-10" />
                        <div className="absolute top-[3px] left-[3px] rounded-[50%] [background:linear-gradient(160.45deg,_#dde1e7,_#fafbfc)] w-[34px] h-[34px]" />
                        <div className="absolute top-[11px] left-[11px] inline-block w-[18.06px] h-[18.06px]">
                          􀋒
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-[13px] left-[52px] font-medium font-montserrat text-gray-200">{`Leo, Mars `}</div>
                  </div>
                  <img
                    className="relative w-[63px] h-[63px]"
                    alt=""
                    src="/switch-button.svg"
                  />
                </div>
              </div>
            </div>
            <img
              className="relative w-[51.74px] h-[111.92px] overflow-hidden shrink-0 ml-[-75px]"
              alt=""
              src="/frame1.svg"
            />
          </div>
        </div>
        <div className="relative w-[322px] h-[515px] text-5xl font-roboto">
          <div className="absolute h-full w-[79.81%] top-[0%] right-[20.19%] bottom-[0%] left-[0%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-31xl [background:linear-gradient(113.15deg,_rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.3)_53.13%,_rgba(255,_255,_255,_0.2))] [backdrop-filter:blur(50px)]" />
            </div>
            <div className="absolute h-[8.7%] w-[107%] top-[5.44%] right-[-3.5%] bottom-[85.86%] left-[-3.5%] text-gray-100">
              <img
                className="absolute h-[99.44%] w-[77.14%] top-[0%] right-[11.43%] bottom-[0.56%] left-[11.43%] rounded-xl max-w-full overflow-hidden max-h-full"
                alt=""
                src="/rectangle-7.svg"
              />
              <b className="absolute right-[0px] bottom-[0px] leading-[9.43px] capitalize inline-block w-[275px] h-[38.81px]">{`Boeng Aero Ship `}</b>
            </div>
            <img
              className="absolute h-[44.85%] w-full top-[15.73%] right-[0%] bottom-[39.42%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/superx-1@2x.png"
            />
            <div className="absolute h-[10.49%] w-[89.11%] top-[85.05%] right-[5.45%] bottom-[4.47%] left-[5.45%] rounded-31xl [background:linear-gradient(113.15deg,_rgba(50,_50,_50,_0.2),_rgba(226,_255,_188,_0.3)_53.13%,_rgba(255,_255,_255,_0.2))] [backdrop-filter:blur(50px)]" />
            <div className="absolute top-[326px] left-[14px] w-[229px] h-[102px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-31xl [background:linear-gradient(113.15deg,_rgba(184,_32,_187,_0.37),_rgba(254,_247,_76,_0.3)_53.13%,_rgba(11,_164,_26,_0.2))] [backdrop-filter:blur(50px)]" />
            </div>
            <div className="absolute top-[343px] left-[calc(50%_-_100.5px)] text-inherit leading-[20px] font-light font-inherit text-left flex items-center w-[201px] h-[68px]">
              <ul className="m-0 pl-[19px]">
                <li className="mb-0">{`Mode-->Luxury Aero Ship`}</li>
                <li className="mb-0">{`Price-->1999$`}</li>
                <li>{`Journey Time--> 27 hours`}</li>
              </ul>
            </div>
            <div className="absolute top-[453px] left-[calc(50%_-_53.5px)] text-xl font-fira-sans">
              Book a Seat
            </div>
          </div>
          <div className="absolute h-full w-[79.81%] top-[0%] right-[11.49%] bottom-[0%] left-[8.7%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-31xl [background:linear-gradient(113.15deg,_rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.3)_53.13%,_rgba(255,_255,_255,_0.2))] [backdrop-filter:blur(50px)]" />
            </div>
            <div className="absolute h-[8.7%] w-[107%] top-[5.44%] right-[-3.5%] bottom-[85.86%] left-[-3.5%] text-gray-100">
              <img
                className="absolute h-[99.44%] w-[77.14%] top-[0%] right-[11.43%] bottom-[0.56%] left-[11.43%] rounded-xl max-w-full overflow-hidden max-h-full"
                alt=""
                src="/rectangle-7.svg"
              />
              <b className="absolute right-[0px] bottom-[0px] leading-[9.43px] capitalize inline-block w-[275px] h-[38.81px]">
                Super X Train
              </b>
            </div>
            <img
              className="absolute h-[44.85%] w-full top-[15.73%] right-[0%] bottom-[39.42%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/superx-11@2x.png"
            />
            <div className="absolute h-[10.49%] w-[89.11%] top-[85.05%] right-[5.45%] bottom-[4.47%] left-[5.45%] rounded-31xl [background:linear-gradient(113.15deg,_rgba(50,_50,_50,_0.2),_rgba(226,_255,_188,_0.3)_53.13%,_rgba(255,_255,_255,_0.2))] [backdrop-filter:blur(50px)]" />
            <div className="absolute top-[326px] left-[14px] w-[229px] h-[102px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-31xl [background:linear-gradient(113.15deg,_rgba(184,_32,_187,_0.37),_rgba(254,_247,_76,_0.3)_53.13%,_rgba(11,_164,_26,_0.2))] [backdrop-filter:blur(50px)]" />
            </div>
            <div className="absolute top-[343px] left-[calc(50%_-_100.5px)] text-inherit leading-[20px] font-light font-inherit text-left flex items-center w-[201px] h-[68px]">
              <ul className="m-0 pl-[19px]">
                <li className="mb-0">{`Mode-->Luxury Train`}</li>
                <li className="mb-0">{`Price-->999$`}</li>
                <li>{`Journey Time--> 47 hours`}</li>
              </ul>
            </div>
            <div className="absolute top-[453px] left-[calc(50%_-_53.5px)] text-xl font-fira-sans">
              Book a Seat
            </div>
          </div>
          <div className="absolute h-full w-[79.81%] top-[0%] right-[0%] bottom-[0%] left-[20.19%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-31xl [background:linear-gradient(113.15deg,_rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.3)_53.13%,_rgba(255,_255,_255,_0.2))] [backdrop-filter:blur(50px)]" />
              </div>
              <div className="absolute h-[8.7%] w-[107%] top-[5.44%] right-[-3.5%] bottom-[85.86%] left-[-3.5%] text-gray-100">
                <img
                  className="absolute h-[99.44%] w-[77.14%] top-[0%] right-[11.43%] bottom-[0.56%] left-[11.43%] rounded-xl max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/rectangle-7.svg"
                />
                <b className="absolute right-[0px] bottom-[0px] leading-[9.43px] capitalize inline-block w-[275px] h-[38.81px]">
                  rolls royce jet
                </b>
              </div>
              <img
                className="absolute h-[44.85%] w-full top-[15.73%] right-[0%] bottom-[39.42%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/superx-12@2x.png"
              />
              <div
                className="absolute h-[10.49%] w-[89.11%] top-[85.05%] right-[5.45%] bottom-[4.47%] left-[5.45%] rounded-31xl [background:linear-gradient(113.15deg,_rgba(50,_50,_50,_0.2),_rgba(226,_255,_188,_0.3)_53.13%,_rgba(255,_255,_255,_0.2))] [backdrop-filter:blur(50px)] cursor-pointer"
                onClick={onMainWindowCard14Click}
              />
              <div className="absolute top-[326px] left-[14px] w-[229px] h-[102px]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-31xl [background:linear-gradient(113.15deg,_rgba(184,_32,_187,_0.37),_rgba(254,_247,_76,_0.3)_53.13%,_rgba(11,_164,_26,_0.2))] [backdrop-filter:blur(50px)]" />
              </div>
              <div className="absolute top-[343px] left-[calc(50%_-_100.5px)] text-inherit leading-[20px] font-light font-inherit text-left flex items-center w-[201px] h-[68px]">
                <ul className="m-0 pl-[19px]">
                  <li className="mb-0">{`Mode-->Luxury Jet`}</li>
                  <li className="mb-0">{`Price-->3499$`}</li>
                  <li>{`Journey Time--> 17 hours`}</li>
                </ul>
              </div>
              <div className="absolute top-[453px] left-[calc(50%_-_53.5px)] text-xl font-fira-sans">
                Book a Seat
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
