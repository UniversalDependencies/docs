---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
udver: '2'
---

An adverbial clause modifier is a clause which modifies a verb or other predicate (adjective, etc.),
as a modifier not as a core complement. This includes things such as a temporal clause, consequence, conditional clause, purpose
clause, etc. The dependent must be clausal (or else it is an [advmod]()) and the dependent is the main predicate of the clause.

~~~ sdparse
The accident happened as night was falling
advcl(happened, falling)
~~~

~~~ sdparse
If you know who did it, you should tell the teacher
advcl(tell, know)
~~~

~~~ sdparse
He talked to him in order to secure the account
advcl(talked, secure)
~~~

~~~ sdparse
He was upset when I talked to him
advcl(upset, talked)
~~~

~~~ sdparse
They heard about you missing classes.
advcl(heard, missing)
~~~

~~~ sdparse
With the kids in school , I have plenty of free time
advcl(have, school)
mark(school, With)
nsubj(school, kids)
case(school, in)
~~~

~~~ sdparse
She entered the room while sad
advcl(entered, sad)
~~~

## Modifying Nominal Predicates

An `advcl` never modifies a nominal as such (then it would be [acl]() instead) but it can modify a clausal predicate
that is realized as a nominal, with or without copula. One has to distinguish whether the modifier clause modifies the
whole predication of the matrix clause, or just the entity denoted by the nominal. Hence we have `advcl` in

~~~ sdparse
He is a teacher , although he no longer teaches .
advcl(teacher, teaches)
~~~

but [acl:relcl]() in

~~~ sdparse
He is a teacher whom the students really love .
acl:relcl(teacher, love)
~~~

## Optional Depictives

This relation is also used for optional depictive adjectives, where the adjective is introduced in clause structure independently of the nominal it describes (contrast: [acl]() if the adjective is an adnominal predicate). The depictive adjective is treated as an adverbial clause modifier of the higher clause. The adjective also provides a secondary predication, where the nominal predicand may or may not be overt; if it is overt, the secondary predication can be represented with an enhanced dependency. See [xcomp]() for further discussion of resultatives and depictives.

~~~ sdparse
She entered the room sad
advcl(entered, sad)
~~~

*Sad* describes the person entering the room, not the manner of entering—but is still taken to modify the verb.
Note the similarity to the *while sad* example above. Omitting the nominal predicand *she* does not change the basic analysis:

~~~ sdparse
Entering the room sad is not recommended
advcl(Entering, sad)
~~~

<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:17 CET -->
