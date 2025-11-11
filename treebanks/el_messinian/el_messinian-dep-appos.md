---
layout: base
title:  'Statistics of appos in UD_Greek-Messinian'
udver: '2'
---

## Treebank Statistics: UD_Greek-Messinian: Relations: `appos`

This relation is universal.

5 nodes (1%) are attached to their parents as `appos`.

5 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.6.

The following 5 pairs of parts of speech are connected with `appos`: <tt><a href="el_messinian-pos-ADV.html">ADV</a></tt>-<tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="el_messinian-pos-DET.html">DET</a></tt>-<tt><a href="el_messinian-pos-ADJ.html">ADJ</a></tt> (1; 20% instances), <tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="el_messinian-pos-PRON.html">PRON</a></tt>-<tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="el_messinian-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_messinian-pos-PROPN.html">PROPN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 appos	color:blue
1	Όχι	όχι	INTJ	AdBa	Polarity=Neg	5	discourse	_	end_char=548|start_char=545
2	,	,	PUNCT	PUNCT	_	1	punct	_	end_char=550|start_char=549
3	δεν	δεν	PART	PtNg	Polarity=Neg	5	advmod	_	end_char=554|start_char=551
4	έχει	έχω	AUX	VbMn	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	end_char=559|start_char=555
5	τύχει	τυχαίνω	VERB	VbMn	Aspect=Perf|VerbForm=Inf|Voice=Act	0	root	_	end_char=565|start_char=560
6	να	να	SCONJ	PtSj	_	7	mark	_	end_char=568|start_char=566
7	πάω	πηγαίνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	5	csubj	_	end_char=572|start_char=569
8	από	από	ADP	AsPpSp	_	9	case	_	end_char=576|start_char=573
9	‘κεί	‘κεί	ADV	VbMn	_	7	advmod	_	end_char=581|start_char=577
10	,	,	PUNCT	PUNCT	_	13	punct	_	end_char=583|start_char=582
11	σε	σε	ADP	AsPpSp	_	13	case	_	_
12	τη	ο	DET	AsPpSp	Case=Acc|Gender=Fem|Number=Sing|PronType=Art	13	det	_	end_char=587|start_char=584
13	γυναίκα	γυναίκα	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	9	appos	_	end_char=595|start_char=588
14	.	.	PUNCT	PTERMP	_	5	punct	_	end_char=597|start_char=596

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 appos	color:blue
1	Όλες	όλος	DET	AjBa	Case=Nom|Gender=Fem|Number=Plur|PronType=Tot	3	det	_	end_char=602|start_char=598
2	οι	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	3	det	_	end_char=605|start_char=603
3	καταβολές	καταβολή	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Plur	0	root	_	end_char=615|start_char=606
4	γιαγιάδες	γιαγιά	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Plur	3	appos	_	end_char=625|start_char=616
5	,	,	PUNCT	PUNCT	_	6	punct	_	end_char=627|start_char=626
6	μαμάδες	μαμά	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Plur	4	conj	_	end_char=635|start_char=628
7	και	και	CCONJ	CjCo	_	9	cc	_	end_char=639|start_char=636
8	όλα	όλος	DET	AjBa	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	9	det	_	end_char=643|start_char=640
9	αυτά	αυτός	DET	PnDm	Case=Nom|Gender=Neut|Number=Plur|PronType=Dem	4	conj	_	end_char=648|start_char=644
10	τα	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	11	det	_	end_char=651|start_char=649
11	τραγικά	τραγικός	ADJ	AjBa	Case=Nom|Gender=Neut|Number=Plur	9	appos	_	end_char=659|start_char=652
12	που	που	PRON	PnRe	Case=Acc|Gender=Neut|Number=Plur|PronType=Rel	13	obj	_	end_char=663|start_char=660
13	θεωρώ	θεωρώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	11	acl:relcl	_	end_char=669|start_char=664
14	εγώ	εγώ	PRON	NoCm	Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj	_	end_char=673|start_char=670
15	για	για	ADP	AsPpSp	_	16	case	_	end_char=677|start_char=674
16	μένα	εγώ	PRON	PnPe	Case=Acc|Number=Sing|Person=1|PronType=Prs	13	obl	_	end_char=682|start_char=678
17	,	,	PUNCT	PUNCT	_	19	punct	_	end_char=684|start_char=683
18	ό,τι	ό,τι	DET	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	19	det	_	_
19	χειρότερο	κακός	ADJ	AjCp	Case=Nom|Degree=Cmp|Gender=Neut|Number=Sing	13	xcomp	_	end_char=701|start_char=692
20	.	.	PUNCT	PTERMP	_	3	punct	_	end_char=703|start_char=702

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 appos	color:blue
1	Όλες	όλος	DET	AjBa	Case=Nom|Gender=Fem|Number=Plur|PronType=Tot	3	det	_	end_char=602|start_char=598
2	οι	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	3	det	_	end_char=605|start_char=603
3	καταβολές	καταβολή	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Plur	0	root	_	end_char=615|start_char=606
4	γιαγιάδες	γιαγιά	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Plur	3	appos	_	end_char=625|start_char=616
5	,	,	PUNCT	PUNCT	_	6	punct	_	end_char=627|start_char=626
6	μαμάδες	μαμά	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Plur	4	conj	_	end_char=635|start_char=628
7	και	και	CCONJ	CjCo	_	9	cc	_	end_char=639|start_char=636
8	όλα	όλος	DET	AjBa	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	9	det	_	end_char=643|start_char=640
9	αυτά	αυτός	DET	PnDm	Case=Nom|Gender=Neut|Number=Plur|PronType=Dem	4	conj	_	end_char=648|start_char=644
10	τα	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	11	det	_	end_char=651|start_char=649
11	τραγικά	τραγικός	ADJ	AjBa	Case=Nom|Gender=Neut|Number=Plur	9	appos	_	end_char=659|start_char=652
12	που	που	PRON	PnRe	Case=Acc|Gender=Neut|Number=Plur|PronType=Rel	13	obj	_	end_char=663|start_char=660
13	θεωρώ	θεωρώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	11	acl:relcl	_	end_char=669|start_char=664
14	εγώ	εγώ	PRON	NoCm	Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj	_	end_char=673|start_char=670
15	για	για	ADP	AsPpSp	_	16	case	_	end_char=677|start_char=674
16	μένα	εγώ	PRON	PnPe	Case=Acc|Number=Sing|Person=1|PronType=Prs	13	obl	_	end_char=682|start_char=678
17	,	,	PUNCT	PUNCT	_	19	punct	_	end_char=684|start_char=683
18	ό,τι	ό,τι	DET	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	19	det	_	_
19	χειρότερο	κακός	ADJ	AjCp	Case=Nom|Degree=Cmp|Gender=Neut|Number=Sing	13	xcomp	_	end_char=701|start_char=692
20	.	.	PUNCT	PTERMP	_	3	punct	_	end_char=703|start_char=702

~~~


