---
layout: base
title:  'Statistics of nsubj:outer in UD_Khoekhoe-KDT'
udver: '2'
---

## Treebank Statistics: UD_Khoekhoe-KDT: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="naq_kdt-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="naq_kdt-dep-nsubj-pass.html">nsubj:pass</a></tt>.

22 nodes (0%) are attached to their parents as `nsubj:outer`.

21 instances of `nsubj:outer` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.68181818181818.

The following 6 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt>-<tt><a href="naq_kdt-pos-PRON.html">PRON</a></tt> (10; 45% instances), <tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt>-<tt><a href="naq_kdt-pos-NOUN.html">NOUN</a></tt> (6; 27% instances), <tt><a href="naq_kdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="naq_kdt-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="naq_kdt-pos-PRON.html">PRON</a></tt>-<tt><a href="naq_kdt-pos-PRON.html">PRON</a></tt> (2; 9% instances), <tt><a href="naq_kdt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="naq_kdt-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="naq_kdt-pos-NUM.html">NUM</a></tt>-<tt><a href="naq_kdt-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 2 nsubj:outer	color:blue
1	o	o	ADV	_	_	12	advmod	12:advmod	_
2	m	_	PRON	_	Case=Nom|Gender=Fem,Neut|Number=Dual|Person=1|PronType=Prs	12	nsubj:outer	12:nsubj:outer	_
3	go	go	AUX	_	Tense=RecPast	12	aux	12:aux	_
4	"	"	PUNCT	_	_	12	punct	12:punct	SpaceAfter=No
5	hâ-â	hâ-â	INTJ	_	Polarity=Neg	12	discourse	12:discourse	_
6	sim	si	PRON	_	Case=Nom|Clusivity=Ex|Gender=Fem,Neut|Number=Dual|Person=1|PronType=Prs	12	nsubj	12:nsubj	_
7	ge	ge	AUX	DECL	Mood=Ind	12	aux	12:aux	_
8	sim	si	PRON	_	Case=Nom|Clusivity=Ex|Gender=Fem,Neut|Number=Dual|Person=1|PronType=Prs	9	nmod:poss	9:nmod:poss	_
9	mara	ma	NOUN	_	Case=Nom|Gender=Fem,Neut|Number=Dual|Person=3	10	obj	10:obj	_
10	oa	oa	VERB	_	Voice=Act	12	advcl	12:advcl	_
11	ra	ra	AUX	IPFV	Aspect=Imp	12	aux	12:aux	_
12	ī	ī	VERB	_	Voice=Act	0	root	0:root	SpaceAfter=No
13	"	"	PUNCT	_	_	12	punct	12:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nsubj:outer	color:blue
1	ǃhoahe	ǃhoa	VERB	_	Voice=Pass	3	acl:relcl	3:acl:relcl	_
2	ra	ra	AUX	IPFV	Aspect=Imp	1	aux	1:aux	_
3	xūn	xū	NOUN	_	Case=Nom|Gender=Neut|Number=Plur|Person=3	6	nsubj:outer	1:nsubj:pass|6:nsubj:outer	_
4	hoan	hoa	DET	_	Case=Nom|Gender=Neut|Number=Plur|Person=3|PronType=Tot	3	det	3:det	_
5	ge	ge	AUX	DECL	Mood=Ind	6	aux	6:aux	_
6	ǁnâuhe	ǁnâu	VERB	_	Voice=Pass	0	root	0:root	_
7	ra	ra	AUX	_	Aspect=Imp	6	aux	6:aux	_
8	na	_	PRON	_	Case=Nom|Gender=Neut|Number=Plur|Person=3|PronType=Rel	6	nsubj:pass	1:ref|6:nsubj:pass	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:outer	color:blue
1	Nē	nē	DET	PROX	Deixis=Prox|PronType=Dem	2	det	2:det	_
2	ǀgaus	ǀgau	NOUN	_	Case=Nom|Gender=Fem|Number=Sing|Person=3	6	nsubj:outer	6:nsubj:outer	_
3	ge	ge	AUX	DECL	Mood=Ind	6	aux	6:aux	_
4	xūn	xū	NOUN	_	Case=Nom|Gender=Neut|Number=Plur|Person=3	6	nsubj	6:nsubj	_
5	ge	ge	AUX	DECL	Mood=Ind	6	aux	6:aux	_
6	ǀhomaxa	ǀhomaxa	ADJ	_	_	0	root	0:root	_
7	sa	s	SCONJ	NMLZ	Case=Acc	6	mark	6:mark	_
8	.	.	PUNCT	_	_	6	punct	6:punct	_

~~~


