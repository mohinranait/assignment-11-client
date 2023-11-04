import { Link } from "react-router-dom";


const AssignmentCard = () => {
    return (
        <div className="px-5 py-5 rounded border border-slate-100 bg-blue-50">
            <div className="mb-2">
                <Link>
                    <img className="rounded" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
                </Link>
            </div>
            <div>
                <p className="font-medium"><span>Total Marks:</span> <span>50</span> </p>
                <Link className="text-xl font-bold ">Assignment</Link>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, eaque.</p>
            </div>
        </div>
    );
};

export default AssignmentCard;