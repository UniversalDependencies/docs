

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

487 nodes (4%) are attached to their parents as `obj`.

275 instances of `obj` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.60574948665298.

The following 20 pairs of parts of speech are connected with `obj`: [ga-pos/VERB]()-[ga-pos/NOUN]() (198; 41% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (137; 28% instances), [ga-pos/VERB]()-[ga-pos/PART]() (73; 15% instances), [ga-pos/VERB]()-[ga-pos/PRON]() (39; 8% instances), [ga-pos/NOUN]()-[ga-pos/PRON]() (17; 3% instances), [ga-pos/VERB]()-[ga-pos/PROPN]() (5; 1% instances), [ga-pos/NOUN]()-[ga-pos/PROPN]() (3; 1% instances), [ga-pos/NOUN]()-[ga-pos/PART]() (2; 0% instances), [ga-pos/VERB]()-[ga-pos/SCONJ]() (2; 0% instances), [ga-pos/ADP]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/NUM]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/SCONJ]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/ADP]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/NUM]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/X]() (1; 0% instances), [ga-pos/X]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/X]()-[ga-pos/PART]() (1; 0% instances), [ga-pos/X]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/X]()-[ga-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 obj	color:blue
1	Dheisigh	deisigh	VERB	VT	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	Seán	Seán	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	nsubj	_	_
3	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
4	rothar	rothar	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	1	obj	_	SpaceAfter=No
5	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 obj	color:blue
1	Ar	is	AUX	Cop	Tense=Past|VerbForm=Cop	2	cop	_	_
2	mhaith	maith	ADJ	Adj	Degree=Pos|Form=Len	0	root	_	_
3	leat	le	ADP	Prep	Number=Sing|Person=2	2	obl:prep	_	_
4	teach	teach	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	6	obj	_	_
5	a	a	PART	Inf	PartType=Inf	6	mark	_	_
6	cheannach	ceannach	NOUN	Noun	Form=Len|VerbForm=Inf	2	nsubj	_	SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obj	color:blue
1	Is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	2	cop	_	_
2	é	é	PRON	Pers	Gender=Masc|Person=3	0	root	_	_
3	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
4	leabhar	leabhar	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	_
5	a	a	PART	Vb	PartType=Vb|PronType=Rel	6	obj	_	_
6	thug	tabhair	VERB	VD	Form=Len|Mood=Ind|Tense=Past	4	acl:relcl	_	_
7	sí	sí	PRON	Pers	Gender=Fem|Number=Sing|Person=3	6	nsubj	_	_
8	do	do	ADP	Simp	_	9	case	_	_
9	Mháire	Máire	PROPN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


