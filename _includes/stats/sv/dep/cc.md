

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

3483 nodes (4%) are attached to their parents as `cc`.

3168 instances of `cc` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.20844099913867.

The following 24 pairs of parts of speech are connected with `cc`: [sv-pos/NOUN]()-[sv-pos/CONJ]() (1569; 45% instances), [sv-pos/VERB]()-[sv-pos/CONJ]() (1127; 32% instances), [sv-pos/ADJ]()-[sv-pos/CONJ]() (435; 12% instances), [sv-pos/PROPN]()-[sv-pos/CONJ]() (112; 3% instances), [sv-pos/NUM]()-[sv-pos/CONJ]() (70; 2% instances), [sv-pos/ADV]()-[sv-pos/CONJ]() (39; 1% instances), [sv-pos/NOUN]()-[sv-pos/PUNCT]() (25; 1% instances), [sv-pos/PRON]()-[sv-pos/CONJ]() (25; 1% instances), [sv-pos/ADP]()-[sv-pos/CONJ]() (16; 0% instances), [sv-pos/DET]()-[sv-pos/CONJ]() (13; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (11; 0% instances), [sv-pos/PROPN]()-[sv-pos/PUNCT]() (10; 0% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (8; 0% instances), [sv-pos/NUM]()-[sv-pos/PUNCT]() (6; 0% instances), [sv-pos/PROPN]()-[sv-pos/ADV]() (4; 0% instances), [sv-pos/ADJ]()-[sv-pos/PUNCT]() (3; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADV]() (2; 0% instances), [sv-pos/PUNCT]()-[sv-pos/CONJ]() (2; 0% instances), [sv-pos/AUX]()-[sv-pos/CONJ]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/ADP]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/PUNCT]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/PUNCT]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 cc	color:blue
1	Är	vara	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	kvinnan	kvinna	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	1	nsubj	_	_
3	på	på	ADP	PP	_	4	case	_	_
4	väg	väg	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	1	nmod	_	_
5	tillbaka	tillbaka	ADV	AB	_	4	nmod	_	_
6	till	till	ADP	PP	_	7	case	_	_
7	kök	kök	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	5	nmod	_	_
8	och	och	CONJ	KN	_	7	cc	_	_
9	barnkammare	barnkammare	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	7	conj	_	_
10	?	?	PUNCT	MAD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc	color:blue
1	Men	men	CONJ	KN	_	5	cc	_	_
2	för	för	ADP	PP	_	4	case	_	_
3	barnens	barn	NOUN	NN|NEU|PLU|DEF|GEN	Case=Gen|Definite=Def|Gender=Neut|Number=Plur	4	nmod:poss	_	_
4	del	del	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	nmod	_	_
5	är	vara	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	5	nsubj	_	_
7	annorlunda	annorlunda	ADV	AB	_	5	advmod	_	_
8	.	.	PUNCT	MAD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cc	color:blue
1	Dubbelarbetande	dubbelarbetande	ADJ	PC|PRS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Tense=Pres|VerbForm=Part	0	root	_	_
2	eller	eller	CONJ	KN	_	1	cc	_	_
3	enbart	enbart	ADV	AB	_	4	advmod	_	_
4	hemarbetande	hemarbetande	ADJ	PC|PRS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Tense=Pres|VerbForm=Part	1	conj	_	_
5	?	?	PUNCT	MAD	_	1	punct	_	_

~~~


