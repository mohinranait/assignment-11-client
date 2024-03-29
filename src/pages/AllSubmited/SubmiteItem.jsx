
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAxios from '../../hooks/useAxios';
// import { Page, Text, View, Document, StyleSheet ,PDFViewer} from '@react-pdf/renderer';

// import { pdfjs } from 'react-pdf';
import { useState } from 'react';

import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const options = {
    cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
  };


const SubmiteItem = ({item}) => {

    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }){
      setNumPages(numPages);
    }


    const queryClient = useQueryClient();
    const axios = useAxios();
    const {_id,status, thumnail,title,marks,pdf,level,note,examinName,email } = item || {};




    const {mutate:udpateSubmited} = useMutation({
        mutationFn: async (examinMark) => {
            const res = await axios.patch(`/update-submite/${_id}`, examinMark);
            const result = await res.data;
            if(result.modifiedCount > 0){
                toast.success("Submited");
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['pendingSubmited'] })
        },
    })

    const handleExeminer = async (e) => {
        e.preventDefault();

        const form = e.target;
        const examinMarks = form.giveMarks.value;
        const feedback = form.feedback.value;
        const examin = {examinMarks, feedback};

        try {
            udpateSubmited(examin);
        } catch (error) {
            toast.error("Somthing Wrong")
        }
    }
    return (
        <>
            
            <tr>
                   
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={thumnail} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{title}</div>
                            <div className="text-sm opacity-50">Level: {level}</div>
                            <div className="text-sm opacity-50">Marks: {marks}</div>
                        </div>
                    </div>
                </td>
                <td className=''>
                    Pdf: <span className=''>{ pdf?.length > 30 ? pdf.slice(0,30)+'...': pdf}</span>
                    <br/>
                    <span className="badge badge-ghost badge-sm">{note}</span>
                </td>
                <td>
                    <p> {examinName }</p>
                    <p> { email}</p>
                </td>
                <td> <button className='btn btn-sm bg-red-50 text-red-500'>{ !status && "Pending"}</button> </td>
                <td> <button onClick={()=>document.getElementById(`my_preview_${_id}`).showModal()} className='btn btn-sm bg-green-50 text-green-500'>Preview</button> </td>
                <th>
                    <button onClick={()=>document.getElementById(`my_modal_${_id}`).showModal()} className="btn bg-blue-500 btn-sm text-white hover:text-gray-500">Give mark</button>
                </th>
            </tr>
      
            <dialog id={`my_preview_${_id}`} className="modal  modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">PDF Link:  </h3>
                    <div>
                    <Document file="somefile.pdf" options={options} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} />
                    </Document>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
      
            <dialog id={`my_modal_${_id}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-base">PDF Link: <a rel={'_blank'}  href={`${pdf}`} className='text-blue-600 text-sm'>{pdf}</a> </h3>
                    <h3 className="font-medium text-base">Note: <span className='text-gray-500  font-normal'>{note}</span> </h3>
                    <form onSubmit={handleExeminer} >
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Give marks</span>
                            </label>
                            <input type="text" name='giveMarks' placeholder="Give marks" className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Feedback</span>
                            </label>
                            <textarea name="feedback" id="" cols="30" placeholder='Feedback...' className="input input-bordered" rows="5"></textarea>

                        </div>
                        <div className="form-control mb-4">
                           <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

SubmiteItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default SubmiteItem;