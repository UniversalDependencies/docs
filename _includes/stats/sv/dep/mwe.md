

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

1751 nodes (2%) are attached to their parents as `mwe`.

1751 instances of `mwe` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.34151913192461.

The following 53 pairs of parts of speech are connected with `mwe`: [sv-pos/ADP]()-[sv-pos/NOUN]() (570; 33% instances), [sv-pos/ADP]()-[sv-pos/ADP]() (192; 11% instances), [sv-pos/ADV]()-[sv-pos/ADV]() (138; 8% instances), [sv-pos/ADV]()-[sv-pos/SCONJ]() (93; 5% instances), [sv-pos/ADP]()-[sv-pos/ADJ]() (76; 4% instances), [sv-pos/ADV]()-[sv-pos/CONJ]() (74; 4% instances), [sv-pos/ADP]()-[sv-pos/ADV]() (63; 4% instances), [sv-pos/DET]()-[sv-pos/ADV]() (47; 3% instances), [sv-pos/ADP]()-[sv-pos/PRON]() (40; 2% instances), [sv-pos/ADP]()-[sv-pos/SCONJ]() (40; 2% instances), [sv-pos/ADP]()-[sv-pos/DET]() (37; 2% instances), [sv-pos/ADV]()-[sv-pos/VERB]() (35; 2% instances), [sv-pos/PRON]()-[sv-pos/PRON]() (35; 2% instances), [sv-pos/ADV]()-[sv-pos/PRON]() (32; 2% instances), [sv-pos/PRON]()-[sv-pos/CONJ]() (32; 2% instances), [sv-pos/ADV]()-[sv-pos/ADP]() (27; 2% instances), [sv-pos/DET]()-[sv-pos/ADJ]() (24; 1% instances), [sv-pos/ADP]()-[sv-pos/CONJ]() (19; 1% instances), [sv-pos/ADV]()-[sv-pos/ADJ]() (19; 1% instances), [sv-pos/ADJ]()-[sv-pos/ADP]() (18; 1% instances), [sv-pos/PRON]()-[sv-pos/ADP]() (16; 1% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (10; 1% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (9; 1% instances), [sv-pos/PRON]()-[sv-pos/ADV]() (8; 0% instances), [sv-pos/DET]()-[sv-pos/CONJ]() (7; 0% instances), [sv-pos/DET]()-[sv-pos/NOUN]() (7; 0% instances), [sv-pos/ADV]()-[sv-pos/NOUN]() (6; 0% instances), [sv-pos/CONJ]()-[sv-pos/ADV]() (6; 0% instances), [sv-pos/CONJ]()-[sv-pos/PRON]() (6; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADP]() (6; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADV]() (5; 0% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (5; 0% instances), [sv-pos/ADJ]()-[sv-pos/CONJ]() (4; 0% instances), [sv-pos/ADP]()-[sv-pos/PART]() (4; 0% instances), [sv-pos/NUM]()-[sv-pos/CONJ]() (4; 0% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (3; 0% instances), [sv-pos/ADV]()-[sv-pos/PART]() (3; 0% instances), [sv-pos/CONJ]()-[sv-pos/NOUN]() (3; 0% instances), [sv-pos/INTJ]()-[sv-pos/INTJ]() (3; 0% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (3; 0% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (3; 0% instances), [sv-pos/ADJ]()-[sv-pos/SCONJ]() (2; 0% instances), [sv-pos/CONJ]()-[sv-pos/ADJ]() (2; 0% instances), [sv-pos/CONJ]()-[sv-pos/CONJ]() (2; 0% instances), [sv-pos/DET]()-[sv-pos/DET]() (2; 0% instances), [sv-pos/NUM]()-[sv-pos/ADJ]() (2; 0% instances), [sv-pos/NUM]()-[sv-pos/DET]() (2; 0% instances), [sv-pos/PROPN]()-[sv-pos/NOUN]() (2; 0% instances), [sv-pos/ADP]()-[sv-pos/VERB]() (1; 0% instances), [sv-pos/ADV]()-[sv-pos/INTJ]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 mwe	color:blue
1	Skiljer	skilja	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	de	de	PRON	PN|UTR/NEU|PLU|DEF|SUB	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	1	nsubj	_	_
3	sig	sig	PRON	PN|UTR/NEU|SIN/PLU|DEF|OBJ	Case=Acc|Definite=Def|PronType=Prs	1	dobj	_	_
4	från	från	ADP	PP	_	5	case	_	_
5	andra	annan	PRON	PN|UTR/NEU|PLU|IND|SUB/OBJ	Definite=Ind|Number=Plur|PronType=Ind	1	nmod	_	_
6	och	och	CONJ	KN	_	1	cc	_	_
7	i	i	ADP	PP	_	1	conj	_	_
8	så	så	ADV	AB	_	7	mwe	_	_
9	fall	fall	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	7	mwe	_	_
10	på	på	ADP	PP	_	12	case	_	_
11	vilket	vilken	DET	HD|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Int	12	det	_	_
12	sätt	sätt	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	7	nmod	_	_
13	?	?	PUNCT	MAD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 mwe	color:blue
1	Bidragsbeloppen	bidragsbelopp	NOUN	NN|NEU|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Plur	2	nsubjpass	_	_
2	minskas	minska	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
3	med	med	ADP	PP	_	9	case	_	_
4	hänsyn	hänsyn	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	3	mwe	_	_
5	till	till	ADP	PP	_	3	mwe	_	_
6	egen	egen	ADJ	JJ|POS|UTR|SIN|IND/DEF|NOM	Case=Nom|Degree=Pos|Gender=Com|Number=Sing	9	det	_	_
7	och	och	CONJ	KN	_	6	cc	_	_
8	makes	make	NOUN	NN|UTR|SIN|IND|GEN	Case=Gen|Definite=Ind|Gender=Com|Number=Sing	6	conj	_	_
9	inkomst	inkomst	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	nmod	_	_
10	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 mwe	color:blue
1	Han	han	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	_	_
2	sammanfattar	sammanfatta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	resultaten	resultat	NOUN	NN|NEU|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Plur	2	dobj	_	_
4	så	så	ADV	AB	_	2	advmod	_	_
5	här	här	ADV	AB	_	4	mwe	_	_
6	:	:	PUNCT	MAD	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.

474 nodes (1%) are attached to their parents as `mwe`.

474 instances of `mwe` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.20464135021097.

The following 25 pairs of parts of speech are connected with `mwe`: [sv-pos/ADV]()-[sv-pos/NOUN]() (82; 17% instances), [sv-pos/DET]()-[sv-pos/ADV]() (72; 15% instances), [sv-pos/ADP]()-[sv-pos/ADP]() (69; 15% instances), [sv-pos/ADP]()-[sv-pos/SCONJ]() (53; 11% instances), [sv-pos/PRON]()-[sv-pos/ADV]() (38; 8% instances), [sv-pos/ADV]()-[sv-pos/ADV]() (33; 7% instances), [sv-pos/ADP]()-[sv-pos/NOUN]() (24; 5% instances), [sv-pos/SCONJ]()-[sv-pos/SCONJ]() (18; 4% instances), [sv-pos/ADV]()-[sv-pos/ADP]() (13; 3% instances), [sv-pos/ADV]()-[sv-pos/ADJ]() (11; 2% instances), [sv-pos/ADV]()-[sv-pos/CONJ]() (10; 2% instances), [sv-pos/ADV]()-[sv-pos/VERB]() (10; 2% instances), [sv-pos/PRON]()-[sv-pos/ADP]() (9; 2% instances), [sv-pos/CONJ]()-[sv-pos/PRON]() (6; 1% instances), [sv-pos/PROPN]()-[sv-pos/PROPN]() (4; 1% instances), [sv-pos/ADV]()-[sv-pos/PART]() (3; 1% instances), [sv-pos/ADV]()-[sv-pos/PRON]() (3; 1% instances), [sv-pos/PROPN]()-[sv-pos/NOUN]() (3; 1% instances), [sv-pos/SCONJ]()-[sv-pos/ADP]() (3; 1% instances), [sv-pos/ADV]()-[sv-pos/DET]() (2; 0% instances), [sv-pos/PART]()-[sv-pos/ADV]() (2; 0% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (2; 0% instances), [sv-pos/PRON]()-[sv-pos/PRON]() (2; 0% instances), [sv-pos/ADP]()-[sv-pos/CONJ]() (1; 0% instances), [sv-pos/SCONJ]()-[sv-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 mwe	color:blue
1	"	_	PUNCT	Quote	_	4	punct	_	_
2	Men	_	CONJ	_	_	4	cc	_	_
3	varför	_	ADV	WH	_	4	advmod	_	_
4	ger	_	VERB	PRES-ACT	_	0	root	_	_
5	du	_	PRON	PERS-P2SG-NOM	_	4	nsubj	_	_
6	dig	_	PRON	RFL-SG-ACC	_	4	dobj	_	_
7	inte	_	PART	NEG	_	4	neg	_	_
8	i	_	ADV	_	_	4	advmod	_	_
9	väg	_	NOUN	_	_	8	mwe	_	_
10	?	_	PUNCT	QuestionMark	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 mwe	color:blue
1	Hyperlänken	_	NOUN	SG-DEF-NOM	_	6	nsubj	_	_
2	i	_	ADP	_	_	5	case	_	_
3	det	_	DET	DEM-SG	_	5	det	_	_
4	här	_	ADV	DEM-SG	_	3	mwe	_	_
5	avsnittet	_	NOUN	SG-DEF-NOM	_	1	nmod	_	_
6	leder	_	VERB	PRES-ACT	_	0	root	_	_
7	till	_	ADP	_	_	8	case	_	_
8	webben	_	NOUN	SG-DEF-NOM	_	6	nmod	_	_
9	.	_	PUNCT	Period	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 mwe	color:blue
1	"	_	PUNCT	Quote	_	10	punct	_	_
2	När	_	SCONJ	_	_	4	mark	_	_
3	du	_	PRON	PERS-P2SG-NOM	_	4	nsubj	_	_
4	kliver	_	VERB	PRES-ACT	_	10	advcl	_	_
5	in	_	ADP	_	_	7	case	_	_
6	i	_	ADP	_	_	5	mwe	_	_
7	elden	_	NOUN	SG-DEF-NOM	_	4	nmod	_	_
8	,	_	PUNCT	Comma	_	4	punct	_	_
9	så	_	ADV	_	_	10	advmod	_	_
10	säg	_	VERB	IMP-ACT	_	0	root	_	_
11	vart	_	ADV	WH	_	13	mark	_	_
12	du	_	PRON	PERS-P2SG-NOM	_	13	nsubj	_	_
13	ska	_	AUX	PRES-AUX	_	10	ccomp	_	_
14	"	_	PUNCT	Quote	_	10	punct	_	_

~~~


