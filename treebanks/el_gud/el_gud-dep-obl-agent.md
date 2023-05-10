---
layout: base
title:  'Statistics of obl:agent in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="el_gud-dep-obl.html">obl</a></tt>.

14 nodes (0%) are attached to their parents as `obl:agent`.

14 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.21428571428571.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (12; 86% instances), <tt><a href="el_gud-pos-AUX.html">AUX</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:agent	color:blue
1	Αν	αν	SCONJ	CjSb	_	4	mark	_	_
2	η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	Αδριανή	Αδριανή	PROPN	NoPr	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
4	απογοητεύτηκε	απογοητεύω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	11	advcl	_	_
5	από	από	ADP	AsPpSp	_	7	case	_	_
6	την	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	είδηση	είδηση	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	4	obl:agent	_	_
8	,	,	PUNCT	PUNCT	PunctType=Comm	4	punct	_	_
9	δεν	δεν	PART	PtNg	Polarity=Neg	11	advmod	_	_
10	το	εγώ	PRON	PnPe	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	11	obj	_	_
11	δείχνει	δείχνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
12	.	.	PUNCT	PTERMP	PunctType=Peri	11	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	Πώς	πώς	ADV	AdBa	PronType=Int	2	advmod	_	_
2	φαίνεται	φαίνομαι	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
3	ότι	ότι	SCONJ	CjSb	_	4	mark	_	_
4	είσαι	είμαι	AUX	VbMn	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Pass	2	csubj	_	_
5	από	από	ADP	AsPpSp	_	6	case	_	_
6	σπίτι	σπίτι	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	4	obl:agent	_	SpaceAfter=No
7	.	.	PUNCT	PTERMP	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 obl:agent	color:blue
1	Η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	τριανδρία	τριανδρία	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Sing	5	nsubj:pass	_	_
3	των	ο	DET	AtDf	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	4	det	_	_
4	ιερέων	ιερέας	NOUN	NoCm	Case=Gen|Gender=Masc|Number=Plur	2	nmod	_	_
5	συνοδεύεται	συνοδεύω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
6	από	από	ADP	AsPpSp	_	8	case	_	_
7	τέσσερις	τέσσερις	NUM	NmCd	Case=Acc|Gender=Masc|Number=Plur|NumType=Card	8	compound	_	_
8	πιστούς	πιστός	ADJ	AjBa	Case=Acc|Gender=Masc|Number=Plur	5	obl:agent	_	_
9	που	που	PRON	PnRe	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	10	nsubj	_	_
10	κρατάνε	κρατώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	acl:relcl	_	_
11	τον	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	Επιτάφιο	επιτάφιος	PROPN	NoCm	Case=Acc|Gender=Masc|Number=Sing	10	obj	_	SpaceAfter=No
13	.	.	PUNCT	PTERMP	PunctType=Peri	5	punct	_	_

~~~


