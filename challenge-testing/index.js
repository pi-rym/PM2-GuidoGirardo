class CarritoCompra {
    constructor(){
        this.carrito = [];
    }
    agregarProducto(producto){
        this.carrito.push(producto);
    }
    calcularTotal(){
        let total = 0;
        for(const producto of this.carrito){
            total += producto.precio;
        }
        return total;
    }
    aplicarDescuento(porcentaje){
        const totalCompra = this.calcularTotal();
        const descuento = (porcentaje / 100) * totalCompra;
        const totalConDescuento = totalCompra - descuento;
        return totalConDescuento;
    }
}

module.exports = CarritoCompra;