

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

40 nodes (0%) are attached to their parents as `cop`.

36 instances of `cop` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.075.

The following 5 pairs of parts of speech are connected with `cop`: [et-pos/ADJ]()-[et-pos/VERB]() (21; 53% instances), [et-pos/NOUN]()-[et-pos/VERB]() (13; 33% instances), [et-pos/NUM]()-[et-pos/VERB]() (2; 5% instances), [et-pos/PRON]()-[et-pos/VERB]() (2; 5% instances), [et-pos/VERB]()-[et-pos/VERB]() (2; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
1	Klaasid	klaas+d	NOUN	n/com,pl,nom,.cap	Case=Nom|Number=Plur	4	nsubj	_	_
2	on	ole+0	VERB	v-fin/main,indic,pres,ps3,pl,ps,af,.FinV,.Intr	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	täis	täis+0	ADV	adv/--	_	4	advmod	_	_
4	valatud	vala=tud+0	ADJ	adj/pos,.tud,partic	Degree=Pos|VerbForm=Part	0	root	_	_
5	.	.	PUNCT	punc/Fst	PunctType=Peri	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cop	color:blue
1	Telia	Telia+0	PROPN	prop/prop,sg,nom,%cap	Case=Nom|Number=Sing	5	nsubj	_	_
2	on	ole+0	VERB	v/main,indic,pres,ps3,sg,ps,af	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	Eesti	Eesti+0	PROPN	prop/prop,sg,gen,%cap	Case=Gen|Number=Sing	4	nmod	_	_
4	Telefoni	telefon+0	NOUN	n/com,sg,gen,%cap	Case=Gen|Number=Sing	5	nmod	_	_
5	osanik	osanik+0	NOUN	n/com,sg,nom	Case=Nom|Number=Sing	0	root	_	_
6	.	--	PUNCT	punc/--	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	Paltsi	Palts+0	PROPN	prop/prop,sg,gen,%cap	Case=Gen|Number=Sing	2	nmod	_	_
2	vasallid	vasall+d	NOUN	n/com,pl,nom	Case=Nom|Number=Plur	4	nsubj	_	_
3	on	ole+0	VERB	v/main,indic,pres,ps3,pl,ps,af	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	neli	neli+0	NUM	num/card,sg,nom,l	Case=Nom|Number=Sing|NumForm=Word|NumType=Card	0	root	_	_
5	firmat	firma+t	NOUN	n/com,sg,part	Case=Par|Number=Sing	4	nmod	_	_
6	,	--	PUNCT	punc/--	_	5	punct	_	_
7	kelle	kes+0	PRON	pron/rel,sg,gen	Case=Gen|Number=Sing|PronType=Rel	8	nmod	_	_
8	nimesid	nimi+sid	NOUN	n/com,pl,part	Case=Par|Number=Plur	10	dobj	_	_
9	ta	tema+0	PRON	pron/pers,ps3,sg,nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	_
10	avaldamast	avalda+mast	VERB	v/main,sup,ps,el	Case=Ela|VerbForm=Sup	11	advcl	_	_
11	keeldub	keeldu+b	VERB	v/main,indic,pres,ps3,sg,ps,af	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl	_	_
12	.	--	PUNCT	punc/--	_	4	punct	_	_

~~~


