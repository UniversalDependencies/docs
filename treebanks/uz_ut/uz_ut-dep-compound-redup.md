---
layout: base
title:  'Statistics of compound:redup in UD_Uzbek-UT'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-UT: Relations: `compound:redup`

This relation is a language-specific subtype of <tt><a href="uz_ut-dep-compound.html">compound</a></tt>.
There are also 2 other language-specific subtypes of `compound`: <tt><a href="uz_ut-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="uz_ut-dep-compound-svc.html">compound:svc</a></tt>.

16 nodes (0%) are attached to their parents as `compound:redup`.

8 instances of `compound:redup` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 5 pairs of parts of speech are connected with `compound:redup`: <tt><a href="uz_ut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_ut-pos-ADJ.html">ADJ</a></tt> (6; 38% instances), <tt><a href="uz_ut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_ut-pos-PART.html">PART</a></tt> (4; 25% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt> (3; 19% instances), <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-VERB.html">VERB</a></tt> (2; 13% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-PART.html">PART</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 compound:redup	color:blue
1	Endi	endi	ADV	_	_	11	advmod	_	_
2	unga	u	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Dem	4	obl	_	_
3	neki	neki	PRON	_	PronType=Int	4	obj	_	_
4	ekilsa	ek	VERB	_	Mood=Cnd|Voice=Pass	11	advcl	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	gurkirab	gurkira	VERB	_	VerbForm=Conv	11	advcl	_	_
7	egiz	egiz	ADJ	_	_	10	amod	_	SpaceAfter=No
8	-	-	PUNCT	_	_	9	punct	_	SpaceAfter=No
9	egiz	egiz	ADJ	_	_	7	compound:redup	_	_
10	hosillar	hosil	NOUN	_	Case=Nom|Number=Plur	11	obj	_	_
11	beradi	ber	VERB	_	Mood=Ind|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 compound:redup	color:blue
1	Onasining	ona	NOUN	_	Case=Gen|Number=Sing|Poss=Yes	5	nmod:poss	_	_
2	koʻm	koʻm	PART	_	_	4	compound:redup	_	SpaceAfter=No
3	-	-	PUNCT	_	_	4	punct	_	SpaceAfter=No
4	koʻk	koʻk	ADJ	_	_	5	amod	_	_
5	koʻzlari	koʻz	NOUN	_	Case=Nom|Number=Plur	8	nsubj	_	_
6	mehrdan	mehr	NOUN	_	Case=Abl|Number=Sing	8	obl	_	_
7	porlab	porla	VERB	_	VerbForm=Conv	8	compound:svc	_	_
8	turardi	tur	VERB	_	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 compound:redup	color:blue
1	Samolarda	samo	NOUN	_	Case=Loc|Number=Plur	6	obl	_	_
2	ulkan	ulkan	ADJ	_	_	4	amod	_	_
3	qora	qora	ADJ	_	_	4	amod	_	_
4	bulutlar	bulut	NOUN	_	Case=Nom|Number=Plur	6	nsubj	_	_
5	tez	tez	ADV	_	_	6	advmod	_	_
6	suzib	suz	VERB	_	VerbForm=Conv	0	root	_	SpaceAfter=No
7	,	,	PUNCT	_	_	11	punct	_	_
8	qat	qat	NOUN	_	Case=Nom|Number=Sing	11	obl	_	SpaceAfter=No
9	-	-	PUNCT	_	_	10	punct	_	SpaceAfter=No
10	qat	qat	NOUN	_	Case=Nom|Number=Sing	8	compound:redup	_	_
11	uyula	uyul	VERB	_	VerbForm=Conv	6	conj	_	_
12	boshladilar	boshla	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	11	compound:svc	_	SpaceAfter=No
13	.	.	PUNCT	_	_	6	punct	_	_

~~~


