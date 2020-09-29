---
layout: relation
title:  'aux'
shortdef : 'auxiliary'
udver: '2'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "en/dep/aux.html"
---

An `aux` (auxiliary) of a clause is a function word associated with a verbal predicate that
expresses categories such as tense, mood, aspect, voice or evidentiality. It is often a verb
(which may have non-auxiliary uses as well).

In English, an auxiliary of a clause is a non-main verb of the clause, e.g., a
modal auxiliary, or a form of *be*, *do* or *have* in a periphrastic
tense. This includes the passive auxiliary, which we give the subtype `aux:pass`.
We allow the *get*-passive (*The book got stolen*) as an
auxiliary, but not other [xcomp]()-taking verbs such as *become*.

(Contrary to the older SD and arguments of Pullum (1982) and following,
infinitive *to* is not analyzed as an auxiliary. Instead, it is analyzed
as a [mark]().)

~~~ sdparse
Reagan has died
aux(died-3, has-2)
~~~

~~~ sdparse
Reagan might have been lying
aux(lying-5, might-2)
aux(lying-5, have-3)
aux(lying-5, been-4)
~~~

~~~ sdparse
He should leave
aux(leave-3, should-2)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:43 CEST 2020 -->
