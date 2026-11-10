---
layout: base
title:  'Statistics of discourse in UD_Dongxiang-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Dongxiang-GDUD: Relations: `discourse`

This relation is universal.

21 nodes (2%) are attached to their parents as `discourse`.

15 instances of `discourse` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.04761904761905.

The following 10 pairs of parts of speech are connected with `discourse`: <tt><a href="sce_gdud-pos-AUX.html">AUX</a></tt>-<tt><a href="sce_gdud-pos-PART.html">PART</a></tt> (5; 24% instances), <tt><a href="sce_gdud-pos-AUX.html">AUX</a></tt>-<tt><a href="sce_gdud-pos-ADV.html">ADV</a></tt> (4; 19% instances), <tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="sce_gdud-pos-PART.html">PART</a></tt> (3; 14% instances), <tt><a href="sce_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sce_gdud-pos-PART.html">PART</a></tt> (2; 10% instances), <tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="sce_gdud-pos-INTJ.html">INTJ</a></tt> (2; 10% instances), <tt><a href="sce_gdud-pos-ADV.html">ADV</a></tt>-<tt><a href="sce_gdud-pos-PART.html">PART</a></tt> (1; 5% instances), <tt><a href="sce_gdud-pos-NUM.html">NUM</a></tt>-<tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="sce_gdud-pos-PRON.html">PRON</a></tt>-<tt><a href="sce_gdud-pos-ADV.html">ADV</a></tt> (1; 5% instances), <tt><a href="sce_gdud-pos-PRON.html">PRON</a></tt>-<tt><a href="sce_gdud-pos-PART.html">PART</a></tt> (1; 5% instances), <tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="sce_gdud-pos-ADV.html">ADV</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 discourse	color:blue
1	hə	hə	DET	_	PronType=Dem	3	det	_	_
2	niə	niə	NUM	_	NumType=Card	3	nummod	_	_
3	kuŋ	kuŋ	NOUN	_	_	6	nsubj	_	_
4	lauʂi	lauʂi	NOUN	_	_	6	nmod	_	_
5	puʂi	puʂi	ADV	_	Polarity=Neg	6	discourse	_	_
6	wo	wo	AUX	_	Mood=Ind|VerbForm=Fin	0	root	_	_
7	olu-dʑi	olu-dʑi	PART	_	_	6	discourse	_	_
8	wo-u	wo	AUX	_	Mood=Ind|VerbForm=Fin	6	aux	_	SpaceAfter=No
9	?	?	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 discourse	color:blue
1	puʂi	puʂi	ADV	_	Polarity=Neg	2	discourse	_	_
2	wo	wo	AUX	_	Mood=Ind|VerbForm=Fin	0	root	_	SpaceAfter=No
3	.	.	PUNCT	_	_	2	punct	_	_
4	minurəŋ	minurəŋ	PRON	_	Number=Sing|Person=1|Poss=Yes|PronType=Prs	5	nsubj	_	_
5	puʂi	puʂi	ADV	_	Polarity=Neg	6	discourse	_	_
6	wo	wo	AUX	_	Mood=Ind|VerbForm=Fin	2	parataxis	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_
8	hə	hə	DET	_	PronType=Dem	9	det	_	_
9	ʂi	ʂi	VERB	_	Mood=Ind|VerbForm=Fin	2	parataxis	_	_
10	tʂinurəŋ	tʂinurəŋ	PRON	_	Number=Sing|Person=2|PronType=Prs	9	nsubj	_	_
11	wo	wo	AUX	_	Mood=Ind|VerbForm=Fin	9	aux	_	SpaceAfter=No
12	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 discourse	color:blue
1	lidali	lidali	ADV	_	Degree=Pos	5	advmod	_	_
2	jag	jag	PRON	_	PronType=Int	3	det	_	_
3	ʂidzia	ʂidzia	NOUN	_	Case=Dat	5	obj	_	_
4	pa	pa	AUX	_	VerbForm=Conv	5	aux	_	_
5	mata	mata	VERB	_	Tense=Past	0	root	_	_
6	bi	bi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
7	dagai	dagai	ADV	_	_	12	advmod	_	_
8	ʂi	ʂi	AUX	_	Mood=Ind|VerbForm=Fin	12	aux	_	_
9	uda	uda	NOUN	_	Case=Gen	12	obl:tmod	_	_
10	xoŋku	xoŋku	NOUN	_	_	9	nmod	_	_
11	ʂja	ʂja	NOUN	_	Case=Dat	12	obl:tmod	_	_
12	wo	wo	VERB	_	Tense=Past	5	parataxis	_	_
13	ba	ba	PART	_	_	12	discourse	_	PartType=Disc

~~~


