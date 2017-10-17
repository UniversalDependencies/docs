

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish)

This relation is universal.

1507 nodes (0%) are attached to their parents as `ccomp`.

1377 instances of `ccomp` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.64698075646981.

The following 27 pairs of parts of speech are connected with `ccomp`: [es-pos/VERB]()-[es-pos/VERB]() (1119; 74% instances), [es-pos/VERB]()-[es-pos/ADJ]() (151; 10% instances), [es-pos/VERB]()-[es-pos/NOUN]() (127; 8% instances), [es-pos/NOUN]()-[es-pos/VERB]() (33; 2% instances), [es-pos/VERB]()-[es-pos/PRON]() (17; 1% instances), [es-pos/VERB]()-[es-pos/CCONJ]() (12; 1% instances), [es-pos/ADP]()-[es-pos/VERB]() (9; 1% instances), [es-pos/ADJ]()-[es-pos/VERB]() (6; 0% instances), [es-pos/VERB]()-[es-pos/ADV]() (6; 0% instances), [es-pos/VERB]()-[es-pos/PROPN]() (4; 0% instances), [es-pos/PROPN]()-[es-pos/VERB]() (3; 0% instances), [es-pos/NOUN]()-[es-pos/ADJ]() (2; 0% instances), [es-pos/PRON]()-[es-pos/VERB]() (2; 0% instances), [es-pos/VERB]()-[es-pos/AUX]() (2; 0% instances), [es-pos/VERB]()-[es-pos/X]() (2; 0% instances), [es-pos/ADJ]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/ADJ]()-[es-pos/X]() (1; 0% instances), [es-pos/ADP]()-[es-pos/CCONJ]() (1; 0% instances), [es-pos/ADV]()-[es-pos/VERB]() (1; 0% instances), [es-pos/AUX]()-[es-pos/CCONJ]() (1; 0% instances), [es-pos/CCONJ]()-[es-pos/VERB]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/CCONJ]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/PRON]()-[es-pos/CCONJ]() (1; 0% instances), [es-pos/PROPN]()-[es-pos/ADP]() (1; 0% instances), [es-pos/VERB]()-[es-pos/ADP]() (1; 0% instances), [es-pos/VERB]()-[es-pos/PART]() (1; 0% instances).


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
8	vayan	ir	VERB	_	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp	_	SpaceAfter=No
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
6	no	no	ADV	_	Polarity=Neg	7	advmod	_	_
7	es	ser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	verosímil	verosímil	ADJ	_	Number=Sing	2	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 ccomp	color:blue
1	Casi	casi	ADV	_	_	4	advmod	_	_
2	que	que	CCONJ	_	_	1	dep	_	_
3	se	él	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	4	iobj	_	_
4	olvida	olvidar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	que	que	SCONJ	_	_	9	mark	_	_
6	Correa	correa	PROPN	_	_	9	nsubj	_	_
7	es	ser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	Presidente	presidente	NOUN	_	_	4	ccomp	_	_
10	de	de	ADP	_	_	12	case	_	_
11	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	Ecuador	ecuador	PROPN	_	_	9	nmod	_	SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish-AnCora)

This relation is universal.

5207 nodes (1%) are attached to their parents as `ccomp`.

4203 instances of `ccomp` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.28135202611869.

