import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "../Todo";
import { useSelector } from "react-redux";
import { todosRemainingSelector } from "../../redux/selector";
import todoSlice from "./todoSlice";

export default function TodoList() {
    const dispatch = useDispatch();
    const [todoName, setTodoName] = useState("");
    const [priority, setPriority] = useState("Medium");
    const todoList = useSelector(todosRemainingSelector);

    const handleInputChange = (e) => {
        setTodoName(e.target.value);
    };

    const handlePriorityChange = (value) => {
        setPriority(value);
    };

    const handleAddButtonClick = (e) => {
        dispatch(
            todoSlice.actions.addTodo({
                id: uuidv4(),
                name: todoName,
                priority: priority,
                complete: false,
            })
        );
        setTodoName("");
        setPriority("Medium");
    };
    return (
        <Row style={{ height: "calc(100% - 40px)" }}>
            <Col
                span={24}
                style={{ height: "calc(100% - 40px)", overfLowY: "auto" }}
            >
                {todoList.map((list) => (
                    <Todo
                        key={list.id}
                        id={list.id}
                        name={list.name}
                        priority={list.priority}
                        completed={list.completed}
                    />
                ))}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: "flex" }} compact>
                    <Input value={todoName} onChange={handleInputChange} />
                    <Select
                        defaultValue="Medium"
                        value={priority}
                        onChange={handlePriorityChange}
                    >
                        <Select.Option value="High" label="High">
                            <Tag color="red">High</Tag>
                        </Select.Option>
                        <Select.Option value="Medium" label="Medium">
                            <Tag color="blue">Medium</Tag>
                        </Select.Option>
                        <Select.Option value="Low" label="Low">
                            <Tag color="gray">Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button onClick={handleAddButtonClick} type="primary">
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
