---
layout: base
title:  'Statistics of vocative in UD_Greek-Cretan'
udver: '2'
---

## Treebank Statistics: UD_Greek-Cretan: Relations: `vocative`

This relation is universal.

41 nodes (1%) are attached to their parents as `vocative`.

26 instances of `vocative` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.46341463414634.

The following 9 pairs of parts of speech are connected with `vocative`: <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt> (24; 59% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-PROPN.html">PROPN</a></tt> (8; 20% instances), <tt><a href="el_cretan-pos-ADV.html">ADV</a></tt>-<tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="el_cretan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="el_cretan-pos-ADV.html">ADV</a></tt>-<tt><a href="el_cretan-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cretan-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cretan-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 vocative	color:blue
1	Είντα	είντα	PRON	PnPe	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	2	obj	_	_
2	'χεις	έχω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	4	punct	_	PunctType=Comm
4	τέκνο	τέκνο	NOUN	NoCm	Case=Voc|Gender=Neut|Number=Sing	2	vocative	_	_
5	μου	εγώ	PRON	PnPo	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	nmod	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	4	punct	_	PunctType=Comm
7	είντα	είντα	PRON	PnPe	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	8	obj	_	_
8	'παθες	παθαίνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	SpaceAfter=No
9	;	;	PUNCT	PTERM	_	2	punct	_	PunctType=Qest

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 vocative	color:blue
1	Κοντό	κοντό	ADV	NoCm	_	7	advmod	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	3	punct	_	PunctType=Comm
3	Θεέ	Θεός	PROPN	Ij	Case=Voc|Gender=Masc|Number=Sing	7	vocative	_	_
4	μου	εγώ	PRON	PnPe	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	3	nmod	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	3	punct	_	PunctType=Comm
6	και	και	CCONJ	CjCo	_	7	cc	_	_
7	μπροκωμένη	μπροκώνω	VERB	VbMnPp	Case=Acc|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
8	την	εγώ	PRON	PnPe	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
9	έχουνε	έχω	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	SpaceAfter=No
10	.	.	PUNCT	PTERMP	_	7	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 vocative	color:blue
1	Πού	πού	ADV	OPUNCT	PronType=Int	0	root	_	SpaceAfter=No
2	,	,	PUNCT	OPUNCT	_	3	punct	_	PunctType=Comm
3	παπά	παπάς	NOUN	AdBa	Case=Voc|Gender=Neut|Number=Sing	1	vocative	_	SpaceAfter=No
4	,	,	PUNCT	AdBa	_	3	punct	_	PunctType=Comm
5	σ	σ	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Plur	7	case	_	_
6	τα	ο	DET	NoCm	Case=Acc|Gender=Neut|Number=Plur	7	det	_	_
7	Παρίσα	Παρίσα	PROPN	VbMn	Case=Acc|Gender=Neut|Number=Plur	1	appos	_	SpaceAfter=No
8	;	;	PUNCT	PTERM	_	1	punct	_	PunctType=Qest

~~~


