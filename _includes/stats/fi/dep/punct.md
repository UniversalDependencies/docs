

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

26423 nodes (15%) are attached to their parents as `punct`.

15897 instances of `punct` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.27574461643265.

The following 20 pairs of parts of speech are connected with `punct`: [fi-pos/VERB]()-[fi-pos/PUNCT]() (15741; 60% instances), [fi-pos/NOUN]()-[fi-pos/PUNCT]() (5240; 20% instances), [fi-pos/ADJ]()-[fi-pos/PUNCT]() (1810; 7% instances), [fi-pos/PROPN]()-[fi-pos/PUNCT]() (1124; 4% instances), [fi-pos/NUM]()-[fi-pos/PUNCT]() (747; 3% instances), [fi-pos/PRON]()-[fi-pos/PUNCT]() (615; 2% instances), [fi-pos/ADV]()-[fi-pos/PUNCT]() (611; 2% instances), [fi-pos/SYM]()-[fi-pos/PUNCT]() (151; 1% instances), [fi-pos/X]()-[fi-pos/PUNCT]() (112; 0% instances), [fi-pos/INTJ]()-[fi-pos/PUNCT]() (106; 0% instances), [fi-pos/PUNCT]()-[fi-pos/PUNCT]() (51; 0% instances), [fi-pos/SCONJ]()-[fi-pos/PUNCT]() (34; 0% instances), [fi-pos/AUX]()-[fi-pos/PUNCT]() (25; 0% instances), [fi-pos/CCONJ]()-[fi-pos/PUNCT]() (20; 0% instances), [fi-pos/NOUN]()-[fi-pos/SYM]() (15; 0% instances), [fi-pos/ADP]()-[fi-pos/PUNCT]() (10; 0% instances), [fi-pos/VERB]()-[fi-pos/SYM]() (5; 0% instances), [fi-pos/NUM]()-[fi-pos/SYM]() (3; 0% instances), [fi-pos/PROPN]()-[fi-pos/SYM]() (2; 0% instances), [fi-pos/ADV]()-[fi-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 punct	color:blue
1	Saavuin	saapua	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	siis	siis	ADV	Adv	_	1	advmod	_	_
3	kaupunkiin	kaupunki	NOUN	N	Case=Ill|Number=Sing	1	obl	_	_
4	kameraryhmäni	kamera#ryhmä	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	1	obl	_	_
5	kanssa	kanssa	ADP	Adp	AdpType=Post	4	case	_	_
6	jo	jo	ADV	Adv	_	8	advmod	_	_
7	ennen	ennen	ADP	Adp	AdpType=Prep	8	case	_	_
8	yhtätoista	yksi#toista	NUM	Num	Case=Par|Number=Sing|NumType=Card	1	obl	_	SpaceAfter=No
9	.	.	PUNCT	Punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 punct	color:blue
1	Bagelit	bagel	NOUN	N	Case=Nom|Number=Plur	6	nsubj:cop	_	_
2	ja	ja	CCONJ	C	_	3	cc	_	_
3	smoothiet	smoothie	NOUN	N	Case=Nom|Number=Plur	1	conj	6:nsubj:cop	_
4	olivat	olla	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
5	ihana	ihana	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	6	amod	_	_
6	tapa	tapa	NOUN	N	Case=Nom|Number=Sing	0	root	_	_
7	aloittaa	aloittaa	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	6	acl	_	_
8	aamu	aamu	NOUN	N	Case=Nom|Number=Sing	7	obj	_	SpaceAfter=No
9	.	.	PUNCT	Punct	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 punct	color:blue
1	On	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
2	kyllä	kyllä	ADV	Adv	_	3	advmod	_	_
3	kiva	kiva	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	7	punct	_	_
5	kun	kun	SCONJ	C	_	7	mark	_	_
6	tuolla	tuolla	ADV	Adv	_	7	advmod	_	_
7	sai	saada	VERB	V	Mood=Ind|Number=Sing|Person=0|Tense=Past|VerbForm=Fin|Voice=Act	3	csubj:cop	_	_
8	hipelöidä	hipelöidä	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	7	xcomp	_	_
9	kaikkea	kaikki	PRON	Pron	Case=Par|Number=Sing|PronType=Ind	8	obj	_	SpaceAfter=No
10	.	.	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
11	:)	:)	SYM	Symb	_	3	discourse	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.

