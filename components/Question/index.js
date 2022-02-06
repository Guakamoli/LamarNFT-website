import { useState } from 'react'
import styles from './index.module.scss';
const Question = function () {
    const [list, setList] = useState([{
        showAnswer: false,
        question: `How do I join Lamar's Metaverse？`,
        answer: "On the top of the page, find the discord button and join the server. Please keep in mind that you need to have a verified Discord account in order to be accepted into the community. "
    }, {
        showAnswer: false,
        question: "Is this the real Lamar Odom？",
        answer: "Absolutely! This project was created by Lamar Odom himself and he is personally involved in designing and creating these collections. Please check  his instagram if you still dont believe us!"

    }, {
        showAnswer: false,
        question: "How many NFTs will be available?",
        answer: "For Season 1, there will be a collection of 7,777 NFTs with 7 limited editions signed by Lamar Odom!"

    }, {
        showAnswer: false,
        question: "Where can I buy LM NFTs？",
        answer: "LM NFTs can be bought on the official site of Lamar Odom's Metaverse."
    }, {
        showAnswer: false,
        question: "What wallet does Lamar Odom's Metaverse support?",
        answer: "We support MetaMask Wallet. For more information on how to set up and connect your wallet, please see the pinned message in #faq."
    }, {
        showAnswer: false,
        question: "How many LM NFT can I buy per wallet?",
        answer: "Currently there is no limit to the number of NFTs a wallet can purchase but that is subject to change."
    }, {
        showAnswer: false,
        question: "How much is it to mint a LM?",
        answer: "Each LM is priced at 0.0777 ETH"
    }, {
        showAnswer: false,
        question: "How long after minting will my NFT be available?",
        answer: "Torimi NFT has carefully planned roll outs and will make NFTs available 24 to 48 hours after minting."
    }, {
        showAnswer: false,
        question: "Where can I find information on the giveaway and how do I get my prize?",
        answer: `You can find all the giveaway information in the #giveaway as well as #announcements. Please contact our staff using ModMail if you are the winner of the giveaways. \nYou can find more information on how to contact our staff in #support`
    }, ]);
    const showAnswer = (index) => {
        const newList = [...list]
        newList[index].showAnswer = !newList[index].showAnswer;
        setList(newList)
    }
    return (
        <div className={styles.questionBox}>
            <div className={styles.container}>
                <div className={styles.title}>Frequently Asked Questions</div>
                {/*<div className={styles.gradientBtn}>Coming soon</div>*/}
                <div className={styles.line}></div>
                {
                    list.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className={styles.question} style={item.showAnswer ? null : { marginBottom: '29px' }} onClick={() => showAnswer(index)}>
                                    <img style={{width: '36px', height: '36px'}} src={item.showAnswer ? '/images/bt_shouqi.png' : '/images/bt_dakai.png'} />
                                    <div>{item.question}</div>
                                </div>
                                {
                                    item.showAnswer ? <div className={styles.answer} style={{ margin: '29px 0 47px', whiteSpace: 'pre-wrap' }}>{item.answer}</div> : null
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
    )
};
export default Question;