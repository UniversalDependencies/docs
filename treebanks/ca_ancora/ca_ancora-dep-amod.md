---
layout: base
title:  'Statistics of amod in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `amod`

This relation is universal.

25002 nodes (5%) are attached to their parents as `amod`.

19541 instances of `amod` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.37145028397728.

The following 16 pairs of parts of speech are connected with `amod`: <tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (23550; 94% instances), <tt><a href="ca_ancora-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (838; 3% instances), <tt><a href="ca_ancora-pos-NUM.html">NUM</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (187; 1% instances), <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (150; 1% instances), <tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (95; 0% instances), <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (78; 0% instances), <tt><a href="ca_ancora-pos-DET.html">DET</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (54; 0% instances), <tt><a href="ca_ancora-pos-ADV.html">ADV</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (21; 0% instances), <tt><a href="ca_ancora-pos-SYM.html">SYM</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (16; 0% instances), <tt><a href="ca_ancora-pos-AUX.html">AUX</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="ca_ancora-pos-ADP.html">ADP</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ca_ancora-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ca_ancora-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="ca_ancora-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ca_ancora-pos-PART.html">PART</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ca_ancora-pos-X.html">X</a></tt>-<tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	També	també	ADV	rg	_	4	advmod	4:advmod	_
2	s'	ell	PRON	p0000000	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	4	obj	4:obj	SpaceAfter=No
3	ha	haver	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	4:aux	_
4	fet	fer	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
5	una	un	NUM	dn0fs0	Gender=Fem|Number=Sing|NumType=Card	6	nummod	6:nummod	_
6	ofrena	ofrena	NOUN	ncfs000	Gender=Fem|Number=Sing	4	nsubj	4:nsubj	_
7	simbòlica	simbòlic	ADJ	aq0fs0	Gender=Fem|Number=Sing	6	amod	6:amod	_
8	a	a	ADP	sps00	_	11	case	11:case	_
9	'	'	PUNCT	fz	PunctType=Quot	11	punct	11:punct	SpaceAfter=No
10	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	11:det	_
11	Moreneta	Moreneta	PROPN	np0000p	_	4	obj	4:obj	SpaceAfter=No|ClusterId=3LB-CAT-06010300-3-s4.sn.21|ClusterType=Spec.person|MentionSpan=9-12
12	'	'	PUNCT	fz	PunctType=Quot	11	punct	11:punct	SpaceAfter=No
13	.	.	PUNCT	fp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	El	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	3:det	_
2	popular	popular	ADJ	aq0cs0	Number=Sing	3	amod	3:amod	_
3	Dr.	Dr.	PROPN	np0000p	_	5	nsubj	5:nsubj	MWE=Dr._Soler|MWEPOS=PROPN|ClusterId=CESS-CAT-AAP-20010202-192_a-s7.sn.2|ClusterType=Spec.person|MentionSpan=1-4
4	Soler	Soler	PROPN	_	_	3	flat	3:flat	_
5	interpreta	interpretar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
6	Salvador	Salvador	PROPN	np0000p	_	5	obj	5:obj	SpaceAfter=No|ClusterId=CESS-CAT-AAP-20010202-192_a-c1|ClusterType=Spec|MentionSpan=6-11|MentionMisc=ClusterTypeMismatch:Spec.person:Spec,CorefType:ident
7	,	,	PUNCT	fc	PunctType=Comm	8	punct	8:punct	_
8	amo	amo	NOUN	ncms000	Gender=Masc|Number=Sing	6	appos	6:appos	ClusterId=CESS-CAT-AAP-20010202-192_a-c1|ClusterType=Spec|MentionSpan=7-11|MentionMisc=ClusterTypeMismatch::Spec,CorefType:pred.indefinit
9	d'	de	ADP	sps00	_	11	case	11:case	SpaceAfter=No
10	una	un	DET	di0fs0	Gender=Fem|Number=Sing|PronType=Ind	11	det	11:det	_
11	botiga	botiga	NOUN	ncfs000	Gender=Fem|Number=Sing	8	nmod	8:nmod	SpaceAfter=No|ClusterId=CESS-CAT-AAP-20010202-192_a-c6|ClusterType=Gen|MentionSpan=10-11|MentionMisc=CorefType:ident
12	.	.	PUNCT	fp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 amod	color:blue
1	Es	ell	PRON	p0000000	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	3	obj	3:obj	_
2	van	anar	AUX	vaip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	aux	3:aux	_
3	fer	fer	VERB	vmn0000	VerbForm=Inf	0	root	0:root	_
4	un	un	PRON	di0ms0	Gender=Masc|Number=Sing|PronType=Ind	7	nmod	7:nmod	_
5	total	total	ADJ	aq0cs0	Number=Sing	7	amod	7:amod	_
6	de	de	ADP	sps00	_	7	case	7:case	_
7	1.808	1808	NUM	_	NumForm=Digit|NumType=Card	8	nummod	8:nummod	_
8	enquestes	enquesta	NOUN	ncfp000	Gender=Fem|Number=Plur	3	nsubj	3:nsubj	SpaceAfter=No
9	.	.	PUNCT	fp	PunctType=Peri	3	punct	3:punct	_

~~~


