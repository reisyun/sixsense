import React from 'react';
import styled from '@emotion/styled';
import Input from '@/components/atoms/Input';
import ValidationHint from '@/components/atoms/ValidationHint';

const ValidationInputBlock = styled.div`
  position: relative;
`;

export interface ValidationInputProps {
  disabled?: boolean;
  invalid?: boolean;
  placeholder?: string;
  validationHint?: string;
}

function ValidationInput({ disabled, invalid, placeholder, validationHint }: ValidationInputProps) {
  return (
    <ValidationInputBlock>
      <Input disabled={disabled} invalid={invalid} placeholder={placeholder} />
      {validationHint && (
        <ValidationHint disabled={disabled} invalid={invalid}>
          {validationHint}
        </ValidationHint>
      )}
    </ValidationInputBlock>
  );
}

export default ValidationInput;
