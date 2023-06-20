
export default function RankTable() {
    return (
        <table className="rankTable">
            <tbody>
                <tr>
                    <td></td>
                    <td className="content">Squire</td>
                    <td className="content"></td>
                </tr>
                <tr>
                    <td>
                        <div style={{position: "absolute", width: "50%", top: "50%", left: "50%"}} className="line horizontal-line"></div>
                        <div style={{position: "absolute", height: "50%", top: "50%", left: "50%"}} className="line vertical-line"></div>
                    </td>
                    <td>
                        <div className="line vertical-line"></div>
                        <div className="overlay line horizontal-line"></div>
                    </td>
                    <td></td>
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