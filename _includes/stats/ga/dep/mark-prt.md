

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is a language-specific subtype of [mark]().

413 nodes (3%) are attached to their parents as `mark:prt`.

404 instances of `mark:prt` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.06537530266344.

The following 16 pairs of parts of speech are connected with `mark:prt`: [ga-pos/VERB]()-[ga-pos/PART]() (283; 69% instances), [ga-pos/ADJ]()-[ga-pos/PART]() (74; 18% instances), [ga-pos/VERB]()-[ga-pos/SCONJ]() (16; 4% instances), [ga-pos/ADJ]()-[ga-pos/NOUN]() (14; 3% instances), [ga-pos/ADJ]()-[ga-pos/ADV]() (4; 1% instances), [ga-pos/NOUN]()-[ga-pos/ADP]() (4; 1% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (4; 1% instances), [ga-pos/NUM]()-[ga-pos/PART]() (4; 1% instances), [ga-pos/NOUN]()-[ga-pos/PART]() (3; 1% instances), [ga-pos/ADJ]()-[ga-pos/AUX]() (1; 0% instances), [ga-pos/ADP]()-[ga-pos/SCONJ]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/SCONJ]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/X]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/AUX]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/CCONJ]() (1; 0% instances), [ga-pos/X]()-[ga-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 mark:prt	color:blue
1	Ansin	ansin	ADV	Loc	_	6	advmod	_	_
2	nach	is	AUX	Cop	Mood=Int|Polarity=Neg|Tense=Pres|VerbForm=Cop	6	cop	_	_
3	deas	deas	ADJ	Adj	Degree=Pos	6	xcomp:pred	_	_
4	mar	mar	SCONJ	Subord	_	6	mark	_	_
5	a	a	PART	Vb	PartType=Vb|PronType=Rel	6	mark:prt	_	_
6	bheadh	bí	VERB	Cond	Form=Len|Mood=Cnd	0	root	_	_
7	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	8	det	_	_
8	scéal	scéal	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	6	nsubj	_	_
9	a'm	ag	ADP	Prep	Number=Sing|Person=1	6	obl:prep	_	SpaceAfter=No
10	?	?	PUNCT	?	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 mark:prt	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 mark:prt	color:blue
1	Ach	ach	SCONJ	Subord	_	3	advmod	_	_
2	níor	níor	PART	Vb	PartType=Vb|Polarity=Neg|Tense=Past	3	advmod	_	_
3	mhair	mair	VERB	VTI	Form=Len|Mood=Ind|Polarity=Neg|Tense=Past	0	root	_	_
4	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	5	det	_	_
5	cumann	cumann	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	3	nsubj	_	_
6	beag	beag	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	5	amod	_	_
7	carthanach	carthanach	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	5	amod	_	_
8	seo	seo	DET	Det	PronType=Dem	5	det	_	_
9	ach	ach	SCONJ	Subord	_	3	mark:prt	_	_
10	seal	seal	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	9	compound	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


