---
layout: relation
title: 'dep'
shortdef: 'unspecified dependency'
udver: '2'
---

A dependency is labeled as `dep` when a more precise dependency relation between two words cannot be determined. This may be because of a weird grammatical construction, a limitation in software, a parser error, or because of an unresolved long distance dependency.

Note that we also use this relation to link the inflectional bound morphemes that are separated due to tokenization to the _main_ part of the word (usually the last word of phrases or sentences used as names or after abbreviations).

~~~ sdparse
«/PUNCT Երկիր/NOUN[Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing] Նաիրի/PROPN[Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Geo|Number=Sing] »/PUNCT —/PUNCT ից/NOUN[Animacy=Nhum|Case=Abl|Definite=Ind|Hyph=Yes|Number=Sing] \n “ Yerkir Nairi ” - from
punct(Նաիրի, «)
punct(Նաիրի, »)
nmod(Նաիրի, Երկիր)
punct(ից, —)
dep(Նաիրի, ից)
punct(from, -)
dep(Nairi, from)
~~~

~~~ sdparse
1937/NUM[NumForm=Digit|NumType=Card] թ/NOUN[Abbr=Yes|Animacy=Nhum|Case=Nom|Definite=Ind|Hyph=Yes|Number=Sing] ./PUNCT —/PUNCT ին/NOUN[Animacy=Nhum|Case=Dat|Definite=Ind|Hyph=Yes|Number=Sing] \n 1937 year - in
nummod(թ, 1937)
punct(թ, .)
punct(ին, —)
dep(թ, ին)
punct(in, -)
dep(year, in)

~~~

For more details see the [tokenization page](http://universaldependencies.org/hy/tokenization.html).
<!-- Interlanguage links updated St 6. května 2026, 20:46:23 CEST -->
