---
layout: base
title:  'Statistics of acl in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="fi_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

223 nodes (1%) are attached to their parents as `acl`.

204 instances of `acl` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.39461883408072.

The following 4 pairs of parts of speech are connected with `acl`: <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (202; 91% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (19; 9% instances), <tt><a href="fi_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 acl	color:blue
1	Heillä	hän	PRON	_	Case=Ade|Number=Plur|Person=3|PronType=Prs	0	root	0:root	_
2	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop:own	1:cop:own	_
3	yksi	yksi	NUM	_	Case=Nom|Number=Sing|NumType=Card	4	nummod	4:nummod	_
4	yritys	yritys	NOUN	_	Case=Nom|Number=Sing	1	nsubj:cop	1:nsubj:cop	_
5	pelastua	pelastua	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	4	acl	4:acl	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	8:punct	_
7	Englannin	Englanti	PROPN	_	Case=Gen|Number=Sing	8	nmod:gobj	8:nmod:gobj	_
8	voittaminen	voittaminen	NOUN	_	Case=Nom|Derivation=Minen|Number=Sing	4	appos	4:appos	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 acl	color:blue
1	Hittikappale	hitti#kappale	NOUN	_	Case=Nom|Number=Sing	5	nsubj:cop	5:nsubj:cop	_
2	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
3	Sheppardin	Sheppard	PROPN	_	Case=Gen|Number=Sing	4	nsubj	4:nsubj	_
4	esittämä	esittää	VERB	_	Case=Nom|Number=Sing|PartForm=Agt|VerbForm=Part|Voice=Act	5	acl	5:acl	_
5	Geronimo	Geronimo	PROPN	_	Case=Nom|Number=Sing	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 acl	color:blue
1	Kun	kun	SCONJ	_	_	2	mark	2:mark	_
2	pikakelataan	pika#kelata	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	10	advcl	10:advcl	_
3	vuoteen	vuosi	NOUN	_	Case=Ill|Number=Sing	2	obl	2:obl	_
4	2016	2016	NUM	_	NumType=Card	3	nummod	3:nummod	SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	2:punct	_
6	tämä	tämä	PRON	_	Case=Nom|Number=Sing|PronType=Dem	10	nsubj:cop	10:nsubj:cop	_
7	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	10:cop	_
8	lisääntyvässä	lisääntyä	VERB	_	Case=Ine|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Act	9	acl	9:acl	_
9	määrin	määrä	ADV	_	_	10	advmod	10:advmod	_
10	huomionarvoista	huomion#arvoinen	ADJ	_	Case=Par|Degree=Pos|Derivation=Inen|Number=Sing	0	root	0:root	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	10:punct	_

~~~


