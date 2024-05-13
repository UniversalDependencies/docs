---
layout: base
title:  'Statistics of csubj in UD_Chinese-Beginner'
udver: '2'
---

## Treebank Statistics: UD_Chinese-Beginner: Relations: `csubj`

This relation is universal.

43 nodes (0%) are attached to their parents as `csubj`.

43 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.97674418604651.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="zh_beginner-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt> (20; 47% instances), <tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt> (14; 33% instances), <tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt> (5; 12% instances), <tt><a href="zh_beginner-pos-PART.html">PART</a></tt>-<tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_beginner-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="zh_beginner-pos-PRON.html">PRON</a></tt>-<tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 csubj	color:blue
1	坐	坐	VERB	_	_	4	csubj	_	SpaceAfter=No|Tone=4|Translit=zuò
2	地铁	地铁	NOUN	_	_	1	obj	_	SpaceAfter=No|Tone=4_3|Translit=dì_tiě
3	多	多	ADV	_	_	4	advmod	_	Grammar_Target=Yes|SpaceAfter=No|Tone=1|Translit=duō
4	方便	方便	ADJ	_	_	0	root	_	SpaceAfter=No|Tone=1_4|Translit=fāng_biàn
5	！	！	PUNCT	_	_	4	punct	_	SpaceAfter=No|Translit=！

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 csubj	color:blue
1	爸爸	爸爸	NOUN	_	_	2	nsubj	_	SpaceAfter=No|Tone=4_4|Translit=bà_bà
2	回	回	VERB	_	_	4	csubj	_	Gloss=return|SpaceAfter=No|Tone=2|Translit=húi
3	来	来	VERB	_	_	2	dep	_	SpaceAfter=No|Tone=2|Translit=lái
4	有	有	VERB	_	_	0	root	_	Grammar_Target=Yes|SpaceAfter=No|Tone=3|Translit=yǒu
5	点	点	ADV	_	_	4	advmod	_	Grammar_Target=Yes|SpaceAfter=No|Tone=3|Translit=diǎn
6	晚	晚	ADJ	_	_	4	obj	_	SpaceAfter=No|Tone=3|Translit=wǎn
7	，	，	PUNCT	_	_	9	punct	_	SpaceAfter=No|Translit=，
8	妈妈	妈妈	NOUN	_	_	9	nsubj	_	Gloss=mother|SpaceAfter=No|Tone=1_1|Translit=mā_mā
9	有	有	VERB	_	_	4	parataxis	_	Grammar_Target=Yes|SpaceAfter=No|Tone=3|Translit=yǒu
10	点	点	ADV	_	_	9	advmod	_	Grammar_Target=Yes|SpaceAfter=No|Tone=3|Translit=diǎn
11	不	不	ADV	_	Polarity=Neg	12	advmod	_	Gloss=NEG|SpaceAfter=No|Tone=4|Translit=bù
12	高兴	高兴	ADJ	_	_	9	obj	_	Gloss=tall|SpaceAfter=No|Tone=1_1|Translit=gāo_xīng
13	。	。	PUNCT	_	_	4	punct	_	SpaceAfter=No|Translit=。

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 csubj	color:blue
1	她	她	PRON	_	Person=3	5	nsubj	_	SpaceAfter=No|Tone=1|Translit=tā
2	是	是	AUX	_	_	5	cop	_	SpaceAfter=No|Tone=4|Translit=shì
3	全	全	ADJ	_	_	4	amod	_	SpaceAfter=No|Tone=2|Translit=quán
4	职	职	NOUN	_	_	5	clf	_	SpaceAfter=No|Tone=2|Translit=zhí
5	妈妈	妈妈	NOUN	_	_	0	root	_	SpaceAfter=No|Tone=1_1|Translit=mā_mā
6	，	，	PUNCT	_	_	7	punct	_	SpaceAfter=No|Translit=，
7	有	有	VERB	_	_	10	csubj	_	Grammar_Target=Yes|SpaceAfter=No|Tone=3|Translit=yǒu
8	的	的	PART	_	Case=Gen	7	advmod	_	Grammar_Target=Yes|SpaceAfter=No|Tone=5|Translit=de
9	是	是	AUX	_	_	10	cop	_	Grammar_Target=Yes|SpaceAfter=No|Tone=4|Translit=shì
10	时间	时间	NOUN	_	_	5	parataxis	_	SpaceAfter=No|Tone=2_1|Translit=shí_jiān
11	。	。	PUNCT	_	_	5	punct	_	SpaceAfter=No|Translit=。

~~~


