---
layout: base
title:  'Statistics of cop in UD_Khoekhoe-KDT'
udver: '2'
---

## Treebank Statistics: UD_Khoekhoe-KDT: Relations: `cop`

This relation is universal.

327 nodes (1%) are attached to their parents as `cop`.

176 instances of `cop` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.41284403669725.

The following 11 pairs of parts of speech are connected with `cop`: <tt><a href="naq_kdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="naq_kdt-pos-AUX.html">AUX</a></tt> (198; 61% instances), <tt><a href="naq_kdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="naq_kdt-pos-AUX.html">AUX</a></tt> (63; 19% instances), <tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt>-<tt><a href="naq_kdt-pos-AUX.html">AUX</a></tt> (21; 6% instances), <tt><a href="naq_kdt-pos-PRON.html">PRON</a></tt>-<tt><a href="naq_kdt-pos-AUX.html">AUX</a></tt> (16; 5% instances), <tt><a href="naq_kdt-pos-ADV.html">ADV</a></tt>-<tt><a href="naq_kdt-pos-AUX.html">AUX</a></tt> (8; 2% instances), <tt><a href="naq_kdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="naq_kdt-pos-AUX.html">AUX</a></tt> (8; 2% instances), <tt><a href="naq_kdt-pos-DET.html">DET</a></tt>-<tt><a href="naq_kdt-pos-AUX.html">AUX</a></tt> (6; 2% instances), <tt><a href="naq_kdt-pos-NUM.html">NUM</a></tt>-<tt><a href="naq_kdt-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="naq_kdt-pos-ADP.html">ADP</a></tt>-<tt><a href="naq_kdt-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="naq_kdt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="naq_kdt-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="naq_kdt-pos-X.html">X</a></tt>-<tt><a href="naq_kdt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cop	color:blue
1	Ti	ti	DET	_	Number=Sing|Person=1|Poss=Yes|PronType=Prs	2	nmod:poss	2:nmod:poss	_
2	hems	hem	NOUN	_	Case=Nom|Gender=Fem|Number=Sing|Person=3	8	nsubj	8:nsubj	_
3	ge	ge	AUX	DECL	Mood=Ind	8	aux	8:aux	_
4	sa	sa	DET	2SG.POSS	Number=Sing|Person=2|Poss=Yes|PronType=Prs	5	nmod:poss	5:nmod:poss	_
5	sa	_	PRON	_	Case=Acc|Gender=Fem|Number=Sing|Person=2,3|PronType=Prs	8	obl	8:obl	_
6	xu	xu	ADP	_	_	5	case	5:case	_
7	a	a	AUX	COP.PRS	Tense=Pres	8	cop	8:cop	_
8	ǀkhara	ǀkhara	ADJ	_	_	0	root	0:root	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cop	color:blue
1	Nē	nē	DET	PROX	Deixis=Prox|PronType=Dem	5	advmod	5:advmod	_
2	a	a	AUX	COP.PRS	Tense=Pres	5	cop	5:cop	_
3	n	_	PRON	_	Case=Nom|Gender=Neut|Number=Plur|Person=3|PronType=Prs	5	expl:impers	5:expl:impers|10:obj	_
4	ge	ge	AUX	DECL	Mood=Ind	5	aux	5:aux	_
5	ǃkhaidi	ǃkhai	NOUN	_	Case=Nom|Gender=Fem|Number=Plur|Person=3	0	root	0:root	_
6	hîa	hîa	SCONJ	REL	_	10	mark	10:mark	_
7	b	_	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	10:nsubj	_
8	ǃûǂamaose	ǃûǂamaose	ADV	_	_	10	advmod	10:advmod	_
9	ra	ra	AUX	IPFV	Aspect=Imp	10	aux	10:aux	_
10	hō-aihē	hō-aihē	VERB	_	Voice=Act	3	acl:relcl	3:acl:relcl	_
11	na	_	PRON	REL	Case=Acc|Gender=Neut|Number=Plur|Person=3|PronType=Rel	10	obj	3:ref|10:obj	_
12	.	.	PUNCT	_	_	5	punct	5:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cop	color:blue
1	Nē	nē	DET	PROX	Deixis=Prox|PronType=Dem	2	det	2:det	_
2	mûǂuidaodi	mûǂuidao	NOUN	_	Case=Nom|Gender=Fem|Number=Plur|Person=3	8	nsubj	8:nsubj	_
3	ge	ge	AUX	DECL	Mood=Ind	8	aux	8:aux	_
4	khoese	khoese	NUM	_	NumType=Card	5	nummod	5:nummod	_
5	kaisib	kaisi	NOUN	_	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	obl	8:obl	_
6	kōse	kōse	ADP	_	_	5	case	5:case	_
7	a	a	AUX	COP.PRS	Tense=Pres	8	cop	8:cop	_
8	ǁau	ǁau	VERB	_	Voice=Act	0	root	0:root	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	8:punct	SpacesAfter=\n

~~~


