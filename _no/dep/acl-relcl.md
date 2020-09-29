---
layout: relation
title: 'acl:relcl'
shortdef: 'relative clause'
---
This language-specific relation is used for relative clauses in Norwegian and the `acl:relcl` relation is assigned to the main predicate of the relative clause. Relative clauses modify a nominal element and are often initiated by the relative pronoun *som* "that" which is assigned a nominal relation to the main predicate of the relative clause.

~~~ sdparse
Jeg har en venn som kjenner deg \n I have a friend who knows you
acl:relcl(venn,kjenner)
nsubj(kjenner,som)
~~~

~~~ sdparse
Jeg har en venn som du kjenner \n I have a friend whom you know
acl:relcl(venn,kjenner)
dobj(kjenner,som)
~~~

~~~ sdparse
Jeg kjenner han som du danset med \n I know he who you danced with
acl:relcl(han,danset)
nmod(danset,som)
~~~

The relative pronoun may be omitted when it stands in a non-subject relation to the predicate of the relative clause:

~~~ sdparse
Jeg har en venn du kjenner \n I have a friend you know
acl:relcl(venn,kjenner)
~~~

Note that due to the analysis of the copula construction ([cop]()), the main predicate of a relative clause may also be an adjective or even a noun:

~~~ sdparse
Jeg har en venn som er morsom \n I have a friend who is funny
acl:relcl(venn,morsom)
~~~

~~~ sdparse
Jeg har en venn som er en dyktig snekker \n I have a friend who is a good carpenter
acl:relcl(venn,snekker)
~~~

<!-- Interlanguage links updated Út zář 29 20:31:40 CEST 2020 -->
