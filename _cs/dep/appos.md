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
Karel IV . , římský císař a český král , vládl ve 14 . století . \n Charles IV . , Roman Emperor and Czech king , ruled in 14 th century .
appos(Karel, císař)
appos(Charles, Emperor)
conj(císař, král)
conj(Emperor, king)
~~~

~~~ sdparse
Občanská demokratická strana ( ODS ) \n Civic Democratic Party ( ODS )
appos(strana, ODS-5)
appos(Party, ODS-12)
~~~

There is a slight deviation from the [universal](u-dep/appos) standard in case of more than one appositive nominal.
Instead of attaching them all to the first noun, all the appositive modifiers are put together in coordination,
then attached as `appos` to the modified noun.
This is done regardless whether the appositives are joined by a coordinating conjunction or just a comma.

~~~ sdparse
Přijel Michal , můj bratr a Davidův bratranec . \n Came Michal , my brother and David's cousin .
appos(Michal-2, bratr)
appos(Michal-12, brother)
conj(bratr, bratranec)
conj(brother, cousin)
~~~

~~~ sdparse
Michal , můj bratr , Davidův bratranec , přijede zítra . \n Michal , my brother , David's cousin , will-come tomorrow .
appos(Michal-1, bratr)
appos(Michal-13, brother)
conj(bratr, bratranec)
conj(brother, cousin)
~~~

`appos` is also used to link key-value pairs in addresses, signatures, etc. (see also the [list]() label):

~~~ sdparse
Jan Novák , tel . : 777-000-111 , e-mail : novak@ab.cz
flat(Jan, Novák)
list(Jan, tel)
list(Jan, e-mail)
appos(tel, 777-000-111)
appos(e-mail, novak@ab.cz)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:08:50 CEST 2021 -->
