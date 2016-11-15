

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

17 nodes (1%) are attached to their parents as `parataxis`.

15 instances of `parataxis` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.23529411764706.

The following 7 pairs of parts of speech are connected with `parataxis`: [uk-pos/VERB]()-[uk-pos/VERB]() (11; 65% instances), [uk-pos/ADJ]()-[uk-pos/VERB]() (1; 6% instances), [uk-pos/CONJ]()-[uk-pos/PRON]() (1; 6% instances), [uk-pos/CONJ]()-[uk-pos/VERB]() (1; 6% instances), [uk-pos/NOUN]()-[uk-pos/VERB]() (1; 6% instances), [uk-pos/VERB]()-[uk-pos/ADV]() (1; 6% instances), [uk-pos/VERB]()-[uk-pos/PRON]() (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 parataxis	color:blue
1	Хлопець	хлопець	NOUN	noun:anim:m:v_naz	Animacy=Anim|Case=Nom|Gender=Masc	6	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	punct	_	3	punct	_	_
3	сказав	сказати	VERB	verb:perf:past:m	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	6	parataxis	_	_
4	Микола	Микола	PROPN	noun:anim:m:v_naz:prop:fname	Animacy=Anim|Case=Nom|Gender=Masc	3	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	punct	_	3	punct	_	_
6	пішов	піти	VERB	verb:perf:past:m	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
7	собі	себе	PRON	noun:v_dav:&pron:refl	Case=Dat|PronType=Prs|Reflex=Yes	6	expl	_	_
8	раніше	раніше	ADV	adv:compr	Degree=Cmp	6	advmod	_	SpaceAfter=No
9	.	.	PUNCT	punct	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 parataxis	color:blue
1	Не	не	PART	part	_	2	neg	_	_
2	забуваймо	забувати	VERB	verb:imperf:impr:p:1	Aspect=Imp|Mood=Imp|Number=Plur|Person=1|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	punct	_	2	punct	_	_
4	це	це	PRON	noun:inanim:n:v_naz:&pron:dem	Animacy=Inan|Case=Nom|Gender=Neut|PronType=Dem	7	nsubj	_	_
5	ще	ще	ADV	adv	_	7	advmod	_	_
6	не	не	PART	part	_	7	neg	_	_
7	все	все	PRON	noun:inanim:n:v_naz:&pron:gen:v-u	Animacy=Inan|Case=Nom|Gender=Neut|PronType=Tot	2	parataxis	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 parataxis	color:blue
1	Ось	ось	PART	part	_	4	discourse	_	_
2	цей	цей	DET	adj:m:v_naz:&pron:dem	Case=Nom|Gender=Masc|PronType=Dem	4	nsubj	_	_
3	буде	бути	VERB	verb:imperf:futr:s:3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	cop	_	_
4	добрий	добрий	ADJ	adj:m:v_naz:compb	Case=Nom|Degree=Pos|Gender=Masc	0	root	_	SpaceAfter=No
5	,	,	PUNCT	punct	_	4	punct	_	_
6	думаю	думати	VERB	verb:imperf:pres:s:1	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	parataxis	_	SpaceAfter=No
7	.	.	PUNCT	punct	_	4	punct	_	_

~~~


