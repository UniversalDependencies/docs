

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

733 nodes (0%) are attached to their parents as `compound`.

733 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.15961800818554.

The following 8 pairs of parts of speech are connected with `compound`: [it-pos/NOUN]()-[it-pos/NOUN]() (635; 87% instances), [it-pos/NUM]()-[it-pos/NUM]() (77; 11% instances), [it-pos/NOUN]()-[it-pos/X]() (10; 1% instances), [it-pos/ADJ]()-[it-pos/NOUN]() (4; 1% instances), [it-pos/PROPN]()-[it-pos/NOUN]() (4; 1% instances), [it-pos/NOUN]()-[it-pos/PROPN]() (1; 0% instances), [it-pos/NUM]()-[it-pos/X]() (1; 0% instances), [it-pos/X]()-[it-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	L'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	apprendista	apprendista	NOUN	S	Number=Sing	9	nsubj	_	_
3	stregone	stregone	NOUN	S	Gender=Masc|Number=Sing	2	compound	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	2	punct	_	_
5	evidentemente	evidentemente	ADV	B	_	9	advmod	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	5	punct	_	_
7	non	non	ADV	BN	PronType=Neg	9	advmod	_	_
8	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	rinunciato	rinunciare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
10	"	"	PUNCT	FB	_	9	punct	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 compound	color:blue
1	In	in	ADP	E	_	3	case	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	1971	1971	NUM	N	NumType=Card	10	obl	_	_
4	-	-	PUNCT	FF	_	3	punct	_	_
5	72	72	NUM	N	NumType=Card	3	compound	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	3	punct	_	_
7	un'	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	SpaceAfter=No
8	ampia	ampio	ADJ	A	Gender=Fem|Number=Sing	9	amod	_	_
9	purga	purga	NOUN	S	Gender=Fem|Number=Sing	10	nsubj	_	_
10	colpisce	colpire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
11	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	det	_	_
12	dissidenti	dissidente	NOUN	S	Number=Plur	10	obj	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound	color:blue
1	a	a	X	X	_	3	nummod	_	SpaceAfter=No
2	)	)	PUNCT	FF	_	1	punct	_	_
3	trasporti	trasporto	NOUN	S	Gender=Masc|Number=Plur	0	root	_	_
4	ad	ad	X	SW	Foreign=Yes	3	compound	_	_
5	hoc	hoc	X	SW	Foreign=Yes	4	flat:foreign	_	_
6	di	di	ADP	E	_	7	case	_	_
7	merci	merce	NOUN	S	Gender=Fem|Number=Plur	3	nmod	_	_
8	pericolose	pericoloso	ADJ	A	Gender=Fem|Number=Plur	7	amod	_	SpaceAfter=No
9	;	;	PUNCT	FC	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian-ParTUT)

This relation is universal.

124 nodes (0%) are attached to their parents as `compound`.

124 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.04032258064516.

The following 5 pairs of parts of speech are connected with `compound`: [it-pos/NOUN]()-[it-pos/NOUN]() (119; 96% instances), [it-pos/PROPN]()-[it-pos/PROPN]() (2; 2% instances), [it-pos/NOUN]()-[it-pos/X]() (1; 1% instances), [it-pos/NUM]()-[it-pos/NUM]() (1; 1% instances), [it-pos/PROPN]()-[it-pos/NOUN]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound	color:blue
1	Signora	signore	NOUN	S	Gender=Fem|Number=Sing	5	vocative	_	_
2	presidente	presidente	NOUN	S	Number=Sing	1	compound	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	1	punct	_	_
4	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	richiamo	richiamo	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
6	a	a	ADP	E	_	8	case	_	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	regolamento	regolamento	NOUN	S	Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 compound	color:blue
1	ANA	ANA	PROPN	SP	_	3	nsubj	_	_
2	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	sfruttato	sfruttare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	questa	questo	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
5	tattica	tattica	NOUN	S	Gender=Fem|Number=Sing	3	obj	_	_
6	creando	creare	VERB	V	VerbForm=Ger	3	advcl	_	_
7	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	Pagina	Pagina	PROPN	SP	_	6	obj	_	_
9	Facebook	Facebook	PROPN	SP	_	8	compound	_	_
10	per	per	ADP	E	_	11	mark	_	_
11	aumentare	aumentare	VERB	V	VerbForm=Inf	6	advcl	_	_
12	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	numero	numero	NOUN	S	Gender=Masc|Number=Sing	11	obj	_	_
14	di	di	ADP	E	_	15	case	_	_
15	utenti	utente	NOUN	S	Number=Plur	13	nmod	_	_
16	interessati	interessato	ADJ	A	Gender=Masc|Number=Plur	15	amod	_	_
17	in	in	ADP	E	_	19	case	_	_
18	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	19	det	_	_
19	servizi	servizio	NOUN	S	Gender=Masc|Number=Plur	16	obl	_	_
20	offerti	offrire	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	19	acl	_	SpaceAfter=No
21	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 compound	color:blue
1	Dopo	dopo	ADP	E	_	3	case	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	regno	regno	NOUN	S	Gender=Masc|Number=Sing	14	obl	_	_
4	di	di	ADP	E	_	6	case	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	terrore	terrore	NOUN	S	Gender=Masc|Number=Sing	3	nmod	_	_
7	(	(	PUNCT	FB	_	8	punct	_	SpaceAfter=No
8	1793	1793	NUM	N	NumType=Card	3	nummod	_	SpaceAfter=No
9	-	-	PUNCT	FF	_	8	punct	_	SpaceAfter=No
10	94	94	NUM	N	NumType=Card	8	compound	_	SpaceAfter=No
11	)	)	PUNCT	FB	_	8	punct	_	SpaceAfter=No
12	,	,	PUNCT	FF	_	3	punct	_	_
13	fu	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	14	aux:pass	_	_
14	inviato	inviare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
15	a	a	ADP	E	_	16	case	_	_
16	Tours	Tours	PROPN	SP	_	14	obl	_	_
17	per	per	ADP	E	_	18	mark	_	_
18	coordinare	coordinare	VERB	V	VerbForm=Inf	14	advcl	_	_
19	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	20	det	_	_
20	rifornimenti	rifornimento	NOUN	S	Gender=Masc|Number=Plur	18	obj	_	_
21	per	per	ADP	E	_	23	case	_	_
22	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	23	det	_	SpaceAfter=No
23	esercito	esercito	NOUN	S	Gender=Masc|Number=Sing	20	nmod	_	SpaceAfter=No
24	.	.	PUNCT	FS	_	14	punct	_	_

~~~


