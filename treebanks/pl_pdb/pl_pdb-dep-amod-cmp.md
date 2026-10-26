---
layout: base
title:  'Statistics of amod:cmp in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `amod:cmp`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-amod.html">amod</a></tt>.
There are also 1 other language-specific subtypes of `amod`: <tt><a href="pl_pdb-dep-amod-flat.html">amod:flat</a></tt>.

56 nodes (0%) are attached to their parents as `amod:cmp`.

56 instances of `amod:cmp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.125.

The following 8 pairs of parts of speech are connected with `amod:cmp`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (43; 77% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (4; 7% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 amod:cmp	color:blue
1	Pracowicie	pracowicie	ADV	adv:pos	Degree=Pos	2	advmod	2:advmod	_
2	wyodrębnił	wyodrębnić	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	pojęcia	pojęcie	NOUN	subst:pl:acc:n:ncol	Case=Acc|Gender=Neut|Number=Plur	2	obj	2:obj	_
4	takie	taki	DET	adj:pl:acc:n:pos	Case=Acc|Gender=Neut|Number=Plur|PronType=Dem	3	amod:cmp	3:amod:cmp	_
5	jak	jak	SCONJ	comp	_	6	mark	6:mark|8:mark|10:mark|12:mark|14:mark	_
6	ból	ból	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	ccomp	4:ccomp	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
8	smutek	smutek	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	conj	4:ccomp|6:conj	SpaceAfter=No
9	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
10	rozpacz	rozpacz	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	6	conj	4:ccomp|6:conj	SpaceAfter=No
11	,	,	PUNCT	interp	PunctType=Comm	12	punct	12:punct	_
12	cierpienie	cierpienie	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	6	conj	4:ccomp|6:conj	SpaceAfter=No
13	,	,	PUNCT	interp	PunctType=Comm	14	punct	14:punct	_
14	żal	żal	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	conj	4:ccomp|6:conj	SpaceAfter=No
15	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 21 amod:cmp	color:blue
1	Powiedział	powiedzieć	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	by	by	AUX	part	_	1	aux:cnd	1:aux:cnd	_
3	m	być	AUX	aglt:sg:pri:imperf:nwok	Aspect=Imp|Number=Sing|Person=1|Variant=Short	1	aux:clitic	1:aux:clitic	_
4	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
5	że	że	SCONJ	comp	_	9	mark	9:mark|14:mark	_
6	ich	on	PRON	ppron3:pl:gen:m1:ter:akc:npraep	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	7	nmod:poss	7:nmod:poss	_
7	rola	rola	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	9:nsubj	_
8	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
9	formalna	formalny	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	1	ccomp:obj	1:ccomp:obj	_
10	i	i	CCONJ	conj	_	14	cc	14:cc	_
11	głos	głos	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	14	nsubj	14:nsubj	_
12	pracowników	pracownik	NOUN	subst:pl:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	11	nmod:poss	11:nmod:poss	_
13	nie	nie	PART	part	Polarity=Neg	14	advmod:neg	14:advmod:neg	_
14	przebija	przebijać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	conj	1:ccomp:obj|9:conj	_
15	się	się	PRON	part	PronType=Prs|Reflex=Yes	14	expl:pv	14:expl:pv	_
16	na	na	ADP	prep:acc	AdpType=Prep	17	case	17:case	Case=Acc
17	tyle	tyle	DET	num:pl:acc:n:rec:ncol	Case=Acc|Gender=Neut|Number=Plur|NumType=Card|PronType=Dem	14	obl	14:obl	SpaceAfter=No
18	,	,	PUNCT	interp	PunctType=Comm	20	punct	20:punct	_
19	na	na	ADP	prep:acc	AdpType=Prep	20	case	20:case	Case=Acc
20	ile	ile	DET	num:pl:acc:n:rec:ncol	Case=Acc|Gender=Neut|Number=Plur|NumType=Card|PronType=Int	21	obl:arg	21:obl:arg	_
21	zasługuje	zasługiwać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	17	amod:cmp	17:amod:cmp	SpaceAfter=No
22	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 28 amod:cmp	color:blue
1	Grzmiał	grzmieć	VERB	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	to	to	PRON	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	1	obj	1:obj	_
3	swoje	swój	DET	adj:sg:acc:n:pos	Case=Acc|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	2	det:poss	2:det:poss	_
4	"	"	PUNCT	interp	PunctType=Quot	5	punct	5:punct	SpaceAfter=No
5	wiem	wiedzieć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis:obj	1:parataxis:obj	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
7	wiem	wiedzieć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	1:parataxis:obj|5:conj	SpaceAfter=No
8	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
9	prawdę	prawda	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	10	obj	10:obj	_
10	znam	znać	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	1:parataxis:obj|5:conj	SpaceAfter=No
11	,	,	PUNCT	interp	PunctType=Comm	14	punct	14:punct	_
12	prawda	prawda	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	14	nsubj	14:nsubj	_
13	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	cop	14:cop	_
14	jedna	jeden	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	5	conj	1:parataxis:obj|5:conj	_
15	i	i	CCONJ	conj	_	17	cc	17:cc	_
16	nie	nie	PART	part	Polarity=Neg	17	advmod:neg	17:advmod:neg	_
17	ma	mieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	1:parataxis:obj|5:conj	_
18	na	na	ADP	prep:acc	AdpType=Prep	19	case	19:case	Case=Acc
19	nią	on	PRON	ppron3:sg:acc:f:ter:akc:praep	Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs|Variant=Long	17	obl:arg	17:obl:arg	_
20	żadnego	żaden	DET	adj:sg:gen:n:pos	Case=Gen|Gender=Neut|Number=Sing|PronType=Neg	21	det	21:det	_
21	ale	ale	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	17	nsubj	17:nsubj	SpaceAfter=No
22	"	"	PUNCT	interp	PunctType=Quot	5	punct	5:punct	_
23	-	-	PUNCT	interp	PunctType=Dash	1	punct	1:punct	_
24	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	25	case	25:case	Case=Gen
25	dziury	dziura	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	1	obl	1:obl	_
26	podobnej	podobny	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	25	amod	25:amod	_
27	do	do	ADP	prep:gen	AdpType=Prep	28	case	28:case	Case=Gen
28	wyjedzonej	wyjeść	ADJ	ppas:sg:gen:f:perf:aff	Aspect=Perf|Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	26	amod:cmp	26:amod:cmp	_
29	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	30	case	30:case	Case=Acc
30	mole	mól	NOUN	subst:pl:acc:m2	Animacy=Nhum|Case=Acc|Gender=Masc|Number=Plur	28	obl:agent	28:obl:agent	SpaceAfter=No
31	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


