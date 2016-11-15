

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

5508 nodes (1%) are attached to their parents as `nummod`.

4848 instances of `nummod` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11274509803922.

The following 18 pairs of parts of speech are connected with `nummod`: [fr-pos/NOUN]()-[fr-pos/NUM]() (4575; 83% instances), [fr-pos/SYM]()-[fr-pos/NUM]() (407; 7% instances), [fr-pos/PROPN]()-[fr-pos/NUM]() (363; 7% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (43; 1% instances), [fr-pos/X]()-[fr-pos/NUM]() (39; 1% instances), [fr-pos/NUM]()-[fr-pos/NUM]() (36; 1% instances), [fr-pos/VERB]()-[fr-pos/NUM]() (13; 0% instances), [fr-pos/ADJ]()-[fr-pos/NUM]() (9; 0% instances), [fr-pos/PRON]()-[fr-pos/NUM]() (6; 0% instances), [fr-pos/SYM]()-[fr-pos/NOUN]() (5; 0% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (3; 0% instances), [fr-pos/ADP]()-[fr-pos/NUM]() (2; 0% instances), [fr-pos/NUM]()-[fr-pos/X]() (2; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/SYM]() (1; 0% instances), [fr-pos/PUNCT]()-[fr-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubjpass	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	auxpass	_	_
3	fêté	fêter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
5	22	22	NUM	_	_	6	nummod	_	_
6	mai	mai	NOUN	_	Gender=Masc|Number=Sing	3	nmod	_	_
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	2	det	_	_
2	taux	taux	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
3	atteint	atteindre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	même	même	ADV	_	_	5	advmod	_	_
5	50	50	NUM	_	_	6	nummod	_	_
6	%	%	SYM	_	_	3	dobj	_	_
7	dans	dans	ADP	_	_	9	case	_	_
8	certains	certain	DET	_	Gender=Masc|Number=Plur	9	det	_	_
9	centres	centre	NOUN	_	Gender=Masc|Number=Plur	3	nmod	_	_
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nummod	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	roi	roi	NOUN	_	Gender=Masc|Number=Sing	6	nsubj	_	_
3	Mutesa	Mutesa	PROPN	_	_	2	appos	_	_
4	II	II	NUM	_	_	3	nummod	_	_
5	en	en	PRON	_	Person=3	6	iobj	_	_
6	devient	devenir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	président	président	NOUN	_	Gender=Masc|Number=Sing	6	xcomp	_	_
9	à	à	ADP	_	_	10	case	_	_
10	vie	vie	NOUN	_	Gender=Fem|Number=Sing	8	nmod	_	_
11	.	.	PUNCT	_	_	6	punct	_	_

~~~


