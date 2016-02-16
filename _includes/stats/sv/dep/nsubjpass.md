

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

1341 nodes (1%) are attached to their parents as `nsubjpass`.

1099 instances of `nsubjpass` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.74869500372856.

The following 6 pairs of parts of speech are connected with `nsubjpass`: [sv-pos/VERB]()-[sv-pos/NOUN]() (978; 73% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (336; 25% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (15; 1% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (7; 1% instances), [sv-pos/VERB]()-[sv-pos/NUM]() (3; 0% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubjpass	color:blue
1	Två	två	NUM	RG|NOM	Case=Nom	2	nummod	_	_
2	huvudfaktorer	huvudfaktor	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	4	nsubjpass	_	_
3	kan	kunna	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	urskiljas	urskilja	VERB	VB|INF|SFO	VerbForm=Inf|Voice=Pass	0	root	_	_
5	som	som	PRON	HP|-|-|-	PronType=Int,Rel	6	nsubj	_	_
6	förklarar	förklara	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl	_	_
7	men	men	CONJ	KN	_	6	cc	_	_
8	inte	inte	ADV	AB	_	9	neg	_	_
9	ursäktar	ursäkta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	_
10	:	:	PUNCT	MAD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubjpass	color:blue
1	Detta	denna	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	2	nsubjpass	_	_
2	återspeglas	återspegla	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
3	också	också	ADV	AB	_	2	advmod	_	_
4	i	i	ADP	PP	_	5	case	_	_
5	siffrorna	siffra	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	2	nmod	_	_
6	för	för	ADP	PP	_	7	case	_	_
7	gymnasiet	gymnasium	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	5	nmod	_	_
8	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubjpass	color:blue
1	De	en	DET	DT|UTR/NEU|PLU|DEF	Definite=Def|Number=Plur	2	det	_	_
2	intagna	ta_in	ADJ	PC|PRF|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Number=Plur|Tense=Past|VerbForm=Part	3	nsubjpass	_	_
3	isoleras	isolera	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
4	socialt	social	ADV	AB|POS	Degree=Pos	3	advmod	_	_
5	och	och	CONJ	KN	_	3	cc	_	_
6	återfaller	återfalla	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
7	i	i	ADP	PP	_	9	case	_	_
8	stor	stor	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	9	amod	_	_
9	utsträckning	utsträckning	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	nmod	_	_
10	till	till	ADP	PP	_	11	case	_	_
11	brottslighet	brottslighet	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	nmod	_	_
12	.	.	PUNCT	MAD	_	3	punct	_	_

~~~


