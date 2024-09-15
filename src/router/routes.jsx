import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import AccessibilityRoundedIcon from '@mui/icons-material/AccessibilityRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
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
        icon: <AccountCircleIcon/>
    },
    {
        content: "Group",
        path: "/admin-layout/group",
        icon: <AssignmentIndIcon/>
    },
]
const student = [
    {}
]
export {admin, student}