"use client";
import CountUp from "react-countup";
const Counter = () => {
    return (
        <div className="flex flex-row flex-wrap items-center justify-evenly">
            <div className="flex flex-col items-center">
                <span className="text-[2.25rem] font-[600]">
                    0
                    <CountUp
                        start={0}
                        end={3}
                        duration={2}
                        enableScrollSpy={true}
                        scrollSpyDelay={0.5}
                    />
                    +
                </span>
                <span className="text-secondary-text text-[1.1rem] text-center">
                    Years <br /> Experience
                </span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-[2.25rem] font-[600]">
                    <CountUp
                        start={0}
                        end={15}
                        duration={2}
                        enableScrollSpy={true}
                        scrollSpyDelay={0.5}
                    />
                    +
                </span>
                <span className="text-secondary-text text-[1.1rem] text-center">
                    Completed <br /> Projects
                </span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-[2.25rem] font-[600]">
                    0
                    <CountUp
                        start={0}
                        end={2}
                        duration={2}
                        enableScrollSpy={true}
                        scrollSpyDelay={0.5}
                    />
                    +
                </span>
                <span className="text-secondary-text text-[1.1rem] text-center">
                    Companies <br /> Worked
                </span>
            </div>
        </div>
    );
};
export default Counter;
