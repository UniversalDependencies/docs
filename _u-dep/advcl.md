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
With the kids in school , I have plenty of free time
advcl(have, school)
mark(school, With)
nsubj(school, kids)
case(school, in)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:08:46 CEST 2021 -->
