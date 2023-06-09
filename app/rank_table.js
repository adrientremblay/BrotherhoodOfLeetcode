import Rank from './rank';

const user = {
    name: 'Adrien Tremblay',
    imageUrl: 'https://assets.leetcode.com/users/avatars/avatar_1687296907.png',
    problemData: {
        totalCount: 150,
        easyCount: 50,
        medCount: 100,
        hardCount: 50
    }
};

const orders = [
    {
        orderName: 'Scribes Of Simplicity',
        difficultyName: 'Easy',
        ranks: [
            {name: 'Apprentice', problems: 15},
            {name: 'Journeyman', problems: 30},
            {name: 'Scribe', problems: 60},
        ]
    },
    {
        orderName: 'Knights Of Knotty Solutions',
        difficultyName: 'Medium',
        ranks: [
            {name: 'Initiate', problems: 12},
            {name: 'Aspirant', problems: 24},
            {name: 'Warrior', problems: 36},
        ]
    },
    {
        orderName: 'Deities Of Difficult Dilemmas',
        difficultyName: 'Hard',
        ranks: [
            {name: 'Hero', problems: 1},
            {name: 'Champion', problems: 5},
            {name: 'Legend', problems: 10},
        ]
    },
]

let users = [user];

export default function RankTable() {
    let orders_jsx = orders.map(order => {
        let rank_list = [];

        for (let i = 0 ; i < order.ranks.length ; i++) {
            const rank = order.ranks[i];

            let users_at_this_rank = [user];

            rank_list.push(
                <Rank name={rank.name} users={users_at_this_rank}></Rank>
            );
            if (i < order.ranks.length -1) {
                rank_list.push(<div className='line vertical-line'></div>)
            }
        }

        return (
            <div class='order'>
                <h3>{order.orderName}: {order.difficultyName}</h3>
                {rank_list}
            </div>
        );
    })

    return (
        <div>
            <h2>orders</h2>
            <div className='orders'>
                {orders_jsx}
            </div>
        </div>
    );
}
/*
        <table className="rankTable">
            <tbody>
                <tr>
                    <td></td>
                    <td className="content"><Rank name="Squire" number={10} difficulty="Questions" users={users}></Rank></td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <div className="line horizontal-line half half-h"></div>
                        <div className="line vertical-line half half-v"></div>
                    </td>
                    <td>
                        <div className="line horizontal-line"></div>
                        <div className="line vertical-line"></div>
                    </td>
                    <td>
                        <div style={{left: "0"}} className="line horizontal-line half half-h"></div>
                        <div className="line vertical-line half half-v"></div>
                    </td>
                </tr>
                <tr>
                    <td className="content"><Rank name="Apprentice" number={15} difficulty="Easies" users={users}></Rank></td>
                    <td className="content"><Rank name="Initiate" number={12} difficulty="Mediums" users={users}></Rank></td>
                    <td className="content"><Rank name="Hero" number={1} difficulty="Hards" users={users}></Rank></td>
                </tr>
                <tr>
                    <td><div className="line vertical-line"></div></td>
                    <td><div className="line vertical-line"></div></td>
                    <td><div className="line vertical-line"></div></td>
                </tr>
                <tr>
                    <td className="content"><Rank name="Journeyman" number="30" difficulty="Easies" users={users}></Rank></td>
                    <td className="content"><Rank name="Aspirant" number="24" difficulty="Mediums" users={users}></Rank></td>
                    <td className="content"><Rank name="Champion" number="5" difficulty="Hards" users={users}></Rank></td>
                </tr>
                <tr>
                    <td><div className="line vertical-line"></div></td>
                    <td><div className="line vertical-line"></div></td>
                    <td><div className="line vertical-line"></div></td>
                </tr>
                <tr>
                    <td className="content"><Rank name="Scribe" number="60" difficulty="Easies" users={users}></Rank></td>
                    <td className="content"><Rank name="Warrior" number="36" difficulty="Mediums" users={users}></Rank></td>
                    <td className="content"><Rank name="Legend" number="5" difficulty="Hards" users={users}></Rank></td>
                </tr>
                <tr>
                    <td><div className="line vertical-line"></div></td>
                    <td><div className="line vertical-line"></div></td>
                    <td><div className="line vertical-line"></div></td>
                </tr>
                <tr>
                    <td className="content"><Rank name="Senior Scribe" number="60" difficulty="Easies" users={users}></Rank></td>
                    <td className="content"><Rank name="Lancer" number="36" difficulty="Mediums" users={users}></Rank></td>
                    <td className="content"><Rank name="Myth" number="5" difficulty="Hards" users={users}></Rank></td>
                </tr>
                <tr>
                    <td><div className="line vertical-line"></div></td>
                    <td><div className="line vertical-line"></div></td>
                    <td><div className="line vertical-line"></div></td>
                </tr>
                <tr>
                    <td className="content"><Rank name="Chief Scribe" number="60" difficulty="Easies" users={users}></Rank></td>
                    <td className="content"><Rank name="Knight" number="36" difficulty="Mediums" users={users}></Rank></td>
                    <td className="content"><Rank name="Mage" number="5" difficulty="Hards" users={users}></Rank></td>
                </tr>
                <tr>
                    <td><div className="line vertical-line"></div></td>
                    <td><div className="line vertical-line"></div></td>
                    <td><div className="line vertical-line"></div></td>
                </tr>
                <tr>
                    <td className="content"><Rank name="Proctor" number="60" difficulty="Easies" users={users}></Rank></td>
                    <td className="content"><Rank name="Paladin" number="36" difficulty="Mediums" users={users}></Rank></td>
                    <td className="content"><Rank name="Wizard" number="5" difficulty="Hards" users={users}></Rank></td>
                </tr>
                <tr>
                    <td><div className="line vertical-line"></div></td>
                    <td><div className="line vertical-line"></div></td>
                    <td><div className="line vertical-line"></div></td>
                </tr>
                <tr>
                    <td className="content"><Rank name="Loremaster" number="60" difficulty="Easies" users={users}></Rank></td>
                    <td className="content"><Rank name="Sentinel" number="36" difficulty="Mediums" users={users}></Rank></td>
                    <td className="content"><Rank name="Elder" number="5" difficulty="Hards" users={users}></Rank></td>
                </tr>
            </tbody>
        </table>

*/