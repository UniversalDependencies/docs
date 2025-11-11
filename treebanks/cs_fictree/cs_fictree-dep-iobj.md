---
layout: base
title:  'Statistics of iobj in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `iobj`

This relation is universal.

106 nodes (0%) are attached to their parents as `iobj`.

68 instances of `iobj` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.57547169811321.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (66; 62% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (29; 27% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt> (5; 5% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (3; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 iobj	color:blue
1	Nějací	nějaký	DET	PZMP1----------	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|PronType=Ind	2	det	2:det	_
2	lidé	člověk	NOUN	NNMP1-----A---1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	7	nsubj	7:nsubj	_
3	doma	doma	ADV	Db-------------	_	2	advmod	2:advmod	_
4	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	5:case	_
5	Čáslavi	Čáslav	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Number=Sing	2	nmod	2:nmod:v:loc	_
6	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	iobj	7:iobj	_
7	nabídli	nabídnout	VERB	VpMP----R-AA--1	Animacy=Anim|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	13	punct	13:punct	_
9	že	že	SCONJ	J,-------------	_	13	mark	13:mark	_
10	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	13	expl:pv	13:expl:pv	_
11	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	12	case	12:case	_
12	mě	já	PRON	PH-S4--1-------	Case=Acc|Number=Sing|Person=1|PronType=Prs|Variant=Short	13	obl:arg	13:obl:arg:o:acc	_
13	postarají	postarat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	ccomp	7:ccomp	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	Často	často	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	3:advmod|9:advmod|11:advmod	_
2	jsem	být	AUX	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	3:aux|9:aux|11:aux	_
3	zvedl	zvednout	VERB	VpMS----R-AA--1	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
4	víko	víko	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	3	iobj	3:iobj	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
6	zálibně	zálibně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	9	advmod	9:advmod	_
7	si	se	PRON	P7--3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	9	discourse	9:discourse	_
8	je	on	PRON	PPMP4--3-------	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs	3	obj	3:obj|9:obj|11:obj	_
9	prohlížel	prohlížet	VERB	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	conj	0:root|3:conj	_
10	a	a	CCONJ	J^-------------	_	11	cc	11:cc	_
11	očuchával	očuchávat	VERB	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	conj	0:root|3:conj	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 iobj	color:blue
1	Co	co	PRON	PQ--1----------	Animacy=Inan|Case=Nom|PronType=Int,Rel	3	nsubj	3:nsubj|5:nsubj:xsubj	_
2	jiného	jiný	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	1	nmod	1:nmod:gen	_
3	mohlo	moci	VERB	VpNS----R-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
4	Filipa	Filip	PROPN	NNMS4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|NameType=Giv|Number=Sing	5	iobj	5:iobj	_
5	přimět	přimět	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	3	xcomp	3:xcomp	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
7	aby	aby	SCONJ	J,-------------	_	10	mark	10:mark	_
8	by	být	AUX	Vc-------------	Aspect=Imp|Mood=Cnd|VerbForm=Fin	10	aux	10:aux	_
9	mi	já	PRON	PH-S3--1-------	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Short	10	obl:arg	10:obl:arg:dat	_
10	telefonoval	telefonovat	VERB	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	ccomp	5:ccomp	SpaceAfter=No
11	?	?	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


