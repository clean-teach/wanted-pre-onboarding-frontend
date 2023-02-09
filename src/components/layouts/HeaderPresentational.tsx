// import { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  height: 4rem;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  nav {
    position: absolute;
    right: 2rem;
  }
`;
const Title = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Btn = styled.div`
  padding: 0.5rem;
`;

interface IProps {
  isAccess: boolean;
  onLogOut: () => void;
}

function HeaderPresentational({ isAccess, onLogOut }: IProps) {
  return (
    <Wrapper>
      <Title>원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제 : 김청훈</Title>
      <nav>
        {isAccess && (
          <Btn as="button" onClick={onLogOut} className="secondary">
            로그아웃
          </Btn>
        )}
      </nav>
    </Wrapper>
  );
}

export default HeaderPresentational;
