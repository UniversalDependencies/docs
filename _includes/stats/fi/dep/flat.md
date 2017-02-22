

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.
There are 2 language-specific subtypes of `flat`: [flat:foreign](), [flat:name]().

783 nodes (0%) are attached to their parents as `flat`.

783 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.75989782886335.

The following 14 pairs of parts of speech are connected with `flat`: [fi-pos/ADJ]()-[fi-pos/NOUN]() (223; 28% instances), [fi-pos/NUM]()-[fi-pos/NOUN]() (193; 25% instances), [fi-pos/ADJ]()-[fi-pos/NUM]() (175; 22% instances), [fi-pos/NUM]()-[fi-pos/NUM]() (99; 13% instances), [fi-pos/NOUN]()-[fi-pos/NUM]() (34; 4% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (21; 3% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (15; 2% instances), [fi-pos/PROPN]()-[fi-pos/NOUN]() (8; 1% instances), [fi-pos/NUM]()-[fi-pos/ADJ]() (4; 1% instances), [fi-pos/PROPN]()-[fi-pos/NUM]() (4; 1% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (2; 0% instances), [fi-pos/NUM]()-[fi-pos/PUNCT]() (2; 0% instances), [fi-pos/PUNCT]()-[fi-pos/NOUN]() (2; 0% instances), [fi-pos/PUNCT]()-[fi-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	Tilaisuus	tilaisuus	NOUN	N	Case=Nom|Number=Sing	4	nsubj:cop	_	_
2	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	Saksan	Saksa	PROPN	N	Case=Gen|Number=Sing	4	nmod:poss	_	_
4	Kölnissä	Köln	PROPN	N	Case=Ine|Number=Sing	0	root	_	_
5	17.	17.	ADJ	Num	NumType=Ord	4	nmod	_	_
6	elokuuta	elo#kuu	NOUN	N	Case=Par|Number=Sing	5	flat	_	SpaceAfter=No
7	.	.	PUNCT	Punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat	color:blue
1	Tehty	tehdä	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	0	root	_	_
2	Brysselissä	Bryssel	PROPN	N	Case=Ine|Number=Sing	1	obl	_	_
3	17	17	NUM	Num	NumType=Card	1	obl	_	_
4	päivänä	päivä	NOUN	N	Case=Ess|Number=Sing	3	flat	_	_
5	joulukuuta	joulu#kuu	NOUN	N	Case=Par|Number=Sing	3	flat	_	_
6	1996	1996	NUM	Num	NumType=Card	3	flat	_	SpaceAfter=No
7	.	.	PUNCT	Punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 flat	color:blue
1	Sopimuskausi	sopimus#kausi	NOUN	N	Case=Nom|Number=Sing	3	nsubj:cop	_	_
2	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	voimassa	voimassa	ADV	Adv	_	0	root	_	_
4	15.	15.	ADJ	Num	NumType=Ord	3	nmod	_	_
5	toukokuuta	touko#kuu	NOUN	N	Case=Par|Number=Sing	4	flat	_	_
6	2013	2013	NUM	Num	NumType=Card	4	flat	_	_
7	asti	asti	ADP	Adp	AdpType=Post	4	case	_	SpaceAfter=No
8	.	.	PUNCT	Punct	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.

743 nodes (1%) are attached to their parents as `flat`.

743 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.06056527590848.

The following 7 pairs of parts of speech are connected with `flat`: [fi-pos/PROPN]()-[fi-pos/PROPN]() (702; 94% instances), [fi-pos/PROPN]()-[fi-pos/NOUN]() (19; 3% instances), [fi-pos/PROPN]()-[fi-pos/NUM]() (9; 1% instances), [fi-pos/X]()-[fi-pos/X]() (6; 1% instances), [fi-pos/PROPN]()-[fi-pos/ADJ]() (3; 0% instances), [fi-pos/PROPN]()-[fi-pos/X]() (2; 0% instances), [fi-pos/X]()-[fi-pos/PROPN]() (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Seppo	seppo	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	4	nsubj	_	Alt=name
2	Räty	räty	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	1	flat	_	_
3	on	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	saattanut	saattaa	VERB	V,Act,PcpNut,Sg,Nom	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	seppouden	seppous	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	4	obj	_	_
6	lakipisteeseen	lakipiste	NOUN	N,Sg,Ill	Case=Ill|Number=Sing	4	nmod	_	_
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat	color:blue
1	hän	hän	PRON	Pron,Pers,Sg3,Nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	nukkuukin	nukkua	VERB	V,Act,Ind,Pres,Sg3,Kin	Clitic=Kin|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	alasti	alasti	ADV	Adv	_	2	advmod	_	_
4	,	,	PUNCT	Pun	_	3	punct	_	_
5	vain	vain	PART	Pcle	_	8	advmod	_	_
6	Chanel	chanel	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	8	nmod	_	Alt=name
7	viitosen	viitonen	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	6	flat	_	_
8	tuoksu	tuoksu	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	9	nmod	_	_
9	peittonaan	peitto	NOUN	N,Sg,Ess,Px3	Case=Ess|Number=Sing|Person[psor]=3	2	nmod	_	_
10	.	.	PUNCT	Pun	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat	color:blue
1	Viimeisenä	viimeinen	ADJ	A,Sg,Ess	Case=Ess|Number=Sing	2	nmod	_	_
2	kuuntelin	kuunnella	VERB	V,Act,Ind,Past,Sg1	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	Bach	bach	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	6	nmod	_	Alt=name
4	Organ	organ	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	3	flat	_	Alt=name
5	Blasterin	blaster	PROPN	N,Prop,Sg,Gen	Case=Gen|Number=Sing	3	flat	_	Alt=6_nmod
6	kappaleen	kappale	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	2	obj	_	_
7	BWV	bwv	PROPN	N,Abbr,Prop,Sg,Nom	Abbr=Yes|Case=Nom|Number=Sing	6	nummod	_	Alt=name
8	680	680	NUM	Num,Card	NumType=Card	7	flat	_	_

~~~


