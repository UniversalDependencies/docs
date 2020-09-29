---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
udver: '2'
---

An open clausal complement (`xcomp`) of a verb or an adjective is a
predicative or clausal complement without its own subject. The
reference of the subject is necessarily determined by an argument
external to the xcomp (normally by the subject of the next higher
clause). This is often referred to as *obligatory control*. 
These complements are always non-finite, and they are
complements (arguments of the higher verb or adjective) rather than
adjuncts/modifiers, such as a purpose clause. The name `xcomp` is
borrowed from Lexical-Functional Grammar.

~~~ sdparse
Nechceš si zaplavat ? \n Don't-you-want yourself to-swim ?
xcomp(Nechceš, zaplavat)
xcomp(Don't-you-want, to-swim)
~~~

~~~ sdparse
Začal jsem tam pracovat včera . \n Started I-have there to-work yesterday .
xcomp(Začal, pracovat)
xcomp(Started, to-work)
~~~

Note that the above condition “without its own subject” does not mean that a 
clause is an `xcomp` just because its subject is not _overt._
The subject must be necessarily inherited from a fixed position in the higher clause.
That is, there should be no available interpretation where the subject of the lower clause may be distinct
from the specified role of the upper clause.
In cases where the missing subject may or must be distinct from a fixed role in the higher clause,
[ccomp]() should be used instead, as below.  This includes cases of arbitrary subjects and anaphoric control.

~~~ sdparse
Šéf nařídil vykopat příkop . \n Boss ordered to-dig ditch .
ccomp(nařídil, vykopat)
ccomp(ordered, to-dig)
~~~

Pro-drop languages have clauses where the subject is not present as a separate word,
yet it is inherently present (and often deducible from the form of the verb)
and it does not depend on arguments from a higher clause.
Thus in neither of the following two Czech examples is there any overt subject,
yet only the second example contains an `xcomp`.

~~~ sdparse
Píšu , protože jsem to slíbil . \n I-write , because I-have it promised .
advcl(Píšu, slíbil)
advcl(I-write, promised)
~~~

~~~ sdparse
Slíbil jsem psát . \n Promised I-have to-write .
xcomp(Slíbil, psát)
xcomp(Promised, to-write)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:37 CEST 2020 -->
