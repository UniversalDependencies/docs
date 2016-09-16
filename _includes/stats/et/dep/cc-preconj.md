

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is a language-specific subtype of [cc]().

282 nodes (0%) are attached to their parents as `cc:preconj`.

273 instances of `cc:preconj` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.52836879432624.

The following 23 pairs of parts of speech are connected with `cc:preconj`: [et-pos/NOUN]()-[et-pos/ADV]() (115; 41% instances), [et-pos/SCONJ]()-[et-pos/ADV]() (43; 15% instances), [et-pos/ADJ]()-[et-pos/ADV]() (34; 12% instances), [et-pos/VERB]()-[et-pos/ADV]() (23; 8% instances), [et-pos/PROPN]()-[et-pos/ADV]() (15; 5% instances), [et-pos/PRON]()-[et-pos/ADV]() (8; 3% instances), [et-pos/ADV]()-[et-pos/ADV]() (6; 2% instances), [et-pos/NOUN]()-[et-pos/SCONJ]() (6; 2% instances), [et-pos/VERB]()-[et-pos/SCONJ]() (6; 2% instances), [et-pos/CONJ]()-[et-pos/NOUN]() (4; 1% instances), [et-pos/NOUN]()-[et-pos/ADJ]() (4; 1% instances), [et-pos/SCONJ]()-[et-pos/SCONJ]() (3; 1% instances), [et-pos/VERB]()-[et-pos/CONJ]() (3; 1% instances), [et-pos/SCONJ]()-[et-pos/ADP]() (2; 1% instances), [et-pos/SCONJ]()-[et-pos/PRON]() (2; 1% instances), [et-pos/ADJ]()-[et-pos/SCONJ]() (1; 0% instances), [et-pos/ADP]()-[et-pos/ADV]() (1; 0% instances), [et-pos/ADV]()-[et-pos/PRON]() (1; 0% instances), [et-pos/ADV]()-[et-pos/SCONJ]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/CONJ]() (1; 0% instances), [et-pos/PROPN]()-[et-pos/SCONJ]() (1; 0% instances), [et-pos/VERB]()-[et-pos/ADP]() (1; 0% instances), [et-pos/VERB]()-[et-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc:preconj	color:blue
1	Kinnitada	kinnitama	VERB	V	VerbForm=Inf	0	root	_	_
2	võib	võima	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	_	_
3	selle	see	PRON	P	Case=Gen|Number=Sing|PronType=Dem	1	dobj	_	_
4	nii	nii	ADV	D	_	5	cc:preconj	_	_
5	laest	lagi	NOUN	S	Case=Ela|Number=Sing	1	nmod	_	_
6	kui	kui	CONJ	J	_	5	cc	_	_
7	ka	ka	ADV	D	_	8	advmod	_	_
8	põrandalt	põrand	NOUN	S	Case=Abl|Number=Sing	5	conj	_	_
9	.	.	PUNCT	Z	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc:preconj	color:blue
1	"	"	PUNCT	Z	_	5	punct	_	_
2	Nii	nii	ADV	D	_	3	cc:preconj	_	_
3	et	et	SCONJ	J	_	5	mark	_	_
4	mul	mina	PRON	P	Case=Ade|Number=Sing|Person=1|PronType=Prs	5	nmod	_	_
5	on	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	ainult	ainult	ADV	D	_	8	advmod	_	_
7	üks	üks	NUM	N	Case=Nom|Number=Sing|NumForm=Letter|NumType=Card	8	nummod	_	_
8	küsimus	küsimus	NOUN	S	Case=Nom|Number=Sing	5	nsubj	_	_
9	.	.	PUNCT	Z	_	5	punct	_	_
10	"	"	PUNCT	Z	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	Leidub	leiduma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	neid	see	PRON	P	Case=Par|Number=Plur|PronType=Dem	1	nsubj	_	_
3	nii	nii	ADV	D	_	4	cc:preconj	_	_
4	häid	hea	ADJ	A	Case=Par|Degree=Pos|Number=Plur	1	amod	_	_
5	kui	kui	CONJ	J	_	4	cc	_	_
6	ka	ka	ADV	D	_	7	advmod	_	_
7	halbu	halb	ADJ	A	Case=Par|Degree=Pos|Number=Plur	4	conj	_	_
8	.	.	PUNCT	Z	_	1	punct	_	_

~~~


