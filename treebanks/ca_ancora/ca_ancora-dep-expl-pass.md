---
layout: base
title:  'Statistics of expl:pass in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `expl:pass`

This relation is a language-specific subtype of <tt><a href="ca_ancora-dep-expl.html">expl</a></tt>.

512 nodes (0%) are attached to their parents as `expl:pass`.

499 instances of `expl:pass` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.57421875.

The following 3 pairs of parts of speech are connected with `expl:pass`: <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt> (502; 98% instances), <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt> (7; 1% instances), <tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl:pass	color:blue
1	No	no	ADV	rn	Polarity=Neg	3	advmod	3:advmod	_
2	es	ell	PRON	p0000000	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	3	expl:pass	3:expl:pass	_
3	treballarà	treballar	VERB	vmif3s0	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	0:root	_
4	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	5:det	_
5	dissabte	dissabte	NOUN	_	AdvType=Tim	3	obl	3:obl	ClusterId=CESS-CAT-AAP-20011102-62-s4.sn.9|ClusterType=Spec.date|MentionSpan=4-5
6	i	i	CCONJ	cc	_	8	cc	8:cc	_
7	es	ell	PRON	p0000000	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	8	obj	8:obj	_
8	reduiran	reduir	VERB	vmif3p0	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	3	conj	3:conj	_
9	les	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	10:det	_
10	extres	extra	ADJ	aq0cp0	Number=Plur	8	nsubj	8:nsubj	SpaceAfter=No|ClusterId=CESS-CAT-AAP-20011102-62-s4.sn.21|ClusterType=Gen|MentionSpan=9-10|MentionMisc=HomoDD
11	.	.	PUNCT	fp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 expl:pass	color:blue
1	Potser	potser	ADV	rg	_	6	advmod	6:advmod	_
2	s'	ell	PRON	p0000000	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	6	expl:pass	6:expl:pass	SpaceAfter=No
3	hagi	haver	AUX	vasp3s0	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	6:aux	_
4	de	de	ADP	sps00	_	6	case	6:case	_
5	ser	ser	AUX	vsn0000	VerbForm=Inf	6	cop	6:cop	_
6	comprensiu	comprensiu	ADJ	aq0ms0	Gender=Masc|Number=Sing	0	root	0:root	_
7	amb	amb	ADP	sps00	_	9	case	9:case	_
8	els	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	9:det	_
9	diputats	diputat	NOUN	ncmp000	Gender=Masc|Number=Plur	6	nmod	6:nmod	SpaceAfter=No|ClusterId=CESS-CAT-AAP-19990301-15-c26|ClusterType=Gen|MentionSpan=8-9|MentionMisc=HomoDD,CorefType:ident
10	.	.	PUNCT	fp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 13 expl:pass	color:blue
1	La	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	2:det	_
2	platea	platea	NOUN	ncfs000	Gender=Fem|Number=Sing	19	nsubj	19:nsubj	SpaceAfter=No|ClusterId=CESS-CAT-A-20010302-159-c9|ClusterType=Gen|MentionSpan=1-17|MentionMisc=CorefType:ident
3	,	,	PUNCT	fc	PunctType=Comm	5	punct	5:punct	_
4	que	que	PRON	pr0cn000	PronType=Rel	5	nsubj	5:nsubj	ClusterId=CESS-CAT-A-20010302-159-c9|ClusterType=Gen|MentionSpan=4|MentionMisc=CorefType:ident
5	sap	saber	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl	2:acl	_
6	els	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	8:det	_
7	mals	mal	ADJ	aq0mp0	Gender=Masc|Number=Plur	8	amod	8:amod	_
8	moments	moment	NOUN	ncmp000	Gender=Masc|Number=Plur	5	obj	5:obj	ClusterId=CESS-CAT-A-20010302-159-c14|ClusterType=Gen|MentionSpan=6-16|MentionMisc=HomoDD
9	que	que	PRON	pr0cn000	PronType=Rel	11	nsubj	11:nsubj	ClusterId=CESS-CAT-A-20010302-159-c14|ClusterType=Gen|MentionSpan=9|MentionMisc=CorefType:ident
10	es	ell	PRON	p0000000	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	11	obj	11:obj	_
11	passen	passar	VERB	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	acl	8:acl	_
12	quan	quan	SCONJ	cs	_	16	mark	16:mark	_
13	s'	ell	PRON	p0000000	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	16	expl:pass	16:expl:pass	SpaceAfter=No
14	és	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	cop	16:cop	_
15	un	un	DET	di0ms0	Gender=Masc|Number=Sing|PronType=Ind	16	det	16:det	_
16	incomprès	incomprès	NOUN	ncms000	Gender=Masc|Number=Sing	11	advcl	11:advcl	SpaceAfter=No
17	,	,	PUNCT	fc	PunctType=Comm	5	punct	5:punct	_
18	va	anar	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	aux	19:aux	_
19	deixar	deixar	VERB	vmn0000	VerbForm=Inf	0	root	0:root	_
20	anar	anar	VERB	vmn0000	VerbForm=Inf	19	xcomp	19:xcomp	_
21	uns	un	DET	di0mp0	Gender=Masc|Number=Plur|PronType=Ind	22	det	22:det	_
22	crits	crit	NOUN	ncmp000	Gender=Masc|Number=Plur	20	obj	20:obj	ClusterId=CESS-CAT-A-20010302-159-s16.sn.46|ClusterType=Gen|MentionSpan=21-24
23	de	de	ADP	sps00	_	24	case	24:case	_
24	solidaritat	solidaritat	NOUN	ncfs000	Gender=Fem|Number=Sing	22	nmod	22:nmod	SpaceAfter=No
25	.	.	PUNCT	fp	PunctType=Peri	19	punct	19:punct	_

~~~


