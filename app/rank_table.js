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
            </tbody>
        </table>
    );
}