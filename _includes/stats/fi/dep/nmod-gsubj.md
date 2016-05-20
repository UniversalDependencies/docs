

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is a language-specific subtype of [nmod]().
There are also 3 other language-specific subtypes of `nmod`: [nmod:gobj](), [nmod:own](), [nmod:poss]().

498 nodes (0%) are attached to their parents as `nmod:gsubj`.

498 instances of `nmod:gsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.4718875502008.

The following 6 pairs of parts of speech are connected with `nmod:gsubj`: [fi-pos/NOUN]()-[fi-pos/NOUN]() (364; 73% instances), [fi-pos/NOUN]()-[fi-pos/PROPN]() (86; 17% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (45; 9% instances), [fi-pos/NOUN]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:gsubj	color:blue
1	Eikä	ei	VERB	V	Clitic=Ka|Negative=Neg|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	5	neg	_	_
2	onni	onni	NOUN	N	Case=Nom|Number=Sing	5	nsubj:cop	_	_
3	ole	olla	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	vastoinkäymisten	vastoinkäyminen	NOUN	N	Case=Gen|Number=Plur	5	nmod:gsubj	_	_
5	puuttumista	puuttua	NOUN	N	Case=Par|Derivation=Minen|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:gsubj	color:blue
1	Teollisuustuotteet	teollisuus#tuote	NOUN	N	Case=Nom|Number=Plur	2	nsubj	_	_
2	muodostavat	muodostaa	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	suurimman	suuri	ADJ	A	Case=Gen|Degree=Sup|Number=Sing	4	amod	_	_
4	osan	osa	NOUN	N	Case=Gen|Number=Sing	2	dobj	_	_
5	EU:n	EU	PROPN	N	Abbr=Yes|Case=Gen|Number=Sing	6	nmod:gsubj	_	_
6	viennistä	vienti	NOUN	N	Case=Ela|Number=Sing	4	nmod	_	SpaceAfter=No
7	.	.	PUNCT	Punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:gsubj	color:blue
1	Hänen	hän	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	3	nmod:gsubj	_	_
2	rakkain	rakas	ADJ	A	Case=Nom|Degree=Sup|Number=Sing	3	amod	_	_
3	harrastuksensa	harrastus	NOUN	N	Case=Gen|Number=Sing|Person[psor]=3	5	nsubj:cop	_	_
4	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	jääkiekko	jää#kiekko	NOUN	N	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punct	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:gobj](), [nmod:own]().

101 nodes (0%) are attached to their parents as `nmod:gsubj`.

101 instances of `nmod:gsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16831683168317.

The following 5 pairs of parts of speech are connected with `nmod:gsubj`: [fi-pos/NOUN]()-[fi-pos/NOUN]() (82; 81% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (9; 9% instances), [fi-pos/NOUN]()-[fi-pos/PROPN]() (8; 8% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (1; 1% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:gsubj	color:blue
1	Esiintyjä	esiintyjä	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	2	nsubj	_	_
2	pelkää	pelätä	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	Jurkan	jurkka	PROPN	N,Prop,Sg,Gen	Case=Gen|Number=Sing	2	nmod	_	_
4	mielestä	mielestä	ADP	Adp	_	3	case	_	_
5	kontrollin	kontrolli	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	6	nmod:gsubj	_	Alt=nmod:gsubj
6	pettämistä	pettäminen	NOUN	N,Sg,Par	Case=Par|Number=Sing	2	dobj	_	_
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:gsubj	color:blue
1	Hänen	hän	PRON	Pron,Pers,Sg3,Gen	Case=Gen|Number=Sing|Person=3|PronType=Prs	3	nmod:gsubj	_	Alt=nmod:gsubj
2	jäihin	jää	NOUN	N,Pl,Ill	Case=Ill|Number=Plur	3	nmod	_	_
3	vajoamisensa	vajoaminen	NOUN	N,Sg,Nom,Px3	Case=Nom|Number=Sing|Person[psor]=3	4	dobj	_	_
4	nähtiin	nähdä	VERB	V,Pass,Ind,Past	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
5	rannalta	ranta	NOUN	N,Sg,Abl	Case=Abl|Number=Sing	4	nmod	_	_
6	.	.	PUNCT	Pun	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:gsubj	color:blue
1	Tulevaisuudessa	tulevaisuus	NOUN	N,Sg,Ine	Case=Ine|Number=Sing	5	nmod	_	_
2	uuden	uusi	ADJ	A,Sg,Gen	Case=Gen|Number=Sing	3	amod	_	_
3	Siljan	silja	PROPN	N,Prop,Sg,Gen	Case=Gen|Number=Sing	4	nmod:gsubj	_	Alt=nmod:gsubj
4	menestyminen	menestyminen	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	5	nsubj	_	_
5	on	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	kiinni	kiinni	ADV	Adv	_	5	compound:prt	_	_
7	Itämerestä	itämeri	PROPN	N,Prop,Sg,Ela	Case=Ela|Number=Sing	5	nmod	_	_
8	.	.	PUNCT	Pun	_	7	punct	_	_

~~~


