---
layout: base
title:  'Statistics of discourse in UD_Kiche-IU'
udver: '2'
---

## Treebank Statistics: UD_Kiche-IU: Relations: `discourse`

This relation is universal.

150 nodes (1%) are attached to their parents as `discourse`.

104 instances of `discourse` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.73333333333333.

The following 9 pairs of parts of speech are connected with `discourse`: <tt><a href="quc_iu-pos-VERB.html">VERB</a></tt>-<tt><a href="quc_iu-pos-PART.html">PART</a></tt> (115; 77% instances), <tt><a href="quc_iu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="quc_iu-pos-PART.html">PART</a></tt> (8; 5% instances), <tt><a href="quc_iu-pos-PART.html">PART</a></tt>-<tt><a href="quc_iu-pos-PART.html">PART</a></tt> (8; 5% instances), <tt><a href="quc_iu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="quc_iu-pos-PART.html">PART</a></tt> (6; 4% instances), <tt><a href="quc_iu-pos-VERB.html">VERB</a></tt>-<tt><a href="quc_iu-pos-AUX.html">AUX</a></tt> (6; 4% instances), <tt><a href="quc_iu-pos-ADV.html">ADV</a></tt>-<tt><a href="quc_iu-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="quc_iu-pos-PRON.html">PRON</a></tt>-<tt><a href="quc_iu-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="quc_iu-pos-VERB.html">VERB</a></tt>-<tt><a href="quc_iu-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="quc_iu-pos-VERB.html">VERB</a></tt>-<tt><a href="quc_iu-pos-INTJ.html">INTJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
1	Are	are	PART	_	Focus=Yes	6	discourse	_	_
2	ri	ri	DET	_	Definite=Def|PronType=Art	3	det	_	_
3	utat	tat	NOUN	_	Number[psor]=Sing|Person[psor]=3	6	nsubj	_	_
4	ri	ri	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	Max	Max	PROPN	_	Gender=Masc	3	nmod	_	_
6	kpet	pet	VERB	_	Aspect=Imp|Number[subj]=Sing|Person[subj]=3|Subcat=Intr|VerbForm=Fin	0	root	_	_
7	ik	ik	PART	_	_	6	dep:ss	_	_
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 discourse	color:blue
1	We	we¹	SCONJ	_	_	3	mark	_	_
2	kʼu	kʼut	PART	_	_	3	discourse	_	_
3	xok	ok	VERB	_	Aspect=Perf|Number[subj]=Sing|Person[subj]=3|Subcat=Intr|VerbForm=Fin	0	root	_	_
4	ik	ik	PART	_	_	3	dep:ss	_	_
5	,	,	PUNCT	_	_	9	punct	_	_
6	we	we¹	SCONJ	_	_	9	mark	_	_
7	kʼ	kʼut	PART	_	_	9	discourse	_	_
8	na	na	PART	_	Polarity=Neg	9	advmod:neg	_	_
9	xok	ok	VERB	_	Aspect=Perf|Number[subj]=Sing|Person[subj]=3|Subcat=Intr|VerbForm=Fin	3	conj	_	_
10	ta	taj	AUX	_	Polarity=Neg	9	aux	_	_
11	pa	pa	ADP	_	_	14	case	_	_
12	r	ri	DET	_	Definite=Def|PronType=Art	14	det	_	_
13	sin	sin	PART	_	_	14	discourse	_	_
14	kijolom	jolom	NOUN	_	Number[psor]=Plur|Person[psor]=3	9	obl	_	SpaceAfter=No
15	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 discourse	color:blue
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


