let numero ;
        
        if (esPrimo(numero)) {
            console.log(numero + " es un número primo.");
        } else {
            console.log(numero + " no es un número primo.");
        }
        
        scanner.close();
    }
    
    // Método para verificar si un número es primo
    public static boolean esPrimo(int numero) {
        // Verificar casos especiales
        if (numero <= 1) {
            return false;
        }
        
        // Verificar si es divisible por algún número diferente de 1 y sí mismo
        for (int i = 2; i <= numero / 2; i++) {
            if (numero % i == 0) {
                return false;
            }
        }
        
        return true;
    }
}