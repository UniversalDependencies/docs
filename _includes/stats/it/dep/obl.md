

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.
There are 1 language-specific subtypes of `obl`: [obl:agent]().

16239 nodes (6%) are attached to their parents as `obl`.

12146 instances of `obl` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.01471765502802.

The following 43 pairs of parts of speech are connected with `obl`: [it-pos/VERB]()-[it-pos/NOUN]() (11294; 70% instances), [it-pos/VERB]()-[it-pos/PROPN]() (1286; 8% instances), [it-pos/ADJ]()-[it-pos/NOUN]() (1174; 7% instances), [it-pos/VERB]()-[it-pos/PRON]() (920; 6% instances), [it-pos/VERB]()-[it-pos/NUM]() (472; 3% instances), [it-pos/ADJ]()-[it-pos/PRON]() (201; 1% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (174; 1% instances), [it-pos/ADV]()-[it-pos/NOUN]() (156; 1% instances), [it-pos/VERB]()-[it-pos/ADJ]() (119; 1% instances), [it-pos/ADJ]()-[it-pos/PROPN]() (110; 1% instances), [it-pos/VERB]()-[it-pos/VERB]() (64; 0% instances), [it-pos/NOUN]()-[it-pos/PRON]() (30; 0% instances), [it-pos/VERB]()-[it-pos/SYM]() (28; 0% instances), [it-pos/ADV]()-[it-pos/PRON]() (24; 0% instances), [it-pos/NOUN]()-[it-pos/PROPN]() (23; 0% instances), [it-pos/VERB]()-[it-pos/ADP]() (22; 0% instances), [it-pos/PRON]()-[it-pos/NOUN]() (20; 0% instances), [it-pos/VERB]()-[it-pos/X]() (15; 0% instances), [it-pos/ADV]()-[it-pos/PROPN]() (14; 0% instances), [it-pos/ADJ]()-[it-pos/NUM]() (12; 0% instances), [it-pos/PRON]()-[it-pos/PROPN]() (10; 0% instances), [it-pos/ADJ]()-[it-pos/SYM]() (9; 0% instances), [it-pos/ADJ]()-[it-pos/VERB]() (8; 0% instances), [it-pos/ADJ]()-[it-pos/ADJ]() (6; 0% instances), [it-pos/NOUN]()-[it-pos/NUM]() (5; 0% instances), [it-pos/NUM]()-[it-pos/NOUN]() (5; 0% instances), [it-pos/VERB]()-[it-pos/SCONJ]() (5; 0% instances), [it-pos/ADV]()-[it-pos/ADJ]() (3; 0% instances), [it-pos/NOUN]()-[it-pos/VERB]() (3; 0% instances), [it-pos/NUM]()-[it-pos/PROPN]() (3; 0% instances), [it-pos/PRON]()-[it-pos/NUM]() (3; 0% instances), [it-pos/PRON]()-[it-pos/PRON]() (3; 0% instances), [it-pos/PROPN]()-[it-pos/NOUN]() (3; 0% instances), [it-pos/VERB]()-[it-pos/ADV]() (3; 0% instances), [it-pos/ADJ]()-[it-pos/ADV]() (2; 0% instances), [it-pos/ADV]()-[it-pos/NUM]() (2; 0% instances), [it-pos/NOUN]()-[it-pos/ADJ]() (2; 0% instances), [it-pos/ADJ]()-[it-pos/ADP]() (1; 0% instances), [it-pos/ADJ]()-[it-pos/SCONJ]() (1; 0% instances), [it-pos/ADP]()-[it-pos/NOUN]() (1; 0% instances), [it-pos/ADV]()-[it-pos/SYM]() (1; 0% instances), [it-pos/ADV]()-[it-pos/X]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl	color:blue
1	Stia	stare	VERB	V	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	a	a	ADP	E	_	3	case	_	_
3	casa	casa	NOUN	S	Gender=Fem|Number=Sing	1	obl	_	_
4	lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	stesso	stesso	ADV	B	_	1	advmod	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obl	color:blue
1	Alcune	alcuno	DET	DI	Gender=Fem|Number=Plur|PronType=Ind	2	det	_	_
2	chiamate	chiamata	NOUN	S	Gender=Fem|Number=Plur	3	nsubj	_	_
3	partirono	partire	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	da	da	ADP	E	_	6	case	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Quirinale	Quirinale	PROPN	SP	_	3	obl	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl	color:blue
1	923	923	NUM	N	NumType=Card	3	nummod	_	SpaceAfter=No
2	.	.	PUNCT	FF	_	1	punct	_	_
3	Cose	cosa	NOUN	S	Gender=Fem|Number=Plur	0	root	_	_
4	suscettibili	suscettibile	ADJ	A	Number=Plur	3	amod	_	_
5	di	di	ADP	E	_	6	case	_	_
6	occupazione	occupazione	NOUN	S	Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian-ParTUT)

