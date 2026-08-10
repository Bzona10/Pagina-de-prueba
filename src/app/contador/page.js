"use client"
import { useState, useEffect } from "react";
export default function ContadorPage() {
// Estado del contador
const [cuenta, setCuenta] = useState(0);
// useEffect que se ejecuta cuando cambia la cuenta
useEffect(() => {
console.log("La cuenta cambió a:", cuenta);
document.title = `Contador: ${cuenta}`;
}, [cuenta]);
// Función para incrementar
const incrementar = () => {
setCuenta(cuenta + 1);
};
// Función para decrementar
const decrementar = () => {
setCuenta(cuenta - 1);
};
// Función para resetear
const resetear = () => {
setCuenta(0);
};
return (
<div className="contador-container">
<h1>Página Contador</h1>
<h2>Cuenta actual: {cuenta}</h2>
<div className="botones">
<button onClick={incrementar}>Incrementar (+1)</button>
<button onClick={decrementar}>Decrementar (-1)</button>
<button onClick={resetear}>Resetear (0)</button>
</div>
</div>
);
}