# ITACADEMY-S5.ACUDITS
Quinto Sprint en el curso de React de IT Academy

Com en la majoria de webs reals, consumirem les dades d'una API en aquest exercici.  Usarem una API ja feta que ens permetrà obtenir el llistat de naus fàcilment.

Descripció
Una empresa de coaching està portant un experiment en empreses de Barcelona, en la qual està mesurant l'impacte de l'humor i la diversió en la productivitat.
Ens han demanat una aplicació web que mostri acudits als empleats abans de començar la jornada laboral.
Seràs l'encarregat de dur a terme la base del projecte per a fer una demo en dues setmanes amb el client i comenrzar les proves amb usuaris reals.

Informació de API a consumir
Crearem una web d'acudits, consumint dades d'una API gratuïta que no requereix clau. 

Notes
- És obligatori implementar tots els bucles i lògica amb ES6 (usant map, reduce, filter i sort per a manipular arrays). En cap cas es podrà usar el bucle for.
- Encara que és molt recomentadble usar Typescript en aquest lliurament, si vas una mica just de temps pots usar javascript.

Nivell 1
- Exercici 1
En aquest primer exercici crearem la pantalla principal que mostrarà acudits a l'usuari.
- En entrar no mostrarà cap acudit. Apareixerà el títol i el botó de següent acudit“
- En prémer el botó de “Següent acudit” es farà fetch a la API d'acudits i es mostrarà per consola l'acudit en qüestió.

- Exercici 2
Mostrar a l'usuari els piuli del servidor. Fer una primera aproximació de la maquetació.

- Exercici 3
Es necessita saber el nivell d'acceptació dels acudits, un tracking per a saber quan els empleats estan de més bon humor, i quants acudits es consumeixen de mitjana.
Necessitaràs generar un array anomenat reportAcudits, en el qual anirem guardant tota la informació relativa a l'acudit que ens demana el client.
- La data  de quan es va fer la valoració l'hauràs de guardar en format ISO. 
- El camp score té un rang de l'1 al 3, sent un 1 la pitjor puntuació. Hauràs d'implementar 3 botons entre l'acudit i el botó per a carregar el següent acudit, perquè l'usuari pugui puntuar-lo. 
Amb la puntuació de l'acudit, juntament a l'acudit i generant una data, hauràs d'anar emplenant el array reportJokes.


Nivell 2
- Exercici 4
Afegirem informació meteorològica ja que els pot ser d'utilitat. 
Consumir una API d'informació meteorològica i mostrar-ho en la web. Aquesta API ha de dir-se en l'obertura, no mitjançant un botó.

- Exercici 5
El client ens ha comunidado en les primera proves, que els usuaris s'avorriran si sempre vam mostrar el mateix tipus d'acudits.
Has de buscar una altra API (o APIs) d'acudits i utilitzar-la per a alternar acudits de diferents fonts (bé alternant un de cada o de manera aleatòria).

Nivell 3
- Exercici 6
Maquetar la web d'acudits i temps meteorològic.
