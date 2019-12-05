import React, { useState } from 'react';

const UsersFilter = () => {
    const [filterData, setFilterData] = useState({ emailId: '', name: '', role: '', city: '', country: '' })

    const updateFilterData = (key: string, val: any) => {
        setFilterData({
            ...filterData,
            [key]: val
        })
    }

    return (
        <div className="filter-data">
            <h5> Search For Users</h5>
            <br />
            <form id="searchForm" name="searchForm">
                <div className="search">
                    <div className="form-group">
                        <input onChange={(e) => { updateFilterData('emailId', e.target.value) }} value={filterData.emailId} className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <input onChange={(e) => { updateFilterData('name', e.target.value) }} value={filterData.name} className="form-control" placeholder="Enter Name" />
                    </div>
                    <button type="button" onClick={(e) => { alert('search not implemented') }} className="btn btn-info">Search</button>
                </div>
            </form>
        </div>
    );
}

export default UsersFilter;