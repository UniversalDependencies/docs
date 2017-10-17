

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Bokmaal)

This relation is universal.

189 nodes (0%) are attached to their parents as `orphan`.

189 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.26455026455026.

The following 41 pairs of parts of speech are connected with `orphan`: [no-pos/NOUN]()-[no-pos/NOUN]() (44; 23% instances), [no-pos/NOUN]()-[no-pos/VERB]() (19; 10% instances), [no-pos/VERB]()-[no-pos/NOUN]() (14; 7% instances), [no-pos/NOUN]()-[no-pos/ADJ]() (13; 7% instances), [no-pos/PROPN]()-[no-pos/NOUN]() (9; 5% instances), [no-pos/NOUN]()-[no-pos/PROPN]() (8; 4% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (6; 3% instances), [no-pos/ADJ]()-[no-pos/VERB]() (6; 3% instances), [no-pos/PROPN]()-[no-pos/PROPN]() (6; 3% instances), [no-pos/ADJ]()-[no-pos/PRON]() (4; 2% instances), [no-pos/NUM]()-[no-pos/NOUN]() (4; 2% instances), [no-pos/NUM]()-[no-pos/PROPN]() (4; 2% instances), [no-pos/PRON]()-[no-pos/ADJ]() (4; 2% instances), [no-pos/VERB]()-[no-pos/ADP]() (4; 2% instances), [no-pos/NOUN]()-[no-pos/DET]() (3; 2% instances), [no-pos/PROPN]()-[no-pos/VERB]() (3; 2% instances), [no-pos/VERB]()-[no-pos/PRON]() (3; 2% instances), [no-pos/VERB]()-[no-pos/VERB]() (3; 2% instances), [no-pos/ADJ]()-[no-pos/ADV]() (2; 1% instances), [no-pos/ADV]()-[no-pos/NOUN]() (2; 1% instances), [no-pos/NOUN]()-[no-pos/ADV]() (2; 1% instances), [no-pos/NOUN]()-[no-pos/PRON]() (2; 1% instances), [no-pos/NUM]()-[no-pos/ADP]() (2; 1% instances), [no-pos/PRON]()-[no-pos/NOUN]() (2; 1% instances), [no-pos/PRON]()-[no-pos/VERB]() (2; 1% instances), [no-pos/VERB]()-[no-pos/ADJ]() (2; 1% instances), [no-pos/VERB]()-[no-pos/ADV]() (2; 1% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (1; 1% instances), [no-pos/ADJ]()-[no-pos/ADP]() (1; 1% instances), [no-pos/ADJ]()-[no-pos/PROPN]() (1; 1% instances), [no-pos/ADP]()-[no-pos/NOUN]() (1; 1% instances), [no-pos/ADV]()-[no-pos/ADJ]() (1; 1% instances), [no-pos/ADV]()-[no-pos/ADV]() (1; 1% instances), [no-pos/DET]()-[no-pos/DET]() (1; 1% instances), [no-pos/NOUN]()-[no-pos/ADP]() (1; 1% instances), [no-pos/NOUN]()-[no-pos/NUM]() (1; 1% instances), [no-pos/NOUN]()-[no-pos/SYM]() (1; 1% instances), [no-pos/NUM]()-[no-pos/ADJ]() (1; 1% instances), [no-pos/NUM]()-[no-pos/DET]() (1; 1% instances), [no-pos/PROPN]()-[no-pos/ADJ]() (1; 1% instances), [no-pos/PROPN]()-[no-pos/DET]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 orphan	color:blue
1	Fatt	fatte	VERB	_	Mood=Imp|VerbForm=Fin	0	root	_	_
2	mot	mot	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	1	obj	_	_
3	-	$-	PUNCT	_	_	1	punct	_	_
4	ny	ny	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	5	amod	_	_
5	ordbok	ordbok	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	1	conj	_	_
6	på	på	ADP	_	_	7	case	_	_
7	vei	vei	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	5	orphan	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 orphan	color:blue
1	Til	til	ADP	_	_	2	case	_	_
2	informasjon	informasjon	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
3	,	$,	PUNCT	_	_	2	punct	_	_
4	så	så	ADV	_	_	5	nmod	_	_
5	veier	veie	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
6	jeg	jeg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
7	omtrent	omtrent	ADV	_	_	8	advmod	_	_
8	65	65	NUM	_	Number=Plur|NumType=Card	9	nummod	_	_
9	kilo	kilo	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	5	obj	_	_
10	-	$-	PUNCT	_	_	5	punct	_	_
11	63	63	NUM	_	Number=Plur|NumType=Card	12	nummod	_	_
12	kilo	kilo	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	5	conj	_	_
13	dersom	dersom	SCONJ	_	_	15	mark	_	_
14	jeg	jeg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	15	nsubj	_	_
15	vasker	vaske	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	12	orphan	_	_
16	meg	jeg	PRON	_	Animacy=Hum|Case=Acc|Number=Sing|Person=1|PronType=Prs	15	obj	_	SpaceAfter=No
17	.	$.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 orphan	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
2	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	nemlig	nemlig	ADV	_	_	4	advmod	_	_
4	vindretningen	vindretning	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
5	som	som	PRON	_	PronType=Rel	6	nsubj	_	_
6	avgjør	avgjøre	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	SpaceAfter=No
7	,	$,	PUNCT	_	_	4	punct	_	_
8	og	og	CCONJ	_	_	11	cc	_	_
9	om	om	SCONJ	_	_	11	mark	_	_
10	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	11	expl	_	_
11	er	være	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	conj	_	_
12	tett	tett	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	13	amod	_	_
13	tåke	tåke	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	11	orphan	_	SpaceAfter=No
14	.	$.	PUNCT	_	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Nynorsk)

This relation is universal.

207 nodes (0%) are attached to their parents as `orphan`.

207 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.36714975845411.

The following 45 pairs of parts of speech are connected with `orphan`: [no-pos/NOUN]()-[no-pos/NOUN]() (49; 24% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (12; 6% instances), [no-pos/NOUN]()-[no-pos/ADJ]() (12; 6% instances), [no-pos/PROPN]()-[no-pos/NOUN]() (12; 6% instances), [no-pos/NOUN]()-[no-pos/VERB]() (10; 5% instances), [no-pos/NOUN]()-[no-pos/PROPN]() (8; 4% instances), [no-pos/NOUN]()-[no-pos/NUM]() (7; 3% instances), [no-pos/NUM]()-[no-pos/NOUN]() (6; 3% instances), [no-pos/PROPN]()-[no-pos/NUM]() (6; 3% instances), [no-pos/VERB]()-[no-pos/NOUN]() (6; 3% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (5; 2% instances), [no-pos/NOUN]()-[no-pos/ADV]() (5; 2% instances), [no-pos/PRON]()-[no-pos/ADJ]() (5; 2% instances), [no-pos/PROPN]()-[no-pos/ADJ]() (5; 2% instances), [no-pos/PROPN]()-[no-pos/PROPN]() (5; 2% instances), [no-pos/DET]()-[no-pos/NOUN]() (4; 2% instances), [no-pos/NUM]()-[no-pos/ADJ]() (4; 2% instances), [no-pos/PRON]()-[no-pos/VERB]() (4; 2% instances), [no-pos/VERB]()-[no-pos/ADJ]() (4; 2% instances), [no-pos/ADV]()-[no-pos/NOUN]() (3; 1% instances), [no-pos/NOUN]()-[no-pos/DET]() (3; 1% instances), [no-pos/PRON]()-[no-pos/ADV]() (3; 1% instances), [no-pos/PRON]()-[no-pos/NOUN]() (3; 1% instances), [no-pos/PROPN]()-[no-pos/ADP]() (3; 1% instances), [no-pos/ADJ]()-[no-pos/VERB]() (2; 1% instances), [no-pos/NOUN]()-[no-pos/ADP]() (2; 1% instances), [no-pos/ADJ]()-[no-pos/ADP]() (1; 0% instances), [no-pos/ADJ]()-[no-pos/ADV]() (1; 0% instances), [no-pos/ADJ]()-[no-pos/PRON]() (1; 0% instances), [no-pos/ADJ]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/ADP]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/ADV]()-[no-pos/ADV]() (1; 0% instances), [no-pos/ADV]()-[no-pos/VERB]() (1; 0% instances), [no-pos/DET]()-[no-pos/ADV]() (1; 0% instances), [no-pos/DET]()-[no-pos/VERB]() (1; 0% instances), [no-pos/NUM]()-[no-pos/ADV]() (1; 0% instances), [no-pos/NUM]()-[no-pos/PRON]() (1; 0% instances), [no-pos/NUM]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/PRON]()-[no-pos/NUM]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/ADV]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/CCONJ]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/DET]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/X]() (1; 0% instances), [no-pos/VERB]()-[no-pos/ADP]() (1; 0% instances), [no-pos/VERB]()-[no-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 orphan	color:blue
1	Eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	ville	vilje	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	aux	_	_
3	skrive	skrive	VERB	_	VerbForm=Inf	0	root	_	_
4	om	om	ADP	_	_	5	case	_	_
5	dei	dei	PRON	_	Animacy=Hum|Case=Acc|Number=Plur|Person=3|PronType=Prs	3	obl	_	_
6	alle	all	DET	_	Number=Plur|PronType=Tot	5	det	_	_
7	samen	samen	ADV	_	_	6	advmod	_	SpaceAfter=No
8	,	$,	PUNCT	_	_	5	punct	_	_
9	om	om	ADP	_	_	10	case	_	_
10	byen	by	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	3	conj	_	_
11	som	som	ADP	_	_	13	case	_	_
12	ein	ein	DET	_	Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	heilskap	heilskap	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	10	orphan	_	SpaceAfter=No
14	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 orphan	color:blue
1	Då	då	ADV	_	_	4	advmod	_	_
2	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	4	cop	_	_
3	Erika	Erika	NOUN	_	Gender=Fem	4	nsubj	_	_
4	femten	femten	NUM	_	Number=Plur|NumType=Card	0	root	_	SpaceAfter=No
5	,	$,	PUNCT	_	_	3	punct	_	_
6	Laura	Laura	PROPN	_	_	4	conj	_	_
7	tolv	tolv	NUM	_	Number=Plur|NumType=Card	6	orphan	_	_
8	og	og	CCONJ	_	_	9	cc	_	_
9	Molly	Molly	PROPN	_	_	4	conj	_	_
10	fem	fem	NUM	_	Number=Plur|NumType=Card	11	nummod	_	_
11	år	år	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	9	orphan	_	SpaceAfter=No
12	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 orphan	color:blue
1	At	at	SCONJ	_	_	4	mark	_	_
2	læraren	lærar	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	4	nsubj	_	_
3	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	alt	alt	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	0	root	_	_
5	og	og	CCONJ	_	_	6	cc	_	_
6	resten	rest	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	4	conj	_	_
7	så	så	ADV	_	_	8	advmod	_	_
8	godt	god	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	6	orphan	_	_
9	som	som	ADP	_	_	10	case	_	_
10	ingenting	ingenting	PRON	_	Number=Sing|Polarity=Neg|PronType=Neg	7	obl	_	SpaceAfter=No
11	.	$.	PUNCT	_	_	4	punct	_	_

~~~


