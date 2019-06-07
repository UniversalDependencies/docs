---
layout: base
title:  'Statistics of discourse:emo in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `discourse:emo`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `discourse`: <tt><a href="pl_pdb-dep-discourse-intj.html">discourse:intj</a></tt>.

8 nodes (0%) are attached to their parents as `discourse:emo`.

8 instances of `discourse:emo` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.625.

The following 2 pairs of parts of speech are connected with `discourse:emo`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-SYM.html">SYM</a></tt> (6; 75% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-SYM.html">SYM</a></tt> (2; 25% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 discourse:emo	color:blue
1	Nie	nie	PART	part	Polarity=Neg	2	advmod:neg	2:advmod:neg	_
2	ma	mieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	co	co	PART	part	_	2	fixed	2:fixed	_
4	dramatyzować	dramatyzować	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	2	xcomp	2:xcomp	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
6	jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	0:root|2:conj	_
7	jeszcze	jeszcze	PART	part	_	6	advmod	6:advmod	_
8	news:pl.rec.kuchnia	news:pl.rec.kuchnia	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	6:nsubj	_
9	:-)	:-)	SYM	emo	_	2	discourse:emo	2:discourse:emo|6:discourse:emo	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 24 discourse:emo	color:blue
1	W	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	2	case	2:case	Case=Loc
2	liceum	liceum	NOUN	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing	8	obl	8:obl	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	2	punct	2:punct	_
4	łacina	łacina	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	8	nsubj	8:nsubj	_
5	była	być	AUX	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
6	dla	dla	ADP	prep:gen	AdpType=Prep	7	case	7:case	Case=Gen
7	mnie	ja	PRON	ppron12:sg:gen:m1:pri	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing|Person=1|PronType=Prs	8	obl	8:obl	_
8	przedmiotem	przedmiot	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	0	root	0:root	_
9	dodatkowym	dodatkowy	ADJ	adj:sg:inst:m3:pos	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	8	amod	8:amod	SpaceAfter=No
10	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	_
11	nieobowiązkowym	nieobowiązkowy	ADJ	adj:sg:inst:m3:pos	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	9	conj	8:amod|9:conj	_
12	-	-	PUNCT	interp	PunctType=Hyph	14	punct	14:punct	_
13	i	i	CCONJ	conj	_	14	cc	14:cc	_
14	wstyd	wstyd	VERB	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	8	conj	0:root|8:conj	_
15	się	się	PRON	part	PronType=Prs|Reflex=Yes	16	expl:pv	16:expl:pv	_
16	przyznać	przyznać	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	14	xcomp	14:xcomp	SpaceAfter=No
17	,	,	PUNCT	interp	PunctType=Comm	22	punct	22:punct	_
18	ale	ale	CCONJ	conj	_	22	cc	22:cc	_
19	oprócz	oprócz	ADP	prep:gen	AdpType=Prep	20	case	20:case	Case=Gen
20	sentencji	sentencja	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	22	obl	22:obl	_
21	niewiele	niewiele	DET	num:pl:acc:f:rec	Case=Acc|Gender=Fem|Number=Plur|NumType=Card|PronType=Ind	22	iobj	22:iobj	_
22	pamiętam	pamiętać	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	14	conj	8:conj|14:conj	SpaceAfter=No
23	.	.	PUNCT	interp	PunctType=Peri	8	punct	8:punct	_
24	:-)	:-)	SYM	emo	_	8	discourse:emo	8:discourse:emo|14:discourse:emo	_

~~~


