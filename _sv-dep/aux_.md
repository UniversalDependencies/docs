---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "sv/dep/aux.html"
---

An auxiliary of a clause is a [non-main verb](sv-pos/AUX) of the
clause.

Exception: Auxiliary verb used to construct the passive
[voice](sv-feat/Voice) is not labeled `aux` but [auxpass]().

~~~ sdparse
vilka funktioner den tidigare har haft \n which functions it previously has had
aux(haft, har)
~~~

~~~ sdparse
Vilka konsekvenser kan det ha ? \n what consequences can this have ?
aux(ha, kan)
~~~


