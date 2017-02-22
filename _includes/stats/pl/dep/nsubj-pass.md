

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is a language-specific subtype of [nsubj]().

189 nodes (0%) are attached to their parents as `nsubj:pass`.

155 instances of `nsubj:pass` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.26984126984127.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: [pl-pos/ADJ]()-[pl-pos/NOUN]() (154; 81% instances), [pl-pos/ADJ]()-[pl-pos/PROPN]() (15; 8% instances), [pl-pos/ADJ]()-[pl-pos/DET]() (10; 5% instances), [pl-pos/ADJ]()-[pl-pos/PRON]() (9; 5% instances), [pl-pos/ADJ]()-[pl-pos/NUM]() (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Projekt	projekt	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	został	zostać	AUX	praet:sg:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	3	aux:pass	_	_
3	podpisany	podpisany	ADJ	ppas:sg:nom:m3:perf:aff	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	_	_
4	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Case=Acc|Variant=Short	5	case	_	_
5	cesarza	cesarz	NOUN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	3	obj	_	_
6	Wilhelma	Wilhelm	PROPN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	5	appos	_	_
7	II	II	ADJ	adj:sg:acc:m1:pos	Animacy=Hum|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	SpaceAfter=No
8	.	.	PUNCT	interp	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 nsubj:pass	color:blue
1	-	-	PUNCT	interp	_	10	punct	_	_
2	Poza	poza	ADP	prep:inst	AdpType=Prep|Case=Ins	10	advmod	_	_
3	tym	to	PRON	subst:sg:inst:n	Case=Ins|Gender=Neut|Number=Sing|PronType=Dem	2	case	_	_
4	Jan	Jan	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	10	nsubj:pass	_	_
5	Paweł	Paweł	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	4	nmod	_	_
6	II	II	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	_
7	nie	nie	PART	qub	_	8	advmod	_	_
8	został	zostać	AUX	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	10	aux:pass	_	_
9	jeszcze	jeszcze	PART	qub	_	10	advmod	_	_
10	ogłoszony	ogłoszony	ADJ	ppas:sg:nom:m1:perf:aff	Animacy=Hum|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	_	_
11	świętym	święty	NOUN	subst:sg:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing	10	obj	_	SpaceAfter=No
12	.	.	PUNCT	interp	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 nsubj:pass	color:blue
1	Odwołany	odwołany	ADJ	ppas:sg:nom:m3:perf:aff	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	2	amod	_	_
2	rząd	rząd	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	13	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	interp	_	8	punct	_	_
4	który	który	DET	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	8	nsubj:pass	_	_
5	zostaje	zostawać	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:pass	_	_
6	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Case=Acc|Variant=Short	7	case	_	_
7	Sejm	sejm	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	obj	_	_
8	zmuszony	zmuszony	ADJ	ppas:sg:nom:m3:perf:aff	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	2	amod	_	_
9	do	do	ADP	prep:gen	AdpType=Prep|Case=Gen	10	case	_	_
10	rządzenia	rządzenie	NOUN	ger:sg:gen:n:imperf:aff	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	8	obj	_	SpaceAfter=No
11	,	,	PUNCT	interp	_	8	punct	_	_
12	zwykle	zwykle	ADV	adv:pos	Degree=Pos	13	advmod	_	_
13	przestaje	przestawać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
14	pracować	pracować	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf	13	xcomp	_	SpaceAfter=No
15	.	.	PUNCT	interp	_	13	punct	_	_

~~~


