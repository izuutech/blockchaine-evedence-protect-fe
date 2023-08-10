function EvidenceItem({ id, cancel }) {
  return (
    <div className="card border-0 shadow-sm mb-3">
      <div className="card-header py-3 bg-white">
        <div className="row">
          <div className="col d-flex">
            <span className="fw-semibold h5 my-auto">Evidence ID: {id}</span>
          </div>
          <div className="col-auto">
            <button className="btn btn-sm btn-outline-primary">
              Download Evidence
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row gx-2 gy-3">
          <div className="col-md-5">
            <h6 className="fw-bold">Evidence for case against Mr. A and B</h6>
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
            <h6 className="fw-bold">Evidence type</h6>

            <div className="text-success">Video</div>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">Evidence Status</h6>
            <div className={cancel ? "text-danger" : "text-success"}>
              <span className="fw-semibold">{cancel ? "READ" : "UNREAD"}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer small border-0 py-3 text-muted">
        Uploaded At: {new Date().toDateString()}
      </div>
    </div>
  );
}

export default EvidenceItem;
