

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.
There are 1 language-specific subtypes of `compound`: [compound:prt]().

923 nodes (7%) are attached to their parents as `compound`.

876 instances of `compound` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.84398699891658.

The following 39 pairs of parts of speech are connected with `compound`: [ga-pos/NOUN]()-[ga-pos/NOUN]() (609; 66% instances), [ga-pos/NOUN]()-[ga-pos/PROPN]() (118; 13% instances), [ga-pos/PROPN]()-[ga-pos/PROPN]() (44; 5% instances), [ga-pos/NOUN]()-[ga-pos/ADP]() (21; 2% instances), [ga-pos/PROPN]()-[ga-pos/NOUN]() (17; 2% instances), [ga-pos/NOUN]()-[ga-pos/PRON]() (12; 1% instances), [ga-pos/VERB]()-[ga-pos/NOUN]() (11; 1% instances), [ga-pos/NOUN]()-[ga-pos/ADJ]() (10; 1% instances), [ga-pos/NOUN]()-[ga-pos/X]() (10; 1% instances), [ga-pos/ADJ]()-[ga-pos/NOUN]() (9; 1% instances), [ga-pos/PRON]()-[ga-pos/PRON]() (9; 1% instances), [ga-pos/ADP]()-[ga-pos/PRON]() (6; 1% instances), [ga-pos/PRON]()-[ga-pos/NOUN]() (6; 1% instances), [ga-pos/X]()-[ga-pos/NOUN]() (4; 0% instances), [ga-pos/X]()-[ga-pos/X]() (4; 0% instances), [ga-pos/ADV]()-[ga-pos/NOUN]() (3; 0% instances), [ga-pos/VERB]()-[ga-pos/ADP]() (3; 0% instances), [ga-pos/ADP]()-[ga-pos/NOUN]() (2; 0% instances), [ga-pos/NUM]()-[ga-pos/NOUN]() (2; 0% instances), [ga-pos/PRON]()-[ga-pos/ADP]() (2; 0% instances), [ga-pos/SCONJ]()-[ga-pos/NOUN]() (2; 0% instances), [ga-pos/VERB]()-[ga-pos/PROPN]() (2; 0% instances), [ga-pos/ADJ]()-[ga-pos/PROPN]() (1; 0% instances), [ga-pos/ADJ]()-[ga-pos/X]() (1; 0% instances), [ga-pos/ADP]()-[ga-pos/NUM]() (1; 0% instances), [ga-pos/ADV]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/DET]()-[ga-pos/ADP]() (1; 0% instances), [ga-pos/DET]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/ADV]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/DET]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/SYM]() (1; 0% instances), [ga-pos/PART]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/ADJ]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/X]() (1; 0% instances), [ga-pos/PUNCT]()-[ga-pos/PROPN]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/X]() (1; 0% instances), [ga-pos/X]()-[ga-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 compound	color:blue
1	Limistéar	limistéar	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
2	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	Meánmhara	muir	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	1	compound	_	_
4	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	5	cop	_	_
5	áit	áit	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	ccomp	_	_
6	dúcháis	dúchas	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	5	compound	_	_
7	don	do	ADP	Art	Number=Sing|PronType=Art	9	case	_	_
8	Rós	Rós	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	9	compound	_	_
9	Mhuire	Muire	PROPN	Noun	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound	color:blue
1	Cothaíonn	cothaigh	VERB	VTI	Mood=Ind|Tense=Pres	0	root	_	_
2	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	1	nsubj	_	_
3	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	4	nmod:poss	_	_
4	chuid	cuid	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Sing	1	obj	_	_
5	Ghaeilge	Gaeilge	PROPN	Noun	Case=Gen|Form=Len|Gender=Fem|Number=Sing	4	compound	_	_
6	gach	gach	DET	Det	Definite=Def	7	det	_	_
7	bliain	bliain	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	obl:tmod	_	_
8	ar	ar	ADP	Simp	_	9	case	_	_
9	saoire	saoire	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	obl	_	_
10	sa	i	ADP	Art	Number=Sing|PronType=Art	11	case	_	_
11	Spidéal	Spidéal	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	obl	_	SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 compound	color:blue
1	Limistéar	limistéar	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
2	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	Meánmhara	muir	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	1	compound	_	_
4	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	5	cop	_	_
5	áit	áit	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	ccomp	_	_
6	dúcháis	dúchas	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	5	compound	_	_
7	don	do	ADP	Art	Number=Sing|PronType=Art	9	case	_	_
8	Rós	Rós	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	9	compound	_	_
9	Mhuire	Muire	PROPN	Noun	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


