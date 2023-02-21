import React from "react"
import { ErrorContainer } from "./style"

export interface ErrorProps {
  error: string
}

// export const Errors = {
//   "email-already-exists":
//     "The email address you entered is already associated with an account. Please use a different email or try logging in.",
//   "invalid-email":
//     "The email address you entered is not in the correct format. Please try again.",
//   "invalid-password":
//     "The password must be at least 6 characters long. Please choose a stronger password and try again.",
//   "internal-error":
//     "An error has occurred during the operation. Please try again later or contact support for assistance.",
//   "user-not-found":
//     "The user with the provided information could not be found in our system. Please check the information you entered and try again or sign up for a new account.",
//   "wrong-password":
//     "The password you entered is incorrect. Please try again or reset your password if needed.",
//   "blank-field": "Can't be blank",
//   "email-already-in-use":
//     "The email address you entered is already associated with an account. Please use a different email or try logging in.",
//   "weak-password":
//     "The password must be at least 6 characters long. Please choose a stronger password and try again.",
//   "pin-cannot-be-empty": "The Pin field cannot be left blank",
//   "cannot-blank": "Cannot be left blank",
//   "missing-or-insufficient-permissions.": "The board already exist.",
// }

const Error = ({ error }: ErrorProps) => {
  return <ErrorContainer>{error}</ErrorContainer>
}

export default Error
