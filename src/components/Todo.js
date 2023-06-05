import './style.css';

function Todo(props) {
    return (
        <div id="parent">
            <table>
                {props.list.map(item => (
                    <tr>
                        <td>{item}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
export default Todo;