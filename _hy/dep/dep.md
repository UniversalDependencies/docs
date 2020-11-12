---
layout: relation
title: 'dep'
shortdef: 'unspecified dependency'
udver: '2'
---

A dependency is labeled as `dep` when a more precise dependency relation between two words cannot be determined. This may be because of a weird grammatical construction, a limitation in software, a parser error, or because of an unresolved long distance dependency.

Note that we also use this relation to link the inflectional bound morphemes that are separated due to tokenization to the _main_ part of the word (usually the last word of phrases or sentences used as names or after abbreviations).

~~~ sdparse
«/PUNCT Երկիր/NOUN[Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing] Նաիրի/PROPN[Animacy=Inan|Case=Nom|Definite=Ind|NameType=Geo|Number=Sing] »/PUNCT -/PUNCT ից/NOUN[Animacy=Inan|Case=Abl|Definite=Ind|Number=Sing] \n “ Yerkir Nairi ” - from
punct(Նաիրի, «)
punct(Նաիրի, »)
nmod(Նաիրի, Երկիր)
punct(Նաիրի, -)
dep(Նաիրի, ից)
~~~

~~~ sdparse
1937/NUM[NumForm=Digit|NumType=Card] թ/NOUN[Abbr=Yes|Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing] ./PUNCT -/PUNCT ին/NOUN[Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing] \n in year 1937
nummod(թ, 1937)
punct(թ, .)
punct(թ, -)
dep(թ, ին)
~~~

For more details see the [tokenization page](http://universaldependencies.org/hy/tokenization.html).
<!-- Interlanguage links updated Čt lis 12 09:43:22 CET 2020 -->
