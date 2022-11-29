import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const ReportModal = ({ report, setReport }) => {
    const { productName, expectedPrice } = report;
    const {user} = useContext(AuthContext);

    const handleReport = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const reports = form.reports.value;

        const reporting = {
            customer: name,
            email,
            reports,
            productName,
            expectedPrice,
        }

        fetch('http://localhost:5000/reported', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reporting)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.acknowledged) {
                    setReport(null);
                    toast.success('Reporting confirmed')
                }
            })
        
    }

    return (
        <>
            <input type="checkbox" id="report-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="report-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <h3 className="text-lg font-bold">Price: Tk.{expectedPrice}</h3>
                    <form onSubmit={handleReport} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <textarea name="reports" className="textarea textarea-bordered"placeholder="Type your report"></textarea>
                        <br />
                        <input className='btn btn-info w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default ReportModal;