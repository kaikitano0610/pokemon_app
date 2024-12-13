export const getAllPokemon = (url) => {
    //fetchがすべて終わるまで待つことを約束をする。第一引数のresolveは成功、第二引数のrejectは拒否
    return new Promise((resolve,reject) =>{
        fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data));
    });
};

export const getPokemon = (url) => {
    return new Promise((resolve,reject)=>{
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            resolve(data);
        });
    })
};