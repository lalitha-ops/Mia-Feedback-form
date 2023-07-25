/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./Table.css";
import { BsFillStarFill } from "react-icons/bs";
import { Select } from "antd";
import axios from "axios";
import Navbaar from "../Common/Navbaar";
import { HOST_URL, IMAGE_URL } from "../API/Host";
import Loader from "../Common/Loader";

const MiaFeedBack = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [soldOption, setSoldOption] = useState([]);
  const [notSoldOption, setNotSoldOption] = useState([]);
  const [soldValue, setSoldValue] = useState([]);
  const [notSoldValue, setNotSoldValue] = useState([]);
  const [remarkValue, setRemarkValue] = useState("");
  const [loading, setLoading] = useState(false);

  console.log("soldValue==>", soldValue);
  console.log("notSoldValue==>", notSoldValue);
  console.log("remarkValue==>", remarkValue);
  const productsInput = {
    storeCode: "MAM",
    role: "L1",
    region: "PAN INDIA",
  };
  useEffect(() => {
    setLoading(true);
    axios
      .post(`${HOST_URL}/Mia/feedback/get/product/details`, productsInput)
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          setUserDetails(response.data.value);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log("");
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${HOST_URL}/Mia/feedback/dropdown/list/sold`)
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          setSoldOption(response.data.value);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log("");
      });
  }, []);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${HOST_URL}/Mia/feedback/dropdown/list/notsold`)
      .then((res) => res)
      .then((response) => {
        if (response.data.code === "1000") {
          setNotSoldOption(response.data.value);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log("");
      });
  }, []);

  return (
    <div>
      {loading === true && <Loader />}
      <Navbaar />
      {/* <div className="border mx-3 p-2 align-content-center border-0">
         <div className="d-flex flex-row justify-content-between align-item-center mx-1">
          <div className="col-md-4">
            <select className="form-select p-2 m-2">
              <option>Not sold products</option>
              <option value="1">sold products</option>
            </select>
          </div>
          <div className="col-md-1">
            <button className="btn btn-primary p-2 m-2" type="submit">
              Submit
            </button>
          </div>
        </div> 
      </div> */}
      {userDetails.length > 0 && (
        <div>
          {userDetails.map((data, i) => {
            const { itemCode } = data;
            const imageCode = itemCode.substring(2, 9);
            const imageURL = `${IMAGE_URL}${imageCode}.jpg`;
            return (
              <div
                className={`${
                  data.soldData === "YES" ? "border-success" : "border-danger"
                } border border-3 m-3 rounded`}
                key={i}
              >
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row justify-content-between">
                    <div
                      className={`${
                        data.soldData === "YES" ? " bg-success" : "bg-danger"
                      } text-light p-2 m-2`}
                    >
                      {data.soldData === "YES"
                        ? "Product sold-YES"
                        : "Product sold-NO"}
                    </div>
                  </div>
                  <h6 className="mt-2">{itemCode}</h6>
                  <div className="d-flex justify-content-between mx-2">
                    <h6 className="mt-1 mx-2">
                      NPIM Rating, {data.npimRating}
                    </h6>
                    <div>
                      {data.npimRating === "D" && (
                        <BsFillStarFill color="#FF9529" />
                      )}
                      {data.npimRating === "C" && (
                        <>
                          <BsFillStarFill color="#FFDF00" />
                          <BsFillStarFill color="#FFDF00" />
                        </>
                      )}
                      {data.npimRating === "B" && (
                        <>
                          <BsFillStarFill color="#FFDF00" />
                          <BsFillStarFill color="#FFDF00" />
                          <BsFillStarFill color="#FFDF00" />
                        </>
                      )}
                      {data.npimRating === "A" && (
                        <>
                          <BsFillStarFill color="#FFDF00" />
                          <BsFillStarFill color="#FFDF00" />
                          <BsFillStarFill color="#FFDF00" />
                          <BsFillStarFill color="#FFDF00" />
                        </>
                      )}
                    </div>
                  </div>
                </div>
                {/* IMAGE ANF TABLE */}
                <div className="row g-3 p-2">
                  <div className="col-md-2">
                    <img
                      src={imageURL}
                      className="img-thumbnail custom-image"
                      alt="Not Image_Availabel"
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="table-responsive d-flex flex-row">
                      <table
                        className="table table-hover border table-bordered"
                        key={i}
                      >
                        <thead className="table-light">
                          <tr>
                            <th>Collection</th>
                            <th>Cluster</th>
                            <th>Category</th>
                            <th>StdUCP</th>
                            <th>Stock</th>
                            <th>Sale Qty</th>
                            <th>Sell through</th>
                            <th>Store decile rank</th>
                            <th>Overall Decile rank</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{data.collection}</td>
                            <td>{data.cluster}</td>
                            <td>{data.category}</td>
                            <td>{data.stdUcp}</td>
                            <td>{data.ineventoryQty}</td>
                            <td>{data.saleQty}</td>
                            <td>{data.Sellthrough}</td>
                            <td>{data.StoreDecileRank}</td>
                            <td>{data.OverDecileRank}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="row g-3" style={{ marginTop: "-2%" }}>
                      <div className="col-md-5">
                        <b className="m-2 mt-0">Choose Reasons</b>
                        {data.soldData === "YES" ? (
                          <Select
                            mode="multiple"
                            placeholder="Please select"
                            className="w-100"
                            onChange={(value) => setSoldValue(value)}
                          >
                            {soldOption.map((item, i) => {
                              return (
                                <Select.Option key={i} value={item}>
                                  {item}
                                </Select.Option>
                              );
                            })}
                          </Select>
                        ) : (
                          <Select
                            mode="multiple"
                            className="w-100"
                            placeholder="Please select"
                            onChange={(value) => setNotSoldValue(value)}
                          >
                            {notSoldOption.map((item, i) => {
                              return (
                                <Select.Option key={i} value={item}>
                                  {item}
                                </Select.Option>
                              );
                            })}
                          </Select>
                        )}
                      </div>
                      <div className="col-md-7 d-flex flex-row">
                        <div className="w-100">
                          <b className="mt-0">Remarks</b>
                          <textarea
                            className="form-control w-100"
                            placeholder="Max charector 50"
                            onChange={(e) => setRemarkValue(e.target.value)}
                          />
                        </div>
                        <div className="d-flex justify-content-end p-3">
                          <button type="button" className="CButton">
                            SAVE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MiaFeedBack;
