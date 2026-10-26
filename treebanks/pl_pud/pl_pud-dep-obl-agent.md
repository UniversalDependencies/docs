---
layout: base
title:  'Statistics of obl:agent in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="pl_pud-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="pl_pud-dep-obl-cmp.html">obl:cmp</a></tt>, <tt><a href="pl_pud-dep-obl-orphan.html">obl:orphan</a></tt>.

41 nodes (0%) are attached to their parents as `obl:agent`.

40 instances of `obl:agent` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.80487804878049.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (26; 63% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (13; 32% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (2; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:agent	color:blue
1	Wyprawa	wyprawa	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	3	nsubj:pass	3:nsubj:pass	_
2	została	zostać	AUX	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	aux:pass	3:aux:pass	_
3	poprowadzona	poprowadzić	ADJ	ppas:sg:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
4	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Acc
5	generała	generał	NOUN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	3	obl:agent	3:obl:agent	_
6	Josepha	Joseph	PROPN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	5	appos	5:appos	_
7	Burgoyne’a	Burgoyne	PROPN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	6	flat	6:flat	SpaceAfter=No
8	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
9	który	który	DET	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	10	nsubj	10:nsubj	_
10	zamierzał	zamierzać	VERB	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	acl:relcl	5:acl:relcl	_
11	dotrzeć	dotrzeć	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	10	xcomp	10:xcomp	_
12	do	do	ADP	prep:gen	AdpType=Prep	13	case	13:case	Case=Gen
13	Albany	Albana	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	11	obl	11:obl	SpaceAfter=No
14	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 obl:agent	color:blue
1	Dündar	Dündar	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	ostrzegł	ostrzec	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	Europę	Europa	PROPN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	2	obj	2:obj	_
4	przed	przed	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Ins
5	zbytnią	zbytni	ADJ	adj:sg:inst:f:pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	6	amod	6:amod	_
6	wyrozumiałością	wyrozumiałość	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	2	obl	2:obl	_
7	wobec	wobec	ADP	prep:gen	AdpType=Prep	8	case	8:case	Case=Gen
8	kursu	kurs	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	nmod	6:nmod	_
9	obranego	obrać	ADJ	ppas:sg:gen:m3:perf:aff	Animacy=Inan|Aspect=Perf|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	8	amod	8:amod	_
10	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	11	case	11:case	Case=Acc
11	Erdogana	Erdogan	PROPN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	9	obl:agent	9:obl:agent	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 obl:agent	color:blue
1	Seagal	Seagal	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	trafił	trafić	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	do	do	ADP	prep:gen	AdpType=Prep	4	case	4:case	Case=Gen
4	nagłówków	nagłówek	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	2	obl:arg	2:obl:arg	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
6	kiedy	kiedy	ADV	adv	PronType=Int	7	advmod	7:advmod	_
7	określił	określić	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	advcl	2:advcl	_
8	działania	działanie	NOUN	subst:pl:acc:n:ncol	Case=Acc|Gender=Neut|Number=Plur	7	obj	7:obj	_
9	Rosji	Rosja	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	8	nmod	8:nmod	_
10	na	na	ADP	prep:loc	AdpType=Prep	18	case	18:case	Case=Loc
11	anektowanym	anektować	ADJ	ppas:sg:loc:m3:imperf:aff	Animacy=Inan|Aspect=Imp|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	18	amod	18:amod	_
12	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	13	case	13:case	Case=Acc
13	nią	on	PRON	ppron3:sg:acc:f:ter:akc:praep	Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs|Variant=Long	11	obl:agent	11:obl:agent	_
14	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	16	case	16:case	Case=Loc
15	2014	2014	ADJ	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	16	amod:flat	16:amod:flat	_
16	r	rok	NOUN	brev:pun	Abbr=Yes	11	obl	11:obl	SpaceAfter=No
17	.	.	PUNCT	interp	PunctType=Peri	16	punct	16:punct	_
18	Krymie	Krym	PROPN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	8	nmod:arg	8:nmod:arg	_
19	jako	jako	SCONJ	comp	ConjType=Pred	22	mark	22:mark	_
20	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	22	punct	22:punct	SpaceAfter=No
21	bardzo	bardzo	ADV	adv:pos	Degree=Pos	22	advmod	22:advmod	_
22	rozsądne	rozsądny	ADJ	adj:pl:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	7	obl	7:obl	SpaceAfter=No
23	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	22	punct	22:punct	SpaceAfter=No
24	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


