---
layout: base
title:  'Statistics of acl in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="fi_ood-dep-acl-relcl.html">acl:relcl</a></tt>.

140 nodes (1%) are attached to their parents as `acl`.

113 instances of `acl` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.40714285714286.

The following 10 pairs of parts of speech are connected with `acl`: <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (118; 84% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (9; 6% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (6; 4% instances), <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 acl	color:blue
1	Laitettu	laittaa	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	0	root	_	_
2	säädettävä	säätää	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Pass	3	acl	_	_
3	trakeaputki	trakea#putki	NOUN	_	Case=Nom|Number=Sing	1	obj	_	Gen=henkitorviputki|SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 acl	color:blue
1	NBA-pelaajien	NBA#pelaaja	NOUN	_	Case=Gen|Derivation=Ja|Number=Plur	2	nsubj	_	_
2	tähdittämä	tähdittää	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Agt|VerbForm=Part|Voice=Act	3	acl	_	_
3	USA	USA	PROPN	_	Case=Nom|Number=Sing	7	nsubj:cop	_	_
4	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
5	lajin	laji	NOUN	_	Case=Gen|Number=Sing	7	nmod:poss	_	_
6	hallitseva	hallitseva	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	7	amod	_	_
7	maailmanmestari	maailman#mestari	NOUN	_	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 acl	color:blue
1	Jalat	jalka	NOUN	_	Case=Nom|Number=Plur	2	nsubj:cop	_	_
2	kipeät	kipeä	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	0	root	_	_
3	ja	ja	CCONJ	_	_	4	cc	_	_
4	vaikea	vaikea	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	2	conj	_	_
5	löytää	löytää	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	4	acl	_	_
6	hyvää	hyvä	ADJ	_	Case=Par|Degree=Pos|Number=Sing	7	amod	_	_
7	asentoa	asento	NOUN	_	Case=Par|Number=Sing	5	obj	_	_
8	niille	se	PRON	_	Case=All|Number=Plur|PronType=Dem	5	obl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


