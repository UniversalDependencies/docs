---
layout: base
title:  'Syntax'
permalink: el/overview/specific-syntax.html
---

### Free relatives

Free relative clauses are marked as [ccomp](el-dep/ccomp), [csubj](el-dep/csubj), [advcl](el-dep/advcl) and [advcl](el-dep/advcl), depending on their relation to their verbal or nominal head. 

~~~ sdparse
Για να εντυπωσιάζετε όποιον γνωρίζετε 
ccomp(εντυπωσιάζετε, γνωρίζετε)
dobj(γνωρίζετε, όποιον)
~~~

~~~ sdparse
Όποιος έφυγε , έχασε 
csubj(έχασε, έφυγε)
nsubj(έφυγε, Όποιος)
~~~

~~~ sdparse
Τιμώρησε όποιον μαθητή τον ενοχλούσε 
ccomp(Τιμώρησε, ενοχλούσε)
nsubj(ενοχλούσε, μαθητή)
dobj(ενοχλούσε, τον)
det(μαθητή, όποιον)
~~~

~~~ sdparse
η ενασχόληση με οποιοδήποτε θέμα σε ενδιαφέρει 
acl(ενασχόληση, ενδιαφέρει)
dobj(ενδιαφέρει, σε)
nsubj(ενδιαφέρει, θέμα)
det(θέμα, οποιοδήποτε)
~~~

~~~ sdparse
Έλα όποτε ευκαιρήσεις 
advcl(Έλα, ευκαιρήσεις)
advmod(ευκαιρήσεις, όποτε)
~~~

### Comparatives

For basic comparative constructions, we connect nominal second terms of the comparison via a [nmod]() relation.

~~~ sdparse
το νερό θεωρείται σημαντικότερο από το πετρέλαιο
nmod(σημαντικότερο, πετρέλαιο)
case(πετρέλαιο, από)
~~~

~~~ sdparse
το νερό θεωρείται πιο σημαντικό από το πετρέλαιο
advmod(σημαντικό, πιο)
nmod(σημαντικό, πετρέλαιο)
case(πετρέλαιο, από)
~~~

We use the [advcl]() relation for clausal elements.

~~~ sdparse
εισφέρει περισσότερα από όσα εισπράττει
advcl(περισσότερα, εισπράττει)
mark(εισπράττει, από)
dobj(εισπράττει, όσα)
~~~

**TODO**

More comparative constructions


### Secondary predicates

For obligatory secondary predicates, see [xcomp](el-dep/xcomp).

For optional secondary predicates, see [advcl](el-dep/advcl).

