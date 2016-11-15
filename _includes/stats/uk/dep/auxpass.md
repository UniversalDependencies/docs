

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

8 nodes (0%) are attached to their parents as `auxpass`.

8 instances of `auxpass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `auxpass`: [uk-pos/ADJ]()-[uk-pos/VERB]() (6; 75% instances), [uk-pos/VERB]()-[uk-pos/VERB]() (2; 25% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 auxpass	color:blue
1	Кеннеді	Кеннеді	PROPN	noun:anim:m:v_naz:nv:np:prop:lname	Animacy=Anim|Case=Nom|Gender=Masc	3	nsubjpass	_	_
2	був	бути	VERB	verb:imperf:past:m	Aspect=Imp|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	3	auxpass	_	_
3	убитий	убитий	ADJ	adj:m:v_naz:&adjp:perf:pasv	Aspect=Perf|Case=Nom|Gender=Masc|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
4	.	.	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 auxpass	color:blue
1	Буде	бути	VERB	verb:imperf:futr:s:3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	2	auxpass	_	_
2	зроблено	зробити	VERB	verb:perf:impers	Aspect=Perf|VerbForm=Imps	0	root	_	_
3	на	на	ADP	prep:rv_zna	Case=Acc	4	case	_	_
4	завтра	завтра	ADV	adv	_	2	advmod	_	SpaceAfter=No
5	.	.	PUNCT	punct	_	2	punct	_	_

~~~


