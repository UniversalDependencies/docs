---
layout: base
title:  'Statistics of nmod:gobj in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `nmod:gobj`

This relation is a language-specific subtype of <tt><a href="fi_ood-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="fi_ood-dep-nmod-gsubj.html">nmod:gsubj</a></tt>, <tt><a href="fi_ood-dep-nmod-poss.html">nmod:poss</a></tt>.

74 nodes (0%) are attached to their parents as `nmod:gobj`.

73 instances of `nmod:gobj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16216216216216.

The following 4 pairs of parts of speech are connected with `nmod:gobj`: <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (65; 88% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (5; 7% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (2; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:gobj	color:blue
1	asennon	asento	NOUN	_	Case=Gen|Number=Sing	2	nmod:gobj	_	_
2	korjaamisella	korjaaminen	NOUN	_	Case=Ade|Derivation=Minen|Number=Sing	7	obl	_	_
3	ja	ja	CCONJ	_	_	5	cc	_	_
4	O2%	O2%	NOUN	_	Abbr=Yes|Case=Gen|Number=Sing	5	nmod:gobj	_	Gen=happipitoisuuden
5	nostamisella	nostaminen	NOUN	_	Case=Ade|Derivation=Minen|Number=Sing	2	conj	_	_
6	tilanne	tilanne	NOUN	_	Case=Nom|Number=Sing	7	nsubj	_	_
7	palautui	palautua	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:gobj	color:blue
1	Heidän	hän	PRON	_	Case=Gen|Number=Plur|Person=3|PronType=Prs	2	nmod:gobj	_	_
2	hoitamisensa	hoitaminen	NOUN	_	Case=Nom|Derivation=Minen|Number=Sing|Person[psor]=3	8	nsubj:cop	_	_
3	ja	ja	CCONJ	_	_	4	cc	_	_
4	kuntouttamisensa	kuntouttaminen	NOUN	_	Case=Gen|Derivation=Minen|Number=Sing|Person[psor]=3	2	conj	_	_
5	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
6	nyt	nyt	ADV	_	_	8	advmod	_	_
7	entistä	entinen	ADJ	_	Case=Par|Degree=Pos|Derivation=Inen|Number=Sing	8	advcl	_	_
8	vaikeampaa	vaikea	ADJ	_	Case=Par|Degree=Cmp|Number=Sing	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:gobj	color:blue
1	Tänä	tämä	PRON	_	Case=Ess|Number=Sing|PronType=Dem	2	det	_	_
2	vuonna	vuosi	NOUN	_	Case=Ess|Number=Sing	3	obl	_	_
3	tarvitsen	tarvita	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	alamittaisten	ala#mittainen	ADJ	_	Case=Gen|Degree=Pos|Derivation=Inen|Number=Plur	5	nmod:gobj	_	_
5	käsittelyyn	käsittely	NOUN	_	Case=Ill|Derivation=U|Number=Sing	6	obl	_	_
6	oikeuttavan	oikeuttaa	VERB	_	Case=Gen|Degree=Pos|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Act	7	acl	_	_
7	valtakirjan	valta#kirja	NOUN	_	Case=Gen|Number=Sing	3	obj	_	SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	joka	joka	PRON	_	Case=Nom|Number=Sing|PronType=Rel	10	obj	_	_
10	toimitetaan	toimittaa	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	7	acl:relcl	_	_
11	jokaiselle	jokainen	PRON	_	Case=All|Number=Sing|PronType=Ind	13	det	_	_
12	merkkaustiimiin	merkkaus#tiimi	NOUN	_	Case=Ill|Number=Sing	13	obl	_	_
13	osallistuvalle	osallistua	VERB	_	Case=All|Degree=Pos|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Act	10	obl	_	SpaceAfter=No
14	.	.	PUNCT	_	_	3	punct	_	_

~~~


