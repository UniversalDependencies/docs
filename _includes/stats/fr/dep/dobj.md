

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

15035 nodes (4%) are attached to their parents as `dobj`.

11321 instances of `dobj` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.21097439308281.

The following 30 pairs of parts of speech are connected with `dobj`: [fr-pos/VERB]()-[fr-pos/NOUN]() (10300; 69% instances), [fr-pos/VERB]()-[fr-pos/PRON]() (3862; 26% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (690; 5% instances), [fr-pos/VERB]()-[fr-pos/SYM]() (56; 0% instances), [fr-pos/VERB]()-[fr-pos/NUM]() (26; 0% instances), [fr-pos/VERB]()-[fr-pos/X]() (16; 0% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (15; 0% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (13; 0% instances), [fr-pos/NOUN]()-[fr-pos/PRON]() (9; 0% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (7; 0% instances), [fr-pos/PROPN]()-[fr-pos/PRON]() (4; 0% instances), [fr-pos/VERB]()-[fr-pos/ADV]() (4; 0% instances), [fr-pos/VERB]()-[fr-pos/SCONJ]() (4; 0% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (4; 0% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (3; 0% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (3; 0% instances), [fr-pos/ADJ]()-[fr-pos/PRON]() (2; 0% instances), [fr-pos/ADP]()-[fr-pos/NOUN]() (2; 0% instances), [fr-pos/ADV]()-[fr-pos/PRON]() (2; 0% instances), [fr-pos/AUX]()-[fr-pos/NOUN]() (2; 0% instances), [fr-pos/VERB]()-[fr-pos/ADP]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/ADV]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/INTJ]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/X]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/SYM]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/DET]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/INTJ]() (1; 0% instances), [fr-pos/X]()-[fr-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 dobj	color:blue
1	Les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	2	det	_	_
2	compagnies	compagnie	NOUN	_	Gender=Fem|Number=Plur	8	nsubj	_	_
3	aériennes	aérien	ADJ	_	Gender=Fem|Number=Plur	2	amod	_	_
4	à	à	ADP	_	_	6	case	_	_
5	bas	bas	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	_
6	coût	coût	NOUN	_	Gender=Masc|Number=Sing	2	nmod	_	_
7	ne	ne	PART	_	_	8	neg	_	_
8	connaissent	connaître	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	pas	pas	ADV	_	_	8	neg	_	_
10	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	crise	crise	NOUN	_	Gender=Fem|Number=Sing	8	dobj	_	_
12	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 dobj	color:blue
1	Pourquoi	pourquoi	ADV	_	_	6	advmod	_	_
2	,	,	PUNCT	_	_	1	punct	_	_
3	mais	mais	CONJ	_	_	1	cc	_	_
4	pourquoi	pourquoi	ADV	_	_	1	advmod	_	_
5	Le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	dobj	_	_
6	bénirais	bénir	VERB	_	Mood=Cnd|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
7	-je	je	PRON	_	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
8	?	?	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 dobj	color:blue
1	Elle	elle	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	y	y	PRON	_	_	3	iobj	_	_
3	incarnera	incarner	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
4	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Poussette	Poussette	PROPN	_	_	3	dobj	_	_
6	de	de	ADP	_	_	7	case	_	_
7	Manon	Manon	PROPN	_	_	5	nmod	_	_
8	peu	peu	ADV	_	_	10	det	_	_
9	de	un	DET	_	Definite=Ind|PronType=Art	8	mwe	_	_
10	temps	temps	NOUN	_	Gender=Masc|Number=Sing	3	nmod	_	_
11	après	après	ADV	_	_	10	advmod	_	_
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


