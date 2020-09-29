---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
udver: '2'
---

An appositional modifier of a noun is a nominal immediately following
the first noun that serves to define or modify that noun. It includes
parenthesized examples, as well as defining abbreviations in one of
these structures.


~~~ sdparse
Պապը ՝ հայոց արքան , թագավորել է 4-րդ դարում ։ \n Pap , Armenian king , ruled in the 4th century .
appos(Պապը, արքան)
appos(Pap, king)
amod(արքան, հայոց)
amod(king, Armenian)
~~~

~~~ sdparse
Հայ ազգային կոնգրես ( ՀԱԿ ) \n Armenian National Congress ( ANC )
appos(կոնգրես, ՀԱԿ)
appos(Congress, ANC)
~~~

There is a slight deviation from the [universal](u-dep/appos) standard in case of more than one appositive nominal.
Instead of attaching them all to the first noun, all the appositive modifiers are put together in coordination,
then attached as `appos` to the modified noun.
This is done regardless whether the appositives are joined by a coordinating conjunction or just a comma.

~~~ sdparse
Միքայելը ՝ իմ եղբայրն ու Դավիթի զարմիկը , եկավ ։ \n Michael , my brother and David's cousin , arrived .
appos(Միքայելը, եղբայրն)
appos(Michael, brother)
conj(եղբայրն, զարմիկը)
conj(brother, cousin)
cc(զարմիկը, ու)
cc(cousin, and)
~~~

In the rare cases we mark the appositive nominal as modifying the prevoious one (chained apposition):

~~~ sdparse
Միքայելը ՝ իմ եղբայրը ՝ Դավիթի զարմիկը , կգա վաղը ։ \n Michael , my brother , David's cousin , will-arrive tomorrow .
appos(Միքայելը, եղբայրը)
appos(Michael, brother)
appos(եղբայրը, զարմիկը)
appos(brother, cousin)
~~~

Note, that `appos` relation is used, if there is case and agreement concord between the first noun and appositive modifiers. If not, we’ll have [nmod]().

~~~ sdparse
Իմ եղբայր Միքայելը եկավ ։ \n My brother.Indef Michael.Def arrived .
nmod(Միքայելը, եղբայր)
nmod(Michael.Def, brother.Indef)
~~~

`appos` is also used to link key-value pairs in addresses, signatures, etc. (see also the [list]() label):

~~~ sdparse
Պետրոս Պետրոսյան , հեռ . ՝ ( 010 ) 101-010 , էլ . փոստ ՝ petros@petros.am
flat(Պետրոս, Պետրոսյան)
list(Պետրոս, հեռ)
list(Պետրոս, փոստ)
amod(փոստ, էլ)
appos(հեռ, 010)
flat(010, 101-010)
appos(փոստ, petros@petros.am)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:43 CEST 2020 -->
