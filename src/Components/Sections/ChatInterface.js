// Inbuilt components & modules
import { useState, useEffect, useRef } from "react";

// Third-party components & modules
import { Row, Col, Card, Button } from "react-bootstrap";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import axios from "axios";

// Custom components & modules
import {
  getUserFromLocal,
  setChatDataToLocal,
  getChatDataFromLocal,
} from "../../helpers/LocalStorageHandling";

const ChatInterface = ({ language, hideChat }) => {
  // Chat message state
  const [chatMessage, setChatMessage] = useState("");

  // Chat data state
  const [chatData, setChatData] = useState(getChatDataFromLocal());
  console.log(chatData);

  // Message end reference
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Save chat data to local storage
    setChatDataToLocal(chatData);

    // Scroll to bottom
    if (messagesEndRef.current !== null) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatData]);

  // Get chat data from local storage
  useEffect(() => {
    setChatData(getChatDataFromLocal());
  }, []);

  // Function for chat message handle
  const chatMessageHandle = async () => {
    if (chatMessage === "") {
      alert("Please enter a message!");
      return;
    }

    try {
      // Api call
      const { data } = await axios.get(
        `http://localhost:5000`,
        {
          params: {
            dialog1: chatMessage,
            language,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getUserFromLocal()?.token}`,
          },
        }
      );

      console.log(data);

      if (data.success) {
        setChatData([
          ...chatData,
          { id: "patient", message: chatMessage, chatLanguage: language },
          {
            id: "bot",
            message: data.dialog2,
            chatLanguage: language,
          },
        ]);
      } else {
        setChatData([
          ...chatData,
          { id: "patient", message: chatMessage, chatLanguage: language },
          {
            id: "bot",
            message: `Sorry something went wrong!.`,
            chatLanguage: language,
          },
        ]);
      }

      setChatMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Row className="my-3">
        <Col>
          <Card>
            <Card.Header className="d-flex flex-row justify-content-between align-items-center p-3">
              <Card.Title as="h5">Learn {language}</Card.Title>
              <div className="d-grid gap-2 d-flex">
                <Card.Text className="bg-warning text-dark px-3 py-2 mb-0 rounded fs6">
                  50
                </Card.Text>
                <Button variant="primary py-2 px-3" onClick={hideChat}>
                  Go Back
                </Button>
              </div>
            </Card.Header>
            <Card.Body className="chat-body overflow-auto">
              <div className="w-auto m-auto p-2 mb-4 rounded">
                <p className="text-center mx-3 mb-0 text-muted">
                  Current, Messages
                </p>
              </div>
              {chatData?.map((item, index) => {
                if (item.id === "bot" && item.chatLanguage === language) {
                  return (
                    <div
                      key={index}
                      className="d-flex flex-row justify-content-start"
                      ref={messagesEndRef}
                    >
                      <img
                        src="./assets/svgs/bot.svg"
                        className="avatar-image"
                      />
                      <div>
                        <p className="bg-secondary text-light small p-2 ms-3 mb-1 rounded-3">
                          {item.message}
                        </p>
                      </div>
                    </div>
                  );
                } else if (
                  item.id === "patient" &&
                  item.chatLanguage === language
                ) {
                  return (
                    <div
                      key={index}
                      className="d-flex flex-row justify-content-end mb-4 pt-1"
                      ref={messagesEndRef}
                    >
                      <div>
                        <p className="bg-primary small p-2 me-3 mb-1 text-white rounded-3">
                          {item.message}
                        </p>
                      </div>
                      <img
                        src="./assets/svgs/user.svg"
                        className="avatar-image"
                      />
                    </div>
                  );
                }
              })}
            </Card.Body>
            <Card.Footer className="d-flex px-3 py-4">
              <input
                type="text"
                className="form-control form-control-lg fs-6 py-3"
                id="exampleFormControlInput1"
                placeholder="Type your message..."
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" ? chatMessageHandle() : null
                }
              />
              <a
                className="btn-send ms-3"
                href="#!"
                onClick={() => {
                  chatMessageHandle();
                  setChatMessage();
                }}
              >
                <BsFillArrowRightSquareFill />
              </a>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ChatInterface;
