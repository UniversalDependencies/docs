---
layout: base
title:  'Statistics of dep in UD_Kiche-IU'
udver: '2'
---

## Treebank Statistics: UD_Kiche-IU: Relations: `dep`

This relation is universal.
There are 2 language-specific subtypes of `dep`: <tt><a href="quc_iu-dep-dep-agr.html">dep:agr</a></tt>, <tt><a href="quc_iu-dep-dep-ss.html">dep:ss</a></tt>.

23 nodes (0%) are attached to their parents as `dep`.

17 instances of `dep` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.47826086956522.

The following 9 pairs of parts of speech are connected with `dep`: <tt><a href="quc_iu-pos-VERB.html">VERB</a></tt>-<tt><a href="quc_iu-pos-VERB.html">VERB</a></tt> (11; 48% instances), <tt><a href="quc_iu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="quc_iu-pos-DET.html">DET</a></tt> (3; 13% instances), <tt><a href="quc_iu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="quc_iu-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="quc_iu-pos-VERB.html">VERB</a></tt>-<tt><a href="quc_iu-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="quc_iu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="quc_iu-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="quc_iu-pos-NUM.html">NUM</a></tt>-<tt><a href="quc_iu-pos-NUM.html">NUM</a></tt> (1; 4% instances), <tt><a href="quc_iu-pos-PART.html">PART</a></tt>-<tt><a href="quc_iu-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="quc_iu-pos-VERB.html">VERB</a></tt>-<tt><a href="quc_iu-pos-AUX.html">AUX</a></tt> (1; 4% instances), <tt><a href="quc_iu-pos-VERB.html">VERB</a></tt>-<tt><a href="quc_iu-pos-PRON.html">PRON</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 dep	color:blue
1	Man	man	PART	_	Polarity=Neg	2	advmod:neg	_	_
2	katkowin	kowin	VERB	_	Aspect=Imp|Number[subj]=Sing|Person[subj]=2|Subcat=Intr|VerbForm=Fin	0	root	_	_
3	taj	taj	AUX	_	Polarity=Neg	2	aux	_	_
4	katchakun	chakun	VERB	_	Aspect=Imp|Number[subj]=Sing|Person[subj]=2|Subcat=Intr|VerbForm=Fin	2	dep	_	_
5	ik	ik	PART	_	_	4	dep:ss	_	_
6	,	,	PUNCT	_	_	9	punct	_	_
7	we	we¹	SCONJ	_	_	9	mark	_	_
8	man	man	PART	_	Polarity=Neg	9	advmod:neg	_	_
9	kʼo	kʼo	PART	_	_	4	advcl	_	_
10	ta	taj	AUX	_	Polarity=Neg	9	aux	_	_
11	ri	ri	DET	_	Definite=Def|PronType=Art	12	det	_	_
12	ajilabʼal	ajilabʼal	NOUN	_	_	9	nsubj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 dep	color:blue
1	Kʼo	kʼo	PART	_	_	0	root	_	_
2	e	e	DET	_	Animacy=Anim|Number=Plur	3	dep	_	_
3	kikʼajol	kʼojolaxel	NOUN	_	Number[psor]=Plur|Person[psor]=3	1	nsubj	_	_
4	le	le	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	achijabʼ	achij	NOUN	_	Number=Plur	3	nmod	_	SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 26 dep	color:blue
1	Ri	ri	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	unan	nan¹	NOUN	_	Number[psor]=Sing|Person[psor]=3	7	nsubj	_	_
3	e	e	CCONJ	_	_	6	cc	_	_
4	ri	ri	DET	_	Definite=Def|PronType=Art	6	det	_	_
5	e	e	DET	_	Animacy=Anim|Number=Plur	6	det	_	_
6	rachalal	achalal	NOUN	_	Number[psor]=Sing|Person[psor]=3	2	conj	_	_
7	kepe	pe	VERB	_	Aspect=Imp|Number[subj]=Plur|Person[subj]=3|Subcat=Intr|VerbForm=Fin	0	root	_	_
8	uloq	uloq	ADV	_	AdvType=Dir	7	advmod	_	_
9	rukʼ	ukʼ	NOUN	_	NounType=Relat|Number[psor]=Sing|Person[psor]=3	7	obl	_	_
10	ri	ri	DET	_	Definite=Def|PronType=Art	11	det	_	_
11	areʼ	areʼ	PRON	_	Number=Sing|Person=3|PronType=Prs	9	nmod	_	SpaceAfter=No
12	,	,	PUNCT	_	_	13	punct	_	_
13	kʼatekʼuriʼ	kʼatekʼuriʼ	ADV	_	_	16	advmod	_	SpaceAfter=No
14	,	,	PUNCT	_	_	13	punct	_	_
15	man	man	PART	_	Polarity=Neg	16	advmod:neg	_	_
16	kekowin	kowin	VERB	_	Aspect=Imp|Number[subj]=Plur|Person[subj]=3|Subcat=Intr|VerbForm=Fin	7	conj	_	_
17	taj	taj	AUX	_	Polarity=Neg	16	aux	_	_
18	keqibʼ	qibʼ	VERB	_	Aspect=Imp|Number[subj]=Plur|Person[subj]=3|Subcat=Intr|VerbForm=Fin	16	xcomp	_	_
19	uk	uk	ADV	_	AdvType=Dir	18	advmod	_	_
20	oq	oq	PART	_	_	19	dep:ss	_	_
21	rukʼ	ukʼ	NOUN	_	NounType=Relat|Number[psor]=Sing|Person[psor]=3	18	obl	_	SpaceAfter=No
22	,	,	PUNCT	_	_	28	punct	_	_
23	rumal	umal	NOUN	_	NounType=Relat|Number[psor]=Sing|Person[psor]=3	28	dep	_	_
24	rech	ech	NOUN	_	NounType=Relat|Number[psor]=Sing|Person[psor]=3	23	dep	_	_
25	ch	chi	ADP	_	_	26	case	_	_
26	e	ech	NOUN	_	NounType=Relat|Number[psor]=Sing|Person[psor]=3	23	dep	_	_
27	e	e	PRON	_	Animacy=Anim|Number=Plur	28	dep:agr	_	_
28	kʼo	kʼo	PART	_	_	18	advcl	_	_
29	sibʼalaj	sibʼalaj	ADJ	_	_	30	amod	_	_
30	winaq	winaq	NOUN	_	_	28	nsubj	_	SpaceAfter=No
31	.	.	PUNCT	_	_	7	punct	_	_

~~~


