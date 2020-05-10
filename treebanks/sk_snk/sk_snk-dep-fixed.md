---
layout: base
title:  'Statistics of fixed in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `fixed`

This relation is universal.

189 nodes (0%) are attached to their parents as `fixed`.

189 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.12698412698413.

The following 12 pairs of parts of speech are connected with `fixed`: <tt><a href="sk_snk-pos-ADP.html">ADP</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (58; 31% instances), <tt><a href="sk_snk-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="sk_snk-pos-SCONJ.html">SCONJ</a></tt> (45; 24% instances), <tt><a href="sk_snk-pos-ADP.html">ADP</a></tt>-<tt><a href="sk_snk-pos-ADP.html">ADP</a></tt> (31; 16% instances), <tt><a href="sk_snk-pos-ADV.html">ADV</a></tt>-<tt><a href="sk_snk-pos-ADP.html">ADP</a></tt> (19; 10% instances), <tt><a href="sk_snk-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="sk_snk-pos-SCONJ.html">SCONJ</a></tt> (15; 8% instances), <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-ADP.html">ADP</a></tt> (6; 3% instances), <tt><a href="sk_snk-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="sk_snk-pos-PART.html">PART</a></tt> (4; 2% instances), <tt><a href="sk_snk-pos-PART.html">PART</a></tt>-<tt><a href="sk_snk-pos-SCONJ.html">SCONJ</a></tt> (4; 2% instances), <tt><a href="sk_snk-pos-PART.html">PART</a></tt>-<tt><a href="sk_snk-pos-PART.html">PART</a></tt> (3; 2% instances), <tt><a href="sk_snk-pos-PART.html">PART</a></tt>-<tt><a href="sk_snk-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="sk_snk-pos-ADV.html">ADV</a></tt>-<tt><a href="sk_snk-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="sk_snk-pos-X.html">X</a></tt>-<tt><a href="sk_snk-pos-ADP.html">ADP</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	V	v	ADP	Eu6	AdpType=Prep|Case=Loc	4	case	4:case	_
2	súlade	súlad	NOUN	SSis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	1	fixed	1:fixed	_
3	s	s	ADP	Eu7	AdpType=Prep|Case=Ins	1	fixed	1:fixed	_
4	plánom	plán	NOUN	SSis7	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	6	obl	6:obl:v_súlad_s:ins	_
5	pritom	pritom	ADV	Dx	Degree=Pos	6	advmod	6:advmod	_
6	posilili	posiliť	VERB	VLdpcm+:q	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|Typo=Yes|VerbForm=Part	0	root	0:root	_
7	svoj	svoj	DET	PFis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	8	det	8:det	_
8	útvar	útvar	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	obj	6:obj	_
9	po	po	ADP	Eu6	AdpType=Prep|Case=Loc	10	case	10:case	_
10	krídlach	krídlo	NOUN	SSnp6	Case=Loc|Gender=Neut|Number=Plur	6	obl	6:obl:po:loc	_
11	šíku	šík	NOUN	SSis2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	10	nmod	10:nmod:gen	SpaceAfter=No
12	.	.	PUNCT	Z	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 fixed	color:blue
1	Srdce	srdce	NOUN	SSns1	Case=Nom|Gender=Neut|Number=Sing	3	nsubj	3:nsubj	_
2	mi	ja	PRON	PPhs3	Case=Dat|Number=Sing|Person=1|PronType=Prs	3	obl:arg	3:obl:arg:dat	_
3	bilo	biť	VERB	VLescn+	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
4	ako	ako	SCONJ	O	_	5	mark	5:mark	_
5	zvon	zvon	NOUN	SSis1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	dep	3:dep	SpaceAfter=No
6	,	,	PUNCT	Z	_	8	punct	8:punct	_
7	no	no	CCONJ	O	_	8	cc	8:cc	_
8	odľahlo	odľahnúť	VERB	VLdscn+	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	3	conj	0:root|3:conj	_
9	mi	ja	PRON	PPhs3	Case=Dat|Number=Sing|Person=1|PronType=Prs	8	obl:arg	8:obl:arg:dat	SpaceAfter=No
10	,	,	PUNCT	Z	_	15	punct	15:punct	_
11	len	len	CCONJ	O	_	15	mark	15:mark	_
12	čo	čo	SCONJ	O	_	11	fixed	11:fixed	_
13	za	za	ADP	Eu7	AdpType=Prep|Case=Ins	14	case	14:case	_
14	sebou	seba	PRON	PPhs7	Case=Ins|Number=Sing|PronType=Prs|Reflex=Yes	15	obl	15:obl:za:ins	_
15	zavrela	zavrieť	VERB	VLdscf+	Aspect=Perf|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	8	advcl	8:advcl:len_čo	SpaceAfter=No
16	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Spolu	spolu	ADP	Eu7	AdpType=Prep|Case=Ins	3	case	3:case	_
2	s	s	ADP	Eu7	AdpType=Prep|Case=Ins	1	fixed	1:fixed	_
3	ním	on	PRON	PFms7	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	obl	4:obl:spolu_s:ins	_
4	padli	padnúť	VERB	VLdpcf+	Aspect=Perf|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
5	dve	dva	NUM	NNfp1	Case=Nom|Gender=Fem|Number=Plur	6	nummod	6:nummod	_
6	tretiny	tretina	NOUN	SSfp1	Case=Nom|Gender=Fem|Number=Plur	4	nsubj	4:nsubj	_
7	vojakov	vojak	NOUN	SSmp2	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	6	nmod	6:nmod:gen	SpaceAfter=No
8	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


