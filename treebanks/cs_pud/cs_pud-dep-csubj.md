---
layout: base
title:  'Statistics of csubj in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="cs_pud-dep-csubj-pass.html">csubj:pass</a></tt>.

57 nodes (0%) are attached to their parents as `csubj`.

54 instances of `csubj` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.10526315789474.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (28; 49% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (17; 30% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (6; 11% instances), <tt><a href="cs_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (5; 9% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	Lze	lze	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	tu	tu	ADV	Db-------------	PronType=Dem	1	advmod	1:advmod	_
3	najít	najít	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	1	csubj	1:csubj	_
4	paralely	paralela	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	3	obj	3:obj	_
5	mezi	mezi	ADP	RR--7----------	AdpType=Prep|Case=Ins	6	case	6:case	LId=mezi-1
6	hrami	hra	NOUN	NNFP7-----A----	Case=Ins|Gender=Fem|Number=Plur|Polarity=Pos	4	nmod	4:nmod:mezi:ins	LGloss=(dětská;_v_divadle;...)
7	a	a	CCONJ	J^-------------	_	10	cc	10:cc	LId=a-1
8	naším	můj	DET	PSZS7-P1-------	Case=Ins|Gender=Masc,Neut|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	10	det	10:det	LGloss=(přivlast.)
9	každodenním	každodenní	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	10	amod	10:amod	_
10	životem	život	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	6	conj	4:nmod:mezi:ins|6:conj	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	Je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	2:cop	_
2	obtížné	obtížný	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	0	root	0:root	_
3	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pv	4:expl:pv	LGloss=(zvr._zájmeno/částice)
4	myslet	myslet	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	2	csubj	2:csubj	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	8	punct	8:punct	_
6	že	že	SCONJ	J,-------------	_	8	mark	8:mark	LId=že-1
7	Itálie	Itálie	PROPN	NNFS1-----A----	Case=Nom|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	8	nsubj	8:nsubj	_
8	má	mít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	ccomp	4:ccomp	_
9	méně	málo	DET	Dg-------2A----	Degree=Cmp|Polarity=Pos	10	det:numgov	10:det:numgov	LId=málo-3
10	km	km`kilometr	NOUN	NNIXX-----A---8	Abbr=Yes|Animacy=Inan|Gender=Masc|Polarity=Pos	8	obj	8:obj	LId=km`kilometr-1
11	podzemní	podzemní	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	12	amod	12:amod	_
12	dráhy	dráha	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	10	nmod	10:nmod:gen	_
13	než	než	SCONJ	J,-------------	_	14	case	14:case	LId=než-2
14	Madrid	Madrid	PROPN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|NameType=Geo|Number=Sing|Polarity=Pos	9	nmod	9:nmod:než:nom	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 csubj	color:blue
1	Smysl	smysl	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	0	root	0:root	_
2	těchto	tento	DET	PDXP2----------	Case=Gen|Number=Plur|PronType=Dem	3	det	3:det	_
3	slyšení	slyšení	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	1	nmod	1:nmod:gen	LDeriv=slyšet
4	CRTC	CRTC	PROPN	NNXXX-----A---8	Abbr=Yes|NameType=Com|Polarity=Pos	3	nmod	3:nmod	_
5	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	1:cop	_
6	sesbírat	sesbírat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	1	csubj	1:csubj	_
7	reakce	reakce	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	6	obj	6:obj	_
8	průmyslových	průmyslový	ADJ	AAMP2----1A----	Animacy=Anim|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	9	amod	9:amod	_
9	aktérů	aktér	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	7	nmod	7:nmod:gen	_
10	a	a	CCONJ	J^-------------	_	11	cc	11:cc	LId=a-1
11	veřejnosti	veřejnost	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	9	conj	7:nmod:gen|9:conj	SpaceAfter=No|LDeriv=veřejný
12	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


