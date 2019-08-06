import React from "react";
import {shallow} from "enzyme";
import { AccountListItem } from "../../../components/Accounts/AccountListItem";
import accounts from "../../fixtures/accounts";

test("should render AccountListItem for a account", () => {
    const wrapper = shallow(<AccountListItem account={accounts[0]} />);
    expect(wrapper).toMatchSnapshot();
})

