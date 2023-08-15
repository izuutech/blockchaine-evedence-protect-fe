import { useRouter } from "next/router";
import { getCaseFiles, displayFile, getCasefolders } from "../utils/main";
import { useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";

function CaseItem({ id, cancel }) {
  const router = useRouter();
  return (
    <div className="card border-0 shadow-sm mb-3">
      <div className="card-header py-3 bg-white">
        <div className="row">
          <div className="col d-flex">
            <span className="fw-semibold h5 my-auto">Case ID: {id}</span>
          </div>
          <div className="col-auto">
            <button
              onClick={async () => {
                try {
                  // pass in the name and details updates
                  const files = await getCaseFiles(1);
                  const index = files.length - 1;
                  const evidenceURL = await displayFile(files[index]);
                  window.location.replace(evidenceURL);
                  // console.log(evidenceURL);
                  // const folders = await getCasefolders();
                  // console.log(folders);
                  return <>redirecting to IPFS</>;
                  //router.push("/evidences");
                } catch (error) {
                  toast.error("ann error occured");
                  console.log(error);
                }
              }}
              className="btn btn-sm btn-outline-primary"
            >
              View Evidences
            </button>
            <button
              onClick={() => router.push(`upload-evidence`)}
              className="btn btn-sm btn-outline-primary"
            >
              Upload Evidence
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row gx-2 gy-3">
          <div className="col-md-5">
            <h6 className="fw-bold">Case Against Mr. A and B</h6>
            <div className="vstack text-dark small">
              <span>Further data:</span>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In,
                vitae inventore libero nostrum corrupti ab ducimus enim, odit
                cupiditate perferendis pariatur praesentium beatae quasi aliquam
                quae doloribus dolor, itaque obcaecati?
              </span>
              <span>melcalkss</span>
            </div>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold">Encryption Details</h6>

            <div className="text-success">0Auth Encryption</div>
            <div className="text-success">5 evidences</div>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">Case Status</h6>
            <div className={cancel ? "text-danger" : "text-success"}>
              <span className="fw-semibold">{cancel ? "FAILED" : "WON"}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer small border-0 py-3 text-muted">
        Created At: {new Date().toDateString()}
      </div>
    </div>
  );
}

export default CaseItem;
