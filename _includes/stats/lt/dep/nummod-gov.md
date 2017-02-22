

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian)

This relation is a language-specific subtype of [nummod]().

6 nodes (0%) are attached to their parents as `nummod:gov`.

6 instances of `nummod:gov` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `nummod:gov`: [lt-pos/NOUN]()-[lt-pos/NUM]() (5; 83% instances), [lt-pos/VERB]()-[lt-pos/PART]() (1; 17% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 nummod:gov	color:blue
1	Jeigu	jeigu	SCONJ	UH	_	4	mark	_	if|_
2	vieną	vienas	NUM	CD	Case=Acc|Gender=Masc|Number=Sing	3	amod	_	one|_
3	kartą	kartas	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	4	obl	_	time|_
4	atsirado	atsirasti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Fin|Voice=Act	11	advcl	_	arise|_
5	„	„	PUNCT	PUNCT	_	6	punct	_	„|_
6	mąstykla	mąstykla	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	school|_
7	“	“	PUNCT	PUNCT	_	6	punct	_	“|_
8	,	,	PUNCT	PUNCT	_	4	punct	_	,|_
9	ji	jis	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	11	nsubj	_	it|_
10	niekada	niekada	ADV	RB	Degree=Pos	11	advmod	_	never|_
11	neišnyks	neišnykti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Reflex=No|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	extinguish|_
12	,	,	PUNCT	PUNCT	_	18	punct	_	,|_
13	nors	nors	SCONJ	UH	_	18	mark	_	though|_
14	tu	tu	PRON	PRP	Case=Nom|Number=Sing|Person=2	18	nsubj	_	you|_
15	ją	jis	PRON	PRP	Case=Acc|Gender=Fem|Number=Sing|Person=3	18	obj	_	it|_
16	šimtus	šimtas	NUM	CD	Case=Acc|Gender=Masc|Number=Plur	17	nummod:gov	_	hundred|_
17	kartų	kartas	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	18	obl	_	time|_
18	padeginėtum	padeginėti	VERB	VBC	Mood=Cnd|Number=Sing|Person=2|Polarity=Pos|Reflex=No|VerbForm=Fin|Voice=Act	11	advcl	_	set on fire|_
19	.	.	PUNCT	PUNCT	_	11	punct	_	.|_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 12 nummod:gov	color:blue
1	Kai	Kai	ADV	RB	Degree=Pos	2	advmod	_	when|_
2	kurie	kuris	PRON	WPA	Case=Nom|Gender=Masc|Number=Plur	5	amod	_	which|_
3	Laikinosios	laikinas	ADJ	JJL	Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	temporary|_
4	vyriausybės	vyriausybė	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	government|_
5	nariai	narys	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	6	nsubj	_	member|_
6	gali	galėti	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	may|_
7	būti	būti	AUX	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	8	aux	_	be|_
8	išteisinti	išteisinti	VERB	VB	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Part|Voice=Pass	6	xcomp	_	|_
9	,	,	PUNCT	PUNCT	_	16	punct	_	,|_
10	bet	bet	CCONJ	CC	_	16	cc	_	but|_
11	tikrai	tikrai	ADV	RB	Degree=Pos	16	advmod	_	actually|_
12	nė	nė	PART	UH	Polarity=Neg	16	nummod:gov	_	not|_
13	vienas	vienas	ADJ	ORD	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	12	fixed	_	one|_
14	jų	jie	PRON	PRP	Case=Gen|Number=Plur|Person=3	16	nsubj	_	they|_
15	nebūtų	būti	AUX	VBC	Mood=Cnd|Number=Sing|Polarity=Neg|Reflex=No|VerbForm=Fin|Voice=Act	16	aux	_	be|_
16	gavęs	gauti	VERB	VBNL	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Polarity=Pos|Reflex=No|Tense=Past|Variant=Short|VerbForm=Part|Voice=Act	6	conj	_	take|_
17	ordino	ordinas	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	16	obj	_	|_
18	ir	ir	CCONJ	CC	_	20	cc	_	and|_
19	nebūtų	būti	AUX	VBC	Mood=Cnd|Number=Sing|Polarity=Neg|Reflex=No|VerbForm=Fin|Voice=Act	20	aux	_	be not|_
20	paskelbtas	paskelbti	VERB	VBNL	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Part|Voice=Pass	16	conj	_	announce|_
21	tautos	tauta	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	22	nmod	_	nation|_
22	patriarchu	patriarchas	NOUN	NN	Case=Ins|Gender=Masc|Number=Sing	20	obj	_	patriarch|_
23	.	.	PUNCT	PUNCT	_	6	punct	_	.|_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [nummod]().

44 nodes (0%) are attached to their parents as `nummod:gov`.

44 instances of `nummod:gov` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.29545454545455.

The following 1 pairs of parts of speech are connected with `nummod:gov`: [lt-pos/NOUN]()-[lt-pos/NUM]() (44; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nummod:gov	color:blue
1	Šiuo	šis	PRON	Pgmsin	Case=Nom|PronType=Tot	2	nmod	_	_
2	metu	metas	NOUN	Ncmsin-	Case=Ins|Gender=Masc|Number=Sing	0	root	_	_
3	ES	ES	X	Ya	Abbr=Yes	4	nmod	_	_
4	rinkoje	rinka	NOUN	Ncfsln-	Case=Loc|Gender=Fem|Number=Sing	2	dep:adj	_	_
5	trys	trys	NUM	Mcm-nl-	Case=Nom|Gender=Masc|NumForm=Word|NumType=Card	6	compound	_	_
6	dešimtys	dešimt	NUM	Mcfpnl-	Case=Nom|Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	8	nummod:gov	_	_
7	GMO	GMO	X	Ya	Abbr=Yes	8	nmod	_	_
8	produktų	produktas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	2	dep:sub	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


