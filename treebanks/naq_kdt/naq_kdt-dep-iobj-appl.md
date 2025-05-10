---
layout: base
title:  'Statistics of iobj:appl in UD_Khoekhoe-KDT'
udver: '2'
---

## Treebank Statistics: UD_Khoekhoe-KDT: Relations: `iobj:appl`

This relation is a language-specific subtype of <tt><a href="naq_kdt-dep-iobj.html">iobj</a></tt>.

53 nodes (0%) are attached to their parents as `iobj:appl`.

38 instances of `iobj:appl` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.79245283018868.

The following 4 pairs of parts of speech are connected with `iobj:appl`: <tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt>-<tt><a href="naq_kdt-pos-PRON.html">PRON</a></tt> (43; 81% instances), <tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt>-<tt><a href="naq_kdt-pos-NOUN.html">NOUN</a></tt> (6; 11% instances), <tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt>-<tt><a href="naq_kdt-pos-PROPN.html">PROPN</a></tt> (3; 6% instances), <tt><a href="naq_kdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="naq_kdt-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 iobj:appl	color:blue
1	ǁGuiǃāba	ǁguiǃā	VERB	_	Voice=Appl	0	root	0:root	_
2	te	_	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	1	iobj:appl	1:iobj:appl	_
3	re	re	AUX	PDIR	Mood=Imp	1	aux	1:aux	SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 iobj:appl	color:blue
1	Axago	axa	NOUN	_	Case=Nom|Gender=Masc|Number=Plur|Person=2	2	iobj:appl	2:obj:appl	_
2	mîba	mî	VERB	_	Voice=Appl	0	root	0:root	_
3	go	go	AUX	_	Tense=RecPast	2	aux	2:aux	_
4	ta	_	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj|11:nsubj:xsubj	_
5	ge	ge	AUX	DECL	Mood=Ind	2	aux	2:aux	_
6	î	î	SCONJ	_	_	11	mark	11:mark	_
7	go	go	AUX	_	Tense=RecPast	11	aux	11:aux	_
8	tā	tā	AUX	APPR	Mood=App	11	aux	11:aux	_
9	ǁîb	ǁî	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	obl	11:obl	_
10	ǀkha	ǀkha	ADP	_	_	9	case	9:case	_
11	ǀhuru	ǀhuru	VERB	_	Voice=Act	2	xcomp	2:xcomp	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	2:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 iobj:appl	color:blue
1	Petrub	Petru	PROPN	_	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	nsubj	5:nsubj	_
2	ge	ge	AUX	DECL	Mood=Ind	5	aux	5:aux	_
3	Mariasa	Maria	PROPN	_	Case=Acc|Gender=Fem|Number=Sing|Person=3	5	iobj:appl	5:iobj:appl	_
4	ge	ge	AUX	_	Tense=Past	5	aux	5:aux	_
5	mîba	mî	VERB	_	Voice=Appl	0	root	0:root	SpacesAfter=\n

~~~


