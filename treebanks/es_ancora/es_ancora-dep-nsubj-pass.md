---
layout: base
title:  'Statistics of nsubj:pass in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="es_ancora-dep-nsubj.html">nsubj</a></tt>.

52 nodes (0%) are attached to their parents as `nsubj:pass`.

33 instances of `nsubj:pass` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.65384615384615.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (36; 69% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (8; 15% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt> (6; 12% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	El	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	2:det	_
2	accidente	accidente	NOUN	ncms000	Gender=Masc|Number=Sing	4	nsubj:pass	4:nsubj:pass	ClusterId=CESS-CAST-P-19990902-38_d-c2|ClusterType=Gen|MentionSpan=1-2|MentionMisc=CorefType:ident
3	se	él	PRON	p0000000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	4	expl:pv	4:expl:pv	_
4	saldó	saldar	VERB	vmis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
5	sin	sin	ADP	sps00	_	6	case	6:case	_
6	heridos	herido	NOUN	ncmp000	Gender=Masc|Number=Plur	4	obl	4:obl	SpaceAfter=No|ClusterId=CESS-CAST-P-19990902-38_d-s4.sn.14|ClusterType=Gen|MentionSpan=6
7	.	.	PUNCT	fp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 nsubj:pass	color:blue
1	Tampoco	tampoco	ADV	rg	_	2	advmod	2:advmod	_
2	quiso	querer	VERB	vmis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	revelar	revelar	VERB	vmn0000	VerbForm=Inf	2	xcomp	2:xcomp	_
4	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	5:det	_
5	nombres	nombre	NOUN	ncmp000	Gender=Masc|Number=Plur	3	obj	3:obj	ClusterId=CESS-CAST-P-20010802-46-s13.sn.11|ClusterType=Gen|MentionSpan=4-12|MentionMisc=HomoDD
6	de	de	ADP	sps00	_	8	case	8:case	_
7	las	el	DET	da0fp0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	det	8:det	_
8	empresas	empresa	NOUN	ncfp000	Gender=Fem|Number=Plur	5	nmod	5:nmod	ClusterId=CESS-CAST-P-20010802-46-c18|ClusterType=Gen|MentionSpan=7-12|MentionMisc=HomoDD
9	que	que	PRON	pr0cn000	PronType=Int,Rel	12	nsubj:pass	12:nsubj:pass	ClusterId=CESS-CAST-P-20010802-46-c18|ClusterType=Gen|MentionSpan=9|MentionMisc=CorefType:ident
10	están	estar	AUX	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	aux	12:aux	_
11	siendo	ser	AUX	vsg0000	VerbForm=Ger	12	aux:pass	12:aux:pass	_
12	investigadas	investigar	VERB	vmp00pf	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	8	acl	8:acl	SpaceAfter=No
13	.	.	PUNCT	fp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	LA	el	DET	dd0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	2:det	_
2	REAL	real	PROPN	np00000	_	6	nsubj:pass	6:nsubj:pass	MWE=REAL_SOCIEDAD|MWEPOS=PROPN|ClusterId=CESS-CAST-AA-20000206-5003-c45|ClusterType=|MentionSpan=1-3|MentionMisc=ClusterTypeMismatch:Spec.organization:,Title,CorefType:ident
3	SOCIEDAD	sociedad	PROPN	_	_	2	flat	2:flat	_
4	NO	no	ADV	rn	Polarity=Neg	6	advmod	6:advmod	_
5	SE	él	PRON	p0000000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	6	obj	6:obj	_
6	ALEJA	aleja	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
7	DE	de	ADP	spcms	_	9	case	9:case	_
8	EL	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	9:det	_
9	PRECIPICIO	precipicio	NOUN	ncms000	Gender=Masc|Number=Sing	6	obl	6:obl	ClusterId=CESS-CAST-AA-20000206-5003-c46|ClusterType=|MentionSpan=9|MentionMisc=Title

~~~


