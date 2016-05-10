

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

34 nodes (0%) are attached to their parents as `csubjpass`.

32 instances of `csubjpass` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.76470588235294.

The following 4 pairs of parts of speech are connected with `csubjpass`: [sv-pos/VERB]()-[sv-pos/VERB]() (24; 71% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (8; 24% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (1; 3% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubjpass	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	expl	_	_
2	blir	bli	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	auxpass	_	_
3	förbjudet	förbjuden	VERB	PC|PRF|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	att	att	PART	IE	_	5	mark	_	_
5	göra	göra	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	3	csubjpass	_	_
6	vänstersväng	vänstersväng	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	dobj	_	_
7	in	in	ADV	AB	_	5	advmod	_	_
8	mot	mot	ADP	PP	_	9	case	_	_
9	Stortorpsvägen	Stortorpsvägen	PROPN	PM|NOM	Case=Nom	7	nmod	_	_
10	.	.	PUNCT	MAD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubjpass	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	expl	_	_
2	har	ha	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	sagts	säga	VERB	VB|SUP|SFO	VerbForm=Sup|Voice=Pass	0	root	_	_
4	att	att	SCONJ	SN	_	7	mark	_	_
5	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	7	nsubj	_	_
6	var	vara	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	_	_
7	lätt	lätt	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	3	csubjpass	_	_
8	i	i	ADP	PP	_	9	case	_	_
9	vallokalen	vallokal	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	nmod	_	_
10	i	i	ADP	PP	_	7	advmod	_	_
11	år	år	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	10	mwe	_	_
12	.	.	PUNCT	MAD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 csubjpass	color:blue
1	Sedan	sedan	SCONJ	SN	_	4	mark	_	_
2	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	4	expl	_	_
3	sålunda	sålunda	ADV	AB	_	4	advmod	_	_
4	fastslagits	fastslå	VERB	VB|SUP|SFO	VerbForm=Sup|Voice=Pass	11	advcl	_	_
5	,	,	PUNCT	MID	_	4	punct	_	_
6	att	att	SCONJ	SN	_	9	mark	_	_
7	stiftelsen	stiftelse	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	9	nsubj	_	_
8	är	vara	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
9	Guds	Gud	PROPN	PM|GEN	Case=Gen	4	csubjpass	_	_
10	,	,	PUNCT	MID	_	11	punct	_	_
11	anges	ange	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
12	dess	den	DET	PS|UTR/NEU|SIN/PLU|DEF	Definite=Def|Poss=Yes|PronType=Prs	13	nmod:poss	_	_
13	syfte	syfte	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	11	nsubjpass	_	_
14	vara	vara	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	16	cop	_	_
15	samhällets	samhälle	NOUN	NN|NEU|SIN|DEF|GEN	Case=Gen|Definite=Def|Gender=Neut|Number=Sing	16	nmod:poss	_	_
16	bestånd	bestånd	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	11	xcomp	_	_
17	.	.	PUNCT	MAD	_	11	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.

8 nodes (0%) are attached to their parents as `csubjpass`.

5 instances of `csubjpass` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.25.

The following 1 pairs of parts of speech are connected with `csubjpass`: [sv-pos/VERB]()-[sv-pos/VERB]() (8; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubjpass	color:blue
1	Det	_	PRON	EX-P3SG	_	2	expl	_	_
2	kändes	_	VERB	PAST-PASS	_	0	root	_	_
3	tröstande	_	VERB	NDE	_	2	xcomp	_	_
4	att	_	PART	_	_	5	mark	_	_
5	veta	_	VERB	INF-ACT	_	2	csubjpass	_	_
6	att	_	SCONJ	_	_	8	mark	_	_
7	han	_	PRON	PERS-P3SG-NOM	_	8	nsubj	_	_
8	hade	_	VERB	PAST-ACT	_	5	ccomp	_	_
9	en	_	DET	SG-IND	_	10	det	_	_
10	alternativplan	_	NOUN	SG-IND-NOM	_	8	dobj	_	_
11	om	_	SCONJ	_	_	16	mark	_	_
12	saker	_	NOUN	PL-IND-NOM	_	16	nsubj	_	_
13	och	_	CONJ	_	_	12	cc	_	_
14	ting	_	NOUN	IND-NOM	_	12	conj	_	_
15	skulle	_	AUX	PAST-AUX	_	16	aux	_	_
16	gå	_	VERB	INF-ACT	_	8	advcl	_	_
17	på	_	ADP	_	_	18	case	_	_
18	tok	_	ADV	_	_	16	advmod	_	_
19	.	_	PUNCT	Period	_	2	punct	_	_

~~~


