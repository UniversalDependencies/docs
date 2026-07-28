---
layout: base
title:  'Statistics of acl:relcl in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="de_gsd-dep-acl.html">acl</a></tt>.

2044 nodes (1%) are attached to their parents as `acl:relcl`.

2034 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.1086105675147.

The following 24 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-VERB.html">VERB</a></tt> (1446; 71% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-VERB.html">VERB</a></tt> (259; 13% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt> (99; 5% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-VERB.html">VERB</a></tt> (78; 4% instances), <tt><a href="de_gsd-pos-DET.html">DET</a></tt>-<tt><a href="de_gsd-pos-VERB.html">VERB</a></tt> (29; 1% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="de_gsd-pos-VERB.html">VERB</a></tt> (27; 1% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (25; 1% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (22; 1% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-VERB.html">VERB</a></tt> (15; 1% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt> (10; 0% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="de_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="de_gsd-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="de_gsd-pos-DET.html">DET</a></tt>-<tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="de_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="de_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 acl:relcl	color:blue
1	tolle	toll	ADJ	ADJA	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	3	amod	_	_
2	engangierte	engangiert	ADJ	ADJA	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	1	conj	_	_
3	mitarbeiter	Mitarbeiter	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
4	die	der	PRON	PRELS	Case=Nom|Number=Plur|PronType=Dem,Rel	8	nsubj	_	_
5	auch	auch	ADV	ADV	_	7	advmod	_	_
6	sehr	sehr	ADV	ADV	_	7	advmod	_	_
7	motiviert	motiviert	ADJ	ADJD	Degree=Pos	8	xcomp	_	_
8	wirkten	wirken	VERB	VVFIN	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	3	acl:relcl	_	SpaceAfter=No
9	.	.	PUNCT	$.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 acl:relcl	color:blue
1	Thamar	Thamar	PROPN	NE	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	NamedEntity=Yes|SpaceAfter=No
2	,	,	PUNCT	$,	_	6	punct	_	_
3	die	der	PRON	PRELS	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem,Rel	6	dep	_	_
4	sie	sie	PRON	PPER	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	dep	_	_
5	nicht	nicht	PART	PTKNEG	Polarity=Neg	6	advmod	_	_
6	verlassen	verlassen	VERB	VVINF	VerbForm=Inf	1	acl:relcl	_	_
7	will	wollen	AUX	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	SpaceAfter=No
8	,	,	PUNCT	$,	_	6	punct	_	_
9	bricht	brechen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	zusammen	zusammen	ADV	PTKVZ	_	9	mark	_	SpaceAfter=No
11	.	.	PUNCT	$.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 acl:relcl	color:blue
1	Jahrhundert	Jahrhundert	NOUN	ADJD	_	4	dep	_	_
2	wurden	werden	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	4	aux:pass	_	_
3	Minen	Mine	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur	4	nsubj:pass	_	_
4	angelegt	anlegen	VERB	VVPP	VerbForm=Part	0	root	_	SpaceAfter=No
5	,	,	PUNCT	$,	_	9	punct	_	_
6	von	von	ADP	APPR	_	7	case	_	_
7	denen	der	PRON	PRELS	Case=Dat|Number=Plur|PronType=Dem,Rel	9	nmod	_	_
8	die	der	DET	ART	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	letzte	letzt	ADJ	ADJA	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	3	acl:relcl	_	_
10	Madziwa	Madziwa	PROPN	NE	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	NamedEntity=Yes
11	Mine	Mine	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	10	flat	_	_
12	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	SpaceAfter=No
13	.	.	PUNCT	$.	_	4	punct	_	_

~~~


