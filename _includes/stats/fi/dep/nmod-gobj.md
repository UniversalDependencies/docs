

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:gsubj](), [nmod:poss]().

1349 nodes (1%) are attached to their parents as `nmod:gobj`.

1349 instances of `nmod:gobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37731653076353.

The following 9 pairs of parts of speech are connected with `nmod:gobj`: [fi-pos/NOUN]()-[fi-pos/NOUN]() (1217; 90% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (70; 5% instances), [fi-pos/NOUN]()-[fi-pos/PROPN]() (50; 4% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (5; 0% instances), [fi-pos/NOUN]()-[fi-pos/X]() (3; 0% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/PUNCT]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:gobj	color:blue
1	Suurkiitokset	suur#kiitos	NOUN	N	Case=Nom|Number=Plur	0	root	_	_
2	niistä	se	PRON	Pron	Case=Ela|Number=Plur|PronType=Dem	1	nmod	_	_
3	ja	ja	CCONJ	C	_	5	cc	_	_
4	malliston	mallisto	NOUN	N	Case=Gen|Number=Sing	5	nmod:gobj	_	_
5	esittelystä	esittely	NOUN	N	Case=Ela|Number=Sing	2	conj	1:nmod	_
6	H&M:lle	H&M	PROPN	N	Abbr=Yes|Case=All|Number=Sing	1	nmod	_	SpaceAfter=No
7	.	.	PUNCT	Punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:gobj	color:blue
1	Twitter-bannit	Twitter-banni	NOUN	N	Case=Nom|Number=Plur	0	root	_	_
2	ja	ja	CCONJ	C	_	4	cc	_	_
3	niiden	se	PRON	Pron	Case=Gen|Number=Plur|PronType=Dem	4	nmod:gobj	_	_
4	poistaminen	poistaminen	NOUN	N	Case=Nom|Derivation=Minen|Number=Sing	1	conj	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:gobj	color:blue
1	Nissan	Nissan	PROPN	N	Case=Nom|Number=Sing	3	nmod:gobj	_	_
2	Leafin	Leaf	PROPN	N	Case=Gen|Number=Sing	1	flat:name	_	_
3	myynti	myynti	NOUN	N	Case=Nom|Number=Sing	8	nsubj	_	_
4	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	_	_
5	näissä	tämä	PRON	Pron	Case=Ine|Number=Plur|PronType=Dem	6	det	_	_
6	maissa	maa	NOUN	N	Case=Ine|Number=Plur	8	obl	_	_
7	jo	jo	ADV	Adv	_	8	advmod	_	_
8	alkanut	alkaa	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
9	.	.	PUNCT	Punct	_	8	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:gsubj](), [nmod:own]().

236 nodes (0%) are attached to their parents as `nmod:gobj`.

236 instances of `nmod:gobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.09745762711864.

The following 4 pairs of parts of speech are connected with `nmod:gobj`: [fi-pos/NOUN]()-[fi-pos/NOUN]() (200; 85% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (25; 11% instances), [fi-pos/NOUN]()-[fi-pos/PROPN]() (6; 3% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (5; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:gobj	color:blue
1	Miehen	mies	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	2	nmod	_	_
2	hengen	henki	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	3	nmod:gobj	_	Alt=nmod:gobj
3	pelastaminen	pelastaminen	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	4	nsubj	_	_
4	vaati	vaatia	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	kaksi	kaksi	NUM	Num,Card,Sg,Nom	Case=Nom|Number=Sing|NumType=Card	6	nummod	_	_
6	leikkausta	leikkaus	NOUN	N,Sg,Par	Case=Par|Number=Sing	4	obj	_	_
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:gobj	color:blue
1	häneltä	hän	PRON	Pron,Pers,Sg3,Abl	Case=Abl|Number=Sing|Person=3|PronType=Prs	2	nmod	_	_
2	löytyy	löytyä	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	tahtoa	tahto	NOUN	N,Sg,Par	Case=Par|Number=Sing	2	nsubj	_	_
4	sen	se	PRON	Pron,Dem,Sg,Gen	Case=Gen|Number=Sing|PronType=Dem	5	nmod:gobj	_	Alt=nmod:gobj
5	perustamiseksi	perustaminen	NOUN	N,Sg,Tra	Case=Tra|Number=Sing	3	nmod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:gobj	color:blue
1	Tallinnan	tallinna	PROPN	N,Prop,Sg,Gen	Case=Gen|Number=Sing	3	nmod	_	_
2	hotelli	hotelli	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	3	compound:nn	_	Alt=compound:nn
3	Virun	viru	PROPN	N,Prop,Sg,Gen	Case=Gen|Number=Sing	4	nmod:gobj	_	Alt=nmod:gobj
4	rakentamisen	rakentaminen	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	0	root	_	_
5	myötä	myötä	ADP	Adp	_	4	case	_	_

~~~


