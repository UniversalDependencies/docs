---
layout: base
title:  'Statistics of flat:foreign in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="fi_tdt-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="fi_tdt-dep-flat-name.html">flat:name</a></tt>.

93 nodes (0%) are attached to their parents as `flat:foreign`.

93 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.58064516129032.

The following 3 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="fi_tdt-pos-X.html">X</a></tt>-<tt><a href="fi_tdt-pos-X.html">X</a></tt> (80; 86% instances), <tt><a href="fi_tdt-pos-X.html">X</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (12; 13% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	DIY	DIY	X	Foreign	Foreign=Yes	4	compound:nn	4:compound:nn	_
2	time-lapse	time-lapse	X	Foreign	Foreign=Yes	1	flat:foreign	1:flat:foreign	_
3	dolly	dolly	X	Foreign	Foreign=Yes	1	flat:foreign	1:flat:foreign	_
4	suunnitelmia	suunnitelma	NOUN	N	Case=Par|Number=Plur	0	root	0:root	_
5	(	(	PUNCT	Punct	_	6	punct	6:punct	SpaceAfter=No
6	Arduino	Arduino	PROPN	N	Case=Nom|Number=Sing	4	nmod	4:nmod	SpaceAfter=No
7	)	)	PUNCT	Punct	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat:foreign	color:blue
1	Hyvin	hyvin	ADV	Adv	_	2	advmod	2:advmod	_
2	nukuttujen	nukkua	VERB	V	Case=Gen|Number=Plur|PartForm=Past|VerbForm=Part|Voice=Pass	3	acl	3:acl	_
3	yöunien	yö#uni	NOUN	N	Case=Gen|Number=Plur	6	obl	6:obl	_
4	jälkeen	jälkeen	ADP	Adp	AdpType=Post	3	case	3:case	_
5	olisi	olla	AUX	V	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
6	tiedossa	tieto	NOUN	N	Case=Ine|Number=Sing	0	root	0:root	_
7	viikonlopun	viikon#loppu	NOUN	N	Case=Gen|Derivation=U|Number=Sing	8	nmod:poss	8:nmod:poss	_
8	main	main	X	Foreign	Foreign=Yes	6	nsubj:cop	6:nsubj:cop	_
9	event	event	NOUN	Foreign	Case=Nom|Number=Sing	8	flat:foreign	8:flat:foreign	_
10	eli	eli	CCONJ	C	_	12	cc	12:cc	_
11	TiTeTan	TiTeTa	PROPN	N	Case=Gen|Number=Sing	12	nmod:poss	12:nmod:poss	_
12	ulkolajit	ulko#laji	NOUN	N	Case=Nom|Number=Plur	8	conj	6:nsubj:cop|8:conj	SpaceAfter=No
13	.	.	PUNCT	Punct	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat:foreign	color:blue
1	Marita	Marita	PROPN	N	Case=Nom|Number=Sing	3	nsubj	3:nsubj|8:nsubj	_
2	Koivunen	Koivunen	PROPN	N	Case=Nom|Number=Sing	1	flat:name	1:flat:name	_
3	työskentelee	työskennellä	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	kehittämisylihoitajana	kehittämis#yli#hoitaja	NOUN	N	Case=Ess|Derivation=Ja|Number=Sing	3	obl	3:obl	_
5	Satakunnan	Satakunta	PROPN	N	Case=Gen|Number=Sing	6	nmod:poss	6:nmod:poss	_
6	sairaanhoitopiirissä	sairaan#hoito#piiri	NOUN	N	Case=Ine|Number=Sing	3	obl	3:obl	_
7	ja	ja	CCONJ	C	_	8	cc	8:cc	_
8	toteuttaa	toteuttaa	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	3:conj	_
9	post	post	NOUN	Foreign	Case=Nom|Number=Sing	11	compound:nn	11:compound:nn	_
10	doc	doc	NOUN	Foreign	Case=Nom|Number=Sing	9	flat:foreign	9:flat:foreign	_
11	-tutkimusta	tutkimus	NOUN	N	Case=Par|Number=Sing	8	obj	8:obj	_
12	yhteistyössä	yhteis#työ	NOUN	N	Case=Ine|Number=Sing	8	obl	8:obl	_
13	Turun	Turku	PROPN	N	Case=Gen|Number=Sing	14	nmod:poss	14:nmod:poss	_
14	yliopiston	yli#opisto	NOUN	N	Case=Gen|Number=Sing	16	nmod:poss	13:flat:name|16:nmod:poss	_
15	hoitotieteen	hoito#tiede	NOUN	N	Case=Gen|Number=Sing	16	nmod:poss	16:nmod:poss	_
16	laitoksen	laitos	NOUN	N	Case=Gen|Number=Sing	12	nmod	12:nmod	_
17	kanssa	kanssa	ADP	Adp	AdpType=Post	16	case	16:case	SpaceAfter=No
18	.	.	PUNCT	Punct	_	3	punct	3:punct	_

~~~


