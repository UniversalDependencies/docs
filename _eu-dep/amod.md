---
layout: relation
title: 'amod'
shortdef: 'adjectival modifier'
---

Nouns may take adjectival modifiers, which are marked with the
dependency type `amod`. Most of the adjectives appear after the noun they modify, though some of them may appear before.

* English:

The change has caused huge discussions . 

* Basque:

Eztabaida handiak sortu ditu aldaketak .

*Discussion huge-pl cause aux-trans-present change-erg.*

~~~ sdparse
Eztabaida handiak sortu ditu aldaketak .

amod(Eztabaida-1, handiak-2)
nobj(sortu-3, Eztabaida-1)
aux(sortu-3, ditu-4)
nsubj(sortu-3, aldaketak-5)
~~~


* English:

Derartu Tulu made the last 400 meters in one minute . 

* Basque:

Azkeneko 400 metroak minutu batean osatu zituen Derartu Tuluk .

*Last 400 meters minute one make aux-trans-past Derartu Tulu-erg.*

~~~ sdparse
Azkeneko 400 metroak minutu batean osatu zituen Derartu Tuluk .

amod(metroak-3, Azkeneko-1)
nummod(metroak-3, 400-2)
nobj(osatu-6, metroak-3)
nmod(osatu-6, minutu-4)
nummod(minutu-4, batean-5)
aux(osatu-6, zituen-7)
name(Derartu-8, Tuluk-9)
nsubj(osatu-6, Derartu-8)
~~~
