---
layout: relation
title: 'dislocated:ccomp'
shortdef: 'dislocated complement clause'
udver: '2'
---

Through different subtypes of [`dislocated`](u-dep/dislocated) we more precisely identify which argument has been dislocated in the sentence and how it is realized in this position (nominally or clausally). This information is not directly retrievable otherwise from "basic" dependencies, since the `dislocated` relation always depends on the local head. It is also kept distinct from the use of `dislocated` for topicalisations and similar phenomena, which are not directly related to an argument expressed in the matrix clause.

In the translation of the example, the bold passage corresponds to the dislocated element, and the underlined passage to the dislocating one.

~~~ sdparse
In hiis que De fine bonorum inquit enim Tullius hoc de Deciis : Publius Decius princeps in ea familia consul cum se devoveret et equo admisso in mediam aciem Latinorum irruebat aliquid de voluptatibus suis cogitabat ubi ut eam caperet aut quando cum sciret confestim esse moriendum eam que mortem ardentiori studio peteret quam Epycurus voluptatem petendam putat ?
obj(inquit, hoc)
dislocated:ccomp(inquit, cogitabat)
~~~

'For Cicero says <u>this</u> of the Decii in the *De fine bonorum*: **When Publius Decius, first in that family to be consul, offered himself up and charged on his horse at full speed into the thick of the Latin ranks, surely he had no thought of personal pleasure, or where or when he might seize it; for he knew that he was about to die, and sought out death with more passionate eagerness than Epicurus thinks we should devote to seeking pleasure**.' (`UDante Mon-283`, *De Monarchia* II v 16, Dante Alighieri)

* Here the whole, lengthy direct discourse introduced by *inquit* 'he/she/it said' (from *Publius* till *putat*), expressed as a so-called finite clause, is anticipated in the matrix clause by the [demonstrative](la-feat/PronType) [determiner](la-upos/DET) in the neuter singular *hoc* 'that (one)'. The `ccomp` would further need to be specified by the subtype [`reported`](la-dep/ccomp-reported).

<u>Note:</u> in general, the dislocated element does not need to be of the same form as the corresponding argument appearing in the matrix clause, and there can be alternation between clausal and nominal realisations. The subtype of `dislocated` depends on the type of the dislocated element, not on that of the argument in the matrix clause.  




<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:52 CET -->
