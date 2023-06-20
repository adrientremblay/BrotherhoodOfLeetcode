import Rank from './rank';

export default function RankTable() {
    return (
        <table className="rankTable">
            <tbody>
                <tr>
                    <td></td>
                    <td className="content"><Rank name="Squire" number="10" difficulty="Questions"></Rank></td>
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
                    <td className="content"><Rank name="Apprentice" number="15" difficulty="Easies"></Rank></td>
                    <td className="content"><Rank name="Initiate" number="12" difficulty="Mediums"></Rank></td>
                    <td className="content"><Rank name="Hero" number="1" difficulty="Hards"></Rank></td>
                </tr>
                <tr>
                    <td><div className="line vertical-line"></div></td>
                    <td><div className="line vertical-line"></div></td>
                    <td><div className="line vertical-line"></div></td>
                </tr>
                <tr>
                    <td className="content"><Rank name="Journeyman" number="30" difficulty="Easies"></Rank></td>
                    <td className="content"><Rank name="Aspirant" number="24" difficulty="Mediums"></Rank></td>
                    <td className="content"><Rank name="Champion" number="5" difficulty="Hards"></Rank></td>
                </tr>
                <tr>
                    <td><div className="line vertical-line"></div></td>
                    <td><div className="line vertical-line"></div></td>
                    <td><div className="line vertical-line"></div></td>
                </tr>
                <tr>
                    <td className="content"><Rank name="Scribe" number="60" difficulty="Easies"></Rank></td>
                    <td className="content"><Rank name="Warrior" number="36" difficulty="Mediums"></Rank></td>
                    <td className="content"><Rank name="Legend" number="5" difficulty="Hards"></Rank></td>
                </tr>
                <tr>
                    <td><div className="line vertical-line"></div></td>
                    <td><div className="line vertical-line"></div></td>
                    <td><div className="line vertical-line"></div></td>
                </tr>
                <tr>
                    <td className="content"><Rank name="Senior Scribe" number="60" difficulty="Easies"></Rank></td>
                    <td className="content"><Rank name="Lancer" number="36" difficulty="Mediums"></Rank></td>
                    <td className="content"><Rank name="Myth" number="5" difficulty="Hards"></Rank></td>
                </tr>
                <tr>
                    <td><div className="line vertical-line"></div></td>
                    <td><div className="line vertical-line"></div></td>
                    <td><div className="line vertical-line"></div></td>
                </tr>
                <tr>
                    <td className="content"><Rank name="Chief Scribe" number="60" difficulty="Easies"></Rank></td>
                    <td className="content"><Rank name="Knight" number="36" difficulty="Mediums"></Rank></td>
                    <td className="content"><Rank name="Mage" number="5" difficulty="Hards"></Rank></td>
                </tr>
                <tr>
                    <td><div className="line vertical-line"></div></td>
                    <td><div className="line vertical-line"></div></td>
                    <td><div className="line vertical-line"></div></td>
                </tr>
                <tr>
                    <td className="content"><Rank name="Proctor" number="60" difficulty="Easies"></Rank></td>
                    <td className="content"><Rank name="Paladin" number="36" difficulty="Mediums"></Rank></td>
                    <td className="content"><Rank name="Wizard" number="5" difficulty="Hards"></Rank></td>
                </tr>
                <tr>
                    <td><div className="line vertical-line"></div></td>
                    <td><div className="line vertical-line"></div></td>
                    <td><div className="line vertical-line"></div></td>
                </tr>
                <tr>
                    <td className="content"><Rank name="Loremaster" number="60" difficulty="Easies"></Rank></td>
                    <td className="content"><Rank name="Sentinel" number="36" difficulty="Mediums"></Rank></td>
                    <td className="content"><Rank name="Elder" number="5" difficulty="Hards"></Rank></td>
                </tr>
            </tbody>
        </table>
    );
}