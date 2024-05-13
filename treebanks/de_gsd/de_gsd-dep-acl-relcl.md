---
layout: base
title:  'Statistics of acl:relcl in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="de_gsd-dep-acl.html">acl</a></tt>.

27 nodes (0%) are attached to their parents as `acl:relcl`.

26 instances of `acl:relcl` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.2592592592593.

The following 5 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-VERB.html">VERB</a></tt> (22; 81% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-VERB.html">VERB</a></tt> (2; 7% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="de_gsd-pos-VERB.html">VERB</a></tt> (1; 4% instances).


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


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 19 acl:relcl	color:blue
1	Sein	sein	DET	PPOSAT	Case=Nom|Gender=Masc|Gender[psor]=Masc,Neut|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	2	det:poss	_	_
2	Durchbruch	Durchbruch	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
3	gelang	gelingen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	Aguilar	Aguilar	PROPN	NE	Case=Dat|Gender=Neut|Number=Sing	3	obl:arg	_	NamedEntity=Yes
5	in	in	ADP	APPR	_	7	case	_	_
6	der	der	DET	ART	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	Saison	Saison	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	3	obl	_	_
8	2009	2009	NUM	CARD	NumType=Card	7	compound	_	_
9	/	/	PUNCT	$(	_	10	punct	_	_
10	10	10	NUM	CARD	NumType=Card	8	compound	_	SpaceAfter=No
11	,	,	PUNCT	$,	_	19	punct	_	_
12	in	in	ADP	APPR	_	13	case	_	_
13	der	der	PRON	PRELS	Case=Dat|Gender=Fem|Number=Sing|PronType=Dem,Rel	19	obl	_	_
14	er	er	PRON	PPER	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	19	nsubj	_	_
15	bei	bei	ADP	APPR	_	16	case	_	_
16	Granada	Granada	PROPN	NE	Case=Dat|Gender=Neut|Number=Sing	19	obl	_	NamedEntity=Yes
17	zu	zu	ADP	APPR	_	19	case	_	_
18	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	19	det	_	_
19	Stammspieler	Stammspieler	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	7	acl:relcl	_	_
20	auf	auf	ADP	APPR	_	22	case	_	_
21	der	der	DET	ART	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	_
22	Position	Position	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	19	nmod	_	_
23	des	der	DET	ART	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	det	_	_
24	Power	Power	NOUN	NN	Case=Gen|Foreign=Yes|Gender=Masc|Number=Sing	25	compound	_	NamedEntity=Yes
25	Forwards	Forward	NOUN	NN	Case=Gen|Foreign=Yes|Gender=Masc|Number=Sing	22	nmod	_	NamedEntity=Yes|SpaceAfter=No
26	.	.	PUNCT	$.	_	3	punct	_	_

~~~


