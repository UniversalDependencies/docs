---
layout: base
title:  'Statistics of fixed in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `fixed`

This relation is universal.

236 nodes (1%) are attached to their parents as `fixed`.

236 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.01271186440678.

The following 6 pairs of parts of speech are connected with `fixed`: <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (187; 79% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (21; 9% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (14; 6% instances), <tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt> (10; 4% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="ga_idt-pos-PART.html">PART</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	Leanann	lean	VERB	VTI	Mood=Ind|Tense=Pres	0	root	_	_
2	Ramadan	Ramadan	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	nsubj	_	_
3	ar	ar	ADP	Cmpd	PrepForm=Cmpd	5	case	_	_
4	feadh	feadh	ADP	Cmpd	_	3	fixed	_	_
5	seachtaine	seachtain	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	1	obl:tmod	_	_
6	4	4	NUM	Num	_	5	nummod	_	SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 fixed	color:blue
1	Tá	bí	VERB	PresInd	Mood=Ind|Tense=Pres	0	root	_	_
2	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	teicníocht	teicníocht	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	nsubj	_	_
4	inste	inste	ADJ	Adj	VerbForm=Part	3	amod	_	_
5	a	a	PART	Vb	PartType=Vb|PronType=Rel	6	obj	_	_
6	roghnaíonn	roghnaigh	VERB	VT	Mood=Ind|Tense=Pres	3	acl:relcl	_	_
7	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	6	nsubj	_	_
8	thar	thar	ADV	Its	_	11	advmod	_	_
9	a	a	ADV	Its	_	8	fixed	_	_
10	bheith	bheith	ADV	Its	_	8	fixed	_	_
11	éifeachtach	éifeachtach	ADJ	Adj	Degree=Pos	1	xcomp:pred	_	SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	Agus	agus	CCONJ	Coord	_	7	advmod	_	_
2	gan	gan	ADP	Simp	_	6	case	_	_
3	a	a	NOUN	Subst	Number=Sing	6	obj	_	_
4	thuilleadh	tuilleadh	NOUN	Subst	_	3	fixed	_	_
5	a	a	PART	Inf	PartType=Inf	6	mark	_	_
6	rá	rá	NOUN	Noun	Form=Len|VerbForm=Inf	7	xcomp	_	_
7	thug	tabhair	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
8	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	9	det	_	_
9	Bainisteoir	bainisteoir	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	7	nsubj	_	_
10	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	11	nmod:poss	_	_
11	aghaidh	aghaidh	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	7	obj	_	_
12	suas	suas	ADV	Dir	_	14	case	_	_
13	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	14	det	_	_
14	staighre	staighre	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
15	.	.	PUNCT	.	_	7	punct	_	_

~~~


