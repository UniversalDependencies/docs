

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

9 nodes (1%) are attached to their parents as `compound`.

9 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.44444444444444.

The following 3 pairs of parts of speech are connected with `compound`: [uk-pos/NUM]()-[uk-pos/NUM]() (6; 67% instances), [uk-pos/NUM]()-[uk-pos/NOUN]() (2; 22% instances), [uk-pos/ADV]()-[uk-pos/SCONJ]() (1; 11% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	Майже	майже	ADV	adv	_	2	advmod	_	_
2	50	50	NUM	numr	NumType=Card	4	nummod:gov	_	_
3	мільйонів	мільйон	NUM	numr	NumType=Card	2	compound	_	_
4	доларів	долар	NOUN	noun:inanim:p:m:v_rod	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	5	dobj	_	SpaceAfter=No
5	зароблено	заробити	VERB	verb:perf:impers:v-u	Aspect=Perf|VerbForm=Imps	0	root	_	_
6	.	.	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	Нарахував	нарахувати	VERB	verb:perf:past:m	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
2	чотири	чотири	NUM	numr:p:v_zna	Case=Acc|Number=Plur|NumType=Card	4	nummod:gov	_	_
3	тисячі	тисяча	NOUN	noun:inanim:p:f:v_zna:&_numr	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	2	compound	_	_
4	баранців	баранець	NOUN	noun:anim:p:m:v_rod	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	1	dobj	_	SpaceAfter=No
5	.	.	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound	color:blue
1	Пишу	писати	VERB	verb:imperf:pres:s:1	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
2	,	,	PUNCT	punct	_	1	punct	_	_
3	тому	тому	ADV	adv:xp2:&pron:dem	PronType=Dem	5	mark	_	_
4	що	що	SCONJ	conj:subord	_	3	compound	_	_
5	обіцяла	обіцяти	VERB	verb:imperf:past:f	Aspect=Imp|Gender=Fem|Mood=Ind|Tense=Past|VerbForm=Fin	1	ccomp	_	SpaceAfter=No
6	.	.	PUNCT	punct	_	1	punct	_	_

~~~


