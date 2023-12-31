
import SubmiteItem from './SubmiteItem';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../hooks/useAxios';
import LoadingSpin from '../../components/LoadingSpin';

const AllSubmited = () => {
    const axios = useAxios();
    const {data:pendingSubmiteds, isLoading} = useQuery({
        queryKey: ['pendingSubmited'],
        queryFn : async () => {
            const res = await axios.get(`/pending-submitions`);
            const result = await res.data;
            return result; 
        }
    })

    if(isLoading){
        return <LoadingSpin />
    }

    return (
        <section>
            <div className="container px-5 lg:px-0 my-16  ">
                <div className="overflow-x-auto bg-white py-8">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Assignment</th>
                                <th>Submition</th>
                                <th>Examinee</th>
                                <th>Status</th>
                                <th>Preview</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}

                            {
                                pendingSubmiteds?.map(item => <SubmiteItem key={item?._id} item={item} /> )
                            }
                      
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default AllSubmited;