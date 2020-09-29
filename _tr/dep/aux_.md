---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "tr/dep/aux.html"
---

Use of ``aux`` relation is incosistent across different Turkish  UD
treebank, the information below is out of date, and may not reflect the actual use.

An auxiliary of a clause is a [non-main verb](tr-pos/AUX) of the clause.

In Turkish two verbs, _ol-_ and, in formal registers, _bulun_,
complement the main verb with additional tense/aspect/modality suffixes
that cannot be attached to the main verb due to morphological restrictions
(or sometimes stylistic reasons).

The auxiliary use of _ol-_ is different than its use as a copula,
where the [cop]() relation is used.

We use a subtype of `aux`, [aux:q](aux-q), question particle _mi_.

~~~ sdparse
Yarın çalışıyor olacak . \n He\/she will be working tomorrow
aux(çalışıyor, olacak)
~~~

~~~ sdparse
Okumuş olsa bilirdi . \n He would know if he had read (it) .
aux(Okumuş, olsa)
~~~

~~~ sdparse
Sorumluluğu almış bulunduk . \n He have taken the responsibility
aux(almış, bulunduk)
~~~

We also use `aux` in case bound auxiliary `-abil` is separated from the main verb.

~~~ sdparse
Göremeye de bilirdin . \n You might have also not seen it 
aux(Göremeye, bilirdin)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:19 CEST 2020 -->
