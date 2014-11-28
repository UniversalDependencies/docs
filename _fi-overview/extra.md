---
layout: base
title:  'Syntax'
permalink: fi/overview/extra.html
---

# Extra material

This page contains material from the TDT guidelines that has not yet
been incorporated into the primary UD Finnish documentation. The
following should *not* be considered part of the UD Finnish
guidelines.

---

(The following section was lifted from the TDT documentation for
`rel`, which is removed in UD Finnish. See
<https://github.com/UniversalDependencies/docs/issues/73> for more
information.)

In TDT, the *relativizer* (`rel`) is the head of the phrase containing
the relative pronoun (or other relative word). Most often, but not
always, this is the relative word itself. The governor of the
dependency is the main predicate of the relative clause.

For UD Finnish, relative markers are be mapped to the syntactic role
that the relative is playing in the relative clause, such as `nsubj`
or `dobj`. This information is present in the second annotation layer
of the TDT corpus.

<!-- TODO Annotation of relative clauses is more closely examined in Section [relclauses](#sec-relclauses). -->

**NOTE**: this is TDT example using `rel`, not a UD Finnish example.

<!-- fname:rel_basic.pdf -->
~~~ sdparse
Auto , joka ohitti meidät , ajoi hyvin nopeasti . \n The_car , which passed us , drove very fast .
rcmod(Auto-1, ohitti-4)
punct(ohitti-4, ,-2)
rel(ohitti-4, joka-3)
dobj(ohitti-4, meidät-5)
punct(ohitti-4, ,-6)
nsubj(ajoi-7, Auto-1)
advmod(ajoi-7, nopeasti-9)
advmod(nopeasti-9, hyvin-8)
punct(ajoi-7, .-10)
~~~

**NOTE**: this is TDT example using `rel`, not a UD Finnish example.

<!-- fname:rel_phrase.pdf -->
~~~ sdparse
Nainen , jonka auto hajosi , pyysi apuamme . \n The_lady , whose car broke , asked_for our_help .
rcmod(Nainen-1, hajosi-5)
punct(hajosi-5, ,-2)
poss(auto-4, jonka-3)
rel(hajosi-5, auto-4)
punct(hajosi-5, ,-6)
nsubj(pyysi-7, Nainen-1)
dobj(pyysi-7, apuamme-8)
punct(pyysi-7, .-9)
~~~
