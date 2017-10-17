

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

10543 nodes (3%) are attached to their parents as `cc`.

10543 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.47576591103102.

The following 44 pairs of parts of speech are connected with `cc`: [fr-pos/NOUN]()-[fr-pos/CCONJ]() (3907; 37% instances), [fr-pos/VERB]()-[fr-pos/CCONJ]() (3138; 30% instances), [fr-pos/PROPN]()-[fr-pos/CCONJ]() (1388; 13% instances), [fr-pos/ADJ]()-[fr-pos/CCONJ]() (892; 8% instances), [fr-pos/NUM]()-[fr-pos/CCONJ]() (239; 2% instances), [fr-pos/NOUN]()-[fr-pos/ADV]() (206; 2% instances), [fr-pos/NOUN]()-[fr-pos/SCONJ]() (165; 2% instances), [fr-pos/PRON]()-[fr-pos/CCONJ]() (144; 1% instances), [fr-pos/VERB]()-[fr-pos/SCONJ]() (108; 1% instances), [fr-pos/ADV]()-[fr-pos/CCONJ]() (69; 1% instances), [fr-pos/PROPN]()-[fr-pos/SCONJ]() (55; 1% instances), [fr-pos/X]()-[fr-pos/CCONJ]() (36; 0% instances), [fr-pos/ADJ]()-[fr-pos/SCONJ]() (22; 0% instances), [fr-pos/ADP]()-[fr-pos/CCONJ]() (19; 0% instances), [fr-pos/PROPN]()-[fr-pos/SYM]() (19; 0% instances), [fr-pos/PROPN]()-[fr-pos/ADV]() (17; 0% instances), [fr-pos/VERB]()-[fr-pos/ADV]() (16; 0% instances), [fr-pos/SYM]()-[fr-pos/CCONJ]() (14; 0% instances), [fr-pos/ADJ]()-[fr-pos/ADV]() (10; 0% instances), [fr-pos/PRON]()-[fr-pos/SCONJ]() (9; 0% instances), [fr-pos/DET]()-[fr-pos/CCONJ]() (8; 0% instances), [fr-pos/NUM]()-[fr-pos/SCONJ]() (8; 0% instances), [fr-pos/SYM]()-[fr-pos/SCONJ]() (8; 0% instances), [fr-pos/PRON]()-[fr-pos/ADV]() (7; 0% instances), [fr-pos/ADV]()-[fr-pos/SCONJ]() (6; 0% instances), [fr-pos/NOUN]()-[fr-pos/SYM]() (6; 0% instances), [fr-pos/PROPN]()-[fr-pos/X]() (4; 0% instances), [fr-pos/INTJ]()-[fr-pos/CCONJ]() (2; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADP]() (2; 0% instances), [fr-pos/NUM]()-[fr-pos/ADV]() (2; 0% instances), [fr-pos/PART]()-[fr-pos/CCONJ]() (2; 0% instances), [fr-pos/SYM]()-[fr-pos/ADV]() (2; 0% instances), [fr-pos/VERB]()-[fr-pos/ADP]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/ADP]() (1; 0% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/ADV]()-[fr-pos/ADV]() (1; 0% instances), [fr-pos/ADV]()-[fr-pos/SYM]() (1; 0% instances), [fr-pos/AUX]()-[fr-pos/CCONJ]() (1; 0% instances), [fr-pos/CCONJ]()-[fr-pos/ADV]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/SCONJ]()-[fr-pos/SCONJ]() (1; 0% instances), [fr-pos/X]()-[fr-pos/SCONJ]() (1; 0% instances), [fr-pos/X]()-[fr-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 cc	color:blue
1	Mais	mais	CCONJ	_	_	9	cc	_	SpaceAfter=No
2	,	,	PUNCT	_	_	9	punct	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	SMIC	SMIC	PROPN	_	_	9	nsubj	_	_
5	n'	ne	ADV	_	Polarity=Neg	9	advmod	_	SpaceAfter=No
6	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
7	pas	pas	ADV	_	Polarity=Neg	9	advmod	_	_
8	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	outil	outil	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
10	de	de	ADP	_	_	11	case	_	_
11	référence	référence	NOUN	_	Gender=Fem|Number=Sing	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc	color:blue
1	Mais	mais	CCONJ	_	_	3	cc	_	_
2	comment	comment	ADV	_	_	3	advmod	_	_
3	faire	faire	VERB	_	VerbForm=Inf	0	root	_	_
4	dans	dans	ADP	_	_	6	case	_	_
5	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	contexte	contexte	NOUN	_	Gender=Masc|Number=Sing	3	obl	_	_
7	structurellement	structurellement	ADV	_	_	8	advmod	_	_
8	raciste	raciste	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	_
9	?	?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	En	en	ADP	_	_	2	case	_	_
2	1990	1990	NUM	_	_	5	obl	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	Debbie	Debbie	PROPN	_	_	5	nsubj	_	_
5	réunit	réunir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
6	Stein	Stein	PROPN	_	_	5	obj	_	_
7	et	et	CCONJ	_	_	8	cc	_	_
8	Burke	Burke	PROPN	_	_	6	conj	_	_
9	pour	pour	ADP	_	_	11	case	_	_
10	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	tournée	tournée	NOUN	_	Gender=Fem|Number=Sing	5	obl	_	_
12	d'	de	ADP	_	_	13	case	_	SpaceAfter=No
13	été	été	NOUN	_	Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-ParTUT)

This relation is universal.

567 nodes (3%) are attached to their parents as `cc`.

563 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.78483245149912.

