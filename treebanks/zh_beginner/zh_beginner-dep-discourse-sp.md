---
layout: base
title:  'Statistics of discourse:sp in UD_Chinese-Beginner'
udver: '2'
---

## Treebank Statistics: UD_Chinese-Beginner: Relations: `discourse:sp`

This relation is a language-specific subtype of <tt><a href="zh_beginner-dep-discourse.html">discourse</a></tt>.

346 nodes (2%) are attached to their parents as `discourse:sp`.

346 instances of `discourse:sp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.39884393063584.

The following 5 pairs of parts of speech are connected with `discourse:sp`: <tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_beginner-pos-PART.html">PART</a></tt> (284; 82% instances), <tt><a href="zh_beginner-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_beginner-pos-PART.html">PART</a></tt> (34; 10% instances), <tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_beginner-pos-PART.html">PART</a></tt> (20; 6% instances), <tt><a href="zh_beginner-pos-AUX.html">AUX</a></tt>-<tt><a href="zh_beginner-pos-PART.html">PART</a></tt> (6; 2% instances), <tt><a href="zh_beginner-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_beginner-pos-PART.html">PART</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 discourse:sp	color:blue
1	他	他	PRON	_	Person=3	3	nsubj	_	SpaceAfter=No|Tone=1|Translit=tā
2	没	没	ADV	_	_	3	advmod	_	Gloss=NEG|Grammar_Target=Yes|SpaceAfter=No|Tone=2|Translit=méi
3	有	有	VERB	_	_	0	root	_	Grammar_Target=Yes|SpaceAfter=No|Tone=3|Translit=yǒu
4	工作	工作	NOUN	_	_	3	obj	_	SpaceAfter=No|Tone=1_4|Translit=gōng_zuò
5	吗	吗	PART	_	_	3	discourse:sp	_	SpaceAfter=No|Tone=5|Translit=ma
6	？	？	PUNCT	_	_	3	punct	_	SpaceAfter=No|Translit=？

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 discourse:sp	color:blue
1	德语	德语	NOUN	_	_	6	nsubj	_	SpaceAfter=No|Tone=2_3|Translit=dé_yǔ
2	和	和	CCONJ	_	_	3	cc	_	Grammar_Target=Yes|SpaceAfter=No|Tone=2|Translit=hé
3	法语	法语	NOUN	_	_	1	conj	_	SpaceAfter=No|Tone=3_3|Translit=fǎ_yǔ
4	都	都	ADV	_	_	6	advmod	_	SpaceAfter=No|Tone=1|Translit=dū
5	很	很	ADV	_	_	6	advmod	_	SpaceAfter=No|Tone=3|Translit=hěn
6	难	难	ADJ	_	_	0	root	_	SpaceAfter=No|Tone=2|Translit=nán
7	吗	吗	PART	_	_	6	discourse:sp	_	SpaceAfter=No|Tone=5|Translit=ma
8	？	？	PUNCT	_	_	6	punct	_	SpaceAfter=No|Translit=？

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 discourse:sp	color:blue
1	你	你	PRON	_	Person=2	2	nmod	_	Gloss=2SG|SpaceAfter=No|Tone=3|Translit=nǐ
2	爸爸	爸爸	NOUN	_	_	8	nsubj	_	SpaceAfter=No|Tone=4_4|Translit=bà_bà
3	和	和	CCONJ	_	_	5	cc	_	SpaceAfter=No|Tone=2|Translit=hé
4	你	你	PRON	_	Person=2	5	nmod	_	Gloss=2SG|SpaceAfter=No|Tone=3|Translit=nǐ
5	妈妈	妈妈	NOUN	_	_	2	conj	_	Gloss=mother|SpaceAfter=No|Tone=1_1|Translit=mā_mā
6	都	都	ADV	_	_	8	advmod	_	Grammar_Target=Yes|SpaceAfter=No|Tone=1|Translit=dū
7	是	是	AUX	_	_	8	cop	_	SpaceAfter=No|Tone=4|Translit=shì
8	美国人	美国人	NOUN	_	_	0	root	_	SpaceAfter=No|Tone=3_2_2|Translit=měi_guó_rén
9	吗	吗	PART	_	_	8	discourse:sp	_	SpaceAfter=No|Tone=5|Translit=ma
10	？	？	PUNCT	_	_	8	punct	_	SpaceAfter=No|Translit=？

~~~


