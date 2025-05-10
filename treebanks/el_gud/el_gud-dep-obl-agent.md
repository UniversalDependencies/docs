---
layout: base
title:  'Statistics of obl:agent in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="el_gud-dep-obl.html">obl</a></tt>.

9 nodes (0%) are attached to their parents as `obl:agent`.

8 instances of `obl:agent` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.88888888888889.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (7; 78% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (1; 11% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-PRON.html">PRON</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:agent	color:blue
1	Αν	αν	SCONJ	CjSb	_	4	mark	_	_
2	η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	Αδριανή	Αδριανή	PROPN	NoPr	Case=Nom|Gender=Fem|Number=Sing	4	nsubj:pass	_	_
4	απογοητεύτηκε	απογοητεύω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	11	advcl	_	_
5	από	από	ADP	AsPpSp	_	7	case	_	_
6	την	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	είδηση	είδηση	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	4	obl:agent	_	_
8	,	,	PUNCT	PUNCT	_	4	punct	_	PunctType=Comm
9	δεν	δεν	PART	PtNg	Polarity=Neg	11	advmod	_	_
10	το	εγώ	PRON	PnPe	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	11	obj	_	_
11	δείχνει	δείχνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
12	.	.	PUNCT	PTERMP	_	11	punct	_	PunctType=Peri

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
7	τέσσερις	τέσσερις	NUM	NmCd	Case=Acc|Gender=Masc|Number=Plur|NumType=Card	8	nummod	_	_
8	πιστούς	πιστός	ADJ	AjBa	Case=Acc|Gender=Masc|Number=Plur	5	obl:agent	_	_
9	που	που	PRON	PnRe	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	10	nsubj	_	_
10	κρατάνε	κρατώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	acl:relcl	_	_
11	τον	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	Επιτάφιο	επιτάφιος	PROPN	NoCm	Case=Acc|Gender=Masc|Number=Sing	10	obj	_	SpaceAfter=No
13	.	.	PUNCT	PTERMP	_	5	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 obl:agent	color:blue
1	Αυτά	αυτός	DET	PnDm	Case=Nom|Gender=Neut|Number=Plur|PronType=Dem	16	nsubj:pass	_	_
2	που	που	PRON	PnRe	Case=Nom|Gender=Neut|Number=Plur|PronType=Rel	4	obj	_	_
3	σου	εγώ	PRON	PnPe	Case=Gen|Number=Sing|Person=2|PronType=Prs	4	iobj	_	_
4	είπε	λέω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	acl:relcl	_	_
5	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	γιος	γιος	NOUN	NoCm	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
7	του	μου	PRON	PnPo	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	6	nmod	_	_
8	για	για	ADP	AsPpSp	_	11	case	_	_
9	τα	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	11	det	_	_
10	δύο	δύο	NUM	NmCd	Case=Acc|Gender=Neut|Number=Plur|NumType=Card	11	nummod	_	_
11	ατυχήματα	ατύχημα	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Plur	4	obl	_	_
12	σε	σε	ADP	AsPpSp	_	13	case	_	_
13	πλοία	πλοίο	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Plur	11	nmod	_	_
14	τους	μου	PRON	PnPo	Case=Gen|Gender=Masc|Number=Plur|Person=3|Poss=Yes|PronType=Prs	13	nmod	_	_
15	μου	εγώ	PRON	PnPe	Case=Gen|Number=Sing|Person=1|PronType=Prs	16	obl:agent	_	_
16	ακούγονται	ακούω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
17	τελείως	τελείως	ADV	AdBa	_	18	advmod	_	_
18	λογικά	λογικά	ADV	AdBa	_	16	advmod	_	SpaceAfter=No
19	.	.	PUNCT	PTERMP	_	16	punct	_	PunctType=Peri

~~~


