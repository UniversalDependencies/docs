

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is a language-specific subtype of [acl]().

1043 nodes (1%) are attached to their parents as `acl:relcl`.

1043 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.94439117929051.

The following 18 pairs of parts of speech are connected with `acl:relcl`: [sv-pos/NOUN]()-[sv-pos/VERB]() (741; 71% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (149; 14% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (66; 6% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (18; 2% instances), [sv-pos/PROPN]()-[sv-pos/VERB]() (18; 2% instances), [sv-pos/PRON]()-[sv-pos/ADJ]() (12; 1% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (9; 1% instances), [sv-pos/ADV]()-[sv-pos/VERB]() (6; 1% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (6; 1% instances), [sv-pos/DET]()-[sv-pos/VERB]() (5; 0% instances), [sv-pos/NUM]()-[sv-pos/VERB]() (3; 0% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (2; 0% instances), [sv-pos/PRON]()-[sv-pos/PRON]() (2; 0% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/PROPN]()-[sv-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl:relcl	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	2	expl	_	_
2	är	vara	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	kvinnan	kvinna	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	dislocated	_	SpaceAfter=No
4	,	,	PUNCT	MID	_	3	punct	_	_
5	som	som	PRON	HP|-|-|-	PronType=Rel	6	nsubj	_	_
6	föder	föda	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
7	barn	barn	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	6	obj	_	_
8	till	till	ADP	PP	_	9	case	_	_
9	världen	värld	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	6	obl	_	SpaceAfter=No
10	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl:relcl	color:blue
1	De	de	PRON	PN|UTR/NEU|PLU|DEF|SUB	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	8	nsubj	_	_
2	som	som	PRON	HP|-|-|-	PronType=Rel	3	nsubj	_	_
3	vill	vilja	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl:relcl	_	_
4	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	obj	_	_
5	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
6	säkert	säker	ADV	AB|POS	Degree=Pos	8	advmod	_	_
7	lika	lika	ADV	AB	_	8	advmod	_	_
8	lämpliga	lämplig	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	0	root	_	_
9	som	som	CCONJ	KN	_	10	mark	_	_
10	kvinnorna	kvinna	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	8	advcl	_	SpaceAfter=No
11	.	.	PUNCT	MAD	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	4	nsubj	_	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	ett	en	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	4	det	_	_
4	system	system	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
5	som	som	PRON	HP|-|-|-	PronType=Rel	7	nsubj	_	_
6	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	känt	känd	ADJ	PC|PRF|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part	4	acl:relcl	_	_
8	över	över	ADP	PP	_	10	case	_	_
9	hela	hel	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	10	amod	_	_
10	världen	värld	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	obl	_	SpaceAfter=No
11	.	.	PUNCT	MAD	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is a language-specific subtype of [acl]().

855 nodes (1%) are attached to their parents as `acl:relcl`.

854 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.5812865497076.

The following 22 pairs of parts of speech are connected with `acl:relcl`: [sv-pos/NOUN]()-[sv-pos/VERB]() (667; 78% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (75; 9% instances), [sv-pos/PROPN]()-[sv-pos/VERB]() (31; 4% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (30; 4% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (12; 1% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (10; 1% instances), [sv-pos/PROPN]()-[sv-pos/ADJ]() (6; 1% instances), [sv-pos/NOUN]()-[sv-pos/AUX]() (5; 1% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (4; 0% instances), [sv-pos/ADV]()-[sv-pos/VERB]() (2; 0% instances), [sv-pos/PRON]()-[sv-pos/ADJ]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/AUX]() (1; 0% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/VERB]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/AUX]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl:relcl	color:blue
1	Identifiera	_	VERB	INF-ACT	_	0	root	_	_
2	filter	_	NOUN	IND-NOM	_	1	obj	_	_
3	som	_	SCONJ	REL	_	4	mark	_	_
4	är	_	VERB	PRES-ACT	_	2	acl:relcl	_	_
5	igång	_	ADV	_	_	4	advmod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	Det	_	PRON	EX-P3SG	_	4	expl	_	_
2	kanske	_	ADV	_	_	4	advmod	_	_
3	var	_	AUX	PAST-ACT	_	4	cop	_	_
4	nån	_	PRON	IND-SG	_	0	root	_	_
5	som	_	SCONJ	REL	_	7	mark	_	_
6	ville	_	AUX	PAST-AUX	_	7	aux	_	_
7	skämta	_	VERB	INF-ACT	_	4	acl:relcl	_	_
8	med	_	ADP	_	_	9	case	_	_
9	er	_	PRON	PERS-P2PL-ACC	_	7	obl	_	SpaceAfter=No
10	?	_	PUNCT	QuestionMark	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 acl:relcl	color:blue
1	Harry	_	PROPN	SG-NOM	_	10	nsubj	_	SpaceAfter=No
2	,	_	PUNCT	Comma	_	1	punct	_	_
3	som	_	SCONJ	REL	_	5	mark	_	_
4	knappt	_	ADV	_	_	5	advmod	_	_
5	vågade	_	VERB	PAST-ACT	_	1	acl:relcl	_	_
6	tro	_	VERB	INF-ACT	_	5	xcomp	_	_
7	sina	_	PRON	RFL-PL-GEN	_	8	nmod:poss	_	_
8	öron	_	NOUN	PL-IND-NOM	_	6	obj	_	SpaceAfter=No
9	,	_	PUNCT	Comma	_	1	punct	_	_
10	tittade	_	VERB	PAST-ACT	_	0	root	_	_
11	upp	_	ADV	_	_	10	advmod	_	SpaceAfter=No
12	.	_	PUNCT	Period	_	10	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish_Sign_Language)

This relation is a language-specific subtype of [acl]().

4 nodes (1%) are attached to their parents as `acl:relcl`.

4 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.5.

The following 4 pairs of parts of speech are connected with `acl:relcl`: [sv-pos/NOUN]()-[sv-pos/ADJ]() (1; 25% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (1; 25% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (1; 25% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (1; 25% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 acl:relcl	color:blue
1	HA	_	VERB	VB	_	0	root	_	_
2	form(Yb)@p@&	_	VERB	VBAV	_	4	reparandum	_	_
3	GLAS	_	NOUN	NN	_	4	compound	_	_
4	FORM(YYb)+BESKRIVNING@p	_	VERB	VBAV	_	1	dobj	_	_
5	FORM(Yb)@p@hd	_	VERB	VBAV	_	4	dep	_	_
6	INUTI	_	VERB	VBPP	_	1	acl:relcl	_	_
7	GRODA	_	NOUN	NN	_	6	nsubj	_	_
8	DJUR(JJv)@ca	_	VERB	VBCA	_	6	conj	_	_
9	AVGRÄNS	_	X	BOJ	_	4	dep	_	_
10	INUTI	_	VERB	VBPP	_	6	conj	_	_
11	TITTA-PÅ	_	VERB	VB	_	1	conj	_	_
12	SAMTALA	_	VERB	VB	_	1	conj	_	_
13	GLOSA:(PD)@z	_	X	?	_	1	conj	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl:relcl	color:blue
1	JA@ub@z	_	INTJ	INTERJ	_	9	discourse	_	_
2	POJKE	_	NOUN	NN	_	9	nsubj	_	_
3	LITEN-PERSON@kl	_	NOUN	NNKL	_	2	compound	_	_
4	SE-UT	_	VERB	VB	_	2	cop	_	_
5	SJU_ÅTTA	_	NUM	RG	_	6	nummod	_	_
6	ÅR@b	_	NOUN	NN	_	2	acl:relcl	_	_
7	HUND	_	NOUN	NN	_	2	conj	_	_
8	SITTA(VVb)	_	VERB	VBAV?/VB?	_	7	acl:relcl	_	_
9	TITTA-PÅ@z	_	VERB	VB	_	0	root	_	_
10	TITTA-PÅ	_	VERB	VB	_	9	conj	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 acl:relcl	color:blue
1	JA@ub@z	_	INTJ	INTERJ	_	9	discourse	_	_
2	POJKE	_	NOUN	NN	_	9	nsubj	_	_
3	LITEN-PERSON@kl	_	NOUN	NNKL	_	2	compound	_	_
4	SE-UT	_	VERB	VB	_	2	cop	_	_
5	SJU_ÅTTA	_	NUM	RG	_	6	nummod	_	_
6	ÅR@b	_	NOUN	NN	_	2	acl:relcl	_	_
7	HUND	_	NOUN	NN	_	2	conj	_	_
8	SITTA(VVb)	_	VERB	VBAV?/VB?	_	7	acl:relcl	_	_
9	TITTA-PÅ@z	_	VERB	VB	_	0	root	_	_
10	TITTA-PÅ	_	VERB	VB	_	9	conj	_	_

~~~


