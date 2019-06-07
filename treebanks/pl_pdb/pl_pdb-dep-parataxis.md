---
layout: base
title:  'Statistics of parataxis in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `parataxis`

This relation is universal.
There are 2 language-specific subtypes of `parataxis`: <tt><a href="pl_pdb-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="pl_pdb-dep-parataxis-obj.html">parataxis:obj</a></tt>.

30 nodes (0%) are attached to their parents as `parataxis`.

29 instances of `parataxis` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.36666666666667.

The following 2 pairs of parts of speech are connected with `parataxis`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (28; 93% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (2; 7% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 parataxis	color:blue
1	Opis	opis	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
2	:	:	PUNCT	interp	PunctType=Colo	1	punct	1:punct	_
3	wzór	wzór	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	_
4	zawiera	zawierać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	1:parataxis	_
5	różowe	różowy	ADJ	adj:pl:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	8	amod	8:amod	_
6	i	i	CCONJ	conj	_	7	cc	7:cc	_
7	beżowe	beżowy	ADJ	adj:pl:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	5	conj	5:conj|8:amod	_
8	linie	linia	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	4	obj	4:obj	SpaceAfter=No
9	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	_
10	4	4	NUM	num:pl:acc:f:congr	Case=Acc|Gender=Fem|Number=Plur|NumForm=Digit|NumType=Card	11	nummod	11:nummod	_
11	strony	strona	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	8	conj	4:obj|8:conj	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 parataxis	color:blue
1	Chyba	chyba	PART	part	_	5	parataxis:insert	5:parataxis:insert	_
2	najbardziej	bardzo	ADV	adv:sup	Degree=Sup	3	advmod	3:advmod	_
3	oryginalnym	oryginalny	ADJ	adj:sg:inst:m1:pos	Animacy=Hum|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	5	amod	5:amod	_
4	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	5	punct	5:punct	SpaceAfter=No
5	klientem	klient	NOUN	subst:sg:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
6	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	5	punct	5:punct	_
7	małopolskich	małopolski	ADJ	adj:pl:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	8	amod	8:amod	_
8	sądów	sąd	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	5	nmod:arg	5:nmod:arg	_
9	24-godzinnych	24-godzinny	ADJ	adj:pl:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	8	amod	8:amod	_
10	był	być	AUX	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
11	31-letni	31-letni	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	12	amod	12:amod	_
12	Kanadyjczyk	Kanadyjczyk	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	5:nsubj	_
13	(	(	PUNCT	interp	PunctSide=Ini|PunctType=Brck	15	punct	15:punct	SpaceAfter=No
14	czasowo	czasowo	ADV	adv:pos	Degree=Pos	15	advmod	15:advmod	_
15	mieszka	mieszkać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	parataxis	12:parataxis	_
16	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	17	case	17:case	Case=Loc
17	Polsce	Polska	PROPN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	15	obl	15:obl	SpaceAfter=No
18	)	)	PUNCT	interp	PunctSide=Fin|PunctType=Brck	15	punct	15:punct	SpaceAfter=No
19	,	,	PUNCT	interp	PunctType=Comm	23	punct	23:punct	_
20	którego	który	DET	adj:sg:acc:m1:pos	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	23	obj	23:obj	_
21	nowosądeccy	nowosądecki	ADJ	adj:pl:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	22	amod	22:amod	_
22	policjanci	policjant	NOUN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	23	nsubj	23:nsubj	_
23	zdybali	zdybać	VERB	praet:pl:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	12	acl:relcl	12:acl:relcl	_
24	na	na	ADP	prep:loc	AdpType=Prep	25	case	25:case	Case=Loc
25	jeździe	jazda	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	23	obl:arg	23:obl:arg	_
26	po	po	ADP	prep:acc	AdpType=Prep	25	advmod	25:advmod	Case=Acc
27	pijanemu	pijany	ADJ	adj:sg:dat:m3:pos	Animacy=Inan|Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	26	fixed	26:fixed	_
28	rowerem	rower	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	25	iobj	25:iobj	_
29	ul	ulica	X	brev:pun	Abbr=Yes|Pun=Yes	25	nmod	25:nmod	SpaceAfter=No
30	.	.	PUNCT	interp	PunctType=Peri	29	punct	29:punct	_
31	Jagiellońską	jagielloński	ADJ	adj:sg:inst:f:pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	29	amod	29:amod	SpaceAfter=No
32	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


