

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

57 nodes (0%) are attached to their parents as `foreign`.

57 instances of `foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.7719298245614.

The following 5 pairs of parts of speech are connected with `foreign`: [it-pos/X]()-[it-pos/X]() (51; 89% instances), [it-pos/PROPN]()-[it-pos/X]() (2; 4% instances), [it-pos/X]()-[it-pos/PUNCT]() (2; 4% instances), [it-pos/NOUN]()-[it-pos/X]() (1; 2% instances), [it-pos/X]()-[it-pos/NUM]() (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 foreign	color:blue
1	Dulcis	dulcis	X	SW	_	6	nmod	_	_
2	in	in	X	SW	_	1	foreign	_	_
3	fundo	fundo	X	SW	_	1	foreign	_	_
4	,	,	PUNCT	FF	_	1	punct	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	portamento	portamento	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
7	:	:	PUNCT	FC	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 foreign	color:blue
1	Ma	ma	CONJ	CC	_	9	cc	_	_
2	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	cosa	cosa	NOUN	S	Gender=Fem|Number=Sing	9	nsubj	_	_
4	più	più	ADV	B	_	5	advmod	_	_
5	incredibile	incredibile	ADJ	A	Number=Sing	3	amod	_	_
6	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
7	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	"	"	PUNCT	FB	_	9	punct	_	_
9	Peep	Peep	X	SW	_	0	root	_	_
10	-	-	PUNCT	FF	_	9	foreign	_	_
11	show	show	X	SW	_	9	foreign	_	_
12	-	-	PUNCT	FF	_	9	foreign	_	_
13	pavillon	pavillon	X	SW	_	9	foreign	_	_
14	"	"	PUNCT	FB	_	9	punct	_	_
15	,	,	PUNCT	FF	_	9	punct	_	_
16	in	in	ADP	E	_	17	case	_	_
17	cui	cui	PRON	PR	PronType=Rel	25	nmod	_	_
18	,	,	PUNCT	FF	_	17	punct	_	_
19	attraverso	attraverso	ADP	E	_	21	case	_	_
20	opportuni	opportuno	ADJ	A	Gender=Masc|Number=Plur	21	amod	_	_
21	fori	foro	NOUN	S	Gender=Masc|Number=Plur	25	nmod	_	_
22	,	,	PUNCT	FF	_	21	punct	_	_
23	si	si	PRON	PC	Person=3|PronType=Clit	25	expl	_	_
24	possono	potere	AUX	VM	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	25	aux	_	_
25	guardare	guardare	VERB	V	VerbForm=Inf	9	acl:relcl	_	_
26	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	27	det	_	_
27	disegni	disegno	NOUN	S	Gender=Masc|Number=Plur	25	nsubj	_	_
28	erotici	erotico	ADJ	A	Gender=Masc|Number=Plur	27	amod	_	_
29	di	di	ADP	E	_	30	case	_	_
30	Fendi	Fendi	PROPN	SP	_	27	nmod	_	_
31	.	.	PUNCT	FS	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 foreign	color:blue
1	Yamanote	Yamanote	PROPN	SP	_	5	nsubjpass	_	_
2	-	-	PUNCT	FF	_	1	name	_	_
3	sen	sen	X	SW	_	1	foreign	_	_
4	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	auxpass	_	_
5	scritto	scrivere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	ufficialmente	ufficialmente	ADV	B	_	5	advmod	_	_
7	senza	senza	ADP	E	_	8	case	_	_
8	kana	kana	PROPN	SP	_	5	nmod	_	_
9	"	"	PUNCT	FB	_	10	punct	_	_
10	no	no	PROPN	SP	_	5	xcomp	_	_
11	"	"	PUNCT	FB	_	10	punct	_	_
12	(	(	PUNCT	FB	_	13	punct	_	_
13	の	の	PROPN	SP	_	10	nmod	_	_
14	o	o	CONJ	CC	_	13	cc	_	_
15	ノ	ノ	PROPN	SP	_	13	conj	_	_
16	)	)	PUNCT	FB	_	13	punct	_	_
17	,	,	PUNCT	FF	_	5	punct	_	_
18	rendendo	rendere	VERB	V	VerbForm=Ger	5	advcl	_	_
19	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
20	sua	suo	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	21	det:poss	_	_
21	pronuncia	pronuncia	NOUN	S	Gender=Fem|Number=Sing	18	dobj	_	_
22	ambigua	ambiguo	ADJ	A	Gender=Fem|Number=Sing	18	xcomp	_	_
23	.	.	PUNCT	FS	_	5	punct	_	_

~~~


