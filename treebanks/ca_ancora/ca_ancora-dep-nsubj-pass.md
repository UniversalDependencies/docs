---
layout: base
title:  'Statistics of nsubj:pass in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ca_ancora-dep-nsubj.html">nsubj</a></tt>.

25 nodes (0%) are attached to their parents as `nsubj:pass`.

15 instances of `nsubj:pass` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.04.

The following 3 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt> (19; 76% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt> (4; 16% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PROPN.html">PROPN</a></tt> (2; 8% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	La	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	2:det	_
2	dona	dona	NOUN	ncfs000	Gender=Fem|Number=Sing	6	nsubj:pass	6:nsubj:pass	ClusterId=CESS-CAT-AAP-20011228-45582-c3|ClusterType=Spec|MentionSpan=1-2|MentionMisc=CorefType:ident
3	va	anar	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	6:aux	_
4	poder	poder	AUX	vmp0000	Tense=Past|VerbForm=Part	6	aux	6:aux	_
5	-se	ell	PRON	p0300000	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	6	expl:pass	6:expl:pass	_
6	escapolir	escapolir-se	VERB	vmn0000	VerbForm=Inf	0	root	0:root	_
7	amb	amb	ADP	sps00	_	9	case	9:case	_
8	l'	el	DET	da0cs0	Definite=Def|Number=Sing|PronType=Art	9	det	9:det	SpaceAfter=No
9	ajut	ajut	NOUN	ncms000	Gender=Masc|Number=Sing	6	obl	6:obl	ClusterId=CESS-CAT-AAP-20011228-45582-s11.sn.17|ClusterType=Gen|MentionSpan=8-12|MentionMisc=HomoDD
10	d'	de	ADP	sps00	_	12	case	12:case	SpaceAfter=No
11	uns	un	DET	di0mp0	Gender=Masc|Number=Plur|PronType=Ind	12	det	12:det	_
12	veïns	veí	NOUN	ncmp000	Gender=Masc|Number=Plur	9	nmod	9:nmod	SpaceAfter=No|ClusterId=CESS-CAT-AAP-20011228-45582-s11.sn.25|ClusterType=Gen|MentionSpan=11-12
13	.	.	PUNCT	fp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 17 nsubj:pass	color:blue
1	Tot	tot	PRON	rg	Gender=Masc|Number=Sing|PronType=Tot	9	advmod	9:advmod	MWE=Tot_i_amb_això|MWEPOS=ADV
2	i	i	CCONJ	_	_	1	fixed	1:fixed	_
3	amb	amb	ADP	_	_	1	fixed	1:fixed	_
4	això	això	NOUN	_	_	1	fixed	1:fixed	SpaceAfter=No
5	,	,	PUNCT	fc	PunctType=Comm	1	punct	1:punct	_
6	aquesta	aquest	DET	dd0fs0	Gender=Fem|Number=Sing|PronType=Dem	7	det	7:det	_
7	filosofia	filosofia	NOUN	ncfs000	Gender=Fem|Number=Sing	9	nsubj	9:nsubj	ClusterId=CESS-CAT-AAP-19990701-48-c4|ClusterType=Gen|MentionSpan=6-7|MentionMisc=CorefType:ident
8	no	no	ADV	rn	Polarity=Neg	9	advmod	9:advmod	_
9	impedeix	impedir	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
10	que	que	SCONJ	cs	_	14	mark	14:mark	_
11	a	a	ADP	sps00	_	12	case	12:case	_
12	Aznar	Aznar	PROPN	np0000p	_	14	obj	14:obj	ClusterId=CESS-CAT-AAP-19990701-48-c1|ClusterType=Spec.person|MentionSpan=12|MentionMisc=CorefType:ident
13	li	ell	PRON	pp3csd00	Case=Dat|Number=Sing|Person=3|PronType=Prs	14	obj	14:obj	ClusterId=CESS-CAT-AAP-19990701-48-c1|ClusterType=Spec.person|MentionSpan=13|MentionMisc=ClusterTypeMismatch:Spec:Spec.person,CorefType:ident
14	desagradi	desagradar	VERB	vmsp3s0	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	ccomp	9:ccomp	_
15	l'	el	DET	da0cs0	Definite=Def|Number=Sing|PronType=Art	16	det	16:det	SpaceAfter=No
16	escena	escena	NOUN	ncfs000	Gender=Fem|Number=Sing	14	nsubj	14:nsubj	ClusterId=CESS-CAT-AAP-19990701-48-c5|ClusterType=Gen|MentionSpan=15-23|MentionMisc=CorefType:ident
17	que	que	PRON	pr0cn000	PronType=Rel	20	nsubj:pass	20:nsubj:pass	ClusterId=CESS-CAT-AAP-19990701-48-c5|ClusterType=Gen|MentionSpan=17|MentionMisc=CorefType:ident
18	es	ell	PRON	p0000000	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	20	expl:pass	20:expl:pass	_
19	va	anar	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	aux	20:aux	_
20	viure	viure	VERB	vmn0000	VerbForm=Inf	16	acl	16:acl	_
21	ahir	ahir	ADV	rg	_	20	advmod	20:advmod	_
22	a	a	ADP	sps00	_	23	case	23:case	_
23	Pamplona	Pamplona	PROPN	np0000l	_	20	obl	20:obl	SpaceAfter=No|ClusterId=CESS-CAT-AAP-19990701-48-s4.sn.48|ClusterType=Spec.location|MentionSpan=23
24	.	.	PUNCT	fp	PunctType=Peri	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	La	La	DET	np0000a	Gender=Fem|Number=Sing|PronType=Art	2	det	2:det	MWE=La_hora_Warner|MWEPOS=PROPN|ClusterId=CESS-CAT-A-20011201-154-c1|ClusterType=Spec.other|MentionSpan=1-3|MentionMisc=CorefType:ident
2	hora	hora	PROPN	_	_	6	nsubj:pass	6:nsubj:pass	_
3	Warner	Warner	PROPN	_	_	2	flat	2:flat	_
4	es	ell	PRON	p0000000	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	6	expl:pass	6:expl:pass	_
5	va	anar	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	6:aux	_
6	estrenar	estrenar	VERB	vmn0000	VerbForm=Inf	0	root	0:root	_
7	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	8:det	_
8	7	7	NUM	_	NumForm=Digit|NumType=Card	6	obl	6:obl	MWE=7_d'_octubre_del_2000|MWEPOS=NOUN|ClusterId=CESS-CAT-A-20011201-154-s2.sn.10|ClusterType=Spec.date|MentionSpan=7-13
9	d'	d'	ADP	_	_	10	case	10:case	SpaceAfter=No
10	octubre	octubre	NOUN	_	_	8	compound	8:compound	_
11	de	de	ADP	_	_	13	case	13:case	_
12	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	13:det	_
13	2000	2000	NUM	_	NumForm=Digit|NumType=Card	8	compound	8:compound	SpaceAfter=No
14	.	.	PUNCT	fp	PunctType=Peri	6	punct	6:punct	_

~~~


