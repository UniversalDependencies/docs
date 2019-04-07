---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "u/dep/aux.html"
udver: '2'
---

An `aux` (auxiliary) of a clause is a function word associated with a verbal predicate that
expresses categories such as tense, mood, aspect, voice or evidentiality. It is often a verb 
(which may have non-auxiliary uses as well) but many languages have nonverbal TAME markers and these
are also treated as instances of `aux`. 

**New from v2:** Auxiliares used to construct the passive [voice](u-feat/Voice) are now also labeled `aux`,
although we strongly encourage the use of the subtype `aux:pass` in language that have a grammaticalized (periphrastic)
passive. 

~~~ sdparse
Reagan has died
aux(died-3, has-2)
~~~

~~~ sdparse
He should leave
aux(leave-3, should-2)
~~~

~~~ sdparse
Do you think that he will have left by the time we come ?
aux(think, Do)
aux(left, will)
aux(left, have)
~~~
