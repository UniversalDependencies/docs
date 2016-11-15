

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

10 nodes (1%) are attached to their parents as `advcl`.

6 instances of `advcl` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.4.

The following 4 pairs of parts of speech are connected with `advcl`: [uk-pos/VERB]()-[uk-pos/VERB]() (7; 70% instances), [uk-pos/ADJ]()-[uk-pos/VERB]() (1; 10% instances), [uk-pos/ADV]()-[uk-pos/NOUN]() (1; 10% instances), [uk-pos/ADV]()-[uk-pos/VERB]() (1; 10% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advcl	color:blue
1	Як	як	SCONJ	conj:subord	_	3	mark	_	_
2	тільки	тільки	PART	part	_	3	discourse	_	_
3	прокидається	прокидатися	VERB	verb:rev:imperf:pres:s:3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	advcl	_	SpaceAfter=No
4	,	,	PUNCT	punct	_	3	punct	_	_
5	біжить	бігти	VERB	verb:imperf:pres:s:3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	до	до	ADP	prep:rv_rod	Case=Gen	7	case	_	_
7	вікна	вікно	NOUN	noun:inanim:n:v_rod	Animacy=Inan|Case=Gen|Gender=Neut	5	nmod	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 advcl	color:blue
1	Податники	податник	NOUN	noun:anim:p:m:v_naz	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	2	nsubj	_	_
2	мусять	мусити	VERB	verb:imperf:pres:p:3	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	платити	платити	VERB	verb:imperf:inf	Aspect=Imp|VerbForm=Inf	2	xcomp	_	_
4	стільки	стільки	ADV	adv:&pron:dem	Case=Acc|Number=Plur|NumType=Card|PronType=Dem	3	advmod	_	SpaceAfter=No
5	,	,	PUNCT	punct	_	2	punct	_	_
6	скільки	скільки	ADV	adv:&pron:rel	Case=Acc|Number=Plur|NumType=Card|PronType=Int	8	nsubjpass	_	_
7	буде	бути	VERB	verb:imperf:futr:s:3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	8	aux	_	_
8	визначено	визначити	VERB	verb:perf:impers	Aspect=Perf|VerbForm=Imps	4	advcl	_	SpaceAfter=No
9	.	.	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 advcl	color:blue
1	У	у	ADP	prep:rv_mis:v-u	Case=Loc	2	case	_	_
2	квартирі	квартира	NOUN	noun:inanim:f:v_mis	Animacy=Inan|Case=Loc|Gender=Fem	6	nmod	_	_
3	у	у	ADP	prep:rv_rod:v-u	Case=Gen	4	case	_	_
4	вас	ви	PRON	noun:anim:p:v_rod:&pron:pers:2	Animacy=Anim|Case=Gen|Number=Plur|Person=2|PronType=Prs	7	nmod	_	_
5	приємні	приємний	ADJ	adj:p:v_naz:compb	Case=Nom|Degree=Pos|Number=Plur	6	amod	_	_
6	24	24	NUM	numr	NumType=Card	7	nummod	_	_
7	градуси	градус	NOUN	noun:inanim:p:m:v_naz	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
8	,	,	PUNCT	punct	_	7	punct	_	_
9	і	і	CONJ	conj:coord	_	11	discourse	_	_
10	це	це	PRON	noun:inanim:n:v_naz:&pron:dem	Animacy=Inan|Case=Nom|Gender=Neut|PronType=Dem	11	discourse	_	_
11	тоді	тоді	ADV	adv:&pron:dem	PronType=Dem	7	advmod	_	SpaceAfter=No
12	,	,	PUNCT	punct	_	11	punct	_	_
13	коли	коли	ADV	adv:&pron:rel	PronType=Rel	15	mark	_	_
14	назовні	назовні	ADV	adv	_	15	advmod	_	_
15	мороз	мороз	NOUN	noun:inanim:m:v_naz	Animacy=Inan|Case=Nom|Gender=Masc	11	advcl	_	SpaceAfter=No
16	,	,	PUNCT	punct	_	15	punct	_	_
17	аж	аж	PART	part	_	18	discourse	_	_
18	тріщить	тріщати	VERB	verb:imperf:pres:s:3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	parataxis	_	SpaceAfter=No
19	.	.	PUNCT	punct	_	7	punct	_	_

~~~


