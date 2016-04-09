

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

17 nodes (0%) are attached to their parents as `goeswith`.

17 instances of `goeswith` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 6 pairs of parts of speech are connected with `goeswith`: [fi-pos/NOUN]()-[fi-pos/NOUN]() (12; 71% instances), [fi-pos/ADJ]()-[fi-pos/ADV]() (1; 6% instances), [fi-pos/ADJ]()-[fi-pos/X]() (1; 6% instances), [fi-pos/ADV]()-[fi-pos/ADV]() (1; 6% instances), [fi-pos/PROPN]()-[fi-pos/PROPN]() (1; 6% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (1; 6% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 goeswith	color:blue
1	Veri	veri	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	_
2	putoaa	pudota	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	pisara	pisara	NOUN	N	Case=Nom|Number=Sing	4	nmod	_	_
4	pisaralta	pisara	NOUN	N	Case=Abl|Number=Sing	2	nmod	_	_
5	paperi	paperi	NOUN	N	Case=Nom|Number=Sing	6	goeswith	_	_
6	silppuun	silppu	NOUN	N	Case=Ill|Number=Sing	2	nmod	_	SpaceAfter=No
7	.	.	PUNCT	Punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 goeswith	color:blue
1	On	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	meistä	minä	PRON	Pron	Case=Ela|Number=Plur|Person=1|PronType=Prs	4	nmod	_	_
3	itsestämme	itse	PRON	Pron	Case=Ela|Number=Sing|Number[psor]=Plur|Person[psor]=1|Reflex=Yes	2	det	_	_
4	kiinni	kiinni	ADV	Adv	_	1	advmod	_	SpaceAfter=No
5	,	,	PUNCT	Punct	_	8	punct	_	_
6	kuinka	kuinka	ADV	Adv	_	8	advmod	_	_
7	kauas	kauas	ADV	Adv	_	8	goeswith	_	_
8	kantoinen	kantoinen	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	1	csubj	_	_
9	sen	se	PRON	Pron	Case=Gen|Number=Sing|PronType=Dem	10	nsubj	_	_
10	antama	antaa	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Agt|VerbForm=Part|Voice=Act	17	acl	_	_
11	selviytymisen	selviytyä	NOUN	N	Case=Gen|Derivation=Minen|Number=Sing	17	nmod:poss	_	SpaceAfter=No
12	,	,	PUNCT	Punct	_	11	punct	_	_
13	unelmien	unelma	NOUN	N	Case=Gen|Number=Plur	14	nmod:gobj	_	_
14	toteuttamisen	toteuttaa	NOUN	N	Case=Gen|Derivation=Minen|Number=Sing	11	conj	17:nmod:poss	_
15	ja	ja	CONJ	C	_	11	cc	_	_
16	kiitollisuuden	kiitollisuus	NOUN	N	Case=Gen|Number=Sing	11	conj	17:nmod:poss	_
17	tunne	tunne	NOUN	N	Case=Nom|Number=Sing	8	nsubj:cop	_	_
18	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	SpaceAfter=No
19	.	.	PUNCT	Punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 24 goeswith	color:blue
1	Ensimäinen	ensimmäinen	ADJ	Num	Case=Nom|Number=Sing|NumType=Ord	2	nummod	_	_
2	versio	versio	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	_
3	tarjosi	tarjota	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	ominaisuuksia	ominaisuus	NOUN	N	Case=Par|Number=Plur	3	dobj	_	_
5	kuten	kuten	ADV	Adv	_	6	advmod	12:advmod|26:advmod	_
6	constructive	constructive	X	Foreign	Foreign=Foreign	4	appos	_	_
7	solid	solid	X	Foreign	Foreign=Foreign	6	foreign	_	_
8	geometry	geometry	X	Foreign	Foreign=Foreign	6	foreign	_	SpaceAfter=No
9	,	,	PUNCT	Punct	_	12	punct	_	_
10	toisen	toinen	ADJ	Num	Case=Gen|Number=Sing|NumType=Ord	11	nummod	_	_
11	asteen	aste	NOUN	N	Case=Gen|Number=Sing	12	nmod:poss	_	_
12	pinnat	pinta	NOUN	N	Case=Nom|Number=Plur	6	conj	4:appos	_
13	(	(	PUNCT	Punct	_	14	punct	_	SpaceAfter=No
14	quadric	quadric	X	Foreign	Foreign=Foreign	12	appos	_	_
15	surfaces	surfaces	X	Foreign	Foreign=Foreign	14	foreign	_	SpaceAfter=No
16	)	)	PUNCT	Punct	_	14	punct	_	_
17	and	and	X	Foreign	Foreign=Foreign	6	cc	_	_
18	valonsäteiden	valon#säde	NOUN	N	Case=Gen|Number=Plur	19	nmod:gobj	_	_
19	seurantaan	seuranta	NOUN	N	Case=Ill|Number=Sing	23	nmod	_	_
20	(	(	PUNCT	Punct	_	21	punct	_	SpaceAfter=No
21	ray-tracing	ray-tracing	X	Foreign	Foreign=Foreign	19	appos	_	SpaceAfter=No
22	)	)	PUNCT	Punct	_	21	punct	_	_
23	perustuvan	perustua	VERB	V	Case=Gen|Degree=Pos|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Act	26	acl	_	_
24	photo	photo	X	Foreign	Foreign=Foreign	25	goeswith	_	_
25	realistisen	realistinen	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	26	amod	_	_
26	tulostuksen	tulostus	NOUN	N	Case=Gen|Number=Sing	6	conj	4:appos	SpaceAfter=No
27	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


