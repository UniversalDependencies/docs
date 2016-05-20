

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is a language-specific subtype of [nmod]().
There are also 3 other language-specific subtypes of `nmod`: [nmod:gobj](), [nmod:gsubj](), [nmod:poss]().

284 nodes (0%) are attached to their parents as `nmod:own`.

268 instances of `nmod:own` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45070422535211.

The following 5 pairs of parts of speech are connected with `nmod:own`: [fi-pos/VERB]()-[fi-pos/PRON]() (186; 65% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (69; 24% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (22; 8% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (5; 2% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (2; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:own	color:blue
1	Lapsina	lapsi	NOUN	N	Case=Ess|Number=Plur	3	nmod	_	_
2	meillä	minä	PRON	Pron	Case=Ade|Number=Plur|Person=1|PronType=Prs	3	nmod:own	_	_
3	oli	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	maalla	maa	NOUN	N	Case=Ade|Number=Sing	3	nmod	_	_
5	satumetsä	satu#metsä	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	SpaceAfter=No
6	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:own	color:blue
1	Kielenopiskelijoilla	kieli#opiskelija	NOUN	N	Case=Ade|Number=Plur	3	nmod:own	_	_
2	taas	taas	ADV	Adv	_	3	advmod	_	_
3	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	kaksi	kaksi	NUM	Num	Case=Nom|Number=Sing|NumType=Card	6	nummod	_	_
5	erillistä	erillinen	ADJ	A	Case=Par|Degree=Pos|Number=Sing	6	amod	_	_
6	järjestelmää	järjestelmä	NOUN	N	Case=Par|Number=Sing	3	nsubj	_	SpaceAfter=No
7	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:own	color:blue
1	Herra	herra	NOUN	N	Case=Nom|Number=Sing	2	compound:nn	_	_
2	Rübigillä	Rübig	PROPN	N	Case=Ade|Number=Sing	3	nmod:own	_	_
3	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	puheenvuoro	puheen#vuoro	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	_
5	eiliseen	eilinen	ADJ	A	Case=Ill|Degree=Pos|Number=Sing	6	amod	_	_
6	pöytäkirjaan	pöytä#kirja	NOUN	N	Case=Ill|Number=Sing	7	nmod	_	_
7	liittyen	liittyä	VERB	V	Case=Ins|InfForm=2|Number=Sing|VerbForm=Inf|Voice=Act	4	advcl	_	SpaceAfter=No
8	.	.	PUNCT	Punct	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:gobj](), [nmod:gsubj]().

602 nodes (0%) are attached to their parents as `nmod:own`.

520 instances of `nmod:own` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45847176079734.

The following 11 pairs of parts of speech are connected with `nmod:own`: [fi-pos/VERB]()-[fi-pos/PRON]() (405; 67% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (95; 16% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (43; 7% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (21; 3% instances), [fi-pos/ADJ]()-[fi-pos/PRON]() (15; 2% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (14; 2% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (4; 1% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (2; 0% instances), [fi-pos/ADJ]()-[fi-pos/PROPN]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod:own	color:blue
1	Oisko	olla	VERB	V,Act,Cond,Sg3,Ko	Clitic=Ko|Mood=Cnd|Number=Sing|Person=3|Style=Coll|VerbForm=Fin|Voice=Act	0	root	_	_
2	sulla	sinä	PRON	Pron,Pers,Sg2,Ade	Case=Ade|Number=Sing|Person=2|PronType=Prs|Style=Coll	1	nmod:own	_	Alt=nmod:own
3	antaa	antaa	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	1	ccomp	_	_
4	markka	markka	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	3	dobj	_	_
5	?	?	PUNCT	Pun	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:own	color:blue
1	Työnarkomaanilla	työnarkomaani	NOUN	N,Sg,Ade	Case=Ade|Number=Sing	2	compound:nn	_	Alt=compound:nn
2	presidentillä	presidentti	NOUN	N,Sg,Ade	Case=Ade|Number=Sing	3	nmod:own	_	Alt=nmod:own
3	on	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	muitakin	muu	DET	Pron,Qnt,Pl,Par,Kin	Case=Par|Clitic=Kin|Number=Plur|PronType=Ind	5	det	_	_
5	intohimoja	intohimo	NOUN	N,Pl,Par	Case=Par|Number=Plur	3	nsubj	_	_
6	elämässään	elämä	NOUN	N,Sg,Ine,Px3	Case=Ine|Number=Sing|Person[psor]=3	3	nmod	_	_
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod:own	color:blue
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


