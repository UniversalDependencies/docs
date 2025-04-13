---
layout: base
title:  'Statistics of obl:arg in UD_Low_Saxon-LSDC'
udver: '2'
---

## Treebank Statistics: UD_Low_Saxon-LSDC: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="nds_lsdc-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="nds_lsdc-dep-obl-agent.html">obl:agent</a></tt>.

28 nodes (0%) are attached to their parents as `obl:arg`.

16 instances of `obl:arg` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.75.

The following 5 pairs of parts of speech are connected with `obl:arg`: <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt> (19; 68% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (5; 18% instances), <tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt> (2; 7% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 obl:arg	color:blue
1	»	»	PUNCT	_	_	5	punct	_	SpaceAfter=No
2	Kasper	Kasper	PROPN	_	Number=Sing	5	vocative	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	ik	ik	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	lemma_gml=ik
5	segge	seggen	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	lemma_gml=seggen
6	dy	du	PRON	_	Case=Acc,Dat|Number=Sing|Person=2|PronType=Prs	5	obl:arg	_	lemma_gml=dû|SpaceAfter=No
7	,	,	PUNCT	_	_	5	punct	_	_
8	blyv	blyven	VERB	_	Mood=Imp|Number=Sing	5	ccomp	_	lemma_gml=blîven
9	dårvan	dårvan	ADV	_	_	8	advmod	_	lemma_gml=dârvan
10	af	af	ADP	_	_	8	compound:prt	_	lemma_gml=af|SpaceAfter=No
11	!	!	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 20 obl:arg	color:blue
1	Dat	de	DET	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	2	det	_	lemma_gml=dê,dê,dat
2	koorn	koorn	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	3	nsubj	_	lemma_gml=kōrn
3	ryp	rypen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	lemma_gml=rîpen
4	to	to	ADP	_	_	3	compound:prt	_	lemma_gml=tô|SpaceAfter=No
5	,	,	PUNCT	_	_	3	punct	_	_
6	up	up	ADP	_	AdpType=Prep	8	case	_	lemma_gml=uppe
7	houge	houg	ADJ	_	Case=Acc,Dat|Degree=Pos|Gender=Fem|Number=Plur	8	amod	_	lemma_gml=hô
8	koppelen	koppel	NOUN	_	Case=Acc,Dat|Gender=Fem|Number=Plur	9	obl	_	lemma_gml=koppele
9	steyk	steaken	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	3	conj	_	lemma_gml=stēken
10	de	de	DET	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	lemma_gml=dê,dê,dat
11	roggen	rogge	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	lemma_gml=rogge
12	al	al	ADV	_	_	9	advmod	_	lemma_gml=al
13	de	de	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	lemma_gml=dê,dê,dat
14	strougeale	strougeal	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	15	amod	_	lemma_gml=strôgēl
15	vane	vane	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	9	obj	_	lemma_gml=vāne
16	uut	uut	ADP	_	_	9	compound:prt	_	lemma_gml=ût
17	un	un	CCONJ	_	_	18	cc	_	lemma_gml=unde
18	wink	winken	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	9	conj	_	lemma_gml=winken
19	den	de	DET	_	Case=Acc,Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	lemma_gml=dê,dê,dat
20	maier	maier	NOUN	_	Case=Acc,Dat|Gender=Masc|Number=Sing	18	obl:arg	_	lemma_gml=meyer|SpaceAfter=No
21	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl:arg	color:blue
1	Em	hee	PRON	_	Case=Acc,Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obl:arg	_	lemma_gml=hê,sê,et
2	weer	weasen	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	3	cop	_	lemma_gml=wēsen
3	bange	bange	ADJ	_	Degree=Pos	0	root	_	lemma_gml=bange
4	tomode	tomode	ADV	_	_	3	advmod	_	lemma_gml=tômôde|SpaceAfter=No
5	.	.	PUNCT	_	_	3	punct	_	_

~~~


