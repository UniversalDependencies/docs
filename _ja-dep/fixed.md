---
layout: relation
title: 'fixed'
redirect_from: "ja/dep/mwe.html"
shortdef: 'multi-word expression'
---

Multi-word functional expressions.

~~~ sdparse
太郎 に よっ て 発見 さ れ た 。 \n Taro by _ _ discover do PASSIVE PAST
case(太郎, に)
mwe(に, よっ)
mwe(に, て)
nmod(発見, 太郎)
aux(発見, さ)
auxpass(発見, れ)
aux(発見, た)
punct(発見, 。)
~~~

~~~ sdparse
雨 が 降る かも しれ ない 。 \n rain NOM fall maybe _ _ .
nsubj(降る, 雨)
case(雨, が)
aux(降る, かも)
mwe(かも, しれ)
mwe(かも, ない)
punct(降る, 。)
~~~
