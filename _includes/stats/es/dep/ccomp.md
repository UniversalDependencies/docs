

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish)

This relation is universal.

1589 nodes (0%) are attached to their parents as `ccomp`.

1450 instances of `ccomp` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.70484581497797.

The following 27 pairs of parts of speech are connected with `ccomp`: [es-pos/VERB]()-[es-pos/VERB]() (1183; 74% instances), [es-pos/VERB]()-[es-pos/ADJ]() (157; 10% instances), [es-pos/VERB]()-[es-pos/NOUN]() (135; 8% instances), [es-pos/NOUN]()-[es-pos/VERB]() (35; 2% instances), [es-pos/VERB]()-[es-pos/PRON]() (18; 1% instances), [es-pos/VERB]()-[es-pos/CONJ]() (12; 1% instances), [es-pos/ADP]()-[es-pos/VERB]() (9; 1% instances), [es-pos/ADJ]()-[es-pos/VERB]() (6; 0% instances), [es-pos/VERB]()-[es-pos/ADV]() (6; 0% instances), [es-pos/VERB]()-[es-pos/PROPN]() (5; 0% instances), [es-pos/PROPN]()-[es-pos/VERB]() (3; 0% instances), [es-pos/NOUN]()-[es-pos/ADJ]() (2; 0% instances), [es-pos/PRON]()-[es-pos/VERB]() (2; 0% instances), [es-pos/VERB]()-[es-pos/AUX]() (2; 0% instances), [es-pos/VERB]()-[es-pos/X]() (2; 0% instances), [es-pos/ADJ]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/ADJ]()-[es-pos/X]() (1; 0% instances), [es-pos/ADP]()-[es-pos/CONJ]() (1; 0% instances), [es-pos/ADV]()-[es-pos/VERB]() (1; 0% instances), [es-pos/AUX]()-[es-pos/CONJ]() (1; 0% instances), [es-pos/CONJ]()-[es-pos/VERB]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/CONJ]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/PRON]()-[es-pos/CONJ]() (1; 0% instances), [es-pos/PROPN]()-[es-pos/ADP]() (1; 0% instances), [es-pos/VERB]()-[es-pos/ADP]() (1; 0% instances), [es-pos/VERB]()-[es-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 ccomp	color:blue
1	Les	él	PRON	_	Case=Dat|Number=Plur|Person=3|PronType=Prs	3	iobj	_	_
2	he	haber	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	recomendado	recomendar	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	a	a	ADP	_	_	6	case	_	_
5	varias	varios	DET	_	Gender=Fem|Number=Plur|PronType=Ind	6	det	_	_
6	amigas	amiga	NOUN	_	Gender=Fem|Number=Plur	3	iobj	_	_
7	que	que	SCONJ	_	_	8	mark	_	_
8	vayan	ir	VERB	_	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp	_	_
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 ccomp	color:blue
1	Otros	otro	PRON	_	Gender=Masc|Number=Plur|PronType=Ind	2	nsubj	_	_
2	sostienen	sostener	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	que	que	SCONJ	_	_	8	mark	_	_
4	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	episodio	episodio	NOUN	_	Gender=Masc|Number=Sing	8	nsubj	_	_
6	no	no	ADV	_	_	7	neg	_	_
7	es	ser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	verosímil	verosímil	ADJ	_	Number=Sing	2	ccomp	_	_
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 ccomp	color:blue
1	Casi	casi	ADV	_	_	4	advmod	_	_
2	que	que	CONJ	_	_	1	dep	_	_
3	se	él	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	4	iobj	_	_
4	olvida	olvidar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	que	que	SCONJ	_	_	9	mark	_	_
6	Correa	correa	PROPN	_	_	9	nsubj	_	_
7	es	ser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	Presidente	presidente	NOUN	_	_	4	ccomp	_	_
10	de	de	ADP	_	_	12	case	_	_
11	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	Ecuador	ecuador	PROPN	_	_	9	nmod	_	_
13	.	.	PUNCT	_	_	4	punct	_	_

~~~


