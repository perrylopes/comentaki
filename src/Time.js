const Time = ({ timestamp }) => {
  const date = new Date(timestamp);
  const horas = date.getHours();
  const minutos = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();
  const dia = "0" + (date.getDay() + 1);
  const mes = "0" + (date.getMonth() + 1);
  const ano = date.getFullYear();
  return ` ${dia.substr(-2)}/${mes.substr(
    -2
  )}/${ano}  ${horas}:${minutos.substr(-2)}:${seconds.substr(-2)}`;
};

export default Time;
