import React from "react";
import {shallow} from "enzyme"
import {Balance} from "../../components/Balance";
import {getBal, getPendingBal} from "../../selectors/balance";
import accounts from "../fixtures/accounts";

test("should render balance with transaction balances", () => {
    const transactions = accounts[0].transactions;
    const wrapper = shallow(<Balance totalBalance={getBal(transactions)} pendingBalance={getPendingBal(transactions)}/>);
    expect(wrapper).toMatchSnapshot();
});
