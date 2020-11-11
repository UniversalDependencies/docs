---
layout: base
title:  'Statistics of cop:own in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `cop:own`

This relation is a language-specific subtype of <tt><a href="fi_ood-dep-cop.html">cop</a></tt>.

34 nodes (0%) are attached to their parents as `cop:own`.

30 instances of `cop:own` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.47058823529412.

The following 4 pairs of parts of speech are connected with `cop:own`: <tt><a href="fi_ood-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ood-pos-AUX.html">AUX</a></tt> (25; 74% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-AUX.html">AUX</a></tt> (7; 21% instances), <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-AUX.html">AUX</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cop:own	color:blue
1	Saa	saada	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	SENSE=0
2	furesista	Furesis	PROPN	_	Case=Par|Number=Plur	1	obj	_	Gen=lääkettä|SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	jolla	joka	PRON	_	Case=Ade|Number=Sing|PronType=Rel	2	acl:relcl	_	_
5	onkin	olla	AUX	_	Clitic=Kin|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop:own	_	SENSE=0
6	hyvä	hyvä	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	7	amod	_	_
7	vaste	vaste	NOUN	_	Case=Nom|Number=Sing	4	nsubj:cop	_	SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cop:own	color:blue
1	Ei	ei	AUX	_	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	3	aux	_	_
2	kai	kai	ADV	_	_	3	advmod	_	_
3	poliisilla	poliisi	NOUN	_	Case=Ade|Number=Sing	0	root	_	_
4	ole	olla	AUX	_	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	3	cop:own	_	_
5	mitään	mikään	PRON	_	Case=Par|Number=Sing|PronType=Ind	6	det	_	_
6	säilytystilaa	säilytys#tila	NOUN	_	Case=Par|Number=Sing	3	nsubj:cop	_	_
7	niille	se	PRON	_	Case=All|Number=Plur|PronType=Dem	3	obl	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cop:own	color:blue
1	@TiinaMattanen	@TiinaMattanen	PROPN	_	Case=Nom|Number=Sing	3	vocative	_	_
2	Ei	ei	AUX	_	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	3	aux	_	_
3	mullakaan	mulla	ADV	_	Clitic=Kaan	0	root	_	_
4	ole	olla	AUX	_	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	3	cop:own	_	_
5	mitään	mikään	PRON	_	Case=Par|Number=Sing|PronType=Ind	6	det	_	_
6	numero	numero	NOUN	_	Case=Nom|Number=Sing	3	nsubj:cop	_	_
7	tietoa	tieto	NOUN	_	Case=Par|Number=Sing	6	goeswith	_	_
8	heittää	heittää	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	3	xcomp:ds	_	_
9	tähän	tämä	PRON	_	Case=Ill|Number=Sing|PronType=Dem	8	obl	_	_
10	enkä	ei	AUX	_	Clitic=Ka|Number=Sing|Person=1|Polarity=Neg|VerbForm=Fin|Voice=Act	13	aux	_	_
11	voi	voida	AUX	_	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	13	aux	_	_
12	varmuudella	varmuus	NOUN	_	Case=Ade|Derivation=Vs|Number=Sing	13	obl	_	_
13	sanoa	sanoa	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	3	conj	_	_
14	mikä	mikä	PRON	_	Case=Nom|Number=Sing|PronType=Rel	15	det	_	_
15	kielitilanne	kieli#tilanne	NOUN	_	Case=Nom|Number=Sing	16	nsubj:cop	_	_
16	alueella	alue	NOUN	_	Case=Ade|Number=Sing	13	ccomp	_	_
17	oli	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	16	cop	_	_
18	esim.	esim.	ADV	_	Abbr=Yes	20	advmod	_	_
19	1900-luvun	1900#luku	NOUN	_	Case=Gen|Number=Sing	20	nmod:poss	_	_
20	vaihteessa	vaihde	NOUN	_	Case=Ine|Number=Sing	16	obl	_	SpaceAfter=No
21	.	.	PUNCT	_	_	3	punct	_	_

~~~


