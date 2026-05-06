---
layout: base
title:  'Statistics of parataxis in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `parataxis`

This relation is universal.
There are 2 language-specific subtypes of `parataxis`: <tt><a href="pl_pud-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="pl_pud-dep-parataxis-obj.html">parataxis:obj</a></tt>.

21 nodes (0%) are attached to their parents as `parataxis`.

21 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 14.2380952380952.

The following 5 pairs of parts of speech are connected with `parataxis`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (10; 48% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (5; 24% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (4; 19% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 12 parataxis	color:blue
1	Cenzura	cenzura	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	_
2	pozbywała	pozbywać	VERB	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	się	się	PRON	part	PronType=Prs|Reflex=Yes	2	expl:pv	2:expl:pv	_
4	wszelkich	wszelki	DET	adj:pl:gen:f:pos	Case=Gen|Gender=Fem|Number=Plur|PronType=Tot	6	det	6:det	_
5	niepożądanych	niepożądany	ADJ	adj:pl:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	6	amod	6:amod	_
6	opinii	opinia	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	2	iobj	2:iobj	SpaceAfter=No
7	;	;	PUNCT	interp	PunctType=Semi	2	punct	2:punct	_
8	udział	udział	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	12	nsubj	12:nsubj	_
9	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Loc
10	życiu	życie	NOUN	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing	8	nmod:arg	8:nmod:arg	_
11	publicznym	publiczny	ADJ	adj:sg:loc:n:pos	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing	10	amod	10:amod	_
12	stał	stać	VERB	praet:sg:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	parataxis	2:parataxis	_
13	się	się	PRON	part	PronType=Prs|Reflex=Yes	12	expl:pv	12:expl:pv	_
14	praktycznie	praktycznie	PART	part	_	15	advmod:emph	15:advmod:emph	_
15	niemożliwy	niemożliwy	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	12	xcomp:pred	12:xcomp:pred	SpaceAfter=No
16	.	.	PUNCT	interp	PunctType=Peri	12	punct	12:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 parataxis	color:blue
1	Wyspy	wyspa	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	3	nsubj:pass	3:nsubj:pass	_
2	są	być	AUX	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux:pass	3:aux:pass	_
3	położone	położyć	ADJ	ppas:pl:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
4	na	na	ADP	prep:loc	AdpType=Prep	5	case	5:case	Case=Loc
5	uskoku	uskok	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	obl	3:obl	_
6	indoaustralijskim	indoaustralijski	ADJ	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	5	amod	5:amod	SpaceAfter=No
7	;	;	PUNCT	interp	PunctType=Semi	3	punct	3:punct	_
8	uskok	uskok	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	10	nsubj	10:nsubj	_
9	ten	ten	DET	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	8	det	8:det	_
10	powstał	powstać	VERB	praet:sg:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	parataxis	3:parataxis	_
11	w	w	ADP	prep:loc:nwok	AdpType=Prep|ExtPos=ADP|Variant=Short	13	case	13:case	Case=Loc
12	wyniku	wynik	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	11	fixed	11:fixed	_
13	zderzenia	zderzyć	NOUN	ger:sg:gen:n:perf:aff	Aspect=Perf|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	10	obl	10:obl	_
14	płyt	płyta	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	13	obj	13:obj	_
15	indyjskiej	indyjski	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	14	amod	14:amod	_
16	i	i	CCONJ	conj	_	17	cc	17:cc	_
17	australijskiej	australijski	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	15	conj	14:amod|15:conj	SpaceAfter=No
18	.	.	PUNCT	interp	PunctType=Peri	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 24 parataxis	color:blue
1	Nicolai	Nicolai	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	współpracuje	współpracować	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	przy	przy	ADP	prep:loc	AdpType=Prep	6	case	6:case	Case=Loc
4	różnych	różny	ADJ	adj:pl:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Plur	6	amod	6:amod	_
5	kinowych	kinowy	ADJ	adj:pl:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Plur	6	amod	6:amod	_
6	ścieżkach	ścieżka	NOUN	subst:pl:loc:f	Case=Loc|Gender=Fem|Number=Plur	2	obl:arg	2:obl:arg	_
7	dźwiękowych	dźwiękowy	ADJ	adj:pl:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Plur	6	amod	6:amod	_
8	Morriconego	Morricone	PROPN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	6	nmod	6:nmod	SpaceAfter=No
9	,	,	PUNCT	interp	PunctType=Comm	15	punct	15:punct	_
10	na	na	ADP	prep:acc	AdpType=Prep|ExtPos=PART	15	advmod:emph	15:advmod:emph	Case=Acc
11	przykład	przykład	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	10	fixed	10:fixed	_
12	do	do	ADP	prep:gen	AdpType=Prep	15	case	15:case	Case=Gen
13	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	15	punct	15:punct	SpaceAfter=No
14	Miłosny	miłosny	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	15	amod	15:amod	_
15	krąg	krąg	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nmod	6:nmod	SpaceAfter=No
16	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	15	punct	15:punct	SpaceAfter=No
17	;	;	PUNCT	interp	PunctType=Semi	2	punct	2:punct	_
18	niektóre	niektóry	DET	adj:pl:nom:f:pos	Case=Nom|Gender=Fem|Number=Plur|PronType=Ind	24	nsubj:pass	24:nsubj:pass	_
19	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	20	case	20:case	Case=Gen
20	nich	on	PRON	ppron3:pl:gen:f:ter:akc:praep	Case=Gen|Gender=Fem|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs|Variant=Long	18	nmod	18:nmod	_
21	zostały	zostać	AUX	praet:pl:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	24	aux:pass	24:aux:pass	_
22	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	23	case	23:case	Case=Acc
23	nich	on	PRON	ppron3:pl:acc:m1:ter:akc:praep	Animacy=Hum|Case=Acc|Gender=Masc|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs|Variant=Long	24	obl:agent	24:obl:agent	_
24	napisane	napisać	ADJ	ppas:pl:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	2	parataxis	2:parataxis	_
25	wspólnie	wspólnie	ADV	adv:pos	Degree=Pos	24	advmod	24:advmod	SpaceAfter=No
26	.	.	PUNCT	interp	PunctType=Peri	24	punct	24:punct	_

~~~


