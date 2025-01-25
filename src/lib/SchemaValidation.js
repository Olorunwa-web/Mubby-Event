import * as yup from "yup"


export const signupSchema = yup
.object({
    email: yup.string().required('Email is required').email("invalid email format"),
    fullName: yup.string().required("Fullname is required"),
    password: yup.string().required('Password is required').min(8, "min lenght of password should be at least 8 characters"),
    confirmPassword: yup.string().required('Confirm password is required').oneOf([yup.ref("password"), null], "passwords must match"),
})
.required()


export const signinSchema = yup.object ({
    email: yup.string().required('Email is required').email("invalid email format"),
    password: yup.string().required('Password is required').min(8, "min lenght of password should be at least 8 charcters"),
})
.required()

export  const forgotpasswordSchema = yup
.object({
    email: yup.string().required('Email is required').email("invalid email format"),
})

export const resetpasswordSchema = yup
.object({
    password: yup.string().required('Password is required').min(8, "min lenght of password should be at least 8 characters"),
    confirmPassword: yup.string().required('Confirm password is required').oneOf([yup.ref("password"), null], "passwords must match"),
})