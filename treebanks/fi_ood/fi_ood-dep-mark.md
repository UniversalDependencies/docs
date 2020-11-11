---
layout: base
title:  'Statistics of mark in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `mark`

This relation is universal.

367 nodes (2%) are attached to their parents as `mark`.

367 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.55313351498638.

The following 12 pairs of parts of speech are connected with `mark`: <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-SCONJ.html">SCONJ</a></tt> (233; 63% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-SCONJ.html">SCONJ</a></tt> (74; 20% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-SCONJ.html">SCONJ</a></tt> (19; 5% instances), <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-SCONJ.html">SCONJ</a></tt> (13; 4% instances), <tt><a href="fi_ood-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ood-pos-SCONJ.html">SCONJ</a></tt> (9; 2% instances), <tt><a href="fi_ood-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_ood-pos-SCONJ.html">SCONJ</a></tt> (7; 2% instances), <tt><a href="fi_ood-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ood-pos-SCONJ.html">SCONJ</a></tt> (4; 1% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-SCONJ.html">SCONJ</a></tt> (4; 1% instances), <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 mark	color:blue
1	Tarkoituksena	tarkoitus	NOUN	_	Case=Ess|Number=Sing	2	obl	_	_
2	lähteä	lähteä	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	0	root	_	_
3	angioon	angio	NOUN	_	Case=Ill|Number=Sing	2	obl	_	Gen=varjoainetutkimukseen
4	kun	kun	SCONJ	_	_	7	mark	_	_
5	labra	labra	NOUN	_	Case=Nom|Number=Sing	6	compound	_	Gen=laboratorio
6	vastaukset	vastaus	NOUN	_	Case=Nom|Number=Plur	7	nsubj	_	_
7	tulleet	tulla	VERB	_	Case=Nom|Degree=Pos|Number=Plur|PartForm=Past|VerbForm=Part|Voice=Act	2	advcl	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 mark	color:blue
1	Samaten	samaten	ADV	_	_	4	advmod	_	_
2	taustafrekvenssiä	tausta#frekvenssi	NOUN	_	Case=Par|Number=Sing	4	obj	_	_
3	voi	voida	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	nostaa	nostaa	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	0	root	_	_
5	2:n	2	NUM	_	Case=Gen|Number=Sing|NumType=Card	6	nummod	_	_
6	portaissa	porras	NOUN	_	Case=Ine|Number=Plur	4	obl	_	_
7	jos	jos	SCONJ	_	_	8	mark	_	_
8	pakko	pakko	NOUN	_	Case=Nom|Number=Sing	4	advcl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 mark	color:blue
1	Kertoivat	kertoa	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	7	punct	_	_
3	että	että	SCONJ	_	_	7	mark	_	_
4	jalkojen	jalka	NOUN	_	Case=Gen|Number=Plur	5	nmod:gsubj	_	_
5	liikkuminen	liikkuminen	NOUN	_	Case=Nom|Derivation=Minen|Number=Sing	7	nsubj:cop	_	_
6	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	tahatonta	tahaton	ADJ	_	Case=Par|Degree=Pos|Number=Sing	1	ccomp	_	SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	_

~~~


