

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is a language-specific subtype of [obl]().

1093 nodes (0%) are attached to their parents as `obl:agent`.

1066 instances of `obl:agent` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.34949679780421.

The following 10 pairs of parts of speech are connected with `obl:agent`: [it-pos/VERB]()-[it-pos/NOUN]() (863; 79% instances), [it-pos/VERB]()-[it-pos/PROPN]() (158; 14% instances), [it-pos/VERB]()-[it-pos/PRON]() (41; 4% instances), [it-pos/VERB]()-[it-pos/ADJ]() (13; 1% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (12; 1% instances), [it-pos/ADJ]()-[it-pos/NOUN]() (2; 0% instances), [it-pos/ADJ]()-[it-pos/PRON]() (1; 0% instances), [it-pos/ADV]()-[it-pos/NOUN]() (1; 0% instances), [it-pos/VERB]()-[it-pos/NUM]() (1; 0% instances), [it-pos/VERB]()-[it-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:agent	color:blue
1	977	977	NUM	N	NumType=Card	3	nummod	_	SpaceAfter=No
2	.	.	PUNCT	FF	_	1	punct	_	_
3	Enfiteusi	enfiteusi	NOUN	S	Gender=Fem	0	root	_	_
4	costituite	costituire	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	3	acl	_	_
5	da	da	ADP	E	_	7	case	_	_
6	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	7	det	_	_
7	persone	persona	NOUN	S	Gender=Fem|Number=Plur	4	obl:agent	_	_
8	giuridiche	giuridico	ADJ	A	Gender=Fem|Number=Plur	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:agent	color:blue
1	Distribuito	distribuire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
2	da	da	ADP	E	_	3	case	_	_
3	Tirone	Tirone	PROPN	SP	_	1	obl:agent	_	_
4	Edilizia	edilizia	NOUN	S	Gender=Fem|Number=Sing	3	nmod	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	6	punct	_	_
6	costa	costare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	conj	_	_
7	circa	circa	ADV	B	_	9	advmod	_	_
8	L.	lira	NOUN	S	Gender=Fem	6	obl	_	_
9	140.000	140.000	NUM	N	NumType=Card	8	nummod	_	_
10	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	mq	mq	NOUN	S	_	6	obl	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	1059	1059	NUM	N	NumType=Card	3	nummod	_	SpaceAfter=No
2	.	.	PUNCT	FF	_	1	punct	_	_
3	Servitù	servitù	NOUN	S	Gender=Fem	0	root	_	_
4	concessa	concedere	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	3	acl	_	_
5	da	da	ADP	E	_	6	case	_	_
6	uno	uno	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	4	obl:agent	_	_
7	di	di	ADP	E	_	9	case	_	_
8	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
9	comproprietari	comproprietario	NOUN	S	Gender=Masc|Number=Plur	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian-ParTUT)

This relation is a language-specific subtype of [obl]().

151 nodes (0%) are attached to their parents as `obl:agent`.

149 instances of `obl:agent` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.41059602649007.

The following 3 pairs of parts of speech are connected with `obl:agent`: [it-pos/VERB]()-[it-pos/NOUN]() (124; 82% instances), [it-pos/VERB]()-[it-pos/PROPN]() (24; 16% instances), [it-pos/VERB]()-[it-pos/PRON]() (3; 2% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 obl:agent	color:blue
1	A	a	ADP	E	_	3	case	_	_
2	tal	tale	DET	DD	Number=Sing|PronType=Dem	3	det	_	_
3	fine	fine	NOUN	S	Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	3	punct	_	_
5	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	commissione	commissione	NOUN	S	Gender=Fem|Number=Sing	8	nsubj:pass	_	_
7	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:pass	_	_
8	assistita	assistere	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
9	da	da	ADP	E	_	11	case	_	_
10	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	comitato	comitato	NOUN	S	Gender=Masc|Number=Sing	8	obl:agent	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obl:agent	color:blue
1	Anche	anche	ADV	B	_	2	advmod	_	_
2	Gustave	Gustave	PROPN	SP	_	6	nsubj:pass	_	_
3	Flaubert	Flaubert	PROPN	SP	_	2	flat:name	_	_
4	fu	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	aux:pass	_	_
5	sostanzialmente	sostanzialmente	ADV	B	_	6	advmod	_	_
6	influenzato	influenzare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	da	da	ADP	E	_	8	case	_	_
8	Balzac	Balzac	PROPN	SP	_	6	obl:agent	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 obl:agent	color:blue
1	Non	non	ADV	BN	PronType=Neg	3	advmod	_	_
2	c'	ci	PRON	PC	Clitic=Yes|PronType=Prs	3	expl	_	SpaceAfter=No
3	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	nulla	nulla	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	3	nsubj	_	_
5	di	di	ADP	E	_	6	mark	_	_
6	simulato	simulare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	advcl	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	4	punct	_	_
8	però	però	ADV	B	_	4	advmod	_	SpaceAfter=No
9	,	,	PUNCT	FF	_	4	punct	_	_
10	in	in	ADP	E	_	12	case	_	_
11	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	det	_	_
12	sforzi	sforzo	NOUN	S	Gender=Masc|Number=Plur	4	nmod	_	_
13	profusi	profondere	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	12	acl	_	_
14	da	da	ADP	E	_	15	case	_	_
15	noi	noi	PRON	PE	Number=Plur|Person=1|PronType=Prs	13	obl:agent	_	_
16	ucraini	ucraino	ADJ	A	Gender=Masc|Number=Plur	15	amod	_	_
17	per	per	ADP	E	_	18	mark	_	_
18	difendere	difendere	VERB	V	VerbForm=Inf	13	advcl	_	_
19	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
20	nostro	nostro	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	21	det:poss	_	_
21	paese	paese	NOUN	S	Gender=Masc|Number=Sing	18	obj	_	_
22	e	e	CCONJ	CC	_	25	cc	_	_
23	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	25	det	_	_
24	nostra	nostro	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	25	det:poss	_	_
25	democrazia	democrazia	NOUN	S	Gender=Fem|Number=Sing	21	conj	_	SpaceAfter=No
26	.	.	PUNCT	FS	_	3	punct	_	_

~~~


