---
layout: relation
title: 'cop'
shortdef: 'copula'
udver: '2'
---

A copula is the relation between the nominal predicate and the copular verb _<b>եմ</b>/_em_,_ “to be”. The verbs _դառնալ, թվալ, երևալ, ձևանալ, մնալ, հաշվել_ etc. “to become”, despite being counted among copular verbs by some authors (_վերադրառու բայեր, ստորոգելիական վերադիր_),
are not analyzed as `cop`.

We normally take a copula as a dependent of its complement (the nominal predicate).
The nominal predicate is usually a [noun](NOUN), a [pronoun](PRON), an [adjective](ADJ), an [adverb](ADV),
or a [numeral](NUM).

~~~ sdparse
Քո շունչդ է խնկան փոշի \n K’o šownčd ē xnkan p’oši \n Your breath is the dust of incense
cop(փոշի, է)
cop(dust, is)
~~~

~~~ sdparse
ես պզտիկ էի \n es pztik ēi \n I was little
cop(պզտիկ, էի)
cop(little, was)
~~~

~~~ sdparse
նեղերն այս են \n Its signs are these
cop(այս, են)
cop(these, are)
~~~

If the copula is accompanied by other verbal auxiliaries for tense, aspect, etc., then they are also given a flat structure, and taken as dependents of the lexical predicate:

~~~ sdparse
Ժամանակին նա մեծ բանաստեղծ է եղել ։ \n He has been a-great poet long-time-ago . 
cop(բանաստեղծ, է)
cop(poet, been)
aux(բանաստեղծ, եղել)
aux(poet, has)
~~~

Note that infinitive can also be used as nominal predicate with copula.

~~~ sdparse
Որոնց նպատակը դիմացինին ոչնչացնելն է ։ \n Whose goal is to destroy the other person .
cop(ոչնչացնելն, է)
cop(to-destroy, is)
~~~

The nominal predicate may also be expressed using a prepositional phrase, in which the nominal part is the head of the clause.

~~~ sdparse
Նվերը տուփի մեջ է ։ \n The-present is in the-box .
cop(տուփի, է)
cop(the-box, is)
case(տուփի, մեջ)
case(the-box, in)
~~~

Phrases expressing the state of the subject are clear predicates, e.g. _Գյուտը խառնակ մտքերի մեջ էր_ “Gyut was in mixed thoughts”.
Under the v2 guidelines, (prepositional) phrases expressing locations are also considered predicates, to increase parallelism across languages.
Thus the following sentences receive parallel analyses:

- _Հյուղակը հեղեղատի մյուս ափին էր։_ “The hut was on the other side of the torrent.”
- _Նույն տագնապալի վիճակում էր Գոհարը։_ “Gohar was in the same anxious situation.”
- _Նորից իմ սենյակում էր։_ “He-was in my room again.”

In contrast, the following two are no longer parallel:

- _Նա նորից իմ սենյակում էր։_ “He was in my room again.”
- _Նա նորից մնաց իմ սենյակում։_ He stayed in my room again.”

~~~ sdparse
Հյուղակը հեղեղատի մյուս ափին էր ։ \n The-hut was on-the-other side.Dat of-the-torrent .
cop(ափին, էր)
cop(side.Dat, was)
amod(ափին, մյուս)
amod(side.Dat, on-the-other)
nmod:poss(ափին, հեղեղատի)
nmod:poss(side.Dat, of-the-torrent)
nsubj(ափին, Հյուղակը)
nsubj(side.Dat, The-hut)
~~~

~~~ sdparse
Նույն տագնապալի վիճակում էր Գոհարը ։ \n Gohar was in-the-same anxious situation.Loc .
cop(վիճակում, էր)
cop(situation.Loc, was)
amod(վիճակում, տագնապալի)
amod(situation.Loc, anxious)
det(վիճակում, Նույն)
det(situation.Loc, in-the-same)
nsubj(վիճակում, Գոհարը)
nsubj(situation.Loc, Gohar)
~~~

~~~ sdparse
Նա նորից իմ սենյակում էր ։ \n He was in-my room.Loc again .
cop(սենյակում, էր)
cop(room.Loc, was)
advmod:emph(սենյակում, նորից)
advmod:emph(room.Loc, again)
det:poss(սենյակում, իմ)
det:poss(room.Loc, in-my)
~~~

Note, that there is variation for existential constructions with existential verb _կամ_ “be, exist” (see also [AUX]()):

~~~ sdparse
Սեղանի վրա գիրք կա ։ \n There-is a-book on the-table .
nsubj(կա, գիրք)
nsubj(There-is, a-book)
obl(կա, Սեղանի)
obl(There-is, the-table)
case(Սեղանի, վրա)
case(the-table, on)
~~~

Compared to the bare copula:

~~~ sdparse
Գիրքը սեղանի վրա է ։ \n The-book is on the-table .
cop(սեղանի, է)
cop(the-table, is)
nsubj(սեղանի, Գիրքը)
nsubj(the-table, The-book)
case(սեղանի, վրա)
case(the-table, on)
~~~
<!-- Interlanguage links updated St 12. listopadu 2025, 09:21:37 CET -->
