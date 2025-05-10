---
layout: base
title:  'Statistics of case in UD_Esperanto-Prago'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Prago: Relations: `case`

This relation is universal.

121 nodes (14%) are attached to their parents as `case`.

121 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.98347107438017.

The following 7 pairs of parts of speech are connected with `case`: <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-ADP.html">ADP</a></tt> (103; 85% instances), <tt><a href="eo_prago-pos-PRON.html">PRON</a></tt>-<tt><a href="eo_prago-pos-ADP.html">ADP</a></tt> (8; 7% instances), <tt><a href="eo_prago-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eo_prago-pos-ADP.html">ADP</a></tt> (3; 2% instances), <tt><a href="eo_prago-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eo_prago-pos-ADP.html">ADP</a></tt> (3; 2% instances), <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_prago-pos-ADP.html">ADP</a></tt> (2; 2% instances), <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="eo_prago-pos-NUM.html">NUM</a></tt>-<tt><a href="eo_prago-pos-ADP.html">ADP</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 case	color:blue
1	Manifesto	manifesto	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
2	de	de	ADP	_	_	3	case	_	_
3	Prago	Prago	PROPN	_	Case=Nom|Number=Sing	1	nmod	_	_
4	de	de	ADP	_	_	6	case	_	_
5	la	la	DET	_	Definite=Def|PronType=Art	6	det	_	_
6	movado	movado	NOUN	_	Case=Nom|Number=Sing	3	nmod	_	_
7	por	por	ADP	_	_	10	case	_	_
8	la	la	DET	_	Definite=Def|PronType=Art	10	det	_	_
9	internacia	internacia	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	10	amod	_	_
10	lingvo	lingvo	NOUN	_	Case=Nom|Number=Sing	6	nmod	_	_
11	Esperanto	Esperanto	PROPN	_	Case=Nom|Number=Sing	10	appos	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	Nur	nur	ADV	_	_	2	advmod	_	_
2	malgranda	malgranda	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	3	amod	_	_
3	procentaĵo	procentaĵo	NOUN	_	Case=Nom|Number=Sing	12	nsubj	_	_
4	el	el	ADP	_	_	5	case	_	_
5	tiuj	tiu	PRON	_	Case=Nom|Number=Plur|PronType=Dem	3	nmod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	_
7	kiuj	kiu	PRON	_	Case=Nom|Number=Plur|PronType=Rel	8	nsubj	_	_
8	studas	studi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	_
9	fremdan	fremda	ADJ	_	Case=Acc|Degree=Pos|Number=Sing	10	amod	_	_
10	lingvon	lingvo	NOUN	_	Case=Acc|Number=Sing	8	obj	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	ekmastras	ekmastri	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
13	ĝin	ĝi	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	12	obj	_	SpaceAfter=No
14	.	.	PUNCT	_	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 case	color:blue
1	Ni	ni	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	asertas	aserti	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	11	punct	_	_
4	ke	ke	SCONJ	_	_	11	mark	_	_
5	la	la	DET	_	Definite=Def|PronType=Art	6	det	_	_
6	vastaj	vasta	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	7	amod	_	_
7	potencodiferencoj	potencodiferenco	NOUN	_	Case=Nom|Number=Plur	11	nsubj	_	_
8	inter	inter	ADP	_	_	10	case	_	_
9	la	la	DET	_	Definite=Def|PronType=Art	10	det	_	_
10	lingvoj	lingvo	NOUN	_	Case=Nom|Number=Plur	7	nmod	_	_
11	subfosas	subfosi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
12	la	la	DET	_	Definite=Def|PronType=Art	13	det	_	_
13	garantiojn	garantio	NOUN	_	Case=Acc|Number=Plur	11	obj	_	_
14	esprimitajn	esprimi	VERB	_	Case=Acc|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Pass	13	acl	_	_
15	en	en	ADP	_	_	16	case	_	_
16	tiom	tiom	PRON	_	PronType=Emp	14	nmod	_	_
17	da	da	ADP	_	_	18	case	_	_
18	internaciaj	internacia	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	19	amod	_	_
19	dokumentoj	dokumento	NOUN	_	Case=Nom|Number=Plur	16	nmod	_	SpaceAfter=No
20	,	,	PUNCT	_	_	23	punct	_	_
21	de	de	ADP	_	_	22	case	_	_
22	egaleca	egaleca	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	23	amod	_	_
23	traktado	traktado	NOUN	_	Case=Nom|Number=Sing	13	nmod	_	_
24	sendistinge	sendistinge	ADV	_	_	22	advmod	_	_
25	pri	pri	ADP	_	_	27	case	_	_
26	la	la	DET	_	Definite=Def|PronType=Art	27	det	_	_
27	lingvo	lingvo	NOUN	_	Case=Nom|Number=Sing	23	nmod	_	SpaceAfter=No
28	.	.	PUNCT	_	_	2	punct	_	_

~~~


