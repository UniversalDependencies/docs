---
layout: base
title:  'Statistics of fixed in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `fixed`

This relation is universal.

355 nodes (1%) are attached to their parents as `fixed`.

355 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.16901408450704.

The following 7 pairs of parts of speech are connected with `fixed`: <tt><a href="cs_cltt-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (251; 71% instances), <tt><a href="cs_cltt-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_cltt-pos-ADP.html">ADP</a></tt> (64; 18% instances), <tt><a href="cs_cltt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_cltt-pos-PART.html">PART</a></tt> (33; 9% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt>-<tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="cs_cltt-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 fixed	color:blue
1	Obdobně	obdobně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	3:advmod	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pass	3:expl:pass	_
3	postupuje	postupovat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	7:case	LId=v-1
5	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	fixed	4:fixed	_
6	technického	technický	ADJ	AANS2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	7	amod	7:amod	_
7	zhodnocení	zhodnocení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing	3	obl	3:obl:v_případě:gen	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 fixed	color:blue
1	Spotřeba	spotřeba	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	4:nsubj	_
2	povolenek	povolenka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur	1	nmod	1:nmod:gen	_
3	je	být	AUX	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
4	vykázána	vykázaný	ADJ	VsQW---XX-AP---	Degree=Pos|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	LDeriv=vykázat
5	bez	bez	ADP	RR--2----------	AdpType=Prep|Case=Gen	10	case	10:case	LId=bez-1
6	ohledu	ohled	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	fixed	5:fixed	_
7	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	fixed	5:fixed	LId=na-1
8	jejich	jeho	DET	PSXXXXP3-------	Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	10	det	10:det	_
9	následné	následný	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	10	amod	10:amod	_
10	vyřazení	vyřazení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	4	obl	4:obl:bez_ohledu_na:acc	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 20 fixed	color:blue
1	O	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	4:case	LId=o-1
2	případnou	případný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	4:amod	_
3	následnou	následný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	4:amod	_
4	změnu	změna	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	12	obl	12:obl:o:acc	_
5	kupní	kupní	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	6	amod	6:amod	_
6	ceny	cena	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	4	nmod	4:nmod:gen	LId=cena-2
7	podniku	podnik	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	nmod	6:nmod:gen	_
8	nebo	nebo	CCONJ	J^-------------	_	10	cc	10:cc	_
9	jeho	jeho	DET	PSXXXZS3-------	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	10	det	10:det	_
10	části	část	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	7	conj	6:nmod:gen|7:conj	_
11	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	12	expl:pass	12:expl:pass	_
12	upraví	upravit	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
13	hodnota	hodnota	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	12	nsubj:pass	12:nsubj:pass	_
14	goodwillu	goodwill	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	13	nmod	13:nmod:gen	_
15	nebo	nebo	CCONJ	J^-------------	_	17	cc	17:cc	_
16	záporného	záporný	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	17	amod	17:amod	_
17	goodwillu	goodwill	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	14	conj	13:nmod:gen|14:conj	SpaceAfter=No
18	,	,	PUNCT	Z:-------------	_	22	punct	22:punct	_
19	a	a	CCONJ	J^-------------	_	22	cc	22:cc	LId=a-1
20	to	to	PART	PDNS4----------	_	19	fixed	19:fixed	_
21	beze	bez	ADP	RV--2----------	AdpType=Voc|Case=Gen	22	case	22:case	LId=bez-1
22	změny	změna	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	12	obl	12:obl:bez:gen	_
23	doby	doba	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	22	nmod	22:nmod:gen	_
24	odpisování	odpisování	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing	23	nmod	23:nmod:gen	SpaceAfter=No
25	.	.	PUNCT	Z:-------------	_	12	punct	12:punct	_

~~~


