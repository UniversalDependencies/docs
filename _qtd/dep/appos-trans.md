---
layout: relation
title: 'appos:trans'
shortdef: 'nominal translation pair'
udver: '2'
---

This is a subtype of  [appos](). 
In code-switching it is common to utter a word, phrase or clause in one language and repeating it as a translation in the other language. 
In the following example Turkish 'sen' (you) is repeated again as German 'du'. The relation `appos:trans` captures
such phenomena. The relation connects the head of the second constituent to the head of the first constituent as a dependent.
Note that there is a separate subtype for clauses and other phrases, namely `parataxis:trans`, for the same phenomenon.


~~~ sdparse
Ama sen du wolltest immer das oder? \n But you always wanted that, right?
appos:trans(sen, du)
~~~
<!-- Interlanguage links updated St lis 3 20:58:39 CET 2021 -->
