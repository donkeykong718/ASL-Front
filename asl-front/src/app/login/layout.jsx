import LoginProivder from "./login-provider"

export default function LoginLayout({ children }) {

  return (
    <div className="flex-container">
      <LoginProivder>{children}</LoginProivder>
    </div>
  )
}