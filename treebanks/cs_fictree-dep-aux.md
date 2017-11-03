---
layout: base
title:  'Statistics of aux in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="cs_fictree-dep-aux-pass.html">aux:pass</a></tt>.

4168 nodes (2%) are attached to their parents as `aux`.

2819 instances of `aux` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.84932821497121.

The following 9 pairs of parts of speech are connected with `aux`: <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (4005; 96% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (99; 2% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (44; 1% instances), <tt><a href="cs_fictree-pos-PART.html">PART</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="cs_fictree-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="cs_fictree-pos-DET.html">DET</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux	color:blue
1	Řekl	říci	VERB	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	bych	být	AUX	Vc-S---1-------	Mood=Cnd|Number=Sing|Person=1|VerbForm=Fin	1	aux	_	_
3	skoro	skoro	ADV	Db-------------	_	1	advmod	_	_
4	,	,	PUNCT	Z:-------------	_	7	punct	_	_
5	že	že	SCONJ	J,-------------	_	7	mark	_	_
6	děti	dítě	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	7	nsubj	_	_
7	mají	mít	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	_
8	jiná	jiný	ADJ	AANP4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos	9	amod	_	_
9	ústa	ústa	NOUN	NNNP4-----A----	Case=Acc|Gender=Neut|Number=Plur|Polarity=Pos	7	obj	_	_
10	než	než	SCONJ	J,-------------	_	12	mark	_	_
11	velcí	velký	ADJ	AAMP1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	12	amod	_	_
12	lidé	člověk	NOUN	NNMP1-----A---1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	8	advcl	_	_
13	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Byl	být	AUX	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	cop	_	_
2	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	mladý	mladý	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	0	root	_	_
4	a	a	CCONJ	J^-------------	_	5	cc	_	_
5	prudký	prudký	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	conj	_	_
6	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 aux	color:blue
1	Když	když	SCONJ	J,-------------	_	6	mark	_	_
2	byste	být	AUX	Vc-P---2-------	Mood=Cnd|Number=Plur|Person=2|VerbForm=Fin	6	aux	_	_
3	byli	být	AUX	VpMP----R-AA---	Animacy=Anim|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	6	cop	_	_
4	svými	svůj	DET	P8FP7----------	Case=Ins|Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	6	det	_	_
5	vlastními	vlastní	ADJ	AAFP7----1A----	Case=Ins|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	6	amod	_	_
6	dětmi	dítě	NOUN	NNFP7-----A----	Case=Ins|Gender=Fem|Number=Plur|Polarity=Pos	10	advcl	_	_
7	,	,	PUNCT	Z:-------------	_	6	punct	_	_
8	byli	být	AUX	VpMP----R-AA---	Animacy=Anim|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	10	cop	_	_
9	byste	být	AUX	Vc-P---2-------	Mood=Cnd|Number=Plur|Person=2|VerbForm=Fin	10	aux	_	_
10	šťastní	šťastný	ADJ	AAMP1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	0	root	_	_
11	?	?	PUNCT	Z:-------------	_	10	punct	_	_

~~~


