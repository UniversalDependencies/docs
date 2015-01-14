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

High-value numerals where the lowest-order digit is more than zero and less than five (e.g. 21, 22, 23, 24) may behave both ways:

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
actually governs the morphological case of the noun.
There are four labels used:

<table>
<tr><td></td><td><strong>Numeric</strong></td><td><strong>Pronominal</strong></td></tr>
<tr><td><strong>Noun governs</strong></td><td><tt>nummod</tt></td><td><tt><a href="det-nummod.html">det:nummod</a></tt></td></tr>
<tr><td><strong>Numeral governs</strong></td><td><tt><a href="nummod-gov.html">nummod:gov</a></tt></td><td><tt><a href="det-numgov.html">det:numgov</a></tt></td></tr>
</table>

~~~ sdparse
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



## Additional remarks

In PDT the words _milión_ “million”, _miliarda_ “billion” and higher are usually tagged as [nouns](cs-pos/NOUN),
not as [numerals](cs-pos/NUM).
In the typical case, the million is in genitive, it is preceded by a smaller number,
and it is not followed by smaller numerals (as it is in _million five hundred thousand_).
It is followed by the counted noun.
Thus the following examples receive parallel analyses:

~~~ sdparse
50 miliónů korun \n 50 millions of-crowns
nummod:gov(miliónů, 50-1)
nummod:gov(millions, 50-5)
nmod(miliónů, korun)
nmod(millions, of-crowns)
~~~

~~~ sdparse
50 pytlů bankovek \n 50 sacks of-bills
nummod:gov(pytlů, 50-1)
nummod:gov(sacks, 50-5)
nmod(pytlů, bankovek)
nmod(sacks, of-bills)
~~~

On the other hand the word _tisíc_ “thousand” may be a noun
(_na náměstí byly tisíce lidí_ “there were thousands of people in the square”)
or a numeral:

~~~ sdparse
nanejvýš 50 tisíc korun \n at-most 50 thousand crowns
advmod:emph(korun, nanejvýš)
nummod:gov(korun, tisíc)
compound(tisíc, 50-2)
advmod:emph(crowns, at-most)
nummod:gov(crowns, thousand)
compound(thousand, 50-7)
~~~

Note that the two numeral words in the above example are joined using the [compound]() relation.
Also note that the [intensifier](advmod:emph) _nanejvýš_ is attached to the head of the phrase _(korun)_ and not to the number.
This is in accord both with the UD guidelines
and with the original PDT annotation of agreeing numerals (e.g. _jen čtyři firmy, jen několik procent_).

Similarly there may be other nodes (such as punctuation) that are attached to the head of the phrase
and they are related to the whole phrase rather than directly to the head noun:

~~~ sdparse
( 9 dní ) \n ( 9 days )
punct(dní, (-1)
nummod:gov(dní, 9)
punct(dní, )-4)
~~~

Na číselné frázi můžou viset i jiné věci než rematizátory.
Tohle bych pak pověsil na minuty, zatímco ta AuxZ bych nechal na číslovce.

~~~ sdparse
5 minut včetně seřízení \n 5 minutes including adjustment
nummod:gov(minut, 5)
nmod(minut, seřízení)
case(seřízení, včetně)
~~~

## Dates

<!-- mf920922_027.a.gz (3/19) -->
~~~ conllu
# This is not UD, it is Prague Dependency Treebank, and we want to clearly distinguish it from the UD examples.
# visual-style nodes yellow
# visual-style arcs blue
1    Ředitel         ředitel         NOUN    _   _   2   Sb     _   The-director
2    navrhl          navrhnout       VERB    _   _   0   Pred   _   proposed
3    zrušit          zrušit          VERB    _   _   2   Obj    _   to-disband
4    profesionální   profesionální   ADJ     _   _   5   Atr    _   the-professional
5    scénu           scéna           NOUN    _   _   3   Obj    _   scene
6    k               k               ADP     _   _   3   AuxP   _   towards
7    31              31              NUM     _   _   9   Atr    _   the-31
8    .               .               PUNCT   _   _   7   AuxG   _   th
9    12              12              NUM     _   _   6   Adv    _   December
10   .               .               PUNCT   _   _   9   AuxG   _   .
~~~

~~~ sdparse
Ředitel navrhl zrušit profesionální scénu k 31 . 12 . \n Director proposed to-disband professional scene towards 31 st December .
advmod(zrušit, 12)
case(12, k)
punct(12, .-10)
nummod(12, 31-7)
punct(31-7, .-8)
advmod(to-disband, December)
case(December, towards)
punct(December, .-21)
nummod(December, 31-18)
punct(31-18, st)
~~~

Numerals expressed using digits are labeled `nummod` even if they represent ordinal numerals,
which would be labeled `amod`:

<!-- ln95045_123.a.gz (8/8) -->
~~~ conllu
# This is not UD, it is Prague Dependency Treebank, and we want to clearly distinguish it from the UD examples.
# visual-style nodes yellow
# visual-style arcs blue
1    Letošní     letošní      ADJ     _   _   2   Atr    _   This-year's
2    veletrh     veletrh      NOUN    _   _   4   Sb     _   fair
3    se          se           PRON    _   _   4   AuxR   _   itself
4    uskuteční   uskutečnit   VERB    _   _   0   Pred   _   will-take-place
5    od          od           ADP     _   _   4   AuxP   _   from
6    9           9            NUM     _   _   5   ExD    _   9
7    .           .            PUNCT   _   _   6   AuxG   _   th
8    do          do           ADP     _   _   4   AuxP   _   to
9    12          12           NUM     _   _   11  Atr    _   12
10   .           .            PUNCT   _   _   9   AuxG   _   th
11   března      březen       NOUN    _   _   8   Adv    _   March
12   .           .            PUNCT   _   _   0   AuxK   _   .
~~~
~~~ sdparse
Letošní veletrh se uskuteční od 9 . do 12 . března . \n This-year's fair itself will-take-place from 9 th to 12 th March .
advmod(uskuteční, března)
case(března, do)
nummod(března, 12-9)
remnant(12-9, 9-6)
remnant(do, od)
advmod(will-take-place, March)
case(March, to)
nummod(March, 12-22)
remnant(12-22, 9-19)
remnant(to, from)
~~~

## Numbered objects

House number in address is attached as `nummod` to the name of the street:

~~~ sdparse
v budově Na poříčí 12 \n in the-building Na poříčí 12
nmod(budově, poříčí-4)
case(poříčí-4, Na-3)
nummod(poříčí-4, 12-5)
nmod(building, poříčí-10)
case(poříčí-10, Na-9)
nummod(poříčí-10, 12-11)
~~~
