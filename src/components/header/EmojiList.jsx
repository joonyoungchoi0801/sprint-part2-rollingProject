import React from 'react';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import EmojiCountList from '@components/common/EmojiCountList';
import EmojiExpand from './EmojiExpand';
import arrowdown from '@/assets/arrowdownIcon.svg';

const Styled = {
  Container: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.2rem;
  `,
  EmojiButton: styled.button`
    display: flex;
    position: relative;
    width: 3.6rem;
    height: 3.6rem;
    padding: 0.6rem;
    justify-content: center;
    align-items: center;
  `,
};
function EmojiList({ EmojiCountData }) {
  const [isClicked, setIsClicked] = useState(false);
  const buttonRef = useRef(null);
  const handleButtonClick = () => {
    setIsClicked((prev) => !prev);
  };
  useEffect(() => {
    if (!isClicked) return;
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsClicked(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isClicked]);

  const EmojiTopThreeData = EmojiCountData.topReactions.slice(0, 3);
  const data1 = EmojiCountData.topReactions.slice(0, 4);
  const data2 = EmojiCountData.topReactions.slice(4, 8);
  return (
    <Styled.Container>
      <EmojiCountList data={EmojiTopThreeData} />
      <Styled.EmojiButton
        ref={buttonRef}
        onClick={handleButtonClick}
        type="button"
      >
        <img src={arrowdown} alt="arrowdownIcon" />
        {isClicked && <EmojiExpand data1={data1} data2={data2} />}
      </Styled.EmojiButton>
    </Styled.Container>
  );
}

export default EmojiList;
