---
layout: base
title:  'Statistics of obl in UD_Chinese-Beginner'
udver: '2'
---

## Treebank Statistics: UD_Chinese-Beginner: Relations: `obl`

This relation is universal.
There are 3 language-specific subtypes of `obl`: <tt><a href="zh_beginner-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="zh_beginner-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="zh_beginner-dep-obl-tmod.html">obl:tmod</a></tt>.

339 nodes (2%) are attached to their parents as `obl`.

222 instances of `obl` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.63126843657817.

The following 14 pairs of parts of speech are connected with `obl`: <tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt> (176; 52% instances), <tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_beginner-pos-PRON.html">PRON</a></tt> (59; 17% instances), <tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_beginner-pos-ADJ.html">ADJ</a></tt> (47; 14% instances), <tt><a href="zh_beginner-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_beginner-pos-PRON.html">PRON</a></tt> (17; 5% instances), <tt><a href="zh_beginner-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt> (14; 4% instances), <tt><a href="zh_beginner-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_beginner-pos-ADV.html">ADV</a></tt> (10; 3% instances), <tt><a href="zh_beginner-pos-NUM.html">NUM</a></tt>-<tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_beginner-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_beginner-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="zh_beginner-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_beginner-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="zh_beginner-pos-ADP.html">ADP</a></tt>-<tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="zh_beginner-pos-PART.html">PART</a></tt>-<tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="zh_beginner-pos-PART.html">PART</a></tt>-<tt><a href="zh_beginner-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 obl	color:blue
1	我	我	PRON	_	Person=1	9	nsubj	_	Gloss=1SG|SpaceAfter=No|Tone=3|Translit=wǒ
2	1	1	NUM	_	NumType=Card	6	nummod	_	SpaceAfter=No|Translit=1
3	9	9	NUM	_	NumType=Card	2	flat	_	SpaceAfter=No|Translit=9
4	9	9	NUM	_	NumType=Card	2	flat	_	SpaceAfter=No|Translit=9
5	0	0	NUM	_	NumType=Card	2	flat	_	SpaceAfter=No|Translit=0
6	年	年	NOUN	_	_	8	nmod	_	Gloss=year|Grammar_Target=Yes|SpaceAfter=No|Tone=2|Translit=nián
7	7	7	NUM	_	NumType=Card	8	nummod	_	SpaceAfter=No|Translit=7
8	月	月	NOUN	_	_	9	obl	_	Grammar_Target=Yes|SpaceAfter=No|Tone=4|Translit=yuè
9	出	出	VERB	_	_	0	root	_	SpaceAfter=No|Tone=1|Translit=chū
10	生	生	NOUN	_	_	9	obj	_	SpaceAfter=No|Tone=1|Translit=shēng
11	。	。	PUNCT	_	_	9	punct	_	SpaceAfter=No|Translit=。

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 obl	color:blue
1	为什么	为什么	PRON	_	PronType=Int	4	obl	_	ExtPos=PRON|SpaceAfter=No|Tone=4_2_5|Translit=wèi_shén_me
2	你	你	PRON	_	Person=2	4	nsubj	_	Gloss=2SG|SpaceAfter=No|Tone=3|Translit=nǐ
3	不	不	ADV	_	Polarity=Neg	4	advmod	_	Gloss=NEG|Grammar_Target=Yes|SpaceAfter=No|Tone=4|Translit=bù
4	喜欢	喜欢	VERB	_	_	0	root	_	SpaceAfter=No|Tone=3_1|Translit=xǐ_huān
5	喝	喝	VERB	_	_	4	ccomp	_	SpaceAfter=No|Tone=1|Translit=hē
6	咖啡	咖啡	NOUN	_	_	5	obj	_	SpaceAfter=No|Tone=1_1|Translit=kā_fēi
7	？	？	PUNCT	_	_	4	punct	_	SpaceAfter=No|Translit=？

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 obl	color:blue
1	结	结	VERB	_	_	6	obl:tmod	_	SpaceAfter=No|Tone=2|Translit=jié
2	婚	婚	NOUN	_	_	1	obj	_	SpaceAfter=No|Tone=1|Translit=hūn
3	以后	以后	ADP	_	_	1	mark	_	SpaceAfter=No|Tone=3_4|Translit=yǐ_hòu
4	，	，	PUNCT	_	_	1	punct	_	SpaceAfter=No|Translit=，
5	她	她	PRON	_	Person=3	6	nsubj	_	SpaceAfter=No|Tone=1|Translit=tā
6	变	变	VERB	_	_	0	root	_	SpaceAfter=No|Tone=4|Translit=biàn
7	得	得	PART	_	_	9	case	_	SpaceAfter=No|Tone=2|Translit=dé
8	更	更	ADV	_	_	9	advmod	_	Grammar_Target=Yes|SpaceAfter=No|Tone=4|Translit=gèng
9	漂亮	漂亮	ADJ	_	_	6	obl	_	SpaceAfter=No|Tone=1_4|Translit=piāo_liàng
10	了	了	PART	_	_	6	discourse	_	Gloss=PRF|SpaceAfter=No|Tone=5|Translit=le
11	。	。	PUNCT	_	_	6	punct	_	SpaceAfter=No|Translit=。

~~~


