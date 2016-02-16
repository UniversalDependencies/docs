

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.

10819 nodes (3%) are attached to their parents as `mark`.

10815 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.80996395230613.

The following 18 pairs of parts of speech are connected with `mark`: [no-pos/VERB]()-[no-pos/SCONJ]() (5331; 49% instances), [no-pos/VERB]()-[no-pos/PART]() (4111; 38% instances), [no-pos/ADJ]()-[no-pos/SCONJ]() (585; 5% instances), [no-pos/NOUN]()-[no-pos/SCONJ]() (466; 4% instances), [no-pos/ADJ]()-[no-pos/PART]() (86; 1% instances), [no-pos/NOUN]()-[no-pos/PART]() (78; 1% instances), [no-pos/ADP]()-[no-pos/SCONJ]() (38; 0% instances), [no-pos/PRON]()-[no-pos/SCONJ]() (29; 0% instances), [no-pos/ADV]()-[no-pos/SCONJ]() (25; 0% instances), [no-pos/PROPN]()-[no-pos/SCONJ]() (16; 0% instances), [no-pos/NUM]()-[no-pos/SCONJ]() (15; 0% instances), [no-pos/ADP]()-[no-pos/PART]() (13; 0% instances), [no-pos/PRON]()-[no-pos/PART]() (11; 0% instances), [no-pos/DET]()-[no-pos/SCONJ]() (8; 0% instances), [no-pos/ADV]()-[no-pos/PART]() (3; 0% instances), [no-pos/PROPN]()-[no-pos/PART]() (2; 0% instances), [no-pos/NUM]()-[no-pos/PART]() (1; 0% instances), [no-pos/X]()-[no-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 mark	color:blue
1	Dette	dette	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	0	root	_	_
2	uaktet	uaktet	ADP	_	_	8	case	_	_
3	at	at	SCONJ	_	_	8	mark	_	_
4	også	også	ADV	_	_	5	nmod	_	_
5	han	han	PRON	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
6	selv	selv	DET	_	_	5	det	_	_
7	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	underskrevet	underskrive	VERB	_	VerbForm=Part	1	advcl	_	_
9	dommen	dom	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	8	dobj	_	_
10	.	$.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	var	være	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	cop	_	_
3	grusomt	grusom	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
4	å	å	PART	_	_	5	mark	_	_
5	høre	høre	VERB	_	VerbForm=Inf	3	advcl	_	_
6	på	på	ADP	_	_	5	compound:prt	_	_
7	.	$.	PUNCT	_	_	3	punct	_	_
8	»	$"	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 mark	color:blue
1	Regjeringen	regjering	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	3	nsubj	_	_
2	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	fastslått	fastslå	VERB	_	VerbForm=Part	0	root	_	_
4	at	at	SCONJ	_	_	7	mark	_	_
5	røyking	røyking	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	7	nsubj	_	_
6	er	være	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	farlig	farlig	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	3	ccomp	_	_
8	.	$.	PUNCT	_	_	3	punct	_	_

~~~


