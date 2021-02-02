import React, { useState, useRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useOutsideClick } from '@/hooks/useOutsideClick';

const DropdownBlock = styled.div<{ visible: boolean }>`
  position: relative;
  display: flex;
`;

const open = css`
  opacity: 1;
  transform: scaleY(1);
`;
const close = css`
  opacity: 0;
  transform: scaleY(0);
`;

const Overlay = styled.div`
  z-index: 500;
  position: absolute;
  min-width: 120px;
  background: ${({ theme }) => theme.palette.color.white};
  border-radius: 4px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12), 0px 4px 12px rgba(0, 0, 0, 0.08);

  ${({ visible }: { visible: boolean }) => (visible ? open : close)};
  transform-origin: top center;
  transition: transform 0.2s, opacity 0.1s;
`;

export interface DropdownProps {
  children: React.ReactElement;
  overlay: React.ReactElement;
  trigger?: 'click' | 'contextMenu';
}

function Dropdown({ children, overlay, trigger }: DropdownProps) {
  const triggerRef = useRef(null);
  const [isVisible, setVisible] = useState<boolean>(false);

  // Overlay closes when click outside
  useOutsideClick(triggerRef, () => setVisible(false));

  /**
   * Children을 복사해서 Trigger에 필요한 속성 추가
   */
  const dropdownTrigger = () => {
    const child = React.Children.only(children) as React.ReactElement;
    const triggerAction = trigger === 'contextMenu' ? 'onContextMenu' : 'onClick';

    return React.cloneElement(child, {
      ref: triggerRef,
      [triggerAction]: (event: React.MouseEvent) => {
        event.preventDefault();
        setVisible(!isVisible);
      },
    });
  };

  return (
    <DropdownBlock visible={isVisible}>
      {dropdownTrigger()}
      <Overlay visible={isVisible}>{React.Children.only(overlay)}</Overlay>
    </DropdownBlock>
  );
}

export default Dropdown;
