

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is a language-specific subtype of [csubj]().
There are also 1 other language-specific subtypes of `csubj`: [csubj:cop]().

68 nodes (0%) are attached to their parents as `csubj:cleft`.

68 instances of `csubj:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.39705882352941.

The following 10 pairs of parts of speech are connected with `csubj:cleft`: [ga-pos/ADP]()-[ga-pos/VERB]() (22; 32% instances), [ga-pos/NOUN]()-[ga-pos/VERB]() (20; 29% instances), [ga-pos/PRON]()-[ga-pos/VERB]() (7; 10% instances), [ga-pos/ADJ]()-[ga-pos/VERB]() (5; 7% instances), [ga-pos/AUX]()-[ga-pos/VERB]() (3; 4% instances), [ga-pos/PROPN]()-[ga-pos/VERB]() (3; 4% instances), [ga-pos/VERB]()-[ga-pos/VERB]() (3; 4% instances), [ga-pos/ADV]()-[ga-pos/VERB]() (2; 3% instances), [ga-pos/X]()-[ga-pos/VERB]() (2; 3% instances), [ga-pos/SCONJ]()-[ga-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj:cleft	color:blue
1	Ní	is	AUX	Cop	Polarity=Neg|Tense=Pres|VerbForm=Cop	2	cop	_	_
2	mar	mar	ADP	Simp	_	0	root	_	_
3	sin	sin	PRON	Dem	PronType=Dem	2	nmod	_	_
4	atá	bí	VERB	PresInd	Mood=Ind|PronType=Rel|Tense=Pres	2	csubj:cleft	_	_
5	áfach	áfach	ADV	Gn	_	2	advmod	_	SpaceAfter=No
6	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj:cleft	color:blue
1	Seandúshlán	dúshlán	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
2	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	mhí-áidh	mí-ádh	NOUN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	1	compound	_	_
4	a	a	PART	Vb	PartType=Vb|PronType=Rel	5	mark:prt	_	_
5	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	1	csubj:cleft	_	_
6	ann	i	ADP	Prep	Gender=Masc|Number=Sing|Person=3	5	xcomp:pred	_	SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj:cleft	color:blue
1	'	'	PUNCT	Punct	_	2	punct	_	SpaceAfter=No
2	Cén	cé	PRON	Q	Number=Sing|PronType=Int	0	root	_	_
3	diabhal	diabhal	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	2	xcomp:pred	_	_
4	útamála	útamáil	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	3	compound	_	_
5	atá	bí	VERB	PresInd	Mood=Ind|PronType=Rel|Tense=Pres	2	csubj:cleft	_	_
6	ar	ar	ADP	Simp	_	7	case	_	_
7	siúl	siúl	NOUN	Noun	VerbForm=Inf	5	xcomp	_	_
8	ansin	ansin	ADV	Loc	_	5	advmod	_	_
9	thíos	thíos	ADV	Dir	_	5	advmod	_	SpaceAfter=No
10	?	?	PUNCT	?	_	2	punct	_	_

~~~


