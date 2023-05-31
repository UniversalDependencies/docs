---
layout: base
title:  'Statistics of nsubj:pass in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="cs_pud-dep-nsubj.html">nsubj</a></tt>.

153 nodes (1%) are attached to their parents as `nsubj:pass`.

103 instances of `nsubj:pass` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.45098039215686.

The following 8 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (84; 55% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt> (25; 16% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (23; 15% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (15; 10% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 nsubj:pass	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	3:case	LId=v-1
2	postklasickém	postklasický	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	3	amod	3:amod	_
3	období	období	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	7	obl	7:obl:v:loc	_
4	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	7	aux:pass	7:aux:pass	_
5	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	6:case	LId=v-1
6	Yucatánu	Yucatán	PROPN	NNIS6-----A---1	Animacy=Inan|Case=Loc|Gender=Masc|NameType=Geo|Number=Sing|Polarity=Pos	7	obl	7:obl:v:loc	_
7	používán	používaný	ADJ	VsYS---XX-AP---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	LDeriv=používat
8	třetí	třetí	ADJ	CrIS1----------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|NumType=Ord	9	amod	9:amod	_
9	systém	systém	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	7	nsubj:pass	7:nsubj:pass	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	Rytíř	rytíř	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	2	nmod	2:nmod:nom	_
2	Lyvet	Lyvet	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	4	nsubj:pass	4:nsubj:pass	_
3	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	aux:pass	4:aux:pass	_
4	propuštěn	propuštěný	ADJ	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	LDeriv=propustit
5	a	a	CCONJ	J^-------------	_	8	cc	8:cc	LId=a-1
6	jeho	jeho	DET	PSXXXZS3-------	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	7	det	7:det	LGloss=(přivlast.)
7	stoupenec	stoupenec	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	8	nsubj:pass	8:nsubj:pass	_
8	uvržen	uvržený	ADJ	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	4	conj	0:root|4:conj	LDeriv=uvrhnout
9	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	10	case	10:case	LId=do-1
10	Toweru	Tower	PROPN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|NameType=Geo|Number=Sing|Polarity=Pos	8	obl	8:obl:do:gen	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	Žádný	žádný	DET	PWYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Neg	2	det	2:det	_
2	karneval	karneval	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	5	nsubj:pass	5:nsubj:pass	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pass	5:expl:pass	LGloss=(zvr._zájmeno/částice)
4	tu	tu	ADV	Db-------------	PronType=Dem	5	advmod	5:advmod	_
5	nepořádá	pořádat	VERB	VB-S---3P-NA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	a	a	CCONJ	J^-------------	_	8	cc	8:cc	LId=a-1
7	nikdy	nikdy	ADV	Db-------------	PronType=Neg	8	advmod	8:advmod	_
8	nepořádal	pořádat	VERB	VpYS---XR-NA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	5	conj	0:root|5:conj	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


