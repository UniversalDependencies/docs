

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.

19993 nodes (5%) are attached to their parents as `amod`.

14428 instances of `amod` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26354223978392.

The following 36 pairs of parts of speech are connected with `amod`: [fr-pos/NOUN]()-[fr-pos/ADJ]() (18439; 92% instances), [fr-pos/PROPN]()-[fr-pos/ADJ]() (818; 4% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (281; 1% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (120; 1% instances), [fr-pos/PRON]()-[fr-pos/ADJ]() (75; 0% instances), [fr-pos/NOUN]()-[fr-pos/VERB]() (67; 0% instances), [fr-pos/ADJ]()-[fr-pos/ADJ]() (55; 0% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (32; 0% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (32; 0% instances), [fr-pos/NUM]()-[fr-pos/ADJ]() (16; 0% instances), [fr-pos/ADV]()-[fr-pos/ADJ]() (6; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADP]() (6; 0% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (6; 0% instances), [fr-pos/X]()-[fr-pos/ADJ]() (6; 0% instances), [fr-pos/ADP]()-[fr-pos/ADJ]() (3; 0% instances), [fr-pos/DET]()-[fr-pos/ADJ]() (3; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADV]() (3; 0% instances), [fr-pos/SYM]()-[fr-pos/ADJ]() (3; 0% instances), [fr-pos/NOUN]()-[fr-pos/NUM]() (2; 0% instances), [fr-pos/NOUN]()-[fr-pos/X]() (2; 0% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (2; 0% instances), [fr-pos/VERB]()-[fr-pos/ADV]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/NOUN]()-[fr-pos/PART]() (1; 0% instances), [fr-pos/NUM]()-[fr-pos/INTJ]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/ADV]() (1; 0% instances), [fr-pos/PRON]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/ADV]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/DET]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/PART]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/PROPN]() (1; 0% instances), [fr-pos/X]()-[fr-pos/NUM]() (1; 0% instances), [fr-pos/X]()-[fr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 amod	color:blue
1	Mais	mais	CONJ	_	_	3	cc	_	_
2	comment	comment	ADV	_	_	3	advmod	_	_
3	faire	faire	VERB	_	VerbForm=Inf	0	root	_	_
4	dans	dans	ADP	_	_	6	case	_	_
5	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Dem	6	det	_	_
6	contexte	contexte	NOUN	_	Gender=Masc|Number=Sing	3	nmod	_	_
7	structurellement	structurellement	ADV	_	_	8	advmod	_	_
8	raciste	raciste	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	_
9	?	?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	Elles	il	PRON	_	Gender=Fem|Number=Plur|Person=3|PronType=Prs	3	nsubj	_	_
2	furent	être	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	3	cop	_	_
3	victimes	victime	ADJ	_	Gender=Fem|Number=Plur	0	root	_	_
4	de	de	ADP	_	_	6	case	_	_
5	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing	6	det	_	_
6	Révolution	Révolution	PROPN	_	_	3	nmod	_	_
7	française	français	ADJ	_	Gender=Fem|Number=Sing	6	amod	_	_
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 amod	color:blue
1	Mer	Mer	PROPN	_	_	0	root	_	_
2	de	de	ADP	_	_	4	case	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing	4	det	_	_
4	Nord	Nord	PROPN	_	_	1	nmod	_	_
5	,	,	PUNCT	_	_	1	punct	_	_
6	Manche	Manche	PROPN	_	_	1	conj	_	_
7	,	,	PUNCT	_	_	1	punct	_	_
8	Atlantique	Atlantique	PROPN	_	_	1	conj	_	_
9	,	,	PUNCT	_	_	1	punct	_	_
10	Méditerranée	Méditerranée	PROPN	_	_	1	conj	_	_
11	,	,	PUNCT	_	_	1	punct	_	_
12	mer	mer	PROPN	_	_	1	conj	_	_
13	Rouge	Rouge	PROPN	_	_	12	amod	_	_
14	.	.	PUNCT	_	_	1	punct	_	_

~~~


