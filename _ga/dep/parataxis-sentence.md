---
layout: relation
title:  'parataxis:sentence'
shortdef : 'sentence'
udver: '2'
---

The subtype `parataxis:sentence` is used in TwittIrish. As tweets may consist of more than one sentence, this relation attaches the head of each sentence, following the first, to the head of the previous sentence, without any explicit coordination or subordination.

~~~ sdparse
Mol an óige arís. A dhiabhail, tá an-talent go deo agaibh in Éirinn ♫ http://t.co/1oT7CH8x ♫
parataxis:sentence(Mol, tá)
~~~
<!-- Interlanguage links updated St lis 3 20:59:09 CET 2021 -->
