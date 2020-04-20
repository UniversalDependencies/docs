---
layout: relation
title: 'mark'
shortdef: 'marker'
udver: '2'
---

In Irish the `mark` label is used for infinitive markers and for subordinate conjunctions. 
Note that subordinate conjunctions are attached to the head of the complement clause (not the matrix clause as is the case in the Irish Dependency Treebank). In Irish, we also have a language sub-type label [mark:prt](http://universaldependencies.org/docsv1/ga/dep/mark-prt.html).

### Examples

#### Subordinate conjunctions

_<b>Cé</b> go ndeachaigh sé thar fóir leis an tuairim sin , is cinnte go raibh mórán scríobhneoirí Béarla den bharúil chéanna_ `<b>Although</b> he went overboard with that opinion , it was certain that many English writers had the same opinion'

~~~ sdparse
Cé go ndeachaigh sé thar fóir leis an tuairim sin , is cinnte go raibh mórán scríobhneoirí Béarla den bharúil chéanna \n Although that went he over board with the opinion DEM , is certain that was many writers English of_the opinion same
mark(ndeachaigh, Cé)
advcl(is, ndeachaigh)
~~~

_ní raibh cuimhne chruinn againn ar a chéile, <b>ach</b> ghlacamar leis_ 'We do not have a clear memory of eachother, <b>but</b> we accepted it'

~~~ sdparse
ní raibh cuimhne chruinn againn ar a chéile, ach ghlacamar leis \n not was memory clear we_have of_eachother, but we_accepted it
mark(ghlacamar, ach)
advcl(raibh, ghlacamar)
~~~

_Ba ar Mháirín a smaoiníodh sé <b>nuair</b> a d' fheicfeadh sé iad_ `He would think of Máirín <b>when</b> he would see them'

~~~ sdparse
Ba ar Mháirín a smaoiníodh sé nuair a d' fheicfeadh sé iad \n Was on Máirín that would_think he when [] [] would_see he them
mark(fheicfeadh, nuair)
~~~

#### Infinitive marker

_Caithfidh mé sin <b>a</b> fhoghlaim_ `I will have <b>to</b> learn that'

~~~ sdparse
Caithfidh mé sin a fhoghlaim \n will_have I that to learn
mark(fhoghlaim, a)
~~~ 
