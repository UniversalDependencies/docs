

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

5608 nodes (1%) are attached to their parents as `acl`.

5111 instances of `acl` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.34896576319544.

The following 43 pairs of parts of speech are connected with `acl`: [es-pos/VERB]()-[es-pos/VERB]() (2650; 47% instances), [es-pos/NOUN]()-[es-pos/VERB]() (2290; 41% instances), [es-pos/PROPN]()-[es-pos/VERB]() (207; 4% instances), [es-pos/NOUN]()-[es-pos/PROPN]() (74; 1% instances), [es-pos/PRON]()-[es-pos/VERB]() (73; 1% instances), [es-pos/ADJ]()-[es-pos/VERB]() (66; 1% instances), [es-pos/VERB]()-[es-pos/NOUN]() (56; 1% instances), [es-pos/NOUN]()-[es-pos/NOUN]() (35; 1% instances), [es-pos/PROPN]()-[es-pos/PROPN]() (20; 0% instances), [es-pos/VERB]()-[es-pos/PROPN]() (17; 0% instances), [es-pos/VERB]()-[es-pos/ADJ]() (13; 0% instances), [es-pos/NOUN]()-[es-pos/ADJ]() (11; 0% instances), [es-pos/NUM]()-[es-pos/VERB]() (10; 0% instances), [es-pos/X]()-[es-pos/VERB]() (10; 0% instances), [es-pos/ADP]()-[es-pos/VERB]() (9; 0% instances), [es-pos/VERB]()-[es-pos/PRON]() (9; 0% instances), [es-pos/DET]()-[es-pos/VERB]() (8; 0% instances), [es-pos/PRON]()-[es-pos/NOUN]() (5; 0% instances), [es-pos/SCONJ]()-[es-pos/NOUN]() (4; 0% instances), [es-pos/ADJ]()-[es-pos/NOUN]() (3; 0% instances), [es-pos/AUX]()-[es-pos/VERB]() (3; 0% instances), [es-pos/PRON]()-[es-pos/PROPN]() (3; 0% instances), [es-pos/PROPN]()-[es-pos/ADJ]() (3; 0% instances), [es-pos/PROPN]()-[es-pos/NOUN]() (3; 0% instances), [es-pos/SCONJ]()-[es-pos/VERB]() (3; 0% instances), [es-pos/ADJ]()-[es-pos/ADJ]() (2; 0% instances), [es-pos/ADV]()-[es-pos/VERB]() (2; 0% instances), [es-pos/NOUN]()-[es-pos/PRON]() (2; 0% instances), [es-pos/PROPN]()-[es-pos/X]() (2; 0% instances), [es-pos/VERB]()-[es-pos/X]() (2; 0% instances), [es-pos/ADV]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/ADV]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/DET]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/NUM]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/X]() (1; 0% instances), [es-pos/NUM]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/PRON]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/SCONJ]()-[es-pos/PRON]() (1; 0% instances), [es-pos/SCONJ]()-[es-pos/X]() (1; 0% instances), [es-pos/SYM]()-[es-pos/VERB]() (1; 0% instances), [es-pos/VERB]()-[es-pos/ADV]() (1; 0% instances), [es-pos/VERB]()-[es-pos/DET]() (1; 0% instances), [es-pos/X]()-[es-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 acl	color:blue
1	El	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	sitio	sitio	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
3	tiene	tener	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	terraza	terraza	NOUN	_	Gender=Fem|Number=Sing	3	dobj	_	_
5	en	en	ADP	_	_	6	case	_	_
6	verano	verano	NOUN	_	Gender=Masc|Number=Sing	3	nmod	_	_
7	para	para	ADP	_	_	8	mark	_	_
8	comer	comer	VERB	_	VerbForm=Inf	3	acl	_	_
9	o	o	CONJ	_	_	8	cc	_	_
10	cenar	cenar	VERB	_	VerbForm=Inf	8	conj	_	_
11	fuera	fuera	ADV	_	_	10	advmod	_	_
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl	color:blue
1	Cumplieron	cumplir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	plazos	plazo	NOUN	_	Gender=Masc|Number=Plur	1	dobj	_	_
4	previstos	previsto	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	3	acl	_	_
5	y	y	CONJ	_	_	3	cc	_	_
6	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	presupuesto	presupuesto	NOUN	_	Gender=Masc|Number=Sing	3	conj	_	_
8	inicial	inicial	ADJ	_	Number=Sing	7	amod	_	_
9	!	!	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 acl	color:blue
1	Genera	genera	PROPN	_	Number=Sing	0	root	_	_
2	Plantarum	plantarum	PROPN	_	_	1	name	_	_
3	Florae	florae	PROPN	_	_	1	name	_	_
4	Germanicae	germanicae	PROPN	_	_	1	name	_	_
5	,	,	PUNCT	_	_	1	punct	_	_
6	(	(	PUNCT	_	_	7	punct	_	_
7	abreviado	abreviado	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	1	acl	_	_
8	Gen.	gen.	X	_	_	9	compound	_	_
9	Fl	fl	X	_	_	7	appos	_	_
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


