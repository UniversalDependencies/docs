---
layout: base
title:  'Statistics of ccomp in UD_Chinese-Beginner'
udver: '2'
---

## Treebank Statistics: UD_Chinese-Beginner: Relations: `ccomp`

This relation is universal.

272 nodes (1%) are attached to their parents as `ccomp`.

258 instances of `ccomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.14705882352941.

The following 10 pairs of parts of speech are connected with `ccomp`: <tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt> (201; 74% instances), <tt><a href="zh_beginner-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt> (38; 14% instances), <tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt> (10; 4% instances), <tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_beginner-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="zh_beginner-pos-AUX.html">AUX</a></tt>-<tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_beginner-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="zh_beginner-pos-ADV.html">ADV</a></tt>-<tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="zh_beginner-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_beginner-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 ccomp	color:blue
1	为什么	为什么	PRON	_	PronType=Int	4	obl	_	ExtPos=PRON|SpaceAfter=No|Tone=4_2_5|Translit=wèi_shén_me
2	你	你	PRON	_	Person=2	4	nsubj	_	Gloss=2SG|SpaceAfter=No|Tone=3|Translit=nǐ
3	不	不	ADV	_	Polarity=Neg	4	advmod	_	Gloss=NEG|Grammar_Target=Yes|SpaceAfter=No|Tone=4|Translit=bù
4	喜欢	喜欢	VERB	_	_	0	root	_	SpaceAfter=No|Tone=3_1|Translit=xǐ_huān
5	喝	喝	VERB	_	_	4	ccomp	_	SpaceAfter=No|Tone=1|Translit=hē
6	咖啡	咖啡	NOUN	_	_	5	obj	_	SpaceAfter=No|Tone=1_1|Translit=kā_fēi
7	？	？	PUNCT	_	_	4	punct	_	SpaceAfter=No|Translit=？

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 ccomp	color:blue
1	这	这	DET	_	_	2	det	_	Gloss=DEM.PROX|SpaceAfter=No|Tone=4|Translit=zhè
2	种	种	NOUN	_	_	3	clf	_	Gloss=CLF|SpaceAfter=No|Tone=3|Translit=zhǒng
3	酒	酒	NOUN	_	_	6	nsubj	_	SpaceAfter=No|Tone=3|Translit=jǐu
4	也	也	ADV	_	_	6	advmod	_	Grammar_Target=Yes|SpaceAfter=No|Tone=3|Translit=yě
5	很	很	ADV	_	_	6	advmod	_	SpaceAfter=No|Tone=3|Translit=hěn
6	好	好	ADJ	_	_	0	root	_	Gloss=good|SpaceAfter=No|Tone=3|Translit=hǎo
7	喝	喝	VERB	_	_	6	ccomp	_	SpaceAfter=No|Tone=1|Translit=hē
8	。	。	PUNCT	_	_	6	punct	_	SpaceAfter=No|Translit=。

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 ccomp	color:blue
1	不	不	ADV	_	_	3	advmod	_	Gloss=NEG|SpaceAfter=No|Tone=4|Translit=bù
2	要	要	AUX	_	_	3	aux	_	SpaceAfter=No|Tone=4|Translit=yào
3	以为	以为	VERB	_	_	0	root	_	Grammar_Target=Yes|SpaceAfter=No|Tone=3_4|Translit=yǐ_wèi
4	他	他	PRON	_	Person=3	8	nsubj	_	SpaceAfter=No|Tone=1|Translit=tā
5	是	是	AUX	_	_	8	cop	_	SpaceAfter=No|Tone=4|Translit=shì
6	你	你	PRON	_	Person=2	8	nmod	_	Gloss=2SG|SpaceAfter=No|Tone=3|Translit=nǐ
7	的	的	PART	_	Case=Gen	6	case	_	SpaceAfter=No|Tone=5|Translit=de
8	朋友	朋友	NOUN	_	_	3	ccomp	_	SpaceAfter=No|Tone=2_3|Translit=péng_yǒu
9	。	。	PUNCT	_	_	3	punct	_	SpaceAfter=No|Translit=。

~~~


