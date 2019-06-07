---
layout: base
title:  'Statistics of punct in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `punct`

This relation is universal.

58157 nodes (17%) are attached to their parents as `punct`.

31494 instances of `punct` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.92831473425383.

The following 17 pairs of parts of speech are connected with `punct`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (36688; 63% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (9402; 16% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (5233; 9% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (2327; 4% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (1725; 3% instances), <tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (880; 2% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (795; 1% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (338; 1% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (229; 0% instances), <tt><a href="pl_pdb-pos-PART.html">PART</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (209; 0% instances), <tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (137; 0% instances), <tt><a href="pl_pdb-pos-INTJ.html">INTJ</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (74; 0% instances), <tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (70; 0% instances), <tt><a href="pl_pdb-pos-SYM.html">SYM</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (37; 0% instances), <tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (10; 0% instances), <tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="pl_pdb-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 punct	color:blue
1	Dziecko	dziecko	NOUN	subst:sg:nom:n:col	Case=Nom|Gender=Neut|Number=Sing|NumType=Sets	5	nsubj	5:nsubj	_
2	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Loc
3	czerwonej	czerwony	ADJ	adj:sg:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	4	amod	4:amod	_
4	kurtce	kurtka	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	1	nmod	1:nmod	_
5	trzyma	trzymać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Loc
7	rękach	ręka	NOUN	subst:pl:loc:f	Case=Loc|Gender=Fem|Number=Plur	5	obl	5:obl	_
8	grudę	gruda	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	5	obj	5:obj	_
9	śniegu	śnieg	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	8	nmod:arg	8:nmod:arg	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 punct	color:blue
1	To	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	4	cop	4:cop	_
2	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
3	jedno	jeden	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	4	amod	4:amod	_
4	pytanie	pytanie	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
5	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 punct	color:blue
1	Mały	mały	ADJ	adj:sg:nom:m2:pos	Animacy=Nhum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	4	amod	4:amod	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	3	punct	3:punct	_
3	jasny	jasny	ADJ	adj:sg:nom:m2:pos	Animacy=Nhum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	1	conj	1:conj|4:amod	_
4	ptak	ptak	NOUN	subst:sg:nom:m2	Animacy=Nhum|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	5:nsubj	_
5	pochyla	pochylać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	głowę	głowa	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	5	obj	5:obj	_
7	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	8	case	8:case	Case=Acc
8	stronę	strona	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	5	obl	5:obl	_
9	leżącego	leżeć	ADJ	pact:sg:gen:m3:imperf:aff	Animacy=Inan|Aspect=Imp|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Act	11	amod	11:amod	_
10	obok	obok	ADV	adv	_	9	advmod	9:advmod	_
11	okruszka	okruszek	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	8	nmod:arg	8:nmod:arg	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


