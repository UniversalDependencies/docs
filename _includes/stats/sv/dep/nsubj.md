

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: [nsubj:pass]().

5901 nodes (8%) are attached to their parents as `nsubj`.

4894 instances of `nsubj` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.58312150482969.

The following 30 pairs of parts of speech are connected with `nsubj`: [sv-pos/VERB]()-[sv-pos/PRON]() (2398; 41% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (2199; 37% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (358; 6% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (210; 4% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (195; 3% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (168; 3% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (162; 3% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (70; 1% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (34; 1% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (17; 0% instances), [sv-pos/PRON]()-[sv-pos/PRON]() (13; 0% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (10; 0% instances), [sv-pos/VERB]()-[sv-pos/NUM]() (10; 0% instances), [sv-pos/ADV]()-[sv-pos/NOUN]() (9; 0% instances), [sv-pos/VERB]()-[sv-pos/DET]() (8; 0% instances), [sv-pos/ADJ]()-[sv-pos/PROPN]() (7; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (7; 0% instances), [sv-pos/NUM]()-[sv-pos/NOUN]() (5; 0% instances), [sv-pos/ADP]()-[sv-pos/NOUN]() (4; 0% instances), [sv-pos/ADV]()-[sv-pos/PRON]() (4; 0% instances), [sv-pos/DET]()-[sv-pos/DET]() (2; 0% instances), [sv-pos/NUM]()-[sv-pos/NUM]() (2; 0% instances), [sv-pos/PROPN]()-[sv-pos/NOUN]() (2; 0% instances), [sv-pos/ADP]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/DET]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADP]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/NUM]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/PUNCT]()-[sv-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nsubj	color:blue
1	Bördan	börda	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	dislocated	_	_
2	att	att	PART	IE	_	3	mark	_	_
3	fostra	fostra	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	1	acl	_	_
4	barn	barn	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	3	obj	_	_
5	-	-	PUNCT	MID	_	1	punct	_	_
6	uttrycket	uttryck	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	7	nsubj	_	_
7	låter	låta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	negativt	negativ	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	7	xcomp	_	SpaceAfter=No
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
7	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	livlösa	livlös	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	3	advcl	_	SpaceAfter=No
9	.	.	PUNCT	MAD	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: [nsubj:pass]().

5504 nodes (8%) are attached to their parents as `nsubj`.

4511 instances of `nsubj` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.10828488372093.

The following 36 pairs of parts of speech are connected with `nsubj`: [sv-pos/VERB]()-[sv-pos/PRON]() (2954; 54% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (1105; 20% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (636; 12% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (170; 3% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (152; 3% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (139; 3% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (65; 1% instances), [sv-pos/AUX]()-[sv-pos/PRON]() (49; 1% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (38; 1% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (36; 1% instances), [sv-pos/PRON]()-[sv-pos/PRON]() (35; 1% instances), [sv-pos/ADJ]()-[sv-pos/PROPN]() (24; 0% instances), [sv-pos/ADV]()-[sv-pos/PRON]() (21; 0% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (12; 0% instances), [sv-pos/AUX]()-[sv-pos/NOUN]() (11; 0% instances), [sv-pos/PROPN]()-[sv-pos/PRON]() (9; 0% instances), [sv-pos/ADV]()-[sv-pos/NOUN]() (8; 0% instances), [sv-pos/AUX]()-[sv-pos/PROPN]() (7; 0% instances), [sv-pos/PRON]()-[sv-pos/PROPN]() (6; 0% instances), [sv-pos/VERB]()-[sv-pos/NUM]() (6; 0% instances), [sv-pos/ADV]()-[sv-pos/PROPN]() (4; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (2; 0% instances), [sv-pos/PROPN]()-[sv-pos/NOUN]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/ADP]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/ADP]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/AUX]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/PART]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/PUNCT]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/SYM]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	Du	_	PRON	PERS-P2SG-NOM	_	4	nsubj	_	_
2	kan	_	AUX	PRES-AUX	_	4	aux	_	_
3	bara	_	ADV	_	_	4	advmod	_	_
4	importera	_	VERB	INF-ACT	_	0	root	_	_
5	ett	_	DET	SG-IND	_	6	det	_	_
6	dokument	_	NOUN	IND-NOM	_	4	obj	_	_
7	i	_	ADP	_	_	8	case	_	_
8	taget	_	NOUN	SG-DEF-NOM	_	6	nmod	_	_
9	till	_	ADP	_	_	10	case	_	_
10	Access	_	PROPN	SG-NOM	_	4	obl	_	SpaceAfter=No
11	.	_	PUNCT	Period	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj	color:blue
1	Mer	_	ADJ	CMP-IND	_	2	amod	_	_
2	information	_	NOUN	SG-IND-NOM	_	5	nsubj	_	_
3	om	_	ADP	_	_	4	case	_	_
4	XML	_	PROPN	SG-NOM	_	2	nmod	_	_
5	finns	_	VERB	PRES-DPO	_	0	root	_	_
6	på	_	ADP	_	_	7	case	_	_
7	webbplatsen	_	NOUN	SG-DEF-NOM	_	5	obl	_	SpaceAfter=No
8	.	_	PUNCT	Period	_	5	punct	_	_

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
4	XSD	_	PROPN	SG-NOM	_	2	obj	_	SpaceAfter=No
5	.	_	PUNCT	Period	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish_Sign_Language)

This relation is universal.

42 nodes (11%) are attached to their parents as `nsubj`.

38 instances of `nsubj` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.69047619047619.

The following 9 pairs of parts of speech are connected with `nsubj`: [sv-pos/VERB]()-[sv-pos/NOUN]() (28; 67% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (6; 14% instances), [sv-pos/X]()-[sv-pos/NOUN]() (2; 5% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (1; 2% instances), [sv-pos/ADV]()-[sv-pos/PRON]() (1; 2% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (1; 2% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (1; 2% instances), [sv-pos/VERB]()-[sv-pos/X]() (1; 2% instances), [sv-pos/X]()-[sv-pos/PRON]() (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj	color:blue
1	FORM(YYb)+BESKRIVNING@p	_	VERB	VBAV	_	5	nmod	_	_
2	FORM(Yb)@p@hd	_	VERB	VBAV	_	1	dep	_	_
3	INUTI	_	VERB	VBPP	_	1	case	_	_
4	GRODA	_	NOUN	NN	_	5	nsubj	_	_
5	STANNA-KVAR	_	VERB	VB	_	0	root	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	pro@&	_	PRON	?PN	_	2	nsubj	_	_
2	SIMMA@rd	_	VERB	VB	_	0	root	_	_
3	TITTA-PÅ	_	VERB	VB	_	2	conj	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	MAMMA	_	NOUN	NN	_	3	nsubj	_	_
2	JA@ub@z	_	INTJ	INTERJ	_	3	discourse	_	_
3	PÅKALLA-UPPMÄRKSAMHET@g	_	X	G	_	0	root	_	_

~~~


