

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

255 nodes (15%) are attached to their parents as `root`.

255 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.85490196078431.

The following 11 pairs of parts of speech are connected with `root`: [uk-pos/ROOT]()-[uk-pos/VERB]() (163; 64% instances), [uk-pos/ROOT]()-[uk-pos/NOUN]() (34; 13% instances), [uk-pos/ROOT]()-[uk-pos/ADJ]() (28; 11% instances), [uk-pos/ROOT]()-[uk-pos/ADV]() (18; 7% instances), [uk-pos/ROOT]()-[uk-pos/CONJ]() (4; 2% instances), [uk-pos/ROOT]()-[uk-pos/NUM]() (2; 1% instances), [uk-pos/ROOT]()-[uk-pos/PRON]() (2; 1% instances), [uk-pos/ROOT]()-[uk-pos/DET]() (1; 0% instances), [uk-pos/ROOT]()-[uk-pos/INTJ]() (1; 0% instances), [uk-pos/ROOT]()-[uk-pos/PART]() (1; 0% instances), [uk-pos/ROOT]()-[uk-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	Маріє	Марія	PROPN	noun:anim:f:v_kly:prop:fname	Animacy=Anim|Case=Voc|Gender=Fem	5	vocative	_	SpaceAfter=No
2	,	,	PUNCT	punct	_	1	punct	_	_
3	як	як	ADV	adv:&pron:int	PronType=Int	5	advmod	_	_
4	Ваші	ваш	DET	adj:p:v_naz:poss:&pron:pers:2	Case=Nom|Number=Plur|Person=2|Poss=Yes|PronType=Prs	5	det	_	_
5	справи	справа	NOUN	noun:inanim:p:f:v_naz	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	0	root	_	SpaceAfter=No
6	?	?	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Кеннеді	Кеннеді	PROPN	noun:anim:m:v_naz:nv:np:prop:lname	Animacy=Anim|Case=Nom|Gender=Masc	3	nsubjpass	_	_
2	був	бути	VERB	verb:imperf:past:m	Aspect=Imp|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	3	auxpass	_	_
3	убитий	убитий	ADJ	adj:m:v_naz:&adjp:perf:pasv	Aspect=Perf|Case=Nom|Gender=Masc|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
4	.	.	PUNCT	punct	_	3	punct	_	_

~~~


