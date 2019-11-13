---
layout: base
title:  'Statistics of flat in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="pl_pdb-dep-flat-foreign.html">flat:foreign</a></tt>.

2726 nodes (1%) are attached to their parents as `flat`.

2726 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14380044020543.

The following 14 pairs of parts of speech are connected with `flat`: <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (1778; 65% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-X.html">X</a></tt> (183; 7% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (162; 6% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (158; 6% instances), <tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pdb-pos-X.html">X</a></tt> (155; 6% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-X.html">X</a></tt> (135; 5% instances), <tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (84; 3% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-X.html">X</a></tt> (41; 2% instances), <tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (18; 1% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (6; 0% instances), <tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Jadwiga	Jadwiga	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	6:nsubj	_
2	Chylińska	Chylińska	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	1	flat	1:flat	_
3	i	i	CCONJ	conj	_	4	cc	4:cc	_
4	Bogdan	Bogdan	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	1	conj	1:conj|6:nsubj	_
5	Chylińscy	Chyliński	PROPN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	4	flat	4:flat	_
6	poszli	pójść	VERB	praet:pl:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	wydoić	wydoić	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	6	xcomp	6:xcomp	_
8	krowy	krowa	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	7	obj	7:obj	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	Do	do	ADP	prep:gen	AdpType=Prep	2	case	2:case	Case=Gen
2	zdarzenia	zdarzenie	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	3	obl:arg	3:obl:arg	_
3	doszło	dojść	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Loc
5	czerwcu	czerwiec	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	obl	3:obl	_
6	br	bieżący rok	X	brev:pun	Abbr=Yes|Pun=Yes	5	flat	5:flat	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_
8	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Loc
9	centrum	centrum	NOUN	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing	3	obl	3:obl	_
10	Tarnobrzega	Tarnobrzeg	PROPN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	9	nmod:arg	9:nmod:arg	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	To	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	5	cop	5:cop	_
2	ten	ten	DET	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	5	det	5:det	_
3	słynny	słynny	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	amod	5:amod	_
4	von	von	X	frag	Foreign=Yes	0	root	0:root	_
5	Finckl	Finckl	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	4	flat	4:flat	SpaceAfter=No
6	?	?	PUNCT	interp	PunctType=Qest	5	punct	5:punct	_

~~~


