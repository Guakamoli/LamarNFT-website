import { useState } from 'react'
import styles from './index.module.scss';
import bt_dakai from './bt_dakai.png'
import bt_shouqi from './bt_shouqi.png'
const Question = function () {
    const [list, setList] = useState([{
        showAnswer: false,
        question: "How do I join Lamar's MetaverseI？",
        answer: "On the main page of the website, find the discord button and join the server. Please keep in mind that you need to have a verified Discord account in order to be accepted into the community. "
    }, {
        showAnswer: false,
        question: "Is this the real Lamar Odom？",
        answer: "Yes, this NFT project came directly from Lamar and he is personally involved in designing and creating these collections. Please check his instagram if you still dont believe us!"

    }, {
        showAnswer: false,
        question: "How many NFT will be available？",
        answer: "For Season 1, there will be a collection of 7,777 NFTs with 7 of them super rare signed by Lamar Odom. "

    }, {
        showAnswer: false,
        question: "Where can I buy LM NFTs？",
        answer: "Torimi NFT- Torimi is an Online entertainment company based in Japan with offices in United States and China. Launched in 2021, Torimi's unique strategy has established it as the go to source for talents and KOLs to establish new ways to reach their audiences. We work with exceptional talents and bring our audience an emerging experience through unique creative projects."
    }, {
        showAnswer: false,
        question: "Where can I find information on the raffle and how do I get my prize?",
        answer: "We support MetaMask Wallet on Torimi NFT. For more information on how to set up and connect your wallet, please see the pinned message in #faq."
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
        answer: "You can find all the giveaway information in the #giveaway as well as #announcements. Please contact our staff using ModMail if you are the winner of the giveaways. You can find more information on how to contact our staff in #support "
    }]);
    const showAnswer = (index) => {
        const newList = [...list]
        newList[index].showAnswer = !newList[index].showAnswer;
        setList(newList)
    }
    return (
        <div className={styles.container}>
            <div className={styles.title}>Frequently asked questions</div>
            <div className={styles.gradientBtn}>MINT NOW</div>
            <div className={styles.line}></div>
            {
                list.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className={styles.question} style={item.showAnswer ? null : { marginBottom: '29px' }} onClick={() => showAnswer(index)}>
                                <img src={item.showAnswer ? bt_shouqi : bt_dakai} />
                                <div>{item.question}</div>
                            </div>
                            {
                                item.showAnswer ? <div className={styles.answer} style={{ margin: '29px 0 47px' }}>{item.answer}</div> : null
                            }
                        </div>
                    )
                })
            }
        </div>
    )
};
export default Question;