import { useRouter } from "next/router";
import Layout from "../components/layout";

function AddCase() {
  const router = useRouter();
  return (
    <div className="container py-3">
      <div className="row my-4">
        <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body px-4">
              <h4 className="card-title fw-bold mt-2 mb-4">Add Case</h4>
              <form className="row g-2">
                <div className="col-md-12">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Case Title"
                  />
                </div>
                <div className="col-md-12">
                  <label className="form-label">Description</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-12 mt-4">
                  <button
                    type="button"
                    className="btn btn-primary w-100"
                    onClick={() => {
                      router.push({ pathname: "/evidences" });
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <hr className="text-muted my-0" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

AddCase.getLayout = (page) => {
  return <Layout simpleHeader>{page}</Layout>;
};

export default AddCase;
