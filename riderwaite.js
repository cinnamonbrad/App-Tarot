const cards = ["/Images/backofcards.jpg",
"https://upload.wikimedia.org/wikipedia/commons/f/fd/Pents01.jpg",
"https://upload.wikimedia.org/wikipedia/commons/9/9f/Pents02.jpg",
"https://upload.wikimedia.org/wikipedia/commons/4/42/Pents03.jpg",
"https://upload.wikimedia.org/wikipedia/commons/3/35/Pents04.jpg",
"https://upload.wikimedia.org/wikipedia/commons/9/96/Pents05.jpg",
"https://upload.wikimedia.org/wikipedia/commons/a/a6/Pents06.jpg",
"https://upload.wikimedia.org/wikipedia/commons/6/6a/Pents07.jpg",
"https://upload.wikimedia.org/wikipedia/commons/4/49/Pents08.jpg",
"https://upload.wikimedia.org/wikipedia/commons/f/f0/Pents09.jpg",
"https://upload.wikimedia.org/wikipedia/commons/4/42/Pents10.jpg",
"https://upload.wikimedia.org/wikipedia/commons/e/ec/Pents11.jpg",
"https://upload.wikimedia.org/wikipedia/commons/d/d5/Pents12.jpg",
"https://upload.wikimedia.org/wikipedia/commons/8/88/Pents13.jpg",
"https://upload.wikimedia.org/wikipedia/commons/1/1c/Pents14.jpg",
"https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/0/0f/Wands02.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/f/ff/Wands03.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/a/a4/Wands04.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/3/3b/Wands06.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/e/e4/Wands07.jpg",
"https://upload.wikimedia.org/wikipedia/commons/6/6b/Wands08.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/4/4d/Tarot_Nine_of_Wands.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/0/0b/Wands10.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/6/6a/Wands11.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/1/16/Wands12.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/0/0d/Wands13.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/c/ce/Wands14.jpg",
"https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/f/f8/Cups02.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/7/7a/Cups03.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/3/35/Cups04.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/d/d7/Cups05.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/1/17/Cups06.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/a/ae/Cups07.jpg",
"https://upload.wikimedia.org/wikipedia/commons/6/60/Cups08.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/2/24/Cups09.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/8/84/Cups10.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/a/ad/Cups11.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/f/fa/Cups12.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/6/62/Cups13.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/0/04/Cups14.jpg",
"https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/9/9e/Swords02.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/0/02/Swords03.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/b/bf/Swords04.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/2/23/Swords05.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/2/29/Swords06.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/3/34/Swords07.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/a/a7/Swords08.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/2/2f/Swords09.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords10.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/4/4c/Swords11.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/b/b0/Swords12.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords13.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/3/33/Swords14.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/3/3a/TheLovers.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg",
"https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg",
"https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg",
]


export default cards; 
