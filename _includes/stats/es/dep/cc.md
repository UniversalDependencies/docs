

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish)

This relation is universal.

13233 nodes (3%) are attached to their parents as `cc`.

12829 instances of `cc` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.42817199425678.

The following 51 pairs of parts of speech are connected with `cc`: [es-pos/NOUN]()-[es-pos/CONJ]() (4854; 37% instances), [es-pos/VERB]()-[es-pos/CONJ]() (3984; 30% instances), [es-pos/PROPN]()-[es-pos/CONJ]() (1983; 15% instances), [es-pos/ADJ]()-[es-pos/CONJ]() (1253; 9% instances), [es-pos/NUM]()-[es-pos/CONJ]() (343; 3% instances), [es-pos/PRON]()-[es-pos/CONJ]() (146; 1% instances), [es-pos/VERB]()-[es-pos/ADP]() (118; 1% instances), [es-pos/NOUN]()-[es-pos/ADV]() (93; 1% instances), [es-pos/ADV]()-[es-pos/CONJ]() (68; 1% instances), [es-pos/X]()-[es-pos/CONJ]() (68; 1% instances), [es-pos/VERB]()-[es-pos/ADV]() (47; 0% instances), [es-pos/SYM]()-[es-pos/CONJ]() (36; 0% instances), [es-pos/NOUN]()-[es-pos/VERB]() (27; 0% instances), [es-pos/NOUN]()-[es-pos/X]() (24; 0% instances), [es-pos/ADP]()-[es-pos/CONJ]() (19; 0% instances), [es-pos/DET]()-[es-pos/CONJ]() (19; 0% instances), [es-pos/VERB]()-[es-pos/VERB]() (18; 0% instances), [es-pos/ADJ]()-[es-pos/ADP]() (16; 0% instances), [es-pos/PROPN]()-[es-pos/X]() (16; 0% instances), [es-pos/PROPN]()-[es-pos/ADV]() (13; 0% instances), [es-pos/VERB]()-[es-pos/X]() (11; 0% instances), [es-pos/ADJ]()-[es-pos/ADV]() (10; 0% instances), [es-pos/AUX]()-[es-pos/CONJ]() (8; 0% instances), [es-pos/ADJ]()-[es-pos/VERB]() (6; 0% instances), [es-pos/PROPN]()-[es-pos/SYM]() (6; 0% instances), [es-pos/PRON]()-[es-pos/ADV]() (5; 0% instances), [es-pos/NOUN]()-[es-pos/ADP]() (4; 0% instances), [es-pos/X]()-[es-pos/X]() (4; 0% instances), [es-pos/PRON]()-[es-pos/X]() (3; 0% instances), [es-pos/X]()-[es-pos/SYM]() (3; 0% instances), [es-pos/ADV]()-[es-pos/ADP]() (2; 0% instances), [es-pos/NOUN]()-[es-pos/NOUN]() (2; 0% instances), [es-pos/NOUN]()-[es-pos/PRON]() (2; 0% instances), [es-pos/NOUN]()-[es-pos/SYM]() (2; 0% instances), [es-pos/PROPN]()-[es-pos/ADP]() (2; 0% instances), [es-pos/PROPN]()-[es-pos/VERB]() (2; 0% instances), [es-pos/VERB]()-[es-pos/ADJ]() (2; 0% instances), [es-pos/ADJ]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/ADJ]()-[es-pos/X]() (1; 0% instances), [es-pos/CONJ]()-[es-pos/CONJ]() (1; 0% instances), [es-pos/CONJ]()-[es-pos/SYM]() (1; 0% instances), [es-pos/DET]()-[es-pos/ADV]() (1; 0% instances), [es-pos/NUM]()-[es-pos/NUM]() (1; 0% instances), [es-pos/NUM]()-[es-pos/VERB]() (1; 0% instances), [es-pos/PART]()-[es-pos/CONJ]() (1; 0% instances), [es-pos/PUNCT]()-[es-pos/CONJ]() (1; 0% instances), [es-pos/SCONJ]()-[es-pos/ADV]() (1; 0% instances), [es-pos/SYM]()-[es-pos/X]() (1; 0% instances), [es-pos/VERB]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/X]()-[es-pos/ADV]() (1; 0% instances), [es-pos/X]()-[es-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 cc	color:blue
1	Durante	durante	ADP	_	_	3	case	_	_
2	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	temporada	temporada	NOUN	_	Gender=Fem|Number=Sing	4	nmod	_	_
4	promedió	promeder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	5	5	NUM	_	NumType=Card	6	nummod	_	_
6	puntos	punto	NOUN	_	Gender=Masc|Number=Plur	4	dobj	_	_
7	y	y	CONJ	_	_	6	cc	_	_
8	2.4	2.4	NUM	_	NumType=Card	9	nummod	_	_
9	rebotes	rebote	NOUN	_	Gender=Masc|Number=Plur	6	conj	_	_
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 cc	color:blue
1	No	no	ADV	_	_	2	neg	_	_
2	tiene	tener	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	cura	cura	NOUN	_	Gender=Fem|Number=Sing	2	dobj	_	_
4	conocida	conocido	ADJ	_	Gender=Fem|Number=Sing|VerbForm=Part	3	amod	_	_
5	,	,	PUNCT	_	_	2	punct	_	_
6	y	y	CONJ	_	_	2	cc	_	_
7	frecuentemente	frecuentemente	ADV	_	_	8	advmod	_	_
8	desemboca	desembocar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	conj	_	_
9	en	en	ADP	_	_	11	case	_	_
10	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	muerte	muerte	NOUN	_	Gender=Fem|Number=Sing	8	nmod	_	_
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 cc	color:blue
1	Se	él	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	2	iobj	_	_
2	encuentran	encontrar	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	en	en	ADP	_	_	4	case	_	_
4	África	áfrica	PROPN	_	_	2	nmod	_	_
5	:	:	PUNCT	_	_	4	punct	_	_
6	Tanzania	tanzania	PROPN	_	_	4	appos	_	_
7	y	y	CONJ	_	_	6	cc	_	_
8	Kenia	kenia	PROPN	_	_	6	conj	_	_
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


