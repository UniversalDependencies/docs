---
layout: base
title:  'Statistics of cc in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="pl_pdb-dep-cc-preconj.html">cc:preconj</a></tt>.

10423 nodes (3%) are attached to their parents as `cc`.

10285 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.18478365153986.

The following 14 pairs of parts of speech are connected with `cc`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (4331; 42% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (4131; 40% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (1090; 10% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (410; 4% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (161; 2% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (123; 1% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (63; 1% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (51; 0% instances), <tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (21; 0% instances), <tt><a href="pl_pdb-pos-PART.html">PART</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (19; 0% instances), <tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (15; 0% instances), <tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="pl_pdb-pos-SYM.html">SYM</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 cc	color:blue
1	Jeden	jeden	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	2:amod	_
2	bokser	bokser	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	3:nsubj	_
3	stoi	stać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	na	na	ADP	prep:loc	AdpType=Prep	5	case	5:case	Case=Loc
5	ringu	ring	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	obl	3:obl	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
7	a	a	CCONJ	conj	_	10	cc	10:cc	_
8	drugi	drugi	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	9	amod	9:amod	_
9	bokser	bokser	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	10	nsubj	10:nsubj	_
10	skacze	skakać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	0:root|3:conj	_
11	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	13	case	13:case	Case=Acc
12	jego	on	PRON	ppron3:sg:gen:m1:ter:akc:npraep	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	13	nmod:arg	13:nmod:arg	_
13	stronę	strona	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	10	obl	10:obl	SpaceAfter=No
14	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc	color:blue
1	Cztery	cztery	NUM	num:pl:nom:f:congr	Case=Nom|Gender=Fem|Number=Plur|NumForm=Word	2	nummod	2:nummod	_
2	kobiety	kobieta	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	5	nsubj	5:nsubj	_
3	i	i	CCONJ	conj	_	4	cc	4:cc	_
4	mężczyzna	mężczyzna	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	2	conj	2:conj|5:nsubj	_
5	siedzą	siedzieć	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	na	na	ADP	prep:loc	AdpType=Prep	7	case	7:case	Case=Loc
7	schodach	schody	NOUN	subst:pl:loc:n:pt	Case=Loc|Gender=Neut|Number=Ptan	5	obl	5:obl	_
8	wśród	wśród	ADP	prep:gen	AdpType=Prep	9	case	9:case	Case=Gen
9	zieleni	zieleń	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	5	obl	5:obl	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	Mokry	mokry	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	4	amod	4:amod	_
2	i	i	CCONJ	conj	_	3	cc	3:cc	_
3	ubrudzony	ubrudzić	ADJ	ppas:sg:nom:m1:perf:aff	Animacy=Hum|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	1	conj	1:conj|4:amod	_
4	chłopiec	chłopiec	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	5:nsubj	_
5	skacze	skakać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	po	po	ADP	prep:loc	AdpType=Prep	7	case	7:case	Case=Loc
7	kałuży	kałuża	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	5	obl	5:obl	_
8	na	na	ADP	prep:loc	AdpType=Prep	9	case	9:case	Case=Loc
9	trawie	trawa	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	7	nmod	7:nmod	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


