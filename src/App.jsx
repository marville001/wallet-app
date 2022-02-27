import ConnectWalletButton from "./components/connectwalletbutton";
import CreateBlockButton from "./components/CreateBlockButton";
import ProjectDescription from "./components/projectdescription";

const App = () => {
    
    return (
        <div className="app">
            <ConnectWalletButton />
            <div className="wrapper">
                <div className="search-wrapper">
                    <div className="search-container">
                        <input type="text" />
                        <svg
                            className="search-icon"
                            width="20"
                            height="20"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.7106 11.5006H12.2928L16.3862 15.6133L16.3871 15.6142C16.6018 15.8289 16.6018 16.1823 16.3871 16.3971C16.1723 16.6118 15.8189 16.6118 15.6042 16.3971L11.5006 12.2935V11.7106V11.5088L11.3605 11.3636L11.2793 11.2793L11.3636 11.3605L11.5088 11.5006H11.7106ZM11.051 10.4052L10.753 10.753L10.4052 11.051C9.11185 12.1596 7.34991 12.7316 5.47385 12.4176C2.91162 11.9844 0.860218 9.83996 0.54698 7.26035L0.54689 7.25962C0.0665703 3.3524 3.3524 0.0665703 7.25962 0.54689L7.26035 0.54698C9.83996 0.860218 11.9844 2.91162 12.4176 5.47385C12.7316 7.34991 12.1596 9.11185 11.051 10.4052ZM1.50063 6.50063C1.50063 9.26677 3.73448 11.5006 6.50063 11.5006C9.26677 11.5006 11.5006 9.26677 11.5006 6.50063C11.5006 3.73448 9.26677 1.50063 6.50063 1.50063C3.73448 1.50063 1.50063 3.73448 1.50063 6.50063Z"
                                fill="white"
                                fill-opacity="0.6"
                                stroke="black"
                            />
                        </svg>
                    </div>
                </div>
                <div className="content" ref={contentRef}>
                    <CreateBlockButton />
                    <ProjectDescription />
                    <ProjectDescription />
                    <ProjectDescription />
                    <ProjectDescription />
                    <ProjectDescription />
                    <ProjectDescription />
                    <ProjectDescription />
                    <ProjectDescription />
                </div>
            </div>
        </div>
    );
};

export default App;
