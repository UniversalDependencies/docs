---
layout: base
title:  'Statistics of compound:prt in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="ga_idt-dep-compound.html">compound</a></tt>.

51 nodes (0%) are attached to their parents as `compound:prt`.

51 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.01960784313725.

The following 5 pairs of parts of speech are connected with `compound:prt`: <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (16; 31% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (15; 29% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (11; 22% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (8; 16% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 compound:prt	color:blue
1	Airteagal	airteagal	NOUN	Noun	Gender=Masc|Number=Sing	3	obl	_	_
2	26	26	NUM	Num	_	1	nmod	_	_
3	Féadfar	féad	VERB	VTI	Mood=Ind|Tense=Fut|Voice=Auto	0	root	_	_
4	finnéithe	finné	NOUN	Noun	Gender=Masc|Number=Plur	3	obj	_	_
5	a	a	PART	Inf	PartType=Inf	6	mark	_	_
6	éisteacht	éisteacht	NOUN	Noun	VerbForm=Inf	3	xcomp	_	_
7	faoi	faoi	ADP	Simp	_	8	case	_	_
8	choinníollacha	coinníoll	NOUN	Noun	Form=Len|Gender=Masc|Number=Plur	6	obl	_	_
9	a	a	PART	Vb	PartType=Vb|PronType=Rel	10	nsubj	_	_
10	bheidh	bí	VERB	FutInd	Form=Len|Mood=Ind|Tense=Fut	8	acl:relcl	_	_
11	leagtha	leagtha	ADJ	Adj	VerbForm=Part	10	xcomp:pred	_	_
12	síos	síos	ADV	Dir	_	11	compound:prt	_	_
13	sna	i	ADP	Art	Number=Plur|PronType=Art	14	case	_	_
14	rialacha	riail	NOUN	Noun	Gender=Fem|Number=Plur	11	obl	_	_
15	nós	nós	NOUN	Noun	Gender=Masc|Number=Sing	14	nmod	_	_
16	imeachta	imeacht	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	15	compound	_	SpaceAfter=No
17	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 compound:prt	color:blue
1	B'	is	AUX	Cop	Form=VF|Tense=Past|VerbForm=Cop	2	cop	_	SpaceAfter=No
2	fhéidir	féidir	NOUN	Subst	Form=Len|Number=Sing	0	root	_	_
3	leat	le	ADP	Prep	Number=Sing|Person=2	2	obl:prep	_	_
4	tasc	tasc	NOUN	Noun	Gender=Masc|Number=Sing	13	obj	_	_
5	nó	nó	CCONJ	Coord	_	6	cc	_	_
6	cruacheist	ceist	NOUN	Noun	Gender=Fem|Number=Sing	4	conj	_	_
7	a	a	PART	Vb	PartType=Vb|PronType=Rel	8	nsubj	_	_
8	bhaineann	bain	VERB	VTI	Form=Len|Mood=Ind|Tense=Pres	4	acl:relcl	_	_
9	leis	le	ADP	Simp	_	11	case	_	_
10	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	11	det	_	_
11	bpost	post	NOUN	Noun	Gender=Masc|Number=Sing	8	obl	_	_
12	a	a	PART	Inf	PartType=Inf	13	mark	_	_
13	leagan	leagan	NOUN	Noun	VerbForm=Inf	2	csubj:cop	_	_
14	amach	amach	ADV	Dir	_	13	compound:prt	_	_
15	don	do	ADP	Art	Number=Sing|PronType=Art	16	case	_	_
16	duine	duine	NOUN	Noun	Definite=Def|Gender=Masc|Number=Sing	13	obl	_	SpaceAfter=No
17	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound:prt	color:blue
1	Níor	níor	PART	Vb	PartType=Vb|Tense=Past	2	advmod	_	_
2	leagadh	leag	VERB	VTI	Mood=Ind|Tense=Past|Voice=Auto	0	root	_	_
3	amach	amach	ADV	Dir	_	2	compound:prt	_	_
4	modh	modh	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	2	obj	_	_
5	agus	agus	CCONJ	Coord	_	6	cc	_	_
6	amscála	amscáil	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	4	conj	_	_
7	don	do	ADP	Art	Number=Sing|PronType=Art	8	case	_	_
8	diúscairt	iúscairt	NOUN	Noun	Form=Ecl|Gender=Fem|Number=Sing	2	obl	_	_
9	sin	sin	DET	Det	PronType=Dem	8	det	_	_
10	ag	ag	ADP	Simp	_	12	case	_	_
11	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	12	det	_	_
12	am	am	NOUN	Noun	Gender=Masc|Number=Sing	2	obl:tmod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


