import React from 'react';

import { IdentificationDialog } from 'common/../IdentificationDialog';
import { SignupIcon } from 'common/icons';
import { LabelledButton } from 'components/LabelledButton';
import type { FinallyComposedLabelledButtonPropsType } from 'components/LabelledButton';

import { useModal } from 'store/modal';
import style from 'components/MobileSidebar/Profile/style.scss';


interface ILoginable {
  onLogin?: () => void;
}

type LoginButtonProps = FinallyComposedLabelledButtonPropsType<ILoginable>;

export const SignupButton: React.FC<LoginButtonProps> = ({
  iconClassName,
  onLogin,
  ...propsRest
}) => {
  const { modalActions } = useModal();

  return (
    <LabelledButton
      {...propsRest}
      label="Зарегистрироваться"
      onClick={() => {
        modalActions.show(<IdentificationDialog
          onLogin={onLogin}
          isLoginDialog={false}
        />);
      }}
    >
      <SignupIcon className={style.icon} />
    </LabelledButton>
  );
};
