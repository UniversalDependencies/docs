---
udver: '2'
layout: relation
title: 'acl'
shortdef: 'adjectival clause'
---



The `acl` label  is applied to finite and non-finite clauses that modify a nominal (The `acl` relation 
contrasts with the [advcl]() relation, which is used for adverbial clauses
that modify a predicate.) The [acl]() relation points from 
the head of the nominal to the head of the clause that modifies it.  

Some languages allow finite clausal complements for nouns with 
a subset of nouns like *fact* or *report*. These look roughly like relative clauses, but do not have any omitted role in the dependent clause. This is the class of "content clauses" in Huddleston and Pullum 2002). These are also analyzed as `acl`.

~~~ sdparse
the fact that nobody cares
acl(fact, cares)
~~~

In Pomak, the [acl]() relation appears in accordance to the above mentioned, as seen in the following examples:

~~~ sdparse
tja néma háka  da so sme 
"she has no right to laugh"
acl(háka, sme)
~~~

~~~ sdparse
ímom ennó kóne húbbe patkοváto  
"I have a horse well shod"         
acl (kóne, patkováto)
obj(ímom, kóne)
~~~

<!--
~~~ sdparse
the issues as he sees them
acl(issues, sees)
~~~

-->

<!-- Interlanguage links updated Ne 5. května 2024, 18:20:29 CEST -->
