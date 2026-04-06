// const br_notify = mp.browsers.new("package://cef/notifi/index.html");
// mp.events.add("CEF:NOTIFI:ADD", (type, time, message, title) => {
//     br_notify.call("addNotifi", type, time, message, title);
// });
// mp.events.call("CEF:NOTIFI:ADD", "warning", 3000, "Текст предупреждения!", "Предупреждение!"); // вызов с клиентской стороны
// mp.events.call("CEF:NOTIFI:ADD", "error", 3000, "Текст ошибки!", "Ошибка!"); // вызов с клиентской стороны
// mp.events.call("CEF:NOTIFI:ADD", "success", 3000, "Текст об успехе!", "Успешно!"); // вызов с клиентской стороны