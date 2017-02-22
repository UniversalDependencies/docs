

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

36721 nodes (13%) are attached to their parents as `punct`.

26679 instances of `punct` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.3692437569783.

The following 23 pairs of parts of speech are connected with `punct`: [de-pos/VERB]()-[de-pos/PUNCT]() (16215; 44% instances), [de-pos/NOUN]()-[de-pos/PUNCT]() (9067; 25% instances), [de-pos/PROPN]()-[de-pos/PUNCT]() (7214; 20% instances), [de-pos/ADJ]()-[de-pos/PUNCT]() (2861; 8% instances), [de-pos/NUM]()-[de-pos/PUNCT]() (803; 2% instances), [de-pos/PRON]()-[de-pos/PUNCT]() (184; 1% instances), [de-pos/X]()-[de-pos/PUNCT]() (117; 0% instances), [de-pos/ADV]()-[de-pos/PUNCT]() (109; 0% instances), [de-pos/ADP]()-[de-pos/PUNCT]() (42; 0% instances), [de-pos/CCONJ]()-[de-pos/PUNCT]() (20; 0% instances), [de-pos/PART]()-[de-pos/PUNCT]() (16; 0% instances), [de-pos/AUX]()-[de-pos/PUNCT]() (15; 0% instances), [de-pos/PROPN]()-[de-pos/X]() (11; 0% instances), [de-pos/PUNCT]()-[de-pos/PUNCT]() (11; 0% instances), [de-pos/NOUN]()-[de-pos/X]() (9; 0% instances), [de-pos/NUM]()-[de-pos/X]() (8; 0% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (8; 0% instances), [de-pos/NOUN]()-[de-pos/ADP]() (3; 0% instances), [de-pos/DET]()-[de-pos/PUNCT]() (2; 0% instances), [de-pos/PROPN]()-[de-pos/NOUN]() (2; 0% instances), [de-pos/SCONJ]()-[de-pos/PUNCT]() (2; 0% instances), [de-pos/ADJ]()-[de-pos/X]() (1; 0% instances), [de-pos/X]()-[de-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 punct	color:blue
1	Ich	ich	PRON	PPER	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	hatte	haben	VERB	VAFIN	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
3	Gelegenheit	Gelegenheit	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	_
4	eines	ein	DET	ART	Case=Acc|Definite=Ind|Number=Plur|PronType=Art	6	det	_	_
5	seiner	sein	PRON	PPOSAT	Case=Acc|Gender[psor]=Masc,Neut|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	6	det:poss	_	_
6	Seminare	Seminar	NOUN	NN	Case=Acc|Number=Plur	8	obj	_	_
7	zu	zu	PART	PTKZU	_	8	mark	_	_
8	besuchen	besuchen	VERB	VVINF	VerbForm=Inf	3	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 punct	color:blue
1	Manasse	Manasse	PROPN	NN	Case=Nom|Number=Sing	5	nsubj	_	_
2	ist	sein	VERB	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	ein	ein	DET	ART	Definite=Ind|PronType=Art	5	det	_	_
4	einzigartiger	einzigartig	ADJ	ADJA	Degree=Cmp,Pos	5	amod	_	_
5	Parfümeur	Parfümeur	NOUN	NN	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 punct	color:blue
1	Wenn	wenn	SCONJ	KOUS	_	6	mark	_	_
2	es	es	PRON	PPER	Case=Acc,Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	expl	_	_
3	schon	schon	ADV	ADV	_	6	advmod	_	_
4	Fastfood	Fastfood	NOUN	NN	Case=Nom|Number=Sing	6	nsubj	_	_
5	sein	sein	AUX	VAINF	VerbForm=Inf	6	aux	_	_
6	muss	müssen	VERB	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	advcl	_	SpaceAfter=No
7	,	,	PUNCT	$,	_	10	punct	_	_
8	dann	dann	ADV	ADV	_	10	advmod	_	_
9	bei	bei	ADP	APPR	_	10	case	_	_
10	Jim	Jim	PROPN	NE	_	0	root	_	_
11	Block	Block	PROPN	NN	_	10	flat	_	SpaceAfter=No
12	.	.	PUNCT	$.	_	10	punct	_	_

~~~


