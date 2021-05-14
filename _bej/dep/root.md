---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The `root` grammatical relation points to the root of the sentence. A fake node `ROOT` is used as the governor. The `ROOT` node is indexed with 0, since the indexing of real words in the sentence starts at 1. (The `ROOT` node is not represented
explicitly in CoNLL-U.)

~~~ sdparse
da / bʔeː =b eːjaː -n =heːb i- ni //
text_en: "Men came to me one day", he said.
root(ROOT, ni) (ROOT, "say")
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:21 CEST 2021 -->
