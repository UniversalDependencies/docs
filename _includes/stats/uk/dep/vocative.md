

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

8 nodes (0%) are attached to their parents as `vocative`.

7 instances of `vocative` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.375.

The following 8 pairs of parts of speech are connected with `vocative`: [uk-pos/ADV]()-[uk-pos/NOUN]() (1; 13% instances), [uk-pos/INTJ]()-[uk-pos/NOUN]() (1; 13% instances), [uk-pos/NOUN]()-[uk-pos/NOUN]() (1; 13% instances), [uk-pos/NOUN]()-[uk-pos/PROPN]() (1; 13% instances), [uk-pos/PRON]()-[uk-pos/PROPN]() (1; 13% instances), [uk-pos/VERB]()-[uk-pos/NOUN]() (1; 13% instances), [uk-pos/VERB]()-[uk-pos/PRON]() (1; 13% instances), [uk-pos/VERB]()-[uk-pos/PROPN]() (1; 13% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 vocative	color:blue
1	Так	так	INTJ	intj	_	0	root	_	SpaceAfter=No
2	,	,	PUNCT	punct	_	3	punct	_	_
3	лікарю	лікар	NOUN	noun:anim:m:v_kly	Animacy=Anim|Case=Voc|Gender=Masc	1	vocative	_	SpaceAfter=No
4	,	,	PUNCT	punct	_	3	punct	_	_
5	саме	саме	PART	part	_	6	mark	_	_
6	цієї	цей	DET	adj:f:v_rod:&pron:dem	Case=Gen|Gender=Fem|PronType=Dem	7	det	_	_
7	ночі	ніч	NOUN	noun:inanim:f:v_rod	Animacy=Inan|Case=Gen|Gender=Fem	1	nmod	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 vocative	color:blue
1	Боже	бог	NOUN	noun:anim:m:v_kly	Animacy=Anim|Case=Voc|Gender=Masc	5	vocative	_	SpaceAfter=No
2	,	,	PUNCT	punct	_	1	punct	_	_
3	як	як	ADV	adv:&pron:int	PronType=Int	5	advmod	_	_
4	далі	далі	ADV	adv	_	5	advmod	_	_
5	жити	жити	VERB	verb:imperf:inf	Aspect=Imp|VerbForm=Inf	0	root	_	SpaceAfter=No
6	?	?	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 vocative	color:blue
1	Але	але	CONJ	conj:coord	_	0	root	_	_
2	ти	ти	PRON	noun:anim:s:v_kly:&pron:pers:2	Animacy=Anim|Case=Voc|Number=Sing|Person=2|PronType=Prs	7	vocative	_	SpaceAfter=No
3	,	,	PUNCT	punct	_	4	punct	_	_
4	малий	малий	ADJ	adj:m:v_kly:compb	Case=Voc|Degree=Pos|Gender=Masc	2	appos	_	SpaceAfter=No
5	,	,	PUNCT	punct	_	4	punct	_	_
6	не	не	PART	part	_	7	neg	_	_
7	думай	думати	VERB	verb:imperf:impr:s:2	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	1	parataxis	_	SpaceAfter=No
8	,	,	PUNCT	punct	_	7	punct	_	_
9	що	що	SCONJ	conj:subord	_	12	mark	_	_
10	все	все	PRON	noun:inanim:n:v_naz:&pron:gen:v-u	Animacy=Inan|Case=Nom|Gender=Neut|PronType=Tot	12	nsubj	_	_
11	так	так	ADV	adv:&pron:dem	_	12	advmod	_	_
12	просто	просто	ADV	adv:compb	Degree=Pos	7	ccomp	_	SpaceAfter=No
13	.	.	PUNCT	punct	_	7	punct	_	_

~~~


