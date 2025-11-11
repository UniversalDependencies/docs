---
layout: base
title:  'Statistics of acl:relcl in UD_Swedish-Old'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Old: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="sv_old-dep-acl.html">acl</a></tt>.

5 nodes (1%) are attached to their parents as `acl:relcl`.

5 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.2.

The following 3 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="sv_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_old-pos-VERB.html">VERB</a></tt> (3; 60% instances), <tt><a href="sv_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_old-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="sv_old-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_old-pos-ADJ.html">ADJ</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl:relcl	color:blue
1	Æn	än	CCONJ	C-	_	11	cc	_	_
2	then	þän	DET	Pd	Case=Nom|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
3	samma	samber	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	_
4	ember	ember	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	11	nsubj	_	_
5	som	sum	PRON	G-	PronType=Rel	6	nsubj	_	_
6	gar	ganga	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	_	_
7	wr	ur	ADP	R-	_	10	case	_	_
8	herra	härra	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	9	nmod	_	_
9	abota	abbote	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	10	nmod:poss	_	_
10	halsse	hals	NOUN	Nb	Case=Dat|Gender=Masc|Number=Sing	6	obl	_	_
11	swemar	svema	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
12	om	um	ADP	R-	_	13	case	_	_
13	ænne	änne	NOUN	Nb	Case=Acc|Gender=Neut|Number=Sing	11	obl	_	_
14	hans	han	PRON	Pp	Case=Gen|Poss=Yes|PronType=Prs	13	nmod:poss	_	_
15	alt	alder	PRON	Py	Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	13	det	_	_
16	och	ok	CCONJ	C-	_	17	cc	_	_
17	hoffwdh	hovuþ	NOUN	Nb	Case=Acc|Gender=Neut|Number=Sing	13	conj	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 acl:relcl	color:blue
1	Tha	þa	ADV	Df	_	2	advmod	_	_
2	siger	sighia	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	herra	härra	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	4	nmod	_	_
4	abote	abbote	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
5	til	til	ADP	R-	_	7	case	_	_
6	thera	þän	DET	Pd	Case=Gen|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	nistu	nista	NOUN	Nb	Case=Gen|Gender=Fem|Number=Sing	2	obl	_	_
8	a	a	ADP	R-	_	10	case	_	_
9	vinstræ	vinstre	ADJ	A-	Case=Dat|Degree=Cmp|Gender=Fem|Number=Sing	10	amod	_	_
10	hand	hand	NOUN	Nb	Case=Dat|Gender=Fem|Number=Sing	7	acl:relcl	_	_
11	ær	vara	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
12	thy	þy	PRON	G-	PronType=Prs	2	obl	_	_
13	at	at	SCONJ	G-	_	14	mark	_	_
14	ther	þär	ADV	Df	_	12	acl	_	_
15	ær	vara	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	cop	_	_
16	onth	onder	ADJ	A-	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	17	amod	_	_
17	øll	öl	NOUN	Nb	Case=Nom|Gender=Neut|Number=Sing	14	nsubj	_	_
18	j	i	ADP	R-	_	14	case	_	_
19	Hæffuin	häfia	VERB	V-	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	_
20	wt	ut	ADV	Df	Degree=Pos	19	advmod	_	_
21	tha	þän	DET	Pd	Case=Acc|Gender=Fem|Number=Sing|PronType=Art	23	det	_	_
22	bansatta	bansätia	ADJ	V-	Case=Acc|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	23	amod	_	_
23	nistuna	nista	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	19	obj	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl:relcl	color:blue
1	Æn	än	CCONJ	C-	_	4	cc	_	_
2	herra	härra	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	3	nmod	_	_
3	abote	abbote	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
4	æter	äta	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	ekke	äkke	ADV	Df	_	4	advmod	_	_
6	thet	þän	PRON	Pd	Case=Acc|Gender=Neut|Number=Sing|PronType=Prs	4	obj	_	_
7	som	sum	PRON	G-	PronType=Rel	8	nsubj	_	_
8	fyreføt	fyrafötter	ADJ	A-	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	6	acl:relcl	_	_
9	ær	vara	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_

~~~


