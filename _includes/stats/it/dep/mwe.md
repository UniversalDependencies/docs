

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

984 nodes (0%) are attached to their parents as `mwe`.

984 instances of `mwe` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.0619918699187.

The following 42 pairs of parts of speech are connected with `mwe`: [it-pos/ADV]()-[it-pos/ADP]() (488; 50% instances), [it-pos/ADP]()-[it-pos/ADP]() (167; 17% instances), [it-pos/ADV]()-[it-pos/SCONJ]() (84; 9% instances), [it-pos/ADP]()-[it-pos/ADV]() (59; 6% instances), [it-pos/NOUN]()-[it-pos/ADP]() (42; 4% instances), [it-pos/ADP]()-[it-pos/SCONJ]() (32; 3% instances), [it-pos/NUM]()-[it-pos/NUM]() (17; 2% instances), [it-pos/ADP]()-[it-pos/NOUN]() (12; 1% instances), [it-pos/VERB]()-[it-pos/SCONJ]() (10; 1% instances), [it-pos/NUM]()-[it-pos/X]() (6; 1% instances), [it-pos/ADV]()-[it-pos/ADV]() (5; 1% instances), [it-pos/PROPN]()-[it-pos/ADP]() (5; 1% instances), [it-pos/VERB]()-[it-pos/NOUN]() (5; 1% instances), [it-pos/ADP]()-[it-pos/DET]() (4; 0% instances), [it-pos/ADP]()-[it-pos/PRON]() (4; 0% instances), [it-pos/PRON]()-[it-pos/ADV]() (4; 0% instances), [it-pos/ADV]()-[it-pos/CONJ]() (3; 0% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (3; 0% instances), [it-pos/NOUN]()-[it-pos/SCONJ]() (3; 0% instances), [it-pos/PROPN]()-[it-pos/NOUN]() (3; 0% instances), [it-pos/SCONJ]()-[it-pos/SCONJ]() (3; 0% instances), [it-pos/ADJ]()-[it-pos/PRON]() (2; 0% instances), [it-pos/ADJ]()-[it-pos/SCONJ]() (2; 0% instances), [it-pos/ADP]()-[it-pos/VERB]() (2; 0% instances), [it-pos/ADV]()-[it-pos/NOUN]() (2; 0% instances), [it-pos/ADV]()-[it-pos/DET]() (1; 0% instances), [it-pos/ADV]()-[it-pos/PRON]() (1; 0% instances), [it-pos/ADV]()-[it-pos/VERB]() (1; 0% instances), [it-pos/CONJ]()-[it-pos/ADV]() (1; 0% instances), [it-pos/CONJ]()-[it-pos/CONJ]() (1; 0% instances), [it-pos/INTJ]()-[it-pos/SCONJ]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/VERB]() (1; 0% instances), [it-pos/NUM]()-[it-pos/SYM]() (1; 0% instances), [it-pos/PRON]()-[it-pos/ADP]() (1; 0% instances), [it-pos/PRON]()-[it-pos/DET]() (1; 0% instances), [it-pos/PRON]()-[it-pos/SCONJ]() (1; 0% instances), [it-pos/PUNCT]()-[it-pos/NOUN]() (1; 0% instances), [it-pos/SCONJ]()-[it-pos/ADP]() (1; 0% instances), [it-pos/SCONJ]()-[it-pos/ADV]() (1; 0% instances), [it-pos/VERB]()-[it-pos/ADP]() (1; 0% instances), [it-pos/VERB]()-[it-pos/ADV]() (1; 0% instances), [it-pos/VERB]()-[it-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 mwe	color:blue
1	Vediamo	vedere	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	prima	prima	ADV	B	_	4	case	_	_
3	di	di	ADP	E	_	2	mwe	_	_
4	tutto	tutto	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	1	nmod	_	_
5	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
6	fatti	fatto	NOUN	S	Gender=Masc|Number=Plur	1	dobj	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mwe	color:blue
1	Senza	senza	ADP	E	_	3	case	_	_
2	di	di	ADP	E	_	1	mwe	_	_
3	lui	lui	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nmod	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	3	punct	_	_
5	loro	loro	PRON	PE	Number=Plur|Person=3|PronType=Prs	9	nsubj	_	_
6	non	non	ADV	BN	PronType=Neg	9	neg	_	_
7	sono	essere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	più	più	ADV	B	_	9	advmod	_	_
9	niente	niente	ADV	B	_	0	root	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mwe	color:blue
1	Anche	anche	ADV	B	_	8	mark	_	_
2	se	se	SCONJ	CS	_	1	mwe	_	_
3	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	cosa	cosa	NOUN	S	Gender=Fem|Number=Sing	8	nsubj	_	_
5	non	non	ADV	BN	PronType=Neg	8	neg	_	_
6	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
7	molto	molto	ADV	B	_	8	advmod	_	_
8	semplice	semplice	ADJ	A	Number=Sing	0	root	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	8	punct	_	_

~~~


