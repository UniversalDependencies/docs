

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

1259 nodes (6%) are attached to their parents as `nsubj`.

860 instances of `nsubj` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.91739475774424.

The following 46 pairs of parts of speech are connected with `nsubj`: [lv-pos/VERB]()-[lv-pos/NOUN]() (556; 44% instances), [lv-pos/VERB]()-[lv-pos/PROPN]() (189; 15% instances), [lv-pos/VERB]()-[lv-pos/PRON]() (166; 13% instances), [lv-pos/VERB]()-[lv-pos/SCONJ]() (65; 5% instances), [lv-pos/ADJ]()-[lv-pos/NOUN]() (47; 4% instances), [lv-pos/NOUN]()-[lv-pos/PRON]() (39; 3% instances), [lv-pos/NOUN]()-[lv-pos/NOUN]() (33; 3% instances), [lv-pos/PRON]()-[lv-pos/NOUN]() (13; 1% instances), [lv-pos/PROPN]()-[lv-pos/NOUN]() (13; 1% instances), [lv-pos/PUNCT]()-[lv-pos/NOUN]() (13; 1% instances), [lv-pos/ADJ]()-[lv-pos/PRON]() (12; 1% instances), [lv-pos/NOUN]()-[lv-pos/PROPN]() (11; 1% instances), [lv-pos/VERB]()-[lv-pos/SYM]() (9; 1% instances), [lv-pos/VERB]()-[lv-pos/VERB]() (9; 1% instances), [lv-pos/VERB]()-[lv-pos/X]() (8; 1% instances), [lv-pos/ADV]()-[lv-pos/PRON]() (6; 0% instances), [lv-pos/NOUN]()-[lv-pos/SCONJ]() (6; 0% instances), [lv-pos/NUM]()-[lv-pos/NOUN]() (6; 0% instances), [lv-pos/SYM]()-[lv-pos/NOUN]() (5; 0% instances), [lv-pos/NOUN]()-[lv-pos/SYM]() (4; 0% instances), [lv-pos/PUNCT]()-[lv-pos/PROPN]() (4; 0% instances), [lv-pos/SCONJ]()-[lv-pos/NOUN]() (4; 0% instances), [lv-pos/VERB]()-[lv-pos/NUM]() (4; 0% instances), [lv-pos/ADJ]()-[lv-pos/SCONJ]() (3; 0% instances), [lv-pos/NOUN]()-[lv-pos/NUM]() (3; 0% instances), [lv-pos/VERB]()-[lv-pos/ADJ]() (3; 0% instances), [lv-pos/ADJ]()-[lv-pos/VERB]() (2; 0% instances), [lv-pos/ADV]()-[lv-pos/NOUN]() (2; 0% instances), [lv-pos/ADV]()-[lv-pos/VERB]() (2; 0% instances), [lv-pos/NOUN]()-[lv-pos/X]() (2; 0% instances), [lv-pos/NUM]()-[lv-pos/SYM]() (2; 0% instances), [lv-pos/PRON]()-[lv-pos/PRON]() (2; 0% instances), [lv-pos/PROPN]()-[lv-pos/PRON]() (2; 0% instances), [lv-pos/PUNCT]()-[lv-pos/X]() (2; 0% instances), [lv-pos/ADJ]()-[lv-pos/ADV]() (1; 0% instances), [lv-pos/ADJ]()-[lv-pos/PROPN]() (1; 0% instances), [lv-pos/ADV]()-[lv-pos/SCONJ]() (1; 0% instances), [lv-pos/NOUN]()-[lv-pos/ADJ]() (1; 0% instances), [lv-pos/NOUN]()-[lv-pos/VERB]() (1; 0% instances), [lv-pos/NUM]()-[lv-pos/PRON]() (1; 0% instances), [lv-pos/NUM]()-[lv-pos/PROPN]() (1; 0% instances), [lv-pos/NUM]()-[lv-pos/VERB]() (1; 0% instances), [lv-pos/PRON]()-[lv-pos/VERB]() (1; 0% instances), [lv-pos/PROPN]()-[lv-pos/PROPN]() (1; 0% instances), [lv-pos/PUNCT]()-[lv-pos/VERB]() (1; 0% instances), [lv-pos/X]()-[lv-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj	color:blue
1	''	"	PUNCT	zq	_	3	punct	_	SpaceAfter=No
2	Dienas	diena	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	_
3	Bizness	bizness	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	SpaceAfter=No
4	''	"	PUNCT	zq	_	3	punct	_	_
5	iepazīstina	iepazīstināt	VERB	vmnipt330an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	ar	ar	ADP	sppdn	_	9	case	_	_
7	SIA	SIA	PROPN	y	_	9	nmod	_	_
8	"	"	PUNCT	zq	_	9	punct	_	SpaceAfter=No
9	Movers	Movers	PROPN	npmsn1	Case=Nom|Gender=Masc|Number=Sing	5	dobj	_	SpaceAfter=No
10	"	"	PUNCT	zq	_	9	punct	_	SpaceAfter=No
11	.	.	PUNCT	zs	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj	color:blue
1	Dienas	diena	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
2	Bizness	bizness	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	6	parataxis	_	SpaceAfter=No
3	:	:	PUNCT	zo	_	2	punct	_	_
4	PF	PF	PROPN	y	_	5	nmod	_	_
5	Ķekava	Ķekava	PROPN	npfsn4	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	_
6	saķeras	saķerties	VERB	vmyipi130an	Mood=Ind|Negative=Neg|Person=3|Reflex=Yes|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	ar	ar	ADP	spsan	_	8	case	_	_
8	Nordea	Nordea	PROPN	np_sa0	Case=Acc|Number=Sing	6	dobj	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Tā	tā	PRON	pd0fsnn	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	2	nsubj	_	_
2	sāks	sākt	VERB	vpnift130an	Mood=Ind|Negative=Neg|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
3	strādāt	strādāt	VERB	vmnn0t2000n	Negative=Neg|VerbForm=Inf	2	xcomp	_	_
4	2013.	2013.	ADJ	xo	NumType=Ord	5	amod	_	SpaceAfter=No
5	gada	gads	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	_
6	aprīlī	aprīlis	NOUN	ncmsl2	Case=Loc|Gender=Masc|Number=Sing	2	nmod	_	SpaceAfter=No
7	.	.	PUNCT	zs	_	2	punct	_	_

~~~


