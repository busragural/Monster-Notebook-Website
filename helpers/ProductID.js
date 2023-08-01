
export const nameID = [
    {
        name: "Abra",
        id: 6823
    },
    {
        name: "Tulpar",
        id: 6826
    }, 
    {
        name: "Semruk",
        id: 6829
    },
     {
        name: "Markut",
        id: 6831
    },
     {
        name: "Huma",
        id: 6833
    }, 
    {
        name: "Oyuncu-Ekipmanlari",
        id: 1637
    },
     {
        name: "Oyuncu-Mouse",
        id: 1666
    }, 
    {
        name: "Oyuncu-Klavyesi",
        id: 6803
    },
    {
        name: "Oyuncu-Kulakligi",
        id: 6761
    }, 
    {
        name: "Gaming-Monitor",
        id: 6867
    }, 
    {
        name: "Aryond",
        id: 6752
    }, 
    {
        name: "Diğer-Ekipmanlar",
        id: 6889
    }, 
    {
        name: "Mouse",
        id: 6031
    }, 
    {
        name: "Klavye",
        id: 6035
    }, 
    {
        name: "Kulaklik",
        id: 6891
    }, 
    {
        name: "Diger-Aksesuarlar",
        id: 6892
    }, 

    {
        name: "Tum-Laptoplar",
        id: 1105
    }, 

]

export function searchByName(inputName) {
    const result = nameID.find((item) => item.name === inputName);
    return result ? result.id : null;
  }