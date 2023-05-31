---
layout: base
title:  'Statistics of nummod in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `nummod`

This relation is universal.
There are 2 language-specific subtypes of `nummod`: <tt><a href="pl_pdb-dep-nummod-flat.html">nummod:flat</a></tt>, <tt><a href="pl_pdb-dep-nummod-gov.html">nummod:gov</a></tt>.

1367 nodes (0%) are attached to their parents as `nummod`.

1362 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34162399414777.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (1184; 87% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (130; 10% instances), <tt><a href="pl_pdb-pos-SYM.html">SYM</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (31; 2% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (11; 1% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (5; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Cztery	cztery	NUM	num:pl:nom:f:congr	Case=Nom|Gender=Fem|Number=Plur|NumForm=Word	2	nummod	2:nummod	_
2	osoby	osoba	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	3	nsubj	3:nsubj	_
3	jadą	jechać	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	na	na	ADP	prep:loc	AdpType=Prep	5	case	5:case	Case=Loc
5	koniach	koń	NOUN	subst:pl:loc:m2	Animacy=Nhum|Case=Loc|Gender=Masc|Number=Plur	3	obl:arg	3:obl:arg	_
6	po	po	ADP	prep:loc	AdpType=Prep	7	case	7:case	Case=Loc
7	plaży	plaża	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	3	obl	3:obl	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nummod	color:blue
1	Ceny	cena	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	0	root	0:root	_
2	za	za	ADP	prep:acc	AdpType=Prep	4	case	4:case	Case=Acc
3	dobry	dobry	ADJ	adj:sg:acc:m3:pos	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	4	amod	4:amod	_
4	olej	olej	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	1	nmod:arg	1:nmod:arg	_
5	ustabilizowane	ustabilizować	ADJ	ppas:pl:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	1	acl	1:acl	_
6	na	na	ADP	prep:loc	AdpType=Prep	8	case	8:case|11:case	Case=Loc
7	poziomie	poziom	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	fixed	6:fixed	_
8	20000	20000	NUM	num:pl:gen:m2:congr	Animacy=Nhum|Case=Gen|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	5	obl:arg	5:obl:arg	SpaceAfter=No
9	-	-	PUNCT	interp	PunctType=Dash	11	punct	11:punct	SpaceAfter=No
10	30000	30000	NUM	num:pl:gen:m2:congr	Animacy=Nhum|Case=Gen|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	11	nummod	11:nummod	_
11	zł	złoty	X	brev:npun	Abbr=Yes|Pun=No	8	conj	5:obl:arg|8:conj	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	Zapomina	zapominać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	jednak	jednak	CCONJ	conj	_	1	cc	1:cc	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	13	punct	13:punct	_
4	że	że	SCONJ	comp	_	13	mark	13:mark	_
5	bezrobocie	bezrobocie	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	13	nsubj	13:nsubj	_
6	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Loc
7	Polsce	Polska	PROPN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	5	nmod	5:nmod	_
8	(	(	PUNCT	interp	PunctSide=Ini|PunctType=Brck	10	punct	10:punct	SpaceAfter=No
9	16,5	16,5	NUM	num:pl:nom:m3:congr	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	10	nummod	10:nummod	SpaceAfter=No
10	%	%	SYM	interp	_	5	nmod	5:nmod	SpaceAfter=No
11	)	)	PUNCT	interp	PunctSide=Fin|PunctType=Brck	10	punct	10:punct	_
12	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	13:cop	_
13	najwyższe	wysoki	ADJ	adj:sg:nom:n:sup	Case=Nom|Degree=Sup|Gender=Neut|Number=Sing	1	ccomp	1:ccomp	_
14	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	15	case	15:case	Case=Loc
15	UE	UE	PROPN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	13	obl	13:obl	SpaceAfter=No
16	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


