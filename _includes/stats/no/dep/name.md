

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.

5276 nodes (2%) are attached to their parents as `name`.

5276 instances of `name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.39613343442002.

The following 29 pairs of parts of speech are connected with `name`: [no-pos/PROPN]()-[no-pos/PROPN]() (4203; 80% instances), [no-pos/PROPN]()-[no-pos/NOUN]() (465; 9% instances), [no-pos/PROPN]()-[no-pos/ADJ]() (176; 3% instances), [no-pos/PROPN]()-[no-pos/X]() (152; 3% instances), [no-pos/PROPN]()-[no-pos/ADP]() (83; 2% instances), [no-pos/PROPN]()-[no-pos/NUM]() (78; 1% instances), [no-pos/PROPN]()-[no-pos/CONJ]() (44; 1% instances), [no-pos/PROPN]()-[no-pos/VERB]() (14; 0% instances), [no-pos/PROPN]()-[no-pos/DET]() (9; 0% instances), [no-pos/PROPN]()-[no-pos/PRON]() (8; 0% instances), [no-pos/NOUN]()-[no-pos/PROPN]() (7; 0% instances), [no-pos/NOUN]()-[no-pos/NUM]() (4; 0% instances), [no-pos/NUM]()-[no-pos/NUM]() (4; 0% instances), [no-pos/NOUN]()-[no-pos/NOUN]() (3; 0% instances), [no-pos/PROPN]()-[no-pos/PART]() (3; 0% instances), [no-pos/VERB]()-[no-pos/ADP]() (3; 0% instances), [no-pos/VERB]()-[no-pos/NOUN]() (3; 0% instances), [no-pos/VERB]()-[no-pos/PROPN]() (3; 0% instances), [no-pos/ADJ]()-[no-pos/ADP]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (2; 0% instances), [no-pos/NOUN]()-[no-pos/CONJ]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/DET]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/DET]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/ADP]() (1; 0% instances), [no-pos/PRON]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/PRON]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/PRON]()-[no-pos/PROPN]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 name	color:blue
1	Den	den	DET	_	Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
2	albanske	albansk	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	3	amod	_	_
3	ambassador	ambassadør	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	4	nmod	_	_
4	Aleksander	Aleksander	PROPN	_	_	6	nsubj	_	_
5	Sallabanda	Sallabanda	PROPN	_	_	4	name	_	_
6	fulgte	følge	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
7	opp	opp	ADP	_	_	6	compound:prt	_	_
8	|	$|	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 name	color:blue
1	Vi	vi	PRON	_	Animacy=Anim|Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	skyver	skyve	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	opp	opp	ADP	_	_	2	compound:prt	_	_
4	døren	dør	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	2	dobj	_	_
5	til	til	ADP	_	_	6	case	_	_
6	Mulligan's	Mulligan's	PROPN	_	_	4	nmod	_	_
7	pub	pub	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	6	name	_	_
8	.	$.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 name	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
2	er	være	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	nok	nok	ADV	_	_	0	root	_	_
4	å	å	PART	_	_	6	mark	_	_
5	være	være	AUX	_	VerbForm=Inf	6	aux	_	_
6	døpt	døpe	VERB	_	VerbForm=Part	3	csubj	_	_
7	og	og	CONJ	_	_	6	cc	_	_
8	medlem	medlem	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	6	conj	_	_
9	i	i	ADP	_	_	10	case	_	_
10	Den	Den	PROPN	_	_	8	nmod	_	_
11	norske	norsk	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	10	name	_	_
12	kirke	kirke	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	10	name	_	_
13	.	$.	PUNCT	_	_	3	punct	_	_

~~~


