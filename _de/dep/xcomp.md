---
udver: '2'
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
---

An open clausal complement (xcomp) of a verb or an adjective is a predicative or clausal complement without its own subject. The reference of the subject is necessarily determined by an argument external to the xcomp (normally by the object of the next higher clause, if there is one, or else by the subject of the next higher clause). 

In many cases, the clause is an infinitive verb, with or without zu (infinitive to).

~~~ sdparse
Er versucht , sie zu verführen . \n He is trying to seduce her .
nsubj(versucht, Er)
xcomp(versucht, verführen)
obj(verführen, sie)
mark(verführen, zu)
~~~

~~~ sdparse
Er ließ alle Demonstranten verhaften . \n He got all the demonstrators arrested .
xcomp(ließ, verhaften)
~~~

~~~ sdparse
Er blieb dort stehen . \n He remained standing there .
xcomp(blieb, stehen)
~~~

~~~ sdparse
Ich lerne tanzen . \n I am learning to dance .
xcomp(lerne, tanzen)
~~~

Note that in some cases the open clausal complement is an adjective or a noun.

~~~ sdparse
Wir machen uns selbstständig . \n We make ourselves independent .
xcomp(machen, selbstständig)
~~~

~~~ sdparse
Ich fühle mich gezwungen , dies zu tun . \n I feel forced to do it .
xcomp(fühle, gezwungen)
~~~

~~~ sdparse
Ich finde es toll , dass ... \n I find it great , that ...
xcomp(finde, toll)
~~~

~~~ sdparse
Sie nennt ihren Hund Waldi . \n She calls her dog Waldi .
xcomp(nennt, Waldi)
~~~

<!-- Interlanguage links updated Út zář 29 20:23:45 CEST 2020 -->
