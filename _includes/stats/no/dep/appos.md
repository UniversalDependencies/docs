

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Bokmaal)

This relation is universal.

915 nodes (0%) are attached to their parents as `appos`.

915 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.58469945355191.

The following 53 pairs of parts of speech are connected with `appos`: [no-pos/NOUN]()-[no-pos/NOUN]() (296; 32% instances), [no-pos/PROPN]()-[no-pos/NOUN]() (128; 14% instances), [no-pos/PROPN]()-[no-pos/PROPN]() (76; 8% instances), [no-pos/NOUN]()-[no-pos/VERB]() (44; 5% instances), [no-pos/PRON]()-[no-pos/VERB]() (44; 5% instances), [no-pos/PRON]()-[no-pos/NOUN]() (39; 4% instances), [no-pos/NOUN]()-[no-pos/ADJ]() (26; 3% instances), [no-pos/VERB]()-[no-pos/PRON]() (25; 3% instances), [no-pos/ADV]()-[no-pos/VERB]() (24; 3% instances), [no-pos/NOUN]()-[no-pos/PRON]() (20; 2% instances), [no-pos/NOUN]()-[no-pos/NUM]() (19; 2% instances), [no-pos/PRON]()-[no-pos/PRON]() (16; 2% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (14; 2% instances), [no-pos/NOUN]()-[no-pos/PROPN]() (14; 2% instances), [no-pos/ADV]()-[no-pos/NOUN]() (10; 1% instances), [no-pos/PRON]()-[no-pos/ADJ]() (9; 1% instances), [no-pos/VERB]()-[no-pos/VERB]() (9; 1% instances), [no-pos/ADJ]()-[no-pos/PRON]() (8; 1% instances), [no-pos/PROPN]()-[no-pos/DET]() (8; 1% instances), [no-pos/VERB]()-[no-pos/NOUN]() (7; 1% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (6; 1% instances), [no-pos/NOUN]()-[no-pos/DET]() (6; 1% instances), [no-pos/PROPN]()-[no-pos/NUM]() (6; 1% instances), [no-pos/ADV]()-[no-pos/ADJ]() (5; 1% instances), [no-pos/PROPN]()-[no-pos/PRON]() (5; 1% instances), [no-pos/NOUN]()-[no-pos/X]() (4; 0% instances), [no-pos/PRON]()-[no-pos/NUM]() (4; 0% instances), [no-pos/PRON]()-[no-pos/PROPN]() (4; 0% instances), [no-pos/ADJ]()-[no-pos/VERB]() (3; 0% instances), [no-pos/ADV]()-[no-pos/PROPN]() (3; 0% instances), [no-pos/PROPN]()-[no-pos/ADJ]() (3; 0% instances), [no-pos/X]()-[no-pos/NOUN]() (3; 0% instances), [no-pos/ADP]()-[no-pos/PROPN]() (2; 0% instances), [no-pos/DET]()-[no-pos/PRON]() (2; 0% instances), [no-pos/NUM]()-[no-pos/NOUN]() (2; 0% instances), [no-pos/NUM]()-[no-pos/NUM]() (2; 0% instances), [no-pos/NUM]()-[no-pos/PROPN]() (2; 0% instances), [no-pos/PRON]()-[no-pos/DET]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/NUM]() (1; 0% instances), [no-pos/ADJ]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/ADP]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/ADP]()-[no-pos/DET]() (1; 0% instances), [no-pos/ADP]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/DET]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/DET]()-[no-pos/VERB]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/ADP]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/ADV]() (1; 0% instances), [no-pos/PRON]()-[no-pos/ADP]() (1; 0% instances), [no-pos/PRON]()-[no-pos/ADV]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/VERB]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/X]() (1; 0% instances), [no-pos/VERB]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/VERB]()-[no-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 appos	color:blue
1	Jeg	jeg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	minner	minne	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	kun	kun	ADV	_	_	2	advmod	_	_
4	om	om	ADP	_	_	5	case	_	_
5	begrepet	begrep	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	2	obl	_	_
6	skjult	skjule	ADJ	_	Definite=Ind|Number=Sing|VerbForm=Part	7	amod	_	_
7	agenda	agenda	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	5	appos	_	SpaceAfter=No
8	.	$.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 appos	color:blue
1	Mannen	mann	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	3	nsubj	_	_
2	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	Tor	Tor	PROPN	_	Gender=Masc	0	root	_	_
4	Holger	Holger	PROPN	_	_	3	flat:name	_	_
5	Bertelsen	Bertelsen	PROPN	_	_	3	flat:name	_	SpaceAfter=No
6	,	$,	PUNCT	_	_	3	punct	_	_
7	dommer	dommer	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	3	appos	_	_
8	i	i	ADP	_	_	9	case	_	_
9	Bergen	Bergen	PROPN	_	_	7	nmod	_	_
10	tingrett	tingrett	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	9	flat:name	_	SpaceAfter=No
11	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 appos	color:blue
1	Mvh	mvh	ADV	_	Abbr=Yes	2	advmod	_	_
2	Gro	Gro	PROPN	_	Gender=Fem	0	root	_	_
3	Kyte	Kyte	PROPN	_	_	2	flat:name	_	SpaceAfter=No
4	,	$,	PUNCT	_	_	2	punct	_	_
5	Leder	Leder	PROPN	_	_	2	appos	_	_
6	for	for	ADP	_	_	7	case	_	_
7	barneverntjenesten	barneverntjeneste	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
8	»	$"	PUNCT	_	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Nynorsk)

This relation is universal.

1082 nodes (0%) are attached to their parents as `appos`.

1082 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.96118299445471.

The following 49 pairs of parts of speech are connected with `appos`: [no-pos/NOUN]()-[no-pos/NOUN]() (432; 40% instances), [no-pos/PROPN]()-[no-pos/NOUN]() (94; 9% instances), [no-pos/NOUN]()-[no-pos/VERB]() (52; 5% instances), [no-pos/PRON]()-[no-pos/NOUN]() (48; 4% instances), [no-pos/PRON]()-[no-pos/VERB]() (47; 4% instances), [no-pos/ADV]()-[no-pos/VERB]() (39; 4% instances), [no-pos/NOUN]()-[no-pos/PRON]() (38; 4% instances), [no-pos/PROPN]()-[no-pos/PROPN]() (36; 3% instances), [no-pos/NOUN]()-[no-pos/ADJ]() (30; 3% instances), [no-pos/PRON]()-[no-pos/PRON]() (24; 2% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (23; 2% instances), [no-pos/VERB]()-[no-pos/PRON]() (23; 2% instances), [no-pos/NOUN]()-[no-pos/X]() (16; 1% instances), [no-pos/VERB]()-[no-pos/NOUN]() (16; 1% instances), [no-pos/ADJ]()-[no-pos/PRON]() (15; 1% instances), [no-pos/NOUN]()-[no-pos/DET]() (14; 1% instances), [no-pos/NOUN]()-[no-pos/PROPN]() (14; 1% instances), [no-pos/VERB]()-[no-pos/VERB]() (13; 1% instances), [no-pos/PRON]()-[no-pos/ADJ]() (12; 1% instances), [no-pos/NOUN]()-[no-pos/NUM]() (11; 1% instances), [no-pos/ADV]()-[no-pos/ADJ]() (8; 1% instances), [no-pos/DET]()-[no-pos/NOUN]() (8; 1% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (7; 1% instances), [no-pos/ADP]()-[no-pos/PROPN]() (5; 0% instances), [no-pos/ADV]()-[no-pos/NOUN]() (5; 0% instances), [no-pos/NUM]()-[no-pos/NOUN]() (5; 0% instances), [no-pos/NUM]()-[no-pos/PROPN]() (5; 0% instances), [no-pos/PRON]()-[no-pos/PROPN]() (5; 0% instances), [no-pos/VERB]()-[no-pos/ADJ]() (5; 0% instances), [no-pos/PROPN]()-[no-pos/DET]() (4; 0% instances), [no-pos/ADJ]()-[no-pos/VERB]() (3; 0% instances), [no-pos/ADP]()-[no-pos/NOUN]() (3; 0% instances), [no-pos/ADJ]()-[no-pos/ADV]() (2; 0% instances), [no-pos/ADP]()-[no-pos/VERB]() (2; 0% instances), [no-pos/NOUN]()-[no-pos/ADP]() (2; 0% instances), [no-pos/NOUN]()-[no-pos/ADV]() (2; 0% instances), [no-pos/NUM]()-[no-pos/ADJ]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/ADP]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/ADV]()-[no-pos/ADP]() (1; 0% instances), [no-pos/ADV]()-[no-pos/ADV]() (1; 0% instances), [no-pos/DET]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/DET]()-[no-pos/PRON]() (1; 0% instances), [no-pos/DET]()-[no-pos/VERB]() (1; 0% instances), [no-pos/PRON]()-[no-pos/ADP]() (1; 0% instances), [no-pos/PRON]()-[no-pos/DET]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/NUM]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/PRON]() (1; 0% instances), [no-pos/VERB]()-[no-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 appos	color:blue
1	Det	det	DET	_	Gender=Neut|Number=Sing|PronType=Dem	3	det	_	_
2	norske	norsk	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	3	amod	_	_
3	ordet	ord	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	7	nsubj	_	_
4	«	$"	PUNCT	_	_	5	punct	_	_
5	refleksjonsgløymske	refleksjonsgløymske	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	3	appos	_	_
6	»	$"	PUNCT	_	_	5	punct	_	_
7	verkar	verke	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
8	nok	nok	ADV	_	_	7	advmod	_	_
9	for	for	ADV	_	_	10	advmod	_	_
10	kunstig	kunstig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	7	xcomp	_	SpaceAfter=No
11	.	$.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 appos	color:blue
1	Dei	dei	DET	_	Number=Plur|PronType=Dem	2	det	_	_
2	rike	rik	ADJ	_	Degree=Pos|Number=Plur	3	nsubj	_	_
3	bryr	bry	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	seg	seg	PRON	_	Case=Acc|Number=Sing|PronType=Prs	3	obj	_	_
5	ikkje	ikkje	ADV	_	Polarity=Neg	3	advmod	_	_
6	om	om	ADP	_	_	7	case	_	_
7	oss	vi	PRON	_	Animacy=Hum|Case=Acc|Number=Plur|Person=1|PronType=Prs	3	obl	_	SpaceAfter=No
8	,	$,	PUNCT	_	_	3	punct	_	_
9	seier	seie	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
10	Rasim	Rasim	PROPN	_	_	9	nsubj	_	SpaceAfter=No
11	,	$,	PUNCT	_	_	10	punct	_	_
12	ein	ein	DET	_	Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
13	eldre	gammal	ADJ	_	Degree=Cmp	14	amod	_	_
14	mann	mann	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	10	appos	_	SpaceAfter=No
15	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 appos	color:blue
1	Slagordet	slagord	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	9	nsubj	_	_
2	«	$"	PUNCT	_	_	4	punct	_	SpaceAfter=No
3	Å	å	PART	_	_	4	mark	_	_
4	ta	ta	VERB	_	VerbForm=Inf	1	appos	_	_
5	natta	natt	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	4	obj	_	_
6	tilbake	tilbake	ADP	_	_	4	compound:prt	_	SpaceAfter=No
7	»	$"	PUNCT	_	_	4	punct	_	_
8	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	rett	rett	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
10	,	$,	PUNCT	_	_	9	punct	_	_
11	men	men	CCONJ	_	_	12	cc	_	_
12	naivt	naiv	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	9	conj	_	SpaceAfter=No
13	.	$.	PUNCT	_	_	9	punct	_	_

~~~


