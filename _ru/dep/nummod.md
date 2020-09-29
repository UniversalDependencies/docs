---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
---

A numeric modifier of a noun is a [numeral](ru-pos/NUM) or quantifier 
that serves to modify the meaning of the noun with a quantity.
The noun is always the head and the numeral (or quantifier) is always attached as its modifier.
Nevertheless, three different relation labels are used to mark situations where the numeral (or quantifier)
a) agrees in case with the noun: <strong>nummod</strong>;
b) governs the morphological case of the noun: <a href="nummod-gov.html"><strong>nummod:gov</strong></a>;
c) does not change the morphological form of the noun: <a href="nummod-entity.html"><strong>nummod:entity</strong></a>.

~~~ sdparse
Сидеть на двух стульях . \n To-sit on two chairs .
nummod(стульях, двух)
nummod(chairs, two)
~~~

~~~ sdparse
Два стула сломаны . \n Two chairs broke .
nummod:gov(стула, Два)
nummod:gov(chairs, Two)
~~~

~~~ sdparse
Дом два , подъезд четыре . \n Building two , entrance four .
nummod:entity(Дом, два)
nummod:entity(Building, two)
nummod:entity(подъезд, четыре)
nummod:entity(entrance, four)
~~~


## Agreement and government with Russian quantifiers

The morphological and syntactic behavior of Russian numerals is complicated, 
and depends on the type of numeral, it's case, animacy, and sometimes some other factors.

The cardinal numeral _один_ “one” agrees with the noun in case, number, and gender. 
It behaves in the same way as ordinal numerals and adjectives.

The paucal cardinal numerals _два_ “two”, _три_ “three”, _четыре_ “four”, _оба_ “both”, _пол_ “half”, and _полтора_ “one and a half” agree with the noun in grammatical case in most cases (nummod). In the Nominative and Accusative inanimate case, however, they govern the Genitive singular form of the noun (nummod:gov). The Accusative animate is similar to the Genitive (nummod).
_Два_ “two”, _оба_ “both”, and _полтора_ “one and a half” also agree in gender with the noun in all grammatical cases.
Examples:

- _<b>Один</b> мужчина спал, <b>два</b> мужчины играли в карты с <b>тремя</b> женщинами._ “One.Masc man.Masc slept, two.Masc men.Masc played cards with three women.”
- _<b>Одна</b> женщина спала, <b>две</b> женщины играли в карты с <b>тремя</b> мужчинами._ “One.Fem woman slept, two.Masc women.Masc played cards with three men.”
- _<b>Одно</b> чудовище спало, <b>два</b> чудовища играли в карты с <b>тремя</b> привидениями._ “One.Neut monster slept, two.Neut monsters played cards with three ghosts.”

In the examples above, the dependencies of the numeral _один_ “one” and the numeral _три_ “three” (in the Instrumental case) are labeled as `nummod`:

~~~ sdparse
Одно чудовище спало , два чудовища играли в карты с тремя привидениями . \n One monster slept , two monsters played cards with three ghosts .
nummod(чудовище, Одно)
nummod(monster, One)
nummod(привидениями, тремя)
nummod(ghosts, three)
nummod:gov(чудовища, два)
nummod:gov(monsters, two)
~~~

The cardinal numerals of larger quantity (five and more, e.g. _пять_ “five”, _шесть_ “six”, _сто_ “one hundred”) as well as quantifiers (e.g. _много_ “how many, how much”, _сколько_ “how many, how much”, _столько_ “so many, so much”, _несколько_ “a few”) agree with the noun in grammatical case in most cases exactly as other cardinal numerals (nummod). In the Nominative and Accusative inanimate case, however, they govern the Genitive plural form of the noun (nummod:gov). 
The following table shows the case of the whole phrase (numeral + noun; first column)
and the consequences for the case of the parts (note that these numerals have only
three distinct morphological forms, resulting in homonymy).

<table>
<tr><th>Phrase Case</th><th>Example (paucal)</th><th>Example (larger quantity)</th><th>Numeral Case</th><th>Noun Case</th></tr>
<tr><td>Nom</td><td>две женщины</td><td>пять женщин</td><td>Nom</td><td>Gen</td></tr>
<tr><td>Gen</td><td>двух женщин</td><td>пяти женщин</td><td>Gen</td><td>Gen</td></tr>
<tr><td>Dat</td><td>двум женщинам</td><td>пяти женщинам</td><td>Dat</td><td>Dat</td></tr>
<tr><td>Acc</td><td>двух женщин/две вазы</td><td>пять женщин/пять ваз</td><td>Acc</td><td>Acc(anim)/Gen(inan)</td></tr>
<tr><td>Ins</td><td>двумя женщинами</td><td>пятью женщинами</td><td>Ins</td><td>Ins</td></tr>
<tr><td>Loc</td><td>двух женщинах</td><td>пяти женщинах</td><td>Loc</td><td>Loc</td></tr>
</table>

We can say that the noun has the case of the whole phrase if it is in the Dative, Instrumental, or Locative case. 
The numeral then agrees with the noun in case.
The numeral forces the noun to the Genitive case if the whole phrase is in the Nominative and Accusative case.
(NB In the Vocative case, the phrase would behave like in the Nominative case, but the Vocative usage is rather hypothetical).
In Genitive, the noun and the numeral agree with each other; but note that the numeral uses its
inflected form, as in the other cases where it agrees with the noun.

