

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.
There are 2 language-specific subtypes of `obl`: [obl:prep](), [obl:tmod]().

720 nodes (5%) are attached to their parents as `obl`.

603 instances of `obl` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.17638888888889.

The following 15 pairs of parts of speech are connected with `obl`: [ga-pos/VERB]()-[ga-pos/NOUN]() (501; 70% instances), [ga-pos/ADJ]()-[ga-pos/NOUN]() (65; 9% instances), [ga-pos/VERB]()-[ga-pos/PART]() (50; 7% instances), [ga-pos/VERB]()-[ga-pos/PROPN]() (36; 5% instances), [ga-pos/ADV]()-[ga-pos/NOUN]() (25; 3% instances), [ga-pos/VERB]()-[ga-pos/PRON]() (16; 2% instances), [ga-pos/ADJ]()-[ga-pos/PROPN]() (9; 1% instances), [ga-pos/VERB]()-[ga-pos/NUM]() (8; 1% instances), [ga-pos/ADJ]()-[ga-pos/PRON]() (3; 0% instances), [ga-pos/VERB]()-[ga-pos/SCONJ]() (2; 0% instances), [ga-pos/ADJ]()-[ga-pos/X]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/ADJ]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/ADV]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/VERB]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 obl	color:blue
1	Bronnfar	bronn	VERB	VT	Mood=Ind|Tense=Fut|Voice=Auto	0	root	_	_
2	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	1	obj	_	_
3	ar	ar	ADP	Simp	_	5	case	_	_
4	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	5	det	_	_
5	Chnuasach	cnuasach	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	1	obl	_	_
6	Gearrscéalta	gearrscéal	NOUN	Noun	Case=Gen|Gender=Masc|NounType=Strong|Number=Plur	5	compound	_	_
7	nó	nó	CCONJ	Coord	_	9	cc	_	_
8	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	9	det	_	_
9	dráma	dráma	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	5	conj	_	_
10	is	is	PART	Sup	_	11	mark:prt	_	_
11	fearr	maith	ADJ	Adj	Degree=Cmp,Sup	5	amod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl	color:blue
1	Post	post	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
2	ilghnéitheach	ilghnéitheach	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	1	amod	_	_
3	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	4	nmod	_	_
4	seo	seo	PRON	Dem	PronType=Dem	1	nsubj	_	_
5	bunaithe	bunaithe	ADJ	Adj	VerbForm=Part	1	amod	_	_
6	san	i	ADP	Art	Number=Sing|PronType=Art	7	case	_	_
7	oifig	oifig	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	5	obl	_	_
8	den	de	ADP	Art	Number=Sing|PronType=Art	9	case	_	_
9	chuid	cuid	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	7	nmod	_	_
10	is	is	PART	Sup	_	11	mark:prt	_	_
11	mó	mór	ADJ	Adj	Degree=Cmp,Sup	9	amod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obl	color:blue
1	Caidé	cad_é	X	CU	Dialect=Ulster|VerbForm=Cop	0	root	_	_
2	'n	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	rud	rud	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	nsubj	_	_
4	a	a	PART	Vb	PartType=Vb|PronType=Rel	5	obl	_	_
5	dtugann	tabhair	VERB	VTI	Form=Ecl|Mood=Ind|Tense=Pres	3	acl:relcl	_	_
6	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
7	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	10	det	_	_
8	-	-	PUNCT	Punct	_	10	punct	_	_
9	'	'	PUNCT	Punct	_	10	punct	_	SpaceAfter=No
10	maidí-úachtaracha	maidí-úachtaracha	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	5	obj	_	SpaceAfter=No
11	'	'	PUNCT	Punct	_	10	punct	_	_
12	orthú	ar	ADP	Prep	Number=Plur|Person=3	5	obl:prep	_	SpaceAfter=No
13	?	?	PUNCT	?	_	1	punct	_	_

~~~


