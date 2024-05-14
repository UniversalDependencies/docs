---
layout: base
title:  'Statistics of advmod:neg in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-advmod.html">advmod</a></tt>.
There are also 2 other language-specific subtypes of `advmod`: <tt><a href="pl_pdb-dep-advmod-arg.html">advmod:arg</a></tt>, <tt><a href="pl_pdb-dep-advmod-emph.html">advmod:emph</a></tt>.

4021 nodes (1%) are attached to their parents as `advmod:neg`.

4017 instances of `advmod:neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.03158418303905.

The following 11 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (3173; 79% instances), <tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (467; 12% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (123; 3% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (78; 2% instances), <tt><a href="pl_pdb-pos-PART.html">PART</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (72; 2% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (55; 1% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (18; 0% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (18; 0% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (12; 0% instances), <tt><a href="pl_pdb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (3; 0% instances), <tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod:neg	color:blue
1	Nie	nie	PART	part	Polarity=Neg	2	advmod:neg	2:advmod:neg	_
2	wytropiła	wytropić	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	nigdzie	nigdzie	ADV	adv	PronType=Neg	2	advmod	2:advmod	_
4	wroga	wróg	NOUN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	2	obj	2:obj	_
5	na	na	ADP	prep:acc	AdpType=Prep	6	case	6:case	Case=Acc
6	oko	oko	NOUN	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing	2	obl	2:obl	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:neg	color:blue
1	-	-	PUNCT	interp	PunctType=Dash	4	punct	4:punct	_
2	Nie	nie	PART	part	Polarity=Neg	3	advmod:neg	3:advmod:neg	_
3	będę	być	AUX	bedzie:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin	4	aux	4:aux	_
4	czekał	czekać	VERB	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	długo	długo	ADV	adv:pos	Degree=Pos	4	advmod	4:advmod	SpaceAfter=No
6	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod:neg	color:blue
1	Ani	ani	PART	part	_	2	advmod:neg	2:advmod:neg	_
2	śladu	ślad	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
4	ale	ale	CCONJ	conj	_	8	cc	8:cc	_
5	bez	bez	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Gen
6	obaw	obawa	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	8	parataxis:insert	8:parataxis:insert	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
8	mamy	mieć	VERB	fin:pl:pri:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	0:root|2:conj	_
9	plany	plan	NOUN	subst:pl:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	8	iobj	8:iobj	_
10	awaryjne	awaryjny	ADJ	adj:pl:acc:m3:pos	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	9	amod	9:amod	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


