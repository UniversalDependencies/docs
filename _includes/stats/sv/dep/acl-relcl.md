

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is a language-specific subtype of [acl]().

1339 nodes (1%) are attached to their parents as `acl:relcl`.

1339 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.97460791635549.

The following 23 pairs of parts of speech are connected with `acl:relcl`: [sv-pos/NOUN]()-[sv-pos/VERB]() (941; 70% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (188; 14% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (82; 6% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (24; 2% instances), [sv-pos/PROPN]()-[sv-pos/VERB]() (20; 1% instances), [sv-pos/PRON]()-[sv-pos/ADJ]() (18; 1% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (16; 1% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (9; 1% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (8; 1% instances), [sv-pos/ADV]()-[sv-pos/VERB]() (6; 0% instances), [sv-pos/DET]()-[sv-pos/VERB]() (5; 0% instances), [sv-pos/NUM]()-[sv-pos/VERB]() (5; 0% instances), [sv-pos/PROPN]()-[sv-pos/NOUN]() (3; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (2; 0% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (2; 0% instances), [sv-pos/PRON]()-[sv-pos/PRON]() (2; 0% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/PUNCT]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/ADP]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl:relcl	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	2	expl	_	_
2	är	vara	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	kvinnan	kvinna	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	dislocated	_	_
4	,	,	PUNCT	MID	_	3	punct	_	_
5	som	som	PRON	HP|-|-|-	PronType=Int,Rel	6	nsubj	_	_
6	föder	föda	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
7	barn	barn	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	6	dobj	_	_
8	till	till	ADP	PP	_	9	case	_	_
9	världen	värld	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	6	nmod	_	_
10	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl:relcl	color:blue
1	De	de	PRON	PN|UTR/NEU|PLU|DEF|SUB	Case=Nom|Definite=Def|Number=Plur	8	nsubj	_	_
2	som	som	PRON	HP|-|-|-	PronType=Int,Rel	3	nsubj	_	_
3	vill	vilja	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl:relcl	_	_
4	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	3	dobj	_	_
5	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
6	säkert	säker	ADV	AB|POS	Degree=Pos	8	advmod	_	_
7	lika	lika	ADV	AB	_	8	advmod	_	_
8	lämpliga	lämplig	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	0	root	_	_
9	som	som	CONJ	KN	_	10	mark	_	_
10	kvinnorna	kvinna	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	8	advcl	_	_
11	.	.	PUNCT	MAD	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	4	nsubj	_	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	ett	en	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing	4	det	_	_
4	system	system	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
5	som	som	PRON	HP|-|-|-	PronType=Int,Rel	7	nsubj	_	_
6	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	känt	känd	ADJ	PC|PRF|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part	4	acl:relcl	_	_
8	över	över	ADP	PP	_	10	case	_	_
9	hela	hel	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	10	det	_	_
10	världen	värld	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	nmod	_	_
11	.	.	PUNCT	MAD	_	4	punct	_	_

~~~


