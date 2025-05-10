---
layout: base
title:  'Statistics of xcomp in UD_Uzbek-UT'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-UT: Relations: `xcomp`

This relation is universal.

58 nodes (1%) are attached to their parents as `xcomp`.

58 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.81034482758621.

The following 7 pairs of parts of speech are connected with `xcomp`: <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-VERB.html">VERB</a></tt> (28; 48% instances), <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt> (17; 29% instances), <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-ADJ.html">ADJ</a></tt> (7; 12% instances), <tt><a href="uz_ut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_ut-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-NUM.html">NUM</a></tt> (2; 3% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 xcomp	color:blue
1	Kompaniya	kompaniya	NOUN	_	Case=Nom|Number=Sing	5	nsubj	_	_
2	qarorga	qaror	NOUN	_	Case=Dat|Number=Sing	3	obj	_	_
3	boʻysunishdan	boʻysun	VERB	_	Case=Abl|VerbForm=Vnoun	5	xcomp	_	_
4	bosh	bosh	NOUN	_	Case=Nom|Number=Sing	5	compound:lvc	_	_
5	tortgan	tort	VERB	_	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 xcomp	color:blue
1	Hozirda	hozirda	ADV	_	_	6	advmod	_	_
2	u	u	PRON	_	Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
3	Turkiyaning	Turkiya	PROPN	_	Case=Gen|Number=Sing|Poss=Yes	5	nmod:poss	_	_
4	hukmron	hukmron	ADJ	_	_	5	amod	_	_
5	partiyasi	partiya	NOUN	_	Case=Nom|Number=Sing	6	xcomp	_	_
6	hisoblanadi	hisobla	VERB	_	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 xcomp	color:blue
1	…	…	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Kuzda	kuz	NOUN	_	Case=Loc|Number=Sing	11	obl	_	_
3	mevalar	meva	NOUN	_	Case=Nom|Number=Plur	11	nsubj	_	_
4	xilma	xilma	PART	_	_	6	compound:redup	_	SpaceAfter=No
5	-	-	PUNCT	_	_	4	punct	_	SpaceAfter=No
6	xil	xil	ADJ	_	_	10	xcomp	_	SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	_
8	benihoya	benihoya	ADV	_	_	9	advmod	_	_
9	shirin	shirin	ADJ	_	_	6	conj	_	_
10	boʻlib	boʻl	VERB	_	VerbForm=Conv	11	advcl	_	_
11	yetiladi	yetil	VERB	_	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


