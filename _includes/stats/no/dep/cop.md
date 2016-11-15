

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.

7217 nodes (2%) are attached to their parents as `cop`.

6971 instances of `cop` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.27033393376749.

The following 11 pairs of parts of speech are connected with `cop`: [no-pos/ADJ]()-[no-pos/VERB]() (3251; 45% instances), [no-pos/NOUN]()-[no-pos/VERB]() (2644; 37% instances), [no-pos/VERB]()-[no-pos/VERB]() (367; 5% instances), [no-pos/PRON]()-[no-pos/VERB]() (268; 4% instances), [no-pos/ADV]()-[no-pos/VERB]() (206; 3% instances), [no-pos/ADP]()-[no-pos/VERB]() (161; 2% instances), [no-pos/PROPN]()-[no-pos/VERB]() (161; 2% instances), [no-pos/DET]()-[no-pos/VERB]() (99; 1% instances), [no-pos/NUM]()-[no-pos/VERB]() (58; 1% instances), [no-pos/CONJ]()-[no-pos/VERB]() (1; 0% instances), [no-pos/INTJ]()-[no-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	var	være	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	cop	_	_
3	grusomt	grusom	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
4	å	å	PART	_	_	5	mark	_	_
5	høre	høre	VERB	_	VerbForm=Inf	3	advcl	_	_
6	på	på	ADP	_	_	5	compound:prt	_	SpaceAfter=No
7	.	$.	PUNCT	_	_	3	punct	_	SpaceAfter=No
8	»	$"	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cop	color:blue
1	De	de	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	5	nsubj	_	_
2	er	være	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	hva	hva	PRON	_	PronType=Int	5	xcomp	_	_
4	vi	vi	PRON	_	Animacy=Anim|Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
5	blir	bli	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	:	$:	PUNCT	_	_	5	punct	_	_

~~~


