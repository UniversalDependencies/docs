---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
---

This document is a placeholder for the language-specific documentation
for `nummod`.

Jak je to v PDT:

Slovo _milión_ (a také _miliarda_ a vyšší) je obvykle podstatné jméno.
Ve většině případů je v genitivu, před ním je menší číslovka a za ním už nejsou drobné, ale rovnou počítané jméno.
Takže stromy pro _50 miliónů korun_ a pro _50 pytlů bankovek_ budou mít stejný tvar.
Naopak slovo _tisíc_ může být sice podstatné jméno _(na náměstí demonstrovaly tisíce lidí),_
ale v číselných výrazech bývá značkováno i jako číslovka:

~~~ sdparse
nanejvýš 50 tisíc korun \n at-most 50 thousand crowns
AuxZ(50, nanejvýš)
Atr(50, tisíc)
Atr(tisíc, korun)
~~~

Zkonvertované do UD to bude vypadat takhle:

~~~ sdparse
nanejvýš 50 tisíc korun \n at-most 50 thousand crowns
advmod:auxz(korun, nanejvýš)
nummod(korun, tisíc)
compound(tisíc, 50)
~~~

Obdobně se s rematizátory v PDT zachází u číslovek shodných, které visí na počítaných podstatných jménech.
I tam visí rematizátor na hlavě celé fráze, tedy na podstatném jménu.
V tomto případě tedy bude strom UD vypadat stejně, pouze se vymění afuny PDT za deprely UD.

~~~ sdparse
jen čtyři firmy \n only four companies
advmod:auxz(firmy, jen)
nummod(firmy, čtyři)
~~~

Další ukázky z PDT:

~~~ sdparse
( 9 dní )
AuxG(9, (-1)
Atr(9, dní)
AuxG(9, )-4)
~~~

~~~ sdparse
jen několik procent
AuxZ(několik, jen)
Atr(několik, procent)
~~~

Na číselné frázi můžou viset i jiné věci než rematizátory.
Tohle bych pak pověsil na minuty, zatímco ta AuxZ bych nechal na číslovce.

~~~ sdparse
5 minut včetně seřízení
Atr(5, minut)
AuxP(5, včetně)
Atr(včetně, seřízení)
~~~
