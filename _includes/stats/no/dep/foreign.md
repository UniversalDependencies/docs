

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.

638 nodes (0%) are attached to their parents as `foreign`.

627 instances of `foreign` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.92319749216301.

The following 3 pairs of parts of speech are connected with `foreign`: [no-pos/X]()-[no-pos/X]() (477; 75% instances), [no-pos/PROPN]()-[no-pos/X]() (154; 24% instances), [no-pos/NOUN]()-[no-pos/X]() (7; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 foreign	color:blue
1	«	$"	PUNCT	_	_	3	punct	_	_
2	...	$...	PUNCT	_	_	3	parataxis	_	_
3	where	where	X	_	_	0	root	_	_
4	do	do	X	_	_	3	foreign	_	_
5	we	we	X	_	_	3	foreign	_	_
6	go	go	X	_	_	3	foreign	_	_
7	when	when	X	_	_	3	foreign	_	_
8	we	we	X	_	_	3	foreign	_	_
9	die	die	X	_	_	3	foreign	_	_
10	?	$?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 foreign	color:blue
1	Jeg	jeg	PRON	_	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	går	gå	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	til	til	ADP	_	_	4	case	_	_
4	Museo	Museo	PROPN	_	_	2	nmod	_	_
5	del	del	X	_	_	4	foreign	_	_
6	Castello	Castello	PROPN	_	_	4	name	_	_
7	Sforzesco	Sforzesco	PROPN	_	_	4	name	_	_
8	i	i	ADP	_	_	9	case	_	_
9	Milano	Milano	PROPN	_	_	4	nmod	_	_
10	.	$.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 foreign	color:blue
1	Elsa	Elsa	PROPN	_	Gender=Fem	2	nsubj	_	_
2	bytter	bytte	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ut	ut	ADP	_	_	2	compound:prt	_	_
4	«	$"	PUNCT	_	_	9	name	_	_
5	I	I	X	_	_	9	foreign	_	_
6	love	love	X	_	_	9	foreign	_	_
7	N.Y.	N.Y.	PROPN	_	_	9	name	_	_
8	»	$"	PUNCT	_	_	9	name	_	_
9	-T-skjorta	-T-skjorte	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	2	dobj	_	_
10	med	med	ADP	_	_	11	case	_	_
11	prinsessekjole	prinsessekjole	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	2	nmod	_	_
12	.	$.	PUNCT	_	_	2	punct	_	_

~~~


