---
layout: base
title:  'Statistics of nmod:own in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `nmod:own`

This relation is a language-specific subtype of <tt><a href="fi_ftb-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="fi_ftb-dep-nmod-gobj.html">nmod:gobj</a></tt>, <tt><a href="fi_ftb-dep-nmod-gsubj.html">nmod:gsubj</a></tt>.

602 nodes (0%) are attached to their parents as `nmod:own`.

520 instances of `nmod:own` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45847176079734.

The following 11 pairs of parts of speech are connected with `nmod:own`: <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (405; 67% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (95; 16% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (43; 7% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (21; 3% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (15; 2% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (14; 2% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt> (1; 0% instances).


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


