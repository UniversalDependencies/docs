

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

425 nodes (1%) are attached to their parents as `appos`.

425 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.64470588235294.

The following 8 pairs of parts of speech are connected with `appos`: [pl-pos/NOUN]()-[pl-pos/NOUN]() (360; 85% instances), [pl-pos/X]()-[pl-pos/NOUN]() (23; 5% instances), [pl-pos/X]()-[pl-pos/ADJ]() (19; 4% instances), [pl-pos/NOUN]()-[pl-pos/ADJ]() (8; 2% instances), [pl-pos/NOUN]()-[pl-pos/X]() (6; 1% instances), [pl-pos/NOUN]()-[pl-pos/NUM]() (4; 1% instances), [pl-pos/PRON]()-[pl-pos/NOUN]() (4; 1% instances), [pl-pos/X]()-[pl-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 appos	color:blue
1	Proszę	prosić	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	bardzo	bardzo	ADV	adv:pos	Degree=Pos	1	advmod	_	_
3	,	,	PUNCT	interp:_	_	4	punct	_	_
4	panie	pan	NOUN	subst:sg:voc:m1	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing	1	nmod	_	_
5	ministrze	minister	NOUN	subst:sg:voc:m1	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing	4	appos	_	_
6	.	.	PUNCT	interp:_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 appos	color:blue
1	Urbaniści	urbanista	NOUN	subst:pl:nom:m1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	2	nsubj	_	_
2	proponowali	proponować	VERB	praet:pl:m1:imperf	Animacy=Anim|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
3	podziemny	podziemny	ADJ	adj:sg:acc:m3:pos	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	_
4	tunel	tunel	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	dobj	_	_
5	w	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	4	nmod	_	_
6	kierunku	kierunek	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	case	_	_
7	ul	ulica	X	brev:pun	Abbr=Yes	5	nmod	_	_
8	.	.	PUNCT	interp:_	_	7	punct	_	_
9	Kantaka	Kantaka	NOUN	subst:sg:gen:m1	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	7	appos	_	_
10	.	.	PUNCT	interp:_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 appos	color:blue
1	W	w	ADP	prep:acc:nwok	AdpType=Prep|Case=Acc|Variant=Short	3	case	_	_
2	jaki	jaki	ADJ	adj:sg:acc:m3:pos	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
3	sposób	sposób	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	nmod	_	_
4	trafił	trafić	VERB	praet:sg:m1:perf	Animacy=Anim|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	14	ccomp	_	_
5	na	na	ADP	prep:acc	AdpType=Prep|Case=Acc	6	case	_	_
6	ul	ulica	X	brev:pun	Abbr=Yes	4	dobj	_	_
7	.	.	PUNCT	interp:_	_	6	punct	_	_
8	Wilczą	Wilczy	ADJ	adj:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	6	appos	_	_
9	w	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	10	case	_	_
10	Warszawie	Warszawa	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	6	nmod	_	_
11	,	,	PUNCT	interp:_	_	4	punct	_	_
12	już	już	PART	qub:_	_	14	advmod	_	_
13	nie	nie	PART	qub:_	_	14	neg	_	_
14	wie	wiedzieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
15	.	.	PUNCT	interp:_	_	14	punct	_	_

~~~


