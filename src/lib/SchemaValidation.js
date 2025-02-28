import * as yup from "yup"


export const signupSchema = yup
.object({
    email: yup.string().required('Email is required').email("invalid email format"),
    fullName: yup.string().required("Fullname is required"),
    password: yup.string().required('Password is required').min(8, "min lenght of password should be at least 8 characters"),
    confirmPassword: yup.string().required('Confirm password is required').oneOf([yup.ref("password"), null], "Passwords must match"),
})
.required()


export const signinSchema = yup.object ({
    email: yup.string().required('Email is required').email("invalid email format"),
    password: yup.string().required('Password is required').min(8, "min lenght of password should be at least 8 charcters"),
})
.required()

export  const forgotpasswordSchema = yup
.object({
    email: yup.string().required('Email is required').email("Invalid email format"),
})

export const resetpasswordSchema = yup
.object({
    password: yup.string().required('Password is required').min(8, "min lenght of password should be at least 8 characters"),
    confirmPassword: yup.string().required('Confirm password is required').oneOf([yup.ref("password"), null], "Passwords must match"),
})


export const createvent = yup 
.object ({
    uploadimg: yup.mixed().required("Event photo is required").nullable(),
    date: yup.date().nullable().required('Date is required').typeError('Date is required'),
    startTime: yup.string().required('Start time is required'),
    endTime: yup.string().required("End time is required").test('is-after', "End time must be after Start time", function (value) {
        const {startTime} = this.parent;
        return startTime && value > startTime;
    }),
    location: yup.string().required("Pick an option").oneOf(["Teslim Balogun Stadium, Surulere", "Euphoria House 9", "Tafawa Balewa Square (TBS)"], "You must select an option!"),
    description: yup.string().required("Description is required"),
    category: yup.string().required("Pick an option").oneOf(["Concert", "Education", "Party", "Sport", "Tech"], "You must select an option!"),
    
})