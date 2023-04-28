import './RoundEnd.css'
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const RoundEnd = (props) => {
    const icon = props.roundEndMessage.type === 'winner' ? faCircleCheck : faCircleXmark;
    const divStyle = props.roundEndMessage.type === 'winner' ? 'round-end-winner' : 'round-end-loser';
    const iconStyle = props.roundEndMessage.type === 'winner' ? 'round-end-icon-win' : 'round-end-icon-lose';

    return (
        <motion.div
        className={divStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        >
            <FontAwesomeIcon id={iconStyle} icon={icon} />
            <p>{props.roundEndMessage.message}</p>
            <div id="score-wrapper">
                <span>Score</span>
                <div id='round-end-score'>{props.score} / 5</div>
            </div>
        </motion.div>
)};

export default RoundEnd;