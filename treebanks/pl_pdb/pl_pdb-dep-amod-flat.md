---
layout: base
title:  'Statistics of amod:flat in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `amod:flat`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-amod.html">amod</a></tt>.

1778 nodes (1%) are attached to their parents as `amod:flat`.

942 instances of `amod:flat` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.02587176602925.

The following 4 pairs of parts of speech are connected with `amod:flat`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (1451; 82% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (319; 18% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod:flat	color:blue
1	II	II	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Roman|NumType=Ord	2	amod:flat	2:amod:flat	_
2	Wydział	wydział	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	_
3	Polityczny	polityczny	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod:flat	2:amod:flat	_
4	założył	założyć	VERB	praet:sg:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	jej	on	PRON	ppron3:sg:dat:f:ter:akc:npraep	Case=Dat|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	4	iobj	4:iobj	_
6	teczkę	teczka	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	4	obj	4:obj	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod:flat	color:blue
1	Jan	Jan	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	_
2	Paweł	Paweł	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	1	flat	1:flat	_
3	II	II	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Roman|NumType=Ord	2	amod:flat	2:amod:flat	_
4	może	móc	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	być	być	AUX	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	7	aux:pass	7:aux:pass	_
6	niebawem	niebawem	ADV	adv	_	7	advmod	7:advmod	_
7	beatyfikowany	beatyfikować	ADJ	ppas:sg:nom:m1:imperf:aff	Animacy=Hum|Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	4	xcomp	4:xcomp	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 amod:flat	color:blue
1	Skansen	skansen	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	czynny	czynny	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	0:root	_
3	od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Gen
4	15	15	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	2	nmod	2:nmod	_
5	IV	IV	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Roman|NumType=Ord	4	amod:flat	4:amod:flat	_
6	do	do	ADP	prep:gen	AdpType=Prep	7	case	7:case	Case=Gen
7	15	15	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	2	nmod	2:nmod	_
8	X	X	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Roman|NumType=Ord	7	fixed	7:fixed	_
9	od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Gen
10	wtorku	wtorek	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	obl	2:obl	_
11	do	do	ADP	prep:gen	AdpType=Prep	12	case	12:case	Case=Gen
12	niedzieli	niedziela	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	2	obl	2:obl	_
13	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	14	case	14:case	Case=Loc
14	godz	godzina	NOUN	brev:pun	Abbr=Yes	20	nmod	20:nmod	SpaceAfter=No
15	.	.	PUNCT	interp	PunctType=Peri	14	punct	14:punct	_
16	10	10	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|NumForm=Digit|NumType=Ord	14	amod:flat	14:amod:flat	SpaceAfter=No
17	-	-	PUNCT	interp	PunctType=Dash	18	punct	18:punct	SpaceAfter=No
18	17	17	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|NumForm=Digit|NumType=Ord	16	conj	14:amod:flat|16:conj	_
19	(	(	PUNCT	interp	PunctSide=Ini|PunctType=Brck	20	punct	20:punct	SpaceAfter=No
20	kasy	kasa	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	2	conj	0:root|2:conj	SpaceAfter=No
21	)	)	PUNCT	interp	PunctSide=Fin|PunctType=Brck	20	punct	20:punct	SpaceAfter=No
22	,	,	PUNCT	interp	PunctType=Comm	27	punct	27:punct	_
23	do	do	ADP	prep:gen	AdpType=Prep	24	case	24:case	Case=Gen
24	godz	godzina	NOUN	brev:pun	Abbr=Yes	27	nmod	27:nmod	SpaceAfter=No
25	.	.	PUNCT	interp	PunctType=Peri	24	punct	24:punct	_
26	18	18	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|NumForm=Digit|NumType=Ord	24	amod:flat	24:amod:flat	_
27	zwiedzanie	zwiedzać	NOUN	ger:sg:nom:n:imperf:aff	Aspect=Imp|Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	2	conj	0:root|2:conj	SpaceAfter=No
28	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


