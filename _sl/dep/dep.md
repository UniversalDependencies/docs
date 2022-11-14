---
layout: relation
title: 'dep'
shortdef: 'unspecified dependency'
udver: '2'
---

A dependency can be labeled as `dep` when it is impossible to determine a more precise relation. For instance, it may be used for syntactic phenomena which arise as a result of various technical shortcomings of a text. In Slovenian treebanks, this relation is currently used for rare phenomena which raise validation errors, such as non-standard forms of the auxiliary, and for technical issues, such as left-over page numbers at the start of a sentence. 

~~~ sdparse
Tip menda misl , dam začel mlatit psa s palco .
dep(začel,dam)
~~~
~~~ sdparse
19 Institucija je za Mary Douglas sprejetje določenega miselnega sloga
dep(sprejetje,19)
cop(sprejetje,je)
nsubj(sprejetje,Institucija)
~~~
<!-- Interlanguage links updated Po lis 14 15:35:21 CET 2022 -->
