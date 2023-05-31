---
layout: relation
title: 'advcl:relcl'
shortdef: 'double pronoun construction or free relative acting as oblique argument'
udver: '2'
---

This syntactic subrelation (also implemented for [csubj](la-dep/ccomp-relcl), [ccomp](la-dep/advcl-relcl) and [xcomp](la-dep/xcomp-relcl)) is used to distinguish a so-called free [relative clause](la-dep/acl-relcl) from other occurrences of [clauses acting as arguments](la-dep/advcl) in another matrix clause, according to its function. 

This is a kind of relative clause that might be interpreted as having an internal head which, in Latin, is always represented by a relative [relative](la-feat/PronType#Rel) [pronoun](la-pos/PRON) (typically, but not limited to, *qui*). Such pronoun is said to be "double" because it is seen to have a twofold function: one as argument inside the free relative clause, and one inside the matrix clause, the latter being the same function carried out by the whole clause itself (which is thus subordinate). There appear to be strong constraints for a similar construction, in that the relative pronoun has to assume the same identical forms in both functions, even they are different inside and outside of the free relative clause: e.g., a *quod* ([neuter](la-feat/Gender) [singular](la-feat/Number) [nominative/accusative](la-feat/Case)) can act indifferently in any combination of [(passive) subject](la-dep/nsubj) or [object](la-dep/obj) in the relative or the matrix clause; conversely, the occurrence of *quibus* (any [gender](la-feat/Gender) [plural](la-feat/Number) [dative/ablative](la-feat/Case)) should be ruled out to occur e.g. as [oblique](la-dep/obl) argument in the relative clause and at the same time as object in the matrix clause. Sometimes, however, we observe that this happens. In any case, the double pronoun is annotated morphosyntactically according to its function inside the free relative clause. It is also observed that this pronoun extremely regularly appears at the beginning of the free relative clause: this behaviour seems to be typical for relative(/interrogative) pronouns in general, also for "prototypical" relative clauses (i.e. with an external head).

This subtyped relation currently appears also in Armenian, Western Armenian and Polish but, at least in the former two languages, it is used for cases which are treated by means of [advcl:pred](la-dep/advcl-pred) in the Latin treebanks, i.e. subordinate adverbial clauses which refer through a neuter relative pronoun to their matrix clause as a whole. It is not clear if we are i npresence of the same phenomenon here. 


~~~ sdparse
Cui ergo maxime recta dilectio inesse potest potissimum locum in illo potest habere iustitia ; huiusmodi est Monarcha : ergo eo existente iustitia potissima est vel esse potest
obl:arg(inesse, Cui)
xcomp(potest-7, inesse)
advcl:relcl(potest-12, potest-7)
~~~

'So **the man in whom rightly ordered love can be strongest** is the one in whom justice can have its principal abode; the monarch is such a man; therefore justice is or can be at its strongest when he exists.' (`UDante Mon-107`, *De Monarchia* I xi 13, Dante Alighieri)

* The translation needs to develop the double pronoun *cui* (any gender singular dative form of *qui* 'that, who, which') in two elements: an explicit external head *the man* and the relative nexus *in whom*. It is literally: 'to whom righteous love can belong at the maximum, justice can have the mightiest place in that one'. We notice that the relative pronoun appears embedded two levels below the head of the free relative clause: Latin has no restrictions whatsoever to what can be relativised. 


~~~ sdparse
Unde ipse probat soli Deo competere miracula operari quod autoritate Moysi roboratur ubi cum ventum est ad sciniphes magi Pharaonis naturalibus principiis artificiose utentes et ibi deficientes dixerunt « Digitus Dei est hic »
advmod:lmod(dixerunt, ubi)
advcl:relcl(roboratur, dixerunt)
~~~

'And thus he proves that only God has the power to perform miracles; and this is corroborated by the authority of Moses, **where he tells how**, when confronted with the gnats, Pharoah’s magicians, using natural principles in the service of their arts and failing, said: "This is the finger of God."' (`UDante Mon-243`, *De Monarchia* II iv 2, Dante Alighieri)

* The double relative pronoun here is *ubi* 'where', traditionally labelled as a [locative adverb](la-feat/AdvType#Loc), acting as an oblique argument of location, as the whole clause is in the matrix clause. 


#### Note on the former annotation style

In previous (pre v2.11) versions of some treebanks, especially UDante, the annotation of this construction followed a different logic. Noticing the constraints on the combination of internal and external functions of the relative pronoun, its position and making a parallelism with other relative construction with explicite double pronouns (i.e. *quod* 'what' = *id quod* 'that which'), the double pronoun was promoted as head, marked for its function in the matrix clause, and the rest of the clause made dependent as a relative clause where the relativised position is empty. So, the example above appeared as:


~~~ sdparse
Cui ergo maxime recta dilectio inesse potest potissimum locum in illo potest habere iustitia ; huiusmodi est Monarcha : ergo eo existente iustitia potissima est vel esse potest
obl:arg(potest-12, Cui)
acl:relcl(Cui,potest-7)
xcomp(potest-7, inesse)
~~~

<!-- Interlanguage links updated Út 9. května 2023, 20:03:55 CEST -->
