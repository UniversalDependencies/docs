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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 aux:imp	color:blue
1	-	-	PUNCT	interp	PunctType=Hyph	8	punct	8:punct	_
2	Panie	pan	NOUN	subst:sg:voc:m1	Animacy=Hum|Case=Voc|Gender=Masc|Number=Sing	8	vocative	8:vocative	_
3	podchorąży	podchorąży	NOUN	subst:sg:voc:m1	Animacy=Hum|Case=Voc|Gender=Masc|Number=Sing	2	appos	2:appos	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	2	punct	2:punct	_
5	niech	niech	AUX	part	_	8	aux:imp	8:aux:imp	_
6	się	się	PRON	part	PronType=Prs|Reflex=Yes	8	expl:pv	8:expl:pv	_
7	pan	pan	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	8	nsubj	8:nsubj	_
8	pośpieszy	pośpieszyć	VERB	fin:sg:ter:perf	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 aux:imp	color:blue
1	I	i	CCONJ	conj	_	4	cc	4:cc	_
2	chyba	chyba	PART	part	_	4	advmod	4:advmod	_
3	się	się	PRON	part	PronType=Prs|Reflex=Yes	4	expl:pv	4:expl:pv	_
4	udało	udać	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
6	a	a	CCONJ	conj	_	7	cc	7:cc	_
7	dowodem	dowód	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	4	conj	4:conj	_
8	niech	niech	AUX	part	_	7	aux:imp	7:aux:imp	_
9	będzie	być	AUX	bedzie:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	7	cop	7:cop	_
10	to	to	PRON	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	7	nsubj	7:nsubj	SpaceAfter=No
11	,	,	PUNCT	interp	PunctType=Comm	19	punct	19:punct	_
12	że	że	SCONJ	comp	_	19	mark	19:mark|25:mark|30:mark	_
13	gdy	gdy	ADV	adv	_	14	advmod	14:advmod	_
14	byli	być	VERB	praet:pl:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	19	advcl	19:advcl|25:advcl|30:advcl	_
15	śmy	być	AUX	aglt:pl:pri:imperf:nwok	Aspect=Imp|Clitic=Yes|Number=Plur|Person=1|Variant=Short	14	aux:clitic	14:aux:clitic	_
16	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	17	case	17:case	Case=Loc
17	Innsbrucku	Innsbruck	PROPN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	14	obl	14:obl	SpaceAfter=No
18	,	,	PUNCT	interp	PunctType=Comm	14	punct	14:punct	_
19	podchodzili	podchodzić	VERB	praet:pl:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	10	ccomp	10:ccomp	_
20	do	do	ADP	prep:gen	AdpType=Prep	21	case	21:case	Case=Gen
21	nas	my	PRON	ppron12:pl:gen:m1:pri	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur|Person=1|PronType=Prs	19	obl:arg	19:obl:arg	_
22	nasi	nasz	DET	adj:pl:nom:m1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	23	det:poss	23:det:poss	_
23	przyjaciele	przyjaciel	NOUN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	19	nsubj	19:nsubj|25:nsubj|30:nsubj	SpaceAfter=No
24	,	,	PUNCT	interp	PunctType=Comm	25	punct	25:punct	_
25	łapali	łapać	VERB	praet:pl:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	19	conj	10:ccomp|19:conj	_
26	się	się	PRON	part	PronType=Prs|Reflex=Yes	25	expl:pv	25:expl:pv	_
27	za	za	ADP	prep:acc	AdpType=Prep	28	case	28:case	Case=Acc
28	głowy	głowa	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	25	obl:arg	25:obl:arg	_
29	i	i	CCONJ	conj	_	30	cc	30:cc	_
30	pytali	pytać	VERB	praet:pl:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	19	conj	10:ccomp|19:conj	SpaceAfter=No
31	,	,	PUNCT	interp	PunctType=Comm	35	punct	35:punct	_
32	co	co	PRON	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	35	nsubj	35:nsubj	_
33	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	35	cop	35:cop	_
34	za	za	PART	part	_	35	advmod	35:advmod	_
35	zmiany	zmiana	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	30	ccomp	30:ccomp	SpaceAfter=No
36	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

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


