/* esto es una funcion que retorna otra función */

console.log('DESDE EL ui');

export const replace = elemento => (removeClass, addCLass) => {
    elemento.classList.remove(removeClass);
    elemento.classList.add(addCLass);
};



