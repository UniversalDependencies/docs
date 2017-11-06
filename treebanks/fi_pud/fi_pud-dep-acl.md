---
layout: base
title:  'Statistics of acl in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="fi_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

224 nodes (1%) are attached to their parents as `acl`.

205 instances of `acl` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.39285714285714.

The following 4 pairs of parts of speech are connected with `acl`: <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (203; 91% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (19; 8% instances), <tt><a href="fi_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 acl	color:blue
1	Heillä	hän	PRON	_	Case=Ade|Number=Plur|Person=3|PronType=Prs	0	root	_	_
2	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop:own	_	_
3	yksi	yksi	NUM	_	Case=Nom|Number=Sing|NumType=Card	4	nummod	_	_
4	yritys	yritys	NOUN	_	Case=Nom|Number=Sing	1	nsubj:cop	_	_
5	pelastua	pelastua	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	4	acl	_	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	_
7	Englannin	Englanti	PROPN	_	Case=Gen|Number=Sing	8	nmod:gobj	_	_
8	voittaminen	voittaminen	NOUN	_	Case=Nom|Derivation=Minen|Number=Sing	4	appos	_	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 acl	color:blue
1	Hittikappale	hitti#kappale	NOUN	_	Case=Nom|Number=Sing	5	nsubj:cop	_	_
2	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
3	Sheppardin	Sheppard	PROPN	_	Case=Gen|Number=Sing	4	nsubj	_	_
4	esittämä	esittää	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Agt|VerbForm=Part|Voice=Act	5	acl	_	_
5	Geronimo	Geronimo	PROPN	_	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 acl	color:blue
1	Kun	kun	SCONJ	_	_	2	mark	_	_
2	pikakelataan	pika#kelata	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	10	advcl	_	_
3	vuoteen	vuosi	NOUN	_	Case=Ill|Number=Sing	2	obl	_	_
4	2016	2016	NUM	_	NumType=Card	3	nummod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	_	_
6	tämä	tämä	PRON	_	Case=Nom|Number=Sing|PronType=Dem	10	nsubj:cop	_	_
7	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
8	lisääntyvässä	lisääntyä	VERB	_	Case=Ine|Degree=Pos|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Act	9	acl	_	_
9	määrin	määrä	ADV	_	_	10	advmod	_	_
10	huomionarvoista	huomion#arvoinen	ADJ	_	Case=Par|Degree=Pos|Derivation=Inen|Number=Sing	0	root	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


