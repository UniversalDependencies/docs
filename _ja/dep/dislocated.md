---
layout: relation
title: 'dislocated'
shortdef: 'dislocated elements'
udver: '2'
---

The relation `dislocated` is used for topicalized nominals with the particles は / "wa" and も / "mo",
unless the topicalized nominal is the subject, in which case it would be attached as [nsubj]().

‘The elephant’s nose is long’

~~~ sdparse
象 は 鼻 が 長い \n zō wa hana ga nagai \n elephant TOPIC nose SUBJ long
case(象, は)
dislocated(長い, 象)
case(鼻, が)
nsubj(長い, 鼻)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:09:03 CEST 2021 -->
