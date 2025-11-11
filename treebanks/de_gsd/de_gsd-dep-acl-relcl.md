---
layout: base
title:  'Statistics of acl:relcl in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="de_gsd-dep-acl.html">acl</a></tt>.

30 nodes (0%) are attached to their parents as `acl:relcl`.

29 instances of `acl:relcl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.4333333333333.

The following 6 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-VERB.html">VERB</a></tt> (22; 73% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-PRON.html">PRON</a></tt> (3; 10% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-VERB.html">VERB</a></tt> (2; 7% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="de_gsd-pos-VERB.html">VERB</a></tt> (1; 3% instances).


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
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 acl:relcl	color:blue
1	Diese	dieser	DET	PDAT	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
2	Melodie	Melodie	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	entstand	entstehen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	aus	aus	ADP	APPR	_	7	case	_	_
5	einem	ein	DET	ART	Case=Dat|Definite=Ind|Gender=Neut|Number=Sing|NumType=Card|PronType=Art	7	det	_	_
6	weltlichen	weltlich	ADJ	ADJA	Case=Dat|Degree=Pos|Gender=Neut|Number=Sing	7	amod	_	_
7	Lied	Lied	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing	3	obl	_	SpaceAfter=No
8	,	,	PUNCT	$,	_	13	punct	_	_
9	das	der	PRON	PRELS	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem,Rel	13	nsubj	_	_
10	der	der	DET	ART	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	Melodie	Melodie	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	13	obl:arg	_	_
12	Monica	Monica	PROPN	NE	Case=Dat|Gender=Neut|Number=Sing	11	appos	_	NamedEntity=Yes
13	ähnelt	ähneln	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	acl	_	SpaceAfter=No
14	,	,	PUNCT	$,	_	15	punct	_	_
15	die	der	PRON	PRELS	Case=Nom|Number=Plur|PronType=Dem,Rel	11	acl:relcl	_	_
16	in	in	ADP	APPR	_	17	case	_	_
17	Europa	Europa	PROPN	NE	Case=Dat|Gender=Neut|Number=Sing	15	orphan	_	NamedEntity=Yes
18	von	von	ADP	APPR	_	20	case	_	_
19	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	20	det	_	_
20	16	16	NUM	CARD	NumType=Card	15	orphan	_	SpaceAfter=No
21	.	.	PUNCT	$.	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 12 acl:relcl	color:blue
1	Dann	dann	ADV	ADV	_	2	advmod	_	_
2	erobert	erobern	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	sie	sie	PRON	PPER	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
4	Vinje	Vinje	PROPN	NE	Case=Acc|Gender=Masc|Number=Sing	2	obj	_	NamedEntity=Yes|SpaceAfter=No
5	,	,	PUNCT	$,	_	12	punct	_	_
6	der	der	PRON	PRELS	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem,Rel	12	nsubj	_	_
7	erst	erst	ADV	ADV	_	12	advmod	_	_
8	sehr	sehr	ADV	ADV	_	9	advmod	_	_
9	viel	viel	ADV	ADV	Degree=Pos	10	advmod	_	_
10	später	spät	ADJ	ADJD	Degree=Cmp	12	advmod	_	_
11	dahinter	dahinter	ADV	PAV	_	12	advmod	_	_
12	kommt	kommen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	SpaceAfter=No
13	,	,	PUNCT	$,	_	16	punct	_	_
14	was	was	PRON	PWS	Case=Nom|Gender=Neut|Number=Sing|PronType=Int,Rel	16	nsubj	_	_
15	tatsächlich	tatsächlich	ADJ	ADV	Degree=Pos	16	advmod	_	_
16	geschehen	geschehen	VERB	VVPP	VerbForm=Part	12	acl	_	_
17	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	aux	_	SpaceAfter=No
18	,	,	PUNCT	$,	_	24	punct	_	_
19	und	und	CCONJ	KON	_	24	cc	_	_
20	sich	sich	PRON	PRF	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	24	obj	_	_
21	mit	mit	ADP	APPR	_	22	case	_	_
22	Sofia	Sofia	PROPN	NE	Case=Dat|Gender=Neut|Number=Sing	24	obl	_	NamedEntity=Yes
23	wieder	wieder	ADV	ADV	_	24	advmod	_	_
24	versöhnt	versöhnen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	conj	_	SpaceAfter=No
25	.	.	PUNCT	$.	_	2	punct	_	_

~~~


