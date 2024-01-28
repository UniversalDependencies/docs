---
layout: relation
title: 'ccomp:relcl'
shortdef: 'double pronoun construction or free relative acting as object'
udver: '2'
---

This syntactic subrelation (also implemented for [csubj](la-dep/ccomp-relcl), [advcl](la-dep/advcl-relcl) and [xcomp](la-dep/xcomp-relcl)) is used to distinguish a so-called free [relative clause](la-dep/acl-relcl) from other occurrences of [clauses acting as arguments](la-dep/ccomp) in another matrix clause, according to its function. 

This is a kind of relative clause that might be interpreted as having an internal head which, in Latin, is always represented by a [relative](la-feat/PronType#Rel) [pronoun](la-pos/PRON) (typically, but not limited to, *qui*). Such pronoun is sometimes said to be "double", because it apparently has a twofold function: one as argument inside the free relative clause, and one as argument inside the matrix clause, the latter being the same function carried out by the whole clause itself (which is thus subordinate). There appear to be strong constraints for a similar construction, in that the relative pronoun often assumes the same identical forms in both functions, even when these differ inside and outside of the free relative clause: e.g., a *quod* ([neuter](la-feat/Gender) [singular](la-feat/Number) [nominative/accusative](la-feat/Case)) can act indifferently in any combination of [(passive) subject](la-dep/nsubj) or [object](la-dep/obj) in the relative and in the matrix clause; conversely, the occurrence of *quibus* (any [gender](la-feat/Gender) [plural](la-feat/Number) [dative/ablative](la-feat/Case)) might be ruled out to occur e.g. as [oblique](la-dep/obl) argument in the relative clause and at the same time as object in the matrix clause. In data, however, we do observe similar asymmetries. In any case, the "double" pronoun is annotated morphosyntactically according to its function *inside* the free relative clause. We also observe that this pronoun extremely regularly appears at the beginning of the free relative clause: this behaviour seems to be typical for relative(/interrogative) pronouns in general, also for "prototypical" relative clauses (i.e. with an external head).


~~~ sdparse
Ad hoc respondens licteram Mathei et sensum confiteor sed quod ex illa inferre conantur interimo
obj(inferre, quod)
ccomp:relcl(interimo, conantur)
xcomp(conantur,inferre)
~~~ 

'In reply to this, I accept the literal meaning of Matthew and their interpretation of it, but I reject what they try to infer from it.' (`UDante Mon-514`, *De Monarchia* III vii 2, Dante Alighieri)

* *quod* is the neuter singular nominative/accusative form of *qui* 'that, who, which', which is annotated with `Case=Acc`, as it is the object of *inferre* 'inferring'. We notice that the relative pronoun appears embedded two levels below the head of the free relative clause: Latin has no restrictions whatsoever to what element of the clause can be relativised. 



~~~ sdparse
Omnium hominum quos ad amorem veritatis natura superior impressit hoc maxime interesse videtur ut quemadmodum de labore antiquorum ditati sunt ita et ipsi posteris prolaborent quatenus ab eis posteritas habeat quo ditetur
obl:agent(ditetur, quo)
ccomp:relcl(habeat, ditetur)
~~~ 

'For all men whom the Higher Nature has endowed with a love of truth, this above all seems to be a matter of concern, that just as they have been enriched by the efforts of their forebears, so they too may work for future generations, in order that posterity **may be enriched by their efforts**.'

* Literally: 'so that posterity have what it be enriched by', where *quo* is the neuter singular ablative form of *qui* 'that, who, which', which is annotated with `Case=Abl` and acts as the agent of *dito* 'to enrich' in the passive voice. This is a case of (infrequent) mismatch between the two functions of the pronoun: *habeat* 'so that it have' requires an object in the accusative (`Case=Acc`), which cannot coincide in form (here: *quod*) with the agent of a passive verb in the ablative. The "internal" function prevails. 


#### Note on the former annotation style

In previous (pre v2.11) versions of some treebanks, especially UDante, the annotation of this construction followed a different logic. Noticing the apparent constraints on the combination of internal and external functions of the relative pronoun, its position and making a parallelism with other relative constructions with explicite double pronouns (i.e. *quod* 'what' = *id quod* 'that which'), the double pronoun was promoted as head, marked for its function in the matrix clause, and the rest of the clause made dependent as a relative clause where the relativised position is empty. So, the first example above appeared as:

~~~ sdparse
Ad hoc respondens licteram Mathei et sensum confiteor sed quod ex illa inferre conantur interimo
obj(interimo, quod)
acl:relcl(quod,conantur)
xcomp(conantur,inferre)
~~~ 

<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:35 CET -->
