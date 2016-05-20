

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This relation is universal.

18046 nodes (3%) are attached to their parents as `name`.

18046 instances of `name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.30871107170564.

The following 21 pairs of parts of speech are connected with `name`: [ca-pos/PROPN]()-[ca-pos/PROPN]() (17359; 96% instances), [ca-pos/DET]()-[ca-pos/PROPN]() (262; 1% instances), [ca-pos/ADJ]()-[ca-pos/PROPN]() (175; 1% instances), [ca-pos/PROPN]()-[ca-pos/ADJ]() (90; 0% instances), [ca-pos/NUM]()-[ca-pos/PROPN]() (60; 0% instances), [ca-pos/ADV]()-[ca-pos/PROPN]() (18; 0% instances), [ca-pos/PROPN]()-[ca-pos/ADV]() (15; 0% instances), [ca-pos/PROPN]()-[ca-pos/CONJ]() (12; 0% instances), [ca-pos/SYM]()-[ca-pos/PROPN]() (12; 0% instances), [ca-pos/PUNCT]()-[ca-pos/PROPN]() (11; 0% instances), [ca-pos/PROPN]()-[ca-pos/DET]() (8; 0% instances), [ca-pos/CONJ]()-[ca-pos/PROPN]() (7; 0% instances), [ca-pos/PROPN]()-[ca-pos/ADP]() (4; 0% instances), [ca-pos/DET]()-[ca-pos/ADJ]() (3; 0% instances), [ca-pos/DET]()-[ca-pos/DET]() (2; 0% instances), [ca-pos/PART]()-[ca-pos/PROPN]() (2; 0% instances), [ca-pos/PROPN]()-[ca-pos/SCONJ]() (2; 0% instances), [ca-pos/ADJ]()-[ca-pos/CONJ]() (1; 0% instances), [ca-pos/ADV]()-[ca-pos/ADV]() (1; 0% instances), [ca-pos/PART]()-[ca-pos/PART]() (1; 0% instances), [ca-pos/PUNCT]()-[ca-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 name	color:blue
1	La	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	peregrinació	peregrinació	NOUN	NOUN	Gender=Fem|Number=Sing	5	iobj	_	_
3	l'	ell	PRON	PRON	Case=Acc|Number=Sing|Person=3|PronType=Prs	5	dobj	_	_
4	ha	haver	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	organitzat	organitzar	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	sindicat	sindicat	NOUN	NOUN	Gender=Masc|Number=Sing	5	nsubj	_	_
8	Unió	Unió	PROPN	PROPN	_	7	appos	_	MWE=Unió_de_Pagesos|MWEPOS=PROPN
9	de	de	ADP	ADP	AdpType=Prep	10	case	_	_
10	Pagesos	Pagesos	PROPN	PROPN	_	8	name	_	_
11	.	.	PUNCT	PUNCT	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 name	color:blue
1	Big	Big	PROPN	PROPN	_	3	nsubj	_	MWE=Big_Mama|MWEPOS=PROPN
2	Mama	Mama	PROPN	PROPN	_	1	name	_	_
3	enregistra	enregistrar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	un	un	DET	DET	Gender=Masc|Number=Sing|PronType=Ind	5	det	_	_
5	disc	disc	NOUN	NOUN	Gender=Masc|Number=Sing	3	dobj	_	_
6	en	en	ADP	ADP	AdpType=Prep	7	case	_	MWE=en_directe|MWEPOS=ADJ
7	directe	directe	ADJ	ADJ	_	5	amod	_	_
8	a	a	ADP	ADP	AdpType=Prep	10	case	_	_
9	La	La	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	MWE=La_Cova_del_Drac|MWEPOS=PROPN
10	Cova	Cova	PROPN	PROPN	_	3	nmod	_	_
11	de	de	ADP	ADP	AdpType=Prep	13	case	_	_
12	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	Drac	Drac	PROPN	PROPN	_	9	name	_	_
14	.	.	PUNCT	PUNCT	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 name	color:blue
1	Reapareix	reaparèixer	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	a	a	ADP	ADP	AdpType=Prep	4	case	_	_
3	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	Gran	Gran	ADJ	ADJ	_	1	nmod	_	MWE=Gran_Premi_de_Gippingen|MWEPOS=PROPN
5	Premi	Premi	PROPN	PROPN	_	4	name	_	_
6	de	de	ADP	ADP	AdpType=Prep	7	case	_	_
7	Gippingen	Gippingen	PROPN	PROPN	_	4	name	_	_
8	.	.	PUNCT	PUNCT	PunctType=Peri	1	punct	_	_

~~~


