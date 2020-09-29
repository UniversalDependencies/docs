---
layout: relation
title: 'mark'
shortdef: 'marker'
---

Marker indicating clause status. For subordinate clauses, this is the subordinating conjunction or particle, such as ϫⲉ introducing the object clause of direct or indirect speech, a relative pronoun such as ⲉⲧ, or an adverbial subordination, such as the circumstantial converter ⲉ/ⲉⲣⲉ. In Coptic, some main clauses also have marker elements determining clause status, which are morphologically and paradigmatically comparable to subordinators: the focalizing and preterit converters. As a result, all converters (POS tags CCIRC, CREL, CPRET and CFOC) are treated as `mark`, modifying their clause’s predicate, but also non-converter conjunctions with similar functions (e.g. ⲉⲛⲉ ‘if’) as shown in the examples below.

~~~ sdparse
ⲉⲛⲉ/CONJ ⲛⲧⲕ/PRON ⲟⲩ/DET ⲉⲛⲧⲏϭ/NOUN \n If you were a weed

mark(ⲉⲛⲧⲏϭ, ⲉⲛⲉ)
nsubj(ⲉⲛⲧⲏϭ, ⲛⲧⲕ)
det(ⲉⲛⲧⲏϭ, ⲟⲩ)
~~~

~~~ sdparse
ⲉ/SCONJ ⲕ/PRON ⲧⲣⲩⲫⲁ/VERB \n While you live luxuriously 

mark(ⲧⲣⲩⲫⲁ, ⲉ)
nsubj(ⲧⲣⲩⲫⲁ, ⲕ)
~~~

~~~ sdparse
ⲉ/PART ⲓ/PPERS ϣⲁϫⲉ/VERB ⲉⲣⲟ/PRON \n It’s YOU I’m talking to! 

mark(ϣⲁϫⲉ, ⲉ)
nsubj(ϣⲁϫⲉ, ⲓ)
nmod(ϣⲁⲭⲉ, ⲉⲣⲟ)
~~~

<!-- Interlanguage links updated Út zář 29 20:31:55 CEST 2020 -->
