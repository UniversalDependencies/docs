

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is a language-specific subtype of [nmod]().

163 nodes (0%) are attached to their parents as `nmod:poss`.

163 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25153374233129.

The following 6 pairs of parts of speech are connected with `nmod:poss`: [et-pos/NOUN]()-[et-pos/PRON]() (152; 93% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (6; 4% instances), [et-pos/PRON]()-[et-pos/PRON]() (2; 1% instances), [et-pos/ADV]()-[et-pos/PRON]() (1; 1% instances), [et-pos/NOUN]()-[et-pos/PROPN]() (1; 1% instances), [et-pos/PROPN]()-[et-pos/PRON]() (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Tema	tema	PRON	P	Case=Gen|Number=Sing|Person=3|PronType=Prs	2	nmod:poss	_	_
2	kõri	kõri	NOUN	S	Case=Nom|Number=Sing	4	obj	_	_
3	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	_	_
4	loodud	looma	VERB	V	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
5	teistsuguse	teist_sugune	DET	P	Case=Gen|Number=Sing|PronType=Dem	6	det	_	_
6	hääle	hääl	NOUN	S	Case=Gen|Number=Sing	7	nmod	_	_
7	tegemiseks	tegemine	NOUN	S	Case=Tra|Number=Sing	4	obl	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:poss	color:blue
1	Poodiumi	poodium	NOUN	S	Case=Gen|Number=Sing	3	nmod:poss	_	_
2	madalaima	madalaim	ADJ	A	Case=Gen|Degree=Sup|Number=Sing	3	amod	_	_
3	koha	koht	NOUN	S	Case=Gen|Number=Sing	4	obj	_	_
4	hõivas	hõivama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	Fortec	Fortec	PROPN	S	Case=Nom|Number=Sing	7	obj	_	_
6	Motosporti	moto_sport	NOUN	S	Case=Par|Number=Sing	5	flat	_	_
7	esindav	esindav	ADJ	A	Case=Nom|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	8	acl	_	_
8	britt	britt	NOUN	S	Case=Nom|Number=Sing	9	nmod	_	_
9	Greg	Greg	PROPN	S	Case=Nom|Number=Sing	4	nsubj	_	_
10	Mansell	Mansell	PROPN	S	Case=Nom|Number=Sing	9	flat	_	SpaceAfter=No
11	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Tema	tema	PRON	P	Case=Gen|Number=Sing|Person=3|PronType=Prs	2	nmod:poss	_	_
2	oma	oma	PRON	P	Case=Nom|Number=Sing|Poss=Yes|PronType=Prs	4	nsubj:cop	_	_
3	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	_
4	69	69	NUM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Z	_	9	punct	_	_
6	otse	otse	ADV	D	_	8	advmod	_	_
7	selle	see	PRON	P	Case=Gen|Number=Sing|PronType=Dem	9	obl	_	_
8	kõrval	kõrval	ADP	K	AdpType=Post	7	case	_	_
9	70	70	NUM	N	NumForm=Digit|NumType=Card	4	conj	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	4	punct	_	_

~~~


