import {  useState } from "react";
import { Card,Button,Input,Select, message} from 'antd';
import "./login.scss";



export const Login = () => {
  const [name, setName] = useState('');
  const [roomId, setRoomId] = useState('');
  const [messageApi, contextHolder] = message.useMessage();
  const submitHandle = () => {
    if (!name) {
      messageApi.open({
        type: 'info',
        content: '请输入姓名',
        duration: 5,
      });
      return
    }
    if (!roomId) {
      messageApi.open({
        type: 'info',
        content: '请输入现场id',
        duration: 5,
      });
      return
    }
    window.open(`https://excalidraw.com/#room=${roomId}`,'_self')
  }
  return (
    <>
  <div className="demo-main">
    <div className="demo-login">
      <Card>
        <div className="login-text">欢迎登录</div>
        <Input value={name} placeholder="请输入用户名" onChange={(e) => setName(e.target.value)} ></Input>
        <Select value={roomId} placeholder="请输入roomId" size="large" options={
          [{
            label: 'byd现场图',
            value: '75a03abde226f752e461,xPi9TKvO82gVUnpcaOxHng'
          },
          {
            label: '电子车间',
            value: 'd8e0fdbdece7fe941d32,ECy-gX59E2jgJIquMhIdMA'
          }]
        }
        onChange={(value)=> {
          console.log('value',value)
          setRoomId(value)
        }}
        >
        </Select>
        <div className="submit-btn"><Button type="primary" onClick={()=> submitHandle()}>登录</Button></div>
      </Card>
    </div>
  </div>
   </>
  );
};
