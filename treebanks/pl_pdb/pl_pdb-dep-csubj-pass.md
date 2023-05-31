---
layout: base
title:  'Statistics of csubj:pass in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-csubj.html">csubj</a></tt>.

4 nodes (0%) are attached to their parents as `csubj:pass`.

4 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.5.

The following 3 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (2; 50% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (1; 25% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 csubj:pass	color:blue
1	W	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	2	case	2:case	Case=Loc
2	Piśmie	pismo	NOUN	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing	6	obl	6:obl	_
3	św	święty	X	brev:pun	Abbr=Yes|Pun=Yes	2	amod	2:amod	SpaceAfter=No
4	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_
5	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux:pass	6:aux:pass	_
6	napisane	napisać	ADJ	ppas:sg:nom:n:perf:aff	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	19	parataxis:obj	19:parataxis:obj	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
8	żeby	żeby	SCONJ	comp	_	10	mark	10:mark	_
9	ś	być	AUX	aglt:sg:sec:imperf:nwok	Aspect=Imp|Clitic=Yes|Number=Sing|Person=2|Variant=Short	10	aux:clitic	10:aux:clitic	_
10	pieścił	pieścić	VERB	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	csubj:pass	6:csubj:pass	_
11	piersi	pierś	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	10	obj	10:obj	_
12	swojej	swój	DET	adj:sg:gen:f:pos	Case=Gen|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	13	det:poss	13:det:poss	_
13	żony	żona	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	11	nmod	11:nmod	SpaceAfter=No
14	,	,	PUNCT	interp	PunctType=Comm	17	punct	17:punct	_
15	a	a	CCONJ	conj	_	17	cc	17:cc	_
16	nie	nie	PART	part	Polarity=Neg	17	advmod:neg	17:advmod:neg	_
17	cudzej	cudzy	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	12	conj	12:conj|13:det:poss	_
18	-	-	PUNCT	interp	PunctType=Dash	19	punct	19:punct	_
19	argumentuje	argumentować	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
20	mój	mój	DET	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	21	det:poss	21:det:poss	_
21	rozmówca	rozmówca	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	19	nsubj	19:nsubj	SpaceAfter=No
22	.	.	PUNCT	interp	PunctType=Peri	19	punct	19:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 13 csubj:pass	color:blue
1	Najmocniej	mocno	ADV	adv:sup	Degree=Sup	2	advmod	2:advmod	_
2	akcentowane	akcentować	ADJ	ppas:sg:nom:n:imperf:aff	Aspect=Imp|Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
3	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	aux:pass	2:aux:pass	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	13	punct	13:punct	_
5	że	że	SCONJ	comp	_	13	mark	13:mark	_
6	choć	choć	SCONJ	comp	_	10	mark	10:mark	_
7	za	za	ADP	prep:acc	AdpType=Prep	8	case	8:case	Case=Acc
8	opróżnianie	opróżniać	NOUN	ger:sg:acc:n:imperf:aff	Aspect=Imp|Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	10	obl:arg	10:obl:arg	_
9	pojemników	pojemnik	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	8	obj	8:obj	_
10	płacili	płacić	VERB	praet:pl:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	13	advcl	13:advcl	_
11	miejscowi	miejscowy	NOUN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	10	nsubj	10:nsubj	SpaceAfter=No
12	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
13	powszechne	powszechny	ADJ	adj:pl:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	2	csubj:pass	2:csubj:pass	_
14	były	być	AUX	praet:pl:m3:imperf	Animacy=Inan|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	13	cop	13:cop	_
15	przypadki	przypadek	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	13	nsubj	13:nsubj	_
16	podrzucania	podrzucać	NOUN	ger:sg:gen:n:imperf:aff	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	15	nmod:arg	15:nmod:arg	_
17	śmieci	śmieć	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	16	obj	16:obj	_
18	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	19	case	19:case	Case=Acc
19	mieszkańców	mieszkaniec	NOUN	subst:pl:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Plur	16	obl:agent	16:obl:agent	_
20	innych	inny	ADJ	adj:pl:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	21	amod	21:amod	_
21	gmin	gmina	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	19	nmod:arg	19:nmod:arg	SpaceAfter=No
22	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj:pass	color:blue
1	Niewykluczone	wykluczyć	ADJ	ppas:sg:nom:n:perf:neg	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Polarity=Neg|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	_
3	że	że	SCONJ	comp	_	5	mark	5:mark	_
4	byli	być	AUX	praet:pl:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
5	wyjątkami	wyjątek	NOUN	subst:pl:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Plur	1	csubj:pass	1:csubj:pass	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	_
7	ale	ale	CCONJ	conj	_	11	cc	11:cc	_
8	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Loc
9	obojgu	oba	NUM	num:pl:loc:m1:congr:col	Animacy=Hum|Case=Loc|Gender=Masc|Number=Plur|NumForm=Word|NumType=Sets	11	obl	11:obl|17:obl	_
10	nie	nie	PART	part	Polarity=Neg	11	advmod:neg	11:advmod:neg	_
11	dostrzegał	dostrzegać	VERB	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	1	conj	0:root|1:conj	_
12	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Clitic=Yes|Number=Sing|Person=1|Variant=Long	11	aux:clitic	11:aux:clitic	_
13	frustracji	frustracja	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	11	obj	11:obj	SpaceAfter=No
14	,	,	PUNCT	interp	PunctType=Comm	17	punct	17:punct	_
15	a	a	CCONJ	conj	_	17	cc	17:cc	_
16	jedynie	jedynie	PART	part	_	17	advmod:emph	17:advmod:emph	_
17	zgodę	zgoda	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	11	conj	1:conj|11:conj	_
18	na	na	ADP	prep:acc	AdpType=Prep	19	case	19:case|21:case|24:case	Case=Acc
19	świat	świat	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	17	nmod:arg	17:nmod:arg	SpaceAfter=No
20	,	,	PUNCT	interp	PunctType=Comm	21	punct	21:punct	_
21	upływ	upływ	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	19	conj	17:nmod:arg|19:conj	_
22	czasu	czas	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	21	nmod:arg	21:nmod:arg	SpaceAfter=No
23	,	,	PUNCT	interp	PunctType=Comm	24	punct	24:punct	_
24	życie	żyć	NOUN	ger:sg:acc:n:imperf:aff	Aspect=Imp|Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	19	conj	17:nmod:arg|19:conj	_
25	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	26	case	26:case	Case=Gen
26	dnia	dzień	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	24	nmod	24:nmod	_
27	na	na	ADP	prep:acc	AdpType=Prep	28	case	28:case	Case=Acc
28	dzień	dzień	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	26	nmod	26:nmod	SpaceAfter=No
29	,	,	PUNCT	interp	PunctType=Comm	35	punct	35:punct	_
30	bardziej	bardzo	ADV	adv:com	Degree=Cmp	35	advmod	35:advmod	_
31	niż	niż	SCONJ	comp	ConjType=Comp	32	mark	32:mark	_
32	gdzie	gdzie	ADV	adv	_	30	obl:cmpr	30:obl:cmpr	_
33	indziej	indziej	ADV	adv	_	32	fixed	32:fixed	_
34	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	35	case	35:case	Case=Loc
35	kołowrocie	kołowrót	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	26	conj	24:nmod|26:conj	_
36	pór	pora	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	35	nmod:arg	35:nmod:arg	_
37	roku	rok	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	36	nmod:arg	36:nmod:arg	SpaceAfter=No
38	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


