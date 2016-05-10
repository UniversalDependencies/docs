

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

631 nodes (1%) are attached to their parents as `advcl`.

405 instances of `advcl` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.27416798732171.

The following 14 pairs of parts of speech are connected with `advcl`: [pl-pos/VERB]()-[pl-pos/VERB]() (559; 89% instances), [pl-pos/ADJ]()-[pl-pos/VERB]() (27; 4% instances), [pl-pos/VERB]()-[pl-pos/ADJ]() (16; 3% instances), [pl-pos/PRON]()-[pl-pos/VERB]() (6; 1% instances), [pl-pos/VERB]()-[pl-pos/NOUN]() (6; 1% instances), [pl-pos/ADJ]()-[pl-pos/ADJ]() (4; 1% instances), [pl-pos/NOUN]()-[pl-pos/VERB]() (4; 1% instances), [pl-pos/ADV]()-[pl-pos/VERB]() (2; 0% instances), [pl-pos/AUX]()-[pl-pos/VERB]() (2; 0% instances), [pl-pos/NOUN]()-[pl-pos/NOUN]() (1; 0% instances), [pl-pos/PRON]()-[pl-pos/NOUN]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/ADV]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/AUX]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 advcl	color:blue
1	Wzruszył	wzruszyć	VERB	praet:sg:m1:perf	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	ramionami	ramię	NOUN	subst:pl:inst:n	Case=Ins|Gender=Neut|Number=Plur	1	dobj	_	_
3	,	,	PUNCT	interp:_	_	4	punct	_	_
4	uśmiechając	uśmiechać	VERB	pcon:imperf	Aspect=Imp|Tense=Pres|VerbForm=Trans	1	advcl	_	_
5	się	się	PRON	qub:_	PronType=Prs|Reflex=Yes	4	expl	_	_
6	mimo	mimo	ADP	prep:gen	AdpType=Prep|Case=Gen	7	case	_	_
7	woli	wola	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	_
8	.	.	PUNCT	interp:_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 advcl	color:blue
1	Gdy	gdy	SCONJ	comp:_	_	3	mark	_	_
2	karetka	karetka	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	zabierała	zabierać	VERB	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	10	advcl	_	_
4	chorego	chory	NOUN	subst:sg:acc:m1	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	3	dobj	_	_
5	,	,	PUNCT	interp:_	_	3	punct	_	_
6	jego	on	PRON	ppron3:sg:gen:m1:ter:akc:npraep	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	7	nmod	_	_
7	ciało	ciało	NOUN	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing	10	nsubj	_	_
8	było	być	VERB	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	10	cop	_	_
9	już	już	PART	qub:_	_	10	advmod	_	_
10	sine	siny	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
11	.	.	PUNCT	interp:_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 advcl	color:blue
1	Nagle	nagle	ADV	adv:pos	Degree=Pos	3	advmod	_	_
2	ją	on	PRON	ppron3:sg:acc:f:ter:akc:npraep	Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	3	dobj	_	_
3	znienawidził	znienawidzić	VERB	praet:sg:m1:perf	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
4	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|Variant=Long|VerbForm=Fin	3	aux	_	_
5	,	,	PUNCT	interp:_	_	11	punct	_	_
6	bo	bo	SCONJ	comp:_	_	11	mark	_	_
7	ten	ten	DET	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|PronType=Dem	8	det	_	_
8	śmiech	śmiech	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	11	nsubj	_	_
9	był	być	VERB	praet:sg:m3:imperf	Animacy=Inan|Aspect=Imp|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	11	cop	_	_
10	bardzo	bardzo	ADV	adv:pos	Degree=Pos	11	advmod	_	_
11	okrutny	okrutny	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	advcl	_	_
12	.	.	PUNCT	interp:_	_	3	punct	_	_

~~~


