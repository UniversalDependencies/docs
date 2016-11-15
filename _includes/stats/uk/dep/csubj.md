

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

10 nodes (1%) are attached to their parents as `csubj`.

9 instances of `csubj` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 3 pairs of parts of speech are connected with `csubj`: [uk-pos/ADV]()-[uk-pos/VERB]() (5; 50% instances), [uk-pos/ADJ]()-[uk-pos/VERB]() (4; 40% instances), [uk-pos/VERB]()-[uk-pos/VERB]() (1; 10% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 csubj	color:blue
1	Важко	важко	ADV	adv:compb	Degree=Pos	0	root	_	_
2	примусити	примусити	VERB	verb:perf:inf	Aspect=Perf|VerbForm=Inf	1	csubj	_	_
3	її	вона	PRON	noun:f:v_zna:&pron:pers:3	Case=Acc|Gender=Fem|Person=3|PronType=Prs	2	dobj	_	_
4	зізнатися	зізнатися	VERB	verb:rev:perf:inf	Aspect=Perf|VerbForm=Inf	2	xcomp	_	SpaceAfter=No
5	.	.	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 csubj	color:blue
1	Розмовляти	розмовляти	VERB	verb:imperf:inf	Aspect=Imp|VerbForm=Inf	5	csubj	_	_
2	з	з	ADP	prep:rv_oru	Case=Ins	3	case	_	_
3	незнайомими	незнайомий	ADJ	adj:p:v_oru	Case=Ins|Number=Plur	1	nmod	_	_
4	є	бути	VERB	verb:imperf:pres:s:3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	ризикованим	ризикований	ADJ	adj:n:v_oru:compb:&adjp:imperf:pasv	Aspect=Imp|Case=Ins|Degree=Pos|Gender=Neut|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
6	.	.	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 csubj	color:blue
1	Оскарженого	оскаржений	ADJ	adj:m:v_dav:&adjp:perf:pasv	Aspect=Perf|Case=Dat|Gender=Masc|VerbForm=Part|Voice=Pass	2	dobj	_	_
2	гнітило	гнітити	VERB	verb:perf:past:n	Aspect=Perf|Gender=Neut|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	punct	_	2	punct	_	_
4	що	що	SCONJ	conj:subord	_	7	mark	_	_
5	він	він	PRON	noun:m:v_naz:&pron:pers:3	Case=Nom|Gender=Masc|Person=3|PronType=Prs	7	nsubj	_	_
6	не	не	PART	part	_	7	neg	_	_
7	має	мати	VERB	verb:imperf:pres:s:3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	csubj	_	_
8	алібі	алібі	NOUN	noun:inanim:n:v_rod:nv	Animacy=Inan|Case=Gen|Gender=Neut	7	dobj	_	SpaceAfter=No
9	.	.	PUNCT	punct	_	2	punct	_	_

~~~


