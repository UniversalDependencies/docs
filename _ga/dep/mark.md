---
layout: relation
title: 'mark'
shortdef: 'marker'
udver: '2'
---

In Irish the `mark` label is used for infinitive markers and for subordinate conjunctions. 
Note that subordinate conjunctions are attached to the head of the complement clause (not the matrix clause as is the case in the Irish Dependency Treebank). In Irish, we also have a language sub-type label [mark:prt](https://universaldependencies.org/ga/dep/mark-prt.html).

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

Note that the coordinating conjunction _agus_ ('and') may function as a subordinating conjunction when it is used to introduce a subordinating clause usually headed by a noun, as shown in the example below. In cases such as this one, _agus_ is labelled `mark`. 

_Sa bhliain san ghaibh na Turcaigh François de Vic <b>agus</b> é ar thuras go dtí Vín._ `The Turkish Army apprehended François de Vic while he was on a trip to Vienna.'

~~~ sdparse
ROOT Sa bhliain san ghaibh na Turcaigh François de Vic agus é ar thuras go dtí Vín \n In_the year that got the Turkish François de Vic and he on trip to [] Vienna
mark(é, agus)
root(ROOT, ghaibh)
advcl(ghaibh, é)
~~~

#### With copular 'ná'

Note that the clause that follows ‘ná’ is an adverbial clause in certain cases like the example below. 

_Is lú fós a bhí radacachas go forleathan in ollscoileanna na hÉireann <b>ná</b> mar a Bhí thar lear._ '  'There is less widespread radicalism in Irish universities than abroad.'

~~~ sdparse
Is lú fós a bhí radacachas go forleathan in ollscoileanna na hÉireann ná mar a Bhí thar lear. \n (COP)is less that radicalsim widespread in universities of Ireland than there_was abroad
cop(lú, Is)
mark(Bhí, ná)
advcl(Bhí, lú)
~~~

#### Infinitive marker

_Caithfidh mé sin <b>a</b> fhoghlaim_ `I will have <b>to</b> learn that'

~~~ sdparse
Caithfidh mé sin a fhoghlaim \n will_have I that to learn
mark(fhoghlaim, a)
~~~ 
<!-- Interlanguage links updated St lis 3 20:58:56 CET 2021 -->
