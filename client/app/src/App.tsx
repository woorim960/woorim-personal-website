import {
  Header,
  Gallery,
  Item,
  Contact,
  Intro,
  Skill,
  ProgressBar,
  VisitorCounter,
  VisitorComment,
} from "dev-portfolio";

import { useEffect, useState } from "react";
import styled from "styled-components";
import useComment from "./hooks/useComment";
import "./App.css";
import COLOR from "./common/style/theme";
import countAPI from "./apis/count";

function App() {
  const [todayCounter, setTodayCounter] = useState<number>(0);
  const [totalCounter, setTotalCounter] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const result = await countAPI.getCount();
      setTodayCounter(result.todayCount);
      setTotalCounter(result.totalCount);
    })();
  }, []);

  const {
    comment,
    commentList,
    password,
    nickname,
    handleChangeDescription,
    handleChangeNickname,
    handleChangePassword,
    handleCreateComment,
  } = useComment();

  return (
    <div className="App">
      <Header
        headerBackgroundColor={COLOR.POINT_COLOR}
        logoOption={{
          redirectUrl: "/",
          title: "기본에 충실한 개발자",
          logoImg: "./박우림_일러스트.png",
          // logoHidden: true,
          titleColor: `${COLOR.CLEAN_BLUE}`,
          titleSize: "24px",
        }}
        channels={[
          {
            name: "github",
            redirectUrl: "https://github.com/woorim960",
            color: `${COLOR.CLEAN_BLUE}`,
            size: "26px",
            margin: "0 12px 0 0",
          },
          {
            name: "linkedin",
            redirectUrl:
              "https://www.linkedin.com/in/woorim-park-003b51216/?originalSubdomain=kr",
            color: `${COLOR.CLEAN_BLUE}`,
            size: "26px",
            margin: "0 12px 0 0",
          },
          {
            name: "youtube",
            redirectUrl:
              "https://www.youtube.com/channel/UCS0F25vig_sPIQXMiK8IdSg",
            color: `${COLOR.CLEAN_BLUE}`,
            size: "26px",
            margin: "0 12px 0 0",
          },
        ]}
        sideBarOption={{
          mainTitle: "Wellcome :D",
          mainTitleSize: "24px",
          mainTitleColor: "white",
          mainTitleAlign: "left",
          mainTitleBorderColor: "white",
          iconName: "ant-design:menu-fold-outlined", //Refer to the guidelines.
          iconSize: "30px",
          iconColor: `${COLOR.MAIN_COLOR}`,
          iconMargin: "0px 12px",
          itemTextColor: `${COLOR.MAIN_COLOR}`,
          itemTextAlign: "left",
          itemBackgroundColor: `${COLOR.POINT_COLOR}`,
          itemHoverdBackgroundColor: `${COLOR.CLEAN_BLUE}`,
          backgroundColor: `${COLOR.POINT_COLOR}`,
        }}
      />

      <VisitorCounter
        theme="big-size"
        backgroundColor={COLOR.MAIN_COLOR}
        size="14px"
        title="조회수"
        titleColor={COLOR.POINT_COLOR}
        todayTitle="오늘"
        todayTitleColor={COLOR.POINT_COLOR}
        todayVisitor={todayCounter}
        todayVisitorColor={COLOR.CLEAN_BLUE}
        totalTitle="전체"
        totalTitleColor={COLOR.POINT_COLOR}
        totalVisitor={totalCounter}
        totalVisitorColor={COLOR.CLEAN_BLUE}
      />

      <UnderLine></UnderLine>

      <Intro
        id="['핵심 소개', 'clarity:cursor-hand-open-line']"
        backgroundColor={COLOR.MAIN_COLOR}
        title="핵심"
        titleColor={COLOR.POINT_COLOR}
        shortIntro="기본에 충실한 개발자"
        shortIntroColor={COLOR.POINT_COLOR}
        description={`기본을 중요시 합니다.\n\n기본이 튼튼할 수록 더 빠르게, 더 멀리 갈 수 있다고 생각하며, 늘 기초에 충실하고자 노력합니다.\nWhat(단순히 코드가 동작하고 서비스가 구현됨)에 의의를 두지 않으며, \n\nWhy(왜 이게 좋은 코드인지, 왜 이런 기술을 사용해야하는지)와 How(어떻게 구현할지, 어떻게 개선해야 좋은지)에 집중합니다. \n\n이러한 접근은 결국 기초를 단단하게 쌓는 방향으로 진화했습니다.`}
        descriptionColor={COLOR.MAIN_COLOR}
        descriptionBackgroundColor={COLOR.POINT_COLOR}
      />

      <MyProfile id="['프로필', 'carbon:user']">
        <img src="./profile.png" alt="MyPhoto" width="260px"></img>
        <MyProfileDescription>
          <FavoriteText>
            <Skill
              iconName="carbon:user"
              iconColor={COLOR.POINT_COLOR}
              margin="0 8px 0 0"
              isHiddenTitle={true}
              iconSize="20px"
              backgroundColor={COLOR.MAIN_COLOR}
              borderColor={COLOR.MAIN_COLOR}
            />
            <span style={{}}>박우림 | woorim park</span>
          </FavoriteText>
          <FavoriteText>
            <Skill
              iconName="carbon:email"
              iconColor={COLOR.POINT_COLOR}
              margin="0 8px 0 0"
              isHiddenTitle={true}
              iconSize="20px"
              backgroundColor={COLOR.MAIN_COLOR}
              borderColor={COLOR.MAIN_COLOR}
            />
            <span style={{}}>woorimprog @ gmail.com</span>
          </FavoriteText>
          <FavoriteText>
            <Skill
              iconName="carbon:mobile"
              iconColor={COLOR.POINT_COLOR}
              margin="0 8px 0 0"
              isHiddenTitle={true}
              iconSize="20px"
              backgroundColor={COLOR.MAIN_COLOR}
              borderColor={COLOR.MAIN_COLOR}
            />
            <span style={{}}>woorimprog @ gmail.com</span>
          </FavoriteText>
          <FavoriteText>
            <Skill
              iconName="carbon:parameter"
              iconColor={COLOR.POINT_COLOR}
              margin="0 8px 0 0"
              isHiddenTitle={true}
              iconSize="20px"
              backgroundColor={COLOR.MAIN_COLOR}
              borderColor={COLOR.MAIN_COLOR}
            />
            <span style={{}}>ENTJ</span>
          </FavoriteText>
          {/* <img src="./commits.png" alt="commit-img" width="500px" /> */}
        </MyProfileDescription>
      </MyProfile>

      <SkillContainer id="['스킬', 'akar-icons:stack-overflow-fill']">
        <div style={{ width: "100%", padding: "0 20px" }}>
          <SkillBox>
            <Skill
              iconName="ion:logo-javascript"
              isHiddenTitle={true}
              iconColor={COLOR.POINT_COLOR}
              iconSize="40px"
              margin="10px 10px 10px 0"
            />
            <ProgressBar
              rateText="30%"
              rateTextColor={COLOR.CLEAN_BLUE}
              colorTo={COLOR.CLEAN_BLUE}
              backgroundColor={COLOR.POINT_COLOR}
            />
          </SkillBox>
          {/* la:node */}

          <SkillBox>
            <Skill
              iconName="akar-icons:react-fill"
              isHiddenTitle={true}
              iconColor={COLOR.POINT_COLOR}
              iconSize="40px"
              margin="10px 10px 10px 0"
            />
            <ProgressBar
              rateText="5%"
              rateTextColor={COLOR.CLEAN_BLUE}
              colorTo={COLOR.CLEAN_BLUE}
              backgroundColor={COLOR.POINT_COLOR}
            />
          </SkillBox>
        </div>

        <div style={{ width: "100%", padding: "0 20px" }}>
          <SkillBox>
            <Skill
              iconName="la:node"
              isHiddenTitle={true}
              iconColor={COLOR.POINT_COLOR}
              iconSize="40px"
              margin="10px 10px 10px 0"
            />
            <ProgressBar
              rateText="10%"
              rateTextColor={COLOR.CLEAN_BLUE}
              colorTo={COLOR.CLEAN_BLUE}
              backgroundColor={COLOR.POINT_COLOR}
            />
          </SkillBox>

          <SkillBox>
            <Skill
              iconName="bxl:spring-boot"
              isHiddenTitle={true}
              iconColor={COLOR.POINT_COLOR}
              iconSize="40px"
              margin="10px 10px 10px 0"
            />
            <ProgressBar
              rateText="51%"
              rateTextColor={COLOR.POINT_COLOR}
              colorTo={COLOR.CLEAN_BLUE}
              backgroundColor={COLOR.POINT_COLOR}
            />
          </SkillBox>
        </div>
      </SkillContainer>

      <Gallery
        id="['히스토리', 'material-symbols:work-history-outline']"
        column={4}
        theme="mid-night"
      >
        <Item
          src="./smart-vending-machine.png"
          title="스마트 자판기 개발"
          titleColor={COLOR.CLEAN_BLUE}
          description={`[2020.07 - 12] 국내최대규모 공개SW개발자대회 1등<학생부문>(약 400여 팀중..)`}
          descriptionColor={COLOR.CLEAN_BLUE}
          hoverdInnerBorderColor={COLOR.CLEAN_BLUE}
        />
        <Item
          src="./modern-agile-team.png"
          title="모던애자일 창설"
          titleColor={COLOR.CLEAN_BLUE}
          description="[2020.12 - ing]"
          descriptionColor={COLOR.CLEAN_BLUE}
          hoverdInnerBorderColor={COLOR.CLEAN_BLUE}
        />
        <Item
          src="./idu-market.png"
          title="인덕대학 중고거래 플랫폼 개발"
          titleColor={COLOR.CLEAN_BLUE}
          description="[2020.12 - 2021.05]"
          descriptionColor={COLOR.CLEAN_BLUE}
          hoverdInnerBorderColor={COLOR.CLEAN_BLUE}
        />
        <Item
          src="./strat-up.png"
          title="글로벌 가상 창업"
          titleColor={COLOR.CLEAN_BLUE}
          description="[2021.7 - 12] 전세계 2위(약 7천여 기업중..)"
          descriptionColor={COLOR.CLEAN_BLUE}
          hoverdInnerBorderColor={COLOR.CLEAN_BLUE}
        />
        <Item
          src="./u-market.png"
          title="대학생 중고거래 모바일 앱 개발"
          titleColor={COLOR.CLEAN_BLUE}
          description="[2021.09 - 12] 국내최대규모 IT해커톤 상위 10%(약 400여 팀중..)"
          descriptionColor={COLOR.CLEAN_BLUE}
          hoverdInnerBorderColor={COLOR.CLEAN_BLUE}
        />
        <Item
          src="./coex-lecture.png"
          title="코엑스 강연"
          titleColor={COLOR.CLEAN_BLUE}
          description="[2021.12] 주제: 스마트 인재"
          descriptionColor={COLOR.CLEAN_BLUE}
          hoverdInnerBorderColor={COLOR.CLEAN_BLUE}
        />
        <Item
          src="./dev-portfolio.png"
          title="웹개발 키트, 리액트 라이브러리 개발"
          titleColor={COLOR.CLEAN_BLUE}
          description="[2022.03 - ing]"
          descriptionColor={COLOR.CLEAN_BLUE}
          hoverdInnerBorderColor={COLOR.CLEAN_BLUE}
        />
        <Item
          src="./gmarket.jpg"
          title="Gmarket Software Engineer"
          titleColor={COLOR.CLEAN_BLUE}
          description="[2022.06 - ing]"
          descriptionColor={COLOR.CLEAN_BLUE}
          hoverdInnerBorderColor={COLOR.CLEAN_BLUE}
        />
      </Gallery>

      <VisitorComment
        id="['방명록', 'fluent:comment-add-24-regular']"
        backgroundColor={COLOR.MAIN_COLOR}
        theme="basic" // 'basic' | 'box' | 'vertical'
        inputBackgroundColor={COLOR.POINT_COLOR}
        inputFontColor={COLOR.MAIN_COLOR}
        inputPlacehoderColor={COLOR.SIMPLE_GREY}
        userInputLineColor={COLOR.CLEAN_BLUE}
        buttonColor={COLOR.CLEAN_BLUE}
        listBackgroundColor={COLOR.POINT_COLOR}
        listCommentColor={COLOR.MAIN_COLOR}
        listNicknameColor={COLOR.CLEAN_BLUE}
        listDateColor={COLOR.CLEAN_BLUE}
        progressbarColor={COLOR.CLEAN_BLUE}
        isShowScrollDownIcon={true}
        scrollDownIconColor={COLOR.CLEAN_BLUE}
        descriptionPlaceholder="방명록을 남겨주세요 :D"
        nicknamePlaceholder="닉네임"
        passwordPlaceholder="비밀번호"
        comment={comment} // Your fetched variable
        nickname={nickname} // Your fetched variable
        password={password} // Your fetched variable
        commentList={commentList} // Your fetched variable
        handleCreateComment={handleCreateComment} // Event handling variable
        handleChangeDescription={handleChangeDescription} // Event handling variable
        handleChangeNickname={handleChangeNickname} // Event handling variable
        handleChangePassword={handleChangePassword} // Event handling variable
      />

      <Contact
        id="['연락처', 'fluent:contact-card-20-regular']"
        title="만나서 반가워요."
        titleColor={COLOR.CLEAN_BLUE}
        subTitle="아래 버튼을 클릭하면 박우림에게 메일을 보낼 수 있어요 :D"
        subTitleColor={COLOR.MAIN_COLOR}
        buttonText={`"적극적" 이어야만 박우림을 가질 수 있어요!`}
        buttonTextColor={COLOR.MAIN_COLOR}
        buttonColor={COLOR.POINT_COLOR}
        buttonBorderColor={COLOR.CLEAN_BLUE}
        backgroundColor={COLOR.POINT_COLOR}
        email="woorimprog@gmail.com"
        channels={[
          {
            name: "github",
            redirectUrl: "https://github.com/woorim960",
            color: `${COLOR.CLEAN_BLUE}`,
            margin: "0 10px 0 0",
          },
          {
            name: "linkedin",
            redirectUrl:
              "https://www.linkedin.com/in/woorim-park-003b51216/?originalSubdomain=kr",
            color: `${COLOR.CLEAN_BLUE}`,
            margin: "0 10px 0 0",
          },
          {
            name: "youtube",
            redirectUrl:
              "https://www.youtube.com/channel/UCS0F25vig_sPIQXMiK8IdSg",
            color: `${COLOR.CLEAN_BLUE}`,
            margin: "0 10px 0 0",
          },
        ]}
        aboutMeInfos={[
          {
            title: "사 는 곳",
            titleColor: `${COLOR.CLEAN_BLUE}`,
            description: "대한민국 서울시 동대문구",
            descriptionColor: `${COLOR.MAIN_COLOR}`,
          },
          {
            title: "모 바 일",
            titleColor: `${COLOR.CLEAN_BLUE}`,
            description: "T. +82 (0)10 0000 0000",
            descriptionColor: `${COLOR.MAIN_COLOR}`,
          },
          {
            title: "이 메 일",
            titleColor: `${COLOR.CLEAN_BLUE}`,
            description: "woorimprog@gmail.com",
            descriptionColor: `${COLOR.MAIN_COLOR}`,
          },
        ]}
      />
    </div>
  );
}

export default App;

const ContactTitle = styled.h1`
  margin: 0;
  padding: 0 1em 0 1em;
`;

const MyProfile = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px 0px 30px 30px;
  background-color: ${COLOR.POINT_COLOR};
`;

const MyProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  margin: 0 40px;
  padding: 10px 0;
  color: ${COLOR.POINT_COLOR};
`;

const FavoriteText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 600;
  padding: 10px 20px;
  background-color: ${COLOR.MAIN_COLOR};
  border-radius: 8px;
`;

const SkillContainer = styled.div`
  display: flex;
  direction: row;
  margin: 2em 2em 0 2em;
`;

const SkillBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const UnderLine = styled.hr`
  border: 0.5px dashed ${COLOR.SIMPLE_GREY};
`;
