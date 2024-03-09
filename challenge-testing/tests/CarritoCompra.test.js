const CarritoCompra = require("../index");

describe("carrito de compras", () => {
    let carro;
  
    beforeEach(() => {
      carro = new CarritoCompra();
    });
  
    it("se inicializa como un array vacio en el constructor", () => {
      expect(carro.carrito).toEqual([]);
    });
  
    it("agregarProducto() agrega el producto al carrito con exito", () => {
      const producto = { nombre: 'Cebollas', precio: 10 };
      carro.agregarProducto(producto);
      expect(carro.carrito).toContain(producto);
    });
  
    it("calcularTotal() calcula correctamente el total de la compra", () => {
      carro.agregarProducto({ nombre: 'Zanahoria', precio: 10 });
      carro.agregarProducto({ nombre: 'Lechuga', precio: 15 });
      const total = carro.calcularTotal();
      expect(total).toBe(25);
    });
  
    it("aplicarDescuento() calcula correctamente el precio final con descuento", () => {
      carro.agregarProducto({ nombre: 'Banana', precio: 30 });
      carro.agregarProducto({ nombre: 'Manzana', precio: 70 });
      const porcentajeDescuento = 10;
      const totalConDescuento = carro.aplicarDescuento(porcentajeDescuento);
      expect(totalConDescuento).toBe(90);
    });
  });