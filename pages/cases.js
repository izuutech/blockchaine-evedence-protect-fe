import Link from "next/link";
import { useEffect, useState } from "react";
import CaseItem from "../components/caseItem";
import Layout from "../components/layout";
import { getCasefolders } from "../utils/main";

function Cases() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getFolders() {
      setIsLoading(true);
      try {
        const result = await getCasefolders();
        const resultJSON = JSON.parse(result);
        const _data = [];
        resultJSON.forEach((doc) => {
          const _result = JSON.parse(doc)
          _data.push(_result);
        });
        setData(_data);
        console.log(_data);
      } catch (error) {
        console.error(error);
      }  finally {
        setIsLoading(false);
     }
    }
    getFolders();
  }, []);

  if (isLoading) {
    return <div style={{ color: 'black' }}>Loading...</div>;
  }

  if (data) {
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
                    Cases
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="container py-4">
          <Link
            href="/add-case"
            className="btn btn-primary px-md-4 col-3 py-2 mb-4"
          >
            Create Case
          </Link>
          <div className="row g-3">
            <div className="col-lg-9">
              {data &&
                data.map((casee, index) => (
                  <CaseItem key={index} item={casee} />
                ))}
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
}

Cases.getLayout = (page) => {
  return <Layout simpleHeader>{page}</Layout>;
};

export default Cases;
