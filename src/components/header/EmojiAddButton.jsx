import React from 'react';
import { useState, useEffect, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';
import styled from 'styled-components';
import OutlinedButton from '@components/common/button/OutlinedButton';
const Styled = {
  Container: styled.div`
    position: relative; // postion:absolute용도
  `,
  AddButton: styled.button`
    display: flex;
    padding: 0.6rem 1.6rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.6rem;
    border: ${({ theme }) => theme.border.gr1};
    background: ${({ theme }) => theme.color.white};
    z-index: 0;
  `,
  ButtonInfo: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    color: #181818;
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;
  `,
  EmojiPickerContainer: styled.div`
    position: absolute;
    top: 4.8rem;
    left: -27rem;
    z-index: 10;
  `,
  StyledEmojiPicker: styled(EmojiPicker)`
    width: 28.606rem;
    height: 36.8126rem;
  `,
};

function EmojiAddButton() {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const buttonRef = useRef(null);
  const emojiPickerRef = useRef(null);

  const handleButtonClick = () => {
    setIsClicked((prev) => !prev);
  };
  const onEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
  };
  useEffect(() => {
    if (!isClicked) return;
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        console.log(selectedEmoji);
        setIsClicked(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isClicked, selectedEmoji]);
  return (
    <Styled.Container>
      <OutlinedButton
        ref={buttonRef}
        onClick={handleButtonClick}
        iconType={'add'}
      >
        추가
      </OutlinedButton>
      {isClicked && (
        <Styled.EmojiPickerContainer ref={emojiPickerRef}>
          <Styled.StyledEmojiPicker onEmojiClick={onEmojiClick} />
        </Styled.EmojiPickerContainer>
      )}
    </Styled.Container>
  );
}

export default EmojiAddButton;