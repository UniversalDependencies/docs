---
layout: base
title:  'Statistics of advmod:cmp in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `advmod:cmp`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="pl_pdb-dep-advmod-arg.html">advmod:arg</a></tt>, <tt><a href="pl_pdb-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="pl_pdb-dep-advmod-neg.html">advmod:neg</a></tt>.

93 nodes (0%) are attached to their parents as `advmod:cmp`.

52 instances of `advmod:cmp` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.47311827956989.

The following 5 pairs of parts of speech are connected with `advmod:cmp`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (75; 81% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (13; 14% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 advmod:cmp	color:blue
1	Czy	czy	PART	part	PartType=Int	5	advmod	5:advmod	_
2	tak	tak	ADV	adv:pos	Degree=Pos|PronType=Dem	5	advmod:cmp	5:advmod:cmp	_
3	jak	jak	SCONJ	comp	_	4	mark	4:mark	_
4	Hoffman	Hoffman	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	2	ccomp	2:ccomp	_
5	zrobił	zrobić	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	pan	pan	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	5:nsubj	_
7	film	film	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obj	5:obj	_
8	poprawny	poprawny	ADJ	adj:sg:acc:m3:pos	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	7	amod	7:amod	_
9	politycznie	politycznie	ADV	adv:pos	Degree=Pos	8	advmod	8:advmod	SpaceAfter=No
10	?	?	PUNCT	interp	PunctType=Qest	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 advmod:cmp	color:blue
1	Tak	tak	ADV	adv:pos	Degree=Pos|PronType=Dem	9	advmod:cmp	9:advmod:cmp	_
2	jak	jak	SCONJ	comp	_	3	mark	3:mark	_
3	mówił	mówić	VERB	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	1	ccomp	1:ccomp	_
4	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Number=Sing|Person=1|Variant=Long	3	aux:clitic	3:aux:clitic	_
5	,	,	PUNCT	interp	PunctType=Comm	1	punct	1:punct	_
6	był	być	AUX	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	9	aux:pass	9:aux:pass	_
7	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Number=Sing|Person=1|Variant=Long	9	aux:clitic	9:aux:clitic	_
8	bardzo	bardzo	ADV	adv:pos	Degree=Pos	9	advmod	9:advmod	_
9	wzruszony	wzruszyć	ADJ	ppas:sg:nom:m1:perf:aff	Animacy=Hum|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
10	tym	ten	DET	adj:sg:inst:n:pos	Case=Ins|Gender=Neut|Number=Sing|PronType=Dem	11	det	11:det	_
11	miejscem	miejsce	NOUN	subst:sg:inst:n:ncol	Case=Ins|Gender=Neut|Number=Sing	9	iobj	9:iobj	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 16 advmod:cmp	color:blue
1	Wykonujemy	wykonywać	VERB	fin:pl:pri:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	przede	przed	ADP	prep:inst:wok	AdpType=Prep|ExtPos=PART|Variant=Long	4	advmod:emph	4:advmod:emph	Case=Ins
3	wszystkim	wszystko	PRON	subst:sg:inst:n:ncol	Case=Ins|Gender=Neut|Number=Sing|PronType=Tot	2	fixed	2:fixed	_
4	nasze	nasz	DET	adj:pl:acc:m3:pos	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	5	det:poss	5:det:poss	_
5	utwory	utwór	NOUN	subst:pl:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	1	obj	1:obj	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
7	ale	ale	CCONJ	conj	_	8	cc	8:cc	_
8	współpracują	współpracować	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	0:root|1:conj	_
9	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Ins
10	nami	my	PRON	ppron12:pl:inst:m1:pri	Animacy=Hum|Case=Ins|Gender=Masc|Number=Plur|Person=1|PronType=Prs	8	obl:arg	8:obl:arg	_
11	także	także	PART	part	_	13	advmod:emph	13:advmod:emph	_
12	inni	inny	ADJ	adj:pl:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	13	amod	13:amod	_
13	koledzy	kolega	NOUN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	8	nsubj	8:nsubj	SpaceAfter=No
14	,	,	PUNCT	interp	PunctType=Comm	21	punct	21:punct	_
15	którzy	który	DET	adj:pl:nom:m1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	21	nsubj	21:nsubj|24:nsubj	_
16	tak	tak	ADV	adv:pos	Degree=Pos|PronType=Dem	21	advmod:cmp	21:advmod:cmp|24:advmod:cmp	_
17	jak	jak	SCONJ	comp	_	18	mark	18:mark	_
18	my	my	PRON	ppron12:pl:nom:m1:pri	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	16	ccomp	16:ccomp	_
19	są	być	AUX	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	21	cop	21:cop|24:cop	_
20	i	i	CCONJ	conj	_	21	cc:preconj	21:cc:preconj	_
21	kompozytorami	kompozytor	NOUN	subst:pl:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Plur	13	acl:relcl	13:acl:relcl	SpaceAfter=No
22	,	,	PUNCT	interp	PunctType=Comm	24	punct	24:punct	_
23	i	i	CCONJ	conj	_	24	cc	24:cc	_
24	wykonawcami	wykonawca	NOUN	subst:pl:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Plur	21	conj	13:acl:relcl|21:conj	SpaceAfter=No
25	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


