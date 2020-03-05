# Android

Quando chega um push em background e temos que mostrar um alert com os dados 
(titulo, texto por exemplo), não conseguimos obter através das propriedades do
objeto message, portanto, temos que preparar o código para receber esse tipo de 
informação através da propriedade `data`

```
message: {
  "foreground": false,
  "data": {
    "google.delivered_priority": "high",
    "google.sent_time": {},
    "google.ttl": {},
    "google.original_priority": "high",
    "google.message_id": "0:1583445873960521%f5d190bef5d190be"
  },
  "google.delivered_priority": "high",
  "google.sent_time": "[Circular]",
  "google.ttl": "[Circular]",
  "google.original_priority": "high",
  "google.message_id": "0:1583445873960521%f5d190bef5d190be"
}
```
