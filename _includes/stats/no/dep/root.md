

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.

20045 nodes (6%) are attached to their parents as `root`.

20045 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.72726365677226.

The following 14 pairs of parts of speech are connected with `root`: [no-pos/ROOT]()-[no-pos/VERB]() (13780; 69% instances), [no-pos/ROOT]()-[no-pos/NOUN]() (2918; 15% instances), [no-pos/ROOT]()-[no-pos/ADJ]() (2071; 10% instances), [no-pos/ROOT]()-[no-pos/PROPN]() (520; 3% instances), [no-pos/ROOT]()-[no-pos/PRON]() (242; 1% instances), [no-pos/ROOT]()-[no-pos/ADV]() (169; 1% instances), [no-pos/ROOT]()-[no-pos/ADP]() (79; 0% instances), [no-pos/ROOT]()-[no-pos/DET]() (76; 0% instances), [no-pos/ROOT]()-[no-pos/INTJ]() (75; 0% instances), [no-pos/ROOT]()-[no-pos/NUM]() (54; 0% instances), [no-pos/ROOT]()-[no-pos/X]() (51; 0% instances), [no-pos/ROOT]()-[no-pos/CONJ]() (5; 0% instances), [no-pos/ROOT]()-[no-pos/SYM]() (4; 0% instances), [no-pos/ROOT]()-[no-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	ble	bli	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	rene	ren	ADJ	_	Degree=Pos|Number=Plur	4	amod	_	_
4	ord	ord	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	2	xcomp	_	SpaceAfter=No
5	:	$:	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	var	være	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	cop	_	_
3	grusomt	grusom	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
4	å	å	PART	_	_	5	mark	_	_
5	høre	høre	VERB	_	VerbForm=Inf	3	advcl	_	_
6	på	på	ADP	_	_	5	compound:prt	_	SpaceAfter=No
7	.	$.	PUNCT	_	_	3	punct	_	SpaceAfter=No
8	»	$"	PUNCT	_	_	3	punct	_	_

~~~