The following 10 pairs of parts of speech are connected with `cc`: [fr-pos/NOUN]()-[fr-pos/CCONJ]() (278; 49% instances), [fr-pos/VERB]()-[fr-pos/CCONJ]() (172; 30% instances), [fr-pos/ADJ]()-[fr-pos/CCONJ]() (64; 11% instances), [fr-pos/NOUN]()-[fr-pos/ADV]() (14; 2% instances), [fr-pos/PRON]()-[fr-pos/CCONJ]() (13; 2% instances), [fr-pos/PROPN]()-[fr-pos/CCONJ]() (13; 2% instances), [fr-pos/NUM]()-[fr-pos/CCONJ]() (5; 1% instances), [fr-pos/ADV]()-[fr-pos/CCONJ]() (4; 1% instances), [fr-pos/ADJ]()-[fr-pos/ADV]() (3; 1% instances), [fr-pos/PRON]()-[fr-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	5	5	NUM	N	NumType=Card	3	nummod	_	SpaceAfter=No
2	)	)	PUNCT	FF	_	1	punct	_	_
3	Garantie	garantie	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
4	et	et	CCONJ	CC	_	5	cc	_	_
5	exonération	exonération	NOUN	S	Gender=Fem|Number=Sing	3	conj	_	_
6	de	de	ADP	E	_	7	case	_	_
7	responsabilité	responsabilité	NOUN	S	Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	créer	créer	VERB	V	VerbForm=Inf	0	root	_	_
2	et	et	CCONJ	CC	_	3	cc	_	_
3	reproduire	reproduire	VERB	V	VerbForm=Inf	1	conj	_	_
4	des	un	DET	RI	Definite=Ind|Gender=Fem|Number=Plur|PronType=Dem	5	det	_	_
5	oeuvres	oeuvre	NOUN	S	Gender=Fem|Number=Plur	1	obj	_	_
6	dites	dire	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	5	acl	_	_
7	derivées	dérivé	ADJ	A	Gender=Fem|Number=Plur	6	xcomp	_	SpaceAfter=No
8	;	;	PUNCT	FC	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 cc	color:blue
1	Et	et	CCONJ	CC	_	6	cc	_	_
2	ça	ce	PRON	PD	PronType=Dem	6	nsubj	_	_
3	peut	pouvoir	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
4	être	être	AUX	VA	VerbForm=Inf	6	cop	_	_
5	très	très	ADV	B	_	6	advmod	_	_
6	compliqué	compliqué	ADJ	A	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	6	punct	_	_
8	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	santé	santé	NOUN	S	Gender=Fem|Number=Sing	6	dislocated	_	_
10	humaine	humain	ADJ	A	Gender=Fem|Number=Sing	9	amod	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-Sequoia)

This relation is universal.

1435 nodes (2%) are attached to their parents as `cc`.

1435 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.64459930313589.

The following 15 pairs of parts of speech are connected with `cc`: [fr-pos/NOUN]()-[fr-pos/CCONJ]() (713; 50% instances), [fr-pos/VERB]()-[fr-pos/CCONJ]() (401; 28% instances), [fr-pos/ADJ]()-[fr-pos/CCONJ]() (113; 8% instances), [fr-pos/PROPN]()-[fr-pos/CCONJ]() (107; 7% instances), [fr-pos/PRON]()-[fr-pos/CCONJ]() (24; 2% instances), [fr-pos/ADV]()-[fr-pos/CCONJ]() (20; 1% instances), [fr-pos/NUM]()-[fr-pos/CCONJ]() (18; 1% instances), [fr-pos/NOUN]()-[fr-pos/ADV]() (15; 1% instances), [fr-pos/ADP]()-[fr-pos/CCONJ]() (6; 0% instances), [fr-pos/DET]()-[fr-pos/CCONJ]() (5; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADP]() (4; 0% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (3; 0% instances), [fr-pos/NOUN]()-[fr-pos/PUNCT]() (3; 0% instances), [fr-pos/PROPN]()-[fr-pos/PUNCT]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	DENOMINATION	dénomination	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
2	DE	de	ADP	_	_	4	case	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	MEDICAMENT	médicament	NOUN	_	Gender=Masc|Number=Sing	1	nmod	_	_
5	ET	et	CCONJ	_	_	6	cc	_	_
6	VOIE(S)	voie	NOUN	_	Gender=Fem	1	conj	_	_
7	D'	de	ADP	_	_	8	case	_	SpaceAfter=No
8	ADMINISTRATION	administration	NOUN	_	Gender=Fem|Number=Sing	6	nmod	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc	color:blue
1	Et	et	CCONJ	_	_	5	cc	_	_
2	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	3	det	_	SpaceAfter=No
3	acte	acte	NOUN	_	Gender=Masc|Number=Sing	5	nsubj	_	_
4	malveillant	malveillant	ADJ	_	Gender=Masc|Number=Sing	3	amod	_	_
5	figure	figurer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	parmi	parmi	ADP	_	_	8	case	_	_
7	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	8	det	_	_
8	hypothèses	hypothèse	NOUN	_	Gender=Fem|Number=Plur	5	obl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cc	color:blue
1	Y	y	PRON	_	Person=3	3	case	_	_
2	compris	compris	ADJ	_	Gender=Masc	1	fixed	_	_
3	fractures	fracture	NOUN	_	Gender=Fem|Number=Plur	0	root	_	_
4	cliniques	clinique	ADJ	_	Number=Plur	3	amod	_	_
5	vertébrales	vertébral	ADJ	_	Gender=Fem|Number=Plur	3	amod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	dorsales	dorsal	ADJ	_	Gender=Fem|Number=Plur	5	conj	_	_
8	et	et	CCONJ	_	_	9	cc	_	_
9	lombaires	lombaire	ADJ	_	Number=Plur	5	conj	_	_

~~~


