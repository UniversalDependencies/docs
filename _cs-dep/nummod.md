---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
---

A numeric modifier of a noun is any [number](u-pos/NUM) phrase
that serves to modify the meaning of the noun with a quantity.

~~~ sdparse
Jan snědl tři řízky . \n Jan ate three steaks .
nummod(řízky, tři)
nummod(steaks, three)
~~~

~~~ sdparse
Jan utratil 944 korun . \n Jan spent 944 crowns .
nummod(korun, 944-3)
nummod(crowns, 944-9)
~~~

Note that indefinite quantifiers such as _few, many_ are tagged
[u-pos/DET]() rather than [u-pos/NUM](). 
Therefore their relation to the quantified noun is not `nummod` but
[det]():

~~~ sdparse
Jan snědl mnoho řízků . \n Jan ate many steaks .
det(řízků, mnoho)
det(steaks, many)
~~~

In PDT the words _milión_ “million”, _miliarda_ “billion” and higher are usually tagged as [nouns](cs-pos/NOUN),
not as [numerals](cs-pos/NUM).
In the typical case, the million is in genitive, it is preceded by a smaller number,
and it is not followed by smaller numerals (like in _million five hundred thousand_).
It is followed by the counted noun.
Thus the following examples receive parallel analysis:

~~~ sdparse
50 miliónů korun \n 50 millions of-crowns
nummod(miliónů, 50-1)
nummod(millions, 50-5)
nmod(miliónů, korun)
nmod(millions, of-crowns)
~~~

~~~ sdparse
50 pytlů bankovek \n 50 sacks of-bills
nummod(pytlů, 50-1)
nummod(sacks, 50-5)
nmod(pytlů, bankovek)
nmod(sacks, of-bills)
~~~

On the other hand the word _tisíc_ “thousand” may be a noun
(_na náměstí byly tisíce lidí_ “there were thousands of people in the square”)
or a numeral:

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
