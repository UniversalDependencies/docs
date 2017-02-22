

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.
There are 1 language-specific subtypes of `csubj`: [csubj:cop]().

52 nodes (0%) are attached to their parents as `csubj`.

51 instances of `csubj` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.30769230769231.

The following 6 pairs of parts of speech are connected with `csubj`: [fi-pos/VERB]()-[fi-pos/VERB]() (42; 81% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (4; 8% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (2; 4% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (2; 4% instances), [fi-pos/ADV]()-[fi-pos/ADV]() (1; 2% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 csubj	color:blue
1	Lukijoita	lukija	NOUN	N	Case=Par|Number=Plur	3	obj	_	_
2	varmaan	varmaan	ADV	Adv	_	3	advmod	_	_
3	kiinnostaa	kiinnostaa	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	8	punct	_	_
5	paljon	paljon	ADV	Adv	Clitic=Ko|Style=Coll	8	advmod	_	_
6	tämä	tämä	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	7	det	_	_
7	touhu	touhu	NOUN	N	Case=Nom|Number=Sing	8	nsubj	_	_
8	kustantaa	kustantaa	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj	_	SpaceAfter=No
9	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 csubj	color:blue
1	Mistä	mikä	PRON	Pron	Case=Ela|Number=Sing|PronType=Int	2	obl	_	_
2	johtuu	johtua	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Punct	_	9	punct	_	_
4	että	että	SCONJ	C	_	9	mark	_	_
5	urheilukalastus	urheilu#kalastus	NOUN	N	Case=Nom|Number=Sing	9	nsubj:cop	_	_
6	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
7	nyt	nyt	ADV	Adv	_	9	advmod	_	_
8	niin	niin	ADV	Adv	_	9	advmod	_	_
9	pinnalla	pinta	NOUN	N	Case=Ade|Number=Sing	2	csubj	_	SpaceAfter=No
10	?	?	PUNCT	Punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 csubj	color:blue
1	Tiedän	tietää	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	myös	myös	ADV	Adv	_	6	advmod	_	SpaceAfter=No
3	,	,	PUNCT	Punct	_	6	punct	_	_
4	että	että	SCONJ	C	_	6	mark	_	_
5	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	_
6	olemassa	olla	VERB	V	Case=Ine|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	1	ccomp	_	_
7	ihan	ihan	ADV	Adv	_	8	advmod	_	_
8	valmiitakin	valmis	ADJ	A	Case=Par|Clitic=Kin|Degree=Pos|Number=Plur	11	amod	_	_
9	Arduinoon	Arduino	PROPN	N	Case=Ill|Number=Sing	10	obl	_	_
10	pohjautuvia	pohjautua	VERB	V	Case=Par|Degree=Pos|Number=Plur|PartForm=Pres|VerbForm=Part|Voice=Act	11	acl	_	_
11	time-lapse	time-lapse	X	Foreign	Foreign=Yes	6	nsubj	_	_
12	dollyja	dolly	X	Foreign	Foreign=Yes	11	flat:foreign	_	_
13	ajastimilla	ajastin	NOUN	N	Case=Ade|Number=Plur	11	nmod	_	SpaceAfter=No
14	,	,	PUNCT	Punct	_	16	punct	_	_
15	mutta	mutta	CCONJ	C	_	16	cc	_	_
16	tarkoituksena	tarkoitus	NOUN	N	Case=Ess|Number=Sing	1	conj	_	_
17	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	16	cop	_	_
18	tehdä	tehdä	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	16	csubj	_	_
19	kaikki	kaikki	PRON	Pron	Case=Nom|Number=Sing|PronType=Ind	18	obj	_	_
20	alusta	alku	NOUN	N	Case=Ela|Number=Sing	18	obl	_	_
21	lähtien	lähtien	ADP	Adp	AdpType=Post	20	case	_	_
22	itse	itse	ADV	Adv	_	18	advmod	_	SpaceAfter=No
23	,	,	PUNCT	Punct	_	27	punct	_	_
24	joten	joten	ADV	Adv	_	27	advmod	_	_
25	ne	se	PRON	Pron	Case=Nom|Number=Plur|PronType=Dem	27	nsubj	_	_
26	eivät	ei	AUX	V	Number=Plur|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	27	aux	_	_
27	tule	tulla	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	16	acl:relcl	_	_
28	kyseeseen	kyse	NOUN	N	Case=Ill|Number=Sing	27	obl	_	SpaceAfter=No
29	.	.	PUNCT	Punct	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.
There are 1 language-specific subtypes of `csubj`: [csubj:cop]().

248 nodes (0%) are attached to their parents as `csubj`.

185 instances of `csubj` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.63306451612903.

The following 7 pairs of parts of speech are connected with `csubj`: [fi-pos/VERB]()-[fi-pos/VERB]() (226; 91% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (6; 2% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (6; 2% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (5; 2% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (3; 1% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 csubj	color:blue
1	Tuntuu	tuntua	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	oudolta	outo	ADJ	A,Sg,Abl	Case=Abl|Number=Sing	1	nmod	_	_
3	,	,	PUNCT	Pun	_	2	punct	_	_
4	että	että	SCONJ	Pcle,CS	_	7	mark	_	_
5	joku	joku	PRON	Pron,Qnt,Sg,Nom	Case=Nom|Number=Sing|PronType=Ind	7	nsubj	_	FTB-PronType=Qnt
6	voi	voida	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
7	ajatella	ajatella	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	1	csubj	_	_
8	noin	noin	ADV	Adv,Dem	PronType=Dem	7	advmod	_	_
9	.	.	PUNCT	Pun	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj	color:blue
1	Ai	ai	INTJ	Pcle,Interj	_	2	discourse	_	Alt=2_discourse
2	kun	kun	SCONJ	Pcle,CS	_	3	dep	_	Missed-Rel=attr
3	kiva	kiva	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	0	root	_	_
4	,	,	PUNCT	Pun	_	3	punct	_	_
5	että	että	SCONJ	Pcle,CS	_	7	mark	_	_
6	te	te	PRON	Pron,Pers,Pl2,Nom	Case=Nom|Number=Plur|Person=2|PronType=Prs	7	nsubj	_	_
7	tulette	tulla	VERB	V,Act,Ind,Pres,Pl2	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj	_	_
8	.	.	PUNCT	Pun	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj	color:blue
1	Tuntui	tuntua	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	upealta	upea	ADJ	A,Sg,Abl	Case=Abl|Number=Sing	1	nmod	_	_
3	olla	olla	AUX	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	5	cop	_	_
4	jälleen	jälleen	ADV	Adv	_	5	advmod	_	_
5	terve	terve	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	1	csubj	_	_
6	.	.	PUNCT	Pun	_	5	punct	_	_

~~~


