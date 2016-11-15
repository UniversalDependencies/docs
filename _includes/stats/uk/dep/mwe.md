

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

9 nodes (1%) are attached to their parents as `mwe`.

9 instances of `mwe` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.22222222222222.

The following 3 pairs of parts of speech are connected with `mwe`: [uk-pos/ADP]()-[uk-pos/NOUN]() (5; 56% instances), [uk-pos/ADP]()-[uk-pos/ADP]() (3; 33% instances), [uk-pos/ADV]()-[uk-pos/ADV]() (1; 11% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mwe	color:blue
1	Під	під	ADP	prep:rv_zna	Case=Acc	3	case	_	_
2	час	час	NOUN	noun:inanim:m:v_zna	Animacy=Inan|Case=Acc|Gender=Masc	1	mwe	_	_
3	гри	гра	NOUN	noun:inanim:f:v_rod	Animacy=Inan|Case=Gen|Gender=Fem	5	nmod	_	_
4	не	не	PART	part	_	5	neg	_	_
5	патякати	патякати	VERB	verb:imperf:inf	Aspect=Imp|VerbForm=Inf	0	root	_	SpaceAfter=No
6	.	.	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mwe	color:blue
1	Незважаючи	незважаючи	ADP	prep	_	3	case	_	_
2	на	на	ADP	prep:rv_zna	Case=Acc	1	mwe	_	_
3	труднощі	труднощі	NOUN	noun:inanim:p:v_zna:ns	Animacy=Inan|Case=Acc|Number=Plur	5	nmod	_	_
4	він	він	PRON	noun:m:v_naz:&pron:pers:3	Case=Nom|Gender=Masc|Person=3|PronType=Prs	5	nsubj	_	_
5	переміг	перемогти	VERB	verb:perf:past:m	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
6	.	.	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 mwe	color:blue
1	Коли	коли	ADV	adv:&pron:rel	PronType=Rel	3	mark	_	_
2	вони	вони	PRON	noun:p:v_naz:&pron:pers:3	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	_	_
3	доїхали	доїхати	VERB	verb:perf:past:p	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	20	advcl	_	_
4	до	до	ADP	prep:rv_rod	Case=Gen	5	case	_	_
5	траси	траса	NOUN	noun:inanim:f:v_rod	Animacy=Inan|Case=Gen|Gender=Fem	3	nmod	_	SpaceAfter=No
6	,	,	PUNCT	punct	_	3	punct	_	_
7	мати	мати	NOUN	noun:anim:f:v_naz	Animacy=Anim|Case=Nom|Gender=Fem	20	nsubj	_	_
8	—	—	PUNCT	punct	_	12	punct	_	_
9	втомлена	втомлений	ADJ	adj:f:v_naz:&adjp:perf:pasv:v-u	Aspect=Perf|Case=Nom|Gender=Fem|VerbForm=Part|Voice=Pass	12	amod	_	_
10	від	від	ADP	prep:rv_rod	Case=Gen	11	case	_	_
11	тягарів	тягар	NOUN	noun:inanim:p:m:v_rod	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	9	nmod	_	_
12	жінка	жінка	NOUN	noun:anim:f:v_naz	Animacy=Anim|Case=Nom|Gender=Fem	7	appos	_	_
13	з	з	ADP	prep:rv_oru	Case=Ins	15	case	_	_
14	пожовтілим	пожовтілий	ADJ	adj:n:v_oru:&adjp:perf:actv	Aspect=Perf|Case=Ins|Gender=Neut|VerbForm=Part|Voice=Act	15	amod	_	_
15	обличчям	обличчя	NOUN	noun:inanim:n:v_oru	Animacy=Inan|Case=Ins|Gender=Neut	12	nmod	_	_
16	—	—	PUNCT	punct	_	12	punct	_	_
17	все	все	ADV	adv	_	20	advmod	_	_
18	ще	ще	ADV	adv	_	17	mwe	_	_
19	здалеку	здалеку	ADV	adv	_	20	advmod	_	_
20	виглядала	виглядати	VERB	verb:imperf:past:f	Aspect=Imp|Gender=Fem|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
21	свого	свій	DET	adj:m:v_zna:ranim:poss:&pron:refl	Case=Acc|Gender=Masc|Poss=Yes|PronType=Prs|Reflex=Yes	22	det	_	_
22	чоловіка	чоловік	NOUN	noun:anim:m:v_zna	Animacy=Anim|Case=Acc|Gender=Masc	20	dobj	_	SpaceAfter=No
23	.	.	PUNCT	punct	_	20	punct	_	_

~~~


