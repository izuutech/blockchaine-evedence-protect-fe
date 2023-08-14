import { useRouter } from "next/router";
import Layout from "../components/layout";
import { toast } from "react-toastify";
import { createFolder } from "../utils/main";

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
                    id="name"
                  />
                </div>
                <div className="col-md-12">
                  <label className="form-label">Description</label>
                  <input type="text" className="form-control" id="details"/>
                </div>
                <div className="col-md-12 mt-4">
                  <button
                    type="button"
                    className="btn btn-primary w-100"
                    onClick={async () => {
                      const name = document.getElementById("name");
                      const details = document.getElementById("details");
                      try {
                        // pass in the name and details updates
                        await createFolder(name, details);
                        router.push("/cases");
                      } catch (error) {
                        toast.error("You might not be authorized to call this function");
                        console.log(error);
                      }
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
