---
layout: relation
title: 'det'
shortdef: 'determiner'
udver: '2'
---

A determiner is the relation between the head of a noun phrase and its
[determiner](u-pos/DET).

~~~ sdparse
Είναι ένα έργο τέχνης
det(έργο, ένα)
~~~

~~~ sdparse
Ποια ηθοποιός θα ενσαρκώσει τη μυθική Μαρλέν ;
det(ηθοποιός, Ποια)
det(Μαρλέν, τη)
~~~

~~~ sdparse
την καταπληκτική αυτή προβολή που της χάρισε
det(προβολή, αυτή-3)
det(προβολή, την)
amod(προβολή, καταπληκτική)
~~~


~~~ sdparse
όλη αυτή την καταπληκτική προβολή που της χάρισε
det(προβολή, όλη)
det(προβολή, αυτή-2)
det(προβολή, την)
amod(προβολή, καταπληκτική)
~~~

In the case of polydefinites, we attach both definite articles to the nominal head.

~~~ sdparse
το μικρό το αυτοκίνητο
det(αυτοκίνητο, το-1)
det(αυτοκίνητο, το-3)
amod(αυτοκίνητο, μικρό)
~~~

~~~ sdparse
το πουκάμισο το θαλασσί
det(πουκάμισο, το-1)
det(πουκάμισο, το-3)
amod(πουκάμισο, θαλασσί)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:09:01 CEST 2021 -->
