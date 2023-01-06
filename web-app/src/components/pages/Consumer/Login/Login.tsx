import React from "react";
import './Login.css'
import AddresserLogo from '../../../../assets/images/Addresser.png'

import { TextButton } from "@atoms/TextButton.atom";
import { TextFields } from "@atoms/TextFields.atom";

interface LoginProps { }

export const Login = ({
  ...props
}: LoginProps) => {
  return (
    <div className="login-page">
      <div className="left-page">
        <div>
          <img src={AddresserLogo} alt="AddresserLogo" />
        </div>
      </div>
      <div className="right-page">
        <div className="select-form">
          <h2>sign in / sing up</h2>
        </div>
        <div className="sign-in-form">
          <TextFields />
          <TextFields />
          <TextButton label={'ログイン'}></TextButton>
          {/* ここにログインフォーム作成（デザイン見直したい） */}
        </div>
      </div>
    </div>
  )
}
