---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
udver: '2'
---

Marks appositions in all free apposition constructions. Appositions are marked from left to right.
~~~ sdparse
ⲙⲛ/ADP ⲡⲉⲕ/DET ⲉⲓⲱⲧ/NOUN ⲡ/DET ⲇⲓⲁⲃⲟⲗⲟⲥ/NOUN \n with your father, the devil

appos(ⲉⲓⲱⲧ, ⲇⲓⲁⲃⲟⲗⲟⲥ)
det(ⲇⲓⲁⲃⲟⲗⲟⲥ, ⲡ)
det(ⲉⲓⲱⲧ, ⲡⲉⲕ)
~~~

In the example, *your father* and *the devil*, refer to the same thing, and have the same function (both relate to *with*: *with your father*, i.e. *with the devil*). 


Multiple appositions should fountain out (A -> B, A -> C) rather than chain together (A -> B -> C). 

~~~ sdparse
ϩⲟⲟⲩ ⲙ ⲡⲉⲛ ϫⲟⲉⲓⲥ/N ⲓⲏⲥⲟⲩⲥ/NPROP ⲡⲉ/ART ⲭⲣⲓⲥⲧⲟⲥ/N \n day of our Lord Jesus Chirst

appos(ϫⲟⲉⲓⲥ, ⲭⲣⲓⲥⲧⲟⲥ)
appos(ϫⲟⲉⲓⲥ, ⲓⲏⲥⲟⲩⲥ)
nmod(ϩⲟⲟⲩ, ϫⲟⲉⲓⲥ)
~~~

In this example, *Lord*, *Jesus*, and *Christ* all refer to the same thing. 
<!-- Interlanguage links updated Út zář 29 18:41:07 CEST 2020 -->
