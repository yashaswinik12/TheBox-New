import React, { useState, useEffect } from "react";
import axios from "axios";

import { MdLocalPrintshop } from "react-icons/md";


function TableSection({ setMainSection, setTableId, setOrderId }) {
  const [tableData, setTableData] = useState([]);

  const fetchTableData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/gettabledata",
        {
          withCredentials: true,
        }
      );
      setTableData(response.data);
    } catch (error) {
      console.log("Error fetching table data:", error);
    }
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  return (
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Table Management</h3>
              </div>
              {tableData.map((table) => (
                <div className="card-body p-0 m-2" key={table._id}>
                  <div className="m-3" style={{ fontWeight: "bold" }}>
                    {table.area}
                  </div>
                  <ul className="row" style={{ listStyle: "none" }}>
                    {table.tables.map((table) => (
                      <li
                        key={table._id}
                      >
                        <div className="container">
                          <div
                            className={`dashboard-table d-flex justify-content-center align-items-center ${
                              table.current_status === "Save"
                                ? "table-save"
                                : table.current_status === "KOT" ||
                                  table.current_status === "KOT and Print"
                                ? "table-kot"
                                : ""
                            }`}
                          >
                            <div align="center">{table.table_no}</div>

                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TableSection;