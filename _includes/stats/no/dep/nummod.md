

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.

2071 nodes (1%) are attached to their parents as `nummod`.

2065 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14485755673588.

The following 5 pairs of parts of speech are connected with `nummod`: [no-pos/NOUN]()-[no-pos/NUM]() (2009; 97% instances), [no-pos/ADJ]()-[no-pos/NUM]() (54; 3% instances), [no-pos/DET]()-[no-pos/NUM]() (4; 0% instances), [no-pos/PROPN]()-[no-pos/NUM]() (3; 0% instances), [no-pos/PRON]()-[no-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nummod	color:blue
1	NATO	NATO	NOUN	_	_	3	nsubj	_	_
2	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	fått	få	VERB	_	VerbForm=Part	0	root	_	_
4	to	to	NUM	_	Number=Plur	6	nummod	_	_
5	nye	ny	ADJ	_	Degree=Pos|Number=Plur	6	amod	_	_
6	medlemsland	medlemsland	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	3	dobj	_	_
7	|	$|	SYM	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	To	to	NUM	_	Number=Plur	2	nummod	_	_
2	kontoransatte	kontoransatt	ADJ	_	Degree=Pos|Number=Plur	6	nsubj	_	_
3	var	være	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	6	cop	_	_
4	også	også	ADV	_	_	6	advmod	_	_
5	til	til	ADP	_	_	6	case	_	_
6	stede	stede	NOUN	_	_	0	root	_	_
7	.	$.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Også	også	ADV	_	_	3	nmod	_	_
2	to	to	NUM	_	Number=Plur	3	nummod	_	_
3	andre	annen	DET	_	Number=Plur|PronType=Dem	8	nsubjpass	_	_
4	av	av	ADP	_	_	6	case	_	_
5	LOs	LO	PROPN	_	Case=Gen	6	det	_	_
6	krav	krav	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	3	nmod	_	_
7	ble	bli	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	8	auxpass	_	_
8	innfridd	innfri	VERB	_	VerbForm=Part	0	root	_	_
9	på	på	ADP	_	_	10	case	_	_
10	bystyremøtet	bystyremøte	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	8	nmod	_	_
11	fredag	fredag	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	10	nmod	_	_
12	:	$:	PUNCT	_	_	8	punct	_	_

~~~


