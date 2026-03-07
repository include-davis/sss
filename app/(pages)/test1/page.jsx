import Teamgroup from "../_components/Teamgroup/Teamgroup";

const Advisors =[
    {
        name: "Rich Whittle",
        title: "Assistant Professor",
        department: "Mechanical and Aerospace Engineering",
        image: "",
        emailLink: "rswhittle@ucdavis.edu"
    },
    {
        name: "Alan Dugger",
        title: "Assistant Professor",
        department: "Military Science",
        image: "",
        emailLink: "adugger@ucdavis.edu"
    },
    {
        name: "Adam Zufall",
        title: "PhD-Student Advisor",
        department: "Inspection Satellite Technologies",
        image: "",
        emailLink: "admzufall@ucdavis.edu"
    }
];

export default function page(){
    return(
        <div>
            <Teamgroup title ="Advisors" members={Advisors}/>
        </div>
    )
}
