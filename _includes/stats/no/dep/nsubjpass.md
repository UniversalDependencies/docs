

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.

1853 nodes (1%) are attached to their parents as `nsubjpass`.

1753 instances of `nsubjpass` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.13761467889908.

The following 6 pairs of parts of speech are connected with `nsubjpass`: [no-pos/VERB]()-[no-pos/NOUN]() (974; 53% instances), [no-pos/VERB]()-[no-pos/PRON]() (628; 34% instances), [no-pos/VERB]()-[no-pos/PROPN]() (188; 10% instances), [no-pos/VERB]()-[no-pos/ADJ]() (40; 2% instances), [no-pos/VERB]()-[no-pos/DET]() (15; 1% instances), [no-pos/VERB]()-[no-pos/NUM]() (8; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubjpass	color:blue
1	Fangene	fange	NOUN	_	Definite=Def|Gender=Masc|Number=Plur	2	nsubjpass	_	_
2	slippes	slippe	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
3	fri	fri	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	2	xcomp	_	_
4	|	$|	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubjpass	color:blue
1	-	$-	PUNCT	_	_	4	punct	_	_
2	Men	men	CONJ	_	_	4	cc	_	_
3	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nsubjpass	_	_
4	innføres	innføre	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
5	jo	jo	ADV	_	_	4	advmod	_	_
6	for	for	ADP	_	_	8	mark	_	_
7	å	å	PART	_	_	8	mark	_	_
8	beskytte	beskytte	VERB	_	VerbForm=Inf	4	advcl	_	_
9	dere	dere	PRON	_	Animacy=Anim|Case=Acc|Number=Plur|Person=2|PronType=Prs	8	dobj	_	_
10	som	som	PRON	_	PronType=Rel	11	nsubj	_	_
11	jobber	jobbe	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	9	acl:relcl	_	_
12	her	her	ADV	_	_	11	advmod	_	_
13	?	$?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubjpass	color:blue
1	Finn	Finn	PROPN	_	Gender=Masc	4	nsubjpass	_	_
2	Gustavsen	Gustavsen	PROPN	_	_	1	name	_	_
3	ble	bli	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	4	auxpass	_	_
4	født	føde	VERB	_	VerbForm=Part	0	root	_	_
5	i	i	ADP	_	_	6	case	_	_
6	Drammen	Drammen	PROPN	_	_	4	nmod	_	_
7	i	i	ADP	_	_	8	case	_	_
8	1926	1926	NUM	_	Number=Plur|NumType=Card	4	nmod	_	_
9	.	$.	PUNCT	_	_	4	punct	_	_

~~~