Pronominal quantifiers behave as high-value numerals and govern the quantifed nouns:

- _<b>Сколько</b> мужчин играло в карты?_ “How many men played cards?”
- _<b>Несколько</b> (<b>много</b>, <b>мало</b>) мужчин играло в карты._ “Several (many, few) men played cards.”
- _<b>Столько</b> мужчин, играющих в карты, я никогда не видел._ “I have never seen so many men playing cards.”

Examples:
~~~ sdparse
Три мужчины играли в карты . \n Three men played cards .
nummod:gov(мужчины, Три)
nsubj(играли, мужчины)
dobj(играли, карты)
case(карты, в)
punct(играли, .-6)
nummod:gov(men, Three)
nsubj(played, men)
dobj(played, cards)
punct(played, .-12)
~~~

~~~ sdparse
Пять мужчин играло в карты . \n Five men played cards .
nummod:gov(мужчин, Пять)
nsubj(играло, мужчин)
dobj(играло, карты)
case(карты, в)
punct(играло, .-6)
nummod:gov(men, Five)
nsubj(played, men)
dobj(played, cards)
punct(played, .-12)
~~~

~~~ sdparse
Сколько мужчин играло в карты ? \n How-many men played cards ?
det:numgov(мужчин, Сколько)
nsubj(играло, мужчин)
dobj(играло, карты)
case(карты, в)
punct(играло, ?-6)
det:numgov(men, How-many)
nsubj(played, men)
dobj(played, cards)
punct(played, ?-12)
~~~

~~~ sdparse
Играл я в карты с пятью мужчинами . \n Played I cards with five men .
nsubj(Играл, я)
dobj(Играл, карты)
case(карты, в)
iobj(Играл, мужчинами)
case(мужчинами, с)
nummod(мужчинами, пятью)
punct(Играл, .-8)
nsubj(Played, I)
dobj(Played, cards)
iobj(Played, men)
case(men, with)
nummod(men, five)
punct(Played, .-16)
~~~

~~~ sdparse
Не помню , со сколькими мужчинами я играл в карты . \n Not I-remember , with how-many men I played cards .
neg(помню, Не)
ccomp(помню, играл)
punct(играл, ,-3)
nsubj(играл, я)
dobj(играл, карты)
case(карты, в)
iobj(играл, мужчинами)
case(мужчинами, со)
det:nummod(мужчинами, сколькими)
punct(помню, .-11)
neg(I-remember, Not)
ccomp(I-remember, played)
punct(played, ,-15)
nsubj(played, I)
dobj(played, cards)
iobj(played, men)
case(men, with)
det:nummod(men, how-many)
punct(I-remember, .-22)
~~~



## Additional remarks

_Миллион_ “million” and _миллиард_ “billion” are tagged as a [NOUN](ru-pos/NOUN). In the typical case, such words take the Genitive, it is preceded by a smaller number,
and it is not followed by smaller numerals (as it is in _million five hundred thousand_).
It is followed by the counted noun and gets the following analysis:

~~~ sdparse
50 миллионов крон \n 50 millions of-crowns
nummod:gov(миллионов, 50-1)
nummod:gov(millions, 50-5)
nmod(миллионов, крон)
nmod(millions, of-crowns)
~~~

On the other hand the word _тысяча_ “thousand” may be a noun
(_на площади были тысячи людей_ “there were thousands of people in the square”)
or a numeral:

~~~ sdparse
максимум 50 тысяч крон \n at-most 50 thousand crowns
advmod(крон, максимум)
nummod:gov(крон, тысяч)
compound(тысяч, 50-2)
advmod(crowns, at-most)
nummod:gov(crowns, thousand)
compound(thousand, 50-7)
~~~

Note that the two numeral words in the above example are joined using the [compound]() relation.
Also note that the [intensifier](advmod:emph) _максимум_ is attached to the head of the phrase _(крон)_ and not to the number.

Similarly there may be other nodes (such as punctuation) that are attached to the head of the phrase
and they are related to the whole phrase rather than directly to the head noun:

~~~ sdparse
( 9 дней ) \n ( 9 days )
punct(дней, (-1)
nummod:gov(дней, 9-2)
punct(дней, )-4)
punct(days, (-6)
nummod:gov(days, 9-7)
punct(days, )-9)
~~~

~~~ sdparse
5 минут с установкой \n 5 minutes including adjustment
nummod:gov(минут, 5-1)
nmod(минут, установкой)
case(установкой, с)
nummod:gov(minutes, 5-6)
nmod(minutes, adjustment)
case(adjustment, including)
~~~

## Dates

~~~ sdparse
Директор предложил расформировать персонал к 31 . 12 . \n Director proposed to-disband the-staff towards 31 st December .
advmod(расформировать, 12)
case(12, к)
punct(12, .-9)
nummod(12, 31-6)
punct(31-6, .-7)
advmod(to-disband, December)
case(December, towards)
punct(December, .-19)
nummod(December, 31-16)
punct(31-16, st)
~~~

## Numbered objects

House number in address is attached as `nummod` to the name of the street:

~~~ sdparse
в доме на Тверской 12 \n in the-building in Tverskaya 12
nmod(доме, Тверской-4)
case(Тверской-4, на-3)
nummod(Тверской-4, 12-5)
nmod(the-building, Tverskaya)
case(Tverskaya, in)
nummod(Tverskaya, 12-11)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:58 CEST 2020 -->
