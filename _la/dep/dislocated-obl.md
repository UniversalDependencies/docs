---
layout: relation
title: 'dislocated:obl'
shortdef: 'dislocated oblique argument'
udver: '2'
---

Through different subtypes of [`dislocated`](u-dep/dislocated) we more precisely identify which argument has been dislocated in the sentence and how it is realized in this position (nominally or clausally). This information is not directly retrievable otherwise from "basic" dependencies, since the `dislocated` relation always depends on the local head. It is also kept distinct from the use of `dislocated` for topicalisations and similar phenomena, which are not directly related to an argument expressed in the matrix clause.

In the translation of the example, the bold passage corresponds to the dislocated element, and the underlined passage to the dislocating one.

~~~ sdparse
omnia quantum ad ipsa ecclesia sancti Andree tam domnicatis casis et rebus quam et massariciis quantas ubique in qualibet locis vel vocabulis ad predicta ecclesia est pertenentes in integrum mihi eas dedisti
case(ecclesia-5, ad-3)
dislocated:obl(pertenentes, ecclesia)
case(ecclesia-25, ad-23)
obl:arg(pertenentes, ecclesia-25)
acl(omnia, pertenentes)
~~~

'all what [pertains to] **to this same church of Saint Andrews**, houses and properties belonging to the demesne as also furnishings - how many and wherever, in any place or location soever they pertain <u>to the aforementioned church</u>, those things you have given me integrally.' (`LLCT dev-s562`)

* this sentence further has a dislocation of the subject, the noun co-ordination *casis et rebus* 'houses and properties' referred to afterwards by the relative pronoun *quantas* 'those many (things)', and also the whole block starting with *omnia* 'all (things)' is a dislocated object resumed by *eas* 'them' (with different [gender](la-feat/Gender): neuter versus feminine, probably implying *res* 'things, properties'). 

<u>Note:</u> in general, the dislocated element does not need to be of the same form as the corresponding argument appearing in the matrix clause, and there can be alternation between clausal and nominal realisations. The subtype of `dislocated` depends on the type of the dislocated element, not on that of the argument in the matrix clause.  




<!-- Interlanguage links updated Út 9. května 2023, 20:04:14 CEST -->
