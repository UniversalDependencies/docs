---
layout: relation
title: 'cop'
shortdef: 'copula'
udver: '2'
---

A copula is the relation between the complement of a copular verb and
the copular verb. Copular heads are avoided when possible.

In Komi-Zyrian the copula is represented by the independent copulas вӧвны (preterit) and лоны (future). There is no copula in an affirmative declarative sentence in the present tense. See:

~~~ sdparse
Ме велӧдысь .
nsubj(велӧдысь, Ме)
~~~

However, particle абу is used in a negative declarative sentence in the present.

~~~ sdparse
Ме абу велӧдысь . \n  I'm not a teacher .
nsubj(велӧдысь-3, ме-1)
advmod(велӧдысь-3, абу-2)
~~~

In the preterite and future tenses the copula is obligatory. 

~~~ sdparse
Ме лоа велӧдысь . \n  I will be a teacher .
nsubj(велӧдысь, ме)
cop(велӧдысь, лоа)
~~~

~~~ sdparse
Ме вӧлі велӧдысь . \n  I was a teacher .
nsubj(велӧдысь-3, Ме-1)
cop(велӧдысь-3, вӧлі-2)
~~~

In the negative declarative sentences the negation verb is used, as normally in Komi with verbs.

~~~ sdparse
Ме эг вӧв велӧдысь . \n  I wasn't a teacher .
nsubj(велӧдысь-4, Ме-1)
aux(велӧдысь-4, эг-2)
cop(велӧдысь-4, вӧв-3)
~~~

~~~ sdparse
Ме ог ло велӧдысь . \n  I will_not be teacher .
nsubj(велӧдысь-4, Ме-1)
aux(велӧдысь-4, ог-2)
cop(велӧдысь-4, ло-3)
~~~

In locative and existential predication negative абу is also used: 

~~~ sdparse
Менам абу кань .
obl(кань, Менам)
advmod(кань, абу)
~~~

