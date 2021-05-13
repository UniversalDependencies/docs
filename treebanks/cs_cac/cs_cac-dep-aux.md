---
layout: base
title:  'Statistics of aux in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="cs_cac-dep-aux-pass.html">aux:pass</a></tt>.

3623 nodes (1%) are attached to their parents as `aux`.

3231 instances of `aux` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.54181617444107.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (3090; 85% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (449; 12% instances), <tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (55; 2% instances), <tt><a href="cs_cac-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (12; 0% instances), <tt><a href="cs_cac-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (9; 0% instances), <tt><a href="cs_cac-pos-DET.html">DET</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="cs_cac-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Zvýšené	zvýšený	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	2	amod	2:amod	LDeriv=zvýšit
2	úsilí	úsilí	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	4	obj	4:obj	_
3	budeme	být	AUX	VB-P---1F-AA---	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
4	věnovat	věnovat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	0	root	0:root	_
5	zavádění	zavádění	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos	4	obl:arg	4:obl:arg:dat	LDeriv=zavádět
6	nových	nový	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	7:amod	_
7	poznatků	poznatek	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	5	nmod	5:nmod:gen	_
8	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	9:case	LId=do-1
9	praxe	praxe	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	5	nmod	5:nmod:do:gen	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 aux	color:blue
1	Není	být	AUX	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
2	tedy	tedy	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	3:advmod	_
3	nutné	nutný	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	8	punct	8:punct	_
5	aby	aby	SCONJ	J,-------------	_	8	mark	8:mark	_
6	by	být	AUX	Vc-------------	Mood=Cnd|Person=3|VerbForm=Fin	8	aux	8:aux	_
7	byla	být	AUX	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	8	aux:pass	8:aux:pass	_
8	splněna	splněný	ADJ	VsQW---XX-AP---	Aspect=Perf|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	3	csubj	3:csubj	LDeriv=splnit
9	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	11	case	11:case	LId=v-1
10	každém	každý	DET	AAIS6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|PronType=Tot	11	det	11:det	_
11	roce	rok	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	8	obl	8:obl:v:loc	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	To	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	nsubj	4:nsubj	_
2	by	být	AUX	Vc-X---3-------	Mood=Cnd|Person=3|VerbForm=Fin	4	aux	4:aux	_
3	byla	být	AUX	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	cop	4:cop	_
4	tragédie	tragedie	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	0	root	0:root	SpaceAfter=No
5	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


