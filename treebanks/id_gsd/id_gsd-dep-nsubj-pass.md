---
layout: base
title:  'Statistics of nsubj:pass in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="id_gsd-dep-nsubj.html">nsubj</a></tt>.

2214 nodes (2%) are attached to their parents as `nsubj:pass`.

2170 instances of `nsubj:pass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.77777777777778.

The following 22 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-PRON.html">PRON</a></tt> (872; 39% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (826; 37% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt> (475; 21% instances), <tt><a href="id_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_gsd-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="id_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="id_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="id_gsd-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="id_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-DET.html">DET</a></tt>-<tt><a href="id_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-PART.html">PART</a></tt>-<tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="id_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj:pass	color:blue
1	Bau	bau	NOUN	NSD	Number=Sing	0	root	_	Morf=^bau<n>_NSD$
2	apa	apa	ADV	W--	PronType=Int	1	advmod	_	Morf=^apa<w>_W--$
3	kah	kah	PART	T--	_	2	advmod:emph	_	Morf=^kah<t>_T--$
4	yang	yang	PRON	S--	PronType=Rel	5	nsubj:pass	_	Morf=^yang<s>_S--$
5	tercium	cium	VERB	VSP	Mood=Ind|Voice=Pass	1	acl:relcl	_	Morf=^ter+cium<v>_VSP$
6	oleh	oleh	ADP	R--	_	7	case	_	Morf=^oleh<r>_R--$
7	ku	aku	PRON	PS1	Number=Sing|Person=1|Polite=Infm|PronType=Prs	5	obl	_	Morf=^aku<p>_PS1$
8	?	?	PUNCT	Z--	_	1	punct	_	Morf=^?<z>_Z--$

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Film	film	NOUN	NSD	Number=Sing	3	nsubj:pass	_	Morf=^film<n>_NSD$
2	ini	ini	DET	B--	PronType=Dem	1	det	_	Morf=^ini<b>_B--$
3	terdiri	diri	VERB	VSP	Mood=Ind|Voice=Pass	0	root	_	Morf=^ter+diri<n>_VSP$
4	dari	dari	ADP	R--	_	6	case	_	Morf=^dari<r>_R--$
5	6	6	NUM	CC-	NumType=Card	6	nummod	_	Morf=^6<c>_CC-$
6	musim	musim	NOUN	NSD	Number=Sing	3	obl	_	Morf=^musim<n>_NSD$
7	dengan	dengan	ADP	R--	_	9	case	_	Morf=^dengan<r>_R--$
8	137	137	NUM	CC-	NumType=Card	9	nummod	_	Morf=^137<c>_CC-$
9	episiode	episiode	NOUN	X--	_	6	nmod	_	SpaceAfter=No|Morf=^episiode<x>_X--$
10	.	.	PUNCT	Z--	_	3	punct	_	Morf=^.<z>_Z--$

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Dingalan	dingalan	PROPN	X--	_	2	nsubj:pass	_	Morf=^dingalan<x>_X--$
2	terbagi	bagi	VERB	VSP	Mood=Ind|Voice=Pass	0	root	_	Morf=^ter+bagi<v>_VSP$
3	menjadi	jadi	VERB	VSA	Mood=Ind|Voice=Act	2	xcomp	_	Morf=^meN+jadi<a>_VSA$
4	11	11	NUM	CC-	NumType=Card	5	nummod	_	Morf=^11<c>_CC-$
5	barangay	barangay	NOUN	X--	_	3	obj	_	SpaceAfter=No|Morf=^barangay<x>_X--$
6	,	,	PUNCT	Z--	_	3	punct	_	Morf=^,<z>_Z--$
7	yaitu	yaitu	SCONJ	O--	_	2	mark	_	SpaceAfter=No|Morf=^yaitu<o>_O--$
8	:	:	PUNCT	Z--	_	2	punct	_	Morf=^:<z>_Z--$

~~~


