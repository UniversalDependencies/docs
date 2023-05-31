---
layout: relation
title: 'csubj:relcl'
shortdef: 'double pronoun construction or free relative acting as subject'
udver: '2'
---

This syntactic subrelation (also implemented for [ccomp](la-dep/ccomp-relcl), [advcl](la-dep/advcl-relcl) and [xcomp](la-dep/xcomp-relcl)) is used to distinguish a so-called free [relative clause](la-dep/acl-relcl) from other occurrences of [clauses acting as arguments](la-dep/csubj) in another matrix clause, according to its function. 

This is a kind of relative clause that might be interpreted as having an internal head which, in Latin, is always represented by a relative [relative](la-feat/PronType#Rel) [pronoun](la-pos/PRON) (typically, but not limited to, *qui*). Such pronoun is said to be "double" because it is seen to have a twofold function: one as argument inside the free relative clause, and one inside the matrix clause, the latter being the same function carried out by the whole clause itself (which is thus subordinate). There appear to be strong constraints for a similar construction, in that the relative pronoun has to assume the same identical forms in both functions, even they are different inside and outside of the free relative clause: e.g., a *quod* ([neuter](la-feat/Gender) [singular](la-feat/Number) [nominative/accusative](la-feat/Case)) can act indifferently in any combination of [(passive) subject](la-dep/nsubj) or [object](la-dep/obj) in the relative or the matrix clause; conversely, the occurrence of *quibus* (any [gender](la-feat/Gender) [plural](la-feat/Number) [dative/ablative](la-feat/Case)) should be ruled out to occur e.g. as [oblique](la-dep/obl) argument in the relative clause and at the same time as object in the matrix clause. Sometimes, however, we observe that this happens. In any case, the double pronoun is annotated morphosyntactically according to its function inside the free relative clause. It is also observed that this pronoun extremely regularly appears at the beginning of the free relative clause: this behaviour seems to be typical for relative(/interrogative) pronouns in general, also for "prototypical" relative clauses (i.e. with an external head).

The use of the subtype `relcl` can in some cases obscure the fact that the clause acts as a passive subject (which would be signalled by the concurring subtype [`pass`](la-dep/csubj-pass)). This is however in most cases retrievable from the context.


~~~ sdparse
Propter quod sciendum primo quod Deus et natura nil otiosum facit sed quicquid prodit in esse est ad aliquam operationem
nsubj(prodit, quicquid)
csubj:relcl(operationem, prodit)
~~~ 

'Consequently the first point to bear in mind is that God and nature do nothing in vain; on the contrary **whatever they bring into being** is designed for a purpose.' (`UDante Mon-21`, *De Monarchia* I iii 3, Dante Alighieri)

* *quicquid* is a neuter singular nominative/accusative form of *quisquis* 'whoever, whatever', which is annotated with `Case=Nom`, as it is the subject of *prodit* 'comes forth', lit. 'whatever comes forth into being'.


~~~ sdparse
Ad illarum vero significata responsio etsi non erit qualem forsan pusillanimitas appeteret aliquorum ut sub examine vestri consilii ante iudicium ventiletur affectuose deposco
obj(appeteret,qualem)
nsubj(appeteret,pusillanimitas)
cop:outer(appeteret,erit)
advcl(deposco,appeteret)
~~~

'My reply to what you have written, although perchance it be not **of such tenour as certain faint hearts would desire**, I earnestly beg may be carefully examined and considered by you before judgement be passed upon it.' (`UDante Epi-218`, *Letters* XII 2, Dante Alighieri)

* This is a case where the free relative appears as non verbal predication with the copula *erit* 'it will be', and with the relative determiner *qualis* 'of which kind', literally: 'even if it will not be of which kind the faintheartedness of some perhaps would strive for'. The `relcl` subtype does not show in the annotation because of this embedding (the couplar construction is an adverbial clause on the whole). However, we observe a mismatch: while the non verbal predicate should show the nominative case, the accusative of the internal object prevails.


#### Note on the former annotation style

In previous (pre v2.11) versions of some treebanks, especially UDante, the annotation of this construction followed a different logic. Noticing the constraints on the combination of internal and external functions of the relative pronoun, its position and making a parallelism with other relative construction with explicite double pronouns (i.e. *quod* 'what' = *id quod* 'that which'), the double pronoun was promoted as head, marked for its function in the matrix clause, and the rest of the clause made dependent as a relative clause where the relativised position is empty. So, the example above appeared as:

~~~ sdparse
Propter quod sciendum primo quod Deus et natura nil otiosum facit sed quicquid prodit in esse est ad aliquam operationem
nsubj(operationem, quicquid)
acl:relcl(quicquid, prodit)
~~~ 







<!-- Interlanguage links updated Út 9. května 2023, 20:04:10 CEST -->
