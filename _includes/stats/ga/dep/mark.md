

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.
There are 1 language-specific subtypes of `mark`: [mark:prt]().

712 nodes (3%) are attached to their parents as `mark`.

693 instances of `mark` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8314606741573.

The following 29 pairs of parts of speech are connected with `mark`: [ga-pos/NOUN]()-[ga-pos/PART]() (285; 40% instances), [ga-pos/VERB]()-[ga-pos/SCONJ]() (192; 27% instances), [ga-pos/NOUN]()-[ga-pos/SCONJ]() (45; 6% instances), [ga-pos/VERB]()-[ga-pos/CONJ]() (45; 6% instances), [ga-pos/NOUN]()-[ga-pos/CONJ]() (41; 6% instances), [ga-pos/VERB]()-[ga-pos/ADP]() (13; 2% instances), [ga-pos/ADJ]()-[ga-pos/SCONJ]() (12; 2% instances), [ga-pos/PRON]()-[ga-pos/SCONJ]() (10; 1% instances), [ga-pos/PRON]()-[ga-pos/CONJ]() (9; 1% instances), [ga-pos/ADJ]()-[ga-pos/CONJ]() (8; 1% instances), [ga-pos/NOUN]()-[ga-pos/ADP]() (7; 1% instances), [ga-pos/VERB]()-[ga-pos/NOUN]() (7; 1% instances), [ga-pos/ADP]()-[ga-pos/SCONJ]() (6; 1% instances), [ga-pos/ADP]()-[ga-pos/CONJ]() (5; 1% instances), [ga-pos/PROPN]()-[ga-pos/CONJ]() (5; 1% instances), [ga-pos/ADV]()-[ga-pos/CONJ]() (3; 0% instances), [ga-pos/VERB]()-[ga-pos/PART]() (3; 0% instances), [ga-pos/ADJ]()-[ga-pos/NOUN]() (2; 0% instances), [ga-pos/ADV]()-[ga-pos/SCONJ]() (2; 0% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (2; 0% instances), [ga-pos/SCONJ]()-[ga-pos/SCONJ]() (2; 0% instances), [ga-pos/CONJ]()-[ga-pos/PART]() (1; 0% instances), [ga-pos/NUM]()-[ga-pos/CONJ]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/SCONJ]() (1; 0% instances), [ga-pos/SCONJ]()-[ga-pos/CONJ]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/ADV]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/PUNCT]() (1; 0% instances), [ga-pos/X]()-[ga-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 mark	color:blue
1	Fórsa	fórsa	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	3	dobj	_	_
2	a	a	PART	Inf	PartType=Inf	3	mark	_	_
3	Thomhas	tomhas	NOUN	Noun	Form=Len|VerbForm=Inf	0	root	_	_
4	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 mark	color:blue
1	Seasadh	seas	VERB	VTI	Mood=Ind|Tense=Past|Voice=Auto	0	root	_	_
2	leis	le	ADP	Simp	_	4	case	_	_
3	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
4	diúltú	diúltú	NOUN	Noun	Case=Com|Definite=Def|Gender=Masc|Number=Sing	1	nmod	_	_
5	nuair	nuair	SCONJ	Subord	_	7	mark	_	_
6	a	a	PART	Vb	PartType=Vb|PronType=Rel	7	mark:prt	_	_
7	rinne	déan	VERB	VTI	Mood=Ind|Tense=Past	1	advcl	_	_
8	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	7	nsubj	_	_
9	achomharc	achomharc	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	7	dobj	_	_
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 mark	color:blue
1	Bhain	Bain	PROPN	Noun	Case=Gen|Form=Len|Gender=Masc|Number=Sing	0	root	_	_
2	sin	sin	PRON	Dem	PronType=Dem	1	nsubj	_	_
3	preab	preab	NOUN	Noun	Case=Com|Gender=Fem|Number=Sing	1	dobj	_	_
4	asainn	as	ADP	Prep	Number=Plur|Person=1	1	nmod:prep	_	_
5	agus	agus	SCONJ	Subord	_	7	mark	_	_
6	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	7	det	_	_
7	bheirt	beirt	NOUN	Noun	Case=Com|Form=Len|Gender=Fem|Number=Sing	1	advcl	_	_
8	againn	ag	ADP	Prep	Number=Plur|Person=1	7	compound	_	_
9	i	i	ADP	Simp	_	10	case	_	_
10	ndíg	díog	NOUN	Noun	Case=Dat|Form=Ecl|Gender=Fem|Number=Sing	7	nmod	_	_
11	ag	ag	ADP	Simp	_	12	case	_	_
12	faire	faire	NOUN	Noun	VerbForm=Inf	7	xcomp	_	_
13	air	ar	ADP	Prep	Gender=Masc|Number=Sing|Person=3	12	nmod:prep	_	_
14	.	.	PUNCT	.	_	1	punct	_	_

~~~


