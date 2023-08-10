import { useRouter } from "next/router";

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
              onClick={() => router.push("/evidences")}
              className="btn btn-sm btn-outline-primary"
            >
              View Evidences
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
