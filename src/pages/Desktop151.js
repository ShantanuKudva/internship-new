import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Desktop151 = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/license-details");
  }, [navigate]);

  return (
    <div className="relative bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[1024px] overflow-hidden text-center text-xl text-black font-inter">
      <div className="absolute top-[0px] left-[0px] bg-tomato w-[1440px] h-[207px]" />
      <div className="absolute top-[75px] left-[967px] w-[431px] h-[57px] text-left text-6xl">
        <div className="absolute top-[0px] left-[0px] rounded-[45px] bg-linen w-[431px] h-[57px]" />
        <div className="absolute top-[6px] left-[34px] flex items-center w-[100px] h-[45px]">
          Search
        </div>
        <img
          className="absolute top-[13px] left-[373px] w-[31px] h-[31px] object-cover"
          alt=""
          src="/search@2x.png"
        />
      </div>
      <div
        className="absolute top-[73px] left-[30px] w-[342px] h-[62px] cursor-pointer text-6xl"
        onClick={onGroupContainer1Click}
      >
        <div className="absolute top-[0px] left-[0px] rounded-sm bg-linen w-[342px] h-[62px]" />
        <div className="absolute top-[6px] left-[82px] flex items-center justify-center w-[177px] h-[50px]">{`<- Go Back`}</div>
      </div>
      <img
        className="absolute top-[915px] left-[472px] w-[495px] h-[57px]"
        alt=""
        src="/group-41.svg"
      />
      <div className="absolute top-[935px] left-[calc(50%_-_10px)] font-extrabold text-white flex items-center justify-center w-[21px] h-[19px]">
        5
      </div>
      <div className="absolute top-[917px] left-[544px] font-extrabold flex items-center justify-center w-[70px] h-[53px]">
        1
      </div>
      <b className="absolute top-[917px] left-[825px] flex items-center justify-center w-[70px] h-[53px]">
        12
      </b>
      <div className="absolute top-[919px] left-[484px] font-extrabold flex items-center justify-center w-[50px] h-[50px]">{`<`}</div>
      <div className="absolute top-[919px] left-[956px] font-extrabold flex items-center justify-center w-[50px] h-[50px] [transform:_rotate(180deg)] [transform-origin:0_0]">{`<`}</div>
      <img
        className="absolute top-[933px] left-[773px] w-[35.12px] h-[35.12px] object-cover"
        alt=""
        src="/menu-vertical@2x.png"
      />
      <img
        className="absolute top-[935px] left-[633px] w-[35.12px] h-[35.12px] object-cover"
        alt=""
        src="/menu-vertical1@2x.png"
      />
      <img
        className="absolute top-[207px] left-[calc(50%_-_720px)] w-[1440px] h-[667px]"
        alt=""
        src="/rectangle-37.svg"
      />
      <img
        className="absolute top-[206px] left-[calc(50%_-_720px)] w-[1440px] h-[669px]"
        alt=""
        src="/rectangle-38.svg"
      />
      <div className="absolute top-[207.5px] left-[359.5px] box-border w-px h-[667px] border-r-[1px] border-dashed border-tomato" />
      <div className="absolute top-[206.5px] left-[719.5px] box-border w-px h-[667px] border-r-[1px] border-dashed border-tomato" />
      <div className="absolute top-[206.5px] left-[1079.5px] box-border w-px h-[667px] border-r-[1px] border-dashed border-tomato" />
      <div className="absolute top-[240px] left-[131px] w-28 h-[575px] text-left">
        <div className="absolute top-[0px] left-[0px] w-28 h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-28 h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[66px] left-[0px] w-28 h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-28 h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[132px] left-[0px] w-28 h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-28 h-[47px]">
            Module 1
          </div>
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-28 h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[198px] left-[0px] w-28 h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-28 h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[264px] left-[0px] w-28 h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-28 h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[330px] left-[0px] w-28 h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-28 h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[396px] left-[0px] w-28 h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-28 h-[47px]">
            Module 1
          </div>
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-28 h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[462px] left-[0px] w-28 h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-28 h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[528px] left-[0px] w-28 h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-28 h-[47px]">
            Module 1
          </div>
        </div>
      </div>
      <div className="absolute top-[241px] left-[491px] w-[102px] h-[575px] text-left">
        <div className="absolute top-[0px] left-[0px] w-[102px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[102px] h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[66px] left-[0px] w-[102px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[102px] h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[132px] left-[0px] w-[102px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[102px] h-[47px]">
            Module 1
          </div>
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[102px] h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[198px] left-[0px] w-[102px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[102px] h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[264px] left-[0px] w-[102px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[102px] h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[330px] left-[0px] w-[102px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[102px] h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[396px] left-[0px] w-[102px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[102px] h-[47px]">
            Module 1
          </div>
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[102px] h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[462px] left-[0px] w-[102px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[102px] h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[528px] left-[0px] w-[102px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[102px] h-[47px]">
            Module 1
          </div>
        </div>
      </div>
      <div className="absolute top-[238px] left-[841px] w-[111px] h-[575px] text-left">
        <div className="absolute top-[0px] left-[0px] w-[111px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[111px] h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[66px] left-[0px] w-[111px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[111px] h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[132px] left-[0px] w-[111px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[111px] h-[47px]">
            Module 1
          </div>
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[111px] h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[198px] left-[0px] w-[111px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[111px] h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[264px] left-[0px] w-[111px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[111px] h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[330px] left-[0px] w-[111px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[111px] h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[396px] left-[0px] w-[111px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[111px] h-[47px]">
            Module 1
          </div>
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[111px] h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[462px] left-[0px] w-[111px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[111px] h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[528px] left-[0px] w-[111px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[111px] h-[47px]">
            Module 1
          </div>
        </div>
      </div>
      <div className="absolute top-[239px] left-[1200px] w-[110px] h-[575px] text-left">
        <div className="absolute top-[0px] left-[0px] w-[110px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[110px] h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[66px] left-[0px] w-[110px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[110px] h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[132px] left-[0px] w-[110px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[110px] h-[47px]">
            Module 1
          </div>
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[110px] h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[198px] left-[0px] w-[110px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[110px] h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[264px] left-[0px] w-[110px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[110px] h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[330px] left-[0px] w-[110px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[110px] h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[396px] left-[0px] w-[110px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[110px] h-[47px]">
            Module 1
          </div>
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[110px] h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[462px] left-[0px] w-[110px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[110px] h-[47px]">
            Module 1
          </div>
        </div>
        <div className="absolute top-[528px] left-[0px] w-[110px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold flex items-center w-[110px] h-[47px]">
            Module 1
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop151;
