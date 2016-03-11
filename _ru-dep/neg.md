---
layout: relation
title: 'neg'
shortdef: 'negation modifier'
---

The negation modifier is the relation between the negation word _не_ and the
word it modifies.

Negation in Russian is most of the time expressed using a bound morpheme (the prefix _не-_).
Occurrences of the morpheme as a separate word are rare in comparison to other languages,
yet they exist.

~~~ sdparse
Ему был нужен четвероногий , а не двуногий друг . \n He needed quadrupedal and not bipedal friend .
neg(двуногий, не)
neg(bipedal, not)
~~~

Note that the negative determiners (pronouns) are attached as [det](), not `neg`:

~~~ sdparse
Premiér není žádný hlupák . \n The-Prime-Minister is-not no fool .
det(hlupák, žádný)
det(fool, no)
~~~

