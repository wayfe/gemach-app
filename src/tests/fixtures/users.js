import moment from "moment";

export default [
    {
        name : "Katz", 
        phoneNum: "3473880059", 
        address : "15465", 
        address2 : "d",
        city : "Montreal",
        state : "PA",
        zip : "11219",
        transactions : [
            {
                amount: 10000,
                date: moment(0).add(3, "days"),
                note: "",
                type: "withdrawal",
                payType: "cash",
                id: "1a"
            },
            {
                amount: 14000,
                date: moment(0),
                note: "this is a note",
                type: "deposit",
                payType: "check",
                checkNo: 143243,
                id: "2a",
                isCleared: false
            },
            {
                amount: 18000,
                date: moment(0).add(8, "days"),
                note: "",
                type: "deposit",
                payType: "cash",
                id: "3a"
            }
        ],
        id : "1"
    },
    {
        name : "Klein", 
        phoneNum: "3473000722", 
        address : "65456", 
        address2 : "",
        city : "Brooklyn",
        state : "NY",
        zip : "11285",
        transactions : [],
        id : "2"
    },
    {
        name : "Kangaroo", 
        phoneNum: "9175518533", 
        address : "65465", 
        address2 : "",
        city : "Lakewood",
        state : "NJ",
        zip : "5645465",
        transactions : [],
        id : "3"
    }
];