---
layout: relation
title:  'advcl:relcl'
shortdef : 'adverbial relative clause modifier'
udver: '2'
---

`advcl:relcl` connects a clause to an adverb, adjective or possibly a verb.
Usually the verb is marked by the relative particle _a_ but this may be omitted in speech.

### Examples

Clauses related to comparatives (this is most common in the corpus):

~~~ sdparse
nas fheàrr na tha sinn fhìn
advcl:relcl(tha, fheàrr)
mark:prt(na, tha)
nsubj(sinn, tha)
~~~
'better than we are ourselves' (f05_007)

and adverbs of time:
~~~ sdparse
gun robh uaireigin a bhiodh a athair o chionn fada a' rèic èisg
advcl:relcl(bhiodh, uaireigin)
mark:prt(a, bhiodh)
nsubj(athair,bhiodh)
~~~
'that sometimes his father long ago would sell fish' (c08_046)


### Related deprels

* [acl:relcl](acl-relcl.html) for the analogous case where the head is a noun phrase.
* [csubj:cleft](csubj-cleft.html) for where a relative clause is part of a cleft sentence.
* [csubj:cop](csubj-cop.html) for where a relative clause is part of a different sort of sentence including a copula.
<!-- Interlanguage links updated So 10. května 2025, 18:14:50 CEST -->
