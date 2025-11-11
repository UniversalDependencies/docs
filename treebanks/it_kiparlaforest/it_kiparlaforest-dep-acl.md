---
layout: base
title:  'Statistics of acl in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="it_kiparlaforest-dep-acl-relcl.html">acl:relcl</a></tt>.

34 nodes (0%) are attached to their parents as `acl`.

33 instances of `acl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.02941176470588.

The following 10 pairs of parts of speech are connected with `acl`: <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (17; 50% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt> (3; 9% instances), <tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (3; 9% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (3; 9% instances), <tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="it_kiparlaforest-pos-ADV.html">ADV</a></tt>-<tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="it_kiparlaforest-pos-ADV.html">ADV</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 acl	color:blue
1	non	non	ADV	_	PronType=Neg	2	advmod	_	Begin=1265.263|KID=810-0
2	fare	fare	VERB	_	VerbForm=Inf	0	root	_	KID=810-1
3	quella	quello	DET	_	Gender=Fem|Number=Sing|PronType=Dem	4	det	_	KID=810-2
4	faccia	faccia	NOUN	_	Gender=Fem|Number=Sing	2	obj	_	KID=810-3
5	da	da	ADP	_	_	6	reparandum	_	End=1266.305|KID=810-4
6	che	che	SCONJ	_	_	10	mark	_	Begin=1266.763|KID=811-0
7	non	non	ADV	_	_	10	advmod	_	KID=811-1
8	te	te	PRON	_	PronType=Prs	10	iobj	_	KID=811-2
9	ne	ne	PRON	_	PronType=Prs	10	expl	_	KID=811-3
10	frega	fregare	VERB	_	_	4	acl	_	KID=811-4
11	un	un	DET	_	PronType=Art	12	det	_	KID=811-5
12	cazzo	cazzo	NOUN	_	_	10	obj	_	KID=811-6|OverlappingGroup=143
13	di	di	ADP	_	_	15	case	_	KID=811-7a
14	la	il	DET	_	PronType=Art	15	det	_	KID=811-7b
15	vita	vita	NOUN	_	_	10	dislocated	_	End=1268.849|KID=811-8|OverlappingGroup=143

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl	color:blue
1	cioè	cioè	CCONJ	_	_	4	discourse	_	Begin=1146.255|KID=289-0
2	io	io	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	KID=289-1
3	non	non	ADV	_	PronType=Neg	4	advmod	_	KID=289-2
4	ho	avere	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	KID=289-3
5	ricordi	ricordo	NOUN	_	Gender=Masc|Number=Sing	4	obj	_	KID=289-4
6	di	di	ADP	_	_	9	case	_	KID=289-5
7	quando	quando	SCONJ	_	_	9	mark	_	KID=289-6
8	son	essere	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	KID=289-7
9	piccola	piccolo	ADJ	_	Gender=Fem|Number=Sing	5	acl	_	KID=289-8|Prolonged=Yes
10	che	che	SCONJ	_	_	11	mark	_	KID=289-9
11	uscivo	uscire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	9	ccomp	_	KID=289-10
12	con	con	ADP	_	_	14	case	_	KID=289-11
13	i	il	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	14	det	_	KID=289-12
14	miei	miei	PRON	_	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	11	obl	_	KID=289-13
15	in	in	ADP	_	_	16	case	_	KID=289-14
16	centro	centro	NOUN	_	Gender=Masc|Number=Sing	11	obl	_	KID=289-15
17	a	a	ADP	_	_	18	case	_	KID=289-16
18	[TOWN_NAME]	@nomepaese	PROPN	_	_	16	nmod	_	Anonymized=Yes|End=1152.7|KID=289-17
19	perché	perché	SCONJ	_	_	4	advcl	_	Begin=1153.345|KID=291-0|OverlappingGroup=56
20	non	non	ADV	_	PronType=Neg	19	advmod	_	KID=291-1|Prolonged=Yes
21	ma	ma	CCONJ	_	_	22	cc	_	KID=291-2
22	pochissimi	pochissimare	ADJ	_	Gender=Masc|Number=Plur|PronType=Ind	5	conj	_	KID=291-3
23	perché	perché	ADV	_	_	4	advcl	_	KID=291-4
24	non	non	ADV	_	PronType=Neg	23	advmod	_	End=1156.7|KID=291-5|OverlappingGroup=57|Prolonged=Yes

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl	color:blue
1	perché	perché	SCONJ	_	_	3	mark	_	Begin=1566.197|KID=984-0
2	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	KID=984-1
3	quella	quello	PRON	_	Gender=Fem|Number=Sing|PronType=Dem	0	root	_	KID=984-2
4	che	che	PRON	_	PronType=Rel	5	nsubj	_	KID=984-3|Prolonged=Yes
5	cosa	cosare	VERB	_	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	acl	_	KID=984-4
6	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	KID=984-5
7	tiro~	tiro~	X	_	_	5	obj	_	End=1568.138|Interrupted=Yes|KID=984-6|OverlappingGroup=168

~~~


