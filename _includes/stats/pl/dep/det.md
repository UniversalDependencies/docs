

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.
There are 2 language-specific subtypes of `det`: [det:numgov](), [det:nummod]().

1190 nodes (2%) are attached to their parents as `det`.

1117 instances of `det` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17478991596639.

The following 4 pairs of parts of speech are connected with `det`: [pl-pos/NOUN]()-[pl-pos/DET]() (1153; 97% instances), [pl-pos/PRON]()-[pl-pos/DET]() (16; 1% instances), [pl-pos/PROPN]()-[pl-pos/DET]() (14; 1% instances), [pl-pos/NUM]()-[pl-pos/DET]() (7; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det	color:blue
1	-	-	PUNCT	interp	_	3	punct	_	_
2	Nie	nie	PART	qub	_	3	advmod	_	_
3	wiem	wiedzieć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	,	,	PUNCT	interp	_	6	punct	_	_
5	jak	jak	ADV	adv	_	6	advmod	_	_
6	zrodziła	zrodzić	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	3	ccomp	_	_
7	się	się	PRON	qub	PronType=Prs|Reflex=Yes	6	expl:pv	_	_
8	ta	ten	DET	adj:sg:nom:f:pos	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
9	inicjatywa	inicjatywa	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	interp	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 det	color:blue
1	Chyba	chyba	PART	qub	_	5	advmod	_	_
2	od	od	ADP	prep:gen:nwok	AdpType=Prep|Case=Gen|Variant=Short	3	case	_	_
3	tego	to	PRON	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	5	obl	_	_
4	wszystkiego	wszystek	DET	adj:sg:gen:n:pos	Case=Gen|Gender=Neut|Number=Sing|PronType=Tot	3	det	_	_
5	został	zostać	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|Variant=Long|VerbForm=Fin	5	aux	_	_
7	lunatykiem	lunatyk	NOUN	subst:sg:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
8	.	.	PUNCT	interp	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 det	color:blue
1	–	–	PUNCT	interp	_	4	punct	_	_
2	W	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	3	case	_	_
3	Odeonie	odeon	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	obl	_	_
4	grają	grać	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	ten	ten	DET	adj:sg:acc:m3:pos	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	6	det	_	_
6	film	film	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obj	_	SpaceAfter=No
7	,	,	PUNCT	interp	_	10	punct	_	_
8	o	o	ADP	prep:loc	AdpType=Prep|Case=Loc	9	case	_	_
9	którym	który	DET	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|PronType=Int,Rel	10	obj	_	_
10	opowiadają	opowiadać	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	acl	_	_
11	wszyscy	wszystek	DET	adj:pl:nom:m1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	12	det	_	_
12	Polacy	Polak	PROPN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	10	nsubj	_	SpaceAfter=No
13	.	.	PUNCT	interp	_	4	punct	_	_

~~~


