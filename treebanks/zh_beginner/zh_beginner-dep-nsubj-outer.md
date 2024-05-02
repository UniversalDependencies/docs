---
layout: base
title:  'Statistics of nsubj:outer in UD_Chinese-Beginner'
udver: '2'
---

## Treebank Statistics: UD_Chinese-Beginner: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="zh_beginner-dep-nsubj.html">nsubj</a></tt>.

10 nodes (0%) are attached to their parents as `nsubj:outer`.

10 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.7.

The following 6 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt> (5; 50% instances), <tt><a href="zh_beginner-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_beginner-pos-PROPN.html">PROPN</a></tt> (1; 10% instances), <tt><a href="zh_beginner-pos-PRON.html">PRON</a></tt>-<tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_beginner-pos-PRON.html">PRON</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nsubj:outer	color:blue
1	这	这	DET	_	_	2	det	_	Gloss=DEM.PROX|SpaceAfter=No|Tone=4|Translit=zhè
2	本	本	NOUN	_	_	3	clf	_	Gloss=CLF|SpaceAfter=No|Tone=3|Translit=běn
3	书	书	NOUN	_	_	6	nsubj:outer	_	SpaceAfter=No|Tone=1|Translit=shū
4	是	是	AUX	_	_	6	cop	_	SpaceAfter=No|Tone=4|Translit=shì
5	谁	谁	PRON	_	PronType=Int	6	nsubj	_	SpaceAfter=No|Tone=2|Translit=shúi
6	借	借	VERB	_	_	0	root	_	Grammar_Target=Yes|SpaceAfter=No|Tone=4|Translit=jiè
7	给	给	ADP	_	_	8	case	_	Grammar_Target=Yes|SpaceAfter=No|Tone=3|Translit=gěi
8	你	你	PRON	_	Person=2	6	obl:arg	_	Gloss=2SG|SpaceAfter=No|Tone=3|Translit=nǐ
9	的	的	PART	_	Case=Gen	6	mark	_	SpaceAfter=No|Tone=5|Translit=de
10	？	？	PUNCT	_	_	6	punct	_	SpaceAfter=No|Translit=？

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 nsubj:outer	color:blue
1	这	这	DET	_	_	2	det	_	Gloss=DEM.PROX|SpaceAfter=No|Tone=4|Translit=zhè
2	两	两	NUM	_	NumType=Card	3	nummod	_	SpaceAfter=No|Tone=3|Translit=liǎng
3	个	个	NOUN	_	_	4	clf	_	Gloss=CLF|SpaceAfter=No|Tone=4|Translit=gè
4	银行	银行	NOUN	_	_	8	nsubj:outer	_	SpaceAfter=No|Tone=2_2|Translit=yín_xíng
5	哪	哪	PRON	_	PronType=Int	6	nmod	_	SpaceAfter=No|Tone=3|Translit=nǎ
6	个	个	NOUN	_	_	8	nsubj	_	Gloss=CLF|SpaceAfter=No|Tone=4|Translit=gè
7	更	更	ADV	_	_	8	advmod	_	Grammar_Target=Yes|SpaceAfter=No|Tone=4|Translit=gèng
8	近	近	ADJ	_	_	0	root	_	SpaceAfter=No|Tone=4|Translit=jìn
9	？	？	PUNCT	_	_	8	punct	_	SpaceAfter=No|Translit=？

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 3 nsubj:outer	color:blue
1	这	这	DET	_	_	2	det	_	Gloss=DEM.PROX|SpaceAfter=No|Tone=4|Translit=zhè
2	辆	辆	NOUN	_	_	3	clf	_	SpaceAfter=No|Tone=4|Translit=liàng
3	车	车	NOUN	_	_	14	nsubj:outer	_	SpaceAfter=No|Tone=1|Translit=chē
4	没	没	ADV	_	_	6	advmod	_	Gloss=NEG|SpaceAfter=No|Tone=2|Translit=méi
5	什么	什么	ADV	_	_	6	advmod	_	SpaceAfter=No|Tone=2_5|Translit=shén_me
6	特别	特别	ADV	_	_	0	root	_	SpaceAfter=No|Tone=4_2|Translit=tè_bié
7	，	，	PUNCT	_	_	14	punct	_	SpaceAfter=No|Translit=，
8	它	它	NOUN	_	_	14	nsubj	_	SpaceAfter=No|Tone=1|Translit=tā
9	就	就	SCONJ	_	_	14	cc	_	SpaceAfter=No|Tone=4|Translit=jìu
10	是	是	AUX	_	_	14	cop	_	SpaceAfter=No|Tone=4|Translit=shì
11	辆	辆	NOUN	_	_	12	obj	_	SpaceAfter=No|Tone=4|Translit=liàng
12	普通	普通	ADJ	_	_	14	nmod	_	SpaceAfter=No|Tone=3_1|Translit=pǔ_tōng
13	的	的	PART	_	Case=Gen	11	case	_	SpaceAfter=No|Tone=5|Translit=de
14	汽车	汽车	NOUN	_	_	6	parataxis	_	SpaceAfter=No|Tone=4_1|Translit=qì_chē
15	而已	而已	SCONJ	_	_	14	discourse	_	Grammar_Target=Yes|SpaceAfter=No|Tone=2_3|Translit=ér_yǐ
16	。	。	PUNCT	_	_	14	punct	_	SpaceAfter=No|Translit=。

~~~


