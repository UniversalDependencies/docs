

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.
There are 1 language-specific subtypes of `aux`: [aux:pass]().

4796 nodes (3%) are attached to their parents as `aux`.

4609 instances of `aux` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.7291492910759.

The following 11 pairs of parts of speech are connected with `aux`: [fi-pos/VERB]()-[fi-pos/AUX]() (4018; 84% instances), [fi-pos/NOUN]()-[fi-pos/AUX]() (351; 7% instances), [fi-pos/ADJ]()-[fi-pos/AUX]() (219; 5% instances), [fi-pos/PRON]()-[fi-pos/AUX]() (98; 2% instances), [fi-pos/ADV]()-[fi-pos/AUX]() (75; 2% instances), [fi-pos/PROPN]()-[fi-pos/AUX]() (14; 0% instances), [fi-pos/AUX]()-[fi-pos/AUX]() (12; 0% instances), [fi-pos/NUM]()-[fi-pos/AUX]() (5; 0% instances), [fi-pos/PUNCT]()-[fi-pos/AUX]() (2; 0% instances), [fi-pos/ADP]()-[fi-pos/AUX]() (1; 0% instances), [fi-pos/X]()-[fi-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
1	Se	se	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	3	det	_	_
2	sisäinen	sisäinen	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	3	amod	_	_
3	lapseni	lapsi	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	6	nsubj	7:nsubj	_
4	ei	ei	AUX	V	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	6	aux	_	_
5	vaan	vaan	ADV	Adv	_	6	advmod	_	_
6	suostu	suostua	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
7	katoamaan	kadota	VERB	V	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	6	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	Punct	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 aux	color:blue
1	Halvimmat	halpa	ADJ	A	Case=Nom|Degree=Sup|Number=Plur	9	nsubj:cop	_	_
2	mitä	mikä	PRON	Pron	Case=Par|Number=Sing|PronType=Rel	4	obj	_	_
3	olen	olla	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	nähnyt	nähdä	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	1	acl:relcl	_	_
5	ovat	olla	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	_
6	olleet	olla	AUX	V	Case=Nom|Degree=Pos|Number=Plur|PartForm=Past|VerbForm=Part|Voice=Act	9	cop	_	_
7	yli	yli	ADV	Adv	_	8	advmod	_	_
8	400	400	NUM	Num	NumType=Card	9	nummod	_	_
9	euroa	euro	NOUN	N	Case=Par|Number=Sing	0	root	_	SpaceAfter=No
10	.	.	PUNCT	Punct	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 aux	color:blue
1	Eivätkö	ei	AUX	V	Clitic=Ko|Number=Plur|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	3	aux	_	_
2	olekin	olla	AUX	V	Clitic=Kin|Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	kivat	kiva	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	0	root	_	SpaceAfter=No
4	?	?	PUNCT	Punct	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.

6831 nodes (5%) are attached to their parents as `aux`.

6772 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.74645000731957.

The following 10 pairs of parts of speech are connected with `aux`: [fi-pos/VERB]()-[fi-pos/VERB]() (6203; 91% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (287; 4% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (283; 4% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (32; 0% instances), [fi-pos/PROPN]()-[fi-pos/VERB]() (10; 0% instances), [fi-pos/NUM]()-[fi-pos/VERB]() (7; 0% instances), [fi-pos/ADV]()-[fi-pos/VERB]() (4; 0% instances), [fi-pos/X]()-[fi-pos/VERB]() (3; 0% instances), [fi-pos/PUNCT]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/X]()-[fi-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 aux	color:blue
1	ei	ei	VERB	V,Neg,Act,Sg3	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	3	aux	_	_
2	voi	voida	VERB	V,Act,Ind,Pres,ConNeg	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	ajatellakhaa	ajatella	VERB	V,Act,InfA,Lat,Kaan	Case=Lat|Clitic=Kaan|InfForm=1|Style=Coll|VerbForm=Inf|Voice=Act	0	root	_	_
4	varhmaan	varmaan	PART	Pcle	Style=Coll	3	advmod	_	_
5	että	että	SCONJ	Pcle,CS	_	9	mark	_	_
6	ne	ne	PRON	Pron,Dem,Pl,Nom	Case=Nom|Number=Plur|PronType=Dem	9	nsubj:cop	_	_
7	ikinä	ikinä	ADV	Adv	_	9	advmod	_	_
8	olis	olla	AUX	V,Act,Cond,Sg3	Mood=Cnd|Number=Sing|Person=3|Style=Coll|VerbForm=Fin|Voice=Act	9	cop	_	_
9	vakinaisia	vakinainen	ADJ	A,Pl,Par	Case=Par|Number=Plur	3	ccomp	_	_
10	.	.	PUNCT	Pun	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Se	se	PRON	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	4	nsubj:cop	_	_
2	on	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
3	tullunna	tulla	AUX	V,Act,PcpNut,Sg,Nom	Case=Nom|Number=Sing|PartForm=Past|Style=Coll|VerbForm=Part|Voice=Act	4	cop	_	_
4	harmmoopäeseks	harmaapäinen	ADJ	A,Sg,Tra	Case=Tra|Number=Sing|Style=Coll	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Hänestä	hän	PRON	Pron,Pers,Sg3,Ela	Case=Ela|Number=Sing|Person=3|PronType=Prs	4	nmod	_	_
2	voi	voida	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
3	tulla	tulla	AUX	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	4	cop	_	_
4	sensaatio	sensaatio	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	0	root	_	_
5	.	.	PUNCT	Pun	_	4	punct	_	_

~~~


