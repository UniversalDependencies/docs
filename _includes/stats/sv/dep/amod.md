

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

4612 nodes (5%) are attached to their parents as `amod`.

4598 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18581960104076.

The following 13 pairs of parts of speech are connected with `amod`: [sv-pos/NOUN]()-[sv-pos/ADJ]() (4492; 97% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (58; 1% instances), [sv-pos/PROPN]()-[sv-pos/ADJ]() (23; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (14; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADV]() (11; 0% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (5; 0% instances), [sv-pos/INTJ]()-[sv-pos/ADJ]() (2; 0% instances), [sv-pos/NOUN]()-[sv-pos/DET]() (2; 0% instances), [sv-pos/ADV]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/DET]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 amod	color:blue
1	Vad	vad	PRON	HP|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Int,Rel	8	det	_	_
2	skapar	skapa	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	den	en	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing	5	det	_	_
4	kollektiva	kollektiv	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	5	amod	_	_
5	barnuppfostran	barnuppfostran	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	nsubj	_	_
6	för	för	ADP	PP	_	1	mwe	_	_
7	slags	slag	NOUN	NN|NEU|SIN|IND|GEN	Case=Gen|Definite=Ind|Gender=Neut|Number=Sing	1	mwe	_	_
8	människor	människa	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	2	dobj	_	_
9	?	?	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	Så	så	ADV	AB	_	2	advmod	_	_
2	lite	lite	ADV	AB|POS	Degree=Pos	3	amod	_	_
3	beskärning	beskärning	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
4	som	som	CONJ	KN	_	5	mark	_	_
5	möjligt	möjlig	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	3	acl	_	_
6	av	av	ADP	PP	_	9	case	_	_
7	växandets	växande	NOUN	NN|NEU|SIN|DEF|GEN	Case=Gen|Definite=Def|Gender=Neut|Number=Sing	9	nmod:poss	_	_
8	oerhörda	oerhörd	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	9	amod	_	_
9	glädje	glädje	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	3	nmod	_	_
10	?	?	PUNCT	MAD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 amod	color:blue
1	Om	om	SCONJ	SN	_	5	mark	_	_
2	basbeloppet	basbelopp	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	5	nsubj	_	_
3	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	6900	6900	NUM	RG|NOM	Case=Nom	5	nummod	_	_
5	kr	kr	NOUN	NN|AN	_	7	advcl	_	_
6	,	,	PUNCT	MID	_	7	punct	_	_
7	blir	bli	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	full	full	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	9	amod	_	_
9	ATP	ATP	PROPN	PM|NOM	Case=Nom	7	nsubj	_	_
10	av	av	ADP	PP	_	12	case	_	_
11	följande	följande	ADJ	PC|PRS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Tense=Pres|VerbForm=Part	12	det	_	_
12	storlek	storlek	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	7	xcomp	_	_
13	:	:	PUNCT	MAD	_	7	punct	_	_

~~~


