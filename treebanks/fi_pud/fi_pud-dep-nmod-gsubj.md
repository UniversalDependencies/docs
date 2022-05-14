---
layout: base
title:  'Statistics of nmod:gsubj in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `nmod:gsubj`

This relation is a language-specific subtype of <tt><a href="fi_pud-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="fi_pud-dep-nmod-gobj.html">nmod:gobj</a></tt>, <tt><a href="fi_pud-dep-nmod-poss.html">nmod:poss</a></tt>.

56 nodes (0%) are attached to their parents as `nmod:gsubj`.

56 instances of `nmod:gsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26785714285714.

The following 4 pairs of parts of speech are connected with `nmod:gsubj`: <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (42; 75% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (8; 14% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-PRON.html">PRON</a></tt> (5; 9% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:gsubj	color:blue
1	Von	Von	PROPN	_	Case=Nom|Number=Sing	3	nsubj	3:nsubj	_
2	Beust	Beust	PROPN	_	Case=Nom|Number=Sing	1	flat:name	1:flat:name	_
3	oikeutti	oikeuttaa	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	kulujen	kulu	NOUN	_	Case=Gen|Derivation=U|Number=Plur	5	nmod:gsubj	5:nmod:gsubj	_
5	lisääntymisen	lisääntyminen	NOUN	_	Case=Gen|Derivation=Minen|Number=Sing	3	obj	3:obj	_
6	yksityiskohtaisen	yksityis#kohtainen	ADJ	_	Case=Gen|Degree=Pos|Derivation=Inen|Number=Sing	7	amod	7:amod	_
7	suunnittelun	suunnittelu	NOUN	_	Case=Gen|Derivation=U|Number=Sing	8	nmod:poss	8:nmod:poss	_
8	puutteella	puute	NOUN	_	Case=Ade|Number=Sing	3	obl	3:obl	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod:gsubj	color:blue
1	Danevirke	Danevirke	PROPN	_	Case=Nom|Number=Sing	7	nsubj:cop	7:nsubj:cop	_
2	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
3	siitä	se	PRON	_	Case=Ela|Number=Sing|PronType=Dem	7	obl	7:obl	_
4	lähtien	lähtien	ADP	_	AdpType=Post	3	case	3:case	_
5	ollut	olla	AUX	_	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	7	cop	7:cop	_
6	Saksan	Saksa	PROPN	_	Case=Gen|Number=Sing	7	nmod:gsubj	7:nmod:gsubj	_
7	hallinnassa	hallinta	NOUN	_	Case=Ine|Number=Sing	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:gsubj	color:blue
1	Sen	se	PRON	_	Case=Gen|Number=Sing|PronType=Dem	2	nmod:gsubj	2:nmod:gsubj	_
2	kamppailu	kamppailu	NOUN	_	Case=Nom|Derivation=U|Number=Sing	7	nsubj	7:nsubj	_
3	Välimerellä	väli#meri	NOUN	_	Case=Ade|Number=Sing	2	nmod	2:nmod	_
4	osmanien	osmani	NOUN	_	Case=Gen|Number=Plur	5	nmod:poss	5:nmod:poss	_
5	valtakuntaa	valta#kunta	NOUN	_	Case=Par|Number=Sing	2	nmod	2:nmod	_
6	vastaan	vastaan	ADP	_	AdpType=Post	5	case	5:case	_
7	asetti	asettaa	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	vakavia	vakava	ADJ	_	Case=Par|Degree=Pos|Number=Plur	9	amod	9:amod	_
9	rajoituksia	rajoitus	NOUN	_	Case=Par|Number=Plur	7	obj	7:obj	_
10	sotavoimalle	sota#voima	NOUN	_	Case=All|Number=Sing	7	obl	7:obl	SpaceAfter=No
11	,	,	PUNCT	_	_	14	punct	14:punct	_
12	jota	joka	PRON	_	Case=Par|Number=Sing|PronType=Rel	14	obj	14:obj	_
13	oli	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	14	aux:pass	14:aux:pass	_
14	käytettävissä	käyttää	VERB	_	Case=Ine|Number=Plur|PartForm=Pres|VerbForm=Part|Voice=Pass	10	acl:relcl	10:acl:relcl	_
15	Alankomaiden	Alankomaat	PROPN	_	Case=Gen|Number=Plur	16	nmod:poss	16:nmod:poss	_
16	kapinallisia	kapinallinen	NOUN	_	Case=Par|Derivation=Llinen|Number=Plur	14	obl	14:obl	_
17	vastaan	vastaan	ADP	_	AdpType=Post	16	case	16:case	SpaceAfter=No
18	.	.	PUNCT	_	_	7	punct	7:punct	_

~~~


