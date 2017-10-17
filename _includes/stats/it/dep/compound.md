

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
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 24 compound	color:blue
1	SEOUL	Seoul	PROPN	SP	_	14	obl	_	_
2	-	-	PUNCT	FF	_	1	punct	_	_
3	in	in	ADP	E	_	7	case	_	_
4	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	7	det	_	_
5	ultimi	ultimo	ADJ	NO	Gender=Masc|Number=Plur|NumType=Ord	7	amod	_	_
6	cinquant'	cinquanta	NUM	N	NumType=Card	7	nummod	_	SpaceAfter=No
7	anni	anno	NOUN	S	Gender=Masc|Number=Plur	14	obl	_	_
8	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	Corea	Corea	PROPN	SP	_	14	nsubj	_	_
10	di	di	ADP	E	_	12	case	_	_
11	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	sud	sud	NOUN	S	Gender=Masc|Number=Sing	9	nmod	_	_
13	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux	_	_
14	compiuto	compiere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
15	notevoli	notevole	ADJ	A	Number=Plur	16	amod	_	_
16	progressi	progresso	NOUN	S	Gender=Masc|Number=Plur	14	obj	_	_
17	in	in	ADP	E	_	18	case	_	_
18	campo	campo	NOUN	S	Gender=Masc|Number=Sing	16	nmod	_	_
19	economico	economico	ADJ	A	Gender=Masc|Number=Sing	18	amod	_	SpaceAfter=No
20	,	,	PUNCT	FF	_	14	punct	_	_
21	portando	portare	VERB	V	VerbForm=Ger	14	advcl	_	_
22	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
23	reddito	reddito	NOUN	S	Gender=Masc|Number=Sing	21	obj	_	_
24	pro	pro	X	SW	Foreign=Yes	23	compound	_	_
25	capite	capite	X	SW	Foreign=Yes	24	flat:foreign	_	_
26	da	da	ADP	E	_	28	case	_	_
27	80	80	NUM	N	NumType=Card	28	nummod	_	_
28	dollari	dollaro	NOUN	S	Gender=Masc|Number=Plur	21	obl	_	_
29	in	in	ADP	E	_	31	case	_	_
30	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	31	det	_	_
31	1960	1960	NUM	N	NumType=Card	28	nmod	_	_
32	a	a	ADP	E	_	36	case	_	_
33	più	più	ADV	B	_	35	advmod	_	_
34	di	di	ADP	E	_	33	fixed	_	_
35	22.000	22.000	NUM	N	NumType=Card	36	nummod	_	_
36	dollari	dollaro	NOUN	S	Gender=Masc|Number=Plur	21	obl	_	_
37	lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	39	det	_	_
38	scorso	scorso	ADJ	A	Gender=Masc|Number=Sing	39	amod	_	_
39	anno	anno	NOUN	S	Gender=Masc|Number=Sing	36	nmod	_	SpaceAfter=No
40	.	.	PUNCT	FS	_	14	punct	_	_

~~~


