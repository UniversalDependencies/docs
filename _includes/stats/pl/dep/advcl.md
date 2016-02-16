

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

710 nodes (1%) are attached to their parents as `advcl`.

444 instances of `advcl` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.97042253521127.

The following 13 pairs of parts of speech are connected with `advcl`: [pl-pos/VERB]()-[pl-pos/VERB]() (627; 88% instances), [pl-pos/ADJ]()-[pl-pos/VERB]() (36; 5% instances), [pl-pos/VERB]()-[pl-pos/ADJ]() (16; 2% instances), [pl-pos/VERB]()-[pl-pos/NOUN]() (7; 1% instances), [pl-pos/NOUN]()-[pl-pos/VERB]() (6; 1% instances), [pl-pos/ADV]()-[pl-pos/VERB]() (5; 1% instances), [pl-pos/ADJ]()-[pl-pos/ADJ]() (4; 1% instances), [pl-pos/PART]()-[pl-pos/VERB]() (3; 0% instances), [pl-pos/AUX]()-[pl-pos/VERB]() (2; 0% instances), [pl-pos/ADJ]()-[pl-pos/NOUN]() (1; 0% instances), [pl-pos/NOUN]()-[pl-pos/NOUN]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/ADV]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 advcl	color:blue
1	Wzruszył	wzruszyć	VERB	praet:sg:m1:perf	Animacy=Anim|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
2	ramionami	ramię	NOUN	subst:pl:inst:n	Case=Ins|Gender=Neut|Number=Plur	1	dobj	_	_
3	,	,	PUNCT	interp:_	_	4	punct	_	_
4	uśmiechając	uśmiechać	VERB	pcon:imperf	Aspect=Imp|Tense=Pres|VerbForm=Trans	1	advcl	_	_
5	się	się	PRON	qub:_	PronType=Prs|Reflex=Yes	4	expl	_	_
6	mimo	mimo	ADP	prep:gen	AdpType=Prep|Case=Gen	7	case	_	_
7	woli	wola	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	_
8	.	.	PUNCT	interp:_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 advcl	color:blue
1	-	-	PUNCT	interp:_	_	4	punct	_	_
2	Komora	komora	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
3	będzie	być	AUX	bedzie:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	cop	_	_
4	gotowa	gotowy	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
5	do	do	ADP	prep:gen	AdpType=Prep|Case=Gen	6	mark	_	_
6	wszczepienia	wszczepić	VERB	ger:sg:gen:n:perf:aff	Aspect=Perf|Case=Gen|Gender=Neut|Negative=Pos|Number=Sing|VerbForm=Ger	4	advcl	_	_
7	za	za	ADP	prep:acc	AdpType=Prep|Case=Acc	9	case	_	_
8	jakieś	jakiś	ADJ	adj:sg:acc:n:pos	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	9	amod	_	_
9	półtora	półtora	NOUN	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing	4	nmod	_	_
10	roku	rok	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	9	nmod	_	_
11	.	.	PUNCT	interp:_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 advcl	color:blue
1	Nagle	nagle	ADV	adv:pos	Degree=Pos	3	advmod	_	_
2	ją	on	PRON	ppron3:sg:acc:f:ter:akc:npraep	Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	3	dobj	_	_
3	znienawidził	znienawidzić	VERB	praet:sg:m1:perf	Animacy=Anim|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
4	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|Variant=Long|VerbForm=Fin	3	aux	_	_
5	,	,	PUNCT	interp:_	_	11	punct	_	_
6	bo	bo	SCONJ	comp:_	_	11	mark	_	_
7	ten	ten	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
8	śmiech	śmiech	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	11	nsubj	_	_
9	był	być	VERB	praet:sg:m3:imperf	Animacy=Inan|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	11	cop	_	_
10	bardzo	bardzo	ADV	adv:pos	Degree=Pos	11	advmod	_	_
11	okrutny	okrutny	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	advcl	_	_
12	.	.	PUNCT	interp:_	_	3	punct	_	_

~~~


