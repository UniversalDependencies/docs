

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is a language-specific subtype of [compound]().
There are also 1 other language-specific subtypes of `compound`: [compound:nn]().

251 nodes (0%) are attached to their parents as `compound:prt`.

209 instances of `compound:prt` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.43027888446215.

The following 5 pairs of parts of speech are connected with `compound:prt`: [fi-pos/VERB]()-[fi-pos/ADV]() (229; 91% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (10; 4% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (6; 2% instances), [fi-pos/ADV]()-[fi-pos/ADV]() (4; 2% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (2; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 compound:prt	color:blue
1	Ottakaa	ottaa	VERB	V	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	0	root	_	_
2	minut	minä	PRON	Pron	Case=Acc|Number=Sing|Person=1|PronType=Prs	1	obj	_	_
3	mukaan	mukaan	ADV	Adv	_	1	compound:prt	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	6	punct	_	_
5	niin	niin	ADV	Adv	_	6	mark	_	_
6	saatte	saada	VERB	V	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	advcl	_	_
7	luotettavan	luotettava	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	8	amod	_	_
8	turvamiehen	turva#mies	NOUN	N	Case=Gen|Number=Sing	6	obj	_	SpaceAfter=No
9	.	.	PUNCT	Punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 compound:prt	color:blue
1	Päätimme	päättää	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	myös	myös	ADV	Adv	_	3	advmod	_	_
3	säilyttää	säilyttää	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	1	xcomp	_	_
4	kuuden	kuusi	NUM	Num	Case=Gen|Number=Sing|NumType=Card	5	nummod	_	_
5	kuukauden	kuu#kausi	NOUN	N	Case=Gen|Number=Sing	6	nmod:poss	_	_
6	siirtymäkauden	siirtymä#kausi	NOUN	N	Case=Gen|Number=Sing	3	obj	_	_
7	direktiivin	direktiivi	NOUN	N	Case=Gen|Number=Sing	9	nmod:gsubj	_	_
8	voimaan	voimaan	ADV	Adv	_	9	compound:prt	_	_
9	astumisen	astuminen	NOUN	N	Case=Gen|Derivation=Minen|Number=Sing	3	obl	_	_
10	jälkeen	jälkeen	ADP	Adp	AdpType=Post	9	case	_	SpaceAfter=No
11	.	.	PUNCT	Punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:prt	color:blue
1	Moni	moni	PRON	Pron	Case=Nom|Number=Sing|PronType=Ind	2	det	_	_
2	yhtiö	yhtiö	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	_
3	ottikin	ottaa	VERB	V	Clitic=Kin|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	vaarin	vaari	NOUN	N	Case=Gen|Number=Sing	3	compound:prt	_	_
5	analyytikkojen	analyytikko	NOUN	N	Case=Gen|Number=Plur	6	nmod:poss	_	_
6	ohjeista	ohje	NOUN	N	Case=Ela|Number=Plur	3	obl	_	SpaceAfter=No
7	.	.	PUNCT	Punct	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is a language-specific subtype of [compound]().
There are also 1 other language-specific subtypes of `compound`: [compound:nn]().

345 nodes (0%) are attached to their parents as `compound:prt`.

324 instances of `compound:prt` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.65217391304348.

The following 5 pairs of parts of speech are connected with `compound:prt`: [fi-pos/VERB]()-[fi-pos/ADV]() (169; 49% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (167; 48% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (7; 2% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/X]()-[fi-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 compound:prt	color:blue
1	"	"	PUNCT	Pun,Quo,Ini	PunctSide=Ini	2	punct	_	Missed-SUBCAT=QUOTATION
2	Istuu	istua	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	kymmenen	kymmenen	NUM	Num,Card,Sg,Nom	Case=Nom|Number=Sing|NumType=Card	4	nummod	_	_
4	vuotta	vuosi	NOUN	N,Sg,Par	Case=Par|Number=Sing	2	nmod	_	_
5	pytyssä	pytty	NOUN	N,Sg,Ine	Case=Ine|Number=Sing	2	nmod	_	_
6	ell	jos	SCONJ	Pcle,CS	_	8	mark	_	Join=Yes
7	ei	ei	VERB	V,Neg,Act,Sg3	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	8	aux	_	_
8	anna	antaa	VERB	V,Act,Ind,Pres,ConNeg	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	advcl	_	_
9	ilmi	ilmi	ADV	Adv	_	8	compound:prt	_	_
10	kavereitaan	kaveri	NOUN	N,Pl,Par,Px3	Case=Par|Number=Plur|Person[psor]=3	8	obj	_	_
11	.	.	PUNCT	Pun	_	10	punct	_	_
12	"	"	PUNCT	Pun,Quo,Fin	PunctSide=Fin	11	punct	_	Missed-SUBCAT=QUOTATION

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 compound:prt	color:blue
1	Mieleni	mieli	NOUN	N,Sg,Nom,PxSg1	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	compound:prt	_	_
2	olisi	olla	VERB	V,Act,Cond,Sg3	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	3	aux	_	_
3	tehnyt	tehdä	VERB	V,Act,PcpNut,Sg,Nom	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	_	_
4	rynnätä	rynnätä	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	3	xcomp	_	Alt=3_xcomp
5	pois	pois	ADV	Adv	_	4	advmod	_	_
6	koko	koko	ADJ	A	_	7	amod	_	_
7	salista	sali	NOUN	N,Sg,Ela	Case=Ela|Number=Sing	4	nmod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 compound:prt	color:blue
1	On	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	Alt=2_cop
2	hyvä	hyvä	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	0	root	_	Alt=0_root|FTB-Rel=modal
3	ottaa	ottaa	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	2	xcomp:ds	_	Alt=2_xcomp:ds
4	edeltä	edeltä	ADV	Adv	_	3	advmod	_	_
5	käsin	käsin	ADP	Adp	_	4	case	_	_
6	selvää	selvä	ADJ	A,Sg,Par	Case=Par|Number=Sing	3	compound:prt	_	_
7	kustannuksista	kustannus	NOUN	N,Pl,Ela	Case=Ela|Number=Plur	3	nmod	_	_

~~~


