---
layout: entry
title:  'aux'
shortdef : 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "fi/dep/aux.html"
---

In TDT, only a closed list of verbs can act as auxiliaries, including the main modal verbs
(see [ISK §1562](http://scripta.kotus.fi/visk/sisallys.php?p=1562)) and in addition the
verbs _olla_ "to be" and _aikoa_ "to be going to".
The full list of auxiliaries in TDT is thus as follows:

+ _täytyä_ "must"
+ _pitää_ "have to"
+ _tarvita_ "need"
+ _joutua_ "have to"
+ _voida_ "be able to, can"
+ _saattaa_ "may"
+ _taitaa_ "be+probably, may"
+ _mahtaa_ "be+probably, may"
+ _olla_ "be"
+ _aikoa_ "be going to"

<!-- fname:aux.pdf -->
~~~ sdparse
Hän saattoi lähteä jo . \n He may(impf.) leave already .
nsubj(lähteä-3, Hän-1)
aux(lähteä-3, saattoi-2)
advmod(lähteä-3, jo-4)
punct(lähteä-3, .-5)
~~~
