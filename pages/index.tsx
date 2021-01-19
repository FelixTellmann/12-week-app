import { FC, useState } from "react";
import { Div, Main } from "../components";

type IndexProps = {};

export const Index: FC<IndexProps> = ({}) => {
    const [active, setActive] = useState(false);
    const [data, setData] = useState([
      {
        week: 1,
        status: "complete",
        goal1: 0.8,
        goal2: 0.75
      },
      {
        week: 2,
        status: "complete",
        goal1: 0.9,
        goal2: 0.7
      },
      {
        week: 3,
        status: "active",
        goal1: 0.95,
        goal2: 0.9
      },
      {
        week: 4,
        status: "incomplete",
        goal1: 0,
        goal2: 0
      },
      {
        week: 5,
        status: "incomplete",
        goal1: 0,
        goal2: 0
      },
      {
        week: 6,
        status: "incomplete",
        goal1: 0,
        goal2: 0
      },
      {
        week: 7,
        status: "incomplete",
        goal1: 0,
        goal2: 0
      },
      {
        week: 8,
        status: "incomplete",
        goal1: 0,
        goal2: 0
      }
    ]);
    return <>
      <Div bg="#f9f9f9">
        <Main minH="100vh" maxW={800} m="auto" px={5} py={8}>
          {/* <Div w="100%"
               bg="white"
               px={16}
               py={10}
               borderRadius={1}
               boxShadow="0 2px 6px rgba(0,0,0,0.2)"
               fz={14}
               color="rgba(0,0,0,0.9)"
               weight={300}
               lineHeight={1.6}>
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
                    _activeClass={{ bgc: "#2560bd", border: `1px solid #165abc`, color: `rgba(255, 255, 255, 1)`, transform: `scale(1.1)` }}>
                <FaCheck />
              </Span>
              <Input className="title"
                     defaultValue="Web App Development"
                     placeholder="New Item"
                     w="100%"
                     px={3}
                     _hf={{ outline: `none` }}
                     color="rgba(0,0,0,0.9)"
                     fz={14}
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
          </Div> */}
          <Div d="flex" justify="space-between">
            
            {data.map(({ week, goal1, goal2, status }) => (
              
              <Div p={4} opacity={status === 'active' ? 1 : status === 'complete' ? 0.8 : 0.4} _hfa={{opacity: 1}} transition="0.1s ease-in" cursor="pointer">
                <svg width="100%" viewBox="0 0 128 128" fill="none" strokeLinejoin="round" className="score_score__1yBKT">
                  <g shapeRendering="geometricPrecision">
                    <circle cx="50%" cy="50%" r="50%" fill="#0CCE6B" />
                    <circle cx="50%" cy="50%" r="40%" fill="none" strokeWidth={`calc(8% * ${goal1}`} stroke="rgba(0,0,0,.1)" />
                    <circle cx="50%"
                            cy="50%"
                            r="40%"
                            fill="none"
                            strokeWidth={`calc(8% * ${goal1})`}
                            stroke={`rgba(255,255,255, calc(${goal1} + 0.5))`}
                            strokeDasharray="calc(40% * 2 * 3.14159)"
                            strokeDashoffset={`calc(40% * 2 * 3.14159 * (1 - ${goal1}))`}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="score_progress__wg_vO" />
                    <circle cx="50%" cy="50%" r="29%" fill="none" strokeWidth={`calc(8% * ${goal2})`} stroke="rgba(0,0,0,.1)" />
                    <circle cx="50%"
                            cy="50%"
                            r="29%"
                            fill="none"
                            strokeWidth={`calc(8% * ${goal2})`}
                            stroke={`rgba(255,255,255, calc(${goal2} + 0.5))`}
                            strokeDasharray="calc(29% * 2 * 3.14159)"
                            strokeDashoffset={`calc(29% * 2 * 3.14159 * (1 - ${goal2}))`}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="score_progress__wg_vO" />
                    <text x="64" y="79" fill="white" fontWeight="500" fontSize="42" textAnchor="middle">{week}</text>
                  </g>
                </svg>
              </Div>
            ))}
          </Div>
        </Main>
      </Div>
      <style jsx>{`
        :global(:root) {
          --stroke: 0.1
        }

        .score_progress__wg_vO {
          transform-origin: 50% 50%;
          transform: rotate(-90deg);
          transition: 1s ease;
        }
      `}</style>
    </>;
  }
;

export default Index; 