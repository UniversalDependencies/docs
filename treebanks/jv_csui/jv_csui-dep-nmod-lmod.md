---
layout: base
title:  'Statistics of nmod:lmod in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Relations: `nmod:lmod`

This relation is a language-specific subtype of <tt><a href="jv_csui-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="jv_csui-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="jv_csui-dep-nmod-tmod.html">nmod:tmod</a></tt>.

11 nodes (1%) are attached to their parents as `nmod:lmod`.

11 instances of `nmod:lmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `nmod:lmod`: <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (6; 55% instances), <tt><a href="jv_csui-pos-PRON.html">PRON</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (3; 27% instances), <tt><a href="jv_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="jv_csui-pos-X.html">X</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:lmod	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:lmod	color:blue
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
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 18 nmod:lmod	color:blue
1	Gunggung	gunggung	NOUN	_	Number=Sing	4	nsubj	_	_
2	subunit	subunit	X	_	Foreign=Yes	1	nmod	_	_
3	isa	bisa	AUX	_	Abbr=Yes|Polite=Infm	4	aux	_	Level=Ngoko
4	macem-macem	macem	ADJ	_	_	0	root	_	_
5	malah	malah	ADV	_	_	7	advmod	_	_
6	ning	ning	ADP	_	_	7	case	_	_
7	sèl	sèl	NOUN	_	Number=Sing	4	obl	_	_
8	kang	kang	PRON	_	Polite=Infm|PronType=Rel	9	nsubj	_	Level=Ngoko
9	padha	padha	ADJ	_	Polite=Infm	7	acl:relcl	_	Level=Ngoko
10	conto	contoh	NOUN	_	Number=Sing	4	nmod	_	_
11	né	é	DET	_	Definite=Def|Polite=Infm|PronType=Art	10	det	_	_
12	ning	ning	ADP	_	_	13	case	_	_
13	Salmonella	Salmonella	PROPN	_	_	10	nmod	_	_
14	kang	kang	PRON	_	Polite=Infm|PronType=Rel	19	obl	_	Level=Ngoko
15	gunggung	gunggung	NOUN	_	Number=Sing	19	nsubj	_	_
16	subunit	subunit	X	_	Foreign=Yes	15	nmod	_	_
17	é	é	PRON	_	Number=Sing|Person=3|Polite=Infm|PronType=Prs	16	nmod:poss	_	_
18	antara	antara	NOUN	_	Number=Sing|Polite=Infm	19	nmod:lmod	_	Level=Ngoko
19	3	3	NUM	_	NumType=Card	13	acl:relcl	_	SpaceAfter=No
20	,	,	PUNCT	_	_	21	punct	_	_
21	4	4	NUM	_	NumType=Card	19	conj	_	SpaceAfter=No
22	,	,	PUNCT	_	_	24	punct	_	_
23	utawa	utawa	CCONJ	_	Polite=Infm	24	cc	_	Level=Ngoko
24	5	5	NUM	_	NumType=Card	19	conj	_	SpaceAfter=No
25	.	.	PUNCT	_	_	4	punct	_	_

~~~


