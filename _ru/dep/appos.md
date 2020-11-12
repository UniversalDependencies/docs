---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
---

An appositional modifier of a noun is a nominal immediately following the first noun that serves to define or modify that noun. It includes parenthesized examples, as well as defining abbreviations in one of these structures.

~~~ sdparse
Карл Четвертый , римский император и чешский король , царствовал в XIV веке . \n Charles IV , Roman Emperor and Czech king , ruled in 14th century .
appos(Карл, император)
appos(Charles, Emperor)
conj(император, король)
conj(Emperor, king)
~~~

~~~ sdparse
Польская Социалистическая Партия ( ПСП ) \n Polish Socialist Party ( PSP )
appos(Партия, ПСП)
appos(Party, PSP)
~~~

There is a slight deviation from the [universal](u-dep/appos) standard in case of more than one appositive nominal.
Instead of attaching them all to the first noun, all the appositive modifiers are put together in coordination,
then attached as `appos` to the modified noun.
This is done regardless whether the appositives are joined by a coordinating conjunction or just a comma.

~~~ sdparse
Пришел Михаил , мой брат и кузен Давида . \n Came Mikhail , my brother and cousin of-David .
appos(Михаил, брат)
appos(Mikhail, brother)
conj(брат, кузен)
conj(brother, cousin)
~~~

~~~ sdparse
Михаил , мой брат , кузен Давида , придет завтра . \n Mikhail , my brother , cousin of-David , will-come tomorrow .
appos(Михаил, брат)
appos(Mikhail, brother)
conj(брат, кузен)
conj(brother, cousin)
~~~

`appos` is also used to link key-value pairs in addresses, signatures, etc. (see also the [list]() label):

~~~ sdparse
Иван Петров , тел . : 8(495)-000-11-22 , e-mail : petrov@mail.ru
name(Иван, Петров)
list(Иван, тел)
list(Иван, e-mail)
appos(тел, 8(495)-000-11-22-7)
appos(e-mail, petrov@mail.ru)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:13 CET 2020 -->
