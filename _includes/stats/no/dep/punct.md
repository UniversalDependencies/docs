

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.

36981 nodes (12%) are attached to their parents as `punct`.

33129 instances of `punct` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.74443633217057.

The following 15 pairs of parts of speech are connected with `punct`: [no-pos/VERB]()-[no-pos/PUNCT]() (20679; 56% instances), [no-pos/NOUN]()-[no-pos/PUNCT]() (7512; 20% instances), [no-pos/ADJ]()-[no-pos/PUNCT]() (3766; 10% instances), [no-pos/PROPN]()-[no-pos/PUNCT]() (2763; 7% instances), [no-pos/PRON]()-[no-pos/PUNCT]() (584; 2% instances), [no-pos/NUM]()-[no-pos/PUNCT]() (462; 1% instances), [no-pos/ADV]()-[no-pos/PUNCT]() (358; 1% instances), [no-pos/INTJ]()-[no-pos/PUNCT]() (266; 1% instances), [no-pos/X]()-[no-pos/PUNCT]() (218; 1% instances), [no-pos/DET]()-[no-pos/PUNCT]() (150; 0% instances), [no-pos/ADP]()-[no-pos/PUNCT]() (147; 0% instances), [no-pos/PUNCT]()-[no-pos/PUNCT]() (39; 0% instances), [no-pos/CONJ]()-[no-pos/PUNCT]() (30; 0% instances), [no-pos/AUX]()-[no-pos/PUNCT]() (5; 0% instances), [no-pos/SCONJ]()-[no-pos/PUNCT]() (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 punct	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	ble	bli	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	rene	ren	ADJ	_	Degree=Pos|Number=Plur	4	amod	_	_
4	ord	ord	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	2	xcomp	_	SpaceAfter=No
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
6	sin	sin	DET	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	8	nmod	_	_
7	neste	neste	DET	_	Definite=Def|PronType=Dem	8	det	_	_
8	gjerning	gjerning	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No
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
6	på	på	ADP	_	_	5	compound:prt	_	SpaceAfter=No
7	.	$.	PUNCT	_	_	3	punct	_	SpaceAfter=No
8	»	$"	PUNCT	_	_	3	punct	_	_

~~~


