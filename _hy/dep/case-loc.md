---
layout: relation
title: 'case:loc'
shortdef: 'postpositional localizer'
udver: '2'
---

We treat a closed set of postpositions (traditionally known as “improper adpositions”) as localizers. (See [ADP]() for a list of localizers.)

The head of the localizer is the noun or the main verb of the clause preceding it. Localizers are always tagged `ADP`. When it follows a noun, it receives the `case:loc` relation label. But if it follows a verb and acts as an adverbial, it receives the [obl]() relation (but retains the tag `ADP`).

~~~ sdparse
Վերցրեց/VERB[Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act] գիրքը/NOUN[Animacy=Inan|Case=Nom|Definite=Def|Number=Sing] սեղանի/NOUN[Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing] վրայից/ADP[AdpType=Post|Case=Abl] ։/PUNCT \n He-took the-book from-on the-table .
obj(Վերցրեց, գիրքը)
obj(He-took, the-book)
obl(Վերցրեց, սեղանի)
obl(He-took, the-table)
case:loc(սեղանի, վրայից)
case:loc(the-table, from-on)
punct(Վերցրեց, ։)
punct(He-took, .)
~~~

~~~ sdparse
Ճանապարհն/NOUN[Animacy=Inan|Case=Nom|Definite=Def|Number=Sing] անցնում/VERB[Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid] էր/AUX[Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin] դաշտերի/NOUN[Animacy=Inan|Case=Dat|Definite=Ind|Number=Plur] միջով/ADP[AdpType=Post|Case=Ins] ։/PUNCT \n The-road passed through the-fields .
nsubj(անցնում, Ճանապարհն)
nsubj(passed, The-road)
aux(անցնում, էր)
obl(անցնում, դաշտերի)
obl(passed, the-fields)
case:loc(դաշտերի, միջով)
case:loc(the-fields, through)
punct(անցնում, ։)
punct(passed, .)
~~~

~~~ sdparse
գինետան/NOUN[Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing] մոտով/ADP[AdpType=Post|Case=Ins] \n by the-tavern
case:loc(գինետան, մոտով)
case:loc(the-tavern, by)
~~~

~~~ sdparse
Մոտովս/ADP[AdpType=Post|Case=Ins|Number[psor]=Sing|Person[psor]=1] անցան/VERB[Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid] երկու/NUM[NumForm=Word|NumType=Card] սիլուետներ/NOUN[Animacy=Inan|Case=Nom|Definite=Ind|Number=Plur] ։/PUNCT \n Two silhouettes passed by-me .
nsubj(անցան, սիլուետներ)
obl(անցան, Մոտովս)
nummod(սիլուետներ, երկու)
punct(անցան, ։)
nsubj(passed, silhouettes)
obl(passed, by-me)
nummod(silhouettes, Two)
punct(passed, .)
~~~
<!-- Interlanguage links updated St lis 3 20:58:42 CET 2021 -->
