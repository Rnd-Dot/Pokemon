import { get } from "lodash"
import HP from "../../assets/skills/heartbeat.png"
import ATTACK from "../../assets/skills/attack.png"
import SECURITY from "../../assets/skills/security.png"
import SPEED from "../../assets/skills/speed.png"
import S_ATTACK from "../../assets/skills/sword.png"
import "./Skills.scss"


const Skills = ({data}) => {

    const hp = get(data, "stats[0].base_stat")
    const attack = get(data, "stats[1].base_stat")
    const defense = get(data, "stats[2].base_stat")
    const special_attack = get(data, "stats[3].base_stat")
    const speed = get(data, "stats[4].base_stat")

    return (
        <div className="text">
            <div>
                <img className="stat" src={HP} alt="hp"/> HP: {hp}
                </div>
            <div>
                <img className="stat" src={ATTACK} alt="hp"/> Attack :{attack}
            </div>
            <div>
                <img className="stat" src={SECURITY} alt="hp"/> Defense: {defense}
            </div>
            <div>
                <img className="stat" src={S_ATTACK} alt="hp"/> Special attack: {special_attack}
            </div>
            <div>
                <img className="stat" src={SPEED} alt="hp"/> Speed: {speed}
            </div>
        </div>
    )
}


export default Skills