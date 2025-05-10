---
layout: base
title:  'Statistics of advcl in UD_Esperanto-Prago'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Prago: Relations: `advcl`

This relation is universal.

5 nodes (1%) are attached to their parents as `advcl`.

3 instances of `advcl` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 14.4.

The following 2 pairs of parts of speech are connected with `advcl`: <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_prago-pos-VERB.html">VERB</a></tt> (4; 80% instances), <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_prago-pos-ADJ.html">ADJ</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 18 advcl	color:blue
1	Ĉiu	ĉiu	DET	_	Case=Nom|Number=Sing|PronType=Tot	2	det	_	_
2	lingvo	lingvo	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	_
3	liberigas	liberigi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	kaj	kaj	CCONJ	_	_	5	cc	_	_
5	malliberigas	malliberigi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	conj	_	_
6	siajn	sia	PRON	_	Case=Acc|Number=Plur|PronType=Prs|Reflex=Yes	7	det	_	_
7	anojn	ano	NOUN	_	Case=Acc|Number=Plur	5	obj	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	donante	doni	VERB	_	Tense=Pres|VerbForm=Part|Voice=Act	3	advcl	_	_
10	al	al	ADP	_	_	11	case	_	_
11	ili	ili	PRON	_	Case=Nom|Number=Plur|PronType=Prs	9	obl	_	_
12	la	la	DET	_	Definite=Def|PronType=Art	13	det	_	_
13	povon	povo	NOUN	_	Case=Acc|Number=Sing	9	obj	_	_
14	komuniki	komuniki	VERB	_	VerbForm=Inf	13	acl	_	_
15	inter	inter	ADP	_	_	16	case	_	_
16	si	si	PRON	_	Case=Nom|Number=Sing|PronType=Prs|Reflex=Yes	14	obl	_	SpaceAfter=No
17	,	,	PUNCT	_	_	18	punct	_	_
18	barante	bari	VERB	_	Tense=Pres|VerbForm=Part|Voice=Act	3	advcl	_	_
19	la	la	DET	_	Definite=Def|PronType=Art	20	det	_	_
20	komunikadon	komunikado	NOUN	_	Case=Acc|Number=Sing	18	obj	_	_
21	kun	kun	ADP	_	_	22	case	_	_
22	aliaj	alia	PRON	_	Case=Nom|Number=Plur|PronType=Prs	20	nmod	_	SpaceAfter=No
23	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 10 advcl	color:blue
1	Kvankam	Kvankam	SCONJ	_	_	14	mark	_	SpaceAfter=No
2	,	,	PUNCT	_	_	5	punct	_	_
3	kiel	kiel	ADP	_	_	5	case	_	_
4	ĉiu	ĉiu	DET	_	Case=Nom|Number=Sing|PronType=Tot	5	det	_	_
5	lingvo	lingvo	NOUN	_	Case=Nom|Number=Sing	10	nmod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	10	punct	_	_
7	Esperanto	Esperanto	PROPN	_	Case=Nom|Number=Sing	10	nsubj	_	_
8	ne	ne	ADV	_	_	10	advmod	_	_
9	estas	esti	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	perfekta	perfekta	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	14	advcl	_	SpaceAfter=No
11	,	,	PUNCT	_	_	14	punct	_	_
12	ĝi	ĝi	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	_
13	ege	ege	ADV	_	_	14	advmod	_	_
14	superas	superi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
15	ĉiun	ĉiu	DET	_	Case=Acc|Number=Sing|PronType=Tot	16	det	_	_
16	rivalon	rivalo	NOUN	_	Case=Acc|Number=Sing	14	obj	_	_
17	en	en	ADP	_	_	19	case	_	_
18	la	la	DET	_	Definite=Def|PronType=Art	19	det	_	_
19	sfero	sfero	NOUN	_	Case=Nom|Number=Sing	16	nmod	_	_
20	de	de	ADP	_	_	23	case	_	_
21	egaleca	egaleca	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	23	amod	_	_
22	tutmonda	tutmonda	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	23	amod	_	_
23	komunikado	komunikado	NOUN	_	Case=Nom|Number=Sing	19	nmod	_	SpaceAfter=No
24	.	.	PUNCT	_	_	14	punct	_	_

~~~


