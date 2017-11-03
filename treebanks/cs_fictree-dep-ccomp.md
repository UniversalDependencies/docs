---
layout: base
title:  'Statistics of ccomp in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `ccomp`

This relation is universal.

2215 nodes (1%) are attached to their parents as `ccomp`.

1595 instances of `ccomp` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.83476297968397.

The following 15 pairs of parts of speech are connected with `ccomp`: <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (1891; 85% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (134; 6% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (91; 4% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (31; 1% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (29; 1% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (22; 1% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="cs_fictree-pos-DET.html">DET</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="cs_fictree-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="cs_fictree-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 ccomp	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 ccomp	color:blue
1	"	"	PUNCT	Z:-------------	_	9	punct	_	_
2	Že	že	SCONJ	J,-------------	_	4	mark	_	_
3	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	pravdivý	pravdivý	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	11	ccomp	_	_
5	,	,	PUNCT	Z:-------------	_	4	punct	_	_
6	vám	ty	PRON	PP-P3--2-------	Case=Dat|Number=Plur|Person=2|PronType=Prs	11	iobj	_	_
7	ale	ale	CCONJ	J^-------------	_	9	cc	_	_
8	budu	být	AUX	VB-S---1F-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	9	aux	_	_
9	moci	moci	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	0	root	_	_
10	snadno	snadno	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	11	advmod	_	_
11	dokázat	dokázat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	9	xcomp	_	_
12	.	.	PUNCT	Z:-------------	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 ccomp	color:blue
1	Vy	ty	PRON	PP-P1--2-------	Case=Nom|Number=Plur|Person=2|PronType=Prs	3	nsubj	_	_
2	asi	asi	PART	TT-------------	_	3	advmod	_	_
3	nevíte	vědět	VERB	VB-P---2P-NA---	Mood=Ind|Number=Plur|Person=2|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	,	,	PUNCT	Z:-------------	_	9	punct	_	_
5	jaké	jaký	DET	P4NS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Int,Rel	9	det	_	_
6	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	9	nsubj	_	_
7	byly	být	AUX	VpIP----R-AA---	Animacy=Inan|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	9	cop	_	_
8	hrozné	hrozný	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	9	amod	_	_
9	útoky	útok	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	3	ccomp	_	_
10	za	za	ADP	RR--2----------	AdpType=Prep|Case=Gen	13	case	_	_
11	první	první	ADJ	CrFS2----------	Case=Gen|Gender=Fem|Number=Sing|NumType=Ord	13	amod	_	_
12	světové	světový	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	_	_
13	války	válka	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	9	obl	_	_
14	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


