import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Home() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      <div className="container py-3">
        <div className="row col-12">
          <div className="col-3 py-4"></div>
          <Link
            href="/cases"
            className="btn btn-primary px-md-4 col-6 py-4 mb-4"
          >
            Integrate wallet
          </Link>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-3 mb-4">
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <figure className="figure card-body mb-0">
                <div
                  className="bg-secondary rounded-circle d-flex mb-2"
                  style={{ width: 50, height: 50 }}
                >
                  <FontAwesomeIcon
                    icon={["fas", "lock"]}
                    size="lg"
                    className="text-primary m-auto bg-green"
                  />
                </div>
                <h5 className="mb-1 fw-bold">100% Secure</h5>
                <figcaption className="figure-caption text-dark">
                  Blockchain encryption ensures data security through advanced
                  cryptography. This trustless ecosystem resists attacks and
                  unauthorized changes.
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <figure className="figure card-body mb-0">
                <div
                  className="bg-secondary rounded-circle d-flex mb-2"
                  style={{ width: 50, height: 50 }}
                >
                  <FontAwesomeIcon
                    icon={["fas", "headset"]}
                    size="lg"
                    className="text-primary m-auto"
                  />
                </div>
                <h5 className="mb-1 fw-bold">Customer Support 24/7</h5>
                <figcaption className="figure-caption text-dark">
                  Our customer support for blockchain is swift, offering timely
                  assistance. We provide quick solutions, ensuring smooth
                  operations and optimal blockchain utilization for our clients.
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <figure className="figure card-body mb-0">
                <div
                  className="bg-secondary rounded-circle d-flex mb-2"
                  style={{ width: 50, height: 50 }}
                >
                  <FontAwesomeIcon
                    icon={["fas", "car"]}
                    size="lg"
                    className="text-primary m-auto"
                  />
                </div>
                <h5 className="mb-1 fw-bold">Fast Process</h5>
                <figcaption className="figure-caption text-dark">
                  Blockchain enables swift, private transactions through
                  techniques like zero-knowledge proofs, ensuring secure data
                  sharing without compromising speed.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
