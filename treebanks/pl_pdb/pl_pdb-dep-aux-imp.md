---
layout: base
title:  'Statistics of aux:imp in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `aux:imp`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-aux.html">aux</a></tt>.
There are also 3 other language-specific subtypes of `aux`: <tt><a href="pl_pdb-dep-aux-clitic.html">aux:clitic</a></tt>, <tt><a href="pl_pdb-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="pl_pdb-dep-aux-pass.html">aux:pass</a></tt>.

54 nodes (0%) are attached to their parents as `aux:imp`.

53 instances of `aux:imp` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.64814814814815.

The following 4 pairs of parts of speech are connected with `aux:imp`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (50; 93% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (2; 4% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux:imp	color:blue
1	Niech	niech	AUX	part	_	2	aux:imp	2:aux:imp	_
2	przyjdzie	przyjść	VERB	fin:sg:ter:perf	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	kierownik	kierownik	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	SpaceAfter=No
4	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 aux:imp	color:blue
1	Jednocześnie	jednocześnie	ADV	adv:pos	Degree=Pos	9	advmod	9:advmod	_
2	tak	tak	ADV	adv:pos	Degree=Pos|PronType=Dem	3	advmod	3:advmod	_
3	wysokie	wysoki	ADJ	adj:pl:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	4	amod	4:amod	_
4	wyniki	wynik	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	9	nsubj	9:nsubj	_
5	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Loc
6	nauce	nauka	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	4	nmod	4:nmod	_
7	niech	niech	AUX	part	_	9	aux:imp	9:aux:imp	_
8	będą	być	AUX	bedzie:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	9	cop	9:cop	_
9	przykładem	przykład	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	0	root	0:root	_
10	dla	dla	ADP	prep:gen	AdpType=Prep	11	case	11:case	Case=Gen
11	uczniów	uczeń	NOUN	subst:pl:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	9	nmod	9:nmod	_
12	płockich	płocki	ADJ	adj:pl:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	13	amod	13:amod	_
13	szkół	szkoła	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	11	nmod	11:nmod	SpaceAfter=No
14	,	,	PUNCT	interp	PunctType=Comm	18	punct	18:punct	_
15	że	że	SCONJ	comp	_	18	mark	18:mark	_
16	wszystko	wszystko	PRON	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	18	nsubj	18:nsubj	_
17	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	18	cop	18:cop	_
18	możliwe	możliwy	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	9	ccomp	9:ccomp	SpaceAfter=No
19	,	,	PUNCT	interp	PunctType=Comm	18	punct	18:punct	_
20	jeśli	jeśli	SCONJ	comp	_	25	mark	25:mark	_
21	czegoś	coś	PRON	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing|PronType=Ind	25	iobj	25:iobj	_
22	się	się	PRON	part	PronType=Prs|Reflex=Yes	25	expl:pv	25:expl:pv	_
23	naprawdę	naprawdę	PART	part	_	24	advmod:emph	24:advmod:emph	_
24	bardzo	bardzo	ADV	adv:pos	Degree=Pos	25	advmod	25:advmod	_
25	pragnie	pragnąć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	18	advcl	18:advcl	SpaceAfter=No
26	.	.	PUNCT	interp	PunctType=Peri	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 38 36 aux:imp	color:blue
1	Jednak	jednak	CCONJ	conj	_	27	cc	27:cc	_
2	podczas	podczas	ADP	prep:gen	AdpType=Prep	4	case	4:case	Case=Gen
3	telewizyjnego	telewizyjny	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	4	amod	4:amod	_
4	programu	program	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	13	obl	13:obl	_
5	wyborczego	wyborczy	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	4	amod	4:amod	_
6	przed	przed	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Ins
7	wyborami	wybory	NOUN	subst:pl:inst:n:pt	Case=Ins|Gender=Neut|Number=Ptan	4	nmod	4:nmod	_
8	4	4	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	7	amod	7:amod	_
9	czerwca	czerwiec	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	8	nmod:flat	8:nmod:flat	_
10	1989	1989	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	11	amod:flat	11:amod:flat	_
11	roku	rok	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	9	nmod:flat	9:nmod:flat	SpaceAfter=No
12	,	,	PUNCT	interp	PunctType=Comm	13	punct	13:punct	_
13	zapytany	zapytać	ADJ	ppas:sg:nom:m1:perf:aff	Animacy=Hum|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	26	acl	26:acl	_
14	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	15	case	15:case	Case=Acc
15	prowadzącego	prowadzący	NOUN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	13	obl:agent	13:obl:agent	SpaceAfter=No
16	,	,	PUNCT	interp	PunctType=Comm	18	punct	18:punct	_
17	czy	czy	PART	part	PartType=Int	18	advmod	18:advmod	_
18	napisał	napisać	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	13	ccomp	13:ccomp	_
19	"	"	PUNCT	interp	PunctType=Quot	20	punct	20:punct	SpaceAfter=No
20	Balladę	ballada	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	18	obj	18:obj	_
21	o	o	ADP	prep:loc	AdpType=Prep	22	case	22:case	Case=Loc
22	Janku	Janek	PROPN	subst:sg:loc:m1	Animacy=Hum|Case=Loc|Gender=Masc|Number=Sing	20	nmod	20:nmod	_
23	Wiśniewskim	Wiśniewski	PROPN	subst:sg:loc:m1	Animacy=Hum|Case=Loc|Gender=Masc|Number=Sing	22	flat	22:flat	SpaceAfter=No
24	"	"	PUNCT	interp	PunctType=Quot	20	punct	20:punct	SpaceAfter=No
25	,	,	PUNCT	interp	PunctType=Comm	13	punct	13:punct	_
26	Dowgiałło	Dowgiałło	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	27	nsubj	27:nsubj	_
27	odpowiada	odpowiadać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
28	enigmatycznie	enigmatycznie	ADV	adv:pos	Degree=Pos	27	advmod	27:advmod	SpaceAfter=No
29	:	:	PUNCT	interp	PunctType=Colo	27	punct	27:punct	_
30	"	"	PUNCT	interp	PunctType=Quot	38	punct	38:punct	SpaceAfter=No
31	Co	co	PRON	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	32	nsubj	32:nsubj	_
32	miało	mieć	VERB	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	38	csubj	38:csubj	_
33	być	być	AUX	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	34	cop	34:cop	_
34	anonimowe	anonimowy	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	32	xcomp	32:xcomp	SpaceAfter=No
35	,	,	PUNCT	interp	PunctType=Comm	38	punct	38:punct	_
36	niech	niech	AUX	part	_	38	aux:imp	38:aux:imp	_
37	będzie	być	AUX	bedzie:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	38	cop	38:cop	_
38	anonimowe	anonimowy	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	27	parataxis:obj	27:parataxis:obj	SpaceAfter=No
39	"	"	PUNCT	interp	PunctType=Quot	38	punct	38:punct	SpaceAfter=No
40	.	.	PUNCT	interp	PunctType=Peri	27	punct	27:punct	_

~~~


