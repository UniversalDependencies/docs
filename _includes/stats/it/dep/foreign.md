

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

76 nodes (0%) are attached to their parents as `foreign`.

76 instances of `foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.76315789473684.

The following 5 pairs of parts of speech are connected with `foreign`: [it-pos/X]()-[it-pos/X]() (71; 93% instances), [it-pos/PROPN]()-[it-pos/X]() (2; 3% instances), [it-pos/NOUN]()-[it-pos/X]() (1; 1% instances), [it-pos/X]()-[it-pos/NUM]() (1; 1% instances), [it-pos/X]()-[it-pos/PROPN]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 foreign	color:blue
1	Dulcis	dulcis	X	SW	_	6	nmod	_	_
2	in	in	X	SW	_	1	foreign	_	_
3	fundo	fundo	X	SW	_	1	foreign	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	1	punct	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	portamento	portamento	NOUN	S	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
7	:	:	PUNCT	FC	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 foreign	color:blue
1	Yamanote	Yamanote	PROPN	SP	_	5	nsubjpass	_	SpaceAfter=No
2	-	-	PUNCT	FF	_	1	punct	_	SpaceAfter=No
3	sen	sen	X	SW	_	1	foreign	_	_
4	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	auxpass	_	_
5	scritto	scrivere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	ufficialmente	ufficialmente	ADV	B	_	5	advmod	_	_
7	senza	senza	ADP	E	_	8	case	_	_
8	kana	kana	PROPN	SP	_	5	nmod	_	_
9	"	"	PUNCT	FB	_	10	punct	_	SpaceAfter=No
10	no	no	PROPN	SP	_	5	xcomp	_	SpaceAfter=No
11	"	"	PUNCT	FB	_	10	punct	_	_
12	(	(	PUNCT	FB	_	13	punct	_	SpaceAfter=No
13	の	の	PROPN	SP	_	10	nmod	_	_
14	o	o	CONJ	CC	_	13	cc	_	_
15	ノ	ノ	PROPN	SP	_	13	conj	_	SpaceAfter=No
16	)	)	PUNCT	FB	_	13	punct	_	SpaceAfter=No
17	,	,	PUNCT	FF	_	5	punct	_	_
18	rendendo	rendere	VERB	V	VerbForm=Ger	5	advcl	_	_
19	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
20	sua	suo	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	21	det:poss	_	_
21	pronuncia	pronuncia	NOUN	S	Gender=Fem|Number=Sing	18	dobj	_	_
22	ambigua	ambiguo	ADJ	A	Gender=Fem|Number=Sing	18	xcomp	_	SpaceAfter=No
23	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 16 foreign	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	valore	valore	NOUN	S	Gender=Masc|Number=Sing	37	nsubj	_	_
3	di	di	ADP	E	_	4	case	_	_
4	soglia	soglia	NOUN	S	Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	2	punct	_	_
6	spesso	spesso	ADV	B	_	7	advmod	_	_
7	espresso	esprimere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	acl	_	_
8	in	in	ADP	E	_	9	case	_	_
9	AOT40	AOT40	PROPN	SP	_	7	nmod	_	_
10	(	(	PUNCT	FB	_	11	punct	_	SpaceAfter=No
11	Accumulated	accumulated	X	SW	_	9	appos	_	_
12	ozone	ozone	X	SW	_	11	foreign	_	_
13	over	over	X	SW	_	11	foreign	_	_
14	Threshold	threshold	X	SW	_	11	foreign	_	_
15	of	of	X	SW	_	11	foreign	_	_
16	40	40	NUM	N	NumType=Card	11	foreign	_	_
17	ppb	ppb	X	SW	_	11	foreign	_	SpaceAfter=No
18	)	)	PUNCT	FB	_	11	punct	_	SpaceAfter=No
19	,	,	PUNCT	FF	_	2	punct	_	_
20	a	a	ADP	E	_	22	case	_	_
21	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	di	di	ADP	E	_	28	nmod	_	_
23	sopra	sopra	ADV	B	_	22	mwe	_	_
24	di	di	ADP	E	_	26	case	_	_
25	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	det	_	_
26	quale	quale	PRON	PR	Number=Sing|PronType=Rel	22	nmod	_	_
27	si	si	PRON	PC	Person=3|PronType=Clit	28	expl	_	_
28	manifestano	manifestare	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	_	_
29	danni	danno	NOUN	S	Gender=Masc|Number=Plur	28	nsubj	_	_
30	fogliari	fogliare	ADJ	A	Number=Plur	29	amod	_	_
31	visibili	visibili	ADJ	A	Number=Plur	29	amod	_	_
32	su	su	ADP	E	_	34	case	_	_
33	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	34	det	_	_
34	piante	pianta	NOUN	S	Gender=Fem|Number=Plur	28	nmod	_	_
35	sensibili	sensibile	ADJ	A	Number=Plur	34	amod	_	SpaceAfter=No
36	,	,	PUNCT	FF	_	2	punct	_	_
37	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
38	di	di	ADP	E	_	40	case	_	_
39	700	700	NUM	N	NumType=Card	40	nummod	_	_
40	ppb	ppb	NOUN	S	_	37	nmod	_	_
41	/	/	PUNCT	FF	_	40	punct	_	_
42	ora	ora	ADV	B	_	40	advmod	_	SpaceAfter=No
43	,	,	PUNCT	FF	_	37	punct	_	_
44	calcolato	calcolare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	37	advcl	_	_
45	su	su	ADP	E	_	47	case	_	_
46	tre	tre	NUM	N	NumType=Card	47	nummod	_	_
47	giorni	giorno	NOUN	S	Gender=Masc|Number=Plur	44	nmod	_	SpaceAfter=No
48	.	.	PUNCT	FS	_	37	punct	_	_

~~~


