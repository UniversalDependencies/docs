---
layout: base
title:  'Statistics of nmod in UD_Dongxiang-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Dongxiang-GDUD: Relations: `nmod`

This relation is universal.
There are 2 language-specific subtypes of `nmod`: <tt><a href="sce_gdud-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="sce_gdud-dep-nmod-tmod.html">nmod:tmod</a></tt>.

34 nodes (4%) are attached to their parents as `nmod`.

22 instances of `nmod` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.58823529411765.

The following 10 pairs of parts of speech are connected with `nmod`: <tt><a href="sce_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sce_gdud-pos-NOUN.html">NOUN</a></tt> (17; 50% instances), <tt><a href="sce_gdud-pos-AUX.html">AUX</a></tt>-<tt><a href="sce_gdud-pos-NOUN.html">NOUN</a></tt> (4; 12% instances), <tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="sce_gdud-pos-NOUN.html">NOUN</a></tt> (3; 9% instances), <tt><a href="sce_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sce_gdud-pos-PROPN.html">PROPN</a></tt> (2; 6% instances), <tt><a href="sce_gdud-pos-PRON.html">PRON</a></tt>-<tt><a href="sce_gdud-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="sce_gdud-pos-PRON.html">PRON</a></tt> (2; 6% instances), <tt><a href="sce_gdud-pos-PART.html">PART</a></tt>-<tt><a href="sce_gdud-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="sce_gdud-pos-PRON.html">PRON</a></tt>-<tt><a href="sce_gdud-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="sce_gdud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sce_gdud-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="sce_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="sce_gdud-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod	color:blue
1	xoyir	xoyir	NUM	_	NumType=Card	2	nummod	_	_
2	longk	longk	NOUN	_	Number=Plur	3	nmod	_	_
3	süü	süü	NOUN	_	Number=Sing	0	root	_	SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod	color:blue
1	bi	bi	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	ʂi	ʂi	VERB	_	Mood=Ind|VerbForm=Fin	0	root	_	_
3	ʨiaʂəŋ⁷	ʨiaʂəŋ	NOUN	_	_	2	nmod	_	_
4	wo	wo	AUX	_	Mood=Ind|VerbForm=Fin	2	aux	_	SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	_
6	mini	mini	PRON	_	Number=Sing|Person=1|Poss=Yes|PronType=Prs	7	nmod:poss	_	_
7	niərə	niərə	NOUN	_	_	8	nsubj	_	_
8	ʂi	ʂi	VERB	_	Mood=Ind|VerbForm=Fin	2	parataxis	_	_
9	Tuja	Tuja	PROPN	_	_	8	nmod	_	_
10	wo	wo	AUX	_	Mood=Ind|VerbForm=Fin	8	aux	_	SpaceAfter=No
11	.	.	PUNCT	_	_	8	punct	_	_

~~~