The following 34 pairs of parts of speech are connected with `ccomp`: [es-pos/VERB]()-[es-pos/VERB]() (3298; 63% instances), [es-pos/AUX]()-[es-pos/VERB]() (483; 9% instances), [es-pos/VERB]()-[es-pos/ADJ]() (482; 9% instances), [es-pos/VERB]()-[es-pos/NOUN]() (411; 8% instances), [es-pos/VERB]()-[es-pos/AUX]() (252; 5% instances), [es-pos/VERB]()-[es-pos/PRON]() (44; 1% instances), [es-pos/ADJ]()-[es-pos/VERB]() (41; 1% instances), [es-pos/CCONJ]()-[es-pos/VERB]() (32; 1% instances), [es-pos/AUX]()-[es-pos/ADJ]() (30; 1% instances), [es-pos/VERB]()-[es-pos/ADV]() (19; 0% instances), [es-pos/AUX]()-[es-pos/AUX]() (14; 0% instances), [es-pos/AUX]()-[es-pos/NOUN]() (14; 0% instances), [es-pos/VERB]()-[es-pos/PROPN]() (14; 0% instances), [es-pos/ADP]()-[es-pos/VERB]() (12; 0% instances), [es-pos/DET]()-[es-pos/VERB]() (9; 0% instances), [es-pos/VERB]()-[es-pos/ADP]() (7; 0% instances), [es-pos/ADJ]()-[es-pos/NOUN]() (4; 0% instances), [es-pos/ADV]()-[es-pos/VERB]() (4; 0% instances), [es-pos/NOUN]()-[es-pos/VERB]() (4; 0% instances), [es-pos/VERB]()-[es-pos/NUM]() (4; 0% instances), [es-pos/VERB]()-[es-pos/SYM]() (4; 0% instances), [es-pos/ADJ]()-[es-pos/ADJ]() (3; 0% instances), [es-pos/AUX]()-[es-pos/PRON]() (3; 0% instances), [es-pos/AUX]()-[es-pos/PROPN]() (3; 0% instances), [es-pos/CCONJ]()-[es-pos/AUX]() (3; 0% instances), [es-pos/VERB]()-[es-pos/DET]() (3; 0% instances), [es-pos/AUX]()-[es-pos/ADP]() (2; 0% instances), [es-pos/CCONJ]()-[es-pos/ADJ]() (2; 0% instances), [es-pos/ADJ]()-[es-pos/AUX]() (1; 0% instances), [es-pos/AUX]()-[es-pos/ADV]() (1; 0% instances), [es-pos/CCONJ]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/PRON]()-[es-pos/VERB]() (1; 0% instances), [es-pos/SCONJ]()-[es-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 ccomp	color:blue
1	-	-	PUNCT	PUNCT	PunctType=Dash	3	punct	_	_
2	Ya	ya	ADV	ADV	_	3	advmod	_	_
3	sé	saber	VERB	VERB	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	ccomp	_	_
4	qué	qué	PRON	PRON	Number=Sing|PronType=Int	5	nsubj	_	_
5	ocurre	ocurrir	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp	_	_
6	-	-	PUNCT	PUNCT	PunctType=Dash	3	punct	_	_
7	explicó	explicar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	una	uno	PRON	PRON	Gender=Fem|Number=Sing|PronType=Ind	7	nsubj	_	_
9	de	de	ADP	ADP	AdpType=Prep	11	case	_	_
10	mis	mi	DET	DET	Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	11	det	_	_
11	hijas	hija	NOUN	NOUN	Gender=Fem|Number=Plur	8	nmod	_	_
12	-	-	PUNCT	PUNCT	PunctType=Dash	7	punct	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	PunctType=Peri	7	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 ccomp	color:blue
1	Nuestra	nuestro	DET	DET	Gender=Fem|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	2	det	_	_
2	experiencia	experiencia	NOUN	NOUN	Gender=Fem|Number=Sing	3	nsubj	_	_
3	es	ser	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	que	que	SCONJ	SCONJ	_	11	mark	_	_
5	si	si	SCONJ	SCONJ	_	8	mark	_	_
6	no	no	ADV	ADV	Polarity=Neg	8	advmod	_	_
7	se	se	PRON	PRON	_	8	expl:pass	_	_
8	lucha	luchar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	advcl	_	_
9	no	no	ADV	ADV	Polarity=Neg	11	advmod	_	_
10	se	se	PRON	PRON	_	11	obj	_	_
11	consigue	conseguir	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp	_	_
12	nada	nada	PRON	PRON	Number=Sing|PronType=Ind	11	nsubj	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 ccomp	color:blue
1	"	"	PUNCT	PUNCT	PunctType=Quot	10	punct	_	SpaceAfter=No
2	La	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	contra	contra	NOUN	NOUN	_	10	nsubj	_	MWE=contra_reloj|MWEPOS=NOUN
4	reloj	reloj	NOUN	NOUN	_	3	compound	_	_
5	del	del	ADP	ADP	AdpType=Preppron|Gender=Masc|Number=Sing	7	case	_	_
6	último	último	ADJ	ADJ	Gender=Masc|Number=Sing|NumType=Ord	7	amod	_	_
7	día	día	NOUN	NOUN	Gender=Masc|Number=Sing	3	nmod	_	_
8	también	también	ADV	ADV	_	10	advmod	_	_
9	será	ser	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	10	cop	_	_
10	bonita	bonito	ADJ	ADJ	Gender=Fem|Number=Sing	13	ccomp	_	SpaceAfter=No
11	"	"	PUNCT	PUNCT	PunctType=Quot	10	punct	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	PunctType=Comm	10	punct	_	_
13	dijo	decir	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
14	.	.	PUNCT	PUNCT	PunctType=Peri	13	punct	_	_

~~~


