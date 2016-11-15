

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

479 nodes (0%) are attached to their parents as `mwe`.

404 instances of `mwe` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.09812108559499.

The following 41 pairs of parts of speech are connected with `mwe`: [hr-pos/SCONJ]()-[hr-pos/SCONJ]() (75; 16% instances), [hr-pos/ADP]()-[hr-pos/PRON]() (65; 14% instances), [hr-pos/ADP]()-[hr-pos/NOUN]() (35; 7% instances), [hr-pos/SCONJ]()-[hr-pos/CONJ]() (35; 7% instances), [hr-pos/ADV]()-[hr-pos/SCONJ]() (31; 6% instances), [hr-pos/SCONJ]()-[hr-pos/PRON]() (28; 6% instances), [hr-pos/ADP]()-[hr-pos/ADP]() (19; 4% instances), [hr-pos/ADV]()-[hr-pos/ADV]() (18; 4% instances), [hr-pos/ADP]()-[hr-pos/SCONJ]() (16; 3% instances), [hr-pos/ADV]()-[hr-pos/CONJ]() (16; 3% instances), [hr-pos/ADV]()-[hr-pos/ADP]() (15; 3% instances), [hr-pos/PRON]()-[hr-pos/ADP]() (13; 3% instances), [hr-pos/ADV]()-[hr-pos/PRON]() (12; 3% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (11; 2% instances), [hr-pos/CONJ]()-[hr-pos/CONJ]() (10; 2% instances), [hr-pos/CONJ]()-[hr-pos/SCONJ]() (10; 2% instances), [hr-pos/NOUN]()-[hr-pos/ADP]() (9; 2% instances), [hr-pos/ADP]()-[hr-pos/ADV]() (8; 2% instances), [hr-pos/PRON]()-[hr-pos/AUX]() (8; 2% instances), [hr-pos/ADV]()-[hr-pos/PART]() (5; 1% instances), [hr-pos/CONJ]()-[hr-pos/ADV]() (5; 1% instances), [hr-pos/PRON]()-[hr-pos/PRON]() (5; 1% instances), [hr-pos/ADJ]()-[hr-pos/ADP]() (3; 1% instances), [hr-pos/NOUN]()-[hr-pos/PRON]() (3; 1% instances), [hr-pos/PART]()-[hr-pos/SCONJ]() (3; 1% instances), [hr-pos/ADJ]()-[hr-pos/PRON]() (2; 0% instances), [hr-pos/CONJ]()-[hr-pos/PART]() (2; 0% instances), [hr-pos/CONJ]()-[hr-pos/PRON]() (2; 0% instances), [hr-pos/PART]()-[hr-pos/ADV]() (2; 0% instances), [hr-pos/PRON]()-[hr-pos/PART]() (2; 0% instances), [hr-pos/ADJ]()-[hr-pos/ADJ]() (1; 0% instances), [hr-pos/ADP]()-[hr-pos/CONJ]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADJ]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/SCONJ]() (1; 0% instances), [hr-pos/NUM]()-[hr-pos/CONJ]() (1; 0% instances), [hr-pos/PART]()-[hr-pos/CONJ]() (1; 0% instances), [hr-pos/PRON]()-[hr-pos/ADV]() (1; 0% instances), [hr-pos/PRON]()-[hr-pos/SCONJ]() (1; 0% instances), [hr-pos/PUNCT]()-[hr-pos/PUNCT]() (1; 0% instances), [hr-pos/SCONJ]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/SCONJ]()-[hr-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mwe	color:blue
1	Kao	kao	SCONJ	_	_	5	mark	_	_
2	što	što	SCONJ	_	_	1	mwe	_	_
3	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	5	aux	_	_
4	netko	netko	PRON	_	Case=Nom|Gender=Masc|Person=3|PronType=Ind	5	nsubj	_	_
5	rekao	reći	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	7	parataxis	_	_
6	:	:	PUNCT	_	_	5	punct	_	_
7	grabi	grabiti	VERB	_	Mood=Imp|Number=Sing|Person=2	0	root	_	_
8	s	sa	ADP	_	Case=Gen	9	case	_	_
9	police	polica	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	_
10	dok	dok	SCONJ	_	_	13	mark	_	_
11	ih	oni	PRON	_	Case=Acc|Number=Plur|Person=3|PronType=Prs	13	dobj	_	_
12	nisu	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	13	aux	_	_
13	tužili	tužiti	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	7	advcl	_	_
14	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 mwe	color:blue
1	Stvarni	stvaran	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	_
2	rok	rok	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
3	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	prije	prije	ADP	_	Case=Gen	8	mark	_	_
5	nego	nego	SCONJ	_	_	4	mwe	_	_
6	što	što	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Person=3|PronType=Ind	4	mwe	_	_
7	Komisija	komisija	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	8	nsubj	_	_
8	predstavi	predstaviti	VERB	_	Number=Sing|Person=3|Tense=Pres	3	advcl	_	_
9	svoje	svoj	PRON	_	Case=Acc|Gender=Fem|Number=Plur|Reflex=Yes	10	nmod	_	_
10	preporuke	preporuka	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	8	dobj	_	_
11	"	"	PUNCT	_	_	3	punct	_	_
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 mwe	color:blue
1	Je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	9	aux	_	_
2	li	li	PART	_	_	9	mark	_	_
3	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	9	compound	_	_
4	nešto	nešto	PRON	_	Case=Acc|Gender=Neut|Person=3|PronType=Ind	9	nsubj	_	_
5	u	u	ADP	_	Case=Loc	8	case	_	_
6	odnosu	odnos	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	5	mwe	_	_
7	na	na	ADP	_	Case=Acc	6	mwe	_	_
8	Dinamo	Dinamo	PROPN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	nmod	_	_
9	promijenilo	promijeniti	VERB	_	Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	_
10	otkako	otkako	ADV	_	Degree=Pos	13	mark	_	_
11	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	13	cop	_	_
12	Jovanović	Jovanović	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	13	nsubj	_	_
13	ministar	ministar	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	9	advcl	_	_
14	?	?	PUNCT	_	_	9	punct	_	_

~~~


