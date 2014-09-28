---
layout: base
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "ud-dep/aux.html"
---

## aux: auxiliary

An auxiliary of a clause is a <a href="../ud-pos/AUX.html">non-main verb</a> of the clause, e.g., a
modal auxiliary, or a form of _be, do_ or _have_ in a periphrastic tense.

Exception: Auxiliary verb used to construct the passive <a href="../ud-feat/Voice.html">voice</a>
is not labeled `aux` but [auxpass]().

~~~ sdparse
Reagan has died
aux(died-3, has-2)
~~~

~~~ sdparse
He should leave
aux(leave-3, should-2)
~~~

~~~ sdparse
Do you think that he will have left when we come ?
aux(think, Do)
aux(left, will)
aux(left, have)
~~~
