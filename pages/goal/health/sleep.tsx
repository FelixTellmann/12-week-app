import { FC } from "react";
import { Div, Form, Input } from "../../../components";

type SleepProps = {};

export const Sleep: FC<SleepProps> = ({}) => <>
  <Div maxW={1200} m="auto" p={8} minH="100vh">
    <h1>Health</h1>
    <h1>Better Sleep</h1>
    
    <Form d="flex" direction="column">
      <label><input type="radio" name="sleep" /><Input useClass="input"
                                                       d="inline-flex"
                                                       justify="center"
                                                       minW="1px"
                                                       w="40px"
                                                       type="number"
                                                       defaultValue="8" />hours of Sleep per Night</label>
      <label><input type="radio" name="sleep" />Be in bed by <Input type="time" className="input" w={100} defaultValue="21:00" /></label>
      <label><input type="radio" name="sleep" />Wake up at  <Input type="time" className="input" w={100} defaultValue="06:00" /> every day</label>
      <label><input type="radio" name="sleep" />Other: <input type="text" placeholder="Achieve x by y" /></label>
    </Form>
  
  
  </Div>
</>;

export default Sleep;