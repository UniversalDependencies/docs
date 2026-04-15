---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

For more on coordination, see the [conj]() relation.

A `cc` is the relation between a conjunct and the [coordinating conjunction](CCONJ) that precedes it.
(Note: different dependency grammars have different treatments of coordination.
We take the first conjunct as the head of the coordination.)

~~~ sdparse
Ադամ եւ Եւայ եւ պատուիրանքն տեառն / Adam ew Eway ew patowirank’n teaṙn \n Adam and Eve and the commandments of the Lord
conj(Ադամ, Եւայ)
conj(Adam, Eve)
conj(Ադամ, պատուիրանքն)
conj(Adam, commandments)
cc(Եւայ, եւ)
cc(Eve, and)
cc(պատուիրանքն, եւ)
cc(commandments, and)
~~~

A coordinating conjunction may also appear at the beginning of a sentence. This is also called a `cc`, and it depends on the root predicate of the sentence.
(In fact there is a coordination that spans multiple sentences. We cannot attach a word to the first conjunct because it is in another sentence. Thus we attach it to the first conjunct available in the current sentence: its main predicate.)

~~~ sdparse
Եւ թէ այլազգի քրիստոնէ սպաննէ՝ մեռնի ։ \n Ew t’ē aylazgi k’ristonē spannē՝ meṙni . \n And if a foreigner kills a Christian, he will be executed .
cc(սպաննէ, Եւ)
cc(kills, And)
~~~
<!-- Interlanguage links updated St 12. listopadu 2025, 09:21:24 CET -->
