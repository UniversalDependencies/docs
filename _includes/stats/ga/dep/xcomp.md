

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: [xcomp:pred]().

610 nodes (3%) are attached to their parents as `xcomp`.

598 instances of `xcomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.44918032786885.

The following 15 pairs of parts of speech are connected with `xcomp`: [ga-pos/VERB]()-[ga-pos/NOUN]() (395; 65% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (133; 22% instances), [ga-pos/VERB]()-[ga-pos/VERB]() (18; 3% instances), [ga-pos/ADJ]()-[ga-pos/NOUN]() (15; 2% instances), [ga-pos/PRON]()-[ga-pos/NOUN]() (13; 2% instances), [ga-pos/NOUN]()-[ga-pos/VERB]() (10; 2% instances), [ga-pos/PROPN]()-[ga-pos/NOUN]() (6; 1% instances), [ga-pos/X]()-[ga-pos/NOUN]() (5; 1% instances), [ga-pos/VERB]()-[ga-pos/ADP]() (4; 1% instances), [ga-pos/ADP]()-[ga-pos/NOUN]() (3; 0% instances), [ga-pos/SCONJ]()-[ga-pos/NOUN]() (3; 0% instances), [ga-pos/NOUN]()-[ga-pos/ADJ]() (2; 0% instances), [ga-pos/CONJ]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/DET]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 xcomp	color:blue
1	(	(	PUNCT	Punct	_	3	punct	_	_
2	Ag	ag	ADP	Simp	_	3	case	_	_
3	béicíl	béicíl	NOUN	Noun	VerbForm=Ger	5	xcomp	_	_
4	)	)	PUNCT	Punct	_	3	punct	_	_
5	Téigh	téigh	VERB	VTI	Mood=Imp|Number=Sing|Person=2	0	root	_	_
6	abhaile	abhaile	ADV	Dir	_	5	advmod	_	_
7	,	,	PUNCT	Punct	_	8	punct	_	_
8	a	a	PART	Voc	PartType=Voc	9	case:voc	_	_
9	bhithiúnaigh	bithiúnach	NOUN	Noun	Case=Voc|Form=Len|Gender=Masc|Number=Sing	5	vocative	_	_
10	!	!	PUNCT	!	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 xcomp	color:blue
1	Turas	turas	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	0	root	_	_
2	mí	mí	PROPN	Noun	Case=Gen|Form=HPref|Gender=Fem|Number=Sing	1	compound	_	_
3	le	le	ADP	Simp	_	4	case	_	_
4	fáil	fáil	NOUN	Noun	VerbForm=Inf	1	xcomp	_	_
5	ar	ar	ADP	Simp	_	7	case	_	_
6	sheasca	seasca	NUM	Num	Form=Len|NumType=Card	7	nummod	_	_
7	punt	punt	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	4	nmod	_	_
8	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 xcomp	color:blue
1	Ba	is	VERB	Cop	Tense=Past|VerbForm=Cop	2	cop	_	_
2	léir	léir	ADJ	Adj	Degree=Pos	0	root	_	_
3	go	go	PART	Vb	PartType=Cmpl	4	mark:prt	_	_
4	raibh	bí	VERB	PastInd	Form=Ecl|Mood=Ind|Tense=Past	2	csubj:cop	_	_
5	fhios	fios	NOUN	Noun	Case=Com|Form=Len|Gender=Masc|Number=Sing	4	nsubj	_	_
6	acu	ag	ADP	Prep	Number=Plur|Person=3	4	nmod:prep	_	_
7	cad	cad	PRON	Q	PronType=Int	10	nsubj	_	_
8	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	7	nmod	_	_
9	a	a	PART	Vb	PartType=Vb|PronType=Rel	10	mark:prt	_	_
10	tharla	tarlaigh	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	4	xcomp	_	_
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


