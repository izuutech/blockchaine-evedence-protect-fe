import { useRouter } from "next/router";
import Layout from "../components/layout";
import { ToastContainer, toast } from "react-toastify";
import { addFile } from "../utils/main";

function UploadEvidence() {
  const router = useRouter();
  return (
    <div className="container py-3">
      <div className="row my-4">
        <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body px-4">
              <h4 className="card-title fw-bold mt-2 mb-4">Upload Evidence</h4>
              <form className="row g-2">
                <div className="col-md-12">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Evidence Name"
                    id="name"
                  />
                </div>
                <div className="col-md-12">
                  <label className="form-label">details</label>
                  <input type="text" className="form-control" id=""/>
                </div>
                <div className="col-md-12">
                  <label className="form-label">Evidence</label>
                  <input type="file" className="form-control" id="files" />
                </div>

                <div className="col-md-12 mt-4">
                  <button
                    type="button"
                    className="btn btn-primary w-100"
                    onClick={async () => {
                      try {
                        const fileInput = document.querySelector('input[type="file"]');
                        toast.loading("uploading file ...");
                        await addFile(fileInput.files);
                        router.push("/cases");
                        // console.log(file.value);
                      } catch (error) {
                        toast.error("You might not be authorized to call this function");
                        console.log(error);
                      }
                    }}
                  >
                    Upload
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

UploadEvidence.getLayout = (page) => {
  return <Layout simpleHeader>{page}</Layout>;
};

export default UploadEvidence;
