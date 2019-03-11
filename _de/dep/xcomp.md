---
udver: '2'
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
---

An open clausal complement (xcomp) of a verb or an adjective is a predicative or clausal complement without its own subject. The reference of the subject is necessarily determined by an argument external to the xcomp (normally by the object of the next higher clause, if there is one, or else by the subject of the next higher clause). 

In many cases, the clause is an infinitive verb, with or without zu (infinitive to).

~~~ sdparse
Er versucht , sie zu verführen .
nsubj(versucht, Er)
xcomp(versucht, verführen)
obj(verführen, sie)
mark(verführen, zu)
~~~

~~~ sdparse
Er ließ alle Demonstranten verhaften .
xcomp(ließ, verhaften)
~~~

~~~ sdparse
Er blieb dort stehen .
xcomp(blieb, stehen)
~~~

~~~ sdparse
Ich lerne tanzen .
xcomp(lerne, tanzen)
~~~

Note that in some cases the open clausal complement is an adjective or a noun.

~~~ sdparse
Wir machen uns selbstständig .
xcomp(machen, selbstständig)
~~~

~~~ sdparse
Ich fühle mich gezwungen , dies zu tun .
xcomp(fühle, gezwungen)
~~~

~~~ sdparse
Ich finde es toll , dass ...
xcomp(finde, toll)
~~~

~~~ sdparse
Sie nennt ihren Hund Waldi .
xcomp(nennt, Waldi)
~~~

