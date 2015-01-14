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



## Agreement and government with Czech quantifiers

The morphological and syntactic behavior of Czech numerals is a complex matter.
Small cardinal numerals _jeden_ “one”, _dva_ “two”, _tři_ “three” and _čtyři_ “four” agree with the counted
noun in [cs-feat/Case]() (_jeden_ also agrees in [cs-feat/Gender]() and [cs-feat/Number]();
_dva_ also agrees in [cs-feat/Gender]()).
They behave as if they modify the counted noun; they are similar to adjectives in this respect.
Examples:

- _<b>Jeden</b> muž spal, <b>dva</b> muži hráli karty._ “One man slept, two men played cards.”
- _<b>Jedna</b> žena spala, <b>dvě</b> ženy hrály karty._ “One woman slept, two women played cards.”
- _<b>Jedno</b> kotě spalo, <b>dvě</b> koťata si hrála._ “One kitten slept, two kittens played.”

In PDT, these numerals are attached to their counted nouns as `Atr` (attribute).
It is straightforward to convert such dependencies to `nummod`:

~~~ sdparse
Jedno kotě spalo . \n One kitten slept .
nummod(kotě, Jedno)
nsubj(spalo, kotě)
punct(spalo, .)
~~~

Larger cardinals behave differently.
They require that the counted noun be in the genitive case; this indicates that they actually govern the noun.
Such constructions are parallel to nouns modified by other noun phrases in genitive.
The whole phrase (numeral + counted noun) behaves as a noun phrase in neuter gender and singular number
(which is important for subject-verb agreement).

- _<b>Pět</b> mužů hrálo karty._ “Five men played cards.”
- _Skupina mužů hrála karty._ “A group of men played cards.”

In PDT, these numerals are analyzed as heads of the counted nouns, which are attached to the numeral as `Atr`:

~~~ conllu
# This is not UD, it is Prague Dependency Treebank, and we want to clearly distinguish it from the UD examples.
# visual-style nodes yellow
# visual-style arcs blue
1   Pět     pět     NUM     _   Case=Nom                           3   Sb     _   Five
2   mužů    muž     NOUN    _   Case=Gen|Gender=Masc|Number=Plur   1   Atr    _   men
3   hrálo   hrát    VERB    _   Gender=Neut|Number=Sing            0   Pred   _   played
4   karty   karta   NOUN    _   Case=Acc|Gender=Fem|Number=Plur    3   Obj    _   cards
5   .       .       PUNCT   _   _                                  0   AuxK   _   .
~~~

There are both advantages and drawbacks to this solution.
On the one hand, it reflects well the agreement in case, gender and number.
On the other hand, it is confusing that there are two different analyses of counted noun constructions,
depending on the numeric value.

Moreover, the numeral does not govern the noun in all morphological cases.
The following table shows the case of the whole phrase (numeral + noun; first column)
and the consequences for the case of the parts (note that these numerals have only
two distinct morphological forms, resulting in homonymy).

<table>
<tr><th>Phrase Case</th><th>Example</th><th>Numeral Case</th><th>Noun Case</th></tr>
<tr><td>Nom</td><td>pět mužů</td>   <td>Nom</td><td>Gen</td></tr>
<tr><td>Gen</td><td>pěti mužů</td>  <td>Gen</td><td>Gen</td></tr>
<tr><td>Dat</td><td>pěti mužům</td> <td>Dat</td><td>Dat</td></tr>
<tr><td>Acc</td><td>pět mužů</td>   <td>Acc</td><td>Gen</td></tr>
<tr><td>Voc</td><td>pět mužů</td>   <td>Voc</td><td>Gen</td></tr>
<tr><td>Loc</td><td>pěti mužích</td><td>Loc</td><td>Loc</td></tr>
<tr><td>Ins</td><td>pěti muži</td>  <td>Ins</td><td>Ins</td></tr>
</table>

We can say that the noun has the case of the whole phrase if it is dative, locative or instrumental.
The numeral then agrees with the noun in case.
The numeral forces the noun to the genitive case if the whole phrase is nominative, accusative or vocative
(but the vocative usage is rather hypothetical).
In genitive, the noun and the numeral agree with each other; but note that the numeral uses its
inflected form, as in the other cases where it agrees with the noun.

In PDT, the genitive, dative, locative and instrumental cases are analyzed in parallel to the low-value numerals,
i.e. the noun governs the numeral:

~~~ conllu
# This is not UD, it is Prague Dependency Treebank, and we want to clearly distinguish it from the UD examples.
# visual-style nodes yellow
# visual-style arcs blue
1   Hrál      hrát    VERB    _   Gender=Masc|Number=Sing            0   Pred   _   He-played
2   karty     karta   NOUN    _   Case=Acc|Gender=Fem|Number=Plur    1   Obj    _   cards
3   s         s       ADP     _   _                                  1   AuxP   _   with
4   pěti      pět     NUM     _   Case=Ins                           6   Atr    _   five
5   dalšími   další   ADJ     _   Case=Ins|Gender=Masc|Number=Plur   6   Atr    _   other
6   muži      muž     NOUN    _   Case=Ins|Gender=Masc|Number=Plur   3   Obj    _   men
7   .         .       PUNCT   _   _                                  0   AuxK   _   .
~~~

High-value numerals where the lowest-order digit is less than five (e.g. 21, 22, 23, 24) may behave both ways:

