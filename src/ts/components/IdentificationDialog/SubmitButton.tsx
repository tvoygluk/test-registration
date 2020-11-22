import React from 'react';

import { Button } from 'common/Button';

interface IIdentificationDialogSubmitButtonProps {
  className?: string;
  legend: string;
  isActive: boolean;
}

export const IdentificationDialogSubmitButton: React.FC<IIdentificationDialogSubmitButtonProps> = ({
  className,
  legend,
  isActive,
}) => {
  return (
    <Button
      className={className}
      type="submit"
      disabled={!isActive}
      isBlack
    >
      {legend}
    </Button>
  );
};
