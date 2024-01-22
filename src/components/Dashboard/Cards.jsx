import React from 'react'
import axios from 'axios'

function Cards() {
  return <>
  <div className="row">
                {/* <!-- Earnings (Monthly) Card Example --> */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Total Orders</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">120</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-clipboard fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                                    PACKED QTY</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">25</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-business-time fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        SHIPPED QTY</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">35</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-plane fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        DELIVERED QTY</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">35</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-thumbs-up fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-dark shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-dark text-uppercase mb-1">
                                        RETURNED QTY</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">10</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-backward fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-danger shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                                        CANCELLED QTY</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">10</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-handshake-slash fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  </>
}

export default Cards