---
layout: base
title:  'Statistics of flat in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `flat`

This relation is universal.

818 nodes (1%) are attached to their parents as `flat`.

818 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.06112469437653.

The following 7 pairs of parts of speech are connected with `flat`: <tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (771; 94% instances), <tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (22; 3% instances), <tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt> (11; 1% instances), <tt><a href="fi_ftb-pos-X.html">X</a></tt>-<tt><a href="fi_ftb-pos-X.html">X</a></tt> (6; 1% instances), <tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ftb-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="fi_ftb-pos-X.html">X</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Seppo	seppo	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	4	nsubj	_	Alt=name
2	Räty	räty	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	1	flat	_	_
3	on	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
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
7	BWV	bwv	PROPN	N,Abbr,Prop,Sg,Nom	Abbr=Yes|Case=Nom|Number=Sing	6	nmod	_	Alt=name|Was18propnum=nummod
8	680	680	NUM	Num,Card	NumType=Card	7	flat	_	_

~~~


