

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:gobj](), [nmod:gsubj]().

544 nodes (0%) are attached to their parents as `nmod:own`.

472 instances of `nmod:own` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45036764705882.

The following 10 pairs of parts of speech are connected with `nmod:own`: [fi-pos/VERB]()-[fi-pos/PRON]() (369; 68% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (84; 15% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (39; 7% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (21; 4% instances), [fi-pos/ADJ]()-[fi-pos/PRON]() (13; 2% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (12; 2% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (2; 0% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (2; 0% instances), [fi-pos/ADJ]()-[fi-pos/PROPN]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod:own	color:blue
1	Oisko	olla	VERB	V,Act,Cond,Sg3,Ko	Clitic=Ko|Mood=Cnd|Number=Sing|Person=3|Style=Coll|VerbForm=Fin|Voice=Act	0	root	_	_
2	sulla	sinä	PRON	Pron,Pers,Sg2,Ade	Case=Ade|Number=Sing|Person=2|PronType=Prs|Style=Coll	1	nmod:own	_	Alt=nmod:own
3	antaa	antaa	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	1	ccomp	_	_
4	markka	markka	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	3	obj	_	_
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
6	mies	mies	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	5	obj	_	_
7	jolla	joka	PRON	Pron,Rel,Sg,Ade	Case=Ade|Number=Sing|PronType=Rel	10	nmod	_	_
8	joka	joka	DET	Pron,Qnt	PronType=Ind	9	det	_	_
9	paikka	paikka	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	10	nsubj	_	_
10	pelloo	pelata	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Style=Coll|Tense=Pres|VerbForm=Fin|Voice=Act	6	acl	_	_
11	.	.	PUNCT	Pun	_	10	punct	_	_

~~~


