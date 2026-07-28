---
layout: base
title:  'Statistics of cc in UD_Greek-GLCII'
udver: '2'
---

## Treebank Statistics: UD_Greek-GLCII: Relations: `cc`

This relation is universal.

415 nodes (4%) are attached to their parents as `cc`.

413 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.39518072289157.

The following 11 pairs of parts of speech are connected with `cc`: <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-CCONJ.html">CCONJ</a></tt> (205; 49% instances), <tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_glcii-pos-CCONJ.html">CCONJ</a></tt> (128; 31% instances), <tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_glcii-pos-CCONJ.html">CCONJ</a></tt> (42; 10% instances), <tt><a href="el_glcii-pos-ADV.html">ADV</a></tt>-<tt><a href="el_glcii-pos-CCONJ.html">CCONJ</a></tt> (17; 4% instances), <tt><a href="el_glcii-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_glcii-pos-CCONJ.html">CCONJ</a></tt> (9; 2% instances), <tt><a href="el_glcii-pos-PRON.html">PRON</a></tt>-<tt><a href="el_glcii-pos-CCONJ.html">CCONJ</a></tt> (8; 2% instances), <tt><a href="el_glcii-pos-NUM.html">NUM</a></tt>-<tt><a href="el_glcii-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="el_glcii-pos-DET.html">DET</a></tt>-<tt><a href="el_glcii-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="el_glcii-pos-PART.html">PART</a></tt>-<tt><a href="el_glcii-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="el_glcii-pos-VERB.html">VERB</a></tt>-<tt><a href="el_glcii-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc	color:blue
1	Ακούω	ακούω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	ράδιο	ράδιο	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	1	obj	_	_
3	και	και	CCONJ	CCONJ	_	4	cc	_	_
4	βλέπω	βλέπω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
5	τηλεόραση	τηλεόραση	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	4	obj	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 cc	color:blue
1	Γνωρίζω	γνωρίζω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	πολύ	πολύ	ADV	ADV	_	3	advmod	_	_
3	καλά	καλά	ADV	ADV	_	1	advmod	_	_
4	τη	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Βιολογία	βιολογία	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	1	obj	_	_
6	και	και	CCONJ	CCONJ	_	8	cc	_	_
7	τη	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	χημεία	χημεία	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	5	conj	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 cc	color:blue
1	Το	ο	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	2	det	_	_
2	εργο	εργο	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	_
3	που	που	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Rel	4	obj	_	_
4	διαλεξαμε	διαλεγω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	2	acl:relcl	_	_
5	ξεκινουσε	ξεκινω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	σ	σε	ADP	ADP	_	8	case	_	_
7	της	ο	DET	DET	Case=Acc|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	επτα	επτα	NUM	NUM	Case=Acc|Gender=Neut|Number=Plur|NumType=Card	5	obl	_	_
9	και	και	CCONJ	CCONJ	_	10	cc	_	_
10	μιση	μισος	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Sing	8	conj	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


