

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

3317 nodes (4%) are attached to their parents as `obj`.

3134 instances of `obj` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.29152848959904.

The following 14 pairs of parts of speech are connected with `obj`: [sv-pos/VERB]()-[sv-pos/NOUN]() (2669; 80% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (531; 16% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (37; 1% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (22; 1% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (13; 0% instances), [sv-pos/VERB]()-[sv-pos/NUM]() (13; 0% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (10; 0% instances), [sv-pos/VERB]()-[sv-pos/DET]() (7; 0% instances), [sv-pos/ADV]()-[sv-pos/NOUN]() (4; 0% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (4; 0% instances), [sv-pos/VERB]()-[sv-pos/INTJ]() (3; 0% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obj	color:blue
1	'	'	PUNCT	PAD	_	4	punct	_	SpaceAfter=No
2	Du	du	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	4	nsubj	_	_
3	skall	skola	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	lyda	lyda	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	_	_
5	din	du	DET	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	6	nmod:poss	_	_
6	fader	far	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	obj	_	SpaceAfter=No
7	.	.	PUNCT	MAD	_	4	punct	_	SpaceAfter=No
8	'	'	PUNCT	PAD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obj	color:blue
1	Skiljer	skilja	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	de	de	PRON	PN|UTR/NEU|PLU|DEF|SUB	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	1	nsubj	_	_
3	sig	sig	PRON	PN|UTR/NEU|SIN/PLU|DEF|OBJ	Case=Acc|Definite=Def|PronType=Prs	1	obj	_	_
4	från	från	ADP	PP	_	5	case	_	_
5	andra	annan	PRON	PN|UTR/NEU|PLU|IND|SUB/OBJ	Definite=Ind|Number=Plur|PronType=Ind	1	obl	_	_
6	och	och	CCONJ	KN	_	7	cc	_	_
7	i	i	ADP	PP	_	1	conj	_	_
8	så	så	ADV	AB	_	7	fixed	_	_
9	fall	fall	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	7	fixed	_	_
10	på	på	ADP	PP	_	12	case	_	_
11	vilket	vilken	DET	HD|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Int	12	det	_	_
12	sätt	sätt	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	7	obl	_	SpaceAfter=No
13	?	?	PUNCT	MAD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obj	color:blue
1	Lagens	lag	NOUN	NN|UTR|SIN|DEF|GEN	Case=Gen|Definite=Def|Gender=Com|Number=Sing	2	nmod:poss	_	_
2	bestämmelser	bestämmelse	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	3	nsubj	_	_
3	innebär	innebära	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	bl.a.	bl.a.	ADV	AB|AN	Abbr=Yes	3	advmod	_	_
5	följande	följande	ADJ	PC|PRS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Tense=Pres|VerbForm=Part	3	obj	_	SpaceAfter=No
6	.	.	PUNCT	MAD	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.

3350 nodes (5%) are attached to their parents as `obj`.

3178 instances of `obj` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.00477611940298.

The following 21 pairs of parts of speech are connected with `obj`: [sv-pos/VERB]()-[sv-pos/NOUN]() (2055; 61% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (1054; 31% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (130; 4% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (26; 1% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (19; 1% instances), [sv-pos/AUX]()-[sv-pos/PRON]() (14; 0% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (12; 0% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (11; 0% instances), [sv-pos/VERB]()-[sv-pos/INTJ]() (8; 0% instances), [sv-pos/VERB]()-[sv-pos/NUM]() (7; 0% instances), [sv-pos/AUX]()-[sv-pos/NOUN]() (3; 0% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/ADV]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/ADV]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/PUNCT]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/SCONJ]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/SYM]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/DET]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obj	color:blue
1	Importera	_	VERB	IMP-ACT	_	0	root	_	_
2	XML-data	_	NOUN	PL-IND-NOM	_	1	obj	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 obj	color:blue
1	Du	_	PRON	PERS-P2SG-NOM	_	3	nsubj	_	_
2	kan	_	AUX	PRES-AUX	_	3	aux	_	_
3	byta	_	VERB	INF-ACT	_	0	root	_	_
4	färg	_	NOUN	SG-IND-NOM	_	3	obj	_	_
5	på	_	ADP	_	_	7	case	_	_
6	en	_	DET	SG-IND	_	7	det	_	_
7	kontroll	_	NOUN	SG-IND-NOM	_	3	obl	_	_
8	eller	_	CCONJ	_	_	9	cc	_	_
9	göra	_	VERB	INF-ACT	_	3	conj	_	_
10	den	_	PRON	PERS-P3SG	_	9	obj	_	_
11	genomskinlig	_	ADJ	POS-SG-IND	_	9	xcomp	_	SpaceAfter=No
12	.	_	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obj	color:blue
1	Access	_	PROPN	SG-NOM	_	2	nsubj	_	_
2	stöder	_	VERB	PRES-ACT	_	0	root	_	_
3	XML-schemastandarden	_	NOUN	SG-DEF-NOM	_	4	nmod	_	_
4	XSD	_	PROPN	SG-NOM	_	2	obj	_	SpaceAfter=No
5	.	_	PUNCT	Period	_	2	punct	_	_

~~~