- _dvacet <b>dva</b> muži_ (noun governs numeral)
- _dvacet <b>dva</b> mužů_ (numeral governs noun)
- _<b>dvaadvacet</b> mužů_ (alternative form; it does not end with _dva_, thus the numeral governs the noun)
- _<b>22</b> muži_ (assuming the reader will pronounce _22_ as _dvacet dva,_ not _dvaadvacet_)
- _<b>22</b> mužů_ (pronounced either way)

Pronominal quantifiers behave as high-value numerals and govern the quantifed nouns:

- _<b>Kolik</b> mužů hrálo karty?_ “How many men played cards?”
- _<b>Několik</b> (<b>mnoho</b>, <b>málo</b>) mužů hrálo karty._ “Several (many, few) men played cards.”
- _<b>Tolik</b> mužů hrát karty jsem ještě neviděl._ “I have never seen so many men playing cards.”

~~~ conllu
# This is not UD, it is Prague Dependency Treebank, and we want to clearly distinguish it from the UD examples.
# visual-style nodes yellow
# visual-style arcs blue
1   Kolik   kolik   NUM     _   Case=Nom                           3   Sb     _   How-many
2   mužů    muž     NOUN    _   Case=Gen|Gender=Masc|Number=Plur   1   Atr    _   men
3   hrálo   hrát    VERB    _   Gender=Neut|Number=Sing            0   Pred   _   played
4   karty   karta   NOUN    _   Case=Acc|Gender=Fem|Number=Plur    3   Obj    _   cards
5   ?       ?       PUNCT   _   _                                  0   AuxK   _   ?
~~~

The UD conversion of the PDT data unifies analyses of counted noun phrases
and uses a structure that is parallel among all the above cases,
and also with universal dependencies in other languages.
The counted noun is always the head and the numeral is always attached as its modifier.
Nevertheless, we use different relation labels to mark situations where the numeral (or quantifier)
actually governs the morphological case of the noun:

~~~ sdparse
# visual-style 2 1 nummod	color:red
Tři muži hráli karty . \n Three men played cards .
nummod(muži, Tři)
nsubj(hráli, muži)
dobj(hráli, karty)
punct(hráli, .-5)
nummod(men, Three)
nsubj(played, men)
dobj(played, cards)
punct(played, .-11)
~~~

~~~ sdparse
Pět mužů hrálo karty . \n Five men played cards .
nummod:gov(mužů, Pět)
nsubj(hrálo, mužů)
dobj(hrálo, karty)
punct(hrálo, .-5)
nummod:gov(men, Five)
nsubj(played, men)
dobj(played, cards)
punct(played, .-11)
~~~

~~~ sdparse
Kolik mužů hrálo karty ? \n How-many men played cards ?
det:numgov(mužů, Kolik)
nsubj(hrálo, mužů)
dobj(hrálo, karty)
punct(hrálo, ?-5)
det:numgov(men, How-many)
nsubj(played, men)
dobj(played, cards)
punct(played, ?-11)
~~~

~~~ sdparse
Hrál jsem karty s pěti muži . \n Played I-have cards with five men .
aux(Hrál, jsem)
dobj(Hrál, karty)
iobj(Hrál, muži)
case(muži, s)
nummod(muži, pěti)
punct(Hrál, .-7)
aux(Played, I-have)
dobj(Played, cards)
iobj(Played, men)
case(men, with)
nummod(men, five)
punct(Played, .-15)
~~~

~~~ sdparse
Nepamatuji si , s kolika muži jsem hrál karty . \n I-do-not-remember myself , with how-many men I-have played cards .
ccomp(Nepamatuji, hrál)
mwe:reflex(Nepamatuji, si)
punct(hrál, ,-3)
aux(hrál, jsem)
dobj(hrál, karty)
iobj(hrál, muži)
case(muži, s)
det:nummod(muži, kolika)
punct(Nepamatuji, .-10)
ccomp(I-do-not-remember, played)
mwe:reflex(I-do-not-remember, myself)
punct(played, ,-14)
aux(played, I-have)
dobj(played, cards)
iobj(played, men)
case(men, with)
det:nummod(men, how-many)
punct(I-do-not-remember, .-21)
~~~



## Unsorted stuff

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
compound(tisíc, 50-2)
advmod:auxz(crowns, at-most)
nummod(crowns, thousand)
compound(thousand, 50-7)
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

Datum:

<!-- mf920922_027.a.gz (3/19) -->
~~~ sdparse
Ředitel navrhl zrušit profesionální scénu k 31 . 12 . \n Director proposed to-disband professional scene towards 31 st December .
AuxP(zrušit, k)
Adv(k, 12)
AuxG(12, .-10)
Atr(12, 31-7)
AuxG(31-7, .-8)
~~~

Číslovky vyjádřené číslicemi se změní v nummod, i když ve skutečnosti reprezentují řadové číslovky a mělo by z nich být amod:

<!-- ln95045_123.a.gz (8/8) -->
~~~ sdparse
Letošní veletrh se uskuteční od 9 . do 12 . března .
AuxP(uskuteční, od)
AuxP(uskuteční, do)
Adv(do, března)
ExD(od, 9)
Atr(března, 12)
~~~

House number in address is attached as `nummod` to the name of the street:

~~~ sdparse
v budově Na poříčí 12
Atr(budově, Na)
AuxP(Na, poříčí)
Atr(poříčí, 12)
~~~
