---
layout: base
title:  'Statistics of ccomp in UD_Swedish-Old'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Old: Relations: `ccomp`

This relation is universal.

9 nodes (2%) are attached to their parents as `ccomp`.

9 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.11111111111111.

The following 3 pairs of parts of speech are connected with `ccomp`: <tt><a href="sv_old-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_old-pos-VERB.html">VERB</a></tt> (7; 78% instances), <tt><a href="sv_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_old-pos-VERB.html">VERB</a></tt> (1; 11% instances), <tt><a href="sv_old-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_old-pos-ADJ.html">ADJ</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 ccomp	color:blue
1	Æn	än	CCONJ	C-	_	4	cc	_	_
2	ther	þär	ADV	Df	_	4	advmod	_	_
3	til	til	ADP	V-	_	4	compound:prt	_	_
4	komber	komma	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	om	um	ADV	Df	ExtPos=ADV	4	advmod	_	_
6	sidher	sidh	ADV	Df	_	5	fixed	_	_
7	at	at	SCONJ	G-	_	9	mark	_	_
8	bordh	borþ	NOUN	Nb	Case=Nom|Gender=Neut|Number=Sing	9	nsubj:pass	_	_
9	lætz	lata	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	ccomp	_	_
10	fram	fram	ADV	Df	Degree=Pos	9	advmod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 ccomp	color:blue
1	for	forbiuþa	ADJ	V-	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Typo=Yes|VerbForm=Part|Voice=Act	0	root	_	_
2	budhit	_	X	V-	_	1	goeswith	_	_
3	ær	vara	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
4	honum	han	PRON	Pp	Case=Dat|PronType=Prs	1	obl	_	_
5	mere	mere	ADJ	A-	Case=Acc|Degree=Cmp|Number=Sing	7	obj	_	_
6	at	at	SCONJ	G-	_	7	mark	_	_
7	ætæ	äta	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	1	ccomp	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 19 ccomp	color:blue
1	Siden	siþan	ADV	Df	_	2	advmod	_	_
2	ganger	ganga	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	herra	härra	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	4	nmod	_	_
4	abote	abbote	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
5	fran	fran	ADP	R-	_	6	case	_	_
6	borde	borþ	NOUN	Nb	Case=Dat|Gender=Neut|Number=Sing	2	obl	_	_
7	och	ok	CCONJ	C-	_	8	cc	_	_
8	siger	sighia	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	_
9	Miserere	Miserere	VERB	F-	Foreign=Yes|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	8	ccomp	_	Lang=la
10	mei	mei	PRON	F-	Case=Gen|Foreign=Yes|Number=Sing|Person=1|PronType=Prs	9	obl	_	Lang=la
11	deus	deus	NOUN	F-	Case=Voc|Foreign=Yes|Gender=Masc|Number=Sing	9	vocative	_	Lang=la
12	och	ok	CCONJ	C-	_	13	cc	_	_
13	thakker	þakka	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	_
14	gudhi	guþ	NOUN	Nb	Case=Dat|Gender=Masc|Number=Sing	13	obl	_	_
15	at	at	SCONJ	G-	_	19	mark	_	_
16	han	han	PRON	Pp	Case=Nom|PronType=Prs	19	nsubj	_	_
17	ær	vara	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	19	cop	_	_
18	wæl	väl	ADV	Df	Degree=Pos	19	advmod	_	_
19	mætter	mätter	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	13	ccomp	_	_
20	och	ok	CCONJ	C-	_	22	cc	_	_
21	wæl	väl	ADV	Df	Degree=Pos	22	advmod	_	_
22	drukken	drikka	ADJ	V-	Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	19	conj	_	_

~~~


