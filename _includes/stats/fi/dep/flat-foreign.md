

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is a language-specific subtype of [flat]().
There are also 1 other language-specific subtypes of `flat`: [flat:name]().

93 nodes (0%) are attached to their parents as `flat:foreign`.

93 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.58064516129032.

The following 2 pairs of parts of speech are connected with `flat:foreign`: [fi-pos/X]()-[fi-pos/X]() (92; 99% instances), [fi-pos/NOUN]()-[fi-pos/X]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	DIY	DIY	X	Foreign	Foreign=Yes	4	compound:nn	_	_
2	time-lapse	time-lapse	X	Foreign	Foreign=Yes	1	flat:foreign	_	_
3	dolly	dolly	X	Foreign	Foreign=Yes	1	flat:foreign	_	_
4	suunnitelmia	suunnitelma	NOUN	N	Case=Par|Number=Plur	0	root	_	_
5	(	(	PUNCT	Punct	_	6	punct	_	SpaceAfter=No
6	Arduino	Arduino	PROPN	N	Case=Nom|Number=Sing	4	nmod	_	SpaceAfter=No
7	)	)	PUNCT	Punct	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 28 flat:foreign	color:blue
1	Yhteen	yksi	NUM	Num	Case=Ill|Number=Sing|NumType=Card	2	nummod	_	_
2	tahnaan	tahna	NOUN	N	Case=Ill|Number=Sing	3	obl	_	_
3	laitoin	laittaa	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	n.1	n.#1	NOUN	N	Typo=Yes	5	nummod	_	_
5	dl	dl	NOUN	N	Abbr=Yes|Case=Gen|Number=Sing	3	obj	_	_
6	kurkkurelishiä	kurkku#relish	NOUN	N	Case=Par|Number=Sing	5	nmod	_	SpaceAfter=No
7	,	,	PUNCT	Punct	_	12	punct	9.1:punct	_
8	toiseen	toinen	ADJ	Num	Case=Ill|Number=Sing|NumType=Ord	9	nummod	_	_
9	tahnaan	tahna	NOUN	N	Case=Ill|Number=Sing	12	orphan	9.1:obl	_
9.1	laitoin	laittaa	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	_	_	3:conj	_
10	½	½	NUM	Num	Case=Nom|Number=Sing|NumType=Card	12	nummod	_	_
11	punaista	punainen	ADJ	A	Case=Par|Degree=Pos|Number=Sing	12	amod	_	_
12	paprikaa	paprika	NOUN	N	Case=Par|Number=Sing	3	conj	9.1:obj	_
13	leikkuriterällä	leikkuri#terä	NOUN	N	Case=Ade|Number=Sing	14	obl	_	_
14	hienonnettuna	hienontaa	VERB	V	Case=Ess|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	12	acl	_	_
15	+	+	SYM	Punct	_	17	punct	_	_
16	hieman	hieman	ADV	Adv	_	17	advmod	_	_
17	suolaa	suola	NOUN	N	Case=Par|Number=Sing	12	conj	9.1:obj	SpaceAfter=No
18	,	,	PUNCT	Punct	_	20	punct	_	_
19	kolmanteen	kolmas	ADJ	Num	Case=Ill|Number=Sing|NumType=Ord	20	obl	_	_
20	laitoin	laittaa	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	_	_
21	2	2	NUM	Num	NumType=Card	22	nummod	_	_
22	tomaattia	tomaatti	NOUN	N	Case=Par|Number=Sing	20	obj	_	_
23	hienonnettuna	hienontaa	VERB	V	Case=Ess|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	22	acl	_	_
24	+	+	SYM	Punct	_	26	punct	_	_
25	2	2	NUM	Num	NumType=Card	26	nummod	_	_
26	rkl	rkl	NOUN	N	Abbr=Yes|Case=Par|Number=Sing	22	conj	20:obj	_
27	creme	creme	X	Foreign	Foreign=Yes	26	nmod	_	_
28	fraichea	fraiche	X	Foreign	Foreign=Yes	27	flat:foreign	_	_
29	ja	ja	CCONJ	C	_	31	cc	_	_
30	neljänteen	neljäs	ADJ	Num	Case=Ill|Number=Sing|NumType=Ord	31	obl	_	_
31	meni	mennä	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	_	_
32	perustahnan	perus#tahna	NOUN	N	Case=Gen|Number=Sing	31	obl	_	_
33	sekaan.	sekaan	ADP	Adp	AdpType=Post|Typo=Yes	32	case	_	_
34	5	5	NUM	Num	NumType=Card	35	nummod	_	_
35	cm.	cm.	NOUN	N	Abbr=Yes|Case=Gen|Number=Sing	36	nmod:poss	_	_
36	pätkä	pätkä	NOUN	N	Case=Nom|Number=Sing	31	nsubj	_	_
37	tuoretta	tuore	ADJ	A	Case=Par|Degree=Pos|Number=Sing	38	amod	_	_
38	kurkkua	kurkku	NOUN	N	Case=Par|Number=Sing	36	nmod	_	_
39	pikkuisina	pikkuinen	ADJ	A	Case=Ess|Degree=Pos|Number=Plur	40	amod	_	_
40	kuutioina	kuutio	NOUN	N	Case=Ess|Number=Plur	38	nmod	_	_
41	+	+	SYM	Punct	_	44	punct	_	_
42	sulatejuustoa	sulate#juusto	NOUN	N	Case=Par|Number=Sing	44	nmod	_	_
43	50	50	NUM	Num	NumType=Card	44	nummod	_	_
44	g	g	NOUN	N	Abbr=Yes|Case=Par|Number=Sing	36	conj	_	SpaceAfter=No
45	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


