

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

3255 nodes (1%) are attached to their parents as `cop`.

2660 instances of `cop` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.74654377880184.

The following 11 pairs of parts of speech are connected with `cop`: [it-pos/NOUN]()-[it-pos/AUX]() (1272; 39% instances), [it-pos/ADJ]()-[it-pos/AUX]() (1146; 35% instances), [it-pos/PRON]()-[it-pos/AUX]() (667; 20% instances), [it-pos/PROPN]()-[it-pos/AUX]() (73; 2% instances), [it-pos/ADV]()-[it-pos/AUX]() (32; 1% instances), [it-pos/VERB]()-[it-pos/AUX]() (32; 1% instances), [it-pos/NUM]()-[it-pos/AUX]() (27; 1% instances), [it-pos/ADP]()-[it-pos/AUX]() (2; 0% instances), [it-pos/X]()-[it-pos/AUX]() (2; 0% instances), [it-pos/AUX]()-[it-pos/AUX]() (1; 0% instances), [it-pos/SYM]()-[it-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cop	color:blue
1	Questa	questo	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
2	ricchezza	ricchezza	NOUN	S	Gender=Fem|Number=Sing	5	nsubj	_	_
3	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	tutta	tutto	PRON	PI	Gender=Fem|Number=Sing|PronType=Ind	5	nmod	_	_
5	apparenza	apparenza	NOUN	S	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cop	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	vero	vero	ADJ	A	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	7	nsubj:pass	_	_
5	possiamo	potere	AUX	VM	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	aux	_	_
6	essere	essere	AUX	VA	VerbForm=Inf	7	aux:pass	_	_
7	sostituiti	sostituire	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	parataxis	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	È	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
2	stata	essere	AUX	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	3	cop	_	_
3	quello	quello	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	0	root	_	_
4	che	che	PRON	PR	PronType=Rel	7	obj	_	_
5	ci	ci	PRON	PC	Clitic=Yes|PronType=Prs	7	expl	_	_
6	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	7	expl:impers	_	_
7	attendeva	attendere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	acl:relcl	_	SpaceAfter=No
8	:	:	PUNCT	FC	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian-ParTUT)

This relation is universal.

444 nodes (1%) are attached to their parents as `cop`.

425 instances of `cop` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.99324324324324.

The following 8 pairs of parts of speech are connected with `cop`: [it-pos/NOUN]()-[it-pos/AUX]() (202; 45% instances), [it-pos/ADJ]()-[it-pos/AUX]() (192; 43% instances), [it-pos/PRON]()-[it-pos/AUX]() (33; 7% instances), [it-pos/PROPN]()-[it-pos/AUX]() (5; 1% instances), [it-pos/VERB]()-[it-pos/AUX]() (5; 1% instances), [it-pos/ADV]()-[it-pos/AUX]() (4; 1% instances), [it-pos/SYM]()-[it-pos/AUX]() (2; 0% instances), [it-pos/NUM]()-[it-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cop	color:blue
1	Onorevole	onorevole	ADJ	A	Number=Sing	2	amod	_	_
2	collega	collega	NOUN	S	Number=Sing	6	vocative	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	sarà	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	6	cop	_	_
5	mia	mio	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	6	det:poss	_	_
6	cura	cura	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
7	verificare	verificare	VERB	V	VerbForm=Inf	6	csubj	_	_
8	tale	tale	DET	DD	Number=Sing|PronType=Dem	9	det	_	_
9	punto	punto	NOUN	S	Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
2	mio	mio	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	3	det:poss	_	_
3	voto	voto	NOUN	S	Gender=Masc|Number=Sing	5	nsubj	_	_
4	era	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	cop	_	_
5	favorevole	favorevole	ADJ	A	Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Questo	questo	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	3	nsubj	_	_
2	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	quanto	quanto	PRON	PR	Gender=Masc|Number=Sing|PronType=Rel	0	root	_	_
4	chiediamo	chiedere	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	_
5	oggi	oggi	ADV	B	_	4	advmod	_	_
6	a	a	ADP	E	_	8	case	_	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	signor	signore	NOUN	S	Gender=Masc|Number=Sing	4	obl	_	_
9	commissario	commissario	NOUN	S	Gender=Masc|Number=Sing	8	compound	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	3	punct	_	_

~~~


