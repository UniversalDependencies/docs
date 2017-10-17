

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

350 nodes (0%) are attached to their parents as `appos`.

350 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.69714285714286.

The following 15 pairs of parts of speech are connected with `appos`: [pl-pos/NOUN]()-[pl-pos/PROPN]() (182; 52% instances), [pl-pos/NOUN]()-[pl-pos/NOUN]() (95; 27% instances), [pl-pos/PROPN]()-[pl-pos/NOUN]() (21; 6% instances), [pl-pos/X]()-[pl-pos/ADJ]() (15; 4% instances), [pl-pos/X]()-[pl-pos/PROPN]() (13; 4% instances), [pl-pos/NOUN]()-[pl-pos/ADJ]() (6; 2% instances), [pl-pos/NOUN]()-[pl-pos/X]() (4; 1% instances), [pl-pos/PRON]()-[pl-pos/NOUN]() (4; 1% instances), [pl-pos/NOUN]()-[pl-pos/NUM]() (3; 1% instances), [pl-pos/X]()-[pl-pos/NOUN]() (2; 1% instances), [pl-pos/NOUN]()-[pl-pos/DET]() (1; 0% instances), [pl-pos/PRON]()-[pl-pos/PROPN]() (1; 0% instances), [pl-pos/PROPN]()-[pl-pos/NUM]() (1; 0% instances), [pl-pos/PROPN]()-[pl-pos/PROPN]() (1; 0% instances), [pl-pos/X]()-[pl-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 appos	color:blue
1	Projekt	projekt	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	został	zostać	AUX	praet:sg:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	3	aux:pass	_	_
3	podpisany	podpisany	ADJ	ppas:sg:nom:m3:perf:aff	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	_	_
4	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Case=Acc|Variant=Short	5	case	_	_
5	cesarza	cesarz	NOUN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	3	obj	_	_
6	Wilhelma	Wilhelm	PROPN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	5	appos	_	_
7	II	II	ADJ	adj:sg:acc:m1:pos	Animacy=Hum|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	SpaceAfter=No
8	.	.	PUNCT	interp	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 appos	color:blue
1	Maszewski	maszewski	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	_
2	Teatr	teatr	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
3	Krzyk	krzyk	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	appos	_	_
4	wystąpi	wystąpić	VERB	fin:sg:ter:perf	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	dzisiaj	dzisiaj	ADV	adv	_	4	advmod	_	_
6	w	w	ADP	prep:loc:nwok	AdpType=Prep|Case=Loc|Variant=Short	7	case	_	_
7	Gdańsku	Gdańsk	PROPN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
8	.	.	PUNCT	interp	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 appos	color:blue
1	Henryk	Henryk	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
2	Sadurski	Sadurski	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	1	nmod	_	SpaceAfter=No
3	,	,	PUNCT	interp	_	4	punct	_	_
4	inżynier	inżynier	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	1	appos	_	_
5	metalurg	metalurg	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	4	appos	_	SpaceAfter=No
6	,	,	PUNCT	interp	_	4	punct	_	_
7	nie	nie	PART	qub	_	8	advmod	_	_
8	ma	mieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	pracy	praca	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	8	obj	_	_
10	od	od	ADP	prep:gen:nwok	AdpType=Prep|Case=Gen|Variant=Short	12	case	_	_
11	kilku	kilka	DET	num:pl:gen:m3:congr	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|NumType=Card|PronType=Ind	12	det:numgov	_	_
12	lat	rok	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	8	obl	_	SpaceAfter=No
13	.	.	PUNCT	interp	_	8	punct	_	_

~~~


