---
layout: base
title:  'Statistics of aux in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="cs_fictree-dep-aux-pass.html">aux:pass</a></tt>.

4216 nodes (3%) are attached to their parents as `aux`.

2844 instances of `aux` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.90298861480076.

The following 8 pairs of parts of speech are connected with `aux`: <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (3993; 95% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (105; 2% instances), <tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (56; 1% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (51; 1% instances), <tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="cs_fictree-pos-DET.html">DET</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="cs_fictree-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux	color:blue
1	Daly	dát	VERB	VpFP----R-AA---	Gender=Fem|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
2	jsme	být	AUX	VB-P---1P-AA---	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	1:aux	_
3	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pv	1:expl:pv	_
4	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	5	case	5:case	_
5	řeči	řeč	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	1	obl:arg	1:obl:arg:do:gen	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux	color:blue
1	Litoval	litovat	VERB	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
2	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	1:aux	_
3	ho	on	PRON	PHMS4--3-------	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Variant=Short	1	obj	1:obj	_
4	a	a	CCONJ	J^-------------	_	7	cc	7:cc	_
5	byl	být	AUX	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	7	cop	7:cop	_
6	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	7:aux	_
7	šťastný	šťastný	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	1	conj	0:root|1:conj	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 aux	color:blue
1	Zanechat	zanechat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	0	root	0:root	_
2	tu	tu	ADV	Db------------1	PronType=Dem	1	advmod	1:advmod	_
3	pár	pár	NUM	Cn-S4----------	Case=Acc|Number=Sing|NumForm=Word|NumType=Card	4	nummod:gov	4:nummod:gov	_
4	lidí	člověk	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	1	obj	1:obj	_
5	šťastnějších	šťastný	ADJ	AAMP2----2A----	Animacy=Anim|Case=Gen|Degree=Cmp|Gender=Masc|Number=Plur|Polarity=Pos	4	xcomp	4:xcomp	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	11	punct	11:punct	_
7	než	než	SCONJ	J,-------------	_	11	mark	11:mark	_
8	když	když	SCONJ	J,-------------	_	11	mark	11:mark	_
9	bychom	být	AUX	Vc-P---1-------	Mood=Cnd|Number=Plur|Person=1|VerbForm=Fin	11	aux	11:aux	_
10	tu	tu	ADV	Db------------1	PronType=Dem	11	advmod	11:advmod	_
11	nebyli	být	AUX	VpMP----R-NA---	Animacy=Anim|Gender=Masc|Number=Plur|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	5	dep	5:dep	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


