---
layout: relation
title: 'parataxis:trans'
shortdef: 'translation pair'
udver: '2'
---

This is a subtype of  [parataxis](). 
In code-switching it is common to utter a word, phrase or clause in one language and repeating it as a translation in the other language. 
In the following example German 'gehe auch' (I go too) is repeated again as Turkish 'de gidiyorum'. The relation `parataxis:trans` captures
such phenomena. The relation connects the head of the second constituent to the head of the first constituent as a dependent.
Note that there is a separate subtype for noun phrases, namely `appos:trans`, for the same phenomenon.


~~~ sdparse
Ich gehe auch ab und zu Bibliotheke gidiyorum. \n I also go to the library now and then.
parataxis:trans(gehe, gidiyorum)
~~~


<!-- Interlanguage links updated Pá kvě 14 11:09:20 CEST 2021 -->
