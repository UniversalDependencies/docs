

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

35 nodes (2%) are attached to their parents as `neg`.

35 instances of `neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14285714285714.

The following 6 pairs of parts of speech are connected with `neg`: [uk-pos/VERB]()-[uk-pos/PART]() (20; 57% instances), [uk-pos/ADJ]()-[uk-pos/PART]() (5; 14% instances), [uk-pos/ADV]()-[uk-pos/PART]() (5; 14% instances), [uk-pos/PRON]()-[uk-pos/PART]() (3; 9% instances), [uk-pos/DET]()-[uk-pos/PART]() (1; 3% instances), [uk-pos/NOUN]()-[uk-pos/PART]() (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 neg	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 neg	color:blue
1	Це	це	PRON	noun:inanim:n:v_naz:&pron:dem	Animacy=Inan|Case=Nom|Gender=Neut|PronType=Dem	4	nsubj	_	_
2	не	не	PART	part	_	4	neg	_	_
3	є	бути	VERB	verb:imperf:pres:s:3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	потрібно	потрібно	ADV	adv:compb	Degree=Pos	0	root	_	_
5	.	.	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 neg	color:blue
1	Порушники	порушник	NOUN	noun:anim:p:m:v_naz	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	4	nsubjpass	_	_
2	не	не	PART	part	_	4	neg	_	_
3	були	бути	VERB	verb:imperf:past:p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	4	auxpass	_	_
4	зловлені	зловлений	ADJ	adj:p:v_naz:&adjp:perf:pasv	Aspect=Perf|Case=Nom|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
5	.	.	PUNCT	punct	_	4	punct	_	_

~~~


