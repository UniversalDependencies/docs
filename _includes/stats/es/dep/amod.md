

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish)

This relation is universal.

23010 nodes (5%) are attached to their parents as `amod`.

17011 instances of `amod` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26088657105606.

The following 51 pairs of parts of speech are connected with `amod`: [es-pos/NOUN]()-[es-pos/ADJ]() (18919; 82% instances), [es-pos/PROPN]()-[es-pos/PROPN]() (2614; 11% instances), [es-pos/PROPN]()-[es-pos/ADJ]() (420; 2% instances), [es-pos/VERB]()-[es-pos/ADJ]() (253; 1% instances), [es-pos/PRON]()-[es-pos/ADJ]() (165; 1% instances), [es-pos/NOUN]()-[es-pos/NOUN]() (124; 1% instances), [es-pos/ADJ]()-[es-pos/ADJ]() (95; 0% instances), [es-pos/X]()-[es-pos/ADJ]() (65; 0% instances), [es-pos/NOUN]()-[es-pos/PROPN]() (53; 0% instances), [es-pos/SYM]()-[es-pos/ADJ]() (53; 0% instances), [es-pos/NOUN]()-[es-pos/X]() (40; 0% instances), [es-pos/SYM]()-[es-pos/SYM]() (34; 0% instances), [es-pos/NUM]()-[es-pos/ADJ]() (30; 0% instances), [es-pos/X]()-[es-pos/X]() (18; 0% instances), [es-pos/ADP]()-[es-pos/ADJ]() (13; 0% instances), [es-pos/DET]()-[es-pos/ADJ]() (12; 0% instances), [es-pos/ADV]()-[es-pos/ADJ]() (11; 0% instances), [es-pos/PROPN]()-[es-pos/NOUN]() (11; 0% instances), [es-pos/PROPN]()-[es-pos/X]() (8; 0% instances), [es-pos/ADJ]()-[es-pos/NOUN]() (7; 0% instances), [es-pos/NOUN]()-[es-pos/PART]() (6; 0% instances), [es-pos/ADJ]()-[es-pos/PART]() (5; 0% instances), [es-pos/NOUN]()-[es-pos/VERB]() (5; 0% instances), [es-pos/SYM]()-[es-pos/NOUN]() (4; 0% instances), [es-pos/NOUN]()-[es-pos/SYM]() (3; 0% instances), [es-pos/NUM]()-[es-pos/NOUN]() (3; 0% instances), [es-pos/PRON]()-[es-pos/NOUN]() (3; 0% instances), [es-pos/PROPN]()-[es-pos/ADV]() (3; 0% instances), [es-pos/SCONJ]()-[es-pos/ADJ]() (3; 0% instances), [es-pos/X]()-[es-pos/SYM]() (3; 0% instances), [es-pos/NOUN]()-[es-pos/ADV]() (2; 0% instances), [es-pos/PRON]()-[es-pos/PROPN]() (2; 0% instances), [es-pos/PROPN]()-[es-pos/PART]() (2; 0% instances), [es-pos/SYM]()-[es-pos/X]() (2; 0% instances), [es-pos/VERB]()-[es-pos/PROPN]() (2; 0% instances), [es-pos/VERB]()-[es-pos/VERB]() (2; 0% instances), [es-pos/ADJ]()-[es-pos/X]() (1; 0% instances), [es-pos/AUX]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/CONJ]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/CONJ]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/ADP]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/NUM]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/PRON]() (1; 0% instances), [es-pos/NUM]()-[es-pos/PART]() (1; 0% instances), [es-pos/NUM]()-[es-pos/PROPN]() (1; 0% instances), [es-pos/PRON]()-[es-pos/X]() (1; 0% instances), [es-pos/PROPN]()-[es-pos/NUM]() (1; 0% instances), [es-pos/PROPN]()-[es-pos/VERB]() (1; 0% instances), [es-pos/VERB]()-[es-pos/ADV]() (1; 0% instances), [es-pos/VERB]()-[es-pos/PRON]() (1; 0% instances), [es-pos/X]()-[es-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 amod	color:blue
1	Ir	ir	VERB	_	VerbForm=Inf	10	csubj	_	_
2	a	a	ADP	_	_	4	case	_	_
3	este	este	DET	_	Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
4	colegio	colegio	NOUN	_	Gender=Masc|Number=Sing	1	nmod	_	_
5	,	,	PUNCT	_	_	10	punct	_	_
6	para	para	ADP	_	_	7	case	_	_
7	mí	yo	PRON	_	Case=Acc|Number=Sing|Person=1|PrepCase=Pre|PronType=Prs	10	nmod	_	_
8	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
9	peor	peor	ADJ	_	Degree=Cmp|Number=Sing	10	amod	_	_
10	experiencia	experiencia	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
11	de	de	ADP	_	_	13	case	_	_
12	mi	mi	DET	_	Number=Sing|Person=1|Poss=Yes|PronType=Prs	13	det	_	_
13	vida	vida	NOUN	_	Gender=Fem|Number=Sing	10	nmod	_	_
14	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Real	real	PROPN	_	Number=Sing	2	amod	_	_
2	Academia	academia	PROPN	_	Gender=Fem|Number=Sing	0	root	_	_
3	de	de	ADP	_	_	5	case	_	_
4	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Historia	historia	PROPN	_	_	2	nmod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	El	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	ácido	ácido	PROPN	_	Gender=Masc|Number=Sing	5	nsubj	_	_
3	aristolóquico	aristolóquico	ADJ	_	Gender=Masc|Number=Sing	2	amod	_	_
4	es	ser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	nefrotóxico	nefrotóxico	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
6	y	y	CONJ	_	_	5	cc	_	_
7	carcinogénico	carcinogénico	ADJ	_	Gender=Masc|Number=Sing	5	conj	_	_
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


