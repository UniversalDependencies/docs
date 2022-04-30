---
layout: base
title:  'Statistics of iobj in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `iobj`

This relation is universal.

1536 nodes (0%) are attached to their parents as `iobj`.

781 instances of `iobj` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.69596354166667.

The following 10 pairs of parts of speech are connected with `iobj`: <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt> (679; 44% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt> (537; 35% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PROPN.html">PROPN</a></tt> (195; 13% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (114; 7% instances), <tt><a href="ca_ancora-pos-AUX.html">AUX</a></tt>-<tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 iobj	color:blue
1	Ara	ara	ADV	rg	_	6	advmod	6:advmod	SpaceAfter=No
2	,	,	PUNCT	fc	PunctType=Comm	3	punct	3:punct	_
3	però	però	ADV	rg	_	6	advmod	6:advmod	SpaceAfter=No
4	,	,	PUNCT	fc	PunctType=Comm	3	punct	3:punct	_
5	es	ell	PRON	p0300000	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	6	iobj	6:iobj	_
6	proposa	proposar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
7	augmentar	augmentar	VERB	vmn0000	VerbForm=Inf	6	xcomp	6:xcomp	_
8	ne	en	PRON	pp3cn000	Case=Gen|Person=3|PronType=Prs	7	obj	7:obj	ClusterId=CESS-CAT-A-20030507-86093-c7|ClusterType=|MentionSpan=8|MentionMisc=ClusterTypeMismatch:Spec:,CorefType:ident
9	l'	el	DET	da0cs0	Definite=Def|Number=Sing|PronType=Art	10	det	10:det	SpaceAfter=No
10	ús	ús	NOUN	ncms000	Gender=Masc|Number=Sing	7	obj	7:obj	ClusterId=CESS-CAT-A-20030507-86093-c43|ClusterType=Gen|MentionSpan=9-11|MentionMisc=CorefType:ident
11	social	social	ADJ	aq0cs0	Number=Sing	10	amod	10:amod	SpaceAfter=No
12	.	.	PUNCT	fp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 iobj	color:blue
1	La	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	2:det	_
2	peregrinació	peregrinació	NOUN	ncfs000	Gender=Fem|Number=Sing	5	iobj	5:iobj	_
3	l'	ell	PRON	pp3csa00	Case=Acc|Gender=Fem,Masc|Number=Sing|Person=3|PronType=Prs	5	obj	5:obj	SpaceAfter=No
4	ha	haver	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	5:aux	_
5	organitzat	organitzar	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
6	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	7:det	_
7	sindicat	sindicat	NOUN	ncms000	Gender=Masc|Number=Sing	5	nsubj	5:nsubj	ClusterId=3LB-CAT-06010300-3-s3.sn.13|ClusterType=Spec.organization|MentionSpan=6-10
8	Unió	Unió	PROPN	np0000o	_	7	appos	7:appos	MWE=Unió_de_Pagesos|MWEPOS=PROPN|ClusterId=3LB-CAT-06010300-3-s3.sn.18|ClusterType=Spec.organization|MentionSpan=8-10
9	de	de	ADP	_	_	10	case	10:case	_
10	Pagesos	Pagesos	PROPN	_	_	8	flat	8:flat	SpaceAfter=No
11	.	.	PUNCT	fp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 iobj	color:blue
1	"	"	PUNCT	fe	PunctType=Quot	6	punct	6:punct	SpaceAfter=No
2	A	a	ADP	sps00	_	3	case	3:case	_
3	Dutruel	Dutruel	PROPN	np0000p	_	6	iobj	6:iobj	ClusterId=CESS-CAT-AAP-20001202-139-c1|ClusterType=Spec.person|MentionSpan=3|MentionMisc=CorefType:ident
4	no	no	ADV	rn	Polarity=Neg	6	advmod	6:advmod	_
5	el	ell	PRON	pp3msa00	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	obj	6:obj	ClusterId=CESS-CAT-AAP-20001202-139-c1|ClusterType=Spec.person|MentionSpan=5|MentionMisc=ClusterTypeMismatch:Spec:Spec.person,CorefType:ident
6	rebran	rebre	VERB	vmif3p0	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	0	root	0:root	_
7	amb	amb	ADP	sps00	_	8	case	8:case	_
8	aplaudiments	aplaudiment	NOUN	ncmp000	Gender=Masc|Number=Plur	6	obl	6:obl	SpaceAfter=No|ClusterId=CESS-CAT-AAP-20001202-139-s14.sn.22|ClusterType=Gen|MentionSpan=8
9	.	.	PUNCT	fp	PunctType=Peri	6	punct	6:punct	_

~~~


