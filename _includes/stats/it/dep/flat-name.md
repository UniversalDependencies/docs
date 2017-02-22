

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is a language-specific subtype of [flat]().
There are also 1 other language-specific subtypes of `flat`: [flat:foreign]().

3270 nodes (1%) are attached to their parents as `flat:name`.

3270 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14220183486239.

The following 10 pairs of parts of speech are connected with `flat:name`: [it-pos/PROPN]()-[it-pos/PROPN]() (3160; 97% instances), [it-pos/PROPN]()-[it-pos/NUM]() (56; 2% instances), [it-pos/NOUN]()-[it-pos/PROPN]() (28; 1% instances), [it-pos/PROPN]()-[it-pos/ADJ]() (8; 0% instances), [it-pos/PROPN]()-[it-pos/SYM]() (8; 0% instances), [it-pos/X]()-[it-pos/X]() (4; 0% instances), [it-pos/X]()-[it-pos/PROPN]() (3; 0% instances), [it-pos/ADJ]()-[it-pos/PROPN]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/ADJ]() (1; 0% instances), [it-pos/PUNCT]()-[it-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	Corriere	Corriere	PROPN	SP	_	0	root	_	_
2	Sport	Sport	PROPN	SP	_	1	flat:name	_	_
3	da	da	ADP	E	_	4	case	_	_
4	pagina	pagina	NOUN	S	Gender=Fem|Number=Sing	1	nmod	_	_
5	23	23	NUM	N	NumType=Card	4	nummod	_	_
6	a	a	ADP	E	_	7	case	_	_
7	pagina	pagina	NOUN	S	Gender=Fem|Number=Sing	1	nmod	_	_
8	26	26	NUM	N	NumType=Card	7	nummod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:name	color:blue
1	Quando	quando	ADV	B	_	3	advmod	_	_
2	venne	venire	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	lanciato	lanciare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	5	det	_	SpaceAfter=No
5	Apollo	Apollo	PROPN	SP	_	3	nsubj:pass	_	_
6	11	11	NUM	N	NumType=Card	5	flat:name	_	SpaceAfter=No
7	?	?	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:name	color:blue
1	Domenica	domenica	NOUN	S	Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	da	da	ADP	E	_	5	case	_	_
4	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	Monte	monte	NOUN	S	Gender=Masc|Number=Sing	8	obl	_	_
6	Igman	Igman	PROPN	SP	_	5	flat:name	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	5	punct	_	_
8	arriva	arrivare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	qualche	qualche	DET	DI	Number=Sing|PronType=Ind	10	det	_	_
10	colpo	colpo	NOUN	S	Gender=Masc|Number=Sing	8	obj	_	_
11	su	su	ADP	E	_	13	case	_	_
12	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	città	città	NOUN	S	Gender=Fem	8	obl	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	8	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian-ParTUT)

This relation is a language-specific subtype of [flat]().
There are also 1 other language-specific subtypes of `flat`: [flat:foreign]().

311 nodes (1%) are attached to their parents as `flat:name`.

311 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17363344051447.

The following 4 pairs of parts of speech are connected with `flat:name`: [it-pos/PROPN]()-[it-pos/PROPN]() (303; 97% instances), [it-pos/PROPN]()-[it-pos/ADP]() (5; 2% instances), [it-pos/NOUN]()-[it-pos/PROPN]() (2; 1% instances), [it-pos/PUNCT]()-[it-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:name	color:blue
1	Assemblea	assemblea	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
2	generale	generale	ADJ	A	Number=Sing	1	amod	_	_
3	di	di	ADP	E	_	5	case	_	_
4	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	5	det	_	_
5	Nazioni	Nazioni	PROPN	SP	_	1	nmod	_	_
6	Unite	Unite	PROPN	SP	_	5	flat:name	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 flat:name	color:blue
1	Egli	egli	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	nacque	nascere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	a	a	ADP	E	_	4	case	_	_
4	Stratford	Stratford	PROPN	SP	_	2	obl	_	SpaceAfter=No
5	-	-	PUNCT	FF	_	4	punct	_	SpaceAfter=No
6	upon	upon	ADP	E	_	4	flat:name	_	SpaceAfter=No
7	-	-	PUNCT	FF	_	4	punct	_	SpaceAfter=No
8	Avon	Avon	PROPN	SP	_	4	flat:name	_	_
9	e	e	CCONJ	CC	_	12	cc	_	_
10	vi	vi	PRON	PC	Clitic=Yes|PronType=Prs	12	nmod	_	_
11	fu	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	12	aux:pass	_	_
12	battezzato	battezzare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	conj	_	_
13	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	26	26	NUM	N	NumType=Card	12	obl	_	_
15	aprile	aprile	NOUN	S	Gender=Masc|Number=Sing	14	flat	_	_
16	1564	1564	NUM	N	NumType=Card	14	flat	_	SpaceAfter=No
17	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 flat:name	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	critico	critico	NOUN	S	Gender=Masc|Number=Sing	6	nsubj	_	_
3	George	George	PROPN	SP	_	2	flat:name	_	_
4	Steiner	Steiner	PROPN	SP	_	2	flat:name	_	_
5	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	descritto	descrivere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	tutti	tutto	DET	T	Gender=Masc|Number=Plur|PronType=Tot	9	det:predet	_	_
8	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
9	drammi	dramma	NOUN	S	Gender=Masc|Number=Plur	6	obj	_	_
10	in	in	ADP	E	_	11	case	_	_
11	versi	verso	NOUN	S	Gender=Masc|Number=Plur	9	nmod	_	_
12	da	da	ADP	E	_	13	case	_	_
13	Coleridge	Coleridge	PROPN	SP	_	9	nmod	_	_
14	a	a	ADP	E	_	15	case	_	_
15	Tennyson	Tennyson	PROPN	SP	_	9	nmod	_	_
16	come	come	ADP	E	_	19	case	_	_
17	"	"	PUNCT	FB	_	19	punct	_	SpaceAfter=No
18	deboli	debole	ADJ	A	Number=Plur	19	amod	_	_
19	variazioni	variazione	NOUN	S	Gender=Fem|Number=Plur	6	obl	_	_
20	su	su	ADP	E	_	22	case	_	_
21	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	22	det	_	_
22	temi	tema	NOUN	S	Gender=Masc|Number=Plur	19	nmod	_	_
23	shakespeariani	shakespeariani	ADJ	A	Gender=Masc|Number=Plur	22	amod	_	SpaceAfter=No
24	"	"	PUNCT	FB	_	19	punct	_	SpaceAfter=No
25	.	.	PUNCT	FS	_	6	punct	_	_

~~~


