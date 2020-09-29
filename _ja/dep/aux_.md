---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "/ja/dep/_aux"
udver: '2'
---

The dependency type `aux` is used for [auxiliary verbs](AUX) that attach to predicates.

~~~ sdparse
ご飯 を 食べ た 。 \n rice ACC eat PAST .
case(ご飯, を)
dobj(食べ, ご飯)
aux(食べ, た)
punct(食べ, 。)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:19 CEST 2020 -->
