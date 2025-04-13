---
layout: base
title:  'Statistics of dep:comp in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `dep:comp`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-dep.html">dep</a></tt>.

40 nodes (0%) are attached to their parents as `dep:comp`.

27 instances of `dep:comp` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.125.

The following 14 pairs of parts of speech are connected with `dep:comp`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (16; 40% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (4; 10% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (3; 8% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (3; 8% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (2; 5% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (2; 5% instances), <tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (2; 5% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (2; 5% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 dep:comp	color:blue
1	et	et	CCONJ	_	_	5	cc	_	_
2	nous	nous	PRON	_	Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
3	nous	nous	PRON	_	Number=Plur|Person=1|PronType=Prs	5	dep:comp	_	_
4	sommes	être	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	aux:tense	_	_
5	installés	installer	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
6	dans	dans	ADP	_	_	9	case	_	_
7	ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	9	det	_	_
8	petit	petit	ADJ	_	Gender=Masc|Number=Sing	9	amod	_	_
9	appartement	appartement	NOUN	_	Gender=Masc|Number=Sing	5	obl:arg	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 dep:comp	color:blue
1	donc	donc	ADV	_	_	3	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	qu'	que	PRON	_	PronType=Int	0	root	_	SpaceAfter=No
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	SpaceAfter=No
5	-ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	expl:subj	_	_
6	que	que	SCONJ	_	_	9	dep:comp	_	_
7	je	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
8	peux	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	advcl:cleft	_	_
9	apprendre	apprendre	VERB	_	VerbForm=Inf	8	xcomp	_	Subject=SubjRaising
10	?	?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 dep:comp	color:blue
1	là	là	ADV	_	_	7	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	par	par	ADP	_	_	4	dep:comp	_	_
4	contre	contre	ADP	_	_	7	dep	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	7	nsubj	_	_
7	doit	devoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	être	être	AUX	_	VerbForm=Inf	10	cop	_	Subject=SubjRaising
9	plus	plus	ADV	_	_	10	advmod	_	Overlap=Rhap_D0009-21bis
10	onéreux	onéreux	ADJ	_	Gender=Masc	7	xcomp	_	Overlap=Rhap_D0009-21bis|SpaceAfter=No
11	.	.	PUNCT	_	_	7	punct	_	Overlap=Rhap_D0009-21bis

~~~


