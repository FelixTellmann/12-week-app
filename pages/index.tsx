import cn from "classnames";
import { FC, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Div, Input, Main, P, Span } from "../components";

type IndexProps = {};

export const Index: FC<IndexProps> = ({}) => {
    const [active, setActive] = useState(false);
    return <>
      <Div bg="#f9f9f9">
        <Main minH="100vh" maxW={800} m="auto" px={5} py={8}>
          <Div w="100%"
               bg="white"
               px={16}
               py={10}
               borderRadius={1}
               boxShadow="0 2px 6px rgba(0,0,0,0.2)"
               fz={15}
               color="rgba(0,0,0,0.9)"
               weight={300}
               lineHeight={1.6}> {/* Card */}
            <Div h={43} px={1} borderBottom="1px solid rgba(0,0,0,0.2)" d="flex" align="center">
              <Span className={cn({ active })}
                    onClick={() => { setActive(!active); }}
                    cursor="pointer"
                    d="flex"
                    align="center"
                    justify="center"
                    color="rgba(255,255,255,0)"
                    size={4}
                    borderRadius={1}
                    border="1px solid rgba(0,0,0,0.22)"
                    fz={10}
                    transition="0.2s ease"
                    _firstChild={{transform: active ? `scale(1)` : `scale(0.2)`, transition: `0.1s ease`}}
                    _activeClass={{ bgc: `#2560bd`, border: `1px solid #165abc`, color: `rgba(255, 255, 255, 1)`, transform: `scale(1.1)` }}>
                <FaCheck />
              </Span>
              <Input className="title"
                     defaultValue="Web App Development"
                     placeholder="New Item"
                     px={3}
                     _hf={{ outline: `none` }}
                     color="rgba(0,0,0,0.9)"
                     fz={15}
                     fontFamily="Inter"
                     weight={300} />
            </Div>
            <P>Web App Development</P>
            <P>Notes</P>
            <Div>
              <P>Move Fonts to self hosted variable fonts</P>
              <P>Create Static List View</P>
              <Span>+ New Subtask</Span>
            </Div>
            <Div>
              <P>Badge - Coding</P>
              <Span>Add Tags</Span>
            </Div>
            <Div>
              Today
            </Div>
            <Div>
              No Project
            </Div>
            <Div>
              Add Deadline
            </Div>
          </Div>
        </Main>
      </Div>
    </>;
  }
;

export default Index; 