20252 nodes (14%) are attached to their parents as `punct`.

19916 instances of `punct` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.10645862137073.

The following 16 pairs of parts of speech are connected with `punct`: [fi-pos/NOUN]()-[fi-pos/PUNCT]() (8920; 44% instances), [fi-pos/VERB]()-[fi-pos/PUNCT]() (4173; 21% instances), [fi-pos/ADV]()-[fi-pos/PUNCT]() (1871; 9% instances), [fi-pos/ADJ]()-[fi-pos/PUNCT]() (1637; 8% instances), [fi-pos/PRON]()-[fi-pos/PUNCT]() (990; 5% instances), [fi-pos/PROPN]()-[fi-pos/PUNCT]() (850; 4% instances), [fi-pos/ADP]()-[fi-pos/PUNCT]() (767; 4% instances), [fi-pos/PART]()-[fi-pos/PUNCT]() (305; 2% instances), [fi-pos/NUM]()-[fi-pos/PUNCT]() (254; 1% instances), [fi-pos/PUNCT]()-[fi-pos/PUNCT]() (187; 1% instances), [fi-pos/INTJ]()-[fi-pos/PUNCT]() (83; 0% instances), [fi-pos/CCONJ]()-[fi-pos/PUNCT]() (81; 0% instances), [fi-pos/SCONJ]()-[fi-pos/PUNCT]() (76; 0% instances), [fi-pos/X]()-[fi-pos/PUNCT]() (33; 0% instances), [fi-pos/DET]()-[fi-pos/PUNCT]() (22; 0% instances), [fi-pos/SYM]()-[fi-pos/PUNCT]() (3; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 punct	color:blue
1	noo	noo	INTJ	Pcle,Interj	_	6	discourse	_	Alt=6_discourse
2	ne	ne	PRON	Pron,Dem,Pl,Nom	Case=Nom|Number=Plur|PronType=Dem	6	nsubj:cop	_	_
3	o	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Style=Coll|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
4	jottais	jokin	DET	Pron,Qnt,Sg,Par	Case=Par|Number=Sing|PronType=Ind|Style=Coll	6	det	_	_
5	semssi	semmoinen	DET	A,Dem,Pl,Par	Case=Par|Number=Plur|PronType=Dem|Style=Coll	6	amod	_	Alt=DET
6	sukulaissi	sukulainen	NOUN	N,Pl,Par	Case=Par|Number=Plur|Style=Coll	0	root	_	_
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 punct	color:blue
1	Alta	alta	ADV	Adv	_	2	advmod	_	_
2	mennään	mennä	VERB	V,Pass,Ind,Pres	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
3	vaikka	vaikka	SCONJ	Pcle,CS	_	5	mark	_	_
4	niskat	niska	NOUN	N,Pl,Nom	Case=Nom|Number=Plur	5	nsubj	_	_
5	katkeis	katketa	VERB	V,Act,Cond,Sg3	Mood=Cnd|Number=Sing|Person=3|Style=Coll|VerbForm=Fin|Voice=Act	2	advcl	_	_
6	.	.	PUNCT	Pun	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 punct	color:blue
1	Joku	joku	PRON	Pron,Qnt,Sg,Nom	Case=Nom|Number=Sing|PronType=Ind	2	nsubj	_	FTB-PronType=Qnt
2	makasi	maata	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	maassa	maa	NOUN	N,Sg,Ine	Case=Ine|Number=Sing	2	nmod	_	_
4	rähmällään	rähmällään	ADV	Adv,Px3	Person[psor]=3	2	advmod	_	_
5	.	.	PUNCT	Pun	_	4	punct	_	_

~~~


