---
layout: base
title:  'Statistics of acl in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="el_gud-dep-acl-relcl.html">acl:relcl</a></tt>.

61 nodes (0%) are attached to their parents as `acl`.

60 instances of `acl` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.72131147540984.

The following 7 pairs of parts of speech are connected with `acl`: <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (48; 79% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (4; 7% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-AUX.html">AUX</a></tt> (3; 5% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl	color:blue
1	Αφήνει	αφήνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	την	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	ερώτηση	ερώτηση	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	1	obj	_	_
4	να	να	SCONJ	CjSb	_	5	mark	_	_
5	κρέμεται	κρεμώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	3	acl	_	_
6	και	και	CCONJ	CjCo	_	7	cc	_	_
7	πηγαίνει	πηγαίνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
8	σ	σε	ADP	AsPpSp	_	10	case	_	_
9	την	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	κουζίνα	κουζίνα	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
11	.	.	PUNCT	PTERMP	PunctType=Peri	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl	color:blue
1	Είμαστε	είμαι	AUX	VbMn	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
2	έτοιμοι	έτοιμος	ADJ	AjBa	Case=Nom|Gender=Masc|Number=Plur	1	xcomp	_	_
3	να	να	SCONJ	PtSj	_	4	mark	_	_
4	σηκωθούμε	σηκώνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Pass	2	acl	_	_
5	,	,	PUNCT	PUNCT	PunctType=Comm	7	punct	_	_
6	όταν	όταν	SCONJ	CjSb	_	7	mark	_	_
7	χτυπάει	χτυπώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	advcl	_	_
8	το	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	9	det	_	_
9	τηλέφωνο	τηλέφωνο	NOUN	NoCm	Case=Nom|Gender=Neut|Number=Sing	7	obj	_	_
10	του	ο	DET	AtDf	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	υπαρχηγού	υπαρχηγός	NOUN	NoCm	Case=Gen|Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	PTERMP	PunctType=Peri	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 acl	color:blue
1	Μην	μην	PART	PtNg	Polarity=Neg	2	advmod	_	_
2	έχεις	έχω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	καμία	κανένας	DET	PnId	Case=Acc|Gender=Fem|Number=Sing|PronType=Neg	4	det	_	_
4	αμφιβολία	αμφιβολία	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	_
5	ότι	ότι	SCONJ	CjSb	_	11	mark	_	_
6	η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	εταιρεία	εταιρεία	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Sing	11	nsubj	_	_
8	που	που	PRON	PnRe	Case=Nom|Gender=Fem|Number=Sing|PronType=Rel	9	nsubj	_	_
9	συνεργάζεται	συνεργάζομαι	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	7	acl:relcl	_	_
10	είναι	είμαι	AUX	VbMn	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	acl	_	_
11	καθαρή	καθαρός	ADJ	AjBa	Case=Nom|Gender=Fem|Number=Sing	4	acl	_	_
12	και	και	CCONJ	CjCo	_	13	cc	_	_
13	νομότυπη	νομότυπος	ADJ	AjBa	Case=Nom|Gender=Fem|Number=Sing	11	conj	_	SpaceAfter=No
14	.	.	PUNCT	PTERMP	PunctType=Peri	2	punct	_	_

~~~


