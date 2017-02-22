

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is a language-specific subtype of [xcomp]().

331 nodes (2%) are attached to their parents as `xcomp:pred`.

327 instances of `xcomp:pred` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.80966767371601.

The following 19 pairs of parts of speech are connected with `xcomp:pred`: [ga-pos/VERB]()-[ga-pos/NOUN]() (121; 37% instances), [ga-pos/VERB]()-[ga-pos/ADJ]() (99; 30% instances), [ga-pos/VERB]()-[ga-pos/ADP]() (36; 11% instances), [ga-pos/VERB]()-[ga-pos/ADV]() (13; 4% instances), [ga-pos/NOUN]()-[ga-pos/ADJ]() (12; 4% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (12; 4% instances), [ga-pos/PRON]()-[ga-pos/NOUN]() (11; 3% instances), [ga-pos/VERB]()-[ga-pos/PROPN]() (7; 2% instances), [ga-pos/AUX]()-[ga-pos/NOUN]() (3; 1% instances), [ga-pos/SCONJ]()-[ga-pos/ADJ]() (3; 1% instances), [ga-pos/SCONJ]()-[ga-pos/NOUN]() (3; 1% instances), [ga-pos/PRON]()-[ga-pos/ADJ]() (2; 1% instances), [ga-pos/PRON]()-[ga-pos/PRON]() (2; 1% instances), [ga-pos/VERB]()-[ga-pos/PART]() (2; 1% instances), [ga-pos/ADV]()-[ga-pos/ADJ]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/ADP]() (1; 0% instances), [ga-pos/PART]()-[ga-pos/ADV]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/X]() (1; 0% instances), [ga-pos/X]()-[ga-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 xcomp:pred	color:blue
1	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	3	nmod:poss	_	_
3	mhaide	maide	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	1	nsubj	_	_
4	siúil	siúl	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	3	compound	_	_
5	ina	i	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes	6	case	_	_
6	láimh	lámh	NOUN	Noun	Case=Dat|Gender=Fem|Number=Sing	1	xcomp:pred	_	_
7	aige	ag	ADP	Prep	Gender=Masc|Number=Sing|Person=3	6	obl:prep	_	SpaceAfter=No
8	...	...	PUNCT	Punct	_	9	punct	_	_
9	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	1	ccomp	_	_
10	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	11	det	_	_
11	áit	áit	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	9	nsubj	_	_
12	réabtha	réabtha	ADJ	Adj	VerbForm=Part	9	xcomp:pred	_	_
13	dóite	dóite	ADJ	Adj	VerbForm=Part	12	amod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 xcomp:pred	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp:pred	color:blue
1	Sin	sin	AUX	Cop	PronType=Dem|VerbForm=Cop	0	root	_	_
2	a	a	PART	Vb	PartType=Vb|PronType=Rel	3	mark:prt	_	_
3	bhfuil	bí	VERB	VI	Form=Ecl|Mood=Ind|Tense=Pres	1	csubj:cleft	_	_
4	ann	i	ADP	Prep	Gender=Masc|Number=Sing|Person=3	3	xcomp:pred	_	SpaceAfter=No
5	.	.	PUNCT	.	_	1	punct	_	_

~~~


