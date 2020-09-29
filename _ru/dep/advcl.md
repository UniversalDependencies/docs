---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
---

An adverbial clause modifier is a clause which modifies a verb or other predicate (adjective, etc.),
as a modifier not as a core complement. This includes things such as a temporal clause, consequence, conditional clause, purpose
clause, etc. The dependent must be clausal (or else it is an [advmod]()) and the dependent is the main predicate of the clause.

~~~ sdparse
Если вы знаете , кто это сделал , вы должны сказать учителю . \n If you know , who this did , you have to-tell the-teacher .
advcl(должны, знаете)
advcl(have, know)
~~~

~~~ sdparse
Он спешил , чтобы прийти вовремя . \n He rushed , in-order-to come in-time .
advcl(спешил, прийти)
advcl(rushed, come)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:16 CEST 2020 -->
