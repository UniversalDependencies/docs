---
layout: base
title:  'Statistics of nmod in UD_Chinese-Beginner'
udver: '2'
---

## Treebank Statistics: UD_Chinese-Beginner: Relations: `nmod`

This relation is universal.

881 nodes (4%) are attached to their parents as `nmod`.

831 instances of `nmod` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5788876276958.

The following 14 pairs of parts of speech are connected with `nmod`: <tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_beginner-pos-PRON.html">PRON</a></tt> (395; 45% instances), <tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt> (334; 38% instances), <tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_beginner-pos-PROPN.html">PROPN</a></tt> (68; 8% instances), <tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_beginner-pos-ADJ.html">ADJ</a></tt> (48; 5% instances), <tt><a href="zh_beginner-pos-NUM.html">NUM</a></tt>-<tt><a href="zh_beginner-pos-NUM.html">NUM</a></tt> (8; 1% instances), <tt><a href="zh_beginner-pos-NUM.html">NUM</a></tt>-<tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="zh_beginner-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_beginner-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="zh_beginner-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_beginner-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="zh_beginner-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_beginner-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="zh_beginner-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_beginner-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="zh_beginner-pos-PRON.html">PRON</a></tt>-<tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_beginner-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="zh_beginner-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	你	你	PRON	_	Person=2	2	nmod	_	Gloss=2SG|SpaceAfter=No|Tone=3|Translit=nǐ
2	爸爸	爸爸	NOUN	_	_	4	nsubj	_	SpaceAfter=No|Tone=4_4|Translit=bà_bà
3	没	没	ADV	_	Polarity=Neg	4	advmod	_	Gloss=NEG|Grammar_Target=Yes|SpaceAfter=No|Tone=2|Translit=méi
4	有	有	VERB	_	_	0	root	_	Grammar_Target=Yes|SpaceAfter=No|Tone=3|Translit=yǒu
5	手机	手机	NOUN	_	_	4	obj	_	Gloss=hand|SpaceAfter=No|Tone=3_1|Translit=shǒu_jī
6	吗	吗	PART	_	_	4	discourse:sp	_	SpaceAfter=No|Tone=5|Translit=ma
7	？	？	PUNCT	_	_	4	punct	_	SpaceAfter=No|Translit=？

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nmod	color:blue
1	我	我	PRON	_	Person=1	2	nmod	_	Gloss=1SG|SpaceAfter=No|Tone=3|Translit=wǒ
2	妈妈	妈妈	NOUN	_	_	6	nsubj	_	Gloss=mother|SpaceAfter=No|Tone=1_1|Translit=mā_mā
3	今年	今年	NOUN	_	_	6	nmod	_	SpaceAfter=No|Tone=1_2|Translit=jīn_nián
4	4	4	NUM	_	NumType=Card	6	nummod	_	SpaceAfter=No|Translit=4
5	5	5	NUM	_	NumType=Card	4	flat	_	SpaceAfter=No|Translit=5
6	岁	岁	NOUN	_	_	0	root	_	Grammar_Target=Yes|SpaceAfter=No|Tone=4|Translit=sùi
7	。	。	PUNCT	_	_	6	punct	_	SpaceAfter=No|Translit=。

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod	color:blue
1	你们	你们	PRON	_	Number=Plur|Person=2	5	nsubj	_	Gloss=2SG|SpaceAfter=No|Tone=3_5|Translit=nǐ_men
2	两	两	NUM	_	NumType=Card	3	nummod	_	SpaceAfter=No|Tone=3|Translit=liǎng
3	个	个	NOUN	_	_	1	appos	_	Gloss=CLF|SpaceAfter=No|Tone=4|Translit=gè
4	都	都	ADV	_	_	5	advmod	_	Grammar_Target=Yes|SpaceAfter=No|Tone=1|Translit=dū
5	喜欢	喜欢	VERB	_	_	0	root	_	SpaceAfter=No|Tone=3_1|Translit=xǐ_huān
6	中国	中国	PROPN	_	_	7	nmod	_	SpaceAfter=No|Tone=1_2|Translit=zhōng_guó
7	菜	菜	NOUN	_	_	5	obj	_	SpaceAfter=No|Tone=4|Translit=cài
8	吗	吗	PART	_	_	5	discourse:sp	_	SpaceAfter=No|Tone=5|Translit=ma
9	？	？	PUNCT	_	_	5	punct	_	SpaceAfter=No|Translit=？

~~~


