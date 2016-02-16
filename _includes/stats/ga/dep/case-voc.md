

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is a language-specific subtype of [case]().

21 nodes (0%) are attached to their parents as `case:voc`.

21 instances of `case:voc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.0952380952381.

The following 2 pairs of parts of speech are connected with `case:voc`: [ga-pos/NOUN]()-[ga-pos/PART]() (11; 52% instances), [ga-pos/PROPN]()-[ga-pos/PART]() (10; 48% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 case:voc	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case:voc	color:blue
1	'	'	PUNCT	Punct	_	2	punct	_	_
2	Slán	slán	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	0	root	_	_
3	leat	le	ADP	Prep	Number=Sing|Person=2	2	nmod:prep	_	_
4	,	,	PUNCT	Punct	_	2	punct	_	_
5	a	a	PART	Voc	PartType=Voc	6	case:voc	_	_
6	Dhoráid	Dhoráid	PROPN	Noun	Case=Voc|Gender=Masc|Number=Sing	2	vocative	_	_
7	!	!	PUNCT	!	_	2	punct	_	_

~~~


