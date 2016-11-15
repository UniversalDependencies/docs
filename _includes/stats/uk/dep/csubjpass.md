

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

3 nodes (0%) are attached to their parents as `csubjpass`.

3 instances of `csubjpass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.33333333333333.

The following 2 pairs of parts of speech are connected with `csubjpass`: [uk-pos/VERB]()-[uk-pos/VERB]() (2; 67% instances), [uk-pos/ADJ]()-[uk-pos/VERB]() (1; 33% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 csubjpass	color:blue
1	Сказано	сказати	VERB	verb:perf:impers	Aspect=Perf|VerbForm=Imps	0	root	_	SpaceAfter=No
2	,	,	PUNCT	punct	_	1	punct	_	_
3	що	що	SCONJ	conj:subord	_	6	mark	_	_
4	віра	віра	NOUN	noun:inanim:f:v_naz	Animacy=Inan|Case=Nom|Gender=Fem	6	nsubj	_	_
5	нас	ми	PRON	noun:anim:p:v_zna:&pron:pers:1	Animacy=Anim|Case=Acc|Number=Plur|Person=1|PronType=Prs	6	dobj	_	_
6	урятує	урятувати	VERB	verb:perf:futr:s:3:v-u	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	1	csubjpass	_	SpaceAfter=No
7	.	.	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubjpass	color:blue
1	Не	не	PART	part	_	3	neg	_	_
2	є	бути	VERB	verb:imperf:pres:s:3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	передбачене	передбачений	ADJ	adj:n:v_naz:&adjp:perf:pasv	Aspect=Perf|Case=Nom|Gender=Neut|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
4	,	,	PUNCT	punct	_	3	punct	_	_
5	що	що	SCONJ	conj:subord	_	7	mark	_	_
6	ви	ви	PRON	noun:anim:p:v_naz:&pron:pers:2	Animacy=Anim|Case=Nom|Number=Plur|Person=2|PronType=Prs	7	nsubj	_	_
7	прийдете	прийти	VERB	verb:perf:futr:p:2	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Fut|VerbForm=Fin	3	csubjpass	_	_
8	перед	перед	ADP	prep:rv_oru	Case=Ins	9	case	_	_
9	дев’ятою	дев’ятий	ADJ	adj:f:v_oru:&numr	Case=Ins|Gender=Fem|NumType=Ord	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	punct	_	3	punct	_	_

~~~


