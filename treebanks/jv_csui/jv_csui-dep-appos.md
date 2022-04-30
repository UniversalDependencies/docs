---
layout: base
title:  'Statistics of appos in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Relations: `appos`

This relation is universal.

24 nodes (1%) are attached to their parents as `appos`.

24 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.91666666666667.

The following 11 pairs of parts of speech are connected with `appos`: <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-X.html">X</a></tt> (5; 21% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt> (4; 17% instances), <tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt> (3; 13% instances), <tt><a href="jv_csui-pos-X.html">X</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (3; 13% instances), <tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="jv_csui-pos-X.html">X</a></tt>-<tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt> (2; 8% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="jv_csui-pos-X.html">X</a></tt> (1; 4% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="jv_csui-pos-X.html">X</a></tt>-<tt><a href="jv_csui-pos-X.html">X</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 appos	color:blue
1	Pira-pira	pira-pira	DET	_	Number=Plur|Polite=Infm|PronType=Ind	2	det	_	Level=Ngoko
2	dhoktrin	dhoktrin	X	_	Foreign=Yes	3	nsubj	_	_
3	mbédakaké	béda	VERB	_	Mood=Ind|Polite=Infm|Voice=Act	0	root	_	Level=Ngoko
4	antara	antara	NOUN	_	Number=Sing|Polite=Infm	5	nmod:lmod	_	Level=Ngoko
5	né	é	PRON	_	Number=Sing|Person=3|Polite=Infm|PronType=Prs	6	nmod	_	Level=Ngoko
6	penembak	tembak	NOUN	_	Number=Sing	3	obl	_	_
7	runduk	runduk	ADJ	_	_	6	amod	_	_
8	(	(	PUNCT	_	_	9	punct	_	SpaceAfter=No
9	sniper	sniper	X	_	Foreign=Yes	6	appos	_	SpaceAfter=No
10	)	)	PUNCT	_	_	9	punct	_	_
11	lan	lan	CCONJ	_	Polite=Infm	12	cc	_	Level=Ngoko
12	penembak	tembak	NOUN	_	Number=Sing	6	conj	_	_
13	jitu	jitu	X	_	Foreign=Yes	12	dep	_	_
14	(	(	PUNCT	_	_	15	punct	_	SpaceAfter=No
15	marksman	marksman	X	_	Foreign=Yes	12	appos	_	SpaceAfter=No
16	,	,	PUNCT	_	_	15	punct	_	_
17	sharpshooter	sharpshooter	X	_	Foreign=Yes	15	conj	_	SpaceAfter=No
18	,	,	PUNCT	_	_	20	punct	_	_
19	utawa	utawa	CCONJ	_	Polite=Infm	20	cc	_	Level=Ngoko
20	designated	designated	X	_	Foreign=Yes	15	conj	_	_
21	marksman	marksman	X	_	Foreign=Yes	20	flat:foreign	_	SpaceAfter=No
22	)	)	PUNCT	_	_	15	punct	_	SpaceAfter=No
23	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 appos	color:blue
1	Lumantar	lantar	ADP	_	_	2	case	_	_
2	Mantri	Mantri	NOUN	_	Number=Sing	9	obl	_	_
3	Luar	Luar	NOUN	_	Number=Sing	4	nmod:lmod	_	_
4	Negeri	Negeri	NOUN	_	Number=Sing	2	nmod	_	_
5	Alwi	Alwi	PROPN	_	_	2	appos	_	_
6	Shihab	Shihab	PROPN	_	_	5	flat:name	_	SpaceAfter=No
7	,	,	PUNCT	_	_	2	punct	_	_
8	Présidhèn	Présidhèn	PROPN	_	_	9	nsubj	_	_
9	gagal	gagal	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
10	nyegah	cegah	VERB	_	Mood=Ind|Voice=Act	9	xcomp	_	_
11	prekawis	prekawis	NOUN	_	Number=Sing	10	obl	_	_
12	punika	punika	DET	_	Polite=Form|PronType=Dem	11	det	_	Level=Krama
13	dhateng	dhateng	ADP	_	_	14	case	_	_
14	pulisi	pulisi	NOUN	_	Number=Sing	10	obl	_	SpaceAfter=No
15	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 appos	color:blue
1	Maskapé	maskapé	NOUN	_	Number=Sing	3	nsubj	_	_
2	iki	iki	DET	_	Polite=Infm|PronType=Dem	1	det	_	Level=Ngoko
3	wujud	wujud	NOUN	_	Number=Sing	0	root	_	_
4	anggota	anggota	NOUN	_	Number=Sing	3	nmod	_	_
5	European	European	PROPN	_	_	4	nmod	_	_
6	Low	Low	PROPN	_	_	5	flat:foreign	_	_
7	Fares	Fares	PROPN	_	_	5	flat:foreign	_	_
8	Airline	Airline	PROPN	_	_	5	flat:foreign	_	_
9	Association	Association	PROPN	_	_	5	flat:foreign	_	_
10	(	(	PUNCT	_	_	11	punct	_	SpaceAfter=No
11	ELFAA	ELFAA	PROPN	_	_	5	appos	_	SpaceAfter=No
12	)	)	PUNCT	_	_	11	punct	_	SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


