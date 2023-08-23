import { useRouter } from "next/router";
import { getCaseFiles, displayFile, getCasefolders } from "../utils/main";
import { toast } from "react-toastify";

function CaseItem({ item }) {
  const router = useRouter();
  return (
    <div className="card border-0 shadow-sm mb-3">
      <div className="card-header py-3 bg-white">
        <div className="row">
          <div className="col d-flex">
            <span className="fw-semibold h5 my-auto">Case ID: {item.id}</span>
          </div>
          <div className="col-auto">
            <button
              onClick={async () => {
                
                try {
                  const files = await getCaseFiles(1);
                  const index = files.length - 1;
                  const evidenceURL = await displayFile(files[index]);
                  window.location.replace(evidenceURL);
                  console.log(evidenceURL);
                  return <>redirecting to IPFS</>;
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
            <h6 className="fw-bold">{item.name}</h6>
            <div className="vstack text-dark small">
              <span>Further data:</span>
              <span>
                {item.details}
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold">Encryption Details</h6>

            <div className="text-success">0Auth Encryption</div>
            <div className="text-success">5 evidences</div>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">Case Status</h6>
            <div className={"text-success"}>
              <span className="fw-semibold">{"WON"}</span>
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


// import React from 'react';

// // Assuming this is the CaseItem component
// const CaseItem = ({ item }) => {
//   return (
//     <div>
//       <p>Title: {item.title}</p>
//     </div>
//   );
// };

// const CaseList = ({ cases }) => {
//   return (
//     <div>
//       {cases &&
//         cases.map((casee, index) => (
//           <CaseItem key={index} item={casee} />
//         ))}
//     </div>
//   );
// };

// // Example cases array
// const cases = [
//   { title: 'Case 1' },
//   { title: 'Case 2' },
//   { title: 'Case 3' },
// ];

// // Using the CaseList component to render the cases
// const App = () => {
//   return (
//     <div>
//       <h1>Case List</h1>
//       <CaseList cases={cases} />
//     </div>
//   );
// };

// export default App;
