

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish)

This relation is universal.

1182 nodes (0%) are attached to their parents as `nsubjpass`.

1123 instances of `nsubjpass` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.60998307952623.

The following 26 pairs of parts of speech are connected with `nsubjpass`: [es-pos/VERB]()-[es-pos/NOUN]() (787; 67% instances), [es-pos/VERB]()-[es-pos/PRON]() (178; 15% instances), [es-pos/VERB]()-[es-pos/PROPN]() (151; 13% instances), [es-pos/NOUN]()-[es-pos/PROPN]() (12; 1% instances), [es-pos/NOUN]()-[es-pos/NOUN]() (11; 1% instances), [es-pos/ADJ]()-[es-pos/NOUN]() (9; 1% instances), [es-pos/PROPN]()-[es-pos/NOUN]() (4; 0% instances), [es-pos/VERB]()-[es-pos/NUM]() (4; 0% instances), [es-pos/VERB]()-[es-pos/SYM]() (4; 0% instances), [es-pos/PROPN]()-[es-pos/PRON]() (3; 0% instances), [es-pos/PROPN]()-[es-pos/PROPN]() (2; 0% instances), [es-pos/VERB]()-[es-pos/ADJ]() (2; 0% instances), [es-pos/VERB]()-[es-pos/DET]() (2; 0% instances), [es-pos/ADJ]()-[es-pos/NUM]() (1; 0% instances), [es-pos/ADJ]()-[es-pos/PRON]() (1; 0% instances), [es-pos/ADJ]()-[es-pos/PROPN]() (1; 0% instances), [es-pos/ADP]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/PRON]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/VERB]() (1; 0% instances), [es-pos/PRON]()-[es-pos/PROPN]() (1; 0% instances), [es-pos/VERB]()-[es-pos/ADV]() (1; 0% instances), [es-pos/VERB]()-[es-pos/AUX]() (1; 0% instances), [es-pos/VERB]()-[es-pos/CONJ]() (1; 0% instances), [es-pos/VERB]()-[es-pos/VERB]() (1; 0% instances), [es-pos/VERB]()-[es-pos/X]() (1; 0% instances), [es-pos/X]()-[es-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nsubjpass	color:blue
1	Según	según	ADP	_	_	2	case	_	_
2	figura	figurar	NOUN	_	Gender=Fem|Number=Sing	10	nmod	_	_
3	en	en	ADP	_	_	5	case	_	_
4	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	portada	portada	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	_
6	,	,	PUNCT	_	_	2	punct	_	_
7	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	libro	libro	NOUN	_	Gender=Masc|Number=Sing	10	nsubjpass	_	_
9	fue	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	auxpass	_	_
10	publicado	publicar	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
11	en	en	ADP	_	_	12	case	_	_
12	1535	1535	NUM	_	NumType=Card	10	nmod	_	_
13	;	;	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubjpass	color:blue
1	Éstas	ésta	PRON	_	Gender=Fem|Number=Plur|PronType=Dem	3	nsubjpass	_	_
2	son	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	auxpass	_	_
3	vendidas	vender	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
4	con	con	ADP	_	_	5	case	_	_
5	Windows	windows	PROPN	_	_	3	nmod	_	_
6	Mobile	mobile	PROPN	_	_	5	appos	_	_
7	2003	2003	NUM	_	NumType=Card	5	nummod	_	_
8	como	como	ADP	_	_	9	case	_	_
9	estándar	estándar	NOUN	_	Number=Sing	3	nmod	_	_
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubjpass	color:blue
1	Trudón	trudón	PROPN	_	_	3	nsubjpass	_	_
2	fue	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	auxpass	_	_
3	enterrado	enterrar	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	en	en	ADP	_	_	6	case	_	_
5	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	iglesia	iglesia	NOUN	_	Gender=Fem|Number=Sing	3	nmod	_	_
7	de	de	ADP	_	_	9	case	_	_
8	su	su	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Prs	9	det	_	_
9	monasterio	monasterio	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	_
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


