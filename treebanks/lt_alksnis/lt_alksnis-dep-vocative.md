---
layout: base
title:  'Statistics of vocative in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `vocative`

This relation is universal.

11 nodes (0%) are attached to their parents as `vocative`.

7 instances of `vocative` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.18181818181818.

The following 3 pairs of parts of speech are connected with `vocative`: <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (9; 82% instances), <tt><a href="lt_alksnis-pos-PART.html">PART</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 vocative	color:blue
1	Laikykis	laikytis	VERB	vksm.asm.sngr.liep.vns.2.	Mood=Imp|Number=Sing|Person=2|Reflex=Yes|VerbForm=Fin	0	root	_	SpaceAfter=No
2	,	,	PUNCT	skyr.	_	3	punct	_	_
3	broliuk	broliukas	NOUN	dkt.vyr.vns.Š.	Case=Voc|Gender=Masc|Number=Sing	1	vocative	_	SpaceAfter=No
4	!	!	PUNCT	skyr.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 vocative	color:blue
1	Ne	ne	PART	dll.	_	2	advmod:emph	_	_
2	tik	tik	PART	dll.	_	0	root	_	SpaceAfter=No
3	,	,	PUNCT	skyr.	_	5	punct	_	_
4	godotinas	godoti	VERB	vksm.dlv.reik.vyr.vns.Š.	Case=Voc|Gender=Masc|Mood=Nec|Number=Sing|VerbForm=Part	5	amod	_	_
5	skaitytojau	skaitytojas	NOUN	dkt.vyr.vns.Š.	Case=Voc|Gender=Masc|Number=Sing	2	vocative	_	SpaceAfter=No
6	,	,	PUNCT	skyr.	_	8	punct	_	_
7	ne	ne	PART	dll.	_	8	advmod:emph	_	_
8	tik	tik	PART	dll.	_	2	conj	_	_
9	!..	!..	PUNCT	skyr.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 vocative	color:blue
1	O	o	PART	dll.	_	2	advmod:emph	_	_
2	kas	kas	PRON	įv.V.	Case=Nom|PronType=Int,Rel	0	root	_	_
3	gi	gi	PART	dll.	_	2	advmod:emph	_	_
4	tu	tu	PRON	įv.vns.Š.	Case=Voc|Number=Sing|PronType=Prs	2	nsubj	_	_
5	esi	būti	AUX	vksm.asm.tiesiog.es.vns.2.	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	cop	_	SpaceAfter=No
6	,	,	PUNCT	skyr.	_	7	punct	_	_
7	Tėvyne	tėvynė	NOUN	dkt.mot.vns.Š.	Case=Voc|Gender=Fem|Number=Sing	2	vocative	_	SpaceAfter=No
8	,	,	PUNCT	skyr.	_	11	punct	_	_
9	jei	jei	SCONJ	jng.	_	11	mark	_	_
10	ne	ne	PART	dll.	_	11	advmod:emph	_	_
11	mes	aš	PRON	įv.dgs.V.	Case=Nom|Number=Plur|PronType=Prs	2	advcl	_	_
12	?..	?..	PUNCT	skyr.	_	2	punct	_	_

~~~


