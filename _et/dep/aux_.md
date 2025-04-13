---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "et/dep/aux.html"
udver: '2'
---

An auxiliary of a clause is a non-main verb of the clause, e.g., a modal auxiliary, or an auxiliary in a periphrastic tense.
'olema' and in rare occasions 'saama' are auxiliaries that form periphrastic tense forms. In the current version of Estonain UD, only 'saama', 'võima', 'pidama', 'näima', 'paistma', 'tunduma' are regarded as modal auxiliaries. Also negative particles 'ei', 'ära', 'ärge', 'ärgem', 'ärgu' have been tagged as `aux`.

* Tense
~~~ sdparse
Ta oli seda raamatut juba lugenud . \n He had already read this book .
aux(lugenud,oli)
aux(read, had)
~~~

* Modal
~~~ sdparse
Läänemere piirkonnas võib oodata tugevat majanduskasvu . \n Strong economic growth can be expected in the Baltic Sea region .
aux(oodata,võib)
aux(expected,can)
~~~

* Negative
~~~ sdparse
Tööga ei ole võimalik rikkaks saada . \n It is not possible to become rich by working .
aux(võimalik,ei)
cop(võimalik,ole)
aux(possible, not)
cop(possible,is)
~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:27 CET -->
