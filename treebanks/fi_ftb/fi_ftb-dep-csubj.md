---
layout: base
title:  'Statistics of csubj in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="fi_ftb-dep-csubj-cop.html">csubj:cop</a></tt>.

282 nodes (0%) are attached to their parents as `csubj`.

212 instances of `csubj` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.63475177304965.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt> (255; 90% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt> (11; 4% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (5; 2% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 csubj	color:blue
1	Tuntuu	tuntua	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	oudolta	outo	ADJ	A,Sg,Abl	Case=Abl|Number=Sing	1	nmod	_	_
3	,	,	PUNCT	Pun	_	2	punct	_	_
4	että	että	SCONJ	Pcle,CS	_	7	mark	_	_
5	joku	joku	PRON	Pron,Qnt,Sg,Nom	Case=Nom|Number=Sing|PronType=Ind	7	nsubj	_	FTB-PronType=Qnt
6	voi	voida	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
7	ajatella	ajatella	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	1	csubj	_	_
8	noin	noin	ADV	Adv,Dem	PronType=Dem	7	advmod	_	_
9	.	.	PUNCT	Pun	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj	color:blue
1	Ai	ai	INTJ	Pcle,Interj	_	2	discourse	_	Alt=2_discourse
2	kun	kun	SCONJ	Pcle,CS	_	3	dep	_	Missed-Rel=attr
3	kiva	kiva	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	0	root	_	_
4	,	,	PUNCT	Pun	_	3	punct	_	_
5	että	että	SCONJ	Pcle,CS	_	7	mark	_	_
6	te	te	PRON	Pron,Pers,Pl2,Nom	Case=Nom|Number=Plur|Person=2|PronType=Prs	7	nsubj	_	_
7	tulette	tulla	VERB	V,Act,Ind,Pres,Pl2	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj	_	_
8	.	.	PUNCT	Pun	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 csubj	color:blue
1	saattaa	saattaa	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	aux	_	_
2	olla	olla	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	0	root	_	_
3	hyväksi	hyvä	ADJ	A,Sg,Tra	Case=Tra|Number=Sing	2	nmod	_	_
4	,	,	PUNCT	Pun	_	3	punct	_	_
5	että	että	SCONJ	Pcle,CS	_	8	mark	_	_
6	ihmisoikeusraportoija	ihmisoikeusraportoija	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	8	nsubj:cop	_	_
7	on	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	nainen	nainen	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	2	csubj	_	_
9	.	.	PUNCT	Pun	_	8	punct	_	_

~~~


