---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---

`acl` stands for finite and non-finite clauses that modify a nominal.  The `acl` relation 
contrasts with the [advcl]() relation, which is used for adverbial clauses
that modify a predicate. The head of the `acl` relation is the noun
that is modified, and the dependent is the head of the clause that
modifies the noun.

~~~ sdparse
ഗുലാം നബി സഞ്ചരിച്ചിരുന്ന സ്‌കോർപിയോ \n Ghulam Nabi traveled Scorpio .
nmod(സഞ്ചരിച്ചിരുന്ന, ഗുലാം)
flat(ഗുലാം, നബി)
acl(സ്‌കോർപിയോ, സഞ്ചരിച്ചിരുന്ന)
acl(Scorpio, traveled) 
~~~
