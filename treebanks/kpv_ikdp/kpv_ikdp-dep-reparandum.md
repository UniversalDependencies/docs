---
layout: base
title:  'Statistics of reparandum in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `reparandum`

This relation is universal.

8 nodes (1%) are attached to their parents as `reparandum`.

8 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 7 pairs of parts of speech are connected with `reparandum`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (2; 25% instances), <tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt> (1; 13% instances), <tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (1; 13% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt> (1; 13% instances), <tt><a href="kpv_ikdp-pos-NUM.html">NUM</a></tt>-<tt><a href="kpv_ikdp-pos-DET.html">DET</a></tt> (1; 13% instances), <tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (1; 13% instances), <tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 9 reparandum	color:blue
1	Вот	вот	PART	Pcle	_	3	discourse	_	Lang=Rus
2	и	и	PART	Pcle	_	3	discourse	_	_
3	висьтоола	висьтооны	VERB	V	_	0	root	_	_
4	тай	тай	PART	Pcle	_	3	discourse	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	но	но	CCONJ	CC	_	9	cc	_	Lang=Mixed|SpaceAfter=No
7	,	,	PUNCT	CLB	_	8	punct	_	_
8	кодке	кодке	PRON	Pron	_	9	nsubj	_	_
9	висьт-	висьт-	VERB	V	_	15	reparandum	_	SpaceAfter=No
10	,	,	PUNCT	CLB	_	11	punct	_	_
11	Микул	Микул	PROPN	N	Case=Nom|Number=Sing	12	nmod	_	_
12	вок	вок	NOUN	N	Case=Nom|Number=Sing	15	nsubj	_	_
13	корке	корке	ADV	Adv	_	15	advmod	_	_
14	тай	тай	PART	Pcle	_	15	discourse	_	_
15	висьталэма	висьтавны	VERB	V	Evident=Nfh|Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	3	conj	_	SpaceAfter=No
16	:	:	PUNCT	CLB	_	17	punct	_	_
17	патриотка	патриотка	NOUN	N	_	15	appos	_	Lang=Mixed|SpaceAfter=No
18	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 reparandum	color:blue
1	Вто-	Вто-	ADJ	A	Case=Nom|Number=Sing	3	reparandum	_	Note=Check|SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	_
3	вторая	вторая	ADJ	A	Case=Nom|Number=Sing	4	nummod	_	Lang=Rus
4	бригада	бригада	NOUN	N	Case=Nom|Number=Sing	0	root	_	Lang=Rus
5	оленеводческая	оленеводческая	ADJ	A	Case=Nom|Number=Sing	4	amod	_	Lang=Rus|SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	висьтооны	висьтооны	VERB	V	VerbForm=Inf	11	mark	_	_
8	ке	ке	SCONJ	CS	_	7	discourse	_	SpaceAfter=No
9	,	,	PUNCT	CLB	_	10	punct	_	_
10	мӧдэд	мӧдэд	NUM	Num	Case=Prl|NumType=Card	11	nummod	_	_
11	бригада	бригада	NOUN	N	Case=Nom|Number=Sing	4	conj	_	Lang=Mixed|SpaceAfter=No
12	,	,	PUNCT	CLB	_	13	punct	_	_
13	да	да	PART	Pcle	_	11	discourse	_	Lang=Mixed|SpaceAfter=No
14	?	?	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 reparandum	color:blue
1	Он	оз	VERB	V	Mood=Ind|Person=2|Polarity=Neg|Tense=Pres|VerbForm=Fin	3	reparandum	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	_
3	он	оз	AUX	V	Mood=Ind|Person=2|Polarity=Neg|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	живносьсэ	живнось	NOUN	N	Case=Acc	5	obj	_	Lang=Mixed
5	сдайт	сдайтны	VERB	V	Connegative=Yes	0	root	_	Lang=Mixed|SpaceAfter=No
6	,	,	PUNCT	CLB	_	5	punct	_	_
7	но	но	CCONJ	CC	_	11	cc	_	Lang=Mixed
8	какой	какой	DET	Det	_	11	amod	_	Lang=Rus|SpaceAfter=No
9	-	-	PUNCT	CLB	_	8	goeswith	_	SpaceAfter=No
10	то	то	ADV	Adv	_	8	goeswith	_	Lang=Rus
11	процент	процент	NOUN	N	Case=Nom|Number=Sing	5	acl	_	Lang=Rus
12	там	там	ADV	Adv	_	11	advmod	_	Lang=Rus|SpaceAfter=No
13	,	,	PUNCT	CLB	_	12	punct	_	_
14	сколько	сколько	ADV	Adv	_	16	advmod	_	Lang=Rus
15	налог	налог	NOUN	N	Case=Nom|Number=Sing	16	obj	_	Lang=rus
16	сетасныс	сетны	VERB	V	Mood=Ind|Person=3|VerbForm=Fin	11	conj	_	_
17	мыйттэм	мыйтӧм	PRON	Pron	_	16	advmod	_	SpaceAfter=No
18	,	,	PUNCT	CLB	_	17	punct	_	_
19	сіе	сійӧ	PRON	Pron	Case=Acc|Person=3|PronType=Prs	21	obj	_	_
20	и	и	PART	Pcle	_	21	discourse	_	Lang=Mixed
21	сдайтан	сдайтны	VERB	V	Mood=Ind|Person=2|Tense=Pres|VerbForm=Fin	5	advcl	_	Lang=Mixed|SpaceAfter=No
22	.	.	PUNCT	CLB	_	21	punct	_	_

~~~


