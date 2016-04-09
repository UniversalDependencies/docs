

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.

37973 nodes (12%) are attached to their parents as `punct`.

34114 instances of `punct` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.62886787980934.

The following 32 pairs of parts of speech are connected with `punct`: [no-pos/VERB]()-[no-pos/PUNCT]() (20658; 54% instances), [no-pos/NOUN]()-[no-pos/PUNCT]() (7446; 20% instances), [no-pos/ADJ]()-[no-pos/PUNCT]() (3765; 10% instances), [no-pos/PROPN]()-[no-pos/PUNCT]() (2693; 7% instances), [no-pos/PRON]()-[no-pos/PUNCT]() (584; 2% instances), [no-pos/NOUN]()-[no-pos/SYM]() (467; 1% instances), [no-pos/NUM]()-[no-pos/PUNCT]() (456; 1% instances), [no-pos/VERB]()-[no-pos/SYM]() (377; 1% instances), [no-pos/ADV]()-[no-pos/PUNCT]() (358; 1% instances), [no-pos/INTJ]()-[no-pos/PUNCT]() (266; 1% instances), [no-pos/X]()-[no-pos/PUNCT]() (174; 0% instances), [no-pos/PROPN]()-[no-pos/SYM]() (162; 0% instances), [no-pos/DET]()-[no-pos/PUNCT]() (150; 0% instances), [no-pos/ADP]()-[no-pos/PUNCT]() (147; 0% instances), [no-pos/ADJ]()-[no-pos/SYM]() (86; 0% instances), [no-pos/NOUN]()-[no-pos/NUM]() (53; 0% instances), [no-pos/PUNCT]()-[no-pos/PUNCT]() (39; 0% instances), [no-pos/CONJ]()-[no-pos/PUNCT]() (30; 0% instances), [no-pos/PROPN]()-[no-pos/NUM]() (17; 0% instances), [no-pos/VERB]()-[no-pos/NUM]() (15; 0% instances), [no-pos/AUX]()-[no-pos/PUNCT]() (5; 0% instances), [no-pos/CONJ]()-[no-pos/SYM]() (5; 0% instances), [no-pos/NUM]()-[no-pos/SYM]() (4; 0% instances), [no-pos/SYM]()-[no-pos/SYM]() (4; 0% instances), [no-pos/PRON]()-[no-pos/SYM]() (3; 0% instances), [no-pos/ADV]()-[no-pos/SYM]() (2; 0% instances), [no-pos/SCONJ]()-[no-pos/PUNCT]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/NUM]() (1; 0% instances), [no-pos/ADP]()-[no-pos/DET]() (1; 0% instances), [no-pos/ADP]()-[no-pos/SYM]() (1; 0% instances), [no-pos/INTJ]()-[no-pos/SYM]() (1; 0% instances), [no-pos/X]()-[no-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 punct	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	ble	bli	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	rene	ren	ADJ	_	Degree=Pos|Number=Plur	4	amod	_	_
4	ord	ord	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	2	xcomp	_	_
5	:	$:	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 punct	color:blue
1	Thomassen	Thomassen	PROPN	_	_	4	nsubj	_	_
2	er	være	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	på	på	ADP	_	_	4	case	_	_
4	vei	vei	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
5	til	til	ADP	_	_	8	case	_	_
6	sin	sin	DET	_	Gender=Masc|Number=Sing|Poss=Yes	8	nmod	_	_
7	neste	neste	DET	_	Definite=Def|PronType=Dem	8	det	_	_
8	gjerning	gjerning	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	4	nmod	_	_
9	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 punct	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	var	være	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	cop	_	_
3	grusomt	grusom	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
4	å	å	PART	_	_	5	mark	_	_
5	høre	høre	VERB	_	VerbForm=Inf	3	advcl	_	_
6	på	på	ADP	_	_	5	compound:prt	_	_
7	.	$.	PUNCT	_	_	3	punct	_	_
8	»	$"	PUNCT	_	_	3	punct	_	_

~~~


