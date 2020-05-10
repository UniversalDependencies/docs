---
layout: base
title:  'Statistics of csubj:pass in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="cs_pud-dep-csubj.html">csubj</a></tt>.

10 nodes (0%) are attached to their parents as `csubj:pass`.

9 instances of `csubj:pass` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.3.

The following 3 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (6; 60% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (3; 30% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 csubj:pass	color:blue
1	Obecně	obecně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	3:advmod	LDeriv=obecný
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pass	3:expl:pass	LGloss=(zvr._zájmeno/částice)
3	věří	věřit	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
5	že	že	SCONJ	J,-------------	_	10	mark	10:mark	LId=že-1
6	poslední	poslední	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	8	amod	8:amod	_
7	Olympijské	olympijský	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	8	amod	8:amod	_
8	hry	hra	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	10	nsubj	10:nsubj	LGloss=(dětská;_v_divadle;...)
9	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	10	expl:pv	10:expl:pv	LGloss=(zvr._zájmeno/částice)
10	konaly	konat	VERB	VpTP---XR-AA---	Animacy=Inan|Aspect=Imp|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	csubj:pass	3:csubj:pass	_
11	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	12	case	12:case	LId=v-1
12	roce	rok	NOUN	NNIS6-----A---1	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	10	obl	10:obl:v:loc	_
13	393	393	NUM	C=-------------	NumForm=Digit|NumType=Card	12	nummod	12:nummod	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 csubj:pass	color:blue
1	Užít	užít	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	9	csubj:pass	9:csubj:pass	_
2	toto	tento	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	3	det	3:det	_
3	jméno	jméno	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	1	obj	1:obj	_
4	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux:pass	9:aux:pass	_
5	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	8:case	LId=v-1
6	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	5	fixed	5:fixed	_
7	císařské	císařský	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	8	amod	8:amod	_
8	rodiny	rodina	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	9	obl	9:obl:v_případ:gen	_
9	považováno	považovaný	ADJ	VsNS---XX-AP---	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	LDeriv=považovat
10	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	12	case	12:case	_
11	krajně	krajně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	12	advmod	12:advmod	LDeriv=krajní
12	nevhodné	vhodný	ADJ	AANS4----1N----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Neg	9	obl:arg	9:obl:arg:za:acc	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 csubj:pass	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	3:case	LId=v-1
2	jedné	jeden	NUM	ClFS6----------	Case=Loc|Gender=Fem|Number=Sing|NumForm=Word|NumType=Card|NumValue=1,2,3	3	nummod	3:nummod	LNumValue=1
3	chvíli	chvíle	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	5	obl	5:obl:v:loc	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pass	5:expl:pass	LGloss=(zvr._zájmeno/částice)
5	naznačuje	naznačovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	11	punct	11:punct	_
7	že	že	SCONJ	J,-------------	_	11	mark	11:mark	LId=že-1
8	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	11:cop	_
9	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	11	nsubj	11:nsubj	_
10	tajný	tajný	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	11	amod	11:amod	_
11	agent	agent	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	5	csubj:pass	5:csubj:pass	_
12	sledující	sledující	ADJ	AGMS1-----A----	Animacy=Anim|Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	11	amod	11:amod	LDeriv=sledovat
13	Homera	Homer	PROPN	NNMS4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	12	nmod	12:nmod:acc	SpaceAfter=No|LId=Homer-1
14	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


