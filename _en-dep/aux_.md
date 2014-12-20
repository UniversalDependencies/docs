---
layout: relation
title:  'aux'
shortdef : 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "en/dep/aux.html"
---

An auxiliary of a clause is a non-main verb of the clause, e.g., a
modal auxiliary, or a form of *be*, *do* or *have* in a periphrastic
tense. 
(Contrary to the older SD and arguments of Pullum (1982) and following,
infinitive *to* is not analyzed as an auxiliary. Instead, it is analyzed
as a [mark]().

~~~ sdparse
Reagan has died
aux(died-3, has-2)
~~~

~~~ sdparse
He should leave
aux(leave-3, should-2)
~~~
