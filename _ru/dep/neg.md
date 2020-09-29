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
Она не ест рыбу . \n She not eats fish .
neg(ест, не)
neg(eats, not)
~~~

~~~ sdparse
Ему был нужен четвероногий , а не двуногий друг . \n To-him was needed quadrupedal , and not bipedal friend .
neg(двуногий, не)
neg(bipedal, not)
~~~

Note that the negative determiners (pronouns) are attached as [det](), not `neg`:

~~~ sdparse
Премьер не был никаким дураком . \n The-Prime-Minister not was no fool .
det(дураком, никаким)
det(fool, no)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:55 CEST 2020 -->
