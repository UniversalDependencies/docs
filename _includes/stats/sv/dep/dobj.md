

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

4254 nodes (4%) are attached to their parents as `dobj`.

4023 instances of `dobj` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.28255759285378.

The following 19 pairs of parts of speech are connected with `dobj`: [sv-pos/VERB]()-[sv-pos/NOUN]() (3359; 79% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (712; 17% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (52; 1% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (33; 1% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (23; 1% instances), [sv-pos/VERB]()-[sv-pos/NUM]() (18; 0% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (14; 0% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (11; 0% instances), [sv-pos/VERB]()-[sv-pos/DET]() (10; 0% instances), [sv-pos/PROPN]()-[sv-pos/NOUN]() (6; 0% instances), [sv-pos/ADV]()-[sv-pos/NOUN]() (5; 0% instances), [sv-pos/VERB]()-[sv-pos/INTJ]() (3; 0% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 dobj	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 dobj	color:blue
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
# visual-style 3 5 dobj	color:blue
1	Olika	olik	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	2	amod	_	_
2	människor	människa	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	3	nsubj	_	_
3	har	ha	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	olika	olika	ADV	AB	_	5	advmod	_	_
5	lätt	lätt	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	3	dobj	_	_
6	att	att	PART	IE	_	7	mark	_	_
7	utstå	utstå	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	3	advcl	_	_
8	sådana	sån	PRON	PN|UTR/NEU|PLU|IND|SUB/OBJ	Definite=Ind|Number=Plur|PronType=Ind	7	dobj	_	_
9	.	.	PUNCT	MAD	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.

4167 nodes (5%) are attached to their parents as `dobj`.

3942 instances of `dobj` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.04559635229182.

The following 24 pairs of parts of speech are connected with `dobj`: [sv-pos/VERB]()-[sv-pos/NOUN]() (2537; 61% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (1301; 31% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (164; 4% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (40; 1% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (26; 1% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (19; 0% instances), [sv-pos/AUX]()-[sv-pos/PRON]() (17; 0% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (15; 0% instances), [sv-pos/VERB]()-[sv-pos/INTJ]() (14; 0% instances), [sv-pos/VERB]()-[sv-pos/NUM]() (10; 0% instances), [sv-pos/ADP]()-[sv-pos/NOUN]() (5; 0% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (3; 0% instances), [sv-pos/AUX]()-[sv-pos/NOUN]() (3; 0% instances), [sv-pos/ADV]()-[sv-pos/PRON]() (2; 0% instances), [sv-pos/VERB]()-[sv-pos/DET]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/ADP]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/ADP]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/PUNCT]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/SCONJ]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/SYM]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/PART]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 dobj	color:blue
1	Länka	_	VERB	IMP-ACT	_	0	root	_	_
2	en	_	DET	SG-IND	_	3	det	_	_
3	sida	_	NOUN	SG-IND-NOM	_	1	dobj	_	_
4	till	_	ADP	_	_	6	case	_	_
5	en	_	DET	SG-IND	_	6	det	_	_
6	anslutningsfil	_	NOUN	SG-IND-NOM	_	3	nmod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 dobj	color:blue
1	Ni	_	PRON	PERS-P2PL-NOM	_	2	nsubj	_	_
2	sitter	_	VERB	PRES-ACT	_	0	root	_	_
3	där	_	ADV	_	_	2	advmod	_	_
4	och	_	CONJ	_	_	2	cc	_	_
5	tänker	_	VERB	PRES-ACT	_	2	conj	_	_
6	:	_	PUNCT	_	_	2	punct	_	_
7	Vem	_	PRON	WH-SG	_	5	dobj	_	_
8	är	_	VERB	PRES-ACT	_	7	cop	_	_
9	den	_	DET	SG-DEF	_	10	det	_	_
10	person	_	NOUN	SG-IND-NOM	_	7	nsubj	_	_
11	som	_	SCONJ	REL	_	12	mark	_	_
12	talar	_	VERB	PRES-ACT	_	10	acl:relcl	_	_
13	till	_	ADP	_	_	14	case	_	_
14	mig	_	PRON	PERS-P1SG-ACC	_	12	nmod	_	_
15	?	_	PUNCT	QuestionMark	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 dobj	color:blue
1	Access	_	PROPN	SG-NOM	_	2	nsubj	_	_
2	stöder	_	VERB	PRES-ACT	_	0	root	_	_
3	XML-schemastandarden	_	NOUN	SG-DEF-NOM	_	4	nmod	_	_
4	XSD	_	PROPN	SG-NOM	_	2	dobj	_	_
5	.	_	PUNCT	Period	_	2	punct	_	_

~~~


