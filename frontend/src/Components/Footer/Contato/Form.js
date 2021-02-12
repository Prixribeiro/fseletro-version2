import React, { useState, useEffect } from "react";

export default function Contact() {
  const [messages, setMessages] = useState([]);
  const [render, setRender] = useState(false);
  const [msg, setMsg] = useState({
    formSave: false,
    type: "",
    message: "",
  });
  const [formData, setFormData] = useState({
    nome: "",
    msg: "",
  });

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch("http://localhost:8080/mensagem");
      setMessages(await response.json());
    }
    fetchMyAPI();
  }, [render]);

  const onChangeInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/mensagem", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      }).then((dados) => {
          setRender(!render);
          setFormData({
            nome: "",
            msg: "",
          });
        });

      const responseEnv = await res.json();

      if (responseEnv.error) {
        setMsg({
          formSave: false,
          type: "error",
          message: responseEnv.message,
        });
      } else {
        setMsg({
          formSave: false,
          type: "success",
          message: responseEnv.message,
        });
      }
    }catch(err){
      setMsg({
        formSave: false,
        type: "error",
        message: "Erro: mensagem não cadastrada, tente mais tarde!",
      });
    }

    setTimeout(() => {
      setMsg(false);
    }, 2000);
  };

  const formatDate = (rawDate) => {
    const myDate = new Date(rawDate);
    const d = myDate.getDay();
    const mo = myDate.getMonth() + 1;
    const y = myDate.getFullYear();
    const h = myDate.getHours();
    const mi = myDate.getMinutes();

    return `${d}/${mo}/${y} - ${h}:${mi}`;
  };

  return (
    <>
      <div className="header">
        <h1 className="text-center">Fale Conosco</h1>
            <hr></hr>
      </div>
      <div className="section d-flex justify-content-center my-5 row">
        <div className="contacts col-lg-3 col-md-4 col-sm-6 col-xs-9">
        
        <h4 className = "text-center"> Deixe sua mensagem</h4>
          <form onSubmit={sendForm} name="form">
            <div className="form-group">
              <input
                value={formData.nome}
                onChange={onChangeInput}
                type="text"
                className="form-control"
                id="nome"
                name="nome"
                placeholder="Nome:"
              />
              <input
                value={formData.msg}
                onChange={onChangeInput}
                type="text"
                className="form-control"
                id="msg"
                name="msg"
                placeholder="Mensagem:"
              />
              <input
                type="submit"
                name="submit"
                className="btn btn-block btn-success"
                value="Enviar"
              />
              {msg.type === "success" ? (
                <div
                  className="alert alert-success position-absolute mx-auto mt-4 w-50 text-center"
                  role="alert"
                >
                  <span className="lead text-dark">{msg.message}</span>
                </div>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>

        <div className="messages col-lg-3 col-md-4 col-sm-6 col-xs-9">
          
          {messages.map((row) => (
            <div key={messages.id} className="media text-muted pt-3  border-bottom">
              <div className="media-body pb-3 mb-0 small lh-125 border-gray">
                <div className="d-flex justify-content-between align-items-center w-100">
                  <strong className="text-gray-dark display-5">{row.nome}</strong>
                  <p>{formatDate(row.data)}</p>
                </div>
                <p className="d-block">{row.msg}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
}
