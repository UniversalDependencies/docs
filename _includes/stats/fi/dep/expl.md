

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.

524 nodes (0%) are attached to their parents as `expl`.

506 instances of `expl` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.09541984732824.

The following 8 pairs of parts of speech are connected with `expl`: [fi-pos/VERB]()-[fi-pos/PRON]() (379; 72% instances), [fi-pos/VERB]()-[fi-pos/ADV]() (65; 12% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (30; 6% instances), [fi-pos/ADJ]()-[fi-pos/PRON]() (26; 5% instances), [fi-pos/PRON]()-[fi-pos/PRON]() (11; 2% instances), [fi-pos/ADJ]()-[fi-pos/ADV]() (9; 2% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (3; 1% instances), [fi-pos/NUM]()-[fi-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 expl	color:blue
1	On	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	1	expl	_	Alt=1_expl|Missed-Rel=phrm
3	Annillakkii	anni	PROPN	N,Prop,Sg,Ade	Case=Ade|Number=Sing|Style=Coll	1	nmod:own	_	Alt=nmod:own
4	oikeus	oikeus	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	1	nsubj	_	_
5	suaha	saada	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|Style=Coll|VerbForm=Inf|Voice=Act	4	acl	_	_
6	mies	mies	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	5	dobj	_	_
7	jolla	joka	PRON	Pron,Rel,Sg,Ade	Case=Ade|Number=Sing|PronType=Rel	10	nmod	_	_
8	joka	joka	DET	Pron,Qnt	PronType=Ind	9	det	_	_
9	paikka	paikka	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	10	nsubj	_	_
10	pelloo	pelata	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Style=Coll|Tense=Pres|VerbForm=Fin|Voice=Act	6	acl	_	_
11	.	.	PUNCT	Pun	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 expl	color:blue
1	Nauratti	naurattaa	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	niin	niin	ADV	Adv,Dem	PronType=Dem	5	expl	_	Alt=5_expl|Missed-Rel=phrm
3	että	että	SCONJ	Pcle,CS	_	5	mark	_	_
4	suupielistä	suupieli	NOUN	N,Pl,Ela	Case=Ela|Number=Plur	5	nmod	_	_
5	veti	vetää	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	advcl	_	_
6	.	.	PUNCT	Pun	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 expl	color:blue
1	Logistiikan	logistiikka	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	2	nmod	_	_
2	hallintaa	hallinta	NOUN	N,Sg,Par	Case=Par|Number=Sing	0	root	_	_
3	,	,	PUNCT	Pun	_	2	punct	_	_
4	sitä	se	PRON	Pron,Dem,Sg,Par	Case=Par|Number=Sing|PronType=Dem	2	expl	_	Alt=6_expl|Missed-Rel=phrm
5	se	se	PRON	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	2	expl	_	Alt=6_expl|Missed-Rel=phrm
6	on	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
7	tämä	tämä	DET	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	10	det	_	_
8	tämmöinen	tämmöinen	DET	A,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	9	amod	_	Alt=DET
9	uusi	uusi	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	10	amod	_	_
10	ajattelu	ajattelu	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	2	nsubj:cop	_	_
11	.	.	PUNCT	Pun	_	10	punct	_	_

~~~


