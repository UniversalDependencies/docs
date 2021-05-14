---
layout: relation
title: 'ccomp'
shortdef : 'clausal complement'
udver: '2'
---

*Clausal complement* is an object like clausal dependent. The governor is most
commonly, although not always, the main verb or predicative of the
main clause, and the dependent is the main verb or predicative of the
dependent clause. The clausal complement can also modify a word other
than a verb, most often a noun or pronoun. Most commonly clausal
complements are verbal nouns in accusative or dative.

~~~ sdparse
Ол терезеден Азамат пен Айгүлдің ойнағанына қарап тұр . \n She window-through Azamat and Aygül's playing watching stands .
nsubj(қарап-7, Ол-1)
obl(қарап-7, терезеден-2)
nsubj(ойнағанына-6, Азамат-3)
conj(Азамат-3, Айгүлдің-5)
cc(Айгүлдің-5, пен-4)
ccomp(қарап-7, ойнағанына-6)
aux(қарап-7, тұр-8)
punct(қарап-7, .-9)
~~~

Another example:

~~~ sdparse
Сайттың маңызды екенін түсінбей жатыр . \n Site importance being not-understanding is .
ccomp(түсінбей-4, маңызды-2)
cop(маңызды-2, екенін-3)
nmod:poss(маңызды-2, Сайттың-1)
aux(түсінбей-4, жатыр-5)
punct(түсінбей-4, .-6)
~~~

Note that if the complement is completely controlled by the matrix verb, that
is it does not permit another subject or object, then the relation should be
`xcomp`.

We also use `ccomp` for the complement of reported speech clauses with де- (e.g.
деп, деген, ...)

~~~ sdparse
« Төрге шық , тамақ іш » , - демепті . \n « Tör-to go-back , food drink » , - said-not-they .
ccomp(демепті-10, іш-6)
obj(іш-6, тамақ-5)
conj(іш-6, шық-3)
obl(шық-3, Төрге-2)
punct(демепті-10, .-11)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:08:55 CEST 2021 -->
