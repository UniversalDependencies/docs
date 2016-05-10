

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

7580 nodes (8%) are attached to their parents as `nsubj`.

6319 instances of `nsubj` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.58258575197889.

The following 34 pairs of parts of speech are connected with `nsubj`: [sv-pos/VERB]()-[sv-pos/PRON]() (3031; 40% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (2852; 38% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (484; 6% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (270; 4% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (254; 3% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (213; 3% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (210; 3% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (86; 1% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (39; 1% instances), [sv-pos/PRON]()-[sv-pos/PRON]() (19; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (18; 0% instances), [sv-pos/VERB]()-[sv-pos/NUM]() (16; 0% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (15; 0% instances), [sv-pos/ADV]()-[sv-pos/NOUN]() (10; 0% instances), [sv-pos/ADJ]()-[sv-pos/PROPN]() (9; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (8; 0% instances), [sv-pos/NUM]()-[sv-pos/NOUN]() (8; 0% instances), [sv-pos/VERB]()-[sv-pos/DET]() (8; 0% instances), [sv-pos/ADV]()-[sv-pos/PRON]() (6; 0% instances), [sv-pos/ADP]()-[sv-pos/NOUN]() (5; 0% instances), [sv-pos/ADP]()-[sv-pos/PRON]() (2; 0% instances), [sv-pos/DET]()-[sv-pos/DET]() (2; 0% instances), [sv-pos/NOUN]()-[sv-pos/NUM]() (2; 0% instances), [sv-pos/NUM]()-[sv-pos/NUM]() (2; 0% instances), [sv-pos/PROPN]()-[sv-pos/NOUN]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/NUM]() (1; 0% instances), [sv-pos/DET]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADP]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/DET]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (1; 0% instances), [sv-pos/PROPN]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/PUNCT]()-[sv-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj	color:blue
1	'	'	PUNCT	PAD	_	4	punct	_	_
2	Du	du	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	4	nsubj	_	_
3	skall	skola	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	lyda	lyda	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	_	_
5	din	du	DET	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	6	nmod:poss	_	_
6	fader	far	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	dobj	_	_
7	.	.	PUNCT	MAD	_	4	punct	_	_
8	'	'	PUNCT	PAD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nsubj	color:blue
1	Bördan	börda	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	dislocated	_	_
2	att	att	PART	IE	_	3	mark	_	_
3	fostra	fostra	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	1	acl	_	_
4	barn	barn	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	3	dobj	_	_
5	-	-	PUNCT	MID	_	1	punct	_	_
6	uttrycket	uttryck	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	7	nsubj	_	_
7	låter	låta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	negativt	negativ	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	7	xcomp	_	_
9	.	.	PUNCT	MAD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nsubj	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	nsubj	_	_
2	har	ha	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	blivit	bli	VERB	VB|SUP|AKT	VerbForm=Sup|Voice=Act	0	root	_	_
4	så	så	ADV	AB	_	3	advmod	_	_
5	att	att	SCONJ	SN	_	8	mark	_	_
6	kvinnorna	kvinna	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	8	nsubj	_	_
7	är	vara	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	livlösa	livlös	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	3	advcl	_	_
9	.	.	PUNCT	MAD	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.

6816 nodes (9%) are attached to their parents as `nsubj`.

5590 instances of `nsubj` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.13028169014085.

The following 41 pairs of parts of speech are connected with `nsubj`: [sv-pos/VERB]()-[sv-pos/PRON]() (3665; 54% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (1370; 20% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (792; 12% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (217; 3% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (171; 3% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (170; 2% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (66; 1% instances), [sv-pos/AUX]()-[sv-pos/PRON]() (60; 1% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (51; 1% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (45; 1% instances), [sv-pos/PRON]()-[sv-pos/PRON]() (40; 1% instances), [sv-pos/ADJ]()-[sv-pos/PROPN]() (33; 0% instances), [sv-pos/ADV]()-[sv-pos/PRON]() (23; 0% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (16; 0% instances), [sv-pos/PROPN]()-[sv-pos/PRON]() (14; 0% instances), [sv-pos/ADP]()-[sv-pos/NOUN]() (10; 0% instances), [sv-pos/ADV]()-[sv-pos/NOUN]() (8; 0% instances), [sv-pos/AUX]()-[sv-pos/NOUN]() (7; 0% instances), [sv-pos/AUX]()-[sv-pos/PROPN]() (7; 0% instances), [sv-pos/PRON]()-[sv-pos/PROPN]() (7; 0% instances), [sv-pos/VERB]()-[sv-pos/NUM]() (7; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (6; 0% instances), [sv-pos/ADP]()-[sv-pos/PRON]() (6; 0% instances), [sv-pos/ADV]()-[sv-pos/PROPN]() (4; 0% instances), [sv-pos/ADP]()-[sv-pos/PROPN]() (2; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (2; 0% instances), [sv-pos/NUM]()-[sv-pos/PROPN]() (2; 0% instances), [sv-pos/PART]()-[sv-pos/PRON]() (2; 0% instances), [sv-pos/AUX]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/CONJ]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/INTJ]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/NUM]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/PROPN]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/PUNCT]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/SCONJ]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/SYM]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/SCONJ]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Det	_	PRON	PERS-P3SG	_	2	nsubj	_	_
2	innebär	_	VERB	PRES-ACT	_	0	root	_	_
3	:	_	PUNCT	Colon	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	Villkorsstyrda	_	ADJ	POS-PL-IND	_	2	amod	_	_
2	filter	_	NOUN	IND-NOM	_	3	nsubj	_	_
3	fungerar	_	VERB	PRES-ACT	_	0	root	_	_
4	oberoende	_	VERB	NDE	_	3	advcl	_	_
5	av	_	ADP	_	_	6	case	_	_
6	varandra	_	PRON	RCP-PL-ACC	_	4	nmod	_	_
7	.	_	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Access	_	PROPN	SG-NOM	_	2	nsubj	_	_
2	stöder	_	VERB	PRES-ACT	_	0	root	_	_
3	XML-schemastandarden	_	NOUN	SG-DEF-NOM	_	4	nmod	_	_
4	XSD	_	PROPN	SG-NOM	_	2	dobj	_	_
5	.	_	PUNCT	Period	_	2	punct	_	_

~~~


