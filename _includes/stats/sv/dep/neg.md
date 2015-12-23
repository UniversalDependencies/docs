

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

768 nodes (1%) are attached to their parents as `neg`.

532 instances of `neg` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.85807291666667.

The following 9 pairs of parts of speech are connected with `neg`: [sv-pos/VERB]()-[sv-pos/ADV]() (551; 72% instances), [sv-pos/ADJ]()-[sv-pos/ADV]() (94; 12% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (81; 11% instances), [sv-pos/ADV]()-[sv-pos/ADV]() (17; 2% instances), [sv-pos/CONJ]()-[sv-pos/ADV]() (13; 2% instances), [sv-pos/PRON]()-[sv-pos/ADV]() (7; 1% instances), [sv-pos/NUM]()-[sv-pos/ADV]() (3; 0% instances), [sv-pos/DET]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/PROPN]()-[sv-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 neg	color:blue
1	Två	två	NUM	RG|NOM	Case=Nom	2	nummod	_	_
2	huvudfaktorer	huvudfaktor	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	4	nsubjpass	_	_
3	kan	kunna	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	urskiljas	urskilja	VERB	VB|INF|SFO	VerbForm=Inf|Voice=Pass	0	root	_	_
5	som	som	PRON	HP|-|-|-	PronType=Int,Rel	6	nsubj	_	_
6	förklarar	förklara	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl	_	_
7	men	men	CONJ	KN	_	6	cc	_	_
8	inte	inte	ADV	AB	_	9	neg	_	_
9	ursäktar	ursäkta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	_
10	:	:	PUNCT	MAD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 neg	color:blue
1	Kvinnorna	kvinna	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	6	nsubj	_	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
3	inte	inte	ADV	AB	_	6	neg	_	_
4	något	någon	ADV	AB	_	5	advmod	_	_
5	vidare	vid	ADV	AB|KOM	Degree=Cmp	6	advmod	_	_
6	aktiva	aktiv	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	0	root	_	_
7	annars	annars	ADV	AB	_	6	advmod	_	_
8	.	.	PUNCT	MAD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 neg	color:blue
1	Inte	inte	ADV	AB	_	2	neg	_	_
2	mannen	man	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	0	root	_	_
3	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


