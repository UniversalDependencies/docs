---
layout: base
title:  'Statistics of acl:relcl in UD_Greek-Cretan'
udver: '2'
---

## Treebank Statistics: UD_Greek-Cretan: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="el_cretan-dep-acl.html">acl</a></tt>.

34 nodes (1%) are attached to their parents as `acl:relcl`.

33 instances of `acl:relcl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.41176470588235.

The following 8 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cretan-pos-VERB.html">VERB</a></tt> (19; 56% instances), <tt><a href="el_cretan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_cretan-pos-VERB.html">VERB</a></tt> (6; 18% instances), <tt><a href="el_cretan-pos-DET.html">DET</a></tt>-<tt><a href="el_cretan-pos-VERB.html">VERB</a></tt> (3; 9% instances), <tt><a href="el_cretan-pos-PRON.html">PRON</a></tt>-<tt><a href="el_cretan-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="el_cretan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_cretan-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cretan-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:relcl	color:blue
1	Και	και	CCONJ	CjCo	_	3	cc	_	_
2	τη	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	στιγμή	στιγμή	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	9	obl	_	_
4	που	που	ADV	PnRe	PronType=Rel	5	advmod	_	_
5	'πέρνα	περνώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
6	από	από	ADP	AsPpSp	_	7	case	_	_
7	μπρος	μπρος	ADV	AdBa	_	5	obl	_	_
8	τωνε	εγώ	PRON	PnPe	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	7	nmod	_	MGloss=they.GEN-euphonic|MSeg=των-ε
9	αρχίξανε	αρχίζω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
10	και	και	CCONJ	CjCo	_	11	cc	_	_
11	γκαρίζανε	γκαρίζω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	conj	_	SpaceAfter=No
12	.	.	PUNCT	PTERMP	_	9	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 acl:relcl	color:blue
1	«	«	PUNCT	OPUNCT	_	5	punct	_	PunctType=Quot
2	Γι'	για	ADP	AsPpSp	_	3	case	_	_
3	αυτό	αυτός	DET	PnDm	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	5	obl	_	_
4	μου	εγώ	PRON	PnPe	Case=Gen|Number=Sing|Person=1|PronType=Prs	5	obl	_	_
5	'κανες	κάνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	9	ccomp	_	_
6	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	χουβαρντά	χουβαρντάς	NOUN	NoCm	Case=Acc|Gender=Masc|Number=Sing	5	obj	_	_
8	»	»	PUNCT	CPUNCT	_	5	punct	_	PunctType=Quot
9	είπε	λέω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
10	κι	και	CCONJ	CjCo	_	12	cc	_	_
11	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	Προκόπης	Προκόπης	PROPN	NoPr	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
13	,	,	PUNCT	PUNCT	_	15	punct	_	PunctType=Comm
14	που	που	PRON	PnRe	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	15	nsubj	_	_
15	θυμήθηκε	θυμάμαι	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	12	acl:relcl	_	_
16	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	17	det	_	_
17	περιστατικό	περιστατικό	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	15	obj	_	_
18	κι	και	CCONJ	CjCo	_	19	cc	_	_
19	ήσκασε	σκάω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	15	conj	_	mwe=1:VID
20	σ	σε	ADP	AsPpSp	_	22	case	_	mwe=1
21	τα	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	22	det	_	mwe=1
22	γέλια	γέλιο	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Plur	19	obl	_	mwe=1
23	.	.	PUNCT	PTERMP	_	9	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl:relcl	color:blue
1	Το	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	2	det	_	_
2	μόνο	μόνος	DET	AjBa	Case=Nom|Gender=Neut|Number=Sing|PronType=Ind	0	root	_	_
3	που	που	PRON	PnRe	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	5	obj	_	_
4	τ'	εγώ	PRON	PnPe	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	iobj	_	_
5	άφηκε	αφήνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	acl:relcl	_	_
6	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	αφέης	αφέης	NOUN	NoCm	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
8	του	εγώ	PRON	PnPo	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	7	nsubj	_	_
9	ήτανε	είμαι	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	2	cop	_	_
10	μια	ένας	DET	AtId	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	σκρόφα	σκρόφα	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	_
12	.	.	PUNCT	PTERMP	_	2	punct	_	PunctType=Peri

~~~


