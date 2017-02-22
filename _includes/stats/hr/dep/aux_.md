

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.
There are 1 language-specific subtypes of `aux`: [aux:pass]().

7067 nodes (4%) are attached to their parents as `aux`.

4978 instances of `aux` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.20178293476723.

The following 30 pairs of parts of speech are connected with `aux`: [hr-pos/VERB]()-[hr-pos/AUX]() (5934; 84% instances), [hr-pos/ADJ]()-[hr-pos/AUX]() (446; 6% instances), [hr-pos/NOUN]()-[hr-pos/AUX]() (297; 4% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (157; 2% instances), [hr-pos/AUX]()-[hr-pos/AUX]() (118; 2% instances), [hr-pos/ADV]()-[hr-pos/AUX]() (28; 0% instances), [hr-pos/VERB]()-[hr-pos/VERB]() (16; 0% instances), [hr-pos/PROPN]()-[hr-pos/AUX]() (15; 0% instances), [hr-pos/VERB]()-[hr-pos/PART]() (13; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADP]() (10; 0% instances), [hr-pos/NUM]()-[hr-pos/AUX]() (5; 0% instances), [hr-pos/DET]()-[hr-pos/AUX]() (3; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADJ]() (3; 0% instances), [hr-pos/PRON]()-[hr-pos/AUX]() (3; 0% instances), [hr-pos/ADV]()-[hr-pos/PRON]() (2; 0% instances), [hr-pos/NOUN]()-[hr-pos/VERB]() (2; 0% instances), [hr-pos/VERB]()-[hr-pos/ADV]() (2; 0% instances), [hr-pos/ADJ]()-[hr-pos/DET]() (1; 0% instances), [hr-pos/ADJ]()-[hr-pos/PART]() (1; 0% instances), [hr-pos/ADP]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/AUX]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/DET]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/DET]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/PROPN]() (1; 0% instances), [hr-pos/PRON]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/PART]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/PRON]() (1; 0% instances), [hr-pos/SCONJ]()-[hr-pos/PRON]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Uzastopni	uzastopan	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	2	amod	_	_
2	izbori	izbor	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	_
3	nisu	biti	AUX	_	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	uspjeli	uspjeti	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	okončati	okončati	VERB	_	VerbForm=Inf	4	xcomp	_	_
6	političku	politički	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	_
7	krizu	kriza	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	_
8	u	u	ADP	_	Case=Loc	9	case	_	_
9	zemlji	zemlja	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 aux	color:blue
1	"	"	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Mislim	misliti	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	da	da	SCONJ	_	_	7	mark	_	_
4	će	htjeti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
5	to	taj	DET	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	7	nsubj	_	_
6	biti	biti	AUX	_	VerbForm=Inf	7	cop	_	_
7	dovoljno	dovoljan	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	2	ccomp	_	SpaceAfter=No
8	"	"	PUNCT	_	_	2	punct	_	SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	kazao	kazati	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	2	parataxis	_	_
11	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 aux	color:blue
1	Ima	imati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	samo	samo	ADV	_	Degree=Pos	3	advmod	_	_
3	jedna	jedan	NUM	_	Case=Nom|Gender=Fem|Number=Sing|NumType=Card	1	nsubj	_	_
4	u	u	ADP	_	Case=Loc	5	case	_	_
5	Beču	Beč	PROPN	_	Case=Loc|Gender=Masc|Number=Sing	1	obl	_	SpaceAfter=No
6	,	,	PUNCT	_	_	13	punct	_	_
7	no	no	CCONJ	_	_	13	cc	_	_
8	to	taj	DET	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	13	nsubj	_	_
9	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	_
10	bila	biti	AUX	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	13	cop	_	_
11	više	mnogo	ADV	_	Degree=Cmp|NumType=Card|PronType=Ind	12	advmod	_	_
12	politička	politički	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	13	amod	_	_
13	odluka	odluka	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	1	conj	_	SpaceAfter=No
14	.	.	PUNCT	_	_	1	punct	_	_

~~~


