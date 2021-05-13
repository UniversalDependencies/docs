---
layout: base
title:  'Statistics of vocative in UD_Kiche-IU'
udver: '2'
---

## Treebank Statistics: UD_Kiche-IU: Relations: `vocative`

This relation is universal.

13 nodes (0%) are attached to their parents as `vocative`.

10 instances of `vocative` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.38461538461538.

The following 4 pairs of parts of speech are connected with `vocative`: <tt><a href="quc_iu-pos-VERB.html">VERB</a></tt>-<tt><a href="quc_iu-pos-NOUN.html">NOUN</a></tt> (10; 77% instances), <tt><a href="quc_iu-pos-INTJ.html">INTJ</a></tt>-<tt><a href="quc_iu-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="quc_iu-pos-PART.html">PART</a></tt>-<tt><a href="quc_iu-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="quc_iu-pos-VERB.html">VERB</a></tt>-<tt><a href="quc_iu-pos-PROPN.html">PROPN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 vocative	color:blue
1	Ixoq	ixoq	NOUN	_	_	3	vocative	_	_
2	tajin	tajin	AUX	_	Aspect=Prog	3	aux	_	_
3	ktchʼabʼex	chʼabʼej	VERB	_	Aspect=Imp|Number[subj]=Plur|Person[subj]=3|Subcat=Tran|VerbForm=Fin|Voice=Pass	0	root	_	_
4	ik	ik	PART	_	_	3	dep:ss	_	_
5	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 vocative	color:blue
1	Saqarik	saqarik	INTJ	_	_	0	root	_	_
2	iwonojel	onojel	NOUN	_	NounType=Relat|Number[psor]=Plur|Person[psor]=2	1	vocative	_	SpaceAfter=No
3	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 vocative	color:blue
1	Qonojel	onojel	NOUN	_	NounType=Relat|Number[psor]=Plur|Person[psor]=1	7	dislocated	_	_
2	waʼ	waʼ	PRON	_	PronType=Dem	1	nmod	_	_
3	pa	pa	ADP	_	_	4	case	_	_
4	qʼabʼ	qʼabʼ	NOUN	_	_	7	obl	_	_
5	la	la	PRON	_	Clitic=Yes|Polite=Form|PronType=Prs	4	det	_	_
6	oj	oj	PRON	_	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	7	dep:agr	_	_
7	kʼo	kʼo	PART	_	_	0	root	_	_
8	wi	wi	PART	_	Focus=Yes	7	discourse	_	_
9	nudyos	Dyos	NOUN	_	Number[psor]=Sing|Person[psor]=1	7	vocative	_	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


