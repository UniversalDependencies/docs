

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

57323 nodes (14%) are attached to their parents as `det`.

57323 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13446609563352.

The following 25 pairs of parts of speech are connected with `det`: [fr-pos/NOUN]()-[fr-pos/DET]() (49481; 86% instances), [fr-pos/PROPN]()-[fr-pos/DET]() (6606; 12% instances), [fr-pos/ADV]()-[fr-pos/DET]() (240; 0% instances), [fr-pos/ADJ]()-[fr-pos/DET]() (207; 0% instances), [fr-pos/PRON]()-[fr-pos/DET]() (181; 0% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (153; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADV]() (150; 0% instances), [fr-pos/NUM]()-[fr-pos/DET]() (121; 0% instances), [fr-pos/X]()-[fr-pos/DET]() (72; 0% instances), [fr-pos/VERB]()-[fr-pos/DET]() (40; 0% instances), [fr-pos/SYM]()-[fr-pos/DET]() (18; 0% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (14; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADP]() (13; 0% instances), [fr-pos/ADP]()-[fr-pos/DET]() (4; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (4; 0% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (4; 0% instances), [fr-pos/PRON]()-[fr-pos/ADV]() (4; 0% instances), [fr-pos/NOUN]()-[fr-pos/PART]() (2; 0% instances), [fr-pos/PART]()-[fr-pos/DET]() (2; 0% instances), [fr-pos/PROPN]()-[fr-pos/X]() (2; 0% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/NUM]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/X]() (1; 0% instances), [fr-pos/NUM]()-[fr-pos/ADV]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Aviator	Aviator	PROPN	_	_	0	root	_	_
2	,	,	PUNCT	_	_	1	punct	_	_
3	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
4	film	film	NOUN	_	Gender=Masc|Number=Sing	1	appos	_	_
5	sur	sur	ADP	_	_	7	case	_	_
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing	7	det	_	_
7	vie	vie	NOUN	_	Gender=Fem|Number=Sing	4	nmod	_	_
8	de	de	ADP	_	_	9	case	_	_
9	Hughes	Hughes	PROPN	_	_	7	nmod	_	_
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Mais	mais	CONJ	_	_	9	cc	_	_
2	,	,	PUNCT	_	_	9	punct	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing	4	det	_	_
4	SMIC	SMIC	PROPN	_	_	9	nsubj	_	_
5	n'	ne	PART	_	_	9	neg	_	_
6	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
7	pas	pas	ADV	_	_	9	neg	_	_
8	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Dem	9	det	_	_
9	outil	outil	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
10	de	de	ADP	_	_	11	case	_	_
11	référence	référence	NOUN	_	Gender=Fem|Number=Sing	9	nmod	_	_
12	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	verra	voir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing	4	det	_	_
4	puits	puits	NOUN	_	Gender=Masc|Number=Sing	2	dobj	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing	6	det	_	_
6	plus	plus	ADV	_	_	7	advmod	_	_
7	profond	profond	ADJ	_	Gender=Masc|Number=Sing	4	amod	_	_
8	de	de	ADP	_	_	9	case	_	_
9	France	France	PROPN	_	_	4	nmod	_	_
10	porter	porter	VERB	_	VerbForm=Inf	4	acl	_	_
11	son	son	DET	_	Gender=Masc|Number=Sing	12	nmod:poss	_	_
12	nom	nom	NOUN	_	Gender=Masc|Number=Sing	10	dobj	_	_
13	:	:	PUNCT	_	_	2	punct	_	_
14	.	.	PUNCT	_	_	2	punct	_	_

~~~


