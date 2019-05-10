---
layout: base
title:  'Statistics of xcomp:subj in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `xcomp:subj`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-xcomp.html">xcomp</a></tt>.
There are also 1 other language-specific subtypes of `xcomp`: <tt><a href="pl_pdb-dep-xcomp-pred.html">xcomp:pred</a></tt>.

8 nodes (0%) are attached to their parents as `xcomp:subj`.

7 instances of `xcomp:subj` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.75.

The following 2 pairs of parts of speech are connected with `xcomp:subj`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (7; 88% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 xcomp:subj	color:blue
1	-	-	PUNCT	interp	PunctType=Hyph	7	punct	7:punct	_
2	Rzadko	rzadko	ADV	adv:pos	Degree=Pos	4	xcomp:subj	4:xcomp:subj	_
3	nie	nie	PART	part	Polarity=Neg	4	advmod:neg	4:advmod:neg	_
4	znaczy	znaczyć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis:obj	7:parataxis:obj	_
5	wcale	wcale	ADV	adv	_	4	advmod:arg	4:advmod:arg	_
6	-	-	PUNCT	interp	PunctType=Hyph	7	punct	7:punct	_
7	ripostowali	ripostować	VERB	praet:pl:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	sędziowie	sędzia	NOUN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	7	nsubj	7:nsubj	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 xcomp:subj	color:blue
1	Zadawać	zadawać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	6	xcomp:subj	6:xcomp:subj	_
2	się	się	PRON	part	PronType=Prs|Reflex=Yes	1	expl:pv	1:expl:pv	_
3	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Ins
4	ludźmi	człowiek	NOUN	subst:pl:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Plur	1	obl:arg	1:obl:arg	_
5	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	6	cop	6:cop	_
6	tyle	tyle	ADV	adv	_	11	parataxis:obj	11:parataxis:obj	_
7	co	co	SCONJ	comp	_	8	mark	8:mark	_
8	grać	grać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	6	obl:cmpr	6:obl:cmpr	_
9	komedię	komedia	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	8	obj	8:obj	SpaceAfter=No
10	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	_
11	powie	powiedzieć	VERB	fin:sg:ter:perf	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	_
12	jakieś	jakiś	DET	adj:pl:acc:m3:pos	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|PronType=Ind	14	det	14:det	_
13	sto	sto	NUM	num:pl:acc:m3:rec	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|NumForm=Word	14	nummod:gov	14:nummod:gov	_
14	lat	rok	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	15	obl:arg	15:obl:arg	_
15	później	późno	ADV	adv:com	Degree=Cmp	11	advmod	11:advmod	_
16	Chamfort	Chamfort	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	11	nsubj	11:nsubj	SpaceAfter=No
17	,	,	PUNCT	interp	PunctType=Comm	24	punct	24:punct	_
18	który	który	DET	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	19	det	19:det	_
19	sam	sam	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	24	nsubj	24:nsubj	_
20	nie	nie	PART	part	Polarity=Neg	21	advmod:neg	21:advmod:neg	_
21	był	być	AUX	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	24	cop	24:cop	_
22	chyba	chyba	PART	part	_	24	advmod	24:advmod	_
23	dobrym	dobry	ADJ	adj:sg:inst:m1:pos	Animacy=Hum|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	24	amod	24:amod	_
24	aktorem	aktor	NOUN	subst:sg:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing	16	acl:relcl	16:acl:relcl	SpaceAfter=No
25	,	,	PUNCT	interp	PunctType=Comm	29	punct	29:punct	_
26	skoro	skoro	SCONJ	comp	_	29	mark	29:mark	_
27	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	29	advmod	29:advmod	Case=Loc
28	końcu	koniec	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	27	fixed	27:fixed	_
29	zdobył	zdobyć	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	24	advcl	24:advcl	_
30	się	się	PRON	part	PronType=Prs|Reflex=Yes	29	expl:pv	29:expl:pv	_
31	na	na	ADP	prep:acc	AdpType=Prep	35	case	35:case	Case=Acc
32	fatalną	fatalny	ADJ	adj:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	35	amod	35:amod	_
33	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	34	case	34:case	Case=Acc
34	konsekwencje	konsekwencja	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	32	obl:arg	32:obl:arg	_
35	szczerość	szczerość	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	29	obl:arg	29:obl:arg	SpaceAfter=No
36	.	.	PUNCT	interp	PunctType=Peri	11	punct	11:punct	_

~~~


