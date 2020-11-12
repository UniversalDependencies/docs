---
layout: relation
title: 'neg'
shortdef: 'negation modifier'
---

The negation modifier is the relation between the negation word _ne_ and the
word it modifies.

Negation in Czech is most of the time expressed using a bound morpheme (the prefix _ne-_).
Occurrences of the morpheme as a separate word are rare in comparison to other languages,
yet they exist.

~~~ sdparse
Potřeboval čtyřnohého a ne dvounohého přítele . \n He-needed quadrupedal and not bipedal friend .
neg(dvounohého, ne)
neg(bipedal, not)
~~~

Note that the negative determiners (pronouns) are attached as [det](), not `neg`:

~~~ sdparse
Premiér není žádný hlupák . \n The-Prime-Minister is-not no fool .
det(hlupák, žádný)
det(fool, no)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:30 CET 2020 -->
