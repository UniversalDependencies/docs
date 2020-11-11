---
layout: base
title:  'Statistics of dislocated in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `dislocated`

This relation is universal.

57 nodes (0%) are attached to their parents as `dislocated`.

50 instances of `dislocated` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.7017543859649.

The following 13 pairs of parts of speech are connected with `dislocated`: <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (25; 44% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (11; 19% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (4; 7% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (3; 5% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (3; 5% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (3; 5% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (2; 4% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-X.html">X</a></tt> (1; 2% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 dislocated	color:blue
1	(	(	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
2	Ag	ag	ADP	Simp	_	3	case	_	_
3	béicíl	béicíl	NOUN	Noun	VerbForm=Vnoun	5	dislocated	_	SpaceAfter=No
4	)	)	PUNCT	Punct	_	3	punct	_	_
5	Téigh	téigh	VERB	VTI	Mood=Imp|Number=Sing|Person=2	0	root	_	_
6	abhaile	abhaile	ADV	Dir	_	5	advmod	_	SpaceAfter=No
7	,	,	PUNCT	Punct	_	8	punct	_	_
8	a	a	PART	Voc	PartType=Voc	9	case:voc	_	_
9	bhithiúnaigh	bithiúnach	NOUN	Noun	Case=Voc|Form=Len|Gender=Masc|Number=Sing	5	vocative	_	SpaceAfter=No
10	!	!	PUNCT	!	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 15 dislocated	color:blue
1	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	seacht	seacht	NUM	Num	NumType=Card	4	nummod	_	_
3	déag	déag	NOUN	Subst	Number=Sing	2	compound	_	_
4	bainisteoir	bainisteoir	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	nsubj	_	_
5	cúnta	cúnta	ADJ	Adj	Gender=Masc|Number=Sing	4	amod	_	_
6	maoinithe	maoinithe	ADJ	Adj	VerbForm=Part	1	xcomp:pred	_	_
7	faoin	faoi	ADP	Art	Number=Sing|PronType=Art	8	case	_	_
8	scéim	scéim	NOUN	Noun	Definite=Def|Gender=Fem|Number=Sing	6	obl	_	_
9	seo	seo	DET	Det	PronType=Dem	8	det	_	_
10	ag	ag	ADP	Simp	_	11	case	_	_
11	deireadh	deireadh	NOUN	Noun	Gender=Masc|Number=Sing	1	obl:tmod	_	_
12	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	bliana	bliain	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	11	nmod	_	SpaceAfter=No
14	,	,	PUNCT	Punct	_	15	punct	_	_
15	cúigear	cúigear	NOUN	Noun	Gender=Masc|Number=Sing	4	dislocated	_	_
16	acu	ag	ADP	Prep	Number=Plur|Person=3	15	obl:prep	_	_
17	fostaithe	fostaithe	ADJ	Adj	VerbForm=Part	15	xcomp:pred	_	_
18	le	le	ADP	Simp	_	19	case	_	_
19	comharchumainn	comharchumann	NOUN	Noun	Gender=Fem|Number=Sing	17	obl	_	_
20	oileánda	oileánda	ADJ	Adj	Gender=Fem|Number=Sing	19	amod	_	SpaceAfter=No
21	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 13 dislocated	color:blue
1	Féach	féach	VERB	VTI	Mood=Imp|Number=Sing|Person=2	0	root	_	_
2	ar	ar	ADP	Simp	_	4	case	_	_
3	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
4	tábla	tábla	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	1	obl	_	_
5	i	i	ADP	Simp	_	6	case	_	_
6	bhFíor	fíor	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	1	obl	_	_
7	69.2	69.2	NUM	Num	_	6	nmod	_	_
8	Féach	féach	VERB	VTI	Mood=Imp|Number=Sing|Person=2	1	dislocated	_	_
9	ar	ar	ADP	Simp	_	10	case	_	_
10	Fhíoracha	fíor	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Plur	8	obl	_	_
11	37.3	37.3	NUM	Num	_	10	nmod	_	_
12	'	'	PUNCT	Punct	_	13	punct	_	SpaceAfter=No
13	Féach	féach	VERB	VTI	Mood=Imp|Number=Sing|Person=2	1	dislocated	_	_
14	liom	le	ADP	Prep	Number=Sing|Person=1	13	obl:prep	_	SpaceAfter=No
15	.	.	PUNCT	.	_	1	punct	_	_

~~~


