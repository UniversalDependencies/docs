

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

29 nodes (0%) are attached to their parents as `mwe`.

29 instances of `mwe` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `mwe`: [pl-pos/ADV]()-[pl-pos/ADP]() (17; 59% instances), [pl-pos/ADP]()-[pl-pos/SCONJ]() (6; 21% instances), [pl-pos/ADP]()-[pl-pos/NOUN]() (5; 17% instances), [pl-pos/SCONJ]()-[pl-pos/CONJ]() (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 mwe	color:blue
1	Namierzyli	namierzyć	VERB	praet:pl:m1:perf	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	ich	on	PRON	ppron3:pl:acc:m1:ter:akc:npraep	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	1	dobj	_	_
3	razem	razem	ADV	adv:_	_	5	case	_	_
4	z	z	ADP	prep:inst:nwok	AdpType=Prep|Case=Ins|Variant=Short	3	mwe	_	_
5	prokuratorami	prokurator	NOUN	subst:pl:inst:m1	Animacy=Anim|Case=Ins|Gender=Masc|Number=Plur	1	nmod	_	_
6	.	.	PUNCT	interp:_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 mwe	color:blue
1	Tego	to	PRON	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	3	dobj	_	_
2	nie	nie	PART	qub:_	_	3	neg	_	_
3	wiemy	wiedzieć	VERB	fin:pl:pri:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	na	na	ADP	prep:acc	AdpType=Prep|Case=Acc	3	advmod	_	_
5	pewno	pewno	ADV	adv:pos	Degree=Pos	4	case	_	_
6	,	,	PUNCT	interp:_	_	14	punct	_	_
7	mimo	mimo	ADP	prep:gen	AdpType=Prep|Case=Gen	14	case	_	_
8	że	że	SCONJ	comp:_	_	7	mwe	_	_
9	zacytowane	zacytować	VERB	ppas:sg:nom:n:perf:aff	Aspect=Perf|Case=Nom|Gender=Neut|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	11	acl	_	_
10	wyżej	wysoko	ADV	adv:com	_	9	advmod	_	_
11	zdanie	zdanie	NOUN	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing	14	nsubj	_	_
12	stało	stać	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	14	cop	_	_
13	się	się	PRON	qub:_	PronType=Prs|Reflex=Yes	14	expl	_	_
14	znakiem	znak	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	3	advcl	_	_
15	rozpoznawczym	rozpoznawczy	ADJ	adj:sg:inst:m3:pos	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	14	amod	_	_
16	.	.	PUNCT	interp:_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 mwe	color:blue
1	-	-	PUNCT	interp:_	_	10	punct	_	_
2	Szanując	szanować	VERB	pcon:imperf	Aspect=Imp|Tense=Pres|VerbForm=Trans	10	advcl	_	_
3	czas	czas	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	dobj	_	_
4	Wysokiej	wysoki	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	_
5	Izby	izba	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	_
6	,	,	PUNCT	interp:_	_	2	punct	_	_
7	w	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	9	case	_	_
8	razie	raz	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	mwe	_	_
9	pytań	pytanie	NOUN	subst:pl:gen:n	Case=Gen|Gender=Neut|Number=Plur	10	nmod	_	_
10	będę	być	AUX	bedzie:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin	0	root	_	_
11	do	do	ADP	prep:gen	AdpType=Prep|Case=Gen	12	case	_	_
12	dyspozycji	dyspozycja	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	10	dobj	_	_
13	.	.	PUNCT	interp:_	_	10	punct	_	_

~~~


