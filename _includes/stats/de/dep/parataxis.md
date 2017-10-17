

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

521 nodes (0%) are attached to their parents as `parataxis`.

490 instances of `parataxis` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.8080614203455.

The following 29 pairs of parts of speech are connected with `parataxis`: [de-pos/VERB]()-[de-pos/VERB]() (239; 46% instances), [de-pos/NOUN]()-[de-pos/VERB]() (64; 12% instances), [de-pos/ADJ]()-[de-pos/VERB]() (55; 11% instances), [de-pos/VERB]()-[de-pos/ADJ]() (46; 9% instances), [de-pos/VERB]()-[de-pos/NOUN]() (34; 7% instances), [de-pos/PROPN]()-[de-pos/VERB]() (12; 2% instances), [de-pos/ADJ]()-[de-pos/ADJ]() (9; 2% instances), [de-pos/NOUN]()-[de-pos/ADJ]() (8; 2% instances), [de-pos/NOUN]()-[de-pos/NOUN]() (8; 2% instances), [de-pos/VERB]()-[de-pos/ADP]() (7; 1% instances), [de-pos/VERB]()-[de-pos/PROPN]() (7; 1% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (6; 1% instances), [de-pos/ADJ]()-[de-pos/NOUN]() (5; 1% instances), [de-pos/VERB]()-[de-pos/X]() (4; 1% instances), [de-pos/NOUN]()-[de-pos/PROPN]() (3; 1% instances), [de-pos/ADJ]()-[de-pos/ADP]() (1; 0% instances), [de-pos/ADV]()-[de-pos/VERB]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/ADP]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/PRON]() (1; 0% instances), [de-pos/NUM]()-[de-pos/ADJ]() (1; 0% instances), [de-pos/PART]()-[de-pos/VERB]() (1; 0% instances), [de-pos/PRON]()-[de-pos/VERB]() (1; 0% instances), [de-pos/PRON]()-[de-pos/X]() (1; 0% instances), [de-pos/PROPN]()-[de-pos/ADJ]() (1; 0% instances), [de-pos/VERB]()-[de-pos/ADV]() (1; 0% instances), [de-pos/VERB]()-[de-pos/AUX]() (1; 0% instances), [de-pos/VERB]()-[de-pos/PART]() (1; 0% instances), [de-pos/VERB]()-[de-pos/PRON]() (1; 0% instances), [de-pos/X]()-[de-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 14 parataxis	color:blue
1	Ich	ich	PRON	PPER	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
2	kann	können	AUX	VMFIN	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	aux	_	_
3	es	es	PRON	PPER	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	obj	_	_
4	euch	ihr	PRON	PPER	Case=Dat|Number=Plur|Person=2|Polite=Infm|PronType=Prs	9	iobj	_	_
5	nur	nur	ADV	ADV	_	9	advmod	_	_
6	an	an	ADP	APPR	_	8	case	_	_
7	das	der	DET	ART	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	8	det	_	_
8	Herz	Herz	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing	9	obl	_	_
9	legen	legen	VERB	VVINF	VerbForm=Inf	0	root	_	_
10	--	--	PUNCT	$(	_	9	punct	_	_
11	Ihr	ihr	PRON	PPER	Case=Nom|Number=Plur|Person=2|Polite=Infm|PronType=Prs	14	nsubj	_	_
12	werdet	werden	AUX	VAFIN	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	14	aux	_	_
13	es	es	PRON	PPER	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	obj	_	_
14	mögen	mögen	VERB	VMFIN	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	9	parataxis	_	SpaceAfter=No
15	!	!	PUNCT	$.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 parataxis	color:blue
1	Zu	zu	ADV	APPR	_	2	advmod	_	_
2	lange	lang	ADJ	ADJA	Degree=Pos	3	amod	_	_
3	Wartezeiten	Wartezeit	NOUN	NN	_	0	root	_	SpaceAfter=No
4	,	,	PUNCT	$,	_	3	punct	_	_
5	einiges	einiges	PRON	PIAT	Case=Acc|PronType=Ind	6	obj	_	_
6	vergessen	vergessen	VERB	VVPP	VerbForm=Part	3	parataxis	_	_
7	und	und	CCONJ	KON	_	9	cc	_	_
8	wenig	wenig	ADV	ADV	_	9	advmod	_	_
9	freundlich	freundlich	ADJ	ADJD	Degree=Pos	6	conj	_	SpaceAfter=No
10	.	.	PUNCT	$.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 parataxis	color:blue
1	Indican	Indican	NOUN	NE	Case=Nom|Number=Sing	4	nsubj	_	_
2	selbst	selbst	ADV	ADV	_	1	advmod	_	_
3	ist	sein	VERB	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	farblos	farblos	ADJ	ADJD	Degree=Pos	0	root	_	SpaceAfter=No
5	,	,	PUNCT	$,	_	4	punct	_	_
6	Indigo	Indigo	NOUN	NN	Case=Nom|Number=Sing	8	nsubj	_	_
7	selbst	selbst	ADV	ADV	_	6	advmod	_	_
8	besitzt	besitzen	VERB	VVFIN	Number=Sing|Person=3|VerbForm=Fin	4	parataxis	_	_
9	eine	ein	DET	ART	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
10	charakteristische	charakteristisch	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	12	amod	_	_
11	blaue	blau	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	12	amod	_	_
12	Farbe	Farbe	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	8	obj	_	SpaceAfter=No
13	.	.	PUNCT	$.	_	4	punct	_	_

~~~


