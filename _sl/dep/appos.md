---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
udver: '2'
---

An appositional modifier of a noun is a nominal immediately following the first noun that serves to define, modify, name, or describe that noun. In Slovenian treebanks, the `appos` relation is only used for appositions which are separated from the phrase they refer to by a comma, parentheses or other types of punctuation.

~~~ sdparse
Območje medenice je središče telesa , glavna peč , ki greje in uravnava vse telo
appos(središče,peč)
~~~

~~~ sdparse
Dianne se je sprla z Liso , svojo prijateljico , in se je odločila, da gre domov 
appos(Liso,prijateljico)
~~~
