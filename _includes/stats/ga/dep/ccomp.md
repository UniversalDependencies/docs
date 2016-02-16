

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

362 nodes (2%) are attached to their parents as `ccomp`.

333 instances of `ccomp` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 15.7209944751381.

The following 37 pairs of parts of speech are connected with `ccomp`: [ga-pos/VERB]()-[ga-pos/VERB]() (149; 41% instances), [ga-pos/NOUN]()-[ga-pos/VERB]() (50; 14% instances), [ga-pos/VERB]()-[ga-pos/NOUN]() (34; 9% instances), [ga-pos/VERB]()-[ga-pos/ADJ]() (17; 5% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (16; 4% instances), [ga-pos/VERB]()-[ga-pos/PRON]() (12; 3% instances), [ga-pos/ADJ]()-[ga-pos/VERB]() (10; 3% instances), [ga-pos/NOUN]()-[ga-pos/ADJ]() (10; 3% instances), [ga-pos/VERB]()-[ga-pos/ADP]() (8; 2% instances), [ga-pos/NOUN]()-[ga-pos/ADP]() (5; 1% instances), [ga-pos/ADJ]()-[ga-pos/NOUN]() (4; 1% instances), [ga-pos/ADV]()-[ga-pos/VERB]() (4; 1% instances), [ga-pos/NOUN]()-[ga-pos/PRON]() (4; 1% instances), [ga-pos/SCONJ]()-[ga-pos/VERB]() (4; 1% instances), [ga-pos/NOUN]()-[ga-pos/SCONJ]() (3; 1% instances), [ga-pos/PROPN]()-[ga-pos/VERB]() (3; 1% instances), [ga-pos/VERB]()-[ga-pos/X]() (3; 1% instances), [ga-pos/CONJ]()-[ga-pos/NOUN]() (2; 1% instances), [ga-pos/PRON]()-[ga-pos/VERB]() (2; 1% instances), [ga-pos/PUNCT]()-[ga-pos/VERB]() (2; 1% instances), [ga-pos/VERB]()-[ga-pos/ADV]() (2; 1% instances), [ga-pos/VERB]()-[ga-pos/DET]() (2; 1% instances), [ga-pos/VERB]()-[ga-pos/SCONJ]() (2; 1% instances), [ga-pos/ADJ]()-[ga-pos/ADJ]() (1; 0% instances), [ga-pos/ADP]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/ADP]()-[ga-pos/VERB]() (1; 0% instances), [ga-pos/ADV]()-[ga-pos/ADJ]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/ADV]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/X]() (1; 0% instances), [ga-pos/PRON]()-[ga-pos/ADJ]() (1; 0% instances), [ga-pos/PRON]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/ADJ]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/SCONJ]() (1; 0% instances), [ga-pos/SCONJ]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/CONJ]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 2 ccomp	color:blue
1	'	'	PUNCT	Punct	_	15	punct	_	_
2	Tá	bí	VERB	VI	Mood=Ind|Tense=Pres	15	ccomp	_	_
3	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
4	méid	méid	NOUN	Noun	Case=Com|Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	_
5	sin	sin	DET	Det	PronType=Dem	4	det	_	_
6	suimiúil	suimiúil	ADJ	Adj	Degree=Pos	2	xcomp:pred	_	_
7	a	a	PART	Vb	PartType=Vb|PronType=Rel	9	dobj	_	_
8	d'	do	PART	Vb	PartType=Vb	9	mark:prt	_	_
9	inis	inis	VERB	VTI	Mood=Ind|Tense=Past	4	acl:relcl	_	_
10	tú	tú	PRON	Pers	Number=Sing|Person=2	9	nsubj	_	_
11	dom	do	ADP	Prep	Number=Sing|Person=1	9	nmod:prep	_	_
12	,	,	PUNCT	Punct	_	15	punct	_	_
13	'	'	PUNCT	Punct	_	15	punct	_	_
14	a	a	PART	Vb	PartType=Vb|PronType=Rel	15	mark:prt	_	_
15	dúirt	abair	VERB	VTI	Mood=Ind|Tense=Past	0	root	_	_
16	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	15	nsubj	_	_
17	.	.	PUNCT	.	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 ccomp	color:blue
1	Cad	cad	PRON	Q	PronType=Int	0	root	_	_
2	ina	i	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes	3	case	_	_
3	thaobh	taobh	NOUN	Noun	Case=Com|Form=Len|Gender=Masc|Number=Sing	1	xcomp:pred	_	_
4	ná	nach	PART	Vb	Negative=Neg|PartType=Cmpl	5	dobj	_	_
5	haithneodh	haithneodh	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	1	acl:relcl	_	_
6	,	,	PUNCT	Punct	_	8	punct	_	_
7	ná	nach	PART	Vb	Negative=Neg|PartType=Cmpl	8	mark:prt	_	_
8	fuil	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	5	ccomp	_	_
9	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	8	nsubj	_	_
10	do	do	ADP	Simp	_	12	case	_	_
11	mo	mo	DET	Det	Number=Sing|Person=1|Poss=Yes	12	nmod:poss	_	_
12	mhúineadh	múineadh	NOUN	Noun	Form=Len|VerbForm=Inf	8	xcomp	_	_
13	?	?	PUNCT	?	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	Dúirt	abair	VERB	VTI	Mood=Ind|Tense=Past	0	root	_	_
2	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	1	nsubj	_	_
3	nár	is	VERB	Cop	Negative=Neg|PronType=Rel|Tense=Past|VerbForm=Cop	4	cop	_	_
4	múinteoir	múinteoir	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	1	ccomp	_	_
5	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	4	nsubj	_	_
6	.	.	PUNCT	.	_	1	punct	_	_

~~~


