---
layout: base
title:  'Statistics of advcl in UD_Uzbek-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-TueCL: Relations: `advcl`

This relation is universal.

17 nodes (2%) are attached to their parents as `advcl`.

17 instances of `advcl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.64705882352941.

The following 2 pairs of parts of speech are connected with `advcl`: <tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt> (16; 94% instances), <tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_tuecl-pos-ADV.html">ADV</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 advcl	color:blue
1	U	u	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	juda	juda	ADV	_	_	3	advmod	_	_
3	tez	tez	ADV	_	_	4	advmod	_	_
4	yugurgani	yugur	VERB	_	Number=Sing|Person=3|VerbForm=Part	7	advcl	_	_
5	uchun	uchun	ADP	_	_	4	case	_	_
6	yeta	yet	VERB	_	VerbForm=Conv	7	compound	_	_
7	olmadim	ol	VERB	_	Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Past	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 advcl	color:blue
1	Olma	olma	NOUN	_	Case=Nom|Number=Sing	2	nmod	_	_
2	daraxtlari	daraxt	NOUN	_	Case=Nom|Number=Plur|Poss=Yes	7	nsubj	_	_
3	aprel	aprel	NOUN	_	Case=Nom|Number=Sing	5	compound	_	SpaceAfter=No
4	-	-	PUNCT	_	_	3	punct	_	SpaceAfter=No
5	may	may	NOUN	_	Case=Nom|Number=Sing	6	nmod	_	_
6	oylarida	oy	NOUN	_	Case=Loc|Number=Plur|Poss=Yes	7	obl	_	_
7	gullab	gulla	VERB	_	VerbForm=Conv	0	root	_	SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	oʻzaro	oʻzaro	ADV	_	_	10	advcl	_	_
10	changlanadi	changlan	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	conj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	7	punct	_	_

~~~


