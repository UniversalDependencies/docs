---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The `root` grammatical relation points to the root of the sentence.
A fake node `ROOT` is used as the governor.
The `ROOT` node is indexed with 0, since the indexing of real words in the sentence starts at 1.
(The `ROOT` node is not represented explicitly in CoNLL-U.)

~~~ sdparse
ROOT da / bʔeː =b eːjaːn =heːb ini \n "Men came to me one day", he said.
root(ROOT, ini)
~~~

<!-- Interlanguage links updated So 10. května 2025, 18:16:11 CEST -->
