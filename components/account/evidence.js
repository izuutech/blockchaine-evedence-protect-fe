import CaseItem from "../../components/account/caseItem";
import Layout from "../../components/layout";

function OrderHistory() {
  return (
    <div>
      <div className="bg-secondary">
        <div className="container">
          <div className="row py-4 px-2">
            <nav aria-label="breadcrumb col-12">
              <ol className="breadcrumb mb-1">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Order History
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row g-3">
          <div className="col-lg-12">
            <CaseItem id={20001} />
            <CaseItem id={20002} cancel />

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

OrderHistory.getLayout = (page) => {
  return <Layout simpleHeader>{page}</Layout>;
};

export default OrderHistory;
