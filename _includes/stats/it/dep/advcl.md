

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

3755 nodes (1%) are attached to their parents as `advcl`.

2729 instances of `advcl` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.8676431424767.

The following 38 pairs of parts of speech are connected with `advcl`: [it-pos/VERB]()-[it-pos/VERB]() (2771; 74% instances), [it-pos/ADJ]()-[it-pos/VERB]() (313; 8% instances), [it-pos/NOUN]()-[it-pos/VERB]() (275; 7% instances), [it-pos/VERB]()-[it-pos/ADJ]() (120; 3% instances), [it-pos/VERB]()-[it-pos/NOUN]() (51; 1% instances), [it-pos/PRON]()-[it-pos/VERB]() (48; 1% instances), [it-pos/ADV]()-[it-pos/VERB]() (29; 1% instances), [it-pos/NOUN]()-[it-pos/ADJ]() (27; 1% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (17; 0% instances), [it-pos/ADJ]()-[it-pos/ADJ]() (13; 0% instances), [it-pos/PROPN]()-[it-pos/VERB]() (13; 0% instances), [it-pos/PRON]()-[it-pos/NOUN]() (12; 0% instances), [it-pos/NUM]()-[it-pos/VERB]() (8; 0% instances), [it-pos/ADJ]()-[it-pos/NOUN]() (6; 0% instances), [it-pos/VERB]()-[it-pos/PRON]() (6; 0% instances), [it-pos/AUX]()-[it-pos/VERB]() (4; 0% instances), [it-pos/INTJ]()-[it-pos/VERB]() (4; 0% instances), [it-pos/ADJ]()-[it-pos/PRON]() (3; 0% instances), [it-pos/ADJ]()-[it-pos/PROPN]() (3; 0% instances), [it-pos/DET]()-[it-pos/VERB]() (3; 0% instances), [it-pos/PROPN]()-[it-pos/NOUN]() (3; 0% instances), [it-pos/PUNCT]()-[it-pos/VERB]() (3; 0% instances), [it-pos/VERB]()-[it-pos/PROPN]() (3; 0% instances), [it-pos/ADV]()-[it-pos/ADJ]() (2; 0% instances), [it-pos/NUM]()-[it-pos/ADJ]() (2; 0% instances), [it-pos/PRON]()-[it-pos/ADJ]() (2; 0% instances), [it-pos/PROPN]()-[it-pos/PRON]() (2; 0% instances), [it-pos/VERB]()-[it-pos/ADV]() (2; 0% instances), [it-pos/ADV]()-[it-pos/NOUN]() (1; 0% instances), [it-pos/CONJ]()-[it-pos/VERB]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/NUM]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/PRON]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/PROPN]() (1; 0% instances), [it-pos/NUM]()-[it-pos/NOUN]() (1; 0% instances), [it-pos/PRON]()-[it-pos/PRON]() (1; 0% instances), [it-pos/PUNCT]()-[it-pos/NUM]() (1; 0% instances), [it-pos/SCONJ]()-[it-pos/VERB]() (1; 0% instances), [it-pos/SYM]()-[it-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 2 advcl	color:blue
1	Se	se	SCONJ	CS	_	2	mark	_	_
2	pensi	pensare	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	11	advcl	_	_
3	a	a	ADP	E	_	5	case	_	_
4	queste	questo	DET	DD	Gender=Fem|Number=Plur|PronType=Dem	5	det	_	_
5	cose	cosa	NOUN	S	Gender=Fem|Number=Plur	2	nmod	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	2	punct	_	_
7	se	se	SCONJ	CS	_	9	mark	_	_
8	ci	ci	PRON	PC	Number=Plur|Person=1|PronType=Clit	9	expl	_	_
9	rifletti	riflettere	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	11	advcl	_	_
10	su	su	ADV	B	_	9	advmod	_	_
11	finisci	finire	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
12	per	per	ADP	E	_	13	mark	_	_
13	sbagliare	sbagliare	VERB	V	VerbForm=Inf	11	advcl	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 advcl	color:blue
1	Ma	ma	CONJ	CC	_	2	cc	_	_
2	lui	lui	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	dice	dire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	parataxis	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	4	punct	_	_
6	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	pronto	pronto	ADJ	A	Gender=Masc|Number=Sing	0	root	_	_
8	a	a	ADP	E	_	9	mark	_	_
9	tendere	tendere	VERB	V	VerbForm=Inf	7	advcl	_	_
10	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	mano	mano	NOUN	S	Gender=Fem|Number=Sing	9	dobj	_	SpaceAfter=No
12	:	:	PUNCT	FC	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 advcl	color:blue
1	stillicidio	stillicidio	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
2	[	[	PUNCT	FB	_	3	punct	_	SpaceAfter=No
3	v.	vedere	VERB	V	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	1	advcl	_	_
4	908	908	NUM	N	NumType=Card	3	dobj	_	SpaceAfter=No
5	]	]	PUNCT	FB	_	3	punct	_	SpaceAfter=No
6	)	)	PUNCT	FB	_	1	punct	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	1	punct	_	_

~~~


