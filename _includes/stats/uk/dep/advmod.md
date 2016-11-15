

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

72 nodes (4%) are attached to their parents as `advmod`.

51 instances of `advmod` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.52777777777778.

The following 6 pairs of parts of speech are connected with `advmod`: [uk-pos/VERB]()-[uk-pos/ADV]() (46; 64% instances), [uk-pos/NOUN]()-[uk-pos/ADV]() (8; 11% instances), [uk-pos/ADV]()-[uk-pos/ADV]() (7; 10% instances), [uk-pos/ADJ]()-[uk-pos/ADV]() (5; 7% instances), [uk-pos/NUM]()-[uk-pos/ADV]() (4; 6% instances), [uk-pos/PRON]()-[uk-pos/ADV]() (2; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 advmod	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advmod	color:blue
1	Маріє	Марія	PROPN	noun:anim:f:v_kly:prop:fname	Animacy=Anim|Case=Voc|Gender=Fem	5	vocative	_	SpaceAfter=No
2	,	,	PUNCT	punct	_	1	punct	_	_
3	як	як	ADV	adv:&pron:int	PronType=Int	5	advmod	_	_
4	Ваші	ваш	DET	adj:p:v_naz:poss:&pron:pers:2	Case=Nom|Number=Plur|Person=2|Poss=Yes|PronType=Prs	5	det	_	_
5	справи	справа	NOUN	noun:inanim:p:f:v_naz	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	0	root	_	SpaceAfter=No
6	?	?	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod	color:blue
1	Пане	пан	NOUN	noun:anim:m:v_kly	Animacy=Anim|Case=Voc|Gender=Masc	2	nmod	_	_
2	Президенте	президент	NOUN	noun:anim:m:v_kly	Animacy=Anim|Case=Voc|Gender=Masc	5	vocative	_	SpaceAfter=No
3	,	,	PUNCT	punct	_	5	punct	_	_
4	скільки	скільки	ADV	adv:&pron:int	Case=Nom|Number=Plur|NumType=Card|PronType=Int	5	advmod	_	_
5	можна	можна	ADV	adv	_	0	root	_	SpaceAfter=No
6	?	?	PUNCT	punct	_	5	punct	_	_

~~~


