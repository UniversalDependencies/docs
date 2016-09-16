

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

893 nodes (0%) are attached to their parents as `iobj`.

887 instances of `iobj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.7939529675252.

The following 6 pairs of parts of speech are connected with `iobj`: [fr-pos/VERB]()-[fr-pos/PRON]() (814; 91% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (45; 5% instances), [fr-pos/ADJ]()-[fr-pos/PRON]() (26; 3% instances), [fr-pos/PRON]()-[fr-pos/PRON]() (6; 1% instances), [fr-pos/ADV]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj	color:blue
1	Elle	elle	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	y	y	PRON	_	_	3	iobj	_	_
3	incarnera	incarner	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
4	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing	5	det	_	_
5	Poussette	Poussette	PROPN	_	_	3	dobj	_	_
6	de	de	ADP	_	_	7	case	_	_
7	Manon	Manon	PROPN	_	_	5	nmod	_	_
8	peu	peu	ADV	_	_	10	det	_	_
9	de	un	DET	_	Definite=Ind|PronType=Dem	8	mwe	_	_
10	temps	temps	NOUN	_	Gender=Masc|Number=Sing	3	nmod	_	_
11	après	après	ADV	_	_	10	advmod	_	_
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 iobj	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 iobj	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing	2	det	_	_
2	coût	coût	NOUN	_	Gender=Masc|Number=Sing	6	nsubj	_	_
3	en	en	PRON	_	Person=3	6	iobj	_	_
4	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
5	moins	moins	ADV	_	_	6	advmod	_	_
6	difficile	difficile	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


