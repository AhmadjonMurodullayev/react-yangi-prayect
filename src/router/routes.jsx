import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import AccessibilityRoundedIcon from '@mui/icons-material/AccessibilityRounded';

const admin = [
    {
        content: "Teacher",
        path: "/admin-layout",
        icon: <SupervisedUserCircleRoundedIcon/>
    },
    {
        content: "Student",
        path: "/admin-layout/student",
        icon: <AccessibilityRoundedIcon/>
    },
    {
        content: "Course",
        path: "/admin-layout/course",
        icon: <AccessibilityRoundedIcon/>
    },
    {
        content: "Group",
        path: "/admin-layout/group",
        icon: <AccessibilityRoundedIcon/>
    },
]
const student = [
    {}
]
export {admin, student}