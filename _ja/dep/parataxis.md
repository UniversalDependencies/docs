---
layout: relation
title: 'parataxis'
shortdef: 'parataxis'
udver: '2'
---

Listing of sentences.

~~~ sdparse
「 太郎 は 花子 が 好き 。 次郎 は 梅子 が 好き 。 」 と 三郎 が 言っ た 。 \n " Taro TOPIC Hanako NOM likable . Jiro TOPIC Umeko NOM likable . " that Saburo NOM say PAST .
parataxis(好き-12, 好き-6)
punct(好き-12, 「-1)
punct(好き-12, 」-14)
case(太郎-2, は-3)
case(花子-4, が-5)
dislocated(好き-6, 太郎-2)
nsubj(好き-6, 花子-4)
punct(好き-6, 。-7)
case(次郎-8, は-9)
case(梅子-10, が-11)
dislocated(好き-12, 次郎-8)
nsubj(好き-12, 梅子-10)
punct(好き-12, 。-13)
case(好き-12, と-15)
case(三郎-16, が-17)
nsubj(言っ-18, 三郎)
ccomp(言っ-18, 好き-12)
aux(言っ-18, た-19)
punct(言っ-18, 。-20)
~~~
