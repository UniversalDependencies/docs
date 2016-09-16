

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

2816 nodes (1%) are attached to their parents as `auxpass`.

2814 instances of `auxpass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31960227272727.

The following 6 pairs of parts of speech are connected with `auxpass`: [fr-pos/VERB]()-[fr-pos/AUX]() (2681; 95% instances), [fr-pos/NOUN]()-[fr-pos/AUX]() (95; 3% instances), [fr-pos/PROPN]()-[fr-pos/AUX]() (20; 1% instances), [fr-pos/ADJ]()-[fr-pos/AUX]() (18; 1% instances), [fr-pos/NUM]()-[fr-pos/AUX]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 auxpass	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubjpass	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	auxpass	_	_
3	fêté	fêter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing	6	det	_	_
5	22	22	NUM	_	_	6	nummod	_	_
6	mai	mai	NOUN	_	Gender=Masc|Number=Sing	3	nmod	_	_
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 auxpass	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubjpass	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	auxpass	_	_
3	alors	alors	ADV	_	_	5	advmod	_	_
4	nommé	nommer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	cop	_	_
5	commissaire	commissaire	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
6	de	de	ADP	_	_	8	case	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing	8	det	_	_
8	gouvernement	gouvernement	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	_
9	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 auxpass	color:blue
1	Ses	son	DET	_	Gender=Masc|Number=Plur	2	nmod:poss	_	_
2	habitants	habitant	NOUN	_	Gender=Masc|Number=Plur	6	nsubjpass	_	_
3	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	auxpass	_	_
4	appelés	appeler	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	6	cop	_	_
5	les	le	DET	_	Definite=Def|Number=Plur	6	det	_	_
6	Paydrets	Paydrets	PROPN	_	_	0	root	_	_
7	et	et	CONJ	_	_	6	cc	_	_
8	les	le	DET	_	Definite=Def|Number=Plur	9	det	_	_
9	Paydrètes	Paydrètes	PROPN	_	_	6	conj	_	_
10	;	;	PUNCT	_	_	6	punct	_	_

~~~


