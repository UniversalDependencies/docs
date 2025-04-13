---
layout: base
title:  'Statistics of cop in UD_Uzbek-UT'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-UT: Relations: `cop`

This relation is universal.

40 nodes (1%) are attached to their parents as `cop`.

40 instances of `cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.025.

The following 4 pairs of parts of speech are connected with `cop`: <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-AUX.html">AUX</a></tt> (22; 55% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-AUX.html">AUX</a></tt> (10; 25% instances), <tt><a href="uz_ut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_ut-pos-AUX.html">AUX</a></tt> (7; 18% instances), <tt><a href="uz_ut-pos-PRON.html">PRON</a></tt>-<tt><a href="uz_ut-pos-AUX.html">AUX</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 cop	color:blue
1	Dala	dala	NOUN	_	Case=Nom|Number=Sing	2	nmod	_	_
2	shiyponida	shiypon	NOUN	_	Case=Loc|Number=Sing	7	obl	_	_
3	qorovuldan	qorovul	NOUN	_	Case=Abl|Number=Sing	4	obl	_	_
4	bosh­qa	bosh­qa	ADJ	_	_	5	amod	_	_
5	hech	hech	DET	_	PronType=Neg	7	nsubj	_	_
6	kim	kim	PRON	_	PronType=Int	5	compound	_	_
7	yo‘q	yo‘q	VERB	_	_	0	root	_	_
8	ekan	ekan	AUX	_	_	7	cop	_	SpaceAfter=No
9	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 cop	color:blue
1	Bo‘ladigan	bo‘l	VERB	_	VerbForm=Part	2	acl	_	_
2	voqealarni	voqea	NOUN	_	Case=Acc|Number=Plur	4	obj	_	_
3	oldindan	oldin	ADV	_	Case=Abl	4	advmod	_	_
4	bilish	bil	VERB	_	VerbForm=Vnoun	7	csubj	_	_
5	yanada	yanada	ADV	_	_	6	advmod	_	_
6	halokatliroq	halokatli	ADJ	_	Degree=Cmp	7	amod	_	_
7	bilim	bilim	NOUN	_	Case=Nom|Number=Sing	9	acl	_	_
8	ekaniga	ekan	AUX	_	Case=Dat	7	cop	_	_
9	shubha	shubha	NOUN	_	Case=Nom|Number=Sing	10	nsubj	_	_
10	yo‘q	yo‘q	VERB	_	_	0	root	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 cop	color:blue
1	Turkiylarning	turkiy	ADJ	_	_	2	nmod:poss	_	_
2	otlari	ot	NOUN	_	Case=Nom|Number=Plur	3	nsubj	_	_
3	uchqur	uchqur	ADJ	_	_	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	o‘zlari	o‘z	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	_	_
6	dovyurak	dovyurak	ADJ	_	_	3	parataxis	_	_
7	edilar	edi	AUX	_	Number=Plur|Person=3|Tense=Past	6	cop	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


