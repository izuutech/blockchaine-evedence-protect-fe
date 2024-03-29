import Link from "next/link";
import EvidenceItem from "../components/evidenceItem";
import Layout from "../components/layout";

function Evidences() {
  return (
    <div>
      <div className="bg-secondary">
        <div className="container">
          <div className="row py-4 px-2">
            <nav aria-label="breadcrumb col-12">
              <ol className="breadcrumb mb-1">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <Link href="/cases">Cases</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Evidences
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <Link
          href="/upload-evidence"
          className="btn btn-primary px-md-4 col-3 py-2 mb-4"
        >
          Upload Evidence
        </Link>
        <div className="row g-3">
          <div className="col-lg-9">
            <EvidenceItem id={20001} />
            <EvidenceItem id={20002} cancel />

            <nav className="float-end mt-3">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    Prev
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

Evidences.getLayout = (page) => {
  return <Layout simpleHeader>{page}</Layout>;
};

export default Evidences;
