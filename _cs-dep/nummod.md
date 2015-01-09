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
