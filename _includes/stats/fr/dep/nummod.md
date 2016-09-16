

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

5552 nodes (1%) are attached to their parents as `nummod`.

4840 instances of `nummod` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11509365994236.

The following 17 pairs of parts of speech are connected with `nummod`: [fr-pos/NOUN]()-[fr-pos/NUM]() (4503; 81% instances), [fr-pos/PROPN]()-[fr-pos/NUM]() (369; 7% instances), [fr-pos/SYM]()-[fr-pos/NUM]() (365; 7% instances), [fr-pos/NUM]()-[fr-pos/NUM]() (187; 3% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (46; 1% instances), [fr-pos/X]()-[fr-pos/NUM]() (39; 1% instances), [fr-pos/VERB]()-[fr-pos/NUM]() (15; 0% instances), [fr-pos/ADJ]()-[fr-pos/NUM]() (10; 0% instances), [fr-pos/PRON]()-[fr-pos/NUM]() (6; 0% instances), [fr-pos/ADP]()-[fr-pos/NUM]() (2; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (2; 0% instances), [fr-pos/NUM]()-[fr-pos/X]() (2; 0% instances), [fr-pos/SYM]()-[fr-pos/NOUN]() (2; 0% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/SYM]() (1; 0% instances), [fr-pos/PUNCT]()-[fr-pos/NUM]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubjpass	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	auxpass	_	_
3	fêté	fêter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing	6	det	_	_
5	22	22	NUM	_	_	6	nummod	_	_
6	mai	mai	NOUN	_	Gender=Masc|Number=Sing	3	nmod	_	_
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nummod	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing	2	det	_	_
2	roi	roi	NOUN	_	Gender=Masc|Number=Sing	8	nsubj	_	_
3	Mutesa	Mutesa	PROPN	_	_	2	appos	_	_
4	II	II	NUM	_	_	3	nummod	_	_
5	en	en	PRON	_	Person=3	8	iobj	_	_
6	devient	devenir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing	8	det	_	_
8	président	président	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
9	à	à	ADP	_	_	10	case	_	_
10	vie	vie	NOUN	_	Gender=Fem|Number=Sing	8	nmod	_	_
11	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Ce	ce	DET	_	Gender=Masc|Number=Sing	2	det	_	_
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


