import React from "react";

const AccountInfo = ({account}) => (
    <div>
        <p>{account.name}</p>
        <p>{account.phoneNum}</p>
        <p>{account.address}</p>
        {account.address2 && <p>{account.address2}</p>}
        <p>{account.city}</p>
        <p>{account.state}</p>
        <p>{account.zip}</p>
    </div>
)

export default AccountInfo;