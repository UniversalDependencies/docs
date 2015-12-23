

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

46 nodes (0%) are attached to their parents as `remnant`.

44 instances of `remnant` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.28260869565217.

The following 17 pairs of parts of speech are connected with `remnant`: [ro-pos/NOUN]()-[ro-pos/NOUN]() (16; 35% instances), [ro-pos/PROPN]()-[ro-pos/PROPN]() (4; 9% instances), [ro-pos/PRON]()-[ro-pos/NOUN]() (3; 7% instances), [ro-pos/PRON]()-[ro-pos/PRON]() (3; 7% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (3; 7% instances), [ro-pos/ADJ]()-[ro-pos/ADJ]() (2; 4% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (2; 4% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (2; 4% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (2; 4% instances), [ro-pos/NUM]()-[ro-pos/NUM]() (2; 4% instances), [ro-pos/ADV]()-[ro-pos/ADV]() (1; 2% instances), [ro-pos/AUX]()-[ro-pos/PUNCT]() (1; 2% instances), [ro-pos/NOUN]()-[ro-pos/DET]() (1; 2% instances), [ro-pos/PROPN]()-[ro-pos/NOUN]() (1; 2% instances), [ro-pos/PUNCT]()-[ro-pos/CONJ]() (1; 2% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (1; 2% instances), [ro-pos/VERB]()-[ro-pos/PART]() (1; 2% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 remnant	color:blue
1	Cine	cine	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	2	nsubj	_	_
2	poate	putea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	csubj	_	_
3	,	,	PUNCT	COMMA	_	2	punct	_	_
4	oase	os	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	5	dobj	_	_
5	roade	roade	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	,	,	PUNCT	COMMA	_	5	punct	_	_
7	cine	cine	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	1	remnant	_	_
8	nu	nu	PART	Qz	Negative=Neg	2	remnant	_	_
9	,	,	PUNCT	COMMA	_	5	punct	_	_
10	nici	nici	ADV	Rz	PronType=Neg	11	advmod	_	_
11	carne	carne	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	4	remnant	_	_
12	moale	moale	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	_
13	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 remnant	color:blue
1	Cranston	Cranston	PROPN	Np	_	2	nsubj	_	_
2	poartă	purta	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	costum	costum	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	2	dobj	_	_
4	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	dungi	dungă	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	3	nmod	_	_
6	,	,	PUNCT	COMMA	_	2	punct	_	_
7	Crombie	Crombie	PROPN	Np	_	1	remnant	_	_
8	pardesiu	pardesiu	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	3	remnant	_	_
9	și	și	CONJ	Crssp	Negative=Pos	8	cc	_	_
10	pantofi	pantof	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	8	conj	_	_
11	negri	negru	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	10	amod	_	_
12	strălucitori	strălucitor	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	10	amod	_	_
13	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 remnant	color:blue
1	Cranston	Cranston	PROPN	Np	_	2	nsubj	_	_
2	poartă	purta	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	costum	costum	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	2	dobj	_	_
4	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	dungi	dungă	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	3	nmod:pmod	_	_
6	,	,	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	2	remnant	_	_
7	Crombie	Crombie	PROPN	Np	_	6	nsubj	_	_
8	pardesiu	pardesiu	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	6	dobj	_	_
9	și	și	CONJ	Crssp	Negative=Pos	8	cc	_	_
10	pantofi	pantof	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	8	conj	_	_
11	negri	negru	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	10	amod	_	_
12	strălucitori	strălucitor	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	10	amod	_	_
13	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


