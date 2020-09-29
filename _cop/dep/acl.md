---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---

Head of an adjectival or relative clause, usually marking the verb or nominal predicate in that clause, when the clause is marked by a relative converter (the Coptic language specific POS tag `CREL`, which is given the label `mark`, regardless of which form is used, such as ⲉⲧ, ⲉⲧⲉ, ⲉⲧⲉⲣⲉ or ⲉ; for circumstantial conversion see `advcl`). The arrow points from the modified element (usually a noun) to the predicate of the relative clause.

Example:

~~~ sdparse
ⲛⲉⲧⲛ ⲏⲣⲡ ⲉⲧ ⲗⲟⲙⲥ \n your wine which is foul
acl(ⲏⲣⲡ, ⲗⲟⲙⲥ)
mark(ⲗⲟⲙⲥ,ⲉⲧ)
~~~

## The p-et relative construction

Articles expanded by a relative clause in the p-et construction are actually stand-ins for a full NP head, so they are expanded using the function `acl` as in any other relative clause ('the one which...'). See for instance both expanded articles in this example:

~~~ sdparse
ⲃⲁⲥⲓⲙⲟⲥ/PROPN ⲡ/DET ⲉⲧ/SCONJ ϣⲟⲟⲡ/VERB ϩⲛ/ADP ⲛ/DET ⲉⲧ/SCONJ ⲟⲩⲁⲁⲃ/VERB \n Basimos, the one who is among the ones who are holy

appos(ⲃⲁⲥⲓⲙⲟⲥ,ⲡ-2)
acl(ⲡ,ϣⲟⲟⲡ)
mark(ϣⲟⲟⲡ,ⲉⲧ-3)
acl(ⲛ,ⲟⲩⲁⲁⲃ)
mark(ⲟⲩⲁⲁⲃ,ⲉⲧ-7)
obl(ϣⲟⲟⲡ,ⲛ)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:40 CEST 2020 -->
