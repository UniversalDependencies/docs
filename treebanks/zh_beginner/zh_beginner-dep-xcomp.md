---
layout: base
title:  'Statistics of xcomp in UD_Chinese-Beginner'
udver: '2'
---

## Treebank Statistics: UD_Chinese-Beginner: Relations: `xcomp`

This relation is universal.

5 nodes (0%) are attached to their parents as `xcomp`.

5 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.4.

The following 2 pairs of parts of speech are connected with `xcomp`: <tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt> (4; 80% instances), <tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_beginner-pos-ADJ.html">ADJ</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	她	她	PRON	_	Person=3	2	nsubj	_	SpaceAfter=No|Tone=1|Translit=tā
2	当	当	VERB	_	_	0	root	_	SpaceAfter=No|Tone=1|Translit=dāng
3	汉语	汉语	NOUN	_	_	4	nmod	_	SpaceAfter=No|Tone=4_3|Translit=hàn_yǔ
4	老师	老师	NOUN	_	_	2	xcomp	_	SpaceAfter=No|Tone=3_1|Translit=lǎo_shī
5	四	四	NUM	_	NumType=Card	6	nummod	_	SpaceAfter=No|Tone=4|Translit=sì
6	年	年	NOUN	_	_	2	obl	_	Gloss=year|SpaceAfter=No|Tone=2|Translit=nián
7	多	多	ADJ	_	_	6	amod	_	SpaceAfter=No|Tone=1|Translit=duō
8	了	了	PART	_	_	2	discourse	_	Gloss=PRF|SpaceAfter=No|Tone=5|Translit=le
9	，	，	PUNCT	_	_	12	punct	_	SpaceAfter=No|Translit=，
10	之前	之前	ADV	_	_	12	obl:tmod	_	Grammar_Target=Yes|SpaceAfter=No|Tone=1_2|Translit=zhī_qián
11	是	是	AUX	_	_	12	cop	_	SpaceAfter=No|Tone=4|Translit=shì
12	教	教	VERB	_	_	2	parataxis	_	SpaceAfter=No|Tone=4|Translit=jiào
13	英语	英语	NOUN	_	_	12	obj	_	SpaceAfter=No|Tone=1_3|Translit=yīng_yǔ
14	的	的	PART	_	_	12	mark	_	SpaceAfter=No|Tone=5|Translit=de
15	。	。	PUNCT	_	_	2	punct	_	SpaceAfter=No|Translit=。

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	变	变	VERB	_	_	4	csubj	_	SpaceAfter=No|Tone=4|Translit=biàn
2	老	老	ADJ	_	_	1	obj	_	SpaceAfter=No|Tone=3|Translit=lǎo
3	不	不	ADV	_	Polarity=Neg	4	advmod	_	Gloss=NEG|SpaceAfter=No|Tone=4|Translit=bù
4	等于	等于	VERB	_	_	0	root	_	Gloss=wait|Grammar_Target=Yes|SpaceAfter=No|Tone=3_2|Translit=děng_yú
5	成熟	成熟	ADJ	_	_	4	xcomp	_	SpaceAfter=No|Tone=2_2|Translit=chéng_shú
6	了	了	AUX	_	_	5	aux	_	Gloss=PFV|SpaceAfter=No|Tone=5|Translit=le
7	，	，	PUNCT	_	_	4	punct	_	SpaceAfter=No|Translit=，
8	成熟	成熟	VERB	_	_	17	csubj	_	SpaceAfter=No|Tone=2_2|Translit=chéng_shú
9	是	是	AUX	_	_	17	cop	_	SpaceAfter=No|Tone=4|Translit=shì
10	自己	自己	PRON	_	_	13	nsubj	_	SpaceAfter=No|Tone=4_3|Translit=zì_jǐ
11	对	对	ADP	_	_	12	case	_	SpaceAfter=No|Tone=4|Translit=dùi
12	自己	自己	PRON	_	_	13	obl:arg	_	SpaceAfter=No|Tone=4_3|Translit=zì_jǐ
13	做	做	VERB	_	_	16	acl	_	Gloss=do|SpaceAfter=No|Tone=4|Translit=zuò
14	过	过	AUX	_	_	13	aux	_	Gloss=EXP|SpaceAfter=No|Tone=4|Translit=guò
15	的	的	PART	_	Case=Gen	13	mark	_	SpaceAfter=No|Tone=5|Translit=de
16	事情	事情	NOUN	_	_	17	obl	_	SpaceAfter=No|Tone=4_2|Translit=shì_qíng
17	负责	负责	VERB	_	_	4	flat	_	SpaceAfter=No|Tone=4_2|Translit=fù_zé
18	。	。	PUNCT	_	_	17	punct	_	SpaceAfter=No|Translit=。

~~~


