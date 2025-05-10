---
layout: base
title:  'Statistics of acl:relcl in UD_Khoekhoe-KDT'
udver: '2'
---

## Treebank Statistics: UD_Khoekhoe-KDT: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="naq_kdt-dep-acl.html">acl</a></tt>.

265 nodes (1%) are attached to their parents as `acl:relcl`.

166 instances of `acl:relcl` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.22264150943396.

The following 15 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="naq_kdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt> (214; 81% instances), <tt><a href="naq_kdt-pos-PRON.html">PRON</a></tt>-<tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt> (20; 8% instances), <tt><a href="naq_kdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="naq_kdt-pos-ADJ.html">ADJ</a></tt> (11; 4% instances), <tt><a href="naq_kdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="naq_kdt-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="naq_kdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="naq_kdt-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="naq_kdt-pos-DET.html">DET</a></tt>-<tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="naq_kdt-pos-DET.html">DET</a></tt>-<tt><a href="naq_kdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="naq_kdt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="naq_kdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="naq_kdt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="naq_kdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="naq_kdt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="naq_kdt-pos-NUM.html">NUM</a></tt>-<tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="naq_kdt-pos-PRON.html">PRON</a></tt>-<tt><a href="naq_kdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="naq_kdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="naq_kdt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt>-<tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 acl:relcl	color:blue
1	Sao	sao	VERB	_	Voice=Act	3	acl:relcl	3:acl:relcl	_
2	ra	ra	AUX	IPFV	Aspect=Imp	1	aux	1:aux	_
3	mâǃkhaisa	mâǃkhai	NOUN	_	Case=Acc|Gender=Fem|Number=Sing|Person=3	5	nsubj	1:nsubj|5:nsubj	_
4	ǂhawa	ǂhawa	ADJ	_	_	5	amod	5:amod	_
5	ǃganni	ǃgan	NOUN	_	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	0:root	_
6	ǃnâ	ǃnâ	ADP	_	_	5	case	5:case	SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	5:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 acl:relcl	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 acl:relcl	color:blue
1	Tsî	tsî	CCONJ	_	_	14	cc	14:cc	_
2	ǁnāpa	ǁnāpa	ADV	_	Deixis=Remt|PronType=Dem	14	obl	14:obl	_
3	xu	xu	ADP	_	_	2	case	2:case	_
4	i	_	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	expl	14:expl	_
5	ge	ge	AUX	DECL	Mood=Ind	14	aux	14:aux	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	7:punct	_
7	Bob	Bo	NOUN	_	Case=Nom|Gender=Masc|Number=Sing|Person=3	14	vocative	14:vocative	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	7:punct	_
9	khoe-i	khoe	NOUN	_	Case=Nom|Gender=Neut|Number=Sing|Person=3	14	nsubj	11:nsubj|14:nsubj	_
10	hîa	hîa	SCONJ	REL	_	11	mark	11:mark	_
11	ǃnorasa	ǃnorasa	ADJ	_	_	9	acl:relcl	9:acl:relcl	_
12	-e	_	PRON	REL	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Rel	11	nsubj	9:ref|11:nsubj	_
13	a	a	AUX	STAT.PRS	Tense=Pres	14	aux	14:aux	_
14	ǀkhai	ǀkhai	VERB	NEG.COP.LOC	Voice=Act	0	root	0:root	SpacesAfter=\n

~~~


