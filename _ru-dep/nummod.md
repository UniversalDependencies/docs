---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
---

A numeric modifier of a noun is any [number](ru-pos/NUM) phrase
that serves to modify the meaning of the noun with a quantity.

~~~ sdparse
Ян съел три стейка . \n Jan ate three steaks .
nummod(стейка, три)
nummod(steaks, three)
~~~



## Agreement and government with Russian quantifiers

The morphological and syntactic behavior of Russian numerals is a complex matter.
Small cardinal numerals _один_ “one”, _два_ “two”, _три_ “three” and _четыре_ “four” agree with the counted
noun in case (_один_ also agrees in gender and number;
_два_ also agrees in gender).
They behave as if they modify the counted noun; they are similar to adjectives in this respect.
Examples:

- _<b>Один</b> мужчина спал, <b>два</b> мужчины играли в карты._ “One man slept, two men played cards.”
- _<b>Одна</b> женщина спала, <b>две</b> женщины играли в карты._ “One woman slept, two women played cards.”
- _<b>Одно</b> чудовище спало, <b>два</b> чудовища играли в карты._ “One monster slept, two monsters played cards.”

It is straightforward to convert such dependencies to `nummod`:

~~~ sdparse
Одно чудовище спало . \n One monster slept .
nummod(чудовище, Одно)
nsubj(спало, чудовище)
punct(спало, .-4)
nummod(monster, One)
nsubj(slept, monster)
punct(slept, .-9)
~~~

The numeral does not govern the noun in all morphological cases.
The following table shows the case of the whole phrase (numeral + noun; first column)
and the consequences for the case of the parts (note that these numerals have only
three distinct morphological forms, resulting in homonymy).

<table>
<tr><th>Phrase Case</th><th>Example</th><th>Numeral Case</th><th>Noun Case</th></tr>
<tr><td>Nom</td><td>пять мужчин</td>   <td>Nom</td><td>Gen</td></tr>
<tr><td>Gen</td><td>пяти мужчин</td>  <td>Gen</td><td>Gen</td></tr>
<tr><td>Dat</td><td>пяти мужчинам</td> <td>Dat</td><td>Dat</td></tr>
<tr><td>Acc</td><td>пять мужчин</td>   <td>Acc</td><td>Gen</td></tr>
<tr><td>Voc</td><td>пять мужчин</td>   <td>Voc</td><td>Gen</td></tr>
<tr><td>Loc</td><td>пяти мужчинах</td><td>Loc</td><td>Loc</td></tr>
<tr><td>Ins</td><td>пятью мужчинами</td>  <td>Ins</td><td>Ins</td></tr>
</table>

We can say that the noun has the case of the whole phrase if it is dative, locative or instrumental.
The numeral then agrees with the noun in case.
The numeral forces the noun to the genitive case if the whole phrase is nominative, accusative or vocative
(but the vocative usage is rather hypothetical).
In genitive, the noun and the numeral agree with each other; but note that the numeral uses its
inflected form, as in the other cases where it agrees with the noun.

Pronominal quantifiers behave as high-value numerals and govern the quantifed nouns:

- _<b>Сколько</b> мужчин играло в карты?_ “How many men played cards?”
- _<b>Несколько</b> (<b>много</b>, <b>мало</b>) мужчин играло в карты._ “Several (many, few) men played cards.”
- _<b>Столько</b> мужчин, играющих в карты, я никогда не видел._ “I have never seen so many men playing cards.”

The UD conversion uses a structure that is parallel among all the above cases,
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

In the typical case, million is tagged as a [NOUN](ru-pos/NOUN) in genitive, it is preceded by a smaller number,
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
advmod:emph(крон, максимум)
nummod:gov(крон, тысяч)
compound(тысяч, 50-2)
advmod:emph(crowns, at-most)
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
в доме на Тверской 12 \n in the-house at Tverskaya 12
nmod(доме, Тверской-4)
case(Тверской-4, на-3)
nummod(Тверской-4, 12-5)
nmod(the-house, Tverskaya)
case(Tverskaya, at)
nummod(Tverskaya, 12-11)
~~~
