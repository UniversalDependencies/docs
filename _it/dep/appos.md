---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
udver: '2'
---

An appositional modifier of a noun is a nominal immediately following the first noun that serves to define or modify that noun. It includes parenthesized examples, as well as defining abbreviations.

~~~ sdparse
una società italo libica , la Gatoil
appos(società, Gatoil)
~~~
~~~ sdparse
la ragazza , figlia dei custodi del caseggiato dove abita
appos(ragazza, figlia)
~~~
~~~ sdparse
" Mondo Giusto " , una organizzazione non governativa
appos(Mondo, organizzazione)
~~~
~~~ sdparse
una giovane turista , Tiziana Amone di 20 anni
appos(turista, Tiziana)
~~~

In case of more than one appositive nominal, all nouns should be marked as modifying the first noun, rather than being chained:

~~~ sdparse
due ordigni , il primo destinato a Hiroshima ; il secondo , tre giorni dopo , a Nagasaki .
appos(ordigni, primo)
appos(ordigni, secondo)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:08 CEST 2020 -->
