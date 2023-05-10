---
layout: base
title:  'Statistics of nsubj:outer in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="sv_lines-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="sv_lines-dep-nsubj-pass.html">nsubj:pass</a></tt>.

7 nodes (0%) are attached to their parents as `nsubj:outer`.

7 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.71428571428571.

The following 3 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (5; 71% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (1; 14% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 nsubj:outer	color:blue
1	Nu	nu	ADV	_	_	2	advmod	_	_
2	utkämpar	utkämpa	VERB	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	vi	vi	PRON	PERS-P1PL-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	2	nsubj	_	_
4	en	en	DET	SG-IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	5	det	_	_
5	strid	strid	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obj	_	_
6	om	om	ADP	_	_	10	mark	_	_
7	vem	vem	PRON	WH-SG	Definite=Ind|Gender=Com|Number=Sing|PronType=Int	10	nsubj:outer	_	_
8	som	som	PRON	REL	PronType=Rel	10	nsubj	_	_
9	skall	skola	AUX	PRES-AUX	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	_	_
10	betala	betala	VERB	INF-ACT	VerbForm=Inf|Voice=Act	5	acl	_	_
11	den	den	PRON	PERS-P3SG	Definite=Def|Number=Plur|PronType=Prs	10	obj	_	SpaceAfter=No
12	.	.	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 nsubj:outer	color:blue
1	Där	där	ADV	_	_	2	advmod	_	_
2	ser	se	VERB	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	ni	ni	PRON	PERS-P2PL-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	_	_
4	vad	vad	PRON	WH-REL-SG	Definite=Ind|Gender=Neut|Number=Sing|PronType=Int	7	nsubj:outer	_	_
5	som	som	PRON	REL	PronType=Rel	7	nsubj	_	_
6	är	vara	AUX	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	möjligt	möjlig	ADJ	POS-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	2	ccomp	_	_
8	hos	hos	ADP	_	_	9	case	_	_
9	oss	vi	PRON	PERS-P1PL-ACC	Case=Acc|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	7	obl	_	SpaceAfter=No
10	!	!	PUNCT	ExclMark	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 1 nsubj:outer	color:blue
1	skillnaden	skillnad	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	20	nsubj:outer	_	_
2	är	vara	AUX	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	20	cop	_	_
3	bara	bara	ADV	_	_	20	advmod	_	_
4	att	att	SCONJ	_	_	20	mark	_	_
5	när	när	SCONJ	_	_	8	mark	_	_
6	en	en	DET	SG-IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	7	det	_	_
7	bomb	bomb	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	8	nsubj	_	_
8	exploderar	explodera	VERB	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	20	advcl	_	_
9	på	på	ADP	_	_	11	case	_	_
10	en	en	DET	SG-IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	11	det	_	_
11	restaurang	restaurang	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	8	obl	_	_
12	i	i	ADP	_	_	13	case	_	_
13	West	West	PROPN	SG-NOM	Case=Nom	11	nmod	_	_
14	End	End	PROPN	SG-NOM	Case=Nom	13	flat	_	_
15	är	vara	AUX	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	20	cop	_	_
16	det	den	PRON	EX-P3SG	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	20	expl	_	_
17	inte	inte	PART	NEG	_	20	advmod	_	_
18	Englands	England	PROPN	SG-GEN	Case=Gen	20	nmod:poss	_	_
19	fundamentala	fundamental	ADJ	POS-DEF	Case=Nom|Degree=Pos|Number=Plur	20	amod	_	_
20	rätt	rätt	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
21	att	att	PART	_	_	22	mark	_	_
22	existera	existera	VERB	INF-ACT	VerbForm=Inf|Voice=Act	20	acl	_	_
23	som	som	SCONJ	_	_	24	nsubj:pass	_	_
24	sätts	sätta	VERB	PRES-PASS	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	20	acl:cleft	_	_
25	i	i	ADP	_	_	26	case	_	_
26	fråga	fråga	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	24	obl	_	SpaceAfter=No
27	.	.	PUNCT	Period	_	20	punct	_	_

~~~


