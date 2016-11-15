

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

39 nodes (2%) are attached to their parents as `xcomp`.

39 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.51282051282051.

The following 5 pairs of parts of speech are connected with `xcomp`: [uk-pos/VERB]()-[uk-pos/VERB]() (22; 56% instances), [uk-pos/ADV]()-[uk-pos/VERB]() (6; 15% instances), [uk-pos/VERB]()-[uk-pos/ADJ]() (5; 13% instances), [uk-pos/ADJ]()-[uk-pos/VERB]() (4; 10% instances), [uk-pos/VERB]()-[uk-pos/NOUN]() (2; 5% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	Він	він	PRON	noun:m:v_naz:&pron:pers:3	Case=Nom|Gender=Masc|Person=3|PronType=Prs	2	nsubj	_	_
2	каже	казати	VERB	verb:imperf:pres:s:3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	punct	_	2	punct	_	_
4	що	що	SCONJ	conj:subord	_	6	mark	_	_
5	ти	ти	PRON	noun:anim:s:v_naz:&pron:pers:2	Animacy=Anim|Case=Nom|Number=Sing|Person=2|PronType=Prs	6	nsubj	_	_
6	любиш	любити	VERB	verb:imperf:pres:s:2	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
7	плавати	плавати	VERB	verb:imperf:inf	Aspect=Imp|VerbForm=Inf	6	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 xcomp	color:blue
1	Треба	треба	ADV	adv	_	0	root	_	_
2	працювати	працювати	VERB	verb:imperf:inf	Aspect=Imp|VerbForm=Inf	1	xcomp	_	_
3	над	над	ADP	prep:rv_oru	Case=Ins	5	case	_	_
4	своїми	свій	DET	adj:p:v_oru:poss:&pron:refl	Case=Ins|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	5	det	_	_
5	помилками	помилка	NOUN	noun:inanim:p:f:v_oru	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur	2	nmod	_	SpaceAfter=No
6	.	.	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Це	це	PRON	noun:inanim:n:v_naz:&pron:dem	Animacy=Inan|Case=Nom|Gender=Neut|PronType=Dem	2	nsubj	_	_
2	може	могти	VERB	verb:imperf:pres:s:3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	бути	бути	VERB	verb:imperf:inf	Aspect=Imp|VerbForm=Inf	4	auxpass	_	_
4	зроблене	зроблений	ADJ	adj:n:v_naz:&adjp:perf:pasv	Aspect=Perf|Case=Nom|Gender=Neut|VerbForm=Part|Voice=Pass	2	xcomp	_	_
5	на	на	ADP	prep:rv_zna	Case=Acc	6	case	_	_
6	завтра	завтра	ADV	adv	_	4	advmod	_	SpaceAfter=No
7	.	.	PUNCT	punct	_	2	punct	_	_

~~~


