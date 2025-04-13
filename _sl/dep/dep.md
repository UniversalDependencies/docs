---
layout: relation
title: 'dep'
shortdef: 'unspecified dependency'
udver: '2'
---

A dependency can be labeled as `dep` when it is impossible to determine a more precise relation. For instance, it may be used for syntactic phenomena which arise as a result of various technical shortcomings of a text. In Slovenian treebanks, this relation is currently used for rare phenomena which raise validation errors, such as non-standard forms of the auxiliary, and for technical issues, such as left-over page numbers at the start of a sentence. 

~~~ sdparse
Tip menda misl , dam začel mlatit psa s palco . \n Guy probably thinks , that-I-will start hitting dog with stick .
dep(začel,dam)
dep(start,that-I-will)
~~~
~~~ sdparse
19 Institucija je za Mary Douglas sprejetje določenega miselnega sloga \n 19 Institution is for Mary Douglas acceptance of-certain thinking style
dep(sprejetje,19-1)
cop(sprejetje,je)
nsubj(sprejetje,Institucija)
dep(acceptance,19-12)
cop(acceptance,is)
nsubj(acceptance,Institution)
~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:46 CET -->
