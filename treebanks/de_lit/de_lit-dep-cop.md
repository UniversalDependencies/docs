---
layout: base
title:  'Statistics of cop in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `cop`

This relation is universal.

1057 nodes (3%) are attached to their parents as `cop`.

666 instances of `cop` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.01608325449385.

The following 10 pairs of parts of speech are connected with `cop`: <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (545; 52% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (388; 37% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (45; 4% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (32; 3% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (23; 2% instances), <tt><a href="de_lit-pos-DET.html">DET</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (14; 1% instances), <tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="de_lit-pos-NUM.html">NUM</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="de_lit-pos-ADP.html">ADP</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="de_lit-pos-X.html">X</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 cop	color:blue
1	Die	der	DET	ART	Definite=Def|PronType=Art	2	det	_	_
2	Romane	Roman	NOUN	NN	Case=Nom	6	nsubj	_	_
3	sind	sein	AUX	VAFIN	_	6	cop	_	_
4	die	der	DET	ART	Definite=Def|PronType=Art	6	det	_	_
5	sokratischen	sokratisch	ADJ	ADJA	_	6	amod	_	_
6	Dialoge	Dialog	NOUN	NN	Case=Nom	0	root	_	_
7	unserer	unser	DET	PPOSAT	Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	8	det	_	_
8	Zeit	Zeit	NOUN	NN	_	6	nmod	_	SpaceAfter=No
9	.	.	PUNCT	$.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 cop	color:blue
1	Man	man	PRON	PIS	Case=Nom|Number=Sing|PronType=Ind	5	nsubj	_	_
2	muß	müssen	AUX	VMFIN	_	5	aux	_	_
3	das	der	DET	ART	Definite=Def|PronType=Art	4	det	_	_
4	Brett	Brett	NOUN	NN	Case=Acc	5	obj	_	_
5	bohren	bohren	VERB	VVINF	_	0	root	_	SpaceAfter=No
6	,	,	PUNCT	$,	_	10	punct	_	_
7	wo	wo	ADV	PWAV	_	10	advmod	_	_
8	es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
9	am	an	PART	PTKA	_	10	case	_	_
10	dicksten	dick	ADJ	ADJD	_	4	acl	_	_
11	ist	sein	AUX	VAFIN	_	10	cop	_	SpaceAfter=No
12	.	.	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Wer	wer	PRON	PWS	Number=Sing|PronType=Int,Rel	0	root	_	_
2	ist	sein	AUX	VAFIN	_	1	cop	_	_
3	dieser	dieser	DET	PDAT	PronType=Dem	4	det	_	_
4	Publikum	Publikum	NOUN	NN	Case=Nom	1	nsubj	_	SpaceAfter=No
5	?	?	PUNCT	$.	_	1	punct	_	_

~~~


