---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
udver: '2'
---

Marks appositions in all free apposition constructions. Appositions are marked from left to right, and can chain (A -> B -> C). 

~~~ sdparse
ⲙⲛ/ADP ⲡⲉⲕ/DET ⲉⲓⲱⲧ/NOUN ⲡ/DET ⲇⲓⲁⲃⲟⲗⲟⲥ/NOUN \n with your father, the devil

appos(ⲉⲓⲱⲧ, ⲇⲓⲁⲃⲟⲗⲟⲥ)
det(ⲇⲓⲁⲃⲟⲗⲟⲥ, ⲡ)
det(ⲉⲓⲱⲧ, ⲡⲉⲕ)
~~~

In the example, *your father* and *the devil*, refer to the same thing, and have the same function (both relate to *with*: *with your father*, i.e. *with the devil*). 
