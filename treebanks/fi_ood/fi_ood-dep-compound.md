---
layout: base
title:  'Statistics of compound in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `compound`

This relation is universal.
There are 2 language-specific subtypes of `compound`: <tt><a href="fi_ood-dep-compound-nn.html">compound:nn</a></tt>, <tt><a href="fi_ood-dep-compound-prt.html">compound:prt</a></tt>.

36 nodes (0%) are attached to their parents as `compound`.

35 instances of `compound` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08333333333333.

The following 4 pairs of parts of speech are connected with `compound`: <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (26; 72% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (7; 19% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (2; 6% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 compound	color:blue
1	K	K	NOUN	_	Abbr=Yes|Case=Nom|Number=Sing	2	nsubj	_	Gen=Kalium
2	korjautuu	korjautua	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	myös	myös	ADV	_	_	2	advmod	_	_
4	K	K	NOUN	_	Abbr=Yes|Case=Nom|Number=Sing	6	compound	_	Gen=kalium
5	cl	Cl	NOUN	_	Abbr=Yes|Case=Nom|Number=Sing	4	goeswith	_	Gen=kloridi
6	lisällä	lisä	NOUN	_	Case=Ade|Number=Sing	2	obl	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	Noradrenaliina	Noradrenalina	PROPN	_	Case=Nom|Number=Sing|Typo=Yes	2	compound	_	Gen_desc=lääke
2	inf.	inf.	NOUN	_	Abbr=Yes|Case=Par|Number=Sing	5	obj	_	Gen=tiputusta
3	päästy	päästä	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	0	root	_	_
4	hieman	hieman	ADV	_	_	5	advmod	_	_
5	laskemaan	laskea	VERB	_	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	3	xcomp	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	Kirje	kirje	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	_
2	kertoi	kertoa	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	terveisiä	terveiset	NOUN	_	Case=Par|Number=Plur	2	obj	_	_
4	Yukiia	Yukiia	PROPN	_	Case=Nom|Number=Sing	5	compound	_	_
5	nimiseltä	niminen	ADJ	_	Case=Abl|Degree=Pos|Number=Sing	6	amod	_	_
6	kentaurilta	kentauri	NOUN	_	Case=Abl|Number=Sing	3	nmod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	13	punct	_	_
8	josta	joka	PRON	_	Case=Ela|Number=Sing|PronType=Rel	13	obl	_	_
9	Yulia	Yulia	PROPN	_	Case=Nom|Number=Sing	13	nsubj	_	_
10	ei	ei	AUX	_	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	13	aux	_	_
11	ikinä	ikinä	ADV	_	_	13	advmod	_	_
12	ollut	olla	AUX	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	13	aux	_	_
13	kuullutkaan	kuulla	VERB	_	Case=Nom|Clitic=Kaan|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	6	acl:relcl	_	SpaceAfter=No
14	.	.	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


