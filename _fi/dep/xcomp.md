---
layout: relation
title:  'xcomp'
shortdef : 'open clausal complement'
---

The dependency type `xcomp` is reserved for clausal complements which have an external subject, that is, whose subject is shared with the complemented verb (a phenomenon also known as subject control). Note that the subject of the complementing clause must be the *subject* of the complemented verb, not any other sentence element (in other cases the dependency type [xcomp:ds]() should be used instead). These complements are always non-finite.

<!-- fname:xcomp.pdf -->
~~~ sdparse
Hän alkoi hakata halkoja . \n He started chopping the_wood .
nsubj(alkoi-2, Hän-1)
xcomp(alkoi-2, hakata-3)
dobj(hakata-3, halkoja-4)
punct(alkoi-2, .-5)
~~~

Many of the complements with an external subject resemble cases that are analyzed as main verbs with auxiliaries. Both auxiliaries and `xcomp` complements share their subject with another verb, but only a closed list of verbs are analyzed as auxiliaries (see [aux]()). Note also that in auxiliary cases the second verb is the governor, whereas with `xcomp` the first verb becomes governor (unless the word order is inverse).

### Secondary predicates

The `xcomp` relation is also used in constructions that are known as _secondary predicates_ or _predicatives_, which are core arguments of the predicate. Most commonly these are adjetives, but also participial and nominal arguments are possible. For example in the sentence _Hän teki siitä hyvin vaikeaa_ there are two mixed predicates: 1) _hän teki jotain_, and 2) _se on vaikeaa_. The secondary predication can be provided to any higher clause element.

~~~ sdparse
Hän teki siitä hyvin vaikeaa . \n He made (from_)it very difficult .
nsubj(teki, Hän)
nmod(teki, siitä)
advmod(vaikeaa, hyvin)
xcomp(teki, vaikeaa)
punct(teki, .)
~~~

~~~ sdparse
Minulla oli mukavaa .
xcomp(oli, mukavaa)
nmod(oli, Minulla)
punct(oli, .)
~~~

Note: Adjectival complements correspond to `acomp` (adjectival complement) in
the original Stanford Dependencies and the Turku Dependency
Treebank.

####Diffs

Secondary predication is not recognized in FinnTreeBank (FI_FTB).
Therefore `xcomp` is always a non-finite verb
(or a predicative of a non-finite copular clause) in FI_FTB.
As the examples above represent types of result and state clauses
([ISK § 891](http://scripta.kotus.fi/visk/sisallys.php?p=891)),
in FI_FTB they have been annotated using predicatives
(see chapter Copulas in [Specific constructions](http://universaldependencies.org/fi/overview/specific-syntax.html)).
<!-- Interlanguage links updated Út zář 29 20:23:45 CEST 2020 -->
