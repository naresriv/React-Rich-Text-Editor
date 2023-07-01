// npm install react-rte


import React, { useState } from 'react'
import RichTextEditor from "react-rte";
import { Select, Radio, Button } from 'antd';
import "./CustomerSendMail.scss";

const { Option } = Select;

const CustomerSendMail = ({ setCustomerSendMail }) => {
    let [customerValue, setCustomerValue] = useState(RichTextEditor.createEmptyValue());
    let [customValue, setCustomValue] = useState("custom");
    const [subjectType, setSubjectType] = useState('')

    const sendMailOnChange = (e) => {
        console.log('radio checked', e.target.value);
        setCustomValue(e.target.value);
    };

    const TexthandleChange = (value) => {
        console.log('value', value.toString('html'))
        setCustomerValue(value);
    };

    const onSelectChange = (value) => {
        console.log(`Selected: ${value}`);
    };

    const subjectTypeOnChange = (value) => {
        setSubjectType(value)
        console.log("seenu", subjectType)
        let promotionValue = `🌟 Exclusive Room Booking Offer! Don't Miss Out! 🌟
        Escape to luxurious comfort with our unbeatable promotional offer for room bookings. Treat yourself to an unforgettable stay at our exquisite hotel and enjoy incredible savings that will make your experience even more memorable. Here's what we have in store for you:
        💎 Discounted Rates: Indulge in our lavish accommodations at a fraction of the price! Book now and unlock exclusive discounts that will make your stay truly remarkable. We believe in offering you the best value for your money.
        🌞 Complimentary Breakfast: Start your day on a delicious note with a complimentary breakfast for every`;
        let giftCardsValue = `Discount Vouchers: Offer new customers a discount on their first purchase or a specific product/service. For example, you can provide a 10% off voucher on their first order.
        Gift Card Vouchers: Offer new customers a gift card voucher with a certain value that can be used towards their first purchase. This allows them to choose the product or service they desire.
        Loyalty Program Vouchers: Give new customers a voucher that grants them immediate access to your loyalty program. This can include benefits such as exclusive discounts, rewards, or early access to new `;
        if (value === "promotional") {
            setCustomerValue(customerValue.setContentFromString(promotionValue, 'html'))
        }
        else if (value === "giftCards") {
            setCustomerValue(customerValue.setContentFromString(giftCardsValue, 'html'))
        } else{
            setCustomerValue(customerValue)
        }
    }
    return (
        <>
            <div className='customer_send_content'>
                <h3>Send Mail</h3>
                <div className='customer_type'>
                    <h4>To</h4>
                    <Radio.Group onChange={sendMailOnChange} value={customValue}>
                        <Radio value="custom">Custom</Radio>
                        <Radio value="all">All</Radio>
                    </Radio.Group>
                </div>
                <div className='select_mail_type'>
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Select Customers"
                        onChange={onSelectChange}
                        allowClear
                    >
                        <Option value="item1">Item 1</Option>
                        <Option value="item2">Item 2</Option>
                        <Option value="item3">Item 3</Option>
                    </Select>
                </div>

                <div className='select_mail_subject'>
                    <h4>Subject</h4>
                    <Select
                        style={{ width: '100%' }}
                        placeholder="Select items"
                        value={subjectType || "Select Subject"}
                        onChange={subjectTypeOnChange}
                    >
                        <Option value="promotional">Promotional Offers</Option>
                        <Option value="giftCards">Gift Cards</Option>
                        <Option value="customText">Custom Text</Option>
                    </Select>
                </div>
                <div>
                    <h4>Description</h4>
                    <RichTextEditor value={customerValue} onChange={TexthandleChange} placeholder='Add Description' />
                </div>
                <div className='sub_btn'>
                    <Button type="primary" onClick={() => setCustomerSendMail(false)}>Send Mail</Button>
                </div>
            </div>
        </>
    )
}

export default CustomerSendMail
