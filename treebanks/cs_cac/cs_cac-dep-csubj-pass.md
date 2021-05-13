---
layout: base
title:  'Statistics of csubj:pass in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="cs_cac-dep-csubj.html">csubj</a></tt>.

172 nodes (0%) are attached to their parents as `csubj:pass`.

168 instances of `csubj:pass` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.

The following 10 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-VERB.html">VERB</a></tt> (81; 47% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-VERB.html">VERB</a></tt> (45; 26% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt> (18; 10% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt> (11; 6% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt> (6; 3% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt> (6; 3% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 csubj:pass	color:blue
1	Při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	2:case	LId=při-1
2	sklizni	sklizeň	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	5	obl	5:obl:při:loc	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pass	5:expl:pass	LGloss=(zvr._zájmeno/částice)
4	nejlépe	dobře	ADV	Dg-------3A----	Degree=Sup|Polarity=Pos	5	advmod	5:advmod	_
5	pozná	poznat	VERB	VB-S---3P-AA---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
7	kdo	kdo	PRON	PKM-1----------	Animacy=Anim|Case=Nom|Gender=Masc|PronType=Int,Rel	9	nsubj	9:nsubj	_
8	dobře	dobře	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	9	advmod	9:advmod	_
9	hospodařil	hospodařit	VERB	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	csubj:pass	5:csubj:pass	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj:pass	color:blue
1	Bartošovi	Bartoš	PROPN	NNMS3-----A---1	Animacy=Anim|Case=Dat|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	2	obl:arg	2:obl:arg:dat	_
2	přikázáno	přikázaný	ADJ	VsNS---XX-AP---	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	LDeriv=přikázat
3	urychleně	urychleně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	4	advmod	4:advmod	LDeriv=urychlit
4	vyklidit	vyklidit	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	2	csubj:pass	2:csubj:pass	_
5	místnost	místnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	4	obj	4:obj	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 csubj:pass	color:blue
1	Tvrdí	tvrdit	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pass	1:expl:pass	LGloss=(zvr._zájmeno/částice)
3	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	4:case	LId=o-1
4	mně	já	PRON	PP-S6--1-------	Case=Loc|Number=Sing|Person=1|PronType=Prs	1	obl:arg	1:obl:arg:o:loc	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
6	že	že	SCONJ	J,-------------	_	10	mark	10:mark	_
7	mi	já	PRON	PH-S3--1-------	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Short	10	obl	10:obl:dat	_
8	není	být	AUX	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	10:cop	_
9	nic	nic	PRON	PW--1----------	Case=Nom|PronType=Neg	10	nsubj	10:nsubj	_
10	svaté	svatý	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	1	csubj:pass	1:csubj:pass	SpaceAfter=No|LId=svatý-1
11	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


