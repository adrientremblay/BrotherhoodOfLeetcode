import Rank from './rank';

export default function RankTable() {
    return (
        <table className="rankTable">
            <tbody>
                <tr>
                    <td></td>
                    <td className="content">
                        <Rank name="Squire"></Rank>
                    </td>
                    <td className="content"></td>
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
                    <td>
                        <div className="line vertical-line"></div>
                    </td>
                    <td className="content">2</td>
                    <td className="content">3</td>
                </tr>
                <tr>
                    <td className="content">1</td>
                    <td className="content">2</td>
                    <td className="content">3</td>
                </tr>
            </tbody>
        </table>
    );
}