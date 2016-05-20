

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.
There are 1 language-specific subtypes of `csubj`: [csubj:cop]().

94 nodes (0%) are attached to their parents as `csubj`.

93 instances of `csubj` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.82978723404255.

The following 3 pairs of parts of speech are connected with `csubj`: [fi-pos/VERB]()-[fi-pos/VERB]() (88; 94% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (3; 3% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (3; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 csubj	color:blue
1	Lukijoita	lukija	NOUN	N	Case=Par|Number=Plur	3	dobj	_	_
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
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 18 csubj	color:blue
1	Elokuussa	elo#kuu	NOUN	N	Case=Ine|Number=Sing	3	nmod	_	_
2	2009	2009	NUM	Num	NumType=Card	1	nummod	_	_
3	paljastui	paljastua	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	18	punct	_	_
5	että	että	SCONJ	C	_	18	mark	_	_
6	tie-	tie	NOUN	N	Case=Nom|Number=Sing	9	dobj	_	_
7	ja	ja	CONJ	C	_	6	cc	_	_
8	maanrakennusliiketoimintaa	maan#rakennus#liike#toiminta	NOUN	N	Case=Par|Number=Sing	6	conj	9:dobj	_
9	tekevä	tehdä	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Act	10	acl	_	_
10	Destia	Destia	PROPN	N	Case=Nom|Number=Sing	18	nsubj:cop	_	_
11	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	18	cop	_	_
12	valtion	valtio	NOUN	N	Case=Gen|Number=Sing	14	nsubj	_	_
13	kokonaan	kokonaan	ADV	Adv	_	14	advmod	_	_
14	omistamista	omistaa	VERB	V	Case=Ela|Degree=Pos|Number=Plur|PartForm=Agt|VerbForm=Part|Voice=Act	15	acl	_	_
15	yhtiöistä	yhtiö	NOUN	N	Case=Ela|Number=Plur	16	nmod	_	_
16	suurin	suuri	ADJ	A	Case=Nom|Degree=Sup|Number=Sing	18	amod	_	_
17	puolueiden	puolue	NOUN	N	Case=Gen|Number=Plur	18	nmod:poss	_	_
18	tukija	tukija	NOUN	N	Case=Nom|Number=Sing	3	csubj	_	SpaceAfter=No
19	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj	color:blue
1	Eikö	ei	VERB	V	Clitic=Ko|Negative=Neg|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	11	neg	_	_
2	se	se	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	11	nsubj:cop	_	SpaceAfter=No
3	,	,	PUNCT	Punct	_	6	punct	_	_
4	että	että	SCONJ	C	_	6	mark	_	_
5	tavoitteenani	tavoite	NOUN	N	Case=Ess|Number=Sing|Number[psor]=Sing|Person[psor]=1	6	nmod	_	_
6	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	_
7	olla	olla	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	8	cop	_	_
8	onnellinen	onnellinen	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	6	csubj	_	SpaceAfter=No
9	,	,	PUNCT	Punct	_	6	punct	_	_
10	ole	olla	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	11	cop	_	_
11	kunnianhimoista	kunnian#himoinen	ADJ	A	Case=Par|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
12	?	?	PUNCT	Punct	_	11	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.
There are 1 language-specific subtypes of `csubj`: [csubj:cop]().

282 nodes (0%) are attached to their parents as `csubj`.

212 instances of `csubj` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.68085106382979.

The following 7 pairs of parts of speech are connected with `csubj`: [fi-pos/VERB]()-[fi-pos/VERB]() (253; 90% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (11; 4% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (7; 2% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (6; 2% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (3; 1% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/NUM]() (1; 0% instances).


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
1	Onko	olla	VERB	V,Act,Ind,Pres,Sg3,Ko	Clitic=Ko|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	tarpeen	tarpeen	ADV	Adv	_	1	compound:prt	_	_
3	olla	olla	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	5	cop	_	_
4	noin	noin	PART	Pcle	_	5	advmod	_	_
5	perusteellinen	perusteellinen	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	1	csubj	_	_
6	?	?	PUNCT	Pun	_	5	punct	_	_

~~~


