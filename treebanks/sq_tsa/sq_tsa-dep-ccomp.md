---
layout: base
title:  'Statistics of ccomp in UD_Albanian-TSA'
udver: '2'
---

## Treebank Statistics: UD_Albanian-TSA: Relations: `ccomp`

This relation is universal.

4 nodes (0%) are attached to their parents as `ccomp`.

4 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.5.

The following 3 pairs of parts of speech are connected with `ccomp`: <tt><a href="sq_tsa-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_tsa-pos-VERB.html">VERB</a></tt> (2; 50% instances), <tt><a href="sq_tsa-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_tsa-pos-ADJ.html">ADJ</a></tt> (1; 25% instances), <tt><a href="sq_tsa-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp	color:blue
1	Kjo	kjo	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	3	nsubj	3:nsubj	_
2	u	ata	PRON	_	Case=Dat|Number=Plur|Person=3|PronType=Prs	3	expl	3:expl	_
3	lejon	lejoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	0	root	0:root	_
4	atyre	ata	PRON	_	Case=Dat|Gender=Masc|Number=Plur|PronType=Emp	3	iobj	3:iobj	_
5	të	të	PART	_	_	6	mark	6:mark	_
6	ndërtojnë	ndërtoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	3	ccomp	3:ccomp	_
7	fshatra	fshat	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|NounType=Het|Number=Plur	6	obj	6:obj	_
8	moderne	modern	ADJ	_	Gender=Fem|Number=Plur	7	amod	7:amod	_
9	dhe	dhe	CCONJ	_	_	11	cc	11:cc	_
10	të	i	DET	_	Gender=Fem	11	det:adj	11:det:adj	_
11	përhershme	përhershëm	ADJ	_	Gender=Fem|Number=Plur	8	conj	8:conj	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	Dashuria	dashuri	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	2	nsubj	5:nsubj|7:nsubj	_
2	mendohet	mendoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	0:root	_
3	zakonisht	zakonisht	ADV	_	_	2	advmod	2:advmod	_
4	e	i	DET	_	Gender=Fem	5	det:adj	5:det:adj	_
5	pamundshme	pamundshëm	ADJ	_	Gender=Fem|Number=Sing	2	ccomp	2:csubj	_
6	të	të	PART	_	_	7	mark	7:mark	_
7	përkufizohet	përkufizoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	5	xcomp	5:xcomp	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp	color:blue
1	Kam	kam	VERB	_	_	0	root	0:root	_
2	kujdesin	kujdes	NOUN	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	1	compound	1:det	_
3	të	të	PART	_	_	4	mark	4:mark	_
4	përmend	përmend	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	1	xcomp	1:xcomp	_
5	se	se	SCONJ	_	_	8	mark	8:mark	_
6	lumturia	lumturi	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	8	nsubj	8:nsubj	_
7	është	jam	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	8	cop	8:cop	_
8	kuptim	kuptim	NOUN	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	4	ccomp	4:ccomp	_
9	abstrakt	abstrakt	ADJ	_	Gender=Masc|Number=Sing	8	amod	8:amod	_
10	dhe	dhe	CCONJ	_	_	11	cc	11:cc	_
11	personal	personal	ADJ	_	Gender=Masc|Number=Sing	9	conj	9:conj	SpaceAfter=No
12	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


