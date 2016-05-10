

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

7143 nodes (2%) are attached to their parents as `acl`.

6729 instances of `acl` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.86546269074619.

The following 35 pairs of parts of speech are connected with `acl`: [fr-pos/NOUN]()-[fr-pos/VERB]() (4116; 58% instances), [fr-pos/VERB]()-[fr-pos/VERB]() (1770; 25% instances), [fr-pos/PROPN]()-[fr-pos/VERB]() (487; 7% instances), [fr-pos/PRON]()-[fr-pos/VERB]() (239; 3% instances), [fr-pos/ADJ]()-[fr-pos/VERB]() (214; 3% instances), [fr-pos/NOUN]()-[fr-pos/ADJ]() (67; 1% instances), [fr-pos/NOUN]()-[fr-pos/PROPN]() (64; 1% instances), [fr-pos/NOUN]()-[fr-pos/NOUN]() (48; 1% instances), [fr-pos/PROPN]()-[fr-pos/PROPN]() (41; 1% instances), [fr-pos/NUM]()-[fr-pos/VERB]() (20; 0% instances), [fr-pos/PROPN]()-[fr-pos/ADJ]() (10; 0% instances), [fr-pos/ADV]()-[fr-pos/VERB]() (9; 0% instances), [fr-pos/PRON]()-[fr-pos/NOUN]() (8; 0% instances), [fr-pos/PRON]()-[fr-pos/ADJ]() (7; 0% instances), [fr-pos/PROPN]()-[fr-pos/NOUN]() (6; 0% instances), [fr-pos/NOUN]()-[fr-pos/NUM]() (5; 0% instances), [fr-pos/X]()-[fr-pos/VERB]() (4; 0% instances), [fr-pos/ADP]()-[fr-pos/VERB]() (3; 0% instances), [fr-pos/SYM]()-[fr-pos/VERB]() (3; 0% instances), [fr-pos/INTJ]()-[fr-pos/VERB]() (2; 0% instances), [fr-pos/NOUN]()-[fr-pos/ADV]() (2; 0% instances), [fr-pos/NOUN]()-[fr-pos/X]() (2; 0% instances), [fr-pos/PRON]()-[fr-pos/NUM]() (2; 0% instances), [fr-pos/PRON]()-[fr-pos/PROPN]() (2; 0% instances), [fr-pos/VERB]()-[fr-pos/ADJ]() (2; 0% instances), [fr-pos/ADJ]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/ADJ]()-[fr-pos/PRON]() (1; 0% instances), [fr-pos/AUX]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/DET]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/NUM]()-[fr-pos/ADJ]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/NUM]() (1; 0% instances), [fr-pos/PROPN]()-[fr-pos/X]() (1; 0% instances), [fr-pos/SCONJ]()-[fr-pos/VERB]() (1; 0% instances), [fr-pos/VERB]()-[fr-pos/NOUN]() (1; 0% instances), [fr-pos/X]()-[fr-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 acl	color:blue
1	C'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	9	nsubj	_	_
2	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
3	véritablement	véritablement	ADV	_	_	9	advmod	_	_
4	pour	pour	ADP	_	_	6	case	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing	6	det	_	_
6	futur	futur	NOUN	_	Gender=Masc|Number=Sing	9	nmod	_	_
7	baptisé	baptiser	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	acl	_	_
8	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Dem	9	det	_	_
9	changement	changement	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
10	de	de	ADP	_	_	11	case	_	_
11	cap	cap	NOUN	_	Gender=Masc|Number=Sing	9	nmod	_	_
12	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 acl	color:blue
1	À	à	ADP	_	_	2	case	_	_
2	partir	partir	VERB	_	VerbForm=Inf	6	acl	_	_
3	de	de	ADP	_	_	4	case	_	_
4	1882	1882	NUM	_	_	2	nmod	_	_
5	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
6	obtient	obtenir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	divers	divers	DET	_	Gender=Masc|Number=Plur	8	det	_	_
8	diplômes	diplôme	NOUN	_	Gender=Masc|Number=Plur	6	dobj	_	_
9	ecclésiastiques	ecclésiastique	ADJ	_	Gender=Masc|Number=Plur	8	amod	_	_
10	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 acl	color:blue
1	Secourue	secourir	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	5	acl	_	_
2	par	par	ADP	_	_	3	case	_	_
3	Mitterrand	Mitterrand	PROPN	_	_	1	nmod	_	_
4	,	,	PUNCT	_	_	7	punct	_	_
5	Marguerite	Marguerite	PROPN	_	_	7	nsubj	_	_
6	Duras	Duras	PROPN	_	_	5	name	_	_
7	réussit	réussir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	à	à	ADP	_	_	10	mark	_	_
9	s'	se	PRON	_	Person=3|PronType=Prs	10	dobj	_	_
10	échapper	échapper	VERB	_	VerbForm=Inf	7	acl	_	_
11	.	.	PUNCT	_	_	7	punct	_	_

~~~