This relation is universal.
There are 1 language-specific subtypes of `obl`: [obl:agent]().

2362 nodes (6%) are attached to their parents as `obl`.

1817 instances of `obl` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.44919559695174.

The following 26 pairs of parts of speech are connected with `obl`: [it-pos/VERB]()-[it-pos/NOUN]() (1640; 69% instances), [it-pos/ADJ]()-[it-pos/NOUN]() (193; 8% instances), [it-pos/VERB]()-[it-pos/PRON]() (135; 6% instances), [it-pos/VERB]()-[it-pos/PROPN]() (126; 5% instances), [it-pos/VERB]()-[it-pos/NUM]() (99; 4% instances), [it-pos/ADJ]()-[it-pos/PRON]() (32; 1% instances), [it-pos/VERB]()-[it-pos/ADJ]() (23; 1% instances), [it-pos/ADV]()-[it-pos/NOUN]() (20; 1% instances), [it-pos/VERB]()-[it-pos/VERB]() (17; 1% instances), [it-pos/ADJ]()-[it-pos/PROPN]() (14; 1% instances), [it-pos/VERB]()-[it-pos/SYM]() (13; 1% instances), [it-pos/VERB]()-[it-pos/X]() (10; 0% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (9; 0% instances), [it-pos/ADJ]()-[it-pos/NUM]() (5; 0% instances), [it-pos/ADV]()-[it-pos/PRON]() (5; 0% instances), [it-pos/VERB]()-[it-pos/ADP]() (5; 0% instances), [it-pos/ADJ]()-[it-pos/SYM]() (4; 0% instances), [it-pos/ADJ]()-[it-pos/VERB]() (4; 0% instances), [it-pos/ADV]()-[it-pos/PROPN]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/ADJ]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/PRON]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/PROPN]() (1; 0% instances), [it-pos/PROPN]()-[it-pos/PROPN]() (1; 0% instances), [it-pos/VERB]()-[it-pos/ADV]() (1; 0% instances), [it-pos/VERB]()-[it-pos/SCONJ]() (1; 0% instances), [it-pos/X]()-[it-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 obl	color:blue
1	Attribuzione	attribuzione	NOUN	S	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	Condividi	condividere	VERB	V	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	1	flat	_	_
4	a	a	ADP	E	_	7	case	_	_
5	lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	stesso	stesso	ADJ	A	Gender=Masc|Number=Sing	7	amod	_	_
7	modo	modo	NOUN	S	Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 obl	color:blue
1	Ora	ora	ADV	B	_	7	advmod	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	perché	perché	ADV	B	_	7	advmod	_	_
4	tutto	tutto	DET	DI	Gender=Masc|Number=Sing|PronType=Ind	5	det	_	_
5	questo	questo	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	7	nsubj	_	_
6	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	importante	importante	ADJ	A	Number=Sing	0	root	_	_
8	per	per	ADP	E	_	10	case	_	_
9	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	vita	vita	NOUN	S	Gender=Fem|Number=Sing	7	obl	_	_
11	di	di	ADP	E	_	13	case	_	_
12	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	13	det	_	_
13	uomo	uomo	NOUN	S	Gender=Masc|Number=Sing	10	nmod	_	SpaceAfter=No
14	?	?	PUNCT	FS	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obl	color:blue
1	Trova	trovare	VERB	V	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
2	persone	persona	NOUN	S	Gender=Fem|Number=Plur	1	obj	_	_
3	di	di	ADP	E	_	4	case	_	_
4	cui	cui	PRON	PR	PronType=Rel	5	obl	_	_
5	ricevere	ricevere	VERB	V	VerbForm=Inf	2	acl:relcl	_	_
6	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	7	det	_	_
7	aggiornamenti	aggiornamento	NOUN	S	Gender=Masc|Number=Plur	5	obj	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	1	punct	_	_

~~~


