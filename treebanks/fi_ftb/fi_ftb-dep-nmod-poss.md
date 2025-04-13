---
layout: base
title:  'Statistics of nmod:poss in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="fi_ftb-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="fi_ftb-dep-nmod-gobj.html">nmod:gobj</a></tt>, <tt><a href="fi_ftb-dep-nmod-gsubj.html">nmod:gsubj</a></tt>.

365 nodes (0%) are attached to their parents as `nmod:poss`.

364 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.24383561643836.

The following 6 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (348; 95% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (8; 2% instances), <tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (6; 2% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	Jostain	jokin	DET	Pron,Qnt,Sg,Ela	Case=Ela|Number=Sing|PronType=Ind	2	det	_	_
2	syystä	syy	NOUN	N,Sg,Ela	Case=Ela|Number=Sing	6	nmod	_	_
3	minun	minä	PRON	Pron,Pers,Sg1,Gen	Case=Gen|Number=Sing|Person=1|PronType=Prs	4	nmod:poss	_	_
4	pöytäni	pöytä	NOUN	N,Sg,Nom,PxSg1	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	6	obj	_	_
5	on	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	_
6	siivottu	siivota	VERB	V,Pass,PcpNut,Sg,Nom	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	0	root	_	_
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod:poss	color:blue
1	Se	se	PRON	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	3	nsubj:cop	_	_
2	oli	olla	AUX	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	_	_
3	poika	poika	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	0	root	_	_
4	,	,	PUNCT	Pun	_	3	punct	_	_
5	sellainen	sellainen	DET	A,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	7	amod	_	Alt=DET
6	minun	minä	PRON	Pron,Pers,Sg1,Gen	Case=Gen|Number=Sing|Person=1|PronType=Prs	7	nmod:poss	_	_
7	ikäiseni	ikäinen	ADJ	A,Sg,Nom,PxSg1	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	conj	_	_
8	ja	ja	CCONJ	Pcle,CC	_	9	cc	_	_
9	kokoiseni	kokoinen	ADJ	A,Sg,Nom,PxSg1	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	conj	_	_
10	.	.	PUNCT	Pun	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod:poss	color:blue
1	Se	se	DET	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	4	det	_	_
2	sinun	sinä	PRON	Pron,Pers,Sg2,Gen	Case=Gen|Number=Sing|Person=2|PronType=Prs	4	nmod:poss	_	_
3	ihmeellinen	ihmeellinen	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	4	amod	_	_
4	Lassesi	lasse	PROPN	N,Prop,Sg,Nom,PxSg2	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	5	nsubj	_	_
5	pistää	pistää	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	rahasi	raha	NOUN	N,Pl,Nom,PxSg2	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=2	5	obj	_	_
7	kurkustaan	kurkku	NOUN	N,Sg,Ela,Px3	Case=Ela|Number=Sing|Person[psor]=3	5	nmod	_	_
8	alas	alas	ADV	Adv	_	5	advmod	_	_
9	.	.	PUNCT	Pun	_	8	punct	_	_

~~~